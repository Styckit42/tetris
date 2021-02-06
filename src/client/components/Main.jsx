import React from 'react';
import styled, { keyframes } from 'styled-components';
import GameState from './GameState';
import Socket from './Socket';

const backgroundLoop = keyframes`
  0% {
      background-position: 0 bottom;
    }
    100% {
      background-position: -6826px bottom;
  }
`;

const StyledMain = styled.div`
  background-image: url('/images/bg-infinite.jpg');
  background-repeat: repeat-x;
  height: 100vh;
  background-position: bottom;
  background-size: 200% auto;
  @media (min-width: 1440px) {
    background-size: 100% auto;
  }
}
`;

//animation: ${backgroundLoop} 240s linear infinite;

const Main = () => (
  <StyledMain>
    <GameState />
    <Socket />
  </StyledMain>
);

export default Main;
