import Api from '../services/api';

const auth = {
   signIn: async (credentials) => {
      const api = new Api(false);
      return await api.post('auth/login', credentials);
   },
   fetchLoggedInUser: async (token) => {
      const api = new Api(false);
      return await api.post('/user', { token });
   },
   signOut: () => {
      return true;
   },
};

export default auth;
