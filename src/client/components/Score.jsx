import React from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';

const StyledScoreBox = styled.div`
  padding: 20px 0 20px 0;
`;

const StyledScoreLine = styled.div`
  font-size: 16px;
  font-weight: 400;
  letter-spacing: 2px;
  &:not(:last-child){
    margin-bottom: 10px;
  }
  & > span{
    font-weight: 600;
    color: ${(props) => props.theme.mainColor};
  }
`;

const Score = (props) => {
  const {
    score, levels, linesErased, speed,
  } = props;
  return (
    <StyledScoreBox>
      <StyledScoreLine>
        Score:
        <span>{score}</span>
      </StyledScoreLine>
      <StyledScoreLine>
        Level:
        <span>{levels}</span>
      </StyledScoreLine>
      <StyledScoreLine>
        LinesErased:
        <span>{linesErased}</span>
      </StyledScoreLine>
      <StyledScoreLine>
        Speed:
        <span>{speed}</span>
      </StyledScoreLine>
    </StyledScoreBox>
  );
};

const mapStateToProps = (state) => ({
  score: state.score,
  levels: state.levels,
  linesErased: state.linesErased,
  speed: state.speed,
});

export default connect(mapStateToProps, null)(Score);
