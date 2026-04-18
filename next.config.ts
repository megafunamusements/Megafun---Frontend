import type { NextConfig } from 'next'

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      { protocol: 'https', hostname: 'productimages.withfloats.com' },
      { protocol: 'https', hostname: 'fpimages.withfloats.com' },
      { protocol: 'https', hostname: 'bizimages.withfloats.com' },
      { protocol: 'https', hostname: 'backgroundimages.withfloats.com' },
      { protocol: 'https', hostname: 'images.unsplash.com' },
      // Cloudinary — for production images
      { protocol: 'https', hostname: 'res.cloudinary.com' },
      // Railway backend static files
      { protocol: 'https', hostname: '*.railway.app' },
      // Local dev
      { protocol: 'http', hostname: 'localhost', port: '8000' },
    ],
  },
}

export default nextConfig
