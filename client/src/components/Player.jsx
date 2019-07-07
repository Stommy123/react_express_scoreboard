import React from 'react';
import Counter from './Counter';
import Icon from './Icon';

const Player = ({ player, removePlayer, updatePlayerScore, selectPlayer, highScore }) => (
  <div className="player">
    <div className="player-name" onClick={_ => selectPlayer(player.id)}>
      <a className="remove-player" onClick={_ => removePlayer(player.id)}>
        ✖
      </a>
      <Icon score={player.score} highScore={highScore} />
      {player.name}
    </div>
    <div className="player-score">
      <Counter id={player.id} score={player.score} updatePlayerScore={updatePlayerScore} />
    </div>
  </div>
);

export default Player;
