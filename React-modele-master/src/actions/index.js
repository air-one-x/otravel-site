
export const CHANGE_EMAIL = 'CHANGE_EMAIL';
export const CHANGE_PASSWORD = 'CHANGE_PASSWORD';
export const LOGIN_SUCCESS = 'LOGIN_SUCCESS';
export const LOGIN = 'LOGIN';

export const changePassword = (payload) => ({
  type: CHANGE_PASSWORD,
  payload,
});
export const changeEmail = (payload) => ({
  type: CHANGE_EMAIL,
  payload,
});

export const loginSucess = (payload) => ({
  type: LOGIN_SUCCESS,
  payload,
});

export const login = () => ({
  type: LOGIN,
 
});
