module.exports = {
  stories: ['../src/**/*.stories.tsx'],
  addons: ['@storybook/addon-actions', '@storybook/addon-links', 'storybook-addon-react-docgen'],
  webpackFinal: async config => {
    // do mutation to the config
    config.module.rules.push({
      test: /\.scss$/,
      use: ['style-loader', 'css-loader', 'sass-loader'],
    });
    config.module.rules.push({
      test: /\.(ts|tsx)$/,
      use: ['ts-loader', 'react-docgen-typescript-loader'],
    });
    config.resolve.extensions.push('.ts', '.tsx', '.scss');
    return config;
  },
};
