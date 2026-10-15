"use client";

import Link from "next/link";
import { useMemo, useState } from "react";
import { BlogCard } from "./blog-card.jsx";

function pageHref(pageNumber) {
  return pageNumber === 1 ? "/blog" : `/blog/page/${pageNumber}`;
}

export function BlogIndex({
  posts,
  categories,
  initialPage = 1,
  postsPerPage = 6,
}) {
  const [activeCategory, setActiveCategory] = useState("All");
  const [activePage, setActivePage] = useState(initialPage);
  const filteredPosts = useMemo(
    () =>
      activeCategory === "All"
        ? posts
        : posts.filter((post) => post.category === activeCategory),
    [activeCategory, posts],
  );
  const pageCount = Math.max(1, Math.ceil(filteredPosts.length / postsPerPage));
  const currentPage = Math.min(activePage, pageCount);
  const visiblePosts = filteredPosts.slice(
    (currentPage - 1) * postsPerPage,
    currentPage * postsPerPage,
  );

  function selectCategory(category) {
    setActiveCategory(category);
    setActivePage(1);
  }

  return (
    <div>
      <div
        className="flex flex-wrap gap-2"
        aria-label="Filter articles by category"
      >
        {categories.map((category) => (
          <button
            key={category}
            type="button"
            aria-pressed={activeCategory === category}
            onClick={() => selectCategory(category)}
            className={`rounded-full border px-4 py-2 font-mono text-[0.68rem] uppercase tracking-[0.16em] transition-colors ${
              activeCategory === category
                ? "border-ember bg-ember text-primary-foreground"
                : "border-white/10 bg-navy-light/35 text-foreground/75 hover:border-ember/50 hover:text-foreground"
            }`}
          >
            {category}
          </button>
        ))}
      </div>

      {visiblePosts.length > 0 ? (
        <div className="mt-10 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {visiblePosts.map((post) => (
            <BlogCard key={post.slug} post={post} />
          ))}
        </div>
      ) : (
        <div className="mt-10 rounded-[1.5rem] border border-white/10 bg-navy-light/35 px-6 py-14 text-center">
          <p className="font-display text-2xl font-semibold text-foreground">
            More practical guides are being prepared.
          </p>
          <p className="mx-auto mt-3 max-w-xl text-sm leading-7 text-muted-foreground">
            Choose another category to explore the articles currently available.
          </p>
        </div>
      )}

      {visiblePosts.length > 0 && pageCount > 1 && (
        <nav
          aria-label="Blog pagination"
          className="mt-12 flex flex-wrap items-center justify-center gap-2"
        >
          {Array.from({ length: pageCount }, (_, index) => index + 1).map(
            (pageNumber) => {
              const sharedClassName = `grid size-11 place-items-center rounded-full border font-mono text-xs transition-colors ${
                pageNumber === currentPage
                  ? "border-ember bg-ember text-primary-foreground"
                  : "border-white/10 text-foreground/75 hover:border-ember/50 hover:text-foreground"
              }`;

              return activeCategory === "All" ? (
                <Link
                  key={pageNumber}
                  href={pageHref(pageNumber)}
                  aria-label={`Go to blog page ${pageNumber}`}
                  aria-current={pageNumber === currentPage ? "page" : undefined}
                  className={sharedClassName}
                >
                  {pageNumber}
                </Link>
              ) : (
                <button
                  key={pageNumber}
                  type="button"
                  aria-label={`Show ${activeCategory} articles page ${pageNumber}`}
                  aria-current={pageNumber === currentPage ? "page" : undefined}
                  onClick={() => setActivePage(pageNumber)}
                  className={sharedClassName}
                >
                  {pageNumber}
                </button>
              );
            },
          )}
        </nav>
      )}
    </div>
  );
}
