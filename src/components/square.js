import React from "react";

const Square = (props) => {
  const style = props.value ? `squares ${props.value}` : `squares`;

  return (
    <button className={style} onClick={props.onClick}>
      {props.value}
    </button>
  );
};
export default Square;