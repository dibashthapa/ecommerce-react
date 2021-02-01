import React, { createContext, useContext, Component } from 'react';
import Cookies from 'js-cookie';
import authService from './authService';

const initialState = {
  isUserLoggedIn: false,
  isUserVerified: false,
  authStatusReported: false,
  currentUser: {},
  loginUser: async (credentials) => {
    try {
      const res = await authService.signIn(credentials);
      return res;
    } catch (err) {
      throw err.message;
    }
  },
  fetchLoggedInUser: async () => {
    try {
      const res = await authService.fetchLoggedInUser();
      return res;
    } catch (err) {
      throw err.message;
    }
  },
  logoutUser: async () => {
    Object.keys(Cookies.get()).forEach(function (cookie) {
      Cookies.remove(cookie);
    });
    initialState.isUserLoggedIn = false;
    window.location.reload();
  },
  setToken: (token) => {
    Cookies.set('token', token);
  },
  getToken: () => {
    return Cookies.get('token');
  },
  setUserData: (data) => {},
};

export const AuthContext = createContext(initialState);

export default class AuthProvider extends Component {
  state = initialState;

  componentDidMount = async () => {
    this.setState({
      setUserData: (data) => {
        this.setState({
          authStatusReported: true,
          isUserLoggedIn: true,
          currentUser: data,
        });
      },
    });
    const token = Cookies.get('token');
    if (token === 'undefined' || token === undefined) {
      this.setState({
        authStatusReported: true,
        isUserLoggedIn: false,
        currentUser: {},
      });
      console.log(this.state);
    } else {
      // await this.verifyToken(token);
      Cookies.remove('token');
    }
  };

  render() {
    const { children } = this.props;
    const { authStatusReported } = this.state;
    return authStatusReported ? (
      <AuthContext.Provider value={this.state}>{children}</AuthContext.Provider>
    ) : (
      <></>
    );
  }
}

export const useAuth = () => {
  return useContext(AuthContext);
};

export const AuthConsumer = AuthContext.Consumer;

export { default as authService } from './authService';
