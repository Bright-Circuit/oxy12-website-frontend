"use client";

import { useEffect, useRef, useState } from "react";

export function Cursor() {
  const dotRef = useRef(null);
  const ringRef = useRef(null);
  const hoverRef = useRef(false);
  const [hover, setHover] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    if (typeof window === "undefined") return undefined;
    if (
      window.matchMedia("(pointer: coarse)").matches ||
      window.matchMedia("(prefers-reduced-motion: reduce)").matches
    ) {
      return undefined;
    }

    const mountFrame = requestAnimationFrame(() => setMounted(true));

    const pos = { x: window.innerWidth / 2, y: window.innerHeight / 2 };
    const ring = { x: pos.x, y: pos.y };

    let raf = 0;

    const loop = () => {
      const deltaX = pos.x - ring.x;
      const deltaY = pos.y - ring.y;

      ring.x += deltaX * 0.18;
      ring.y += deltaY * 0.18;

      if (ringRef.current) {
        ringRef.current.style.transform = `translate3d(${ring.x}px, ${ring.y}px, 0) translate(-50%, -50%)`;
      }

      if (Math.abs(deltaX) > 0.1 || Math.abs(deltaY) > 0.1) {
        raf = requestAnimationFrame(loop);
      } else {
        ring.x = pos.x;
        ring.y = pos.y;
        raf = 0;
      }
    };

    const startLoop = () => {
      if (!raf && !document.hidden) raf = requestAnimationFrame(loop);
    };

    const move = (event) => {
      pos.x = event.clientX;
      pos.y = event.clientY;

      if (dotRef.current) {
        dotRef.current.style.transform = `translate3d(${pos.x}px, ${pos.y}px, 0) translate(-50%, -50%)`;
      }

      const target = event.target;
      const nextHover = Boolean(
        target?.closest?.("a, button, [data-cursor='hover']"),
      );
      if (nextHover !== hoverRef.current) {
        hoverRef.current = nextHover;
        setHover(nextHover);
      }
      startLoop();
    };

    const handleVisibilityChange = () => {
      if (document.hidden) {
        cancelAnimationFrame(raf);
        raf = 0;
      } else {
        startLoop();
      }
    };

    startLoop();
    window.addEventListener("mousemove", move);
    document.addEventListener("visibilitychange", handleVisibilityChange);

    return () => {
      cancelAnimationFrame(mountFrame);
      cancelAnimationFrame(raf);
      window.removeEventListener("mousemove", move);
      document.removeEventListener("visibilitychange", handleVisibilityChange);
    };
  }, []);

  if (!mounted) return null;

  return (
    <>
      <div
        ref={dotRef}
        className="pointer-events-none fixed left-0 top-0 z-[100] size-1.5 rounded-full bg-ember mix-blend-screen"
        style={{ transition: "width 0.2s, height 0.2s" }}
      />
      <div
        ref={ringRef}
        className="pointer-events-none fixed left-0 top-0 z-[100] rounded-full border border-ember/60 mix-blend-screen transition-[width,height,opacity] duration-200"
        style={{
          width: hover ? 56 : 32,
          height: hover ? 56 : 32,
          opacity: hover ? 1 : 0.6,
        }}
      />
    </>
  );
}
