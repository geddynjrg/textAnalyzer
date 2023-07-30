const initialState = 0;

export const longestWordReducer = (state = initialState, action) => {
    switch (action.type) {
      case 'SET_LONGEST_WORD':
        return action.payload;
      default:
        return state;
    }
  };
