import React, { Component } from "react";

class Stopwatch extends Component {
  state = {
    isRunning: false,
    elapsedTime: 0,
    previousTime: 0
  };

  componentDidMount() {
    this.intervalID = setInterval(() => this.tick(), 100);
  }

  componentWillUnmount() {
    clearInterval(this.intervalID);
  }

  tick = _ => {
    const { isRunning, previousTime } = this.state;
    if (isRunning) {
      const now = Date.now();
      this.setState(prevState => ({
        previousTime: now,
        elapsedTime: prevState.elapsedTime + (now - previousTime)
      }));
    }
  };

  handleStopwatch = _ => {
    const { isRunning } = this.state;
    this.setState(prevState => ({ isRunning: !prevState.isRunning }));
    if (!isRunning) this.setState({ previousTime: Date.now() });
  };

  handleReset = _ => this.setState({ elapsedTime: 0 });

  render() {
    const { isRunning, elapsedTime } = this.state;
    const seconds = Math.floor(elapsedTime / 1000);
    return (
      <div className="stopwatch">
        <h2>Stopwatch</h2>
        <span className="stopwatch-time">{seconds}</span>
        <button onClick={this.handleStopwatch}>
          {isRunning ? "Stop" : "Start"}
        </button>
        <button onClick={this.handleReset}>Reset</button>
      </div>
    );
  }
}

export default Stopwatch;
