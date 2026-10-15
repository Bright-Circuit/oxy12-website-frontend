import { notFound } from "next/navigation";
import { BlogArticle } from "@/components/blog/blog-article.jsx";
import { JsonLd } from "@/components/site/json-ld.jsx";
import {
  getPublishedPostBySlug,
  getPublishedPosts,
  getRelatedPublishedPosts,
} from "@/content/blog/posts.js";
import {
  createSchemaGraph,
  organizationEntity,
  organizationId,
  siteUrl,
  websiteEntity,
  websiteId,
} from "@/lib/structured-data.js";

export const dynamicParams = false;

export function generateStaticParams() {
  return getPublishedPosts().map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const post = getPublishedPostBySlug(slug);
  if (!post) notFound();

  return {
    title: { absolute: post.seoTitle },
    description: post.metaDescription,
    alternates: { canonical: post.canonicalUrl },
    authors: [{ name: post.author }],
    keywords: [post.primaryKeyword, ...post.secondaryKeywords],
    openGraph: {
      title: post.seoTitle,
      description: post.metaDescription,
      url: post.canonicalUrl,
      siteName: "OXY12",
      type: "article",
      locale: "en_US",
      publishedTime: post.publishedDate,
      modifiedTime: post.updatedDate,
      authors: [post.author],
      tags: post.tags,
      images: [
        {
          url: post.featuredImage.src,
          width: post.featuredImage.width,
          height: post.featuredImage.height,
          alt: post.featuredImage.alt,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: post.seoTitle,
      description: post.metaDescription,
      images: [post.featuredImage.src],
    },
  };
}

export default async function BlogPostPage({ params }) {
  const { slug } = await params;
  const post = getPublishedPostBySlug(slug);
  if (!post) notFound();

  const relatedPosts = getRelatedPublishedPosts(post);
  const pageId = `${post.canonicalUrl}#webpage`;
  const articleId = `${post.canonicalUrl}#article`;
  const schema = createSchemaGraph(
    organizationEntity,
    websiteEntity,
    {
      "@type": "WebPage",
      "@id": pageId,
      url: post.canonicalUrl,
      name: post.seoTitle,
      description: post.metaDescription,
      isPartOf: { "@id": websiteId },
      about: { "@id": organizationId },
      breadcrumb: { "@id": `${post.canonicalUrl}#breadcrumb` },
      mainEntity: { "@id": articleId },
      inLanguage: "en",
    },
    {
      "@type": "BlogPosting",
      "@id": articleId,
      headline: post.title,
      description: post.metaDescription,
      url: post.canonicalUrl,
      mainEntityOfPage: { "@id": pageId },
      image: `${siteUrl}${post.featuredImage.src}`,
      datePublished: post.publishedDate,
      dateModified: post.updatedDate,
      author:
        post.authorType === "Person"
          ? {
              "@type": "Person",
              "@id": `${siteUrl}/blog#author-${post.authorId}`,
              name: post.author,
              jobTitle: post.authorRole,
              ...(post.authorUrl ? { url: `${siteUrl}${post.authorUrl}` } : {}),
              worksFor: { "@id": organizationId },
            }
          : { "@id": organizationId },
      publisher: { "@id": organizationId },
      articleSection: post.category,
      keywords: [post.primaryKeyword, ...post.secondaryKeywords].join(", "),
      inLanguage: "en",
    },
    {
      "@type": "BreadcrumbList",
      "@id": `${post.canonicalUrl}#breadcrumb`,
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: `${siteUrl}/` },
        {
          "@type": "ListItem",
          position: 2,
          name: "Blog",
          item: `${siteUrl}/blog`,
        },
        {
          "@type": "ListItem",
          position: 3,
          name: post.title,
          item: post.canonicalUrl,
        },
      ],
    },
  );

  return (
    <>
      <JsonLd data={schema} />
      <BlogArticle post={post} relatedPosts={relatedPosts} />
    </>
  );
}
