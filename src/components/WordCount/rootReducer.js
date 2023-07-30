import { combineReducers } from 'redux';
import { wordCountReducer } from './wordCountReducer';
import { charCountReducer } from './charCountReducer';
import { sentenceCountReducer } from './sentenceCountReducer';
import { paraCountReducer } from './paragraphCountReducer';
import { pronounCountReducer } from './pronounCountReducer';
import { longestWordReducer } from './longestWordReducer';

const rootReducer = combineReducers({
  wordCount: wordCountReducer,
  charCount: charCountReducer,
  sentenceCount: sentenceCountReducer,
  paragraphCount: paraCountReducer,
  pronounCount: pronounCountReducer,
  longestWord: longestWordReducer,
});

export default rootReducer;
