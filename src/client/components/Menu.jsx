import React from 'react';
import {
  IN_SOLO, MULTI_MENU, IN_OPTIONS, BEST_SCORE,
} from '../constants/statusConstants';
import Button from './Button';
import {connect} from "react-redux";

const Menu = ({ isAdmin, name }) => {
  if (isAdmin === true) {
    return (
      <div>
        <h1>Bienvenue {name}, vous êtes le propriétaire de la partie</h1>
        <Button label="Start Solo game" action={IN_SOLO}/>
        <Button label="Start Multiplayer game" action={MULTI_MENU}/>
        <Button label="Show Best Score" action={BEST_SCORE}/>
        <Button label="Personnaliser la partie" action={IN_OPTIONS}/>
      </div>
    );
  }
  return (
    <div>
      <h1>Bienvenue {name}</h1>
      <p>Veuillez attendre que le propriétaire du salon lance le début de la prochaine partie</p>
    </div>
  );
};

const mapStateToProps = (state) => ({
  isAdmin: state.isAdmin,
  name: state.name,
});

export default connect(mapStateToProps, null)(Menu);
