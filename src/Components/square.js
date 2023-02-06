import React from "react";
import "../App.css";

function Square({ val, dataTestId, chooseSquare }) {
  function onClick() {
    if (!val) {
      chooseSquare();
    }
  }
  return (
    <div
      className="square"
      data-testid={dataTestId}
      id={dataTestId}
      onClick={onClick}
    >
      {val}
    </div>
  );
}

export default Square;
