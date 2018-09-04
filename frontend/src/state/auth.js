import { makeDuck } from 'cooldux';
import localstorage from 'store2';

import { auth } from '../common/lib';

const loginHandler = () => auth.authorize();

const authenticationHandler = async () =>
  new Promise((resolve, reject) => {
    auth.parseHash((err, authResult) => {
      if (authResult && authResult.accessToken && authResult.idToken) {
        setSession(authResult);
        resolve(true);
      } else if (err) {
        reject(false);
      }
    });
  });

const setSession = authResult => {
  let expiresAt = JSON.stringify(authResult.expiresIn * 1000 + new Date().getTime());
  localstorage.set('access_token', authResult.accessToken);
  localstorage.set('id_token', authResult.idToken);
  localstorage.set('expires_at', expiresAt);
};

const logoutHandler = () => {
  localstorage.remove('access_token');
  localstorage.remove('id_token');
  localstorage.remove('expires_at');
  return true;
};

const checkAuth = async () =>
  new Promise((resolve, reject) => {
    let expiresAt = JSON.parse(localstorage.get('expires_at'));
    const isValid = new Date().getTime() < expiresAt;
    if (isValid) {
      resolve(true);
    }
    reject(false);
  });

const duck = makeDuck({
  isAuthenticated: async() => checkAuth(),
  logout: () => logoutHandler(),
  login: () => loginHandler(),
  handleAuthentication: async () => {
    const value = await authenticationHandler();
    return value;
  },
});

export const { handleAuthentication, isAuthenticated, login, logout } = duck;
export default duck.reducerCombined;
