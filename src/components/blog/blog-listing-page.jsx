import { BlogIndex } from "@/components/blog/blog-index.jsx";
import { JsonLd } from "@/components/site/json-ld.jsx";
import { SectionLabel } from "@/components/site/section-label.jsx";
import {
  BLOG_POSTS_PER_PAGE,
  blogCategories,
  getPublishedPosts,
  getPublishedPostsForPage,
} from "@/content/blog/posts.js";
import {
  createBreadcrumbEntity,
  createSchemaGraph,
  createWebPageEntity,
  organizationEntity,
  siteUrl,
  websiteEntity,
} from "@/lib/structured-data.js";

export const BLOG_TITLE = "Practical Web and Software Guides";
export const BLOG_DESCRIPTION =
  "Practical OXY12 guides for Sri Lankan businesses planning websites, e-commerce, custom software, business systems, mobile apps, and UI/UX projects.";

export function getBlogPageCanonical(pageNumber) {
  return pageNumber === 1
    ? `${siteUrl}/blog`
    : `${siteUrl}/blog/page/${pageNumber}`;
}

export function BlogListingPage({ pageNumber = 1 }) {
  const posts = getPublishedPosts();
  const pagePosts = getPublishedPostsForPage(pageNumber);
  const cardPosts = posts.map(
    ({ sections, relatedService, relatedPosts, ...post }) => post,
  );
  const canonicalUrl = getBlogPageCanonical(pageNumber);
  const pageName =
    pageNumber === 1
      ? `${BLOG_TITLE} | OXY12`
      : `${BLOG_TITLE} - Page ${pageNumber} | OXY12`;
  const pageDescription =
    pageNumber === 1
      ? BLOG_DESCRIPTION
      : `Page ${pageNumber} of practical OXY12 guides for businesses planning websites, e-commerce, custom software, mobile apps, and digital products.`;
  const pageEntity = createWebPageEntity({
    type: "CollectionPage",
    id: `${canonicalUrl}#webpage`,
    url: canonicalUrl,
    name: pageName,
    description: pageDescription,
    mainEntity: {
      "@type": "ItemList",
      itemListElement: pagePosts.map((post, index) => ({
        "@type": "ListItem",
        position: (pageNumber - 1) * BLOG_POSTS_PER_PAGE + index + 1,
        name: post.title,
        url: post.canonicalUrl,
      })),
    },
  });
  const breadcrumb =
    pageNumber === 1
      ? createBreadcrumbEntity({
          id: `${canonicalUrl}#breadcrumb`,
          pageName: "Blog",
          pageUrl: canonicalUrl,
        })
      : {
          "@type": "BreadcrumbList",
          "@id": `${canonicalUrl}#breadcrumb`,
          itemListElement: [
            {
              "@type": "ListItem",
              position: 1,
              name: "Home",
              item: `${siteUrl}/`,
            },
            {
              "@type": "ListItem",
              position: 2,
              name: "Blog",
              item: `${siteUrl}/blog`,
            },
            {
              "@type": "ListItem",
              position: 3,
              name: `Page ${pageNumber}`,
              item: canonicalUrl,
            },
          ],
        };
  const schema = createSchemaGraph(
    organizationEntity,
    websiteEntity,
    pageEntity,
    breadcrumb,
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
                {pageNumber === 1
                  ? "Latest articles"
                  : `Articles - Page ${pageNumber}`}
              </h2>
            </div>
            <p className="max-w-lg text-sm leading-7 text-muted-foreground">
              Written to help business owners understand scope, costs,
              technology choices, and delivery responsibilities before
              committing to a digital project.
            </p>
          </div>
          <BlogIndex
            key={pageNumber}
            posts={cardPosts}
            categories={blogCategories}
            initialPage={pageNumber}
            postsPerPage={BLOG_POSTS_PER_PAGE}
          />
        </div>
      </section>
    </>
  );
}
