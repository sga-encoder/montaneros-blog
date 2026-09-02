/** @type {import('next').NextConfig} */

const nextConfig = {
  experimental: {
    appDir: true,
  },
  images: {
    domains: ['cms.montaneros.com.co', 'montaneros-cms.onrender.com'],
  },
}

module.exports = nextConfig
