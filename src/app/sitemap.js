import { getPublishedPosts } from "@/content/blog/posts.js";

const siteUrl = "https://oxy12.com";

export default function sitemap() {
  const publishedPosts = getPublishedPosts();

  return [
    {
      url: `${siteUrl}/`,
      changeFrequency: "weekly",
      priority: 1,
    },
    {
      url: `${siteUrl}/about`,
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${siteUrl}/services`,
      changeFrequency: "monthly",
      priority: 0.9,
    },
    {
      url: `${siteUrl}/portfolio`,
      changeFrequency: "monthly",
      priority: 0.9,
    },
    {
      url: `${siteUrl}/contact`,
      changeFrequency: "yearly",
      priority: 0.7,
    },
    {
      url: `${siteUrl}/blog`,
      changeFrequency: "weekly",
      priority: 0.8,
    },
    ...publishedPosts.map((post) => ({
      url: post.canonicalUrl,
      lastModified: post.updatedDate,
      changeFrequency: "monthly",
      priority: 0.7,
    })),
    {
      url: `${siteUrl}/privacy-policy`,
      changeFrequency: "yearly",
      priority: 0.3,
    },
    {
      url: `${siteUrl}/terms-conditions`,
      changeFrequency: "yearly",
      priority: 0.3,
    },
  ];
}
