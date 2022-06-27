import React from "react";
import {facebook, linkedin, instagram} from "../../../assets/social-icons";
import "./style.css";

const SocialConnect = (props) =>{
    return (
        <div className="socialConnect">

            <span className="textColor font-12">Follow me on:</span>
            <a className="socialLink" href="#">
                <img src={facebook} alt="social-icon images"/>
            </a>
            <a className="socialLink" href="#">
                <img src={linkedin} alt="social-icon images"/>
            </a>
            <a className="socialLink" href="#">
                <img src={instagram} alt="social-icon images"/>
            </a>
        </div>
    );
};

export default SocialConnect;