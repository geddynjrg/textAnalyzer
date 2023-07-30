import './index.scss'
import { useSelector } from 'react-redux';
import { AppState } from '../WordCount/types';

const BottomResultBox = () => {
  const wordCount = useSelector((state: AppState) => state.wordCount);
  const AVERAGE_READING_SPEED = 225;
  const readingSpeed = Math.ceil(wordCount / AVERAGE_READING_SPEED);
  const longestWord = useSelector((state: AppState) => state.longestWord);
  
  const bottomResultBar = [
    {
      title: 'Average Reading Time:',
      value: readingSpeed.toString(),
    },
    {
      title: 'Longest word:',
      value: longestWord,
    },
  ]

  return (
    <div className="bottom-result-bar">
      {bottomResultBar.map(({ title, value }) => (
        <div className="result-box" key={title}>
          <span className="box-title">{title}</span>
          <span className="box-value">{value}</span>
        </div>
      ))}
    </div>
  )
}

export default BottomResultBox
