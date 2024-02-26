import React from "react";

const Square = ({ value, onClick }) => {
  const style = value ? `squares ${value}` : `squares`;

  return (
    <button className={style} onClick={onClick}>
      {value}
    </button>
  );
};
{squares.map((square, i) => (
    <Square key={i} value={square} onClick={() => onClick(i)} />
))}

export default Square;
