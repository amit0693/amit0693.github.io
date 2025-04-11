/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  output: 'export',  // Enable static exports
  basePath: '',
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'cdn.simpleicons.org',
      },
    ],
    unoptimized: true, // Required for static export
  },
  // Disable image optimization since it's not supported with static exports
  // This is needed for GitHub Pages deployment
  trailingSlash: true,
};

export default nextConfig;
