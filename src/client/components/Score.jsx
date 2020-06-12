import React from 'react';
import { connect } from 'react-redux';

const Score = (props) => {
  const {
    score, levels, linesErased, speed,
  } = props;
  return (
    <div>
      <h1>
        Score:
        {score}
      </h1>
      <h1>
        Level:
        {levels}
      </h1>
      <h1>
        LinesErased:
        {linesErased}
      </h1>
      <h1>
        Speed:
        {speed}
      </h1>
    </div>
  );
};

const mapStateToProps = (state) => ({
  score: state.score,
  levels: state.levels,
  linesErased: state.linesErased,
  speed: state.speed,
});

export default connect(mapStateToProps, null)(Score);
