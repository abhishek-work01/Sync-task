"use client";

import { useRef, useMemo } from "react";
import { Canvas, useFrame, useThree } from "@react-three/fiber";
import * as THREE from "three";

/* ------------------------------------------------------------------ */
/*  Simplex noise (Ashima Arts, MIT) — inlined so there's no extra dep */
/* ------------------------------------------------------------------ */
const NOISE_GLSL = /* glsl */ `
vec3 mod289(vec3 x){return x-floor(x*(1.0/289.0))*289.0;}
vec4 mod289(vec4 x){return x-floor(x*(1.0/289.0))*289.0;}
vec4 permute(vec4 x){return mod289(((x*34.0)+1.0)*x);}
vec4 taylorInvSqrt(vec4 r){return 1.79284291400159-0.85373472095314*r;}
float snoise(vec3 v){
  const vec2 C=vec2(1.0/6.0,1.0/3.0);
  const vec4 D=vec4(0.0,0.5,1.0,2.0);
  vec3 i=floor(v+dot(v,C.yyy));
  vec3 x0=v-i+dot(i,C.xxx);
  vec3 g=step(x0.yzx,x0.xyz);
  vec3 l=1.0-g;
  vec3 i1=min(g.xyz,l.zxy);
  vec3 i2=max(g.xyz,l.zxy);
  vec3 x1=x0-i1+C.xxx;
  vec3 x2=x0-i2+C.yyy;
  vec3 x3=x0-D.yyy;
  i=mod289(i);
  vec4 p=permute(permute(permute(
      i.z+vec4(0.0,i1.z,i2.z,1.0))
    + i.y+vec4(0.0,i1.y,i2.y,1.0))
    + i.x+vec4(0.0,i1.x,i2.x,1.0));
  float n_=0.142857142857;
  vec3 ns=n_*D.wyz-D.xzx;
  vec4 j=p-49.0*floor(p*ns.z*ns.z);
  vec4 x_=floor(j*ns.z);
  vec4 y_=floor(j-7.0*x_);
  vec4 x=x_*ns.x+ns.yyyy;
  vec4 y=y_*ns.x+ns.yyyy;
  vec4 h=1.0-abs(x)-abs(y);
  vec4 b0=vec4(x.xy,y.xy);
  vec4 b1=vec4(x.zw,y.zw);
  vec4 s0=floor(b0)*2.0+1.0;
  vec4 s1=floor(b1)*2.0+1.0;
  vec4 sh=-step(h,vec4(0.0));
  vec4 a0=b0.xzyw+s0.xzyw*sh.xxyy;
  vec4 a1=b1.xzyw+s1.xzyw*sh.zzww;
  vec3 p0=vec3(a0.xy,h.x);
  vec3 p1=vec3(a0.zw,h.y);
  vec3 p2=vec3(a1.xy,h.z);
  vec3 p3=vec3(a1.zw,h.w);
  vec4 norm=taylorInvSqrt(vec4(dot(p0,p0),dot(p1,p1),dot(p2,p2),dot(p3,p3)));
  p0*=norm.x; p1*=norm.y; p2*=norm.z; p3*=norm.w;
  vec4 m=max(0.6-vec4(dot(x0,x0),dot(x1,x1),dot(x2,x2),dot(x3,x3)),0.0);
  m=m*m;
  return 42.0*dot(m*m,vec4(dot(p0,x0),dot(p1,x1),dot(p2,x2),dot(p3,x3)));
}
`;

const VERTEX_SHADER = /* glsl */ `
  uniform float uTime;
  uniform float uScroll;
  uniform vec2 uMouse;
  varying float vElevation;
  varying vec2 vUv;
  ${NOISE_GLSL}
  void main(){
    vUv = uv;
    vec3 pos = position;
    float freq = 0.55;
    float amp = 0.9;
    float n = snoise(vec3(pos.x * freq, pos.y * freq, uTime * 0.06 + uScroll * 0.4));
    float n2 = snoise(vec3(pos.x * freq * 2.0 + 10.0, pos.y * freq * 2.0, uTime * 0.09));
    float elevation = n * amp + n2 * 0.25;
    float mouseInfluence = smoothstep(1.2, 0.0, distance(uv, uMouse * 0.5 + 0.5));
    elevation += mouseInfluence * 0.35;
    pos.z += elevation;
    vElevation = elevation;
    gl_Position = projectionMatrix * modelViewMatrix * vec4(pos, 1.0);
  }
`;

