import React from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';

const StyledOpponentList = styled.form`
  width: 320px;
  margin-left: calc((100% - 320px) / 2);
  margin-top: 30px;
  h3{
    text-align: center;
    text-transform: uppercase;
    font-size: 1.6em;
    border-bottom-style: solid;
    border-bottom-width: 0.2em;
    padding-bottom: 5px;
    border-bottom-color: rgba(255, 20, 155, 1);
  }
  ul{
    padding: 0;
    li{
      list-style-type: none;
      font-size: 1.3em;
      text-align: center;
    }
  }
`;

const OpponentList = ({ opponentList }) => {
  const opponents = opponentList.map(
    (opponent, index) => {
      const { name } = opponent;
      return (
        <li key={index}>
          { name }
        </li>
      );
    },
  );
  return (
    <StyledOpponentList type="form" key="0">
      <h3>Joueurs dans la partie</h3>
      <ul>
        { opponents }
      </ul>
    </StyledOpponentList>
  );
};

const mapStateToProps = (state) => ({
  opponentList: state.opponentList,
});

export default connect(mapStateToProps, null)(OpponentList);
