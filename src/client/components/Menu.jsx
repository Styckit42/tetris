import React from 'react';
import { connect } from 'react-redux';
import {
  IN_LOBBY, IN_OPTIONS, BEST_SCORE,
} from '../constants/statusConstants';
import Button from './Button';
import OpponentList from './OpponentList';

const Menu = ({ isAdmin, name }) => {
  if (isAdmin === true) {
    return (
      <div>
        <h1>
          Bienvenue {name}, vous êtes le propriétaire de la partie
        </h1>
        <Button label="Start game" action={IN_LOBBY} />
        <Button label="Show Best Score" action={BEST_SCORE} />
        <Button label="Personnaliser la partie" action={IN_OPTIONS} />
        <OpponentList />
      </div>
    );
  }
  return (
    <div>
      <h1>
        Bienvenue
        {name}
      </h1>
      <p>Veuillez attendre que le propriétaire du salon lance la prochaine partie</p>
      <OpponentList />
    </div>
  );
};

const mapStateToProps = (state) => ({
  isAdmin: state.isAdmin,
  name: state.playerName,
});

export default connect(mapStateToProps, null)(Menu);
