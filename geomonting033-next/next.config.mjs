/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "geomonting033.wordpress.com",
      },
    ],
  },
};

export default nextConfig;
