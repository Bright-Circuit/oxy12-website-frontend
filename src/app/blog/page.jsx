import {
  BLOG_DESCRIPTION,
  BLOG_TITLE,
  BlogListingPage,
  getBlogPageCanonical,
} from "@/components/blog/blog-listing-page.jsx";

const canonicalUrl = getBlogPageCanonical(1);

export const metadata = {
  title: { absolute: `${BLOG_TITLE} | OXY12` },
  description: BLOG_DESCRIPTION,
  alternates: { canonical: "/blog" },
  openGraph: {
    title: `${BLOG_TITLE} | OXY12`,
    description: BLOG_DESCRIPTION,
    url: canonicalUrl,
    siteName: "OXY12",
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary",
    title: `${BLOG_TITLE} | OXY12`,
    description: BLOG_DESCRIPTION,
  },
};

export default function BlogPage() {
  return <BlogListingPage pageNumber={1} />;
}
