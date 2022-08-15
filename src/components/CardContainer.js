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
  });

  return (
    <div className="card-container">
      <CardOverview schools={state.cards} />
    </div>
  );
}

export { CardContainer };
