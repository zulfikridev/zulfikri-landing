import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  distDir: "build",
  images: {
    unoptimized: true,
  },
  compress: true,
  poweredByHeader: false,
  allowedDevOrigins: ["127.0.0.1"],
};

export default nextConfig;
