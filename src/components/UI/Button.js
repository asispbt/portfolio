import React from "react";
import { colors } from "../../style";

const Button = (props) => {
  return (<a href = "#" style={{
    boxSizing: 'border-box',
    padding: '9px 20px',
    background: props.inverse ? 'transparent' : colors.primaryColor,
    color: props.inverse ? colors.primaryColor : '#fff',
    display: "inline-block",
    borderRadius: "20px",
    boxShadow: props.inverse ? 'none' : "#6dba6d 0px 0Px 10px 0px",
    border: "1px solid",
    borderColor: props.inverse ? colors.primaryColor : "transparent",
    letterSpacing: "1px",
    fontSize: 13,
    marginTop: "5px"
  }}>{props.label}</a>);
};

export default Button;