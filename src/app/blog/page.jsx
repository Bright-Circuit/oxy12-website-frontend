import { BlogIndex } from "@/components/blog/blog-index.jsx";
import { JsonLd } from "@/components/site/json-ld.jsx";
import { SectionLabel } from "@/components/site/section-label.jsx";
import { blogCategories, getPublishedPosts } from "@/content/blog/posts.js";
import {
  createBreadcrumbEntity,
  createSchemaGraph,
  createWebPageEntity,
  organizationEntity,
  siteUrl,
  websiteEntity,
} from "@/lib/structured-data.js";

const title = "Practical Web and Software Guides";
const description =
  "Practical OXY12 guides for Sri Lankan businesses planning websites, e-commerce, custom software, business systems, mobile apps, and UI/UX projects.";
const canonicalUrl = `${siteUrl}/blog`;

export const metadata = {
  title: { absolute: `${title} | OXY12` },
  description,
  alternates: { canonical: "/blog" },
  openGraph: {
    title: `${title} | OXY12`,
    description,
    url: canonicalUrl,
    siteName: "OXY12",
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary",
    title: `${title} | OXY12`,
    description,
  },
};

export default function BlogPage() {
  const posts = getPublishedPosts();
  const cardPosts = posts.map(
    ({ sections, relatedService, relatedPosts, ...post }) => post,
  );
  const pageEntity = createWebPageEntity({
    type: "CollectionPage",
    id: `${canonicalUrl}#webpage`,
    url: canonicalUrl,
    name: `${title} | OXY12`,
    description,
    mainEntity: {
      "@type": "ItemList",
      itemListElement: posts.map((post, index) => ({
        "@type": "ListItem",
        position: index + 1,
        name: post.title,
        url: post.canonicalUrl,
      })),
    },
  });
  const schema = createSchemaGraph(
    organizationEntity,
    websiteEntity,
    pageEntity,
    createBreadcrumbEntity({
      id: `${canonicalUrl}#breadcrumb`,
      pageName: "Blog",
      pageUrl: canonicalUrl,
    }),
  );

  return (
    <>
      <JsonLd data={schema} />
      <header className="relative overflow-hidden border-b border-white/5 pb-20 pt-40 md:pb-28 md:pt-48">
        <div className="pointer-events-none absolute inset-0 mesh-bg opacity-55" />
        <div className="relative mx-auto max-w-7xl px-6">
          <SectionLabel index="01" label="OXY12 Blog" />
          <div className="mt-9 grid gap-8 lg:grid-cols-[minmax(0,780px)_1fr] lg:items-end lg:gap-20">
            <h1 className="font-display text-5xl font-bold leading-[1.02] tracking-[-0.05em] text-foreground sm:text-6xl md:text-7xl">
              Practical guidance for{" "}
              <span className="text-ember">better digital decisions.</span>
            </h1>
            <p className="max-w-xl text-base leading-8 text-muted-foreground md:text-lg">
              Clear, experience-informed articles for businesses planning
              websites, online stores, custom software, business systems, mobile
              apps, and usable digital products.
            </p>
          </div>
        </div>
      </header>

      <section
        aria-labelledby="latest-articles-heading"
        className="py-20 md:py-28"
      >
        <div className="mx-auto max-w-7xl px-6">
          <div className="mb-10 flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
            <div>
              <p className="font-mono text-xs uppercase tracking-[0.2em] text-ember">
                Knowledge library
              </p>
              <h2
                id="latest-articles-heading"
                className="mt-3 font-display text-4xl font-bold tracking-tight text-foreground md:text-5xl"
              >
                Latest articles
              </h2>
            </div>
            <p className="max-w-lg text-sm leading-7 text-muted-foreground">
              Written to help business owners understand scope, costs,
              technology choices, and delivery responsibilities before
              committing to a digital project.
            </p>
          </div>
          <BlogIndex posts={cardPosts} categories={blogCategories} />
        </div>
      </section>
    </>
  );
}
