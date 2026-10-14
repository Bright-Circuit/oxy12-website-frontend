"use client";

import { useMemo, useState } from "react";
import { BlogCard } from "./blog-card.jsx";

export function BlogIndex({ posts, categories }) {
  const [activeCategory, setActiveCategory] = useState("All");
  const visiblePosts = useMemo(
    () =>
      activeCategory === "All"
        ? posts
        : posts.filter((post) => post.category === activeCategory),
    [activeCategory, posts],
  );

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
            onClick={() => setActiveCategory(category)}
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
    </div>
  );
}
