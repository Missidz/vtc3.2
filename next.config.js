/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  poweredByHeader: false,
  compress: true,
  images: {
    domains: ['monvtc37.fr'], // Ajoutez ici votre domaine
    minimumCacheTTL: 60,
  },
}

module.exports = nextConfig 