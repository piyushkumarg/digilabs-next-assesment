/** @type {import('next').NextConfig} */
const isLocal = process.env.NODE_ENV === "development";

const nextConfig = {
  compiler: {
    styledComponents: true,
  },
  images: {
    domains: ["res.cloudinary.com"],
  },
  async rewrites() {
    return [
      {
        source: "/api/:path*",
        destination: isLocal
          ? "http://localhost:8080/api/:path*"
          : "https://digilabs-backend-assesment.vercel.app/api/:path*",
      },
    ];
  },
};

module.exports = nextConfig
