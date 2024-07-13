/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'heyfood.africa',
        pathname: '/icons/new**',
      },
    ],
  },
}

module.exports = nextConfig
