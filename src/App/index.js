import React from 'react';
import { ThemeProvider } from '@material-ui/core';
import Routes from './routes';
import store, { history } from './store';
import { Provider } from 'react-redux';
import theme from './theme/theme';
import AuthProvider from './auth';
const App = () => (
  <ThemeProvider theme={theme}>
    <AuthProvider>
      <Provider store={store}>
        <Routes history={history} />
      </Provider>
    </AuthProvider>
  </ThemeProvider>
);

export default App;
