/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  output: 'export',  // Enable static exports
  images: {
    unoptimized: true, // Required for static export
  },
  trailingSlash: true,
};

export default nextConfig;
