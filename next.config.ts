import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images : {
    localPatterns : [
      {
        pathname : './public/icon0.svg',
        search : ''
      }
    ]
  },
  experimental: {
    globalNotFound: true,
  },
};

export default nextConfig;
