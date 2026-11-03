import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Keep production verification independent from an active development server.
  distDir: process.env.NODE_ENV === "production" ? ".next-production" : ".next",
  turbopack: { root: __dirname },
};

export default nextConfig;
