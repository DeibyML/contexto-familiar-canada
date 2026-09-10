import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  output: 'export',
  ...(process.env.GITHUB_ACTIONS === 'true'
    ? { assetPrefix: '/contexto-familiar-canada/' }
    : {}),
};

export default nextConfig;
