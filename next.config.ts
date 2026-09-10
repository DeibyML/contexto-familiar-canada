import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  output: 'export',
  ...(process.env.GITHUB_ACTIONS === 'true'
    ? { basePath: '/contexto-familiar-canada', assetPrefix: '/contexto-familiar-canada/' }
    : {}),
};

export default nextConfig;
