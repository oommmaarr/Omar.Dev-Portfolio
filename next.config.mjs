/** @type {import('next').NextConfig} */
const nextConfig = {
  // تحسين الـ CSS loading - Next.js 15 compatible
  experimental: {
    optimizeCss: true,
    optimizePackageImports: ['tw-animate-css'],
  },
  
  // تحسين الـ images
  images: {
    formats: ['image/webp', 'image/avif'],
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
  },
  
  // Compression - enabled by default in Next.js 15
  compress: true,
  
  // تحسين الـ build
  compiler: {
    removeConsole: process.env.NODE_ENV === 'production',
  },
};

export default nextConfig;
