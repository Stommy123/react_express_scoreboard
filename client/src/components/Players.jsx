import React from 'react';
import Player from './Player';

const Players = ({ players, removePlayer, updatePlayerScore, selectPlayer, highScore }) => (
  <div className="players">
    {players.map(player => (
      <Player
        key={player.name}
        player={player}
        removePlayer={removePlayer}
        updatePlayerScore={updatePlayerScore}
        selectPlayer={selectPlayer}
        highScore={highScore}
      />
    ))}
  </div>
);

export default Players;
