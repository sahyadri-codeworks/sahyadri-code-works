import type { NextConfig } from "next";

const isProd = process.env.NODE_ENV === 'production';

const nextConfig: NextConfig = {
  output: "export",
  trailingSlash: true,
  images: {
    unoptimized: true,
  },
  basePath: isProd && !process.env.CF_PAGES ? "/sahyadri-code-works" : undefined,
  assetPrefix: isProd && !process.env.CF_PAGES ? "/sahyadri-code-works/" : undefined,
};

export default nextConfig;