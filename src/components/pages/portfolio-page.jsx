"use client";

import { useState } from "react";
import { ContactCta } from "@/components/sections/contact-cta.jsx";
import { ProjectCard, projects } from "@/components/sections/portfolio.jsx";
import { Reveal } from "@/components/site/reveal.jsx";
import { SectionLabel } from "@/components/site/section-label.jsx";

const filters = ["All", "Websites", "E-Commerce"];

export function PortfolioPageView() {
  const [active, setActive] = useState("All");
  const filtered = active === "All" ? projects : projects.filter((project) => project.tag === active);

  return (
    <>
      <section className="relative px-6 pb-16 pt-40 md:pt-48">
        <div className="pointer-events-none absolute inset-0 mesh-bg opacity-50" />
        <div className="relative mx-auto max-w-7xl">
          <Reveal>
            <SectionLabel index="01" label="Selected Client Work" />
          </Reveal>
          <Reveal delay={0.1}>
            <h1 className="text-balance max-w-5xl font-display text-5xl font-extrabold leading-[0.95] tracking-tighter md:text-8xl">
              Websites and software built for <span className="text-ember">real organizations.</span>
            </h1>
          </Reveal>
          <Reveal delay={0.2}>
            <p className="mt-10 max-w-3xl text-base leading-relaxed text-muted-foreground md:text-lg">
              Explore completed OXY12 projects across education, food retail, aquariums, fashion, beverages, and local
              delivery. Each case summary explains the client need, what we built, the main features, the known technology,
              and the practical outcome. Select a project to open its live website in a new tab.
            </p>
          </Reveal>
        </div>
      </section>

      <section className="px-6 pb-24">
        <div className="mx-auto max-w-7xl">
          <div className="mb-12 flex flex-wrap gap-2 border-b border-white/10 pb-6">
            {filters.map((filter) => (
              <button
                key={filter}
                onClick={() => setActive(filter)}
                className={`rounded-full px-4 py-2 font-mono text-xs uppercase tracking-[0.2em] transition-all ${
                  active === filter
                    ? "bg-ember text-primary-foreground"
                    : "border border-white/10 text-muted-foreground hover:text-foreground"
                }`}
              >
                {filter}
              </button>
            ))}
          </div>

          {filtered.length === 0 ? (
            <p className="py-24 text-center text-muted-foreground">No projects in this category yet.</p>
          ) : (
            <div className="grid grid-cols-1 gap-12 md:grid-cols-2">
              {filtered.map((project, index) => (
                <ProjectCard key={project.name} project={project} offset={index % 2 === 1} detailed />
              ))}
            </div>
          )}
        </div>
      </section>

      <ContactCta />
    </>
  );
}
