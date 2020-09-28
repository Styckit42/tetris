import React from 'react';
import styled from 'styled-components';
import { IN_MENU } from '../constants/statusConstants';
import Button from './Button';

const StyledVictory = styled.form`

`;

const Victory = () => {
  return (
    <StyledVictory type="form">
      <h1>Vous avez gagné</h1>
      <Button label="Go to Main menu" action={IN_MENU} />
    </StyledVictory>
  );
};

export default Victory;
