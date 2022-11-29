const colors = require('tailwindcss/colors');

module.exports = {
  mode: 'jit',
  content: [
    './src/**/*.tsx',
    './public/index.html',
  ],
  theme: {
    extend: {
      colors: {
        // General
        page: {
          from_bg: colors.red[500],
          to_bg: colors.red[500],
        },
        titles: colors.red[600],
        links: {
          txt: colors.red[600],
          hover_txt: colors.red[700],
        },
        loading_spinner: colors.red[400],
        popups: {
          bg: colors.red[200],
          txt: colors.slate[800],
          internal_border: colors.slate[200],
        },
        warning: {
          txt: colors.slate[800],
          bg: colors.yellow[400],
          border: colors.yellow[500],
        },
        error: {
          txt: colors.red[500],
          bg: colors.red[50],
          border: colors.red[200],
        },

        // Inputs
        btn: {
          txt: colors.slate[800],
          bg: colors.red[300],
          border: colors.slate[200],
          hover_txt: colors.red[800],
          hover_bg: colors.red[500],
          hover_border: colors.red[400],
        },
        btn_primary: {
          txt: colors.white,
          bg: colors.red[500],
          border: colors.red[500],
          hover_txt: colors.white,
          hover_bg: colors.red[600],
          hover_border: colors.red[600],
        },
        btn_error: {
          txt: colors.white,
          bg: colors.red[500],
          border: colors.red[500],
          hover_txt: colors.white,
          hover_bg: colors.red[600],
          hover_border: colors.red[600],
        },
        label: colors.red[600],
        txt_input: {
          txt: colors.red[400],
          bg: colors.white,
          border: colors.slate[200],
          focus_txt: colors.red[600],
          focus_bg: colors.slate[50],
          focus_border: colors.red[300],
          placeholder_txt: colors.red[600],
        },
        
        // Whitelist proof widget
        wl_message: {
          txt: colors.slate[800],
          bg: colors.red[500],
        },

        // Mint widget
        token_preview: colors.red[400],
      },
    },
  },
  variants: {},
  plugins: [],
};
