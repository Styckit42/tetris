import React from 'react';
import {connect} from 'react-redux';
import Button from './Button';
import {IN_MULTI} from '../constants/statusConstants';

const Lobby = ({ isAdmin, opponentList }) => {
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
  if (isAdmin === true) {
    return (
      <div>
        <Button label="StartGame" action={IN_MULTI} />
        <h3>Joueurs dans la partie</h3>
        { opponents }
      </div>
    );
  }
  return (
    <div>
      <h1>Welcome in Lobby</h1>
      <h3>Joueurs dans la partie</h3>
      { opponents }
    </div>
  );
};

const mapStateToProps = (state) => ({
  isAdmin: state.isAdmin,
  opponentList: state.opponentList,
});

/* const mapDispatchToProps = (dispatch) => ({
  saveIsAdmin: (isAdmin) => {
    dispatch(saveIsAdminAction(isAdmin));
  },
}); */

export default connect(mapStateToProps, null)(Lobby);
