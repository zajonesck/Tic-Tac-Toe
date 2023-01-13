import React from "react";
import "../App.css";

function Square({ val, dataTestId, chooseSquare }) {
  return (
    <div
      className="square"
      data-testid={dataTestId}
      id={dataTestId}
      onClick={chooseSquare}
    >
      {val}
    </div>
  );
}

export default Square;
