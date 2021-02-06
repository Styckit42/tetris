import React from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';
import { saveGameOptionsAction } from '../actions/options';

const StyledOptionsButton = styled.button`
  width: 320px;
  height: 40px;
  margin: 20px auto 0 auto;
  background-color: ${props => props.isActive ? 'rgba(255, 20, 155, 1)' : '#fff'};
  border: 0;
  color: ${props => props.isActive ? '#fff' : props.theme.darkColor};
  text-align: center;
  text-transform: uppercase;
  font-size: 12px;
  font-weight: 600;
  font-family: inherit;
`;

const saveOptions = (props) => {
  props.saveGameOptions({ ...props.gameOptions, [props.type]: props.value });
};

const OptionsButton = (props) => {
  const { label, isActive } = props;
  return (
    <StyledOptionsButton type="button" isActive={isActive} onClick={() => saveOptions(props)}>
      {label}
    </StyledOptionsButton>
  );
};

const mapStateToProps = (state) => ({
  gameOptions: state.gameOptions,
});

const mapDispatchToProps = (dispatch) => ({
  saveGameOptions: (gameOptions) => {
    dispatch(saveGameOptionsAction(gameOptions));
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(OptionsButton);
