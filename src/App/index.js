import React from 'react';
import { ThemeProvider } from '@material-ui/core';
import Routes from './routes';
import theme from './theme/theme';
import AuthProvider from './auth';
const App = () => (
  <ThemeProvider theme={theme}>
    <AuthProvider>
      <Routes />
    </AuthProvider>
  </ThemeProvider>
);

export default App;
