import React from "react";

function Header(props) {
  let currentScore = props.score;

  let currentHighScore = props.highScore;

  return (
    <div className="header">
      <span>Memorial Flurry</span>
      <div className="score">Score: {currentScore}</div>
      <div className="high-score">High Score: {currentHighScore}</div>
    </div>
  );
}

export { Header };
