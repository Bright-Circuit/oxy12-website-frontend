"use client";

import Link from "next/link";
import { useRef } from "react";

export function MagneticButton({ variant = "primary", children, className = "", href, type = "button", ...rest }) {
  const innerRef = useRef(null);
  const rectRef = useRef(null);

  const handleEnter = () => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    rectRef.current = innerRef.current?.getBoundingClientRect() ?? null;
  };

  const handleMove = (event) => {
    const element = innerRef.current;
    const rect = rectRef.current;
    if (!element || !rect) return;
    const x = event.clientX - rect.left - rect.width / 2;
    const y = event.clientY - rect.top - rect.height / 2;
    element.style.transform = `translate(${x * 0.25}px, ${y * 0.35}px)`;
  };

  const handleLeave = () => {
    const element = innerRef.current;
    rectRef.current = null;
    if (!element) return;
    element.style.transform = "translate(0,0)";
  };

  const base =
    "relative inline-flex items-center justify-center rounded-full px-8 py-4 text-sm font-semibold tracking-wide transition-colors duration-300 will-change-transform";
  const styles =
    variant === "primary"
      ? "bg-ember text-primary-foreground ember-glow hover:bg-ember-glow"
      : "glass text-foreground hover:bg-white/10";

  return (
    <span onMouseEnter={handleEnter} onMouseMove={handleMove} onMouseLeave={handleLeave} className="inline-block">
      {href ? (
        <Link
          ref={innerRef}
          href={href}
          className={`${base} ${styles} ${className} active:scale-[0.97]`}
          style={{ transition: "transform 0.4s cubic-bezier(0.16, 1, 0.3, 1), background-color 0.3s" }}
          {...rest}
        >
          {children}
        </Link>
      ) : (
        <button
          ref={innerRef}
          type={type}
          className={`${base} ${styles} ${className} active:scale-[0.97]`}
          style={{ transition: "transform 0.4s cubic-bezier(0.16, 1, 0.3, 1), background-color 0.3s" }}
          {...rest}
        >
          {children}
        </button>
      )}
    </span>
  );
}
