import Image from "next/image";
import { ArrowUpRight } from "lucide-react";
import { Reveal } from "@/components/site/reveal.jsx";
import { SectionLabel } from "@/components/site/section-label.jsx";

const articles = [
  {
    title: "Best CRM for Cleaning Businesses in 2026",
    category: "Business Software",
    excerpt:
      "The best CRM for cleaning business owners should make it easier to manage leads, quotes, follow-ups, bookings and recurring customers without adding unnecessary complexity.",
    image: "https://learn.oxy12.com/wp-content/uploads/2026/09/best-crm-for-cleaning-business-2026.webp",
    href: "https://learn.oxy12.com/best-crm-for-cleaning-business/",
  },
  {
    title: "Custom CRM Development: When Off-the-Shelf CRM Is Not Enough",
    category: "Custom Software",
    excerpt:
      "Custom CRM development becomes worth considering when a standard CRM can no longer support a business’s workflows, integrations, reporting, or automation needs.",
    image: "https://learn.oxy12.com/wp-content/uploads/2026/09/custom-crm-development.webp",
    href: "https://learn.oxy12.com/custom-crm-development/",
  },
  {
    title: "Best AI Marketing Tools for Small Businesses in 2026",
    category: "AI & Productivity",
    excerpt:
      "The right AI marketing tools can reduce repetitive work, speed up content creation, improve campaign planning, and make performance reporting easier.",
    image: "https://learn.oxy12.com/wp-content/uploads/2026/09/best-ai-marketing-tools-small-business-2026.webp",
    href: "https://learn.oxy12.com/best-ai-marketing-tools-small-business/",
  },
];

export function BlogHighlights() {
  return (
    <section className="relative bg-navy-deep px-6 py-32 md:py-48">
      <div className="pointer-events-none absolute inset-0 mesh-bg opacity-30" />

      <div className="relative mx-auto max-w-7xl">
        <div className="mb-16 flex flex-col items-start justify-between gap-8 md:mb-20 md:flex-row md:items-end">
          <div>
            <Reveal>
              <SectionLabel index="04" label="OXY12 Learn" />
            </Reveal>
            <Reveal delay={0.1}>
              <h2 className="font-display text-4xl font-extrabold leading-[0.95] tracking-tighter md:text-7xl">
                Practical insights <br />
                <span className="italic text-ember">for smarter growth.</span>
              </h2>
            </Reveal>
          </div>

          <Reveal delay={0.2}>
            <p className="max-w-md text-sm leading-relaxed text-muted-foreground md:text-base">
              Explore practical, independently written guides that help small businesses compare software, use AI responsibly,
              and choose technology with greater confidence.
            </p>
          </Reveal>
        </div>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {articles.map((article, index) => (
            <Reveal key={article.href} delay={index * 0.08} className="h-full">
              <a
                href={article.href}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex h-full flex-col overflow-hidden rounded-3xl glass transition-all duration-500 hover:-translate-y-1 hover:border-ember/40"
              >
                <div className="relative aspect-[16/10] overflow-hidden border-b border-white/10 bg-navy-deep">
                  <Image
                    src={article.image}
                    alt={article.title}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                    sizes="(min-width: 1024px) 33vw, (min-width: 768px) 50vw, 100vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-navy-deep/70 via-transparent to-transparent" />
                </div>

                <div className="flex flex-1 flex-col p-7 md:p-8">
                  <p className="font-mono text-[10px] uppercase tracking-[0.22em] text-ember">{article.category}</p>
                  <h3 className="mt-4 font-display text-xl font-bold leading-snug tracking-tight transition-colors group-hover:text-ember md:text-2xl">
                    {article.title}
                  </h3>
                  <p className="mt-4 flex-1 text-sm leading-relaxed text-muted-foreground">{article.excerpt}</p>
                  <span className="mt-7 inline-flex items-center gap-2 border-t border-white/10 pt-5 font-mono text-xs uppercase tracking-[0.18em] text-foreground">
                    Read article
                    <ArrowUpRight className="size-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                  </span>
                </div>
              </a>
            </Reveal>
          ))}
        </div>

        <Reveal delay={0.25} className="mt-12 flex justify-center">
          <a
            href="https://learn.oxy12.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="ember-glow inline-flex items-center gap-3 rounded-full bg-ember px-8 py-4 text-sm font-semibold tracking-wide text-primary-foreground transition-all hover:bg-ember-glow"
          >
            View More Articles
            <ArrowUpRight className="size-4" />
          </a>
        </Reveal>
      </div>
    </section>
  );
}
