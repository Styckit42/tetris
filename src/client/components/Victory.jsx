import React from 'react';
import styled from 'styled-components';
import { connect } from 'react-redux';
import { IN_MENU } from '../constants/statusConstants';
import Button from './Button';
import { resetStateAction } from '../actions/save';

const StyledVictory = styled.form`

`;

const Victory = (props) => {
  const { resetState } = props;
  resetState();
  return (
    <StyledVictory type="form">
      <h1>Vous avez gagné</h1>
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
