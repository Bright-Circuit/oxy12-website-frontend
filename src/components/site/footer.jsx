"use client";

import Link from "next/link";
import { ArrowUp, Github, Instagram, Linkedin, Twitter } from "lucide-react";
import { Logo } from "./logo.jsx";

const linkSections = [
  {
    heading: "Navigate",
    links: [
      { href: "/about", label: "About" },
      { href: "/services", label: "Services" },
      { href: "/portfolio", label: "Portfolio" },
      { href: "/contact", label: "Contact" },
    ],
  },
  {
    heading: "Services",
    links: [
      { href: "/services", label: "Website Development" },
      { href: "/services", label: "Custom Software" },
      { href: "/services", label: "UI/UX Design" },
      { href: "/services", label: "E-Commerce" },
      { href: "/services", label: "POS Systems" },
      { href: "/services", label: "ERP Systems" },
    ],
  },
];

export function Footer() {
  return (
    <footer className="relative mt-16 overflow-hidden border-t border-white/5 bg-navy-deep">
      <div className="pointer-events-none absolute inset-x-0 -top-40 h-80 mesh-bg opacity-60" />

      <div className="border-y border-white/5 py-6">
        <div className="flex animate-marquee gap-12 whitespace-nowrap font-display text-5xl font-bold uppercase tracking-tighter md:text-7xl">
          {Array.from({ length: 2 }).map((_, index) => (
            <div key={index} className="flex shrink-0 gap-12">
              <span className="text-foreground/90">Engineered in Sri Lanka</span>
              <span className="text-ember">✦</span>
              <span className="text-foreground/40">Building Digital Advantages</span>
              <span className="text-ember">✦</span>
              <span className="text-foreground/90">Since 2017</span>
              <span className="text-ember">✦</span>
            </div>
          ))}
        </div>
      </div>

      <div className="mx-auto max-w-7xl px-6 py-20">
        <div className="grid grid-cols-1 gap-16 md:grid-cols-12">
          <div className="md:col-span-5">
            <Logo />
            <p className="mt-6 max-w-sm text-sm leading-relaxed text-muted-foreground">
              OXY12 is a premium software studio designing digital products and platforms for visionary brands and enterprises.
            </p>
            <div className="mt-8 space-y-2 text-sm">
              <p className="font-mono text-xs uppercase tracking-[0.2em] text-muted-foreground">Contact</p>
              <a href="tel:+94711950429" className="block font-display text-xl text-foreground hover:text-ember">
                +94 71 195 0429
              </a>
              <a href="mailto:info@oxy12.com" className="block font-display text-xl text-foreground hover:text-ember">
                info@oxy12.com
              </a>
            </div>
          </div>

          {linkSections.map((section) => (
            <div key={section.heading} className="md:col-span-3">
              <h6 className="mb-6 font-mono text-xs uppercase tracking-[0.2em] text-muted-foreground">{section.heading}</h6>
              <ul className="space-y-3 text-sm">
                {section.links.map((link) => (
                  <li key={`${section.heading}-${link.label}`}>
                    <Link href={link.href} className="text-foreground/80 transition-colors hover:text-ember">
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          <div className="md:col-span-1">
            <h6 className="mb-6 font-mono text-xs uppercase tracking-[0.2em] text-muted-foreground">Social</h6>
            <div className="flex flex-wrap gap-3">
              {[Twitter, Linkedin, Github, Instagram].map((Icon, index) => (
                <a
                  key={index}
                  href="#"
                  className="grid size-10 place-items-center rounded-full border border-white/10 transition-all hover:border-ember hover:bg-ember/10 hover:text-ember"
                  aria-label="Social"
                >
                  <Icon className="size-4" />
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-16 flex flex-col items-start justify-between gap-6 border-t border-white/5 pt-8 md:flex-row md:items-center">
          <p className="font-mono text-xs uppercase tracking-[0.2em] text-muted-foreground">
            © {new Date().getFullYear()} OXY12 - All Rights Reserved
          </p>
          <button
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            className="group inline-flex items-center gap-3 rounded-full border border-white/10 px-5 py-3 text-xs font-mono uppercase tracking-[0.2em] transition-all hover:border-ember hover:text-ember"
          >
            Back to top
            <ArrowUp className="size-3 transition-transform group-hover:-translate-y-1" />
          </button>
        </div>
      </div>
    </footer>
  );
}
