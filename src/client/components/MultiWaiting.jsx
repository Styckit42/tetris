import React from 'react';
import styled from 'styled-components';
import OpponentList from './OpponentList';

const StyledMultiWaiting = styled.form`

`;

const MultiWaiting = () => (
  <StyledMultiWaiting type="form">
    <h1>Veuillez attendre la fin de la partie</h1>
    <h2>Dès que le propriètaire du salon aura relancer la partie, vous serez dedans également</h2>
    <OpponentList/>
  </StyledMultiWaiting>
);

export default MultiWaiting;
