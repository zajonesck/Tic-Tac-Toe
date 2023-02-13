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

  const data1 = [0, 1, 2];
  const data2 = [3, 4, 5];
  const data3 = [6, 7, 8];

  let dataList1 = data1.map((data) => {
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
  let dataList2 = data2.map((data) => {
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
  let dataList3 = data3.map((data) => {
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
  return (
    <div className="App">
      <div className="board">
        <div className="row">
          <>{dataList1}</>
        </div>
        <div className="row">
          <>{dataList2}</>
        </div>
        <div className="row">
          <>{dataList3}</>
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
