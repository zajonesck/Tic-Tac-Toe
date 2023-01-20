import "./App.css";
import React, { useEffect, useState } from "react";
import Square from "./Components/square";
import Patterns from "./Components/Patterns";

function App() {
  const [board, setBoard] = useState(["", "", "", "", "", "", "", "", ""]);
  const [player, setPlayer] = useState("O");
  const [result, setResult] = useState({ winner: "none", state: "none" });

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

  const checkWin = () => {
    let foundWin = false;
    for (
      let currPatternIndex = 0;
      currPatternIndex < Patterns.length;
      currPatternIndex++
    ) {
      //if the first square of the pattern is empty its not that pattern
      const playerVal = board[Patterns[currPatternIndex][0]];
      if (playerVal === "") {
        foundWin = false;
      } else {
        const winningSquareOne = Patterns[currPatternIndex][0];
        const winningSquareTwo = Patterns[currPatternIndex][1];
        const winningSquareThree = Patterns[currPatternIndex][2];

        if (
          board[winningSquareOne] === playerVal &&
          board[winningSquareTwo] === playerVal &&
          board[winningSquareThree] === playerVal
        ) {
          foundWin = true;
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
  return (
    <div className="App">
      <div className="board">
        <div className="row">
          {/* refactor square to be in a loop 9x
          also get rid of rows */}
          <Square
            val={board[0]}
            dataTestId={"square0"}
            chooseSquare={() => {
              chooseSquare(0);
            }}
          />
          <Square
            val={board[1]}
            dataTestId={"square1"}
            chooseSquare={() => {
              chooseSquare(1);
            }}
          />
          <Square
            val={board[2]}
            dataTestId={"square2"}
            chooseSquare={() => {
              chooseSquare(2);
            }}
          />
        </div>
        <div className="row">
          <Square
            val={board[3]}
            dataTestId={"square3"}
            chooseSquare={() => {
              chooseSquare(3);
            }}
          />
          <Square
            val={board[4]}
            dataTestId={"square4"}
            chooseSquare={() => {
              chooseSquare(4);
            }}
          />
          <Square
            val={board[5]}
            dataTestId={"square5"}
            chooseSquare={() => {
              chooseSquare(5);
            }}
          />
        </div>
        <div className="row">
          <Square
            val={board[6]}
            dataTestId={"square6"}
            chooseSquare={() => {
              chooseSquare(6);
            }}
          />
          <Square
            val={board[7]}
            dataTestId={"square7"}
            chooseSquare={() => {
              chooseSquare(7);
            }}
          />
          <Square
            val={board[8]}
            dataTestId={"square8"}
            chooseSquare={() => {
              chooseSquare(8);
            }}
          />
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
