import './index.scss';
import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setWordCount } from 'C:/Users/gedio/Downloads/react-challenges/practical-reactjs-coding-challenges/text-analyzer-tool/src/components/WordCount/wordCountActions.js';
import { setCharCount } from 'C:/Users/gedio/Downloads/react-challenges/practical-reactjs-coding-challenges/text-analyzer-tool/src/components/WordCount/charCountActions.js';
import { setSentenceCount } from 'C:/Users/gedio/Downloads/react-challenges/practical-reactjs-coding-challenges/text-analyzer-tool/src/components/WordCount/sentenceCountActions.js';
import { setParagraphCount } from '../WordCount/paragraphCountActions';
import { setPronounCount } from '../WordCount/pronounCountActions';
import { setLongestWord } from '../WordCount/longestWordActions';
import { pronouns } from 'C:/Users/gedio/Downloads/react-challenges/practical-reactjs-coding-challenges/text-analyzer-tool/src/data/pronouns';
import { AppState } from 'C:/Users/gedio/Downloads/react-challenges/practical-reactjs-coding-challenges/text-analyzer-tool/src/components/WordCount/types';

export const TextArea = () => {
  const dispatch = useDispatch();
  const wordCount = useSelector((state: AppState) => state.wordCount);
  const charCount = useSelector((state: AppState) => state.charCount);
  const sentenceCount = useSelector((state: AppState) => state.sentenceCount);
  const paragraphCount = useSelector((state: AppState) => state.paragraphCount);
  const pronounCount = useSelector((state: AppState) => state.pronounCount);
  const longestWord = useSelector((state: AppState) => state.longestWord);

  //const [longestWord, setLongestWord] = useState('');
  const handleChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    const { value } = event.target;
    const wordCount = value.trim().split(/\s+/).filter(Boolean).length;
    dispatch(setWordCount(wordCount));

    // Calculate the total character count including spaces
    dispatch(setCharCount(value.length));

    // Calculate the sentence count
    const sentenceCount = value.split(/[.!?]/).filter(Boolean).length;
    dispatch(setSentenceCount(sentenceCount));

    // Calculate the paragraph count
    const paragraphCount = value.split(/\n/).filter(Boolean).length;
    dispatch(setParagraphCount(paragraphCount));

     const lowerCaseValue = value.toLowerCase();
     const pronounOccurrences = pronouns.reduce(
       (count, pronoun) => count + (lowerCaseValue.match(new RegExp(`\\b${pronoun}\\b`, 'g')) || []).length,
       0
     );
    dispatch(setPronounCount(pronounOccurrences));

    // Find the longest word
    const words = value.trim().split(/\s+/).filter(Boolean);
    const longest = words.reduce((longestWord, currentWord) => {
      return currentWord.length > longestWord.length ? currentWord : longestWord;
    }, '');

    dispatch(setLongestWord(longest));
  };
  

  return (
       <textarea
        className="text-area"
        placeholder="Paste your text here..."
        onChange={handleChange}
      />
  );
};

export default TextArea;