const FRAGMENT_SHADER = /* glsl */ `
  uniform float uTime;
  varying float vElevation;
  varying vec2 vUv;
  void main(){
    // Monochromatic / Silver palette
    vec3 deep   = vec3(0.01, 0.01, 0.01); // True dark/OLED black
    vec3 mid    = vec3(0.12, 0.12, 0.12); // Dark grey base
    vec3 silver = vec3(0.45, 0.45, 0.45); // Bright silver highlights
    vec3 glow   = vec3(0.90, 0.90, 0.90); // Crisp white rim lighting

    float t = smoothstep(-0.6, 0.9, vElevation);
    vec3 color = mix(deep, mid, t);
    color = mix(color, silver, smoothstep(0.35, 0.95, t));

    float rim = smoothstep(0.55, 1.0, vElevation);
    color += glow * rim * 0.55;

    float vignette = smoothstep(0.95, 0.15, distance(vUv, vec2(0.5)));
    color *= mix(0.35, 1.0, vignette);

    gl_FragColor = vec4(color, 1.0);
  }
`;

function FluidPlane({ scrollRef }: { scrollRef: React.MutableRefObject<number> }) {
  const materialRef = useRef<THREE.ShaderMaterial>(null);
  const { viewport, pointer } = useThree();

  const uniforms = useMemo(
    () => ({
      uTime: { value: 0 },
      uScroll: { value: 0 },
      uMouse: { value: new THREE.Vector2(0, 0) },
    }),
    []
  );

  useFrame((state) => {
    if (!materialRef.current) return;
    materialRef.current.uniforms.uTime.value = state.clock.elapsedTime;
    materialRef.current.uniforms.uScroll.value = scrollRef.current;
    materialRef.current.uniforms.uMouse.value.lerp(
      new THREE.Vector2(pointer.x, pointer.y),
      0.04
    );
  });

  return (
    <mesh rotation={[-0.55, 0, 0]} position={[0, -0.6, 0]}>
      <planeGeometry args={[viewport.width * 1.8, viewport.height * 1.8, 140, 140]} />
      <shaderMaterial
        ref={materialRef}
        uniforms={uniforms}
        vertexShader={VERTEX_SHADER}
        fragmentShader={FRAGMENT_SHADER}
        wireframe={false}
      />
    </mesh>
  );
}

function ParticleField({ scrollRef }: { scrollRef: React.MutableRefObject<number> }) {
  const pointsRef = useRef<THREE.Points>(null);
  const count = 700;

  const positions = useMemo(() => {
    const arr = new Float32Array(count * 3);
    for (let i = 0; i < count; i++) {
      arr[i * 3] = (Math.random() - 0.5) * 14;
      arr[i * 3 + 1] = (Math.random() - 0.5) * 8;
      arr[i * 3 + 2] = (Math.random() - 0.5) * 10 - 2;
    }
    return arr;
  }, []);

  useFrame((state) => {
    if (!pointsRef.current) return;
    pointsRef.current.rotation.y = state.clock.elapsedTime * 0.015;
    pointsRef.current.position.y =
      -scrollRef.current * 1.4 + Math.sin(state.clock.elapsedTime * 0.15) * 0.15;
  });

  return (
    <points ref={pointsRef}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          count={count}
          array={positions}
          itemSize={3}
        />
      </bufferGeometry>
      <pointsMaterial
        size={0.014}
        color="#ffffff"
        transparent
        opacity={0.55}
        depthWrite={false}
        blending={THREE.AdditiveBlending}
        sizeAttenuation
      />
    </points>
  );
}

/**
 * Fixed, full-viewport WebGL background.
 * `scrollRef` is a ref (0..1-ish, unbounded) updated by the Lenis provider —
 * pass scroll progress in from outside so we don't re-render React on scroll.
 */
export default function HeroScene({
  scrollRef,
}: {
  scrollRef: React.MutableRefObject<number>;
}) {
  return (
    <div className="pointer-events-none fixed inset-0 z-0 h-screen w-screen">
      <Canvas
        dpr={[1, 1.75]}
        gl={{ antialias: true, alpha: false, powerPreference: "high-performance" }}
        camera={{ position: [0, 0.4, 4.2], fov: 45 }}
      >
        <color attach="background" args={["#000000"]} />
        <fog attach="fog" args={["#000000", 4, 11]} />
        <FluidPlane scrollRef={scrollRef} />
        <ParticleField scrollRef={scrollRef} />
      </Canvas>
    </div>
  );
}