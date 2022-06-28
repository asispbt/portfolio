import React from "react";
import {facebook, linkedin, instagram} from "../../../assets/social-icons";
import "./style.css";

const SocialConnect = (props) =>{
    return (
        <div className="socialConnect">

            <span className="textColor font-12">Follow me on:</span>
            <a className="socialLink" href="https://www.facebook.com/ashish.kumarjha.56808995">
                <img src={facebook} alt="social-icon images"/>
            </a>
            <a className="socialLink" href="https://www.linkedin.com/in/ashish-kumar-jha-7374001ba/">
                <img src={linkedin} alt="social-icon images"/>
            </a>
            <a className="socialLink" href="https://www.instagram.com/ashishjha366/">
                <img src={instagram} alt="social-icon images"/>
            </a>
        </div>
    );
};

export default SocialConnect;