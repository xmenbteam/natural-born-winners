import { useEffect, useState } from "react";
import json from "../assets/map.json";
import { createMap, Game } from "../utils/Game";
import "../Map.css";

function GameComp() {
  const [map, setMap] = useState([]);
  const [instructions, setInstructions] = useState([]);
  const [instructionsGiven, setCount] = useState(0);
  useEffect(() => {
    const map = createMap(json.map);
    setMap(map);
  }, []);
  const handleInstruction = (e) => {
    setInstructions((prevInstructions) => {
      return [...prevInstructions, e.target.value];
    });
  };
  const handleReset = () => setInstructions([]);

  const handleRun = () => {
    const game = new Game(map);
    instructions.forEach((instruction, i) => {
      setTimeout(() => {
        game.move(instruction);
        setMap([...game.map]);
        setCount((cur) => cur + 1);
      }, 400 * i);
    });
    setInstructions([]);
  };
  return (
    <main>
      <h2>Game</h2>
      <div className="split">
        <section className="instructions">
          <p>instructions</p>
          {instructions.map((instruction, i, arr) => {
            return <p key={instruction + i}>{instruction}</p>;
          })}
        </section>
        <section className="map">
          {map.map((row, i) => {
            return (
              <ul key={row + i}>
                {row.map((char, j) => (
                  <li key={row + char + i + j}>{char}</li>
                ))}
              </ul>
            );
          })}
          <p>Instructions Given: {instructionsGiven}</p>
        </section>
      </div>
      <section>
        <div>
          <button onClick={handleInstruction} value="up">
            up
          </button>
          <button onClick={handleInstruction} value="down">
            down
          </button>
          <button onClick={handleInstruction} value="left">
            left
          </button>
          <button onClick={handleInstruction} value="right">
            right
          </button>
        </div>
        <button onClick={handleRun}>Run</button>
        <button onClick={handleReset}>Reset</button>
      </section>
    </main>
  );
}

export default GameComp;
