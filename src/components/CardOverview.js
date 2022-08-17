import React, { useState } from "react";

function CardOverview({ cardCount, cards, handleClick }) {
  let cardArray = cards;
  let overview;

  shuffle(cardArray);

  console.log(cardArray);

  console.log("card count: " + cardCount);

  cardArray.splice(cardCount);
  console.log(cardArray);

  overview = cardArray.map((card) => (
    <div id={card.id} className="card" onClick={handleClick} key={card.id}>
      <img id={card.id} src={card.imageSrc} alt={card.imageAlt}></img>
    </div>
  ));

  return <div className="card-overview">{overview}</div>;
}

const shuffle = function shuffleArray(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
};

export { CardOverview };
