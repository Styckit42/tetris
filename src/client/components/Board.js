import React from "react"
import {connect} from 'react-redux'
import Piece from './Piece.js'
import Score from './Score.js'
import {LEFT, RIGHT, UP, DOWN, SPACE, ESC} from '../constants/keyBoardConstants.js'
import {COLLISION_STACK, COLLISION_WALL, COLLISION_GAMEOVER, NO_COLLISION} from '../constants/collisionConstants.js'
import {savePieceAction, saveBagAction, saveStackAction, saveInMenuAction, saveScoreAction, saveLevelsAction, saveLinesErasedAction} from '../actions/save.js'
import {move, collisionTest} from '../helpers/Movements.js'
import {generatePiece, generateBag} from '../helpers/PieceGenerations.js'
import {eraseLineCheck} from '../helpers/Line.js'
import {rotate, applyWallKick} from '../helpers/Rotate.js'
import {handleOnKeyDown} from '../helpers/HandleEvents.js'
import {WALLKICK_DEFAULT, WALLKICK_I, STATE_0, STATE_1, STATE_2, STATE_3} from '../constants/rotateConstants.js'
import {I, T, O, J, L, Z, S, BRICKS_T} from '../constants/piecesConstants.js'


const width = 10;
const height = 20;
	
	//Génération du board entier
	const generateBoard = () => {
		const board = []
		for (let j = 0; j < height; j++) {
			for (let i = 0; i < width; i++) {
				let brickBoard = {
					x: i,
					y: j,
					color: 'transparent',
				};
				board.push(brickBoard);
			}
		}
		return board;
	};
	
	//Enlever les coord des pieces en cours et du tas, du board entier
	const filterPieces = (brickBoard, piece, stack) => {
		for (let index in piece) {
			let brick = piece[index];
			if (brickBoard.x === brick.x && brickBoard.y === brick.y) {
				return false;
			}
		};
		for (let index in stack) {
			let brick = stack[index];
			if (brickBoard.x === brick.x && brickBoard.y === brick.y) {
				return false
			}
	};
	return true;
};

const filterBoard = (board, piece, stack) => {
	for (let i = 0; i < board.length; i++) {
		const brickBoard = board[i];
    if (!filterPieces(brickBoard, piece, stack)) {
			board.splice(i, 1);
      i--;
    }
  };
  return board;
};


class Board extends React.Component {
	constructor(props) {
		super(props);
		console.log("dans construc")
	};
	componentDidMount() {
	};
	shouldComponentUpdate(nextProps, nextState) {
		if (this.props.piece === null) {
			return false
		}
		return true;
	}
	componentDidUpdate(prevProps, prevState, snapshot) {

	};
	render() {
		console.log("in board")
		let myTimeout = setInterval(() => {
		handleOnKeyDown({keyCode: DOWN}, this.props, width, height, myTimeout)
		console.log(myTimeout)}, 3000)
		//let myTimeout = 42
		const { piece, stack} = this.props
		const board = generateBoard();
		const boardFiltered = filterBoard(board, piece.bricks, stack);
		return (
			<div role="button" tabIndex="0" onKeyDown={e => {
			clearInterval(myTimeout);
			handleOnKeyDown(e, this.props, width, height, myTimeout)
		}}>
			<div className="board">
		    <Piece bricks={boardFiltered}/>
		    <Piece bricks={piece.bricks}/>
		    <Piece bricks={stack}/>
  		</div>
			<div className="boxScore">
				<Score/>
			</div>
		</div>
  )
	}
}

/*const Board = (props) => {
	console.log("in board")
	//let myTimeout = setTimeout(() => {handleOnKeyDown({keyCode: DOWN}, props, width, height)}, 1000)
	let myTimeout = 42
	const { piece, stack} = props
	console.log(piece)
	const board = generateBoard();
	const boardFiltered = filterBoard(board, piece.bricks, stack);
	return (
		<div role="button" tabIndex="0" onKeyDown={e => {clearTimeout(myTimeout); handleOnKeyDown(e, props, width, height)}}>
			<div className="board">
		    <Piece bricks={boardFiltered}/>
		    <Piece bricks={piece.bricks}/>
		    <Piece bricks={stack}/>
  		</div>
			<div classeName="boxScore">
				<Score/>
			</div>
		</div>
  )
}*/

const mapStateToProps = (state) => {
	return {
		piece: state.piece,
		stack: state.stack,
		inMenu: state.inMenu,
		score: state.score,
		levels: state.levels,
		linesErased: state.linesErased,
		bag: state.bag
	};
};

const mapDispatchToProps = (dispatch) => {
	return {
		savePiece: piece => {
			dispatch(savePieceAction(piece))
		},
		saveStack: piece => {
			dispatch(saveStackAction(piece))
		},
		saveInMenu: inMenu => {
			dispatch(saveInMenuAction(inMenu))
		},
		saveScore: score => {
			dispatch(saveScoreAction(score))
		},
		saveLevels: levels => {
			dispatch(saveLevelsAction(levels))
    },
    saveLinesErased: linesErasedInCurrentLevel => {
			dispatch(saveLinesErasedAction(linesErasedInCurrentLevel))
		},
		saveBag: bag => {
			dispatch(saveBagAction(bag))
		}
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(Board)

/*const gameOverCheck = (piece, stack) => {
		for (let i = 0; i < piece.length; i++) {
			const brickPiece = piece[i];
			for (let j = 0; j < stack.length; j++) {
				const brickStack = stack[j];
				if (brickPiece.x === brickStack.x && brickPiece.y === brickStack.y) {
					return true
				}
			}
		}
		return false
	}*/

// Contrat de service

/**
 * Board
 * The main game component
 * param : -pieceToPlay (object)
 *         -stack (object)
 *         -save*** (Redux functions, listed in the functions mapDispatchToProps)
 * 
 * return : A piece component
 */

/**
 * HandleOnKeyDown
 * Event Handler / saving new blocks position
 * param : -keycode (number or constants)
 *         -piece (object)
 *         -stack (object)
  *         -save*** (Redux functions, listed in the functions mapDispatchToProps)
  */

 /**
  * FilterBoard
  * Fill the Array Board with the values of the empty blocks
  * param : -board   \
	*         -stack   -- Object
	*         -piece   /
	* return : a board with new values of the empty blocks
  */

 /**
  * FilterPieces
  * Send a boolean, depend if the current block should be in piece/stack object, or in board
  * param : -boardBricks   \
	*         -stack         -- Object
	*         -piece         /
	* return : boolean (true if the block is not is stack or piece)
  */

