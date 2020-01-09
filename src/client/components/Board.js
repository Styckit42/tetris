import React from "react"
import {connect} from 'react-redux'
import Piece from './Piece.js'
import {LEFT, RIGHT, UP, DOWN, SPACE, ESC} from '../constants/keyBoardConstants.js'
import {COLLISION_STACK, COLLISION_WALL, COLLISION_GAMEOVER, NO_COLLISION} from '../constants/collisionConstants.js'
import {savePieceAction, saveStackAction, saveInMenuAction} from '../actions/save.js'
import {move, collisionTest} from '../helpers/Movements.js'
import {generatePiece} from '../helpers/PieceGenerations.js'
import {eraseLineCheck} from '../helpers/Line.js'
import {rotate, applyWallKick} from '../helpers/Rotate.js'
import {WALLKICK_DEFAULT, WALLKICK_I, STATE_0, STATE_1, STATE_2, STATE_3} from '../constants/rotateConstants.js'
import {I, T, O, J, L, Z, S, BRICKS_T} from '../constants/piecesConstants.js'


const width = 10;
const height = 20;

const downSetInterval = (piece, savePiece) => {
	console.log("in down 1");
	console.log(piece);
	piece.map(
		brick => {
			brick.y += 1;
			return brick;
		}
		)
		console.log("in down 2");
		console.log(piece);
		savePiece(piece);
}
	
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

//hub mouvements
const handleOnKeyDown = ({ keyCode }, piece, stack, savePiece, saveStack) => {
	let pieceTmp = _.cloneDeep(piece);
	if (keyCode === UP) {
		pieceTmp = rotate(pieceTmp);
		const wallKick = (pieceTmp.type === I) ? WALLKICK_I[piece.state] : WALLKICK_DEFAULT[piece.state];
		for (let i = 0; i < wallKick.length; i++) {
			const element = wallKick[i]; // element = tout un state d un wallKick
			pieceTmp = applyWallKick(element, pieceTmp);
			const collision = collisionTest(pieceTmp.bricks, stack, width, height);
			if (collision === NO_COLLISION) {
				savePiece(pieceTmp);
				return;
			}
		}
  }
	else if (keyCode === LEFT || keyCode === RIGHT || keyCode === SPACE || keyCode === DOWN) {
		pieceTmp.bricks = move(piece.bricks, keyCode, stack);
		console.log(pieceTmp)
		const collision = collisionTest(pieceTmp.bricks, stack, width, height, keyCode);
		switch (collision) {
			case COLLISION_STACK:
				console.log("collision stack")
				let stackTmp = [...stack, ...piece.bricks];
				stackTmp = eraseLineCheck(piece.bricks, stackTmp); //vérifie si des lignes ont besoin d etre effacés
				saveStack(stackTmp);
				savePiece(generatePiece());
				break;
			case COLLISION_GAMEOVER:
				console.log("collision game over")
				//display gameover + debind des touches de jeu
				break;
			case COLLISION_WALL:
				console.log("collision wall")
				return;
				break;
			case NO_COLLISION:
				console.log("no collision")
				savePiece(pieceTmp);
				break;
			default:
				break;
		}
	}
}

const gameOverCheck = (piece, stack) => {
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
}

const Board = ({pieceToPlay, stack, savePiece, saveStack, saveInMenu}) => {
	/*if (gameOverCheck(pieceToPlay.bricks, stack) === true) {
		alert("GameOver");
		saveInMenu(true);
	}*/
	//setInterval(downSetInterval, 10000, pieceToPlay.bricks, savePiece);
	const board = generateBoard();
	const boardFiltered = filterBoard(board, pieceToPlay.bricks, stack);
	return (
		<div role="button" tabIndex="0" onKeyDown={e => handleOnKeyDown(e, pieceToPlay, stack, savePiece, saveStack)}>
			<div className="board">
		    <Piece bricks={boardFiltered}/>
		    <Piece bricks={pieceToPlay.bricks}/>
		    <Piece bricks={stack}/>
  	</div>
	</div>
  )
}

const mapStateToProps = (state) => {
	return {
		pieceToPlay: state.piece,
		stack: state.stack,
		inMenu: state.inMenu
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
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(Board)