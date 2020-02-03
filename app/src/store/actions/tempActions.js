import axios from 'axios';

export const updateLoginUsr = username => {
  return {
    type: 'UPDATE_LOGIN_USR',
    payload: username,
  };
};

export const updateLoginPassword = password => {
  return {
    type: 'UPDATE_LOGIN_PASSWORD',
    payload: password,
  };
};
