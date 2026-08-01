"use client";

import { useEffect, useRef } from "react";

type Node = { x: number; y: number; label: string; radius: number };

export function SyncGraph({ className }: { className?: string }) {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let raf = 0;
    let width = 0;
    let height = 0;
    const dpr = Math.min(window.devicePixelRatio || 1, 2);

    const resize = () => {
      const rect = canvas.getBoundingClientRect();
      width = rect.width;
      height = rect.height;
      canvas.width = width * dpr;
      canvas.height = height * dpr;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    };
    resize();
    window.addEventListener("resize", resize);

    const hub: Node = { x: 0, y: 0, label: "sync", radius: 5 };
    const peerCount = 6;
    const peers: Node[] = [];

    type Packet = { edge: number; t: number; speed: number };
    let packets: Packet[] = [];

    const layout = () => {
      hub.x = width / 2;
      hub.y = height / 2;
      peers.length = 0;
      const r = Math.min(width, height) * 0.42;
      for (let i = 0; i < peerCount; i++) {
        const angle = (i / peerCount) * Math.PI * 2 - Math.PI / 2;
        peers.push({
          x: hub.x + Math.cos(angle) * r,
          y: hub.y + Math.sin(angle) * r,
          label: `client_${i}`,
          radius: 3.5,
        });
      }
      packets = peers.map((_, i) => ({
        edge: i,
        t: Math.random(),
        speed: 0.0032 + Math.random() * 0.002,
      }));
    };
    layout();

    const ro = new ResizeObserver(() => {
      resize();
      layout();
    });
    ro.observe(canvas);

    const draw = () => {
      ctx.clearRect(0, 0, width, height);

      // Edges (subtle white/grey)
      ctx.lineWidth = 1;
      peers.forEach((p) => {
        ctx.strokeStyle = "rgba(255, 255, 255, 0.15)";
        ctx.beginPath();
        ctx.moveTo(hub.x, hub.y);
        ctx.lineTo(p.x, p.y);
        ctx.stroke();
      });

      // Packets (bright white/silver)
      packets.forEach((pkt) => {
        pkt.t += pkt.speed;
        if (pkt.t > 1) pkt.t = 0;
        const peer = peers[pkt.edge];
        const x = hub.x + (peer.x - hub.x) * pkt.t;
        const y = hub.y + (peer.y - hub.y) * pkt.t;
        const fade = Math.sin(pkt.t * Math.PI); 
        ctx.beginPath();
        ctx.fillStyle = `rgba(255, 255, 255, ${0.3 + fade * 0.7})`;
        ctx.arc(x, y, 2.2, 0, Math.PI * 2);
        ctx.fill();
      });

      // Peer nodes (true black fill, white stroke)
      peers.forEach((p) => {
        ctx.beginPath();
        ctx.fillStyle = "#000000";
        ctx.strokeStyle = "rgba(255, 255, 255, 0.6)";
        ctx.lineWidth = 1.2;
        ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
        ctx.fill();
        ctx.stroke();
      });

      // Hub node (pure white with crisp white glow)
      ctx.beginPath();
      ctx.fillStyle = "#ffffff";
      ctx.shadowColor = "rgba(255, 255, 255, 0.8)";
      ctx.shadowBlur = 14;
      ctx.arc(hub.x, hub.y, hub.radius, 0, Math.PI * 2);
      ctx.fill();
      ctx.shadowBlur = 0;

      raf = requestAnimationFrame(draw);
    };
    raf = requestAnimationFrame(draw);

    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("resize", resize);
      ro.disconnect();
    };
  }, []);

  return <canvas ref={canvasRef} className={className} aria-hidden="true" />;
}