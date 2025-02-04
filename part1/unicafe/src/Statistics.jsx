import React from "react";
import StatisticLine from "./StatisticLine";

function Statistics({ good, bad, neutral }) {
  const all = good + bad + neutral;
  const avg = (1 * good + -1 * bad + 0) / all;
  const positivePercent = (good / all) * 100;
  return (
    <div>
      <h1>Statistics</h1>
      {all > 0 ? (
        <table>
          <tbody>
            <StatisticLine text="Good" value={good} />
            <StatisticLine text="Bad" value={bad} />
            <StatisticLine text="Neutral" value={neutral} />
            <StatisticLine text="All" value={all} />
            <StatisticLine text="Averag" value={avg} />
            <StatisticLine text="Positive" value={positivePercent} />
          </tbody>
        </table>
      ) : (
        <div>No feedback given</div>
      )}
    </div>
  );
}

export default Statistics;
