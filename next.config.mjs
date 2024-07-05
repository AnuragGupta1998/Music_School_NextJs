/** @type {import('next').NextConfig} */
const nextConfig = {
  eslint: {
    // Warning: This allows production builds to successfully complete even if
    // your project has ESLint errors.
    
    ignoreDuringBuilds: true,
  },

  images: {
    domains: ["images.unsplash.com", "res.cloudinary.com"],

    // remotePatterns: [
    //     {
    //       hostname: 'images.unsplash.com',
    //     },
    //   ],
  },
};

export default nextConfig;
