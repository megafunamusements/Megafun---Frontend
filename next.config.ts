import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      { protocol: 'https', hostname: 'res.cloudinary.com' },
      { protocol: 'https', hostname: 'productimages.withfloats.com' },
      { protocol: 'https', hostname: 'fpimages.withfloats.com' },
      { protocol: 'https', hostname: 'bizimages.withfloats.com' },
      { protocol: 'https', hostname: 'backgroundimages.withfloats.com' },
      { protocol: 'https', hostname: 'images.unsplash.com' },
      { protocol: 'http', hostname: 'localhost', port: '8000', pathname: '/static/**' },
    ],
  },
};

export default nextConfig;
