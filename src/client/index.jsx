import React from 'react';
import ReactDom from 'react-dom';
import createLogger from 'redux-logger';
import thunk from 'redux-thunk';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import reducer from './reducers/save';
import Main from './components/Main';
import { IN_MENU } from './constants/statusConstants';
import './css/style.css';

const initialState = {
  stack: [],
  gameState: IN_MENU,
  inOptions: false,
  score: 0,
  levels: 1,
  linesErased: 0,
  piece: null,
  bag: null,
  speed: 1000,
  hasToFall: false,
  volume: 0.01,
};

const store = createStore(
  reducer,
  initialState,
  applyMiddleware(thunk, createLogger()),
);

ReactDom.render((
  <div>
    <Provider store={store}>
      <Main />
    </Provider>
  </div>
), document.getElementById('tetris'));
