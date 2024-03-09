/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  webpack: (config, { dev }) => {
    // Add custom webpack configurations here

    // Example: Disable hot module replacement (HMR)
    if (dev && config.devServer) {
      config.devServer.hot = false;
    }

    // Other webpack configurations...

    return config;
  },
}

module.exports = nextConfig
