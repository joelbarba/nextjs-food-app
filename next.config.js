/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'jb-default-bucket.s3.amazonaws.com',
        port: '',
        pathname: '/images/**',
      },
    ],
  },
};

module.exports = nextConfig
