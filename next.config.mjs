/** @type {import('next').NextConfig} */
const nextConfig = {
  // Statički export (folder `out/`) — hostuje se na Cloudflare Pages bez servera.
  output: "export",
  trailingSlash: true,
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
