/** @type {import('next').NextConfig} */
const nextConfig = {
    images:{

    //    domains:['images.unsplash.com','res.cloudinary.com']
    
    remotePatterns: [
        {
          hostname: 'images.unsplash.com', 
        },
      ],
    }
};

export default nextConfig;
