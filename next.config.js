module.exports = {
  reactStrictMode: true,
  i18n: {
    locales: ['zh-tw', 'en'],
    defaultLocale: 'zh-tw',
  },
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

    return config;
  },
};
