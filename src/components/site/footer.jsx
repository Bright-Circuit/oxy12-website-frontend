"use client";

import Link from "next/link";
import { ArrowUp, FacebookIcon, Instagram } from "lucide-react";
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

const socialLinks = [
  {
    href: "https://www.facebook.com/profile.php?id=61579526365449",
    label: "Facebook",
    Icon: FacebookIcon,
  },
  {
    href: "https://www.instagram.com/oxy2welve",
    label: "Instagram",
    Icon: Instagram,
  },
  {
    href: "https://www.tiktok.com/@oxy2welve?_r=1&_t=ZS-977LedCvcWN",
    label: "TikTok",
    Icon: TikTokIcon,
  },
];

const marqueeItems = ["Engineered in Sri Lanka", "Building Digital Advantages", "Since 2025"];

function TikTokIcon(props) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" {...props}>
      <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.12v12.18a2.64 2.64 0 1 1-2.64-2.64c.22 0 .43.02.64.08V8.44a5.76 5.76 0 0 0-.64-.04A5.77 5.77 0 1 0 15.82 14V7.73a7.9 7.9 0 0 0 4.63 1.49V6.11c-.3 0-.59-.03-.86-.09Z" />
    </svg>
  );
}

function MarqueeSet({ hidden = false }) {
  return (
    <div aria-hidden={hidden} className="flex shrink-0 items-center gap-12 pr-12">
      {marqueeItems.map((item) => (
        <div key={`${hidden ? "copy" : "main"}-${item}`} className="flex shrink-0 items-center gap-12">
          <span className={item === "Building Digital Advantages" ? "text-foreground/40" : "text-foreground/90"}>{item}</span>
          <span className="text-ember">✦</span>
        </div>
      ))}
    </div>
  );
}

export function Footer() {
  return (
    <footer className="relative mt-16 overflow-hidden border-t border-white/5 bg-navy-deep">
      <div className="pointer-events-none absolute inset-x-0 -top-40 h-80 mesh-bg opacity-60" />

      <div className="overflow-hidden border-y border-white/5 py-6">
        <div className="flex min-w-max animate-marquee whitespace-nowrap font-display text-5xl font-bold uppercase tracking-tighter will-change-transform md:text-7xl">
          <MarqueeSet />
          <MarqueeSet hidden />
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
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="grid size-10 place-items-center rounded-full border border-white/10 transition-all hover:border-ember hover:bg-ember/10 hover:text-ember"
                  aria-label={social.label}
                >
                  <social.Icon className="size-4" />
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-16 flex flex-col items-start justify-between gap-6 border-t border-white/5 pt-8 md:flex-row md:items-center">
          <p className="font-mono text-xs uppercase tracking-[0.2em] text-muted-foreground">
            Copyright {new Date().getFullYear()} OXY12 - All Rights Reserved
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
