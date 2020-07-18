import React from 'react';
import { connect } from 'react-redux';
import Spectre from './Spectre';

const SpectreList = (props) => {
  const { opponentList } = props;
  const spectre = opponentList.map(
    opponent => {
      const { id, stack, score } = opponent;
      return (<Spectre id={id} stack={stack} score={score} />);
    },
  );
  return (
    <React.Fragment>
      {spectre}
    </React.Fragment>
  );
};

const mapStateToProps = (state) => ({
  opponentList: state.opponentList
});

export default connect(mapStateToProps, null)(SpectreList);