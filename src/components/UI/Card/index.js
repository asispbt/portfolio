import React from "react";
import "./style.css";

const Card = ({className = null, children, style, ...res})=>{
  const _class = className?`card ${className}`: `card`;
    return (
      <div className= {_class} style={{...style,  borderRadius: "3ch", boxShadow: "2px 2ch rgb(255 255 255 / 10%)"}} {...res}> 
         {children}
      </div>
    );
}

export default Card;