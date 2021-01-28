import React from 'react';
import { CssBaseline, ThemeProvider } from '@material-ui/core';
import Routes from './routes';
import theme from './theme/theme';
const App = () => (
  <ThemeProvider theme={theme}>
    <Routes />
    <CssBaseline />
  </ThemeProvider>
);

export default App;
