import React, { useState } from "react";

import { CardOverview } from "./CardOverview";

import uniqid from "uniqid";

function CardContainer() {
  const [state, setState] = useState({
    currentScore: 0,
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
    console.log(currentClicked);

    let currentId = e.target.id;

    currentClicked.push(currentId);

    setState({
      ...state,
      clicked: currentClicked,
    });
  };

  return (
    <div className="card-container">
      <CardOverview cards={state.cards} handleClick={handleClick} />
    </div>
  );
}

export { CardContainer };
