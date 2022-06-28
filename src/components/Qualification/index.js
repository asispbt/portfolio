import React from "react";
import MediumHeading from "../UI/MediumHeading";
import SmallHeading from "../UI/SmallHeading";
import me from "../../assets/profile3_right.png"
import "./style.css";
import Tile from "../UI/Tile";
import Button from "../UI/Button";
import AOS from 'aos';
import 'aos/dist/aos.css';

const Qualification = (props) =>{
  React.useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);

  return (
        <div className="container" style={{padding: "50px 0"}} id="education">
            <SmallHeading text = "Qualifications" />
            <MediumHeading text = {"My Education"} />
            <div className="flexRow align-center justify-se">
            <div>
              <div data-aos="zoom-in-right" data-aos-duration="4000" className="rightImgMeContainer">
                <img src={me} alt = "left-img" /></div><div>
                {/* <div style={{
                  background: "#fff",
                  padding: "5px 8px 6px",
                  boxSizing: "border-box",
                  display: "flex",
                  justifyContent: "center",
                  borderRadius: "20px",

                 }}>
                  <div className="mlr-10">
                    <Button label="Hire Me" />
                  </div>
                  <div className="mlr-10">
                    <Button label="Download CV "  inverse={true} />
                  </div>
                </div> */}
                </div>
             </div>
                
              <div data-aos="zoom-in-left" data-aos-duration="4000"> 
                <Tile title= "National Institute of Technology Silchar"
                mediumTitle = "Bachelor of Technology"
                desc = "Electronics & Instrumentation Engineering"
                />
                <Tile title= "Maharishi vidya Mandir Barsajai"
                mediumTitle = "Higher Secondary"
                desc = "Science Stream"
                />
                <Tile title= "Maharishi vidya Mandir Barsajai"
                mediumTitle = "Matriculation"
                desc = "Basics of All Streams"
                />
              </div>
            </div>
        </div>
  );
};

export default Qualification;