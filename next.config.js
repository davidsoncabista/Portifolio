/** @type {import('next').NextConfig} */
const apiHost = process.env.NEXT_PUBLIC_API_HOST || process.env.NEXT_PUBLIC_API_BASE_URL || '192.168.0.70';
const apiPort = process.env.NEXT_PUBLIC_API_PORT || '8080';

const nextConfig = {
  typescript: { ignoreBuildErrors: true },
  eslint: { ignoreDuringBuilds: true },
  images: {
    unoptimized: true, // Crucial para não travar o HP Gen8
    remotePatterns: [
      { protocol: 'https', hostname: 'placehold.co', pathname: '/**' },
      { protocol: 'https', hostname: 's3.davidson.dev.br', port: '', pathname: '/portfolio-image/**' },      
      { protocol: 'https', hostname: 'images.unsplash.com', pathname: '/**' },
      { protocol: 'https', hostname: 'picsum.photos', pathname: '/**' },
      { protocol: 'https', hostname: 'cdn.simpleicons.org', pathname: '/**' },
      { protocol: 'https', hostname: 'img.icons8.com', pathname: '/**' },
      { protocol: 'http', hostname: apiHost.replace(/^https?:\/\//, ''), port: apiPort, pathname: '/**' },
    ],
  },
};
module.exports = nextConfig;