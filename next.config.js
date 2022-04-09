const { BundleAnalyzerPlugin } = require('webpack-bundle-analyzer');

module.exports = {
  reactStrictMode: true,
  images: {
    domains: ['images.unsplash.com'],
  },
  // i18n: {
  //   locales: ['zh-tw', 'en'],
  //   defaultLocale: 'zh-tw',
  // },
  webpack(config) {
    config.module.rules.push({
      test: /\.svg$/,
      issuer: {
        // test: /\.(js|ts)x?$/,
        // for webpack 5 use
        and: [/\.(js|ts)x?$/],
      },

      use: ['@svgr/webpack'],
    });

    if (process.env.NEXT_ANALYZE) {
      config.plugins.push(
        new BundleAnalyzerPlugin({
          analyzerMode: 'server',
          analyzerPort: 8888,
          openAnalyzer: true,
        }),
      );
    }

    return config;
  },
};
