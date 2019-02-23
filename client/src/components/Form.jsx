import React, { Component } from "react";

class Form extends Component {
  state = { name: String(), age: String() };

  handleInputChange = field => e => this.setState({ [field]: e.target.value });

  handleSubmit = e => {
    e.preventDefault();
    const { name, age } = this.state;
    const newPlayer = { name, age };
    this.props.addPlayer(newPlayer);
    this.setState({ name: String(), age: String() });
  };
  render() {
    const { name, age } = this.state;
    return (
      <div className="add-player-form">
        <form onSubmit={this.handleSubmit}>
          <input
            type="text"
            value={name}
            onChange={this.handleInputChange("name")}
            placeholder="Player Name"
          />
          <input
            type="text"
            value={age}
            onChange={this.handleInputChange("age")}
            placeholder="Player Age"
          />
          <input type="submit" value="Add Player" />
        </form>
      </div>
    );
  }
}

export default Form;
