import React from 'react';
import GameState from './GameState';
import Socket from './Socket';
import styled from 'styled-components';

const StyledMain = styled.div`
  background-image: url('/images/bg-infinite.jpg');
  background-repeat: no-repeat;
  height: 100vh;
  background-position: bottom;
  @media (min-width: 1440px) {
    background-size: 100% auto;
  }
}
`;

const Main = () => (
  <StyledMain>
    <GameState />
    <Socket />
  </StyledMain>
);

export default Main;
