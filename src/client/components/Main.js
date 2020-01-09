import React from "react"
import {connect} from 'react-redux'
import {savePieceAction} from '../actions/save.js'
import {generatePiece} from '../helpers/PieceGenerations.js'
import Menu from './Menu.js'
import Board from './Board.js';

const Main = ({inMenu, savePiece}) => {
  if (inMenu === true) {
    return (
      <div><Menu/></div>
    )
  }
  else {
    const piece = generatePiece();
    savePiece(piece);
    return (
      <div><Board/></div>
    )
  }
};

const mapStateToProps = (state) => {
	return {
		inMenu: state.inMenu,
	};
};

const mapDispatchToProps = (dispatch) => {
	return {
		savePiece: piece => {
			dispatch(savePieceAction(piece))
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Main)
