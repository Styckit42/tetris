import React from 'react';
import styled from 'styled-components';
import { connect } from 'react-redux';
import { IN_MENU } from '../constants/statusConstants';
import Button from './Button';
import { resetStateAction } from '../actions/save';

const StyledVictory = styled.form`
  font-family: 'roadRage';
  h1 {
    text-align: center;
    font-size: 6em;
  }
  h2 {
    text-align: center;
    font-size: 3em;
  }
  margin-top: 50px;
`;

const Victory = (props) => {
  const { resetState } = props;
  resetState();
  return (
    <StyledVictory type="form">
      <h1>Vous avez gagné</h1>
      <h2>Il n'y a plus de joueurs dans la partie</h2>
      <Button label="Go to Main menu" action={IN_MENU} />
    </StyledVictory>
  );
};

const mapDispatchToProps = (dispatch) => ({
  resetState: () => {
    dispatch(resetStateAction());
  },
});

export default connect(null, mapDispatchToProps)(Victory);
