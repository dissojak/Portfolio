module.exports = {
  trailingSlash: true,
  reactStrictMode: true,

  webpack(config) {
    return config;
  },
  async redirects() {
    return [
      {
        source: '/', // The root URL
        destination: '/about', // Redirect to /about
        permanent: true, // Indicates a permanent redirect (301 status)
      },
    ];
  },
};
