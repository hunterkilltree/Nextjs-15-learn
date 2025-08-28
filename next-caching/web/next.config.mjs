/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,

  experimental: {
    staleTimes: {
      static:10,
      dynamic:5,
    }
  },
};

export default nextConfig;
