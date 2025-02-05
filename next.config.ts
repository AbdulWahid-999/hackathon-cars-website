import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    domains: ["cdn.sanity.io"], // Add your Sanity CDN domain here
  },
};

export default nextConfig;
