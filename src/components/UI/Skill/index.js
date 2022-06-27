import React from "react";
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import "./style.css";


const Skill = (props, {...rest}) =>{
    return(
        <div {...rest} className="flexRow align-center mtb-10">
          <div className="skillContainer">
             <CircularProgressbar
                value={props.value}
                text={`${props.value}%`}
                styles={buildStyles({
                    textColor: props.textColor,
                    pathColor: props.pathColor,
                })}
              />
           </div>
            
            <div className="mlr-10">
                <p className="font-18 bold-600 textColor mtb-10">{props.skillName}</p>
                <p className="font-14 bold-500 gray mtb-10" style={{color: 'grey'}}>{props.desc}</p>
            </div>
        </div>
        
    );
};

export default Skill;