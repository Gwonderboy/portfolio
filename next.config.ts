import type { NextConfig } from "next";
import withBundleAnalyzer from "@next/bundle-analyzer";

const isAnalyze = process.env.ANALYZE === "true";

const nextConfig: NextConfig = {
  reactStrictMode: true,
  images: {
    formats: ["image/avif", "image/webp"],
  },
};

export default isAnalyze
  ? withBundleAnalyzer({ enabled: true })(nextConfig)
  : nextConfig;