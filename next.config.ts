import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  trailingSlash: true,
  images: {
    unoptimized: true,
  },
  basePath: "/sahyadri-code-works",
  assetPrefix: "/sahyadri-code-works/",
};

export default nextConfig;