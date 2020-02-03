const initialState = {
  loginInfo: {
    username: null,
    password: null,
  },
  registerInfo: {
    email: null,
    password: null,
    // rePassword: null
  },
  status: {
    isLoading: false,
  },
};

const tempReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'UPDATE_LOGIN_USR':
      return {
        ...state,
        loginInfo: {
          ...state.loginInfo,
          username: action.payload,
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

    case 'FETCH_DATA_INIT':
      return {
        ...state,
        status: {
          ...state.status,
          isLoading: true,
        },
      };
    case 'FETCH_DATA_DONE':
      return {
        ...state,
        status: {
          ...state.status,
          isLoading: false,
        },
      };

    default:
      return state;
  }
};

export default tempReducer;
