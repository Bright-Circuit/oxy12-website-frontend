import Image from "next/image";
import { ArrowUpRight } from "lucide-react";
import northspireProjectImage from "@/assets/projects/project-northspire.png";
import lamoreProjectImage from "@/assets/projects/project-lamore.png";
import invoizaProjectImage from "@/assets/projects/project-invoiza.png";
import shwomensProjectImage from "@/assets/projects/project-shwomens.png";
import luxoraProjectImage from "@/assets/projects/project-luxora.png";
import { Reveal } from "@/components/site/reveal.jsx";
import { SectionLabel } from "@/components/site/section-label.jsx";

export const projects = [
  {
    name: "Northspire Education",
    category: "LMS · Web Platform",
    year: "2025",
    href: "https://northspireedu.com/",
    tag: "Websites",
    image: northspireProjectImage,
    gradient: "from-amber-500/40 via-orange-600/30 to-rose-700/30",
  },
  {
    name: "Lamore Fashion",
    category: "E-Commerce · Luxury",
    year: "2025",
    href: "https://lamore.bcircuit.com/",
    tag: "E-Commerce",
    image: lamoreProjectImage,
    gradient: "from-emerald-500/30 via-teal-700/30 to-indigo-800/40",
  },
  {
    name: "Invoiza",
    category: "SaaS · Software",
    year: "2025",
    href: "https://invoiza.bcircuit.com/dashboard",
    tag: "Software",
    image: invoizaProjectImage,
    gradient: "from-sky-500/30 via-blue-700/40 to-indigo-900/40",
  },
  {
    name: "SH Womens",
    category: "E-Commerce · Fashion",
    year: "2026",
    href: "https://example.com",
    tag: "E-Commerce",
    image: shwomensProjectImage,
    gradient: "from-fuchsia-500/30 via-purple-700/30 to-violet-900/40",
  },
  {
    name: "Luxora Fashion",
    category: "E-Commerce · Luxury",
    year: "2026",
    href: "https://luxorafashion.bcircuit.com/",
    tag: "E-Commerce",
    image: luxoraProjectImage,
    gradient: "from-fuchsia-500/30 via-purple-700/30 to-violet-900/40",
  },
  {
    name: "Forge Studio",
    category: "Agency · Website",
    year: "2024",
    href: "https://example.com",
    tag: "Websites",
    gradient: "from-orange-500/40 via-red-600/30 to-rose-900/40",
  },
  {
    name: "Atlas Logistics",
    category: "SaaS · Software",
    year: "2022",
    href: "https://example.com",
    tag: "Software",
    gradient: "from-cyan-500/30 via-teal-700/30 to-slate-900/40",
  },
];

export function Portfolio() {
  return (
    <section className="relative bg-navy-deep px-6 py-32 md:py-48">
      <div className="mx-auto max-w-7xl">
        <div className="mb-20 flex flex-col items-start justify-between gap-8 md:flex-row md:items-end">
          <div>
            <Reveal>
              <SectionLabel index="04" label="Selected Work" />
            </Reveal>
            <Reveal delay={0.1}>
              <h2 className="font-display text-4xl font-extrabold leading-[0.95] tracking-tighter md:text-7xl">
                Selected <br />
                <span className="text-ember italic">pieces.</span>
              </h2>
            </Reveal>
          </div>
          <Reveal delay={0.2}>
            <p className="max-w-sm text-sm leading-relaxed text-muted-foreground md:text-base">
              A curated selection of digital transformations and award-winning products we have shipped for partners worldwide.
            </p>
          </Reveal>
        </div>

        <div className="grid grid-cols-1 gap-12 md:grid-cols-2">
          {projects.slice(0, 4).map((project, index) => (
            <ProjectCard key={project.name} project={project} offset={index % 2 === 1} />
          ))}
        </div>
      </div>
    </section>
  );
}

export function ProjectCard({ project, offset = false }) {
  return (
    <Reveal delay={offset ? 0.1 : 0} y={50}>
      <a href={project.href} target="_blank" rel="noopener noreferrer" className={`group block ${offset ? "md:mt-24" : ""}`}>
        <div className="relative overflow-hidden rounded-3xl">
          <div className="relative aspect-[4/3] w-full overflow-hidden">
            {project.image ? (
              <>
                <div className="absolute inset-1 overflow-hidden rounded-2xl border border-white/10 bg-navy-deep/0 backdrop-blur-md">
                  <Image
                    src={project.image}
                    alt={project.name}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                    sizes="(min-width: 768px) 50vw, 100vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-navy-deep/55 via-transparent to-transparent" />
                </div>
              </>
            ) : (
              <div
                className={`relative h-full w-full bg-gradient-to-br ${project.gradient} transition-transform duration-700 group-hover:scale-105`}
              >
                <div className="absolute inset-6 rounded-2xl border border-white/10 bg-navy-deep/70 p-6 backdrop-blur-md">
                  <div className="flex items-center gap-1.5">
                    <div className="size-2.5 rounded-full bg-red-500/50" />
                    <div className="size-2.5 rounded-full bg-yellow-500/50" />
                    <div className="size-2.5 rounded-full bg-green-500/50" />
                  </div>
                  <div className="mt-6 space-y-3">
                    <div className="h-2 w-3/5 rounded bg-white/15" />
                    <div className="h-2 w-2/5 rounded bg-white/10" />
                    <div className="mt-6 grid grid-cols-3 gap-3">
                      <div className="aspect-square rounded bg-white/5" />
                      <div className="aspect-square rounded bg-white/8" />
                      <div className="aspect-square rounded bg-white/5" />
                    </div>
                  </div>
                </div>
              </div>
            )}
            <div className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/15 to-transparent transition-transform duration-1000 group-hover:translate-x-full" />
          </div>
          <div className="pointer-events-none absolute inset-0 flex items-center justify-center bg-navy-deep/40 opacity-0 transition-opacity duration-500 group-hover:opacity-100">
            <span className="inline-flex items-center gap-2 rounded-full bg-foreground px-6 py-3 font-mono text-xs uppercase tracking-[0.2em] text-background">
              View Project
              <ArrowUpRight className="size-3.5" />
            </span>
          </div>
        </div>
        <div className="mt-6 flex items-start justify-between gap-6">
          <div>
            <h3 className="font-display text-2xl font-bold tracking-tight transition-colors group-hover:text-ember md:text-3xl">
              {project.name}
            </h3>
            <p className="mt-1 font-mono text-xs uppercase tracking-[0.2em] text-muted-foreground">{project.category}</p>
          </div>
          <span className="font-mono text-xs uppercase tracking-[0.2em] text-ember">{project.year}</span>
        </div>
      </a>
    </Reveal>
  );
}
