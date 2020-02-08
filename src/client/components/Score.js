import React from "react"
import {connect} from 'react-redux'

const Score = (score, levels, linesErased) => {
  return (
    <div>
       <h1>Score: {score.score}</h1>
       <h1>Level: {score.levels}</h1>
       <h1>LinesErased: {score.linesErased}</h1>
    </div>
  )
}

const mapStateToProps = (state) => {
	return {
		score: state.score,
		levels: state.levels,
		linesErased: state.linesErased
	};
};

export default connect(mapStateToProps, null)(Score)