const defaultTheme = require('tailwindcss/defaultTheme');

module.exports = {
  future: {
    removeDeprecatedGapUtilities: true,
    purgeLayersByDefault: true,
  },
  purge: ['./src/**/*.ts', './src/**/*.tsx', './public/index.html'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter var', ...defaultTheme.fontFamily.sans],
      },
    },
  },
  experimental: {
    uniformColorPalette: true,
  },
  variants: {},
  plugins: [require('@tailwindcss/ui')],
};
