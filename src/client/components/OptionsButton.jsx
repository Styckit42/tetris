import React from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';
import { saveGameOptionsAction } from '../actions/options';

const StyledOptionsButton = styled.button`
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

const saveOptions = (props) => {
  props.saveGameOptions({...props.gameOptions, [props.type]: props.value});
};

const OptionsButton = (props) => {
  const { label } = props;
  return (
    <StyledOptionsButton type="button" onClick={() => saveOptions(props)}>
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
