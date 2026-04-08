import { useState } from "react";

function App() {
  const [result, setResult] = useState("");
  const [rounds, setRounds] = useState(0);
  const [history, setHistory] = useState([]);
  const [streak, setStreak] = useState(0);

  const choices = ["rock", "paper", "scissor"];

  const playGame = (playerChoice) => {
    const randomIndex = Math.floor(Math.random() * 3);
    const computerChoice = choices[randomIndex];

    let gameResult = "";

    if (playerChoice === computerChoice) {
      gameResult = "Draw";
      setStreak(0);
    } 
    else if (playerChoice === "rock" && computerChoice === "scissor") {
      gameResult = "Yuhoo, hum jeet gaye 🥳";
      setStreak((prev) => prev + 1);
    }
    else if (playerChoice === "paper" && computerChoice === "rock") {
      gameResult = "Yuhoo, hum jeet gaye 🥳";
      setStreak((prev) => prev + 1);
    }
    else if (playerChoice === "scissor" && computerChoice === "paper") {
      gameResult = "Yuhoo, hum jeet gaye 🥳";
      setStreak((prev) => prev + 1);
    }
    else {
      gameResult = "Computer se haar gaaye 🥀";
      setStreak(0);
    }

    const roundText = `You: ${playerChoice} | Computer: ${computerChoice} | ${gameResult}`;

    setResult(roundText);
    setRounds((prev) => prev + 1);

    // Add to history
    setHistory((prev) => [roundText, ...prev]);
  };

  const resetGame = () => {
    setResult("");
    setRounds(0);
    setHistory([]);
    setStreak(0);
  };

  return (
    <div className="container">
      <h1>Classic rock-paper-scissor Game</h1>

      <h3>Rounds: {rounds}</h3>
      <h3>Streaks: {streak}</h3>

      <div className="buttons">
        <button onClick={() => playGame("rock")}>Rock</button>
        <button onClick={() => playGame("paper")}>Paper</button>
        <button onClick={() => playGame("scissor")}>Scissor</button>
      </div>

      <h2>{result}</h2>

      <button className="reset" onClick={resetGame}>
        Reset Game
      </button>

      <h3>History:</h3>
      <ul>
        {history.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    </div>
  );
}

export default App;