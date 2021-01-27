import { default as ColorPalette } from './colors';
import { createMuiTheme } from '@material-ui/core';

const theme = createMuiTheme({
  palette: ColorPalette,
  typography: {
    fontFamily: ['Poppins', 'sans-serif'].join(','),
  },
});

export default theme;
