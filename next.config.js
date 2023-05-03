/** @type {import('next').NextConfig} */

const nextConfig = {
  experimental: {
    appDir: true,
  },
  images: {
    domains: ['cms.montaneros.com.co'],
  },
}

module.exports = nextConfig
