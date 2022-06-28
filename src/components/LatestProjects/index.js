import React from "react";
import Card from "../UI/Card"
import MediumHeading from "../UI/MediumHeading";
import SmallHeading from "../UI/SmallHeading";
import Button from "../UI/Button"
import latestProject from "../../assets/projects/project-001.png";
import AOS from 'aos';
import 'aos/dist/aos.css';

import "./style.css";

const LatestProjects = (props) =>
{
    React.useEffect(() => {
        AOS.init();
        AOS.refresh();
      }, []);

    return (
        <div className="container" style={{marginTop: "50px", marginBottom: "50px"}} id="latest-projects">
            <Card className="flexRow align-center justify-se">
                <div data-aos="flip-right" data-aos-duration="2000">
                    <SmallHeading text = "portfolios" />
                    <MediumHeading
                    style= {{textTransform: "uppercase"}} text="Latest Projects" />
                    <div className="mtb-10 flexRow" style={{justifyContent: "center"}}>
                    <Button label="Click Here" />
                    </div>
                    
                </div>

                <div className="projectImgContainer" data-aos="flip-left" data-aos-duration="2000">
                    <img style={{width: "723px"}} src={latestProject} alt="" />
                </div>
            </Card>
        </div>
    )
}

export default LatestProjects;