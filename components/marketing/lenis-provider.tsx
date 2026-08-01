"use client";

// @ts-ignore - Bypassing missing type declarations for this specific library version
import { ReactLenis, useLenis } from "@studio-freight/react-lenis";
import { useRef, createContext, useContext, ReactNode } from "react";

const ScrollProgressContext = createContext<React.MutableRefObject<number> | null>(
  null
);

export function useScrollProgressRef() {
  const ctx = useContext(ScrollProgressContext);
  if (!ctx) {
    throw new Error("useScrollProgressRef must be used within LenisProvider");
  }
  return ctx;
}

function ScrollTracker({
  scrollRef,
}: {
  scrollRef: React.MutableRefObject<number>;
}) {
  // Explicitly typing 'any' to satisfy TypeScript's strict mode
  useLenis(({ scroll, limit }: any) => {
    scrollRef.current = limit > 0 ? scroll / limit : 0;
  });
  return null;
}

export default function LenisProvider({ children }: { children: ReactNode }) {
  const scrollRef = useRef(0);

  return (
    <ScrollProgressContext.Provider value={scrollRef}>
      <ReactLenis
        root
        options={{
          lerp: 0.1,
          duration: 1.2,
          smoothWheel: true,
          syncTouch: false,
        }}
      >
        <ScrollTracker scrollRef={scrollRef} />
        {children}
      </ReactLenis>
    </ScrollProgressContext.Provider>
  );
}