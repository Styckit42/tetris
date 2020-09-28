import React from 'react';
import ReactDom from 'react-dom';
import createLogger from 'redux-logger';
import thunk from 'redux-thunk';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import { ThemeProvider } from 'styled-components';
import reducer from './reducers/save';
import Main from './components/Main';
import { IN_MENU } from './constants/statusConstants';
import GlobalStyles from './styles/globalStyles';

const theme = {
  mainColor: '#F2A640',
  darkColor: '#060C21',
  darkBorderColor: '#2E407F',
  brightBlueColor: '#00bcd4',
};

const initialState = {
  stack: [],
  gameState: IN_MENU,
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
  linesBeingErased: 0,
  playerId: '',
  playerName: '',
};

const store = createStore(
  reducer,
  initialState,
  applyMiddleware(thunk, createLogger()),
);

ReactDom.render((
  <React.Fragment>
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <Provider store={store}>
        <Main />
      </Provider>
    </ThemeProvider>
  </React.Fragment>
), document.getElementById('tetris'));
