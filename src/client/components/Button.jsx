import React from 'react';
import {connect} from 'react-redux';
import styled from 'styled-components';
import {saveGameStateAction} from '../actions/save';

const StyledButton = styled.button`
  position: relative;
  border: 0;
  color: rgba(255, 20, 155, 1);
  -moz-user-select: none;
  -ms-user-select: none;
  width: 320px;
  margin-left: calc((100% - 320px) / 2);
  height: 28px;
  text-align: center;
  text-transform: uppercase;
  padding: 0;
  margin-top: 20px;
  line-height: 26px;
  font-family: pepsi;
  border-color: rgba(255, 20, 155, 1);
  transition: all 100ms ease-in;
  transform: skew(-10deg);
  span{
    background-color: ${props => props.theme.darkColor};
    display: block;
    position: absolute;
    width: 100%;
    height: 100%;
    top: 0;
    border-style: solid;
    border-width: 0.3em;
    border-color: rgba(255, 20, 155, 1);
  }
  &:after{
    z-index: -1;
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    background-color: rgba(255, 20, 155, 1);
    width: 100%;
    height: 100%;
    transition: all 100ms ease-in;
  }
  &:hover{
    span{
      border-color: rgba(255, 255, 255, 1);
      color: ${props => props.theme.darkColor};
      background-color: rgba(255, 255, 255, 1);
    }
    transform: skew(-10deg) translate(-10px, -10px);
    &:after{
      transform: translate(20px, 20px);
    }
  }
`;

const Button = (props) => {
  const {label, action, saveGameState} = props;
  return (
    <StyledButton type="button" onClick={() => saveGameState(action)}>
      <span>{label}</span>
    </StyledButton>
  );
};

const mapDispatchToProps = (dispatch) => ({
  saveGameState: (gameState) => {
    dispatch(saveGameStateAction(gameState));
  },
});

export default connect(null, mapDispatchToProps)(Button);
