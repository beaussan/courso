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
      minWidth: (theme) => ({
        '0': '0',
        ...theme('spacing'),
        'full': '100%',
        'min-content': 'min-content',
        'max-content': 'max-content',
      }),
      minHeight: (theme) => ({
        0: '0',
        full: '100%',
        ...theme('spacing'),
        screen: '100vh',
      }),
    },
  },
  experimental: {
    uniformColorPalette: true,
  },
  variants: {},
  plugins: [require('@tailwindcss/ui')],
};
