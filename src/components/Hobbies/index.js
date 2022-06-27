import React from "react";
import Card from "../UI/Card"
import SmallHeading from "../UI/SmallHeading";
import Coding from "../../assets/hobby/coding.webp";
import Badminton from "../../assets/hobby/badminton.webp";
import Cricket from "../../assets/hobby/cricket.jpg";
import Cycling from "../../assets/hobby/cycling.jpg";
import Music from "../../assets/hobby/music.jpg";
import "./style.css";

const LatestProjects = (props) =>
{
    return (
        <div className="container" style={{marginTop: "50px", marginBottom: "50px", width: "600px"}}>
            <Card className="flexRow align-center justify-se" style={{backgroundColor: "#fff"}}>
                <div>
                    <SmallHeading text = "Coding" />   
                </div>

                <div className="projectImgContainer" style={{width: "240px"}}>
                    <img style={{width: "100%"}} src={Coding} alt="" />
                </div>
            </Card>

            <Card className="flexRow align-center  justify-se" style={{backgroundColor: "#fff"}}>
                <div>
                    <SmallHeading text = "Badminton" />   
                </div>

                <div className="projectImgContainer" style={{width: "240px"}}>
                    <img style={{width: "100%"}} src={Badminton} alt="" />
                </div>
            </Card>

            <Card className="flexRow align-center  justify-se" style={{backgroundColor: "#fff"}}>
                <div>
                    <SmallHeading text = "Cricket" />   
                </div>

                <div className="projectImgContainer" style={{width: "240px"}}>
                    <img style={{width: "100%"}} src={Cricket} alt="" />
                </div>
            </Card>

            <Card className="flexRow align-center  justify-se" style={{backgroundColor: "#fff"}}>
                <div>
                    <SmallHeading text = "Cycling" />   
                </div>

                <div className="projectImgContainer" style={{width: "240px"}}>
                    <img style={{width: "100%"}} src={Cycling} alt="" />
                </div>
            </Card>

            <Card className="flexRow align-center justify-se" style={{backgroundColor: "#fff"}}>
                <div>
                    <SmallHeading text = "Music" />   
                </div>

                <div className="projectImgContainer" style={{width: "240px"}}>
                    <img style={{width: "100%"}} src={Music} alt="" />
                </div>
            </Card>
        </div>
    )
}

export default LatestProjects;