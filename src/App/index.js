import React from 'react';
import Routes from './routes';
import store, { history } from './store';
import { Provider } from 'react-redux';
import AuthProvider from './auth';
import '../assets/css/bootstrap.min.css';
const App = () => (
   <Provider store={store}>
      <AuthProvider>
         <Routes history={history} />
      </AuthProvider>
   </Provider>
);

export default App;
