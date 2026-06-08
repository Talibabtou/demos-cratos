import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  async redirects() {
    return [
      {
        source: '/fifth-constitution',
        destination: '/en/constitution-reader',
        permanent: false,
      },
      {
        source: '/:locale/fifth-constitution',
        destination: '/:locale/constitution-reader',
        permanent: false,
      },
      {
        source: '/sixth-republic',
        destination: '/en/constitution-workshop',
        permanent: false,
      },
      {
        source: '/:locale/sixth-republic',
        destination: '/:locale/constitution-workshop',
        permanent: false,
      },
      {
        source: '/municipality-tools',
        destination: '/en/municipal-democracy',
        permanent: false,
      },
      {
        source: '/:locale/municipality-tools',
        destination: '/:locale/municipal-democracy',
        permanent: false,
      },
    ];
  },
  poweredByHeader: false,
  reactStrictMode: true,
};

export default nextConfig;
