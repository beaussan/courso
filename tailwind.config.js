const defaultTheme = require('tailwindcss/defaultTheme');
const colors = require('tailwindcss/colors');

module.exports = {
  future: {
    removeDeprecatedGapUtilities: true,
    purgeLayersByDefault: true,
  },
  mode: 'jit',
  purge: ['./src/**/*.ts', './src/**/*.tsx', './public/index.html'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter var', ...defaultTheme.fontFamily.sans],
      },
      colors: {
        teal: colors.teal,
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
  variants: {},
  plugins: [
    require('@tailwindcss/forms'),
    require('@tailwindcss/typography'),
    require('@tailwindcss/aspect-ratio'),
  ],
};
