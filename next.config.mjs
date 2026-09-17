/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    unoptimized: true,
  },
  async redirects() {
    return [
      {
        source: '/loc/:branch',
        destination: '/locations/:branch',
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
