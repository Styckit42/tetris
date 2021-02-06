import React from 'react';
import styled from 'styled-components';
import { connect } from 'react-redux';
import Button from './Button';
import OptionsButton from './OptionsButton';
import { IN_MENU } from '../constants/statusConstants';
import {
  OPTIONS_GAME_TYPE, OPTIONS_LEVEL_START,
  OPTIONS_COLOR_BLIND, DESTRUCTIBLE, INDESTRUCTIBLE,
  NO_LINES,
} from '../constants/optionsConstants';

const StyledOptions = styled.div`
  width: 640px;
  margin-left: calc((100% - 640px) / 2);
  margin-top: 50px;
  padding: 20px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  color: #fff;
  background-color: rgba(6, 12, 33, 0.6);
  backdrop-filter: blur(10px);
  font-family: futuraBook, sans-serif;
  p {
    text-align: center;
    font-size: 20px;
  }
  & > section {
    display: grid;
    align-items: center;
  }
`;

const Options = (props) => (
  <StyledOptions>
    <section>
      <p>Niveau de départ (plus le niveau est haut, plus la pièce tombe vite)</p>
      <OptionsButton label="1" type={OPTIONS_LEVEL_START} value={1} isActive={props.gameOptions.levelStart === 1} />
      <OptionsButton label="6" type={OPTIONS_LEVEL_START} value={6} isActive={props.gameOptions.levelStart === 6}/>
      <OptionsButton label="11" type={OPTIONS_LEVEL_START} value={11} isActive={props.gameOptions.levelStart === 11}/>
    </section>
    <section>
      <p>Mode daltonien</p>
      <OptionsButton label="activé" type={OPTIONS_COLOR_BLIND} value isActive={props.gameOptions.colorBlind}/>
      <OptionsButton label="désactivé" type={OPTIONS_COLOR_BLIND} value={false} isActive={!props.gameOptions.colorBlind}/>
    </section>
    <section>
      <p>Multijoueurs: type de partie</p>
      <OptionsButton label="Sans ajout de lignes" type={OPTIONS_GAME_TYPE} value={NO_LINES} isActive={props.gameOptions.gameType === 3}/>
      <OptionsButton label="Ajout de lignes destructibles" type={OPTIONS_GAME_TYPE} value={DESTRUCTIBLE} isActive={props.gameOptions.gameType === 2}/>
      <OptionsButton label="Ajout de lignes indestructibles" type={OPTIONS_GAME_TYPE} value={INDESTRUCTIBLE} isActive={props.gameOptions.gameType === 1}/>
    </section>
    <Button label="Retourner au menu principal" action={IN_MENU} />
  </StyledOptions>
);

const mapStateToProps = (state) => ({
  gameOptions: state.gameOptions,
});

export default connect(mapStateToProps, null)(Options);
