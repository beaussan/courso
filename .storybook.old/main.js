const svgPlugin = require('vite-plugin-svgr');
const tsconfigPaths = require('vite-tsconfig-paths').default;
const nodePolyfils = require('rollup-plugin-polyfill-node');

if (typeof window !== 'undefined' && typeof window.global === 'undefined') {
  window.global = window;
}

module.exports = {
  stories: ['../src/**/*.stories.mdx', '../src/**/*.stories.@(js|jsx|ts|tsx)'],
  addons: ['@storybook/addon-links', '@storybook/addon-essentials'],
  core: {
    builder: 'storybook-builder-vite',
  },
  async viteFinal(config, { configType, ...rest }) {
    // customize the Vite config here
    // config.resolve.alias.foo = 'bar';

    config.plugins = [tsconfigPaths(), svgPlugin(), ...config.plugins];
    config.build = {
      ...config.build,
      rollupOptions: {
        ...config?.rollupOptions,
        plugins: [...(config?.rollupOptions?.plugins ?? []), nodePolyfils()],
      },
    };

    // return the customized config
    return config;
  },
};
