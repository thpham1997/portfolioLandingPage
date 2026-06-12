import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  basePath: "/portfolioLandingPage",
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
