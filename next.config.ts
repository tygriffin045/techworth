import type { NextConfig } from "next";
const nextConfig: NextConfig = {
  async redirects() {
    return [
      { source: "/amazon-devices", destination: "/categories/amazon-devices", permanent: true },
      // Blue Yeti was dropped from desk input; send its old URL to the category.
      { source: "/products/yeti", destination: "/categories/input", permanent: true },
    ];
  },
};
export default nextConfig;
