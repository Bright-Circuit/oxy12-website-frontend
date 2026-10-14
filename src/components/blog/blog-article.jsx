import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, ArrowUpRight, CalendarDays, Clock3 } from "lucide-react";
import { BlogCard } from "./blog-card.jsx";

function formatDate(date) {
  return new Intl.DateTimeFormat("en-US", {
    day: "numeric",
    month: "long",
    year: "numeric",
    timeZone: "UTC",
  }).format(new Date(`${date}T00:00:00Z`));
}

function InlineContent({ content }) {
  return content.map((part, index) =>
    typeof part === "string" ? (
      <span key={index}>{part}</span>
    ) : (
      <Link
        key={`${part.href}-${index}`}
        href={part.href}
        className="font-medium text-ember underline decoration-ember/35 underline-offset-4 hover:decoration-ember"
      >
        {part.text}
      </Link>
    ),
  );
}

function ContentBlock({ block }) {
  if (block.type === "paragraph") {
    return (
      <p className="text-base leading-8 text-foreground/75 md:text-[1.05rem]">
        <InlineContent content={block.content} />
      </p>
    );
  }

  if (block.type === "subheading") {
    return (
      <h3
        id={block.id}
        className="scroll-mt-28 pt-3 font-display text-2xl font-bold tracking-tight text-foreground md:text-3xl"
      >
        {block.title}
      </h3>
    );
  }

  if (block.type === "list" || block.type === "ordered-list") {
    const List = block.type === "ordered-list" ? "ol" : "ul";
    return (
      <List
        className={`space-y-3 pl-6 text-base leading-8 text-foreground/75 md:text-[1.05rem] ${block.type === "ordered-list" ? "list-decimal" : "list-disc marker:text-ember"}`}
      >
        {block.items.map((item) => (
          <li key={item} className="pl-2">
            {item}
          </li>
        ))}
      </List>
    );
  }

  if (block.type === "callout") {
    return (
      <blockquote className="rounded-r-2xl border-l-2 border-ember bg-ember/5 px-6 py-5 font-display text-xl font-semibold leading-relaxed text-foreground md:text-2xl">
        {block.content}
      </blockquote>
    );
  }

  if (block.type === "table") {
    return (
      <div className="overflow-x-auto rounded-2xl border border-white/10">
        <table className="w-full min-w-[680px] border-collapse text-left text-sm text-foreground/75">
          <caption className="border-b border-white/10 bg-navy-light/45 px-5 py-4 text-left font-display text-base font-semibold text-foreground">
            {block.caption}
          </caption>
          <thead className="bg-white/[0.035] text-foreground">
            <tr>
              {block.headers.map((header) => (
                <th
                  key={header}
                  scope="col"
                  className="border-b border-white/10 px-5 py-4 font-semibold"
                >
                  {header}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {block.rows.map((row) => (
              <tr
                key={row.join("-")}
                className="border-b border-white/5 last:border-0"
              >
                {row.map((cell, index) => (
                  <td
                    key={`${cell}-${index}`}
                    className={`px-5 py-4 align-top leading-6 ${index === 0 ? "font-medium text-foreground" : ""}`}
                  >
                    {cell}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  }

  if (block.type === "image") {
    return (
      <figure className="overflow-hidden rounded-[1.5rem] border border-white/10 bg-navy-light/35">
        <Image
          src={block.src}
          width={block.width}
          height={block.height}
          alt={block.alt}
          sizes="(max-width: 900px) 100vw, 780px"
          className="h-auto w-full"
        />
        <figcaption className="border-t border-white/10 px-5 py-4 text-sm leading-6 text-muted-foreground">
          {block.caption}
        </figcaption>
      </figure>
    );
  }

  return null;
}

export function BlogArticle({ post, relatedPosts }) {
  return (
    <article>
      <header className="relative overflow-hidden border-b border-white/5 pb-16 pt-40 md:pb-24 md:pt-48">
        <div className="pointer-events-none absolute inset-0 mesh-bg opacity-50" />
        <div className="relative mx-auto max-w-5xl px-6">
          <nav
            aria-label="Breadcrumb"
            className="font-mono text-[0.68rem] uppercase tracking-[0.18em] text-muted-foreground"
          >
            <ol className="flex flex-wrap items-center gap-2">
              <li>
                <Link href="/" className="hover:text-ember">
                  Home
                </Link>
              </li>
              <li aria-hidden="true">/</li>
              <li>
                <Link href="/blog" className="hover:text-ember">
                  Blog
                </Link>
              </li>
              <li aria-hidden="true">/</li>
              <li
                aria-current="page"
                className="max-w-[24rem] truncate text-foreground/70"
              >
                {post.title}
              </li>
            </ol>
          </nav>

          <p className="mt-10 font-mono text-xs uppercase tracking-[0.22em] text-ember">
            {post.category}
          </p>
          <h1 className="mt-5 max-w-4xl font-display text-4xl font-bold leading-[1.08] tracking-[-0.045em] text-foreground sm:text-5xl md:text-7xl">
            {post.title}
          </h1>
          <p className="mt-7 max-w-3xl text-lg leading-8 text-muted-foreground">
            {post.excerpt}
          </p>

          <div className="mt-8 flex flex-wrap items-center gap-x-6 gap-y-3 text-sm text-foreground/70">
            <span className="font-medium text-foreground">{post.author}</span>
            <span className="inline-flex items-center gap-2">
              <CalendarDays aria-hidden="true" className="size-4 text-ember" />
              <time dateTime={post.publishedDate}>
                {formatDate(post.publishedDate)}
              </time>
            </span>
            <span className="inline-flex items-center gap-2">
              <Clock3 aria-hidden="true" className="size-4 text-ember" />
              {post.readingTime}
            </span>
          </div>
        </div>
      </header>

      <div className="mx-auto max-w-5xl px-6 py-12 md:py-16">
        <Image
          src={post.featuredImage.src}
          width={post.featuredImage.width}
          height={post.featuredImage.height}
          alt={post.featuredImage.alt}
          sizes="(max-width: 1100px) 100vw, 1024px"
          preload
          className="h-auto w-full rounded-[1.5rem] border border-white/10"
        />
      </div>

      <div className="mx-auto grid max-w-7xl gap-12 px-6 pb-24 lg:grid-cols-[240px_minmax(0,780px)] lg:justify-center lg:gap-16">
        <aside className="lg:sticky lg:top-28 lg:h-fit">
          <nav
            aria-label="Article contents"
            className="rounded-2xl border border-white/10 bg-navy-light/35 p-5"
          >
            <p className="font-mono text-[0.68rem] uppercase tracking-[0.2em] text-ember">
              In this guide
            </p>
            <ol className="mt-4 space-y-3 text-sm leading-6 text-muted-foreground">
              {post.sections.map((section) => (
                <li key={section.id}>
                  <a
                    href={`#${section.id}`}
                    className="transition-colors hover:text-foreground"
                  >
                    {section.title}
                  </a>
                </li>
              ))}
            </ol>
          </nav>
        </aside>

        <div className="min-w-0">
          {post.sections.map((section) => (
            <section
              key={section.id}
              id={section.id}
              className="scroll-mt-28 border-b border-white/5 pb-12 pt-4 first:pt-0 last:border-0 md:pb-16"
            >
              <h2 className="font-display text-3xl font-bold leading-tight tracking-[-0.03em] text-foreground md:text-4xl">
                {section.title}
              </h2>
              <div className="mt-7 space-y-6">
                {section.blocks.map((block, index) => (
                  <ContentBlock
                    key={`${section.id}-${block.type}-${index}`}
                    block={block}
                  />
                ))}
              </div>
            </section>
          ))}

          <aside className="mt-4 rounded-[1.5rem] border border-ember/25 bg-gradient-to-br from-ember/10 to-navy-light/40 p-7 md:p-9">
            <p className="font-mono text-[0.68rem] uppercase tracking-[0.2em] text-ember">
              Related service
            </p>
            <h2 className="mt-4 font-display text-3xl font-bold tracking-tight text-foreground">
              {post.relatedService.title}
            </h2>
            <p className="mt-4 text-base leading-8 text-muted-foreground">
              {post.relatedService.description}
            </p>
            <Link
              href={post.relatedService.href}
              className="mt-6 inline-flex items-center gap-2 font-mono text-xs uppercase tracking-[0.16em] text-foreground hover:text-ember"
            >
              {post.relatedService.label}
              <ArrowUpRight aria-hidden="true" className="size-4" />
            </Link>
          </aside>

          <Link
            href="/blog"
            className="mt-10 inline-flex items-center gap-2 font-mono text-xs uppercase tracking-[0.16em] text-muted-foreground hover:text-ember"
          >
            <ArrowLeft aria-hidden="true" className="size-4" />
            Back to all articles
          </Link>
        </div>
      </div>

      {relatedPosts.length > 0 && (
        <section
          aria-labelledby="related-articles-heading"
          className="border-t border-white/5 bg-navy-deep/50 py-20"
        >
          <div className="mx-auto max-w-7xl px-6">
            <h2
              id="related-articles-heading"
              className="font-display text-4xl font-bold tracking-tight text-foreground"
            >
              Related articles
            </h2>
            <div className="mt-10 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
              {relatedPosts.map((relatedPost) => (
                <BlogCard key={relatedPost.slug} post={relatedPost} />
              ))}
            </div>
          </div>
        </section>
      )}
    </article>
  );
}
