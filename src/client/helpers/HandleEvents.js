import React from "react"
import {savePieceAction, saveBagAction, saveStackAction, saveInMenuAction, saveScoreAction, saveLevelsAction, saveLinesErasedAction} from '../actions/save.js'
import {rotate, applyWallKick} from './Rotate.js'
import {generatePiece, generateBag} from './PieceGenerations.js'
import {eraseLineCheck} from './Line.js'
import {move, collisionTest} from './Movements.js'
import {LEFT, RIGHT, UP, DOWN, SPACE, ESC} from '../constants/keyBoardConstants.js'
import {COLLISION_STACK, COLLISION_WALL, COLLISION_GAMEOVER, NO_COLLISION} from '../constants/collisionConstants.js'
import {I, T, O, J, L, Z, S, BRICKS_T} from '../constants/piecesConstants.js'
import {WALLKICK_DEFAULT, WALLKICK_I, STATE_0, STATE_1, STATE_2, STATE_3} from '../constants/rotateConstants.js'

//hub mouvements
export const handleOnKeyDown = ({ keyCode },  props, width, height, myTimeout) => {
  const {
		piece, stack, score,
		levels, linesErased,
		savePiece, saveStack, saveScore, saveLevels,
		saveLinesErased, saveBag
	} = props;
	let pieceTmp = _.cloneDeep(piece);
	let {bag} = props
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
		const collision = collisionTest(pieceTmp.bricks, stack, width, height, keyCode);
		switch (collision) {
			case COLLISION_STACK:
				savePiece(generatePiece(bag[0]));
				let stackTmp = [...stack, ...piece.bricks];
				stackTmp = eraseLineCheck(piece.bricks, stackTmp, score, saveScore, levels, linesErased, saveLevels, saveLinesErased); //vérifie si des lignes ont besoin d etre effacés
				saveStack(stackTmp);
				bag.shift();
				if (bag.length === 0) {
					bag = generateBag();
				}
				saveBag(bag)
				break;
			case COLLISION_GAMEOVER:
				console.log("collision game over")
				//display gameover + debind des touches de jeu
				break;
			case COLLISION_WALL:
				console.log("collision wall")
				break;
			case NO_COLLISION:
				savePiece(pieceTmp);
				break;
			default:
				break;
		}
	}
	clearInterval(myTimeout);
}
