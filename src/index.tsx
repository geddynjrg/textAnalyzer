import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import store from 'C:/Users/gedio/Downloads/react-challenges/practical-reactjs-coding-challenges/text-analyzer-tool/src/components/WordCount/store.js'; // Import your Redux store
import App from './App';

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);
