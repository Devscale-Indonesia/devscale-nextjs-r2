/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        hostname: "pub-...", // `R2_PUBLIC_URL`
        pathname: "/**",
        protocol: "https",
      },
    ],
  },
};

export default nextConfig;
