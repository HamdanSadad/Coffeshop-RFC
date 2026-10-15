"use client";

import { useState, useEffect } from "react";

export function usePrefersReducedMotion() {
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false);

  useEffect(() => {
    const mediaQueryList = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    );

    // eslint-disable-next-line react-hooks/rules-of-hooks
    setPrefersReducedMotion(mediaQueryList.matches);

    const listener = (event: MediaQueryListEvent) => {
      setPrefersReducedMotion(event.matches);
    };

    mediaQueryList.addEventListener("change", listener);
    return () => {
      mediaQueryList.removeEventListener("change", listener);
    };
  }, []);

  return prefersReducedMotion;
}
