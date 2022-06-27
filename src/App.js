import React from "react";
import Hero from "./components/Hero/index";
import Specializing from "./components/Specializing";
import Expertise from "./components/Expertise";
import LatestProjects from "./components/LatestProjects";
import Qualification from "./components/Qualification";
import Hobbies from "../src/components/Hobbies";

const App = (props)=>{
  return <div>
    <Hero />
    <Specializing />
    <Expertise />
    <LatestProjects />
    <Qualification />
    <Hobbies />
  </div>;
};

export default App;
