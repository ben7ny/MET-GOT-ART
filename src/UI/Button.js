import React from "react";

const Button = props => {
  return (
    <button className={props.buttonClass} onClick={props.onClick}>
      {props.buttonName}
    </button>
  );
};

export default Button;
