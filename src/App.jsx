import "./App.css";
import React, { useEffect, useState } from "react";
import Square from "./Components/square";
import Patterns from "./Components/Patterns";

function App() {
  const [board, setBoard] = useState(["", "", "", "", "", "", "", "", ""]);
  const [player, setPlayer] = useState("O");
  const [result, setResult] = useState({ winner: "none", state: "none" });

  const rowOne = [0, 1, 2];
  const rowTwo = [3, 4, 5];
  const rowThree = [6, 7, 8];

  useEffect(() => {
    const foundWin = checkWin();
    if (foundWin) {
      setResult({ winner: player, state: "Won" });
    } else {
      checkIfTie();
    }

    if (player === "X") {
      setPlayer("O");
    } else {
      setPlayer("X");
    }
  }, [board]);

  useEffect(() => {
    if (result.state !== "none") {
      alert(`Game Over!! Winning Player: ${result.winner}`);
      restartGame();
    }
  });

  const chooseSquare = (square) => {
    setBoard(
      board.map((val, idx) => {
        if (idx === square && val === "") {
          return player;
        }
        return val;
      })
    );
  };

  const isWin = (currPatternIndex, playerVal) => {
    const checkWinSquareOne = Patterns[currPatternIndex][0];
    const checkWinSquareTwo = Patterns[currPatternIndex][1];
    const checkWinSquareThree = Patterns[currPatternIndex][2];

    if (
      board[checkWinSquareOne] === playerVal &&
      board[checkWinSquareTwo] === playerVal &&
      board[checkWinSquareThree] === playerVal
    ) {
      return true;
    } else return false;
  };

  const checkWin = () => {
    let foundWin = false;
    for (
      let currPatternIndex = 0;
      currPatternIndex < Patterns.length;
      currPatternIndex++
    ) {
      const playerVal = board[Patterns[currPatternIndex][0]];
      if (playerVal === "") {
        foundWin = false;
      } else {
        foundWin = isWin(currPatternIndex, playerVal);
        if (foundWin === true) {
          break;
        }
      }
    }
    return foundWin;
  };

  const checkIfTie = () => {
    let filled = true;
    board.forEach((square) => {
      if (square === "") {
        filled = false;
      }
    });
    if (filled) {
      setResult({ winner: "You both lose", state: "Tie" });
    }
  };

  const restartGame = () => {
    setBoard(["", "", "", "", "", "", "", "", ""]);
    setPlayer("O");
    setResult({ winner: "none", state: "none" });
  };

  const renderRow = (array) => {
    return array.map((data) => {
      return (
        <Square
          dataTestId={"square" + data}
          key={data}
          val={board[data]}
          chooseSquare={() => {
            chooseSquare(data);
          }}
        />
      );
    });
  };

  return (
    <div className="App">
      <div className="board">
        <div className="row">
          <>{renderRow(rowOne)}</>
        </div>
        <div className="row">
          <>{renderRow(rowTwo)}</>
        </div>
        <div className="row">
          <>{renderRow(rowThree)}</>
        </div>
      </div>
      <header className="App-header">
        <p>TIC TAC TOE</p>
        <a
          className="Git-link"
          href="https://github.com/zajonesck"
          target="_blank"
          rel="noopener noreferrer"
        >
          My GitHub
        </a>
      </header>
    </div>
  );
}

export default App;
