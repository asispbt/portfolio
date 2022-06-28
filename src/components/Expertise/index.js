import React from "react";
import MediumHeading from "../UI/MediumHeading";
import SmallHeading from "../UI/SmallHeading";
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import Card from "../UI/Card";
import { colors } from "../../style";
import me from "../../assets/me-straight.png";
import SocialConnect from "../UI/SocialConnect";
import "./style.css";
import AOS from "aos";
import 'aos/dist/aos.css';

const percentage = 70;

const Expertise = (props) => {
    React.useEffect(() => {
        AOS.init();
        AOS.refresh();
      }, []);

    return (
        <div className="container" style={{ marginTop: "80px" }} id="skills">
            <div >
                <SmallHeading text="Expertise" />
                <MediumHeading text="Special Skills" />
            </div>
            <div className="flexRow justify-center align-center">
                <div data-aos="fade-right" data-aos-duration="2000" className="rightImgMeContainer">
                    <img src={me} alt="myslef" />
                </div>
                <Card data-aos="fade-left" data-aos-duration="2000" style={{ padding: "30px", width: "400px", margin: "0 auto" }}>
                    <div className="flexRow align-center">
                        <div style={{ width: "80px", height: "80px" }}>
                            <CircularProgressbar
                                value={percentage}
                                text={`${percentage}%`}
                                styles={buildStyles({
                                    textColor: colors.primaryColor,
                                    pathColor: colors.primaryColor,
                                })}
                            />
                        </div>
                        <h2 className="textColor mlr-10"> Development</h2>
                    </div>
                    <p className="grayP mtb-10 font-12">
                        Front-End using HTML, CSS & Javascript as Language and React.js as Framework
                    </p>
                    <div style={{ margin: "30px 0" }} />
                    <div className="flexRow align-center">
                        <div style={{ width: "80px", height: "80px" }}>
                            <CircularProgressbar
                                value={percentage}
                                text={`${percentage}%`}
                                styles={buildStyles({
                                    textColor: colors.primaryColor,
                                    pathColor: colors.primaryColor,
                                })}
                            />
                        </div>
                        <h3 className="textColor mlr-10">Data Structures & Agorithms</h3>
                    </div>
                    <p className="grayP mtb-10 font-12">
                        Learning the skills of Solving aptitude problems using Data structure & Algorithms.
                    </p>
                </Card>
            </div>
            <SocialConnect />
        </div>
    );
};

export default Expertise;