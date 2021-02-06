import React from 'react';
import styled from 'styled-components';

const StyledWrongInfo = styled.div`
  font-family: 'roadRage';
  text-align: center;
  font-size: 2em;
  h3 {
    font-family: 'futuraMedium';
    font-size: 1em;
  }
`;

const WrongInfo = () => (
  <StyledWrongInfo>
    <h1>Veuillez rentrer une url valide</h1>
    <h3>ex : http://127.0.0.1:3000/#'NOM_DE_LA_PARTIE['NOM_DU_JOUEUR']</h3>
  </StyledWrongInfo>
);

export default WrongInfo;
