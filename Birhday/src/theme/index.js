import { createTheme } from '@mui/material/styles';

import colors from './colors';

const theme = {
  palette: {
    text: {
      primary: colors.text.primary,
    },
    primary: colors.primary,
    border: colors.border,
  },
  typography: {
    htmlFontSize: 16,
    fontFamily: [
      'Arial',
      'Noto Sans',
      'sans-serif',
      'Apple Color Emoji',
      'Segoe UI Emoji',
      'Segoe UI Symbol',
      'Noto Color Emoji',
    ].join(),
  },
};

export default createTheme(theme);
