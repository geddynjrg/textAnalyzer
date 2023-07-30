const initialState = 0;

export const pronounCountReducer = (state = initialState, action) => {
    switch (action.type) {
      case 'SET_PRONOUN_COUNT':
        return action.payload;
      default:
        return state;
    }
  };