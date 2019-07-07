import React from 'react';
import Stats from './Stats';
import Stopwatch from './Stopwatch';

const Header = ({ playerCount, totalPoints }) => (
  <div className="header">
    <Stats playerCount={playerCount} totalPoints={totalPoints} />
    <h1>Scoreboard</h1>
    <Stopwatch />
  </div>
);

export default Header;
