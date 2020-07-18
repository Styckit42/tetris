import React from 'react';
import ReactDom from 'react-dom';
import createLogger from 'redux-logger';
import thunk from 'redux-thunk';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import { ThemeProvider } from 'styled-components';
import reducer from './reducers/save';
import Main from './components/Main';
import { MULTI_MENU } from './constants/statusConstants';
import './css/style.css';

const theme = {
  mainColor: '#f2a640',
};

const initialState = {
  stack: [],
  gameState: MULTI_MENU,
  inOptions: false,
  score: 0,
  levels: 1,
  linesErased: 0,
  piece: null,
  nextPiece: null,
  speed: 1000,
  hasToFall: false,
  volume: 0.01,
  isAdmin: false,
  opponentList: [],
};

const store = createStore(
  reducer,
  initialState,
  applyMiddleware(thunk, createLogger()),
);

ReactDom.render((
  <ThemeProvider theme={theme}>
    <Provider store={store}>
      <Main />
    </Provider>
  </ThemeProvider>
), document.getElementById('tetris'));
