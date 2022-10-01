const path = require('path');

module.exports = {
  stories: ['../src/**/*.stories.mdx', '../src/**/*.stories.@(js|jsx|ts|tsx)'],
  addons: [
    '@storybook/addon-links',
    '@storybook/addon-essentials',
    '@storybook/addon-interactions',
    'storybook-addon-next-router',
  ],
  framework: '@storybook/react',
  core: {
    builder: '@storybook/builder-webpack5',
  },
  webpackFinal: async (config) => {
    // storybookとMUIのemotionでバージョン違いの差異を吸収
    delete config.resolve.alias['emotion-theming'];
    delete config.resolve.alias['@emotion/styled'];
    delete config.resolve.alias['@emotion/core'];

    // svgを表示させる設定
    const fileLoaderRule = config.module.rules.find((rule) => rule.test && rule.test.test('.svg'));
    fileLoaderRule.exclude = /\.svg$/;
    config.module.rules.push({
      test: /\.svg$/,
      use: ['@svgr/webpack'],
    });
    // importのパス問題を解決する設定
    config.resolve.alias = {
      ...config.resolve.alias,
      components: path.resolve(__dirname, '../src/components'),
      styles: path.resolve(__dirname, '../src/styles'),
      mocks: path.resolve(__dirname, '../src/mocks'),
      lib: path.resolve(__dirname, '../src/lib'),
      utils: path.resolve(__dirname, '../src/utils'),
      hooks: path.resolve(__dirname, '../src/hooks'),
      types: path.resolve(__dirname, '../src/types'),
      styles: path.resolve(__dirname, '../src/styles'),
    };

    return {
      ...config,
      resolve: {
        ...config.resolve,
        alias: {
          ...config.resolve.alias,
        },
      },
    };
  },
};
