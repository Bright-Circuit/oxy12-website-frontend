/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "learn.oxy12.com",
        pathname: "/wp-content/uploads/**",
      },
    ],
  },
};

export default nextConfig;
