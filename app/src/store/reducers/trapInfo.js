const initialState = {
  trapLst: [],
  currentTrap: {
    id: null,
    data: null,
  },
  err: null,
};

const trapInfoReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'FETCH_TRAP_DATA_DONE':
      return {
        ...state,
        trapLst: action.payload,
      };
    case 'FETCH_TRAP_DATA_ERR':
      return {
        ...state,
        err: action.payload,
      };

    case 'UPDATE_CURRENT_TRAP':
      return {
        ...state,
        currentTrap: {
          ...state.currentTrap,
          id: action.payload,
        },
      };

    default:
      return state;
  }
};

export default trapInfoReducer;
