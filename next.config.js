/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  // experimental:{
    images:{
      unoptimized:true,
    },
  // },
  // trailingSlash:true,
  swcMinify: true,
};

module.exports = nextConfig;
