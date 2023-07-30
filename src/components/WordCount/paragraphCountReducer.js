const initialState = 0;

export const paraCountReducer = (state = initialState, action) => {
    switch (action.type) {
      case 'SET_PARA_COUNT':
        return action.payload;
      default:
        return state;
    }
  };
