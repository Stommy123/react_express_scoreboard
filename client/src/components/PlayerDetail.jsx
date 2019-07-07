import React from 'react';

const PlayerDetail = ({ selectedPlayer }) =>
  selectedPlayer ? (
    <div className="player-detail">
      <h3>{selectedPlayer.name}</h3>
      <ul>
        <li>
          <span>Score: </span>
          {selectedPlayer.score}
        </li>
        <li>
          <span>Age: </span>
          {selectedPlayer.age}
        </li>
      </ul>
    </div>
  ) : (
    <div className="player-detail">
      <p>Click on a player to see more details</p>
    </div>
  );

export default PlayerDetail;
