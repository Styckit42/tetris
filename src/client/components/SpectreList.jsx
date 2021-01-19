import React from 'react';
import styled from 'styled-components';
import { connect } from 'react-redux';
import Spectre from './Spectre';

const StyledSpectres = styled.div`
  position: absolute;
  bottom: 0;
  right: 0;
  transform: scale(0.3);
  display: flex;
  flex-wrap: wrap;
`;

const SpectreList = (props) => {
  const { opponentList } = props;
  const spectre = opponentList.map(
    (opponent) => {
      const { name, stack, score } = opponent;
      return (<Spectre name={name} stack={stack} score={score} />);
    },
  );
  return (
    <StyledSpectres>
      {spectre}
    </StyledSpectres>
  );
};

const mapStateToProps = (state) => ({
  opponentList: state.opponentList,
});

export default connect(mapStateToProps, null)(SpectreList);
