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
    clickCount: 0,
  });

  const levelTwoCards = [
    { imageSrc: "four", imageAlt: "four", id: uniqid() },
    { imageSrc: "five", imageAlt: "five", id: uniqid() },
    { imageSrc: "six", imageAlt: "six", id: uniqid() },
  ];

  const levelThreeCards = [
    { imageSrc: "seven", imageAlt: "seven", id: uniqid() },
    {
      imageSrc: "eight",
      imageAlt: "eight",
      id: uniqid(),
    },
    { imageSrc: "nine", imageAlt: "nine", id: uniqid() },
  ];

  const handleClick = (e) => {
    console.log(e.target.id);
    let currentState = { ...state };
    let currentClicked = currentState.clicked;
    let currentScore = currentState.score;
    let currentHighScore = currentState.highScore;
    let currentId = e.target.id;
    let currentClickCount = currentState.clickCount;
    let currentCards = currentState.cards;

    console.log(currentClicked);
    console.log(currentCards);

    // If id has been clicked, if score > highScore, highScore = score; score = 0; clicked = []

    if (currentClicked.includes(currentId)) {
      console.log("Oops!");
      if (currentScore > currentHighScore) {
        currentHighScore = currentScore;
      }
      currentScore = 0;
      currentClicked = [];
      currentClickCount = 0;
      currentCards = [
        { imageSrc: "one", imageAlt: "one", id: uniqid() },
        { imageSrc: "two", imageAlt: "two", id: uniqid() },
        { imageSrc: "three", imageAlt: "three", id: uniqid() },
      ];
    } else {
      currentScore++;
      currentClickCount++;
      currentClicked.push(currentId);

      if (currentClickCount === 3) {
        console.log("Level Two");
        currentCards = currentCards.concat(levelTwoCards);
      }

      if (currentClickCount === 6) {
        console.log("Level Three");
        currentCards = currentCards.concat(levelThreeCards);
      }
      console.log(currentClicked);
    }

    setState({
      score: currentScore,
      highScore: currentHighScore,
      cards: currentCards,
      clicked: currentClicked,
      clickCount: currentClickCount,
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
