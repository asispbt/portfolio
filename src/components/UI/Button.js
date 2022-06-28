import React from "react";
import { colors } from "../../style";

const Button = ({inverse, label, link = "#"}) => {
  console.log(link)
  return (<a href = {link} target={link !== "#" && "__blank"} style={{
    boxSizing: 'border-box',
    padding: '9px 20px',
    background: inverse ? 'transparent' : colors.primaryColor,
    color: inverse ? colors.primaryColor : '#fff',
    display: "inline-block",
    borderRadius: "20px",
    boxShadow: inverse ? 'none' : "#6dba6d 0px 0Px 10px 0px",
    border: "1px solid",
    borderColor: inverse ? colors.primaryColor : "transparent",
    letterSpacing: "1px",
    fontSize: 13,
    marginTop: "5px"
  }}>{label}</a>);
};

export default Button;