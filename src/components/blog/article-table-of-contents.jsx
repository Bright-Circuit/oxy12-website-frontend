"use client";

import { useEffect, useState } from "react";

const ACTIVE_OFFSET = 160;

export function ArticleTableOfContents({ sections }) {
  const [activeSection, setActiveSection] = useState(sections[0]?.id ?? "");

  useEffect(() => {
    const sectionElements = sections
      .map((section) => document.getElementById(section.id))
      .filter(Boolean);

    if (sectionElements.length === 0) return undefined;

    let animationFrame = null;

    const updateActiveSection = () => {
      animationFrame = null;

      const pageBottomReached =
        window.scrollY + window.innerHeight >=
        document.documentElement.scrollHeight - 8;

      let currentSection = sectionElements[0].id;

      if (pageBottomReached) {
        currentSection = sectionElements.at(-1).id;
      } else {
        for (const section of sectionElements) {
          if (section.getBoundingClientRect().top <= ACTIVE_OFFSET) {
            currentSection = section.id;
          } else {
            break;
          }
        }
      }

      setActiveSection((previousSection) =>
        previousSection === currentSection ? previousSection : currentSection,
      );
    };

    const requestUpdate = () => {
      if (animationFrame === null) {
        animationFrame = window.requestAnimationFrame(updateActiveSection);
      }
    };

    updateActiveSection();
    window.addEventListener("scroll", requestUpdate, { passive: true });
    window.addEventListener("resize", requestUpdate);
    window.addEventListener("hashchange", requestUpdate);

    return () => {
      window.removeEventListener("scroll", requestUpdate);
      window.removeEventListener("resize", requestUpdate);
      window.removeEventListener("hashchange", requestUpdate);

      if (animationFrame !== null) {
        window.cancelAnimationFrame(animationFrame);
      }
    };
  }, [sections]);

  return (
    <nav
      aria-label="Article contents"
      className="rounded-2xl border border-white/10 bg-navy-light/35 p-5"
    >
      <p className="font-mono text-[0.68rem] uppercase tracking-[0.2em] text-ember">
        In this guide
      </p>
      <ol className="mt-4 space-y-3 text-sm leading-6">
        {sections.map((section) => {
          const isActive = section.id === activeSection;

          return (
            <li key={section.id}>
              <a
                href={`#${section.id}`}
                aria-current={isActive ? "location" : undefined}
                onClick={() => setActiveSection(section.id)}
                className={`block border-l pl-3 transition-colors ${
                  isActive
                    ? "border-ember text-ember"
                    : "border-transparent text-muted-foreground hover:border-white/25 hover:text-foreground"
                }`}
              >
                {section.title}
              </a>
            </li>
          );
        })}
      </ol>
    </nav>
  );
}
