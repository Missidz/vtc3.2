/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  poweredByHeader: false,
  compress: true,
  images: {
    domains: ['monvtc37.fr'],
    formats: ['image/avif', 'image/webp'],
    minimumCacheTTL: 60,
  },
  async redirects() {
    // Le transport aéroport n'est plus proposé : on conserve le référencement des anciennes pages.
    return [
      { source: '/transfert-aeroport', destination: '/services', permanent: true },
      { source: '/contact-aeroport', destination: '/contact', permanent: true },
      { source: '/:lang(fr|en)/transfert-aeroport', destination: '/:lang/services', permanent: true },
      { source: '/:lang(fr|en)/contact-aeroport', destination: '/:lang/contact', permanent: true },
    ];
  },
};

module.exports = nextConfig;
