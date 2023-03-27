import React from "react";
import '../assets/stylesheets/Button.css'
// import '../assets/stylesheets/Buttons.css';


function Button(props){

  const isOperator = value => {
    return isNaN(value) && (value !== '.') && (value !== '=');
  };

  return (
    <button
    className={`container-button ${isOperator(props.children) ? 'operator' : 'null'}`.trimEnd()}
    onClick={() => props.assignClick(props.children)}>
      {props.children}
    </button>
  );

}
export default Button;