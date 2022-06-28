import React, { useState, useEffect } from 'react'
import Button from '../UI/Button'
import "./style.css"

const Navbar = () => {
  const [isScrolled, setScrolled] = React.useState(false);
  // const [link, setLink] = useState(null);

  const handleScroll = () => {
    if (window.scrollY > 80) setScrolled(true);
    else setScrolled(false);
  }

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
  }, [])


  useEffect(() => {
    // setLink(window.location.hash)
  }, [])
  const link = window.location.hash;
  console.log(window.location.hash)

  return (
    <nav className={isScrolled ? "moved nav-bar" : "nav-bar"}>
      <a href="/">
        <img style={{width: "40px"}} src="/logo192.png" alt="logo" />
      </a>
      <div style={{flex: 0.4}} />
      <div style={{display: "flex", justifyContent: "space-evenly", flex: 1, alignItems: "center"}}>
        <a href="/" className={!link ? "btn active" : "btn"}>Home</a>
        <a href="#specialization" className={link === "#specialization" ? "btn active" : "btn"}>Specialization</a>
        <a href="#skills" className={link === "#skills" ? "btn active" : "btn"}>Skills</a>
        <a href="#latest-projects" className={link === "#latest-projects" ? "btn active" : "btn"}>Latest Projects</a>
        <a href="#education" className={link === "#education" ? "btn active" : "btn"}>Education</a>
        <a href="#hobby" className={link === "#hobby" ? "btn active" : "btn"}>Hobby</a>
        <Button link={"Ashish_Kumar_Jha_Resume.pdf"} label="Resume" />
      </div>
    </nav>
  )
}

export default Navbar