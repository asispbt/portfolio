import React from "react";
import me from "../../assets/me-profess.png";
import "./style.css";
import Button from "../UI/Button";
import AOS from 'aos';
import 'aos/dist/aos.css'; // You can also use <link> for styles

const Hero = (props) => {
  React.useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);

  return (
    <div className="container" style={{ marginTop: "90px" }}>
      <div className="flexRow justify-se align-center">
        <div data-aos="fade-right" data-aos-duration="2000">
          <h3 className=" bold-500 textColor ls-1 mtb-10"><span className="primaryColor uppercase">Hello ,</span> I am Ashish Kumar Jha</h3>
          <h2 className="textColor ls-1 mtb-10">Front-End Developer.</h2>
          <p className="grayP font-12 mtb-10">A good programming skill.</p>

          <div className="flexRow" style={{ margin: '15px 0' }}>
            <div><Button link="mailto:kumarjhaashish008@gmail.com" className="mlr-10" label="Hire Me" /></div>
            <div className="mlr-10"><Button link={"Ashish_Kumar_Jha_Resume.pdf"} label="Download Resume" inverse={true} /></div>
          </div>
        </div>
        <div data-aos="fade-left" data-aos-duration="2000">
          <div className="meRightImgContainer">
            <img src={me} alt="Ashishkr_Jha" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;