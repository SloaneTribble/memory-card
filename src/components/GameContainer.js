import React, { useState, useEffect } from "react";

import { Header } from "./Header";

import { CardOverview } from "./CardOverview";

import { Explanation } from "./Explanation";

import uniqid from "uniqid";

import carol from "../images/carol.jpeg";
import david from "../images/david-liebe-hart.jpg";
import decker from "../images/decker.png";
import doris from "../images/doris.jpg";
import doug from "../images/doug-prishpreed.jpg";
import jan from "../images/jan-skylar.jpg";
import kington from "../images/kington.jpeg";
import mark from "../images/mark-proksch.png";
import pablo from "../images/pablo-meyers.jpg";
import pierre from "../images/pierre.jpg";
import scott from "../images/scott-clam.jpg";
import steve from "../images/steve-brule.jpeg";
import tayne from "../images/tayne.jpg";
import wayne from "../images/wayne-jan.jpeg";
import wizard from "../images/wizard.jpg";

function GameContainer() {
  let cards = [
    {
      imageSrc: `${decker}`,
      imageAlt: "Special Agent Jack Decker",
      id: uniqid(),
    },
    {
      imageSrc: `${kington}`,
      imageAlt: "Master Codebreaker Kington",
      id: uniqid(),
    },
    { imageSrc: `${mark}`, imageAlt: "Mark Proksch", id: uniqid() },
    { imageSrc: `${steve}`, imageAlt: "Dr. Steve Brule", id: uniqid() },
    {
      imageSrc: `${wizard}`,
      imageAlt: "Wizard from Kandle Krush",
      id: uniqid(),
    },
    { imageSrc: `${carol}`, imageAlt: "Carol Krabbit", id: uniqid() },
    { imageSrc: `${david}`, imageAlt: "David Liebe-hart", id: uniqid() },
    { imageSrc: `${doris}`, imageAlt: "Doris Pringle-Brule", id: uniqid() },
    { imageSrc: `${doug}`, imageAlt: "Doug Prishpreed", id: uniqid() },
    { imageSrc: `${jan}`, imageAlt: "Jan Skylar", id: uniqid() },
    { imageSrc: `${pablo}`, imageAlt: "Pablo Meyers", id: uniqid() },
    { imageSrc: `${pierre}`, imageAlt: "Pierre", id: uniqid() },
    { imageSrc: `${scott}`, imageAlt: "Scott Clam", id: uniqid() },
    { imageSrc: `${tayne}`, imageAlt: "Tayne", id: uniqid() },
    { imageSrc: `${wayne}`, imageAlt: "Wayne and Jan Skylar", id: uniqid() },
  ];

  shuffle(cards);

  let levelOneCards = cards.slice(10);

  let levelTwoCards = cards.slice(5);

  const [state, setState] = useState({
    score: 0,
    highScore: 0,
    clicked: [],
    clickCount: 0,
    cardCount: 5,
    cards: levelOneCards,
    level: 1,
  });

  const handleClick = (e) => {
    console.log(e.target.id);
    let currentState = { ...state };
    let currentClicked = currentState.clicked;
    let currentScore = currentState.score;
    let currentHighScore = currentState.highScore;
    let currentId = e.target.id;
    let currentClickCount = currentState.clickCount;
    let currentLevel = currentState.level;
    let currentCards = currentState.cards;
    let currentCardCount = currentState.cardCount;

    // If id has been clicked, if score > highScore, highScore = score; score = 0; clicked = []

    if (currentClicked.includes(currentId)) {
      console.log("Oops!");
      if (currentScore > currentHighScore) {
        currentHighScore = currentScore;
      }
      currentScore = 0;
      currentClicked = [];
      currentClickCount = 0;
      currentLevel = 0;
      currentCardCount = 5;
      currentCards = levelOneCards;
    } else {
      currentScore++;
      currentClickCount++;
      currentClicked.push(currentId);

      if (currentClickCount === 5) {
        console.log("Level Two");
        currentCardCount = 10;
        currentLevel = 2;
        currentClicked = [];
        currentCards = levelTwoCards;
      }

      if (currentClickCount === 15) {
        console.log("Level Three");
        currentCardCount = 15;
        currentLevel = 3;
        currentClicked = [];
        currentCards = cards;
      }
      console.log(currentClicked);
    }

    setState({
      score: currentScore,
      highScore: currentHighScore,
      clicked: currentClicked,
      clickCount: currentClickCount,
      cardCount: currentCardCount,
      level: currentLevel,
      cards: currentCards,
    });
  };

  return (
    <div className="game-container">
      <Header score={state.score} highScore={state.highScore} />
      <CardOverview cards={state.cards} handleClick={handleClick} />
      <Explanation />
    </div>
  );
}

const shuffle = function shuffleArray(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
};

export { GameContainer };
