import React from 'react';
import { ThemeProvider } from '@material-ui/core';
import Routes from './routes';
import store, { history } from './store';
import { Provider } from 'react-redux';
import theme from './theme/theme';
import AuthProvider from './auth';
const App = () => (
   <ThemeProvider theme={theme}>
      <Provider store={store}>
         <AuthProvider>
            <Routes history={history} />
         </AuthProvider>
      </Provider>
   </ThemeProvider>
);

export default App;
