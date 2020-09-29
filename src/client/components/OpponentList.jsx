import React from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';

const StyledOpponentList = styled.form`

`;

const OpponentList = ({ opponentList }) => {
  const opponents = opponentList.map(
    (opponent) => {
      const { name } = opponent;
      return (
        <div key={name}>
          { name }
        </div>
      );
    },
  );
  return (
    <StyledOpponentList type="form">
      <h3>Joueurs dans la partie</h3>
      { opponents }
    </StyledOpponentList>
  );
};

const mapStateToProps = (state) => ({
  opponentList: state.opponentList,
});

export default connect(mapStateToProps, null)(OpponentList);
