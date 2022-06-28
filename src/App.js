import React from "react";
import Hero from "./components/Hero/index";
import Specializing from "./components/Specializing";
import Expertise from "./components/Expertise";
import LatestProjects from "./components/LatestProjects";
import Qualification from "./components/Qualification";
import Hobbies from "../src/components/Hobbies";
import Navbar from "../src/components/Navbar";

const App = (props)=>{
  const date = new Date().getFullYear();
  return <div>
    <Navbar />
    <Hero />
    <Specializing />
    <Expertise />
    <LatestProjects />
    <Qualification />
    <Hobbies />
    <p style={{margin: "20px auto", textAlign: "center" }}>Copyright &copy; {date}</p>
  </div>;
};

export default App;

// https://www.instagram.com/ashishjha366/
// https://www.facebook.com/ashish.kumarjha.56808995
// https://www.linkedin.com/in/ashish-kumar-jha-7374001ba/