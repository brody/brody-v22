module.exports = {
  reactStrictMode: true,
  images: {
    domains: ['i.scdn.co', 'i.gr-assets.com'],
  },
  webpack5: true,
  webpack: (config, { isServer }) => {
    if (!isServer) {
      config.resolve.fallback.fs = false;
      config.resolve.fallback.module = false;
      config.resolve.fallback.child_process = false;
    }
    return config;
  },
};
