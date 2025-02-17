/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  images: {
    unoptimized: true, // For Amplify deployment
    remotePatterns: [
      {
        protocol: 'https',
        hostname: '**',
      },
    ],
  },
  experimental: {
    optimizePackageImports: ['@radix-ui/react-icons', 'lucide-react'],
  },
  // Amplify specific settings
  generateEtags: false,
  poweredByHeader: false,
  compress: false,
  // Add Google Maps to the list of external scripts
  compiler: {
    styledComponents: true,
  },
};

module.exports = nextConfig; 