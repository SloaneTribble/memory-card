import React from "react";

import { Header } from "./Header";

import { CardContainer } from "./CardContainer";

function MainContainer() {
  return (
    <div className="main-container">
      <Header />
      <CardContainer />
    </div>
  );
}

export { MainContainer };
