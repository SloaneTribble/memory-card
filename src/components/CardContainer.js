import React, { useState } from "react";

import uniqid from "uniqid";

function CardContainer() {
  const [state, setState] = useState({
    currentScore: 0,
    highScore: 0,
    cards: [
      { imageSrc: "", imageAlt: "", id: uniqid() },
      { imageSrc: "", imageAlt: "", id: uniqid() },
      { imageSrc: "", imageAlt: "", id: uniqid() },
    ],
  });
}
