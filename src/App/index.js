import React from 'react';
import { ThemeProvider } from '@material-ui/core';
import Routes from './routes';
import theme from './theme/theme';
const App = () => (
  <ThemeProvider theme={theme}>
    <Routes />
  </ThemeProvider>
);

export default App;
