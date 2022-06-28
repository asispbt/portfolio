import React from "react";
import Card from "../UI/Card"
import SmallHeading from "../UI/SmallHeading";
import Coding from "../../assets/hobby/coding.webp";
import Badminton from "../../assets/hobby/badminton.webp";
import Cricket from "../../assets/hobby/cricket.jpg";
import Cycling from "../../assets/hobby/cycling.jpg";
import Music from "../../assets/hobby/music.jpg";
import "./style.css";
import AOS from 'aos';
import 'aos/dist/aos.css';
import MediumHeading from "../UI/MediumHeading";

const skillArr = [
    {
        name: "Coding",
        img: Coding,
    },
    {
        name: "Badminton",
        img: Badminton,
    },
    {
        name: "Cricket",
        img: Cricket,
    },
    {
        name: "Cycling",
        img: Cycling,
    },
    {
        name: "Music",
        img: Music,
    },
]

const LatestProjects = (props) => {
    React.useEffect(() => {
        AOS.init();
        AOS.refresh();
    }, []);


    return (
        <div className="container" style={{ marginTop: "50px", marginBottom: "50px", width: "600px" }} id="hobby">
            <SmallHeading text = "Hobbies" />
            <MediumHeading text = {"My Leisure Time Utilization"} />
            <div style={{margin: "3ch 0"}} />
            {
                skillArr.map((el, i) => (
                    <Card key={i} data-aos="zoom-in-down" data-aos-duration="3000"
                        className="flexRow align-center justify-se" style={{ backgroundColor: "#fff", marginBottom: "2ch" }}>
                        <div>
                            <SmallHeading text={el.name} />
                        </div>

                        <div className="projectImgContainer" style={{ width: "240px" }}>
                            <img style={{ width: "100%" }} src={el.img} alt="" />
                        </div>
                    </Card>
                ))
            }
        </div>
    )
}

export default LatestProjects;