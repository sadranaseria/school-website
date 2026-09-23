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
        protocol: 'https',
        hostname: 'w0mj5ud6qk.ufs.sh',
        port: '',
        pathname : '/**'
      }
    ],
  },
  experimental: {
    globalNotFound: true,
  },
};

export default nextConfig;
