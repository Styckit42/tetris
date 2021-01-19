import React from 'react';
import { connect } from 'react-redux';
import Button from './Button';
import { IN_MULTI } from '../constants/statusConstants';
import OpponentList from './OpponentList';

const Lobby = ({ isAdmin, opponentList }) => {
  if (isAdmin === true) {
    return (
      <div>
        <Button label="StartGame" action={IN_MULTI} />
        <OpponentList />
      </div>
    );
  }
  return (
    <div>
      <h1>Welcome in Lobby</h1>
      <OpponentList />
    </div>
  );
};

const mapStateToProps = (state) => ({
  isAdmin: state.isAdmin,
  opponentList: state.opponentList,
});

export default connect(mapStateToProps, null)(Lobby);
