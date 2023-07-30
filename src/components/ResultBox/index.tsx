import './index.scss';
import { useSelector } from 'react-redux';
import { AppState } from '../WordCount/types';
const ResultBox = () => {
  const wordCount = useSelector((state: AppState) => state.wordCount);
  const charCount = useSelector((state: AppState) => state.charCount);
  const sentenceCount = useSelector((state: AppState) => state.sentenceCount);
  const paragraphCount = useSelector((state: AppState) => state.paragraphCount);
  const pronounCount = useSelector((state: AppState) => state.pronounCount);
  // Move resultBar array inside the component to update it with the current wordCount
  const resultBar = [
    {
      title: 'Words',
      value: wordCount, // Set the 'Words' value to the wordCount
    },
    {
      title: 'Characters',
      value: charCount,
    },
    {
      title: 'Sentences',
      value: sentenceCount,
    },
    {
      title: 'Paragraphs',
      value: paragraphCount,
    },
    {
      title: 'Pronouns',
      value: pronounCount,
    },
  ];

  return (
    <div className="result-bar">
      {resultBar.map(({ title, value }) => (
        <div className="result-box" key={title}>
          <span className="box-title">{title}</span>
          <span className="box-value">{value}</span>
        </div>
      ))}
    </div>
  );
};

export default ResultBox;
