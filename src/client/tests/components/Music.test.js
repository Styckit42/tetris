import Enzyme from 'enzyme';
import React from 'react';
import { Provider } from 'react-redux';
import Adapter from 'enzyme-adapter-react-16';
import {IN_MENU} from "../../constants/statusConstants";
import {INDESTRUCTIBLE} from "../../constants/optionsConstants";
import {applyMiddleware, createStore} from "redux";
import reducer from "../../reducers/save";
import thunk from "redux-thunk";
import createLogger from "redux-logger";
import Music from "../../components/Music";

Enzyme.configure({adapter: new Adapter()});

it('renderWithoutCrashing', () => {
  const initialState = {
    stack: [],
    gameState: IN_MENU,
    inOptions: false,
    score: 0,
    levels: 1,
    linesErased: 0,
    piece: null,
    shadowPiece: null,
    nextPiece: null,
    speed: 1000,
    hasToFall: false,
    volume: 0.01,
    isAdmin: false,
    opponentList: [],
    linesBeingErased: 0,
    playerId: '',
    playerName: '',
    gameOptions: {
      gameType: INDESTRUCTIBLE,
      colorBlind: false,
      boardSize: {
        width: 10,
        height: 20,
      },
      levelStart: 1,
    },
  };
  const store = createStore(
    reducer,
    initialState,
    applyMiddleware(thunk, createLogger()),
  );
  Enzyme.shallow(<Provider store={store} ><Music /></Provider>);
});
