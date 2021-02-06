import React from 'react';
import { connect } from 'react-redux';
import {
  IN_LOBBY, IN_OPTIONS, BEST_SCORE,
} from '../constants/statusConstants';
import styled from 'styled-components';
import Button from './Button';
import OpponentList from './OpponentList';

const StyledMenu = styled.div`
  font-family: 'pepsi';
  padding-top: 50px;
  h1 {
    margin: 0;
    font-family: roadRage;
    text-align: center;
    font-size: 5em;
    filter: drop-shadow(0 10px 25px rgba(255, 0, 155, 0.7));
    transition: filter 200ms ease-in;
    &:hover{
      filter: drop-shadow(0 10px 25px rgba(255, 0, 155, 1));
    }
  }
  h2 {
    text-align: center;
  }
  p {
    text-align: center;
  }
`;

const Menu = ({ isAdmin, name }) => {
  if (isAdmin === true) {
    return (
      <StyledMenu>
        <h1>
          tetris
        </h1>
        <h2>
          Bienvenue {name}, vous êtes le propriétaire de la partie
        </h2>
        <Button label="Start game" action={IN_LOBBY} />
        <Button label="Personnaliser la partie" action={IN_OPTIONS} />
        <OpponentList />
      </StyledMenu>
    );
  }
  return (
    <StyledMenu>
      <h1>
        Bienvenue {name}
      </h1>
      <p>Veuillez attendre que le propriétaire du salon lance la prochaine partie</p>
      <OpponentList />
    </StyledMenu>
  );
};

const mapStateToProps = (state) => ({
  isAdmin: state.isAdmin,
  name: state.playerName,
});

export default connect(mapStateToProps, null)(Menu);
