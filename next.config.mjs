/** @type {import('next').NextConfig} */
const nextConfig = {
  /* config options here */
  reactCompiler: true,
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "madebydesignesia.com",
        port: "",
        pathname: "/**", // Iska matlab hai is domain ki sari images allow hain
      },
    ],
  },
};

export default nextConfig;
