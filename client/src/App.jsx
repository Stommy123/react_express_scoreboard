import React, { useState, useEffect, useMemo } from 'react';
import { v4 as uuid } from 'uuid';
import axios from 'axios';
import { data } from './data';
import { Header, Players, Form, PlayerDetail } from './components';

const App = _ => {
  const [players, setPlayers] = useState(data);
  const [selectedPlayer, setSelectedPlayer] = useState(null);

  const fetchMorePlayers = async _ => {
    const { data } = await axios.get('/people');

    setPlayers([...players, ...data.people]);
  };

  const handleAddPlayer = playerData => {
    const newPlayer = { ...playerData, id: uuid(), score: 0 };

    setPlayers([...players, newPlayer]);
  };

  const handleRemovePlayer = id => e => {
    e.stopPropagation();
    const filteredPlayerList = players.filter(player => player.id !== id);
    if (selectedPlayer && selectedPlayer.id === id) setSelectedPlayer(null);
    setPlayers(filteredPlayerList);
  };

  const handleSelectPlayer = player => _ => setSelectedPlayer(player);

  const handleUpdatePlayerScore = (id, delta) => _ => {
    const updatedPlayers = players.map(player =>
      player.id === id ? { ...player, score: (player.score += delta) } : player
    );

    setPlayers(updatedPlayers);
  };

  useEffect(_ => {
    fetchMorePlayers();
  }, []);

  const highScore = useMemo(
    _ => {
      const scores = players.map(({ score }) => score);

      const highScore = Math.max(...scores);

      return highScore;
    },
    [players]
  );

  const totalPoints = useMemo(_ => players.reduce((acc, { score }) => acc + score, 0), [players]);

  const playerCount = players.length;

  return (
    <div className='scoreboard'>
      <Header totalPoints={totalPoints} playerCount={playerCount} />
      <Players
        players={players}
        removePlayer={handleRemovePlayer}
        updatePlayerScore={handleUpdatePlayerScore}
        selectPlayer={handleSelectPlayer}
        highScore={highScore}
      />
      <Form onSubmit={handleAddPlayer} />
      <PlayerDetail selectedPlayer={selectedPlayer} />
    </div>
  );
};

export default App;
