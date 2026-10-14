"use client";

import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { Menu, X } from "lucide-react";
import { Logo } from "./logo.jsx";
import { MagneticButton } from "./magnetic-button.jsx";

const items = [
  { href: "/about", label: "About" },
  { href: "/services", label: "Services" },
  { href: "/portfolio", label: "Portfolio" },
  { href: "/blog", label: "Blog" },
  { href: "/contact", label: "Contact Us" },
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const menuTriggerRef = useRef(null);
  const closeButtonRef = useRef(null);
  const mobileMenuRef = useRef(null);
  const wasOpenRef = useRef(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 30);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  useEffect(() => {
    if (open) {
      closeButtonRef.current?.focus();
    } else if (wasOpenRef.current) {
      menuTriggerRef.current?.focus();
    }
    wasOpenRef.current = open;
  }, [open]);

  useEffect(() => {
    if (!open) return undefined;

    const onKeyDown = (event) => {
      if (event.key === "Escape") {
        setOpen(false);
        return;
      }

      if (event.key === "Tab") {
        const focusable = mobileMenuRef.current?.querySelectorAll(
          'a[href], button:not([disabled]), input:not([disabled]), select:not([disabled]), textarea:not([disabled]), [tabindex]:not([tabindex="-1"])',
        );
        if (!focusable?.length) return;

        const first = focusable[0];
        const last = focusable[focusable.length - 1];

        if (event.shiftKey && document.activeElement === first) {
          event.preventDefault();
          last.focus();
        } else if (!event.shiftKey && document.activeElement === last) {
          event.preventDefault();
          first.focus();
        }
      }
    };

    document.addEventListener("keydown", onKeyDown);
    return () => document.removeEventListener("keydown", onKeyDown);
  }, [open]);

  return (
    <>
      <header className="fixed inset-x-0 top-0 z-50 px-4 pt-4 md:px-6 md:pt-6">
        <div
          className={`mx-auto flex max-w-7xl items-center justify-between rounded-full px-5 py-3 transition-all duration-500 md:px-7 ${
            scrolled ? "glass shadow-2xl shadow-black/30" : "bg-transparent"
          }`}
        >
          <Logo preload />
          <nav aria-label="Primary navigation" className="hidden items-center gap-10 md:flex">
            {items.map((item) => (
              item.external ? (
                <a
                  key={item.href}
                  href={item.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`${item.label} (opens in a new tab)`}
                  className="group relative text-sm font-medium text-foreground/80 transition-colors hover:text-foreground"
                >
                  <span>{item.label}</span>
                  <span className="absolute -bottom-1 left-0 h-px w-full origin-right scale-x-0 bg-ember transition-transform duration-500 ease-out group-hover:origin-left group-hover:scale-x-100" />
                </a>
              ) : (
                <Link
                  key={item.href}
                  href={item.href}
                  className="group relative text-sm font-medium text-foreground/80 transition-colors hover:text-foreground"
                >
                  <span>{item.label}</span>
                  <span className="absolute -bottom-1 left-0 h-px w-full origin-right scale-x-0 bg-ember transition-transform duration-500 ease-out group-hover:origin-left group-hover:scale-x-100" />
                </Link>
              )
            ))}
          </nav>
          <div className="hidden md:block">
            <MagneticButton href="/contact" variant="primary" className="px-6 py-3 text-xs uppercase tracking-widest">
              Start Project
            </MagneticButton>
          </div>
          <button
            ref={menuTriggerRef}
            type="button"
            onClick={() => setOpen(true)}
            className="grid size-10 place-items-center rounded-full glass md:hidden"
            aria-label="Open menu"
            aria-expanded={open}
            aria-controls="mobile-navigation"
          >
            <Menu className="size-5" aria-hidden="true" />
          </button>
        </div>
      </header>

      <div
        ref={mobileMenuRef}
        id="mobile-navigation"
        aria-hidden={!open}
        inert={!open ? true : undefined}
        className={`fixed inset-0 z-[60] mesh-bg bg-navy-deep transition-opacity duration-500 md:hidden ${
          open ? "pointer-events-auto opacity-100" : "pointer-events-none opacity-0"
        }`}
      >
        <div className="flex items-center justify-between px-4 pt-4">
          <Logo />
          <button
            ref={closeButtonRef}
            type="button"
            onClick={() => setOpen(false)}
            className="grid size-10 place-items-center rounded-full glass"
            aria-label="Close menu"
          >
            <X className="size-5" aria-hidden="true" />
          </button>
        </div>
        <nav aria-label="Mobile primary navigation" className="flex h-[calc(100vh-80px)] flex-col items-start justify-center gap-6 px-8">
          {items.map((item, index) => (
            item.external ? (
              <a
                key={item.href}
                href={item.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`${item.label} (opens in a new tab)`}
                onClick={() => setOpen(false)}
                className="font-display text-5xl font-bold tracking-tight transition-colors hover:text-ember"
                style={{
                  transform: open ? "translateY(0)" : "translateY(20px)",
                  opacity: open ? 1 : 0,
                  transition: `transform 0.6s cubic-bezier(0.16,1,0.3,1) ${index * 0.07 + 0.1}s, opacity 0.5s ${index * 0.07 + 0.1}s`,
                }}
              >
                {item.label}
              </a>
            ) : (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setOpen(false)}
                className="font-display text-5xl font-bold tracking-tight transition-colors hover:text-ember"
                style={{
                  transform: open ? "translateY(0)" : "translateY(20px)",
                  opacity: open ? 1 : 0,
                  transition: `transform 0.6s cubic-bezier(0.16,1,0.3,1) ${index * 0.07 + 0.1}s, opacity 0.5s ${index * 0.07 + 0.1}s`,
                }}
              >
                {item.label}
              </Link>
            )
          ))}
        </nav>
      </div>
    </>
  );
}
