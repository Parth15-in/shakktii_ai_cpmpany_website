'use client';

import { ReactNode, useEffect, useLayoutEffect, useRef } from 'react';
import Lenis from 'lenis';

/**
 * SmoothScroll Component
 * 
 * Provides a minimal, production-ready smooth scrolling experience using Lenis.
 * Optimized for Next.js App Router.
 */
export default function SmoothScroll({ children }: { children: ReactNode }) {
  const lenisRef = useRef<Lenis | null>(null);

  useEffect(() => {
    // Initialize Lenis with optimized settings
    const lenis = new Lenis({
      lerp: 0.07, 
      wheelMultiplier: 1,
      touchMultiplier: 1.5,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      infinite: false,
    });

    lenisRef.current = lenis;
    document.documentElement.classList.add('lenis');

    // requestAnimationFrame loop
    let rafId: number;
    
    function raf(time: number) {
      lenis.raf(time);
      rafId = requestAnimationFrame(raf);
    }

    rafId = requestAnimationFrame(raf);

    // Cleanup to prevent memory leaks and double RAF loops
    return () => {
      lenis.destroy();
      cancelAnimationFrame(rafId);
      document.documentElement.classList.remove('lenis');
    };
  }, []);

  return <>{children}</>;
}
