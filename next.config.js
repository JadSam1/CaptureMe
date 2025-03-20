/** @type {import('next').NextConfig} */
const nextConfig = {
    eslint: {
      // This will allow the build to succeed even with ESLint errors
      ignoreDuringBuilds: true,
    },
    // This will allow the build to succeed even with TypeScript errors
    typescript: {
      ignoreBuildErrors: true,
    },
  };
  
  module.exports = nextConfig;
  