import React, { useState } from "react";

import { Header } from "./Header";

import { CardOverview } from "./CardOverview";

import uniqid from "uniqid";

function GameContainer() {
  const [state, setState] = useState({
    score: 0,
    highScore: 0,
    cards: [
      { imageSrc: "one", imageAlt: "one", id: uniqid() },
      { imageSrc: "two", imageAlt: "two", id: uniqid() },
      { imageSrc: "three", imageAlt: "three", id: uniqid() },
    ],
    clicked: [],
  });

  const handleClick = (e) => {
    console.log(e.target.id);
    let currentState = { ...state };
    let currentClicked = currentState.clicked;
    let currentScore = currentState.score;
    let currentHighScore = currentState.highScore;
    let currentId = e.target.id;

    // If id has been clicked, if score > highScore, highScore = score; score = 0; clicked = []

    if (currentClicked.includes(currentId)) {
      console.log("Oops!");
      if (currentScore > currentHighScore) {
        currentHighScore = currentScore;
        currentScore = 0;
        currentClicked = [];
      }
    } else {
      currentScore++;
      currentClicked.push(currentId);
    }
    console.log(currentClicked);

    setState({
      ...state,
      clicked: currentClicked,
      score: currentScore,
      highScore: currentHighScore,
    });
  };

  return (
    <div className="card-container">
      <Header score={state.score} highScore={state.highScore} />
      <CardOverview cards={state.cards} handleClick={handleClick} />
    </div>
  );
}

export { GameContainer };
