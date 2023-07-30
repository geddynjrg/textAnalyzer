const initialState = 0;

export const charCountReducer = (state = initialState, action) => {
    switch (action.type) {
      case 'SET_CHAR_COUNT':
        return action.payload;
      default:
        return state;
    }
  };
