import React from "react";

const Stats = ({ playerCount, totalPoints }) => (
  <table className="stats">
    <tbody>
      <tr>
        <td>Player:</td>
        <td>{playerCount}</td>
      </tr>
      <tr>
        <td>Total Points:</td>
        <td>{totalPoints}</td>
      </tr>
    </tbody>
  </table>
);

export default Stats;
