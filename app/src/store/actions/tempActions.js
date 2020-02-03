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

export const initLoading = () => {
  return {
    type: 'FETCH_DATA_INIT',
    payload: null,
  };
};

export const doneLoading = () => {
  return {
    type: 'FETCH_DATA_DONE',
    payload: null,
  };
};
