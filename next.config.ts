import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    localPatterns: [
      {
        pathname: "./public/icon0.svg",
        search: "",
      },
    ],
    remotePatterns: [
      {
        protocol: "https",
        hostname: "coral-causal-meadowlark-743.mypinata.cloud",
        port: "",
        pathname: "/**",
      },
    ],
  },
  experimental: {
    globalNotFound: true,
  },
};

export default nextConfig;
