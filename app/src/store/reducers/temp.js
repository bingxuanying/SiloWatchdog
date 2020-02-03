const initialState = {
  loginInfo: {
    email: null,
    password: null,
  },
  registerInfo: {
    email: null,
    password: null,
    // rePassword: null
  },
};

const tempReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'UPDATE_LOGIN_EMAIL':
      return {
        ...state,
        loginInfo: {
          ...state.loginInfo,
          email: action.payload,
        },
      };
    case 'UPDATE_LOGIN_PASSWORD':
      return {
        ...state,
        loginInfo: {
          ...state.loginInfo,
          password: action.payload,
        },
      };
    case 'CLEAR_LOGIN_INFO':
      return {
        ...state,
        loginInfo: {
          ...state.loginInfo,
          email: null,
          password: null,
        },
      };

    default:
      return state;
  }
};

export default tempReducer;
