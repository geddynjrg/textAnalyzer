const initialState = 0;

export const sentenceCountReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'SET_SENTENCE_COUNT':
      return action.payload;
    default:
      return state;
  }
};