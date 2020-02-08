import React from "react"
import {connect} from 'react-redux'
import {saveInMenuAction} from '../actions/save.js'
import {PLAY_SOLO, PLAY_ONLINE, BEST_SCORE, OPTIONS} from '../constants/menuConstants.js'

const Menu = ({inMenu, saveInMenu}) => {
  console.log(inMenu)
    return (
    <div>
      <div>
        <button onClick={() => 
          saveInMenu(false)
        }>
          Start Solo Game</button>
      </div>
      <div>
        <button onClick={() => 
          saveInMenu(false)
        }>
          Start Multiplayer Game</button>
      </div>
    </div>
  )
}

const mapStateToProps = (state) => {
	return {
    inMenu: state.inMenu
	};
};

const mapDispatchToProps = (dispatch) => {
	return {
    saveInMenu: inMenu => {
			dispatch(saveInMenuAction(inMenu))
    },
	}
};

export default connect(mapStateToProps, mapDispatchToProps)(Menu)

/**
 * Menu
 * Menu component, to display the game menu
 * param : -inMenu (boolean)
 *         -saveInMenu (redux function) 
 */