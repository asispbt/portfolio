import React from "react";
import Card from "../UI/Card"
import MediumHeading from "../UI/MediumHeading";
import SmallHeading from "../UI/SmallHeading";
import Button from "../UI/Button"
import latestProject from "../../assets/projects/project-001.png";

import "./style.css";

const LatestProjects = (props) =>
{
    return (
        <div className="container" style={{marginTop: "50px", marginBottom: "50px"}}>
            <Card className="flexRow align-center justify-se">
                <div>
                    <SmallHeading text = "portfolios" />
                    <MediumHeading 
                    style= {{textTransform: "uppercase"}} text="LatestProjects" />
                    <div className="mtb-10 flexRow" style={{justifyContent: "center"}}>
                    <Button label="Click Here" />
                    </div>
                    
                </div>

                <div className="projectImgContainer">
                    <img style={{width: "723px"}} src={latestProject} alt="" />
                </div>
            </Card>
        </div>
    )
}

export default LatestProjects;