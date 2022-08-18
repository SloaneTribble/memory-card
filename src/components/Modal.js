import React from "react";

function Modal({ gameOver }) {
  let modal;

  console.log(gameOver);

  if (gameOver === true) {
    modal = (
      <div className="modal">
        <form>
            <h1>You Win!</h1>
          <button type="submit">New Game</button>
        </form>
      </div>
    );
  }

  return <div>{modal}</div>;
}

export { Modal };
