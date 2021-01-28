import { default as ColorPalette } from './colors';
import { createMuiTheme } from '@material-ui/core';

const theme = createMuiTheme({
  palette: ColorPalette,
  typography: {
    fontFamily: ['Poppins', 'sans-serif'].join(','),
  },
  overrides: {
    s6Default: {
      fontSize: '12px',
      lineHeight: '18px',
      fontWeight: '600'
    },
  }
});

export default theme;
