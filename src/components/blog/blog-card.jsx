import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

function formatDate(date) {
  return new Intl.DateTimeFormat("en-US", {
    day: "numeric",
    month: "long",
    year: "numeric",
    timeZone: "UTC",
  }).format(new Date(`${date}T00:00:00Z`));
}

export function BlogCard({ post }) {
  return (
    <article className="group flex h-full flex-col overflow-hidden rounded-[1.5rem] border border-white/10 bg-navy-light/45 transition-colors duration-300 hover:border-ember/40">
      <Link
        href={`/blog/${post.slug}`}
        aria-label={`Read ${post.title}`}
        className="relative block aspect-[16/9] overflow-hidden bg-navy-deep"
      >
        <Image
          src={post.featuredImage.src}
          alt={post.featuredImage.alt}
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1280px) 50vw, 33vw"
          className="object-cover transition-transform duration-700 ease-out group-hover:scale-[1.03]"
        />
      </Link>

      <div className="flex flex-1 flex-col p-6 md:p-7">
        <div className="flex flex-wrap items-center gap-x-3 gap-y-2 font-mono text-[0.65rem] uppercase tracking-[0.18em] text-muted-foreground">
          <span className="text-ember">{post.category}</span>
          <span aria-hidden="true">/</span>
          <time dateTime={post.publishedDate}>
            {formatDate(post.publishedDate)}
          </time>
          <span aria-hidden="true">/</span>
          <span>{post.readingTime}</span>
        </div>

        <h2 className="mt-5 font-display text-2xl font-bold leading-tight tracking-tight text-foreground md:text-3xl">
          <Link
            href={`/blog/${post.slug}`}
            className="transition-colors hover:text-ember"
          >
            {post.title}
          </Link>
        </h2>

        <p className="mt-4 flex-1 text-sm leading-7 text-muted-foreground md:text-base">
          {post.excerpt}
        </p>

        <Link
          href={`/blog/${post.slug}`}
          className="mt-7 inline-flex items-center gap-2 self-start font-mono text-xs uppercase tracking-[0.18em] text-foreground transition-colors hover:text-ember"
        >
          Read article
          <ArrowUpRight aria-hidden="true" className="size-4" />
        </Link>
      </div>
    </article>
  );
}
