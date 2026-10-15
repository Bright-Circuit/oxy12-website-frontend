import { notFound } from "next/navigation";
import {
  BLOG_DESCRIPTION,
  BLOG_TITLE,
  BlogListingPage,
  getBlogPageCanonical,
} from "@/components/blog/blog-listing-page.jsx";
import { getBlogPageCount } from "@/content/blog/posts.js";

export const dynamicParams = false;

export function generateStaticParams() {
  const pageCount = getBlogPageCount();

  return Array.from({ length: Math.max(0, pageCount - 1) }, (_, index) => ({
    page: String(index + 2),
  }));
}

function parsePageNumber(value) {
  if (!/^\d+$/.test(value)) return null;

  const pageNumber = Number(value);
  const pageCount = getBlogPageCount();

  if (pageNumber < 2 || pageNumber > pageCount) return null;

  return pageNumber;
}

export async function generateMetadata({ params }) {
  const { page } = await params;
  const pageNumber = parsePageNumber(page);
  if (!pageNumber) notFound();

  const title = `${BLOG_TITLE} - Page ${pageNumber} | OXY12`;
  const description = `Page ${pageNumber} of ${BLOG_DESCRIPTION.charAt(0).toLowerCase()}${BLOG_DESCRIPTION.slice(1)}`;
  const canonicalUrl = getBlogPageCanonical(pageNumber);

  return {
    title: { absolute: title },
    description,
    alternates: { canonical: canonicalUrl },
    openGraph: {
      title,
      description,
      url: canonicalUrl,
      siteName: "OXY12",
      type: "website",
      locale: "en_US",
    },
    twitter: {
      card: "summary",
      title,
      description,
    },
  };
}

export default async function PaginatedBlogPage({ params }) {
  const { page } = await params;
  const pageNumber = parsePageNumber(page);
  if (!pageNumber) notFound();

  return <BlogListingPage pageNumber={pageNumber} />;
}
