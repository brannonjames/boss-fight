import React from 'react';
import '../styles/resetButton.css';


const PlayAgain = ({resetGame, winner}) => {
  let header = winner === "player" ? "You won!" : "You lose";
  return (
    <div className="resetButton">
      <h1>
        {header}
      </h1>
      <button onClick={resetGame}>
        Play Again?
      </button>
    </div>
  )
}





export default PlayAgain;
