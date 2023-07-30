const initialState = 0;

export const wordCountReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'SET_WORD_COUNT':
      return action.payload;
    default:
      return state;
  }
};