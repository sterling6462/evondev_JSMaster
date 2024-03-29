import React from "react";
import { calculateWinner } from "../../helper";
import Cell from "./Cell";
import "./GameStyle.css";

const Board = (props) => {
  const cells = [null, null, null, "X", "X", "X", null, null, null];
  console.log(calculateWinner(cells));
  console.log(props);

  return (
    <div className="game-board">
      {props.cells.map((item, index) => (
        <Cell
          key={index}
          value={item}
          onClick={() => props.onClick(index)}
          className={item === "X" ? "is-x" : item === "O" ? "is-o" : ""}
        />
      ))}
    </div>
  );
};

export default Board;
