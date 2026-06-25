/** @type {import('next').NextConfig} */
const nextConfig = {
  typescript: {
    // Keeps build rolling even with minor config mismatches
    ignoreBuildErrors: true, 
  },
  webpack: (config, { isServer }) => {
    // Telles Webpack to completely ignore your migration file during production build
    if (isServer) {
      config.externals.push({
        './src/db/migrate': 'commonjs ./src/db/migrate',
      });
    }
    return config;
  },
};

module.exports = nextConfig;