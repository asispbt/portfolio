import React from "react";
import Card from "../UI/Card";
import MediumHeading from "../UI/MediumHeading";
import SmallHeading from "../UI/SmallHeading";
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import Skill from "../UI/Skill";
import { colors } from "../../style";
import AOS from "aos";
import 'aos/dist/aos.css';

const Specializing = (props)=>{
  React.useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);
      const skills = [
        {
          skillName: 'C/C++',
          desc: 'Hands on experience in C/C++',
          value: 95,
          textColor: colors.primaryColor,
          pathColor: '#f2a154'
        },
        {
          skillName: 'Data Structure & Algorithms',
          desc: 'Good at Problem Solving in DSA',
          value: 70,
          textColor: colors.primaryColor,
          pathColor: '#3A5c77'
        },
        {
          skillName: 'HTML/CSS',
          desc: 'Hands on experience in HTML/CSS',
          value: 80,
          textColor: colors.primaryColor,
          pathColor: '#F15412'
        },
        {
          skillName: 'Node.js',
          desc: 'Hands on experience in Node.js',
          value: 60,
          textColor: colors.primaryColor,
          pathColor: '#F4E06D'
        },
        {
          skillName: 'React.js',
          desc: 'Hands on experience in React.js',
          value: 70,
          textColor: colors.primaryColor,
          pathColor: '#9EB23B'
        },
        {
          skillName: 'Bootstrap',
          desc: 'Hands on experience in Bootstrap',
          value: 70,
          textColor: colors.primaryColor,
          pathColor: '#646FD4'
        },
        {
          skillName: 'Material UI',
          desc: 'Hands on experience in Material UI',
          value: 50,
          textColor: colors.primaryColor,
          pathColor: '#F73D93'
        },
        {
          skillName: 'SQL',
          desc: 'Hands on experience in SQL',
          value: 70,
          textColor: colors.primaryColor,
          pathColor: '#1D5C63'
        },
      ]
    return (
      
      <div className= "container" id="specialization"> 
      <Card style={{padding: "50px", borderRadius: "3ch"}}>
        <SmallHeading text = "What i do" />
        <MediumHeading text = "Specializing In" />
        <div className="flexRow wrap justify-se mtb-10"  style={{padding: "30px 20px"}}>
        {/* {skills.map((skill,index) => (
          <Skill
            key={index} 
            skillName = {skill.skillName}
            desc={skill.desc}
            value={skill.value}
            textColor={skill.primaryColor}
            pathColor={skill.pathColor}
          />
        ))}  */}
        <div data-aos="fade-up" data-aos-duration="2000" style={{flex: 1, margin: "0 10px"}}>
          {skills.map((skill,index) => index <= 3 && (
          <Skill
            key={index} 
            skillName = {skill.skillName}
            desc={skill.desc}
            value={skill.value}
            textColor={skill.primaryColor}
            pathColor={skill.pathColor}
          />
        ))} 
        </div>
        <div data-aos="fade-up"  data-aos-duration="2000" style={{flex: 1, margin: "0 10px"}}>
        {skills.map((skill,index) => index > 3 && (
          <Skill
            key={index} 
            skillName = {skill.skillName}
            desc={skill.desc}
            value={skill.value}
            textColor={skill.primaryColor}
            pathColor={skill.pathColor}
          />
        ))} 
        </div>
        </div>
      </Card>
      
      </div>

    );
};

export default Specializing;