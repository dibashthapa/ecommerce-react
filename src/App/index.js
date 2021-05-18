import React from 'react';
import Routes from './routes';
import store, { history } from './store';
import { Provider } from 'react-redux';
import AuthProvider from './auth';
import { ChakraProvider } from '@chakra-ui/react';
import '../assets/css/bootstrap.min.css';
const App = () => (
   <Provider store={store}>
      <ChakraProvider>
         <AuthProvider>
            <Routes history={history} />
         </AuthProvider>
      </ChakraProvider>
   </Provider>
);

export default App;
