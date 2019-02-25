import React, { Component } from "react";
import axios from "axios";
import { data } from "./data";
import Header from "./components/Header";
import Players from "./components/Players";
import Form from "./components/Form";
import PlayerDetail from "./components/PlayerDetail";

class App extends Component {
  state = { players: data, selectedPlayerIndex: -1 };

  async componentDidMount() {
    const { data } = await axios.get("/characters");
    const { players } = this.state;
    const playersArray = players;
    data.results.forEach(({ name }, i) => {
      const parsedPlayer = {
        id: playersArray.length,
        name,
        age: Math.ceil(Math.random() * 18),
        score: Math.ceil(Math.random() * 10)
      };
      playersArray.push(parsedPlayer);
    });
    this.setState({ players: playersArray });
  }
  addPlayer = ({ name, age }) => {
    const { players } = this.state;
    const newPlayer = {
      id: players.length,
      name,
      age,
      score: 0
    };
    const newPlayerList = [newPlayer, ...players];
    this.setState({ players: newPlayerList });
  };

  removePlayer = id => {
    const { players } = this.state;
    const filteredPlayerList = players.filter(player => player.id !== id);
    this.setState({ players: filteredPlayerList });
  };

  selectPlayer = id => this.setState({ selectedPlayerIndex: id });

  updatePlayerScore = (id, change) => {
    const { players } = this.state;
    const updatedPlayerList = players.map(player =>
      player.id === id ? { ...player, score: (player.score += change) } : player
    );
    this.setState({ players: updatedPlayerList });
  };

  getHighScore = _ => {
    const { players } = this.state;
    const scores = players.map(player => player.score);
    const highScore = Math.max(...scores);
    if (highScore) return highScore;
  };

  render() {
    const { players, selectedPlayerIndex } = this.state;
    const highScore = this.getHighScore();
    const playerCount = players.length;
    const totalPoints = players.reduce((acc, player) => acc + player.score, 0);
    const selectedPlayer =
      selectedPlayerIndex !== -1 && players[selectedPlayerIndex];
    return (
      <div className="scoreboard">
        <Header totalPoints={totalPoints} playerCount={playerCount} />
        <Players
          players={players}
          removePlayer={this.removePlayer}
          updatePlayerScore={this.updatePlayerScore}
          selectPlayer={this.selectPlayer}
          highScore={highScore}
        />
        <Form addPlayer={this.addPlayer} />
        <PlayerDetail selectedPlayer={selectedPlayer} />
      </div>
    );
  }
}

export default App;
