import React from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';
import { saveGameStateAction } from '../actions/save';
import { IN_SOLO, IN_MULTI } from '../constants/statusConstants';
import { startGameMulti } from '../helpers/SocketEmit';

const StyledButton = styled.button`
  background: none;
  border: 0;
  color: inherit;
  -moz-user-select: none;
  -ms-user-select: none;
  width: 30%;
  margin-left: 35%;
  height: 40px;
  text-align: center;
  border-style: solid;
  border-width: 2px;
  margin-top: 20px;
  line-height: 36px;
`;

const Button = (props) => {
  const { label, action, saveGameState } = props;
  return (
    <StyledButton type="button" onClick={() => saveGameState(action)}>
      {label}
    </StyledButton>
  );
};

const mapDispatchToProps = (dispatch) => ({
  saveGameState: (gameState) => {
    dispatch(saveGameStateAction(gameState));
  },
});

export default connect(null, mapDispatchToProps)(Button);