"use client";

import { MutableRefObject } from "react";

interface HeroSceneProps {
  scrollRef?: MutableRefObject<number>;
}

export default function HeroScene({ scrollRef }: HeroSceneProps) {
  return (
    <div className="absolute inset-0 z-0 bg-transparent">
      {/* 3D WebGL Canvas goes here */}
    </div>
  );
}