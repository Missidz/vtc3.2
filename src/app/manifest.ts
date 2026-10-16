import type { MetadataRoute } from 'next';

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: 'VTC Tours 37 · Chauffeur privé',
    short_name: 'VTC Tours 37',
    start_url: '/',
    display: 'standalone',
    background_color: '#0B0B0C',
    theme_color: '#0B0B0C',
    icons: [{ src: '/icon-512.png', sizes: '512x512', type: 'image/png' }],
  };
}
