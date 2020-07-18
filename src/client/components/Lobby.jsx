import React from 'react';
// import io from 'socket.io-client';
import { connect } from 'react-redux';
import Button from './Button';
import { IN_MULTI } from '../constants/statusConstants';

const Lobby = ({ isAdmin }) => {
  console.log('on est dans le lobby');
  if (isAdmin === true) {
    return (
      <div>
        <Button label="StartGame" action={IN_MULTI} />
      </div>
    );
  }
  return (
    <div>
      <h1>Welcome in Lobby</h1>
    </div>
  );
};

const mapStateToProps = (state) => ({
  isAdmin: state.isAdmin,
});

/* const mapDispatchToProps = (dispatch) => ({
  saveIsAdmin: (isAdmin) => {
    dispatch(saveIsAdminAction(isAdmin));
  },
}); */

export default connect(mapStateToProps, null)(Lobby);