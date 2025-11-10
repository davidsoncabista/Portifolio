/** @type {import('next').NextConfig} */
const nextConfig = {
  /* config options here */
  typescript: {
    ignoreBuildErrors: true,
  },
  eslint: {
    ignoreDuringBuilds: true,
  },
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'placehold.co',
        port: '',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
        port: '',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'picsum.photos',
        port: '',
        pathname: '/**',
      },
      {
        protocol: 'https_cdn.simpleicons.org',
        port: '',
        pathname: '/**',
      },
      {
        protocol: 'https_img.icons8.com',
        port: '',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'ollama.com',
        port: '',
        pathname: '/**',
      },
       {
        protocol: 'https',
        hostname: 'davidson-portfolio-api.onrender.com',
        port: '',
        pathname: '/**',
      },
    ],
  },
};

module.exports = nextConfig;
