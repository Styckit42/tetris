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

export default connect(mapStateToProps, null)(Main)

/**
 * Main component
 * param : -inMenu (boolean)
 *         -savePiece (redux function)
 * return : Menu or Board component (depend of inMenu value)
 * 
 */
