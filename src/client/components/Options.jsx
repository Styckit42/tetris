import React from 'react';
import styled from 'styled-components';
import Button from './Button';
import OptionsButton from './OptionsButton';
import { IN_MENU } from '../constants/statusConstants';
import {
  OPTIONS_GAME_TYPE, OPTIONS_LEVEL_START,
  OPTIONS_COLOR_BLIND, DESTRUCTIBLE, INDESTRUCTIBLE,
  NO_LINES,
} from '../constants/optionsConstants';

const StyledOptions = styled.button`
`;

export const Options = () => (
  <StyledOptions>
    <div>
      <h1>Niveau de départ (plus le niveau est haut, plus la pièce tombe vite)</h1>
      <OptionsButton label="1" type={OPTIONS_LEVEL_START} value={1} />
      <OptionsButton label="6" type={OPTIONS_LEVEL_START} value={6} />
      <OptionsButton label="11" type={OPTIONS_LEVEL_START} value={11} />
    </div>
    <div>
      <h1>Mode daltonien</h1>
      <OptionsButton label="activé" type={OPTIONS_COLOR_BLIND} value />
      <OptionsButton label="désactivé" type={OPTIONS_COLOR_BLIND} value={false} />
    </div>
    <div>
      <h1>Multijoueurs: type de partie</h1>
      <OptionsButton label="Sans ajout de lignes" type={OPTIONS_GAME_TYPE} value={NO_LINES} />
      <OptionsButton label="Ajout de lignes destructibles" type={OPTIONS_GAME_TYPE} value={DESTRUCTIBLE} />
      <OptionsButton label="Ajout de lignes indestructibles" type={OPTIONS_GAME_TYPE} value={INDESTRUCTIBLE} />
    </div>
    <Button label="Retourner au menu principal" action={IN_MENU} />
  </StyledOptions>
);

export default Options;
