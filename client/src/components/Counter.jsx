import React from "react";

const Counter = ({ id, score, updatePlayerScore }) => (
  <div className="counter">
    <button
      className="counter-action decrement"
      onClick={_ => updatePlayerScore(id, -1)}
    >
      -
    </button>
    <div className="counter-score">{score}</div>
    <button
      className="counter-action increment"
      onClick={_ => updatePlayerScore(id, 1)}
    >
      +
    </button>
  </div>
);

export default Counter;
