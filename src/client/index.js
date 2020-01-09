import React from 'react';
import ReactDom from 'react-dom';
import createLogger from 'redux-logger';
import thunk from 'redux-thunk';
import {storeStateMiddleWare} from './middleware/storeStateMiddleWare';
import reducer from './reducers/save';
import App from './containers/app';
import {alert} from './actions/alert';
import Main from './components/Main.js';
import Style from './css/style.css';
import {generatePiece} from './helpers/PieceGenerations.js'

//redux
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux'                                                                            

//const firstPiece = generatePiece();

const initialState = {
 //piece: firstPiece,
  piece: [],
  stack: [],
  inMenu: true,
  inOptions: false,
  /*activeItem: '',
  activeItemPosition: 0,
  activeItemColor: '',
  menuItems: [
    { text: 'Home' },
    { text: 'Gallery' },
    { text: 'About' },
    { text: 'Blog' },
    { text: 'Contact' },
  ],*/
};

const store = createStore(
  reducer,
  initialState,
  applyMiddleware(thunk, createLogger())
);

ReactDom.render((
  <div>
    <Provider store={store}>
      <Main/>
    </Provider>
  </div>
), document.getElementById('tetris'))