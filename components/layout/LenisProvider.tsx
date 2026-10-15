"use client";

import { ReactLenis } from "lenis/react";
import { usePrefersReducedMotion } from "@/hooks/usePrefersReducedMotion";

export default function LenisProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const prefersReducedMotion = usePrefersReducedMotion();

  return (
    <ReactLenis
      root
      options={{
        lerp: 0.1,
        duration: 1.2,
        smoothWheel: !prefersReducedMotion,
      }}
    >
      {children}
    </ReactLenis>
  );
}
