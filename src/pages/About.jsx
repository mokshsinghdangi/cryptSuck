import React from "react";
import "../css/about.css";

const About = () => {
  return (
    <div className="about">
      <div className="about-left">
        <span className="light-color">A</span>
        <span className="light-color">B</span>
        <span className="light-color">O</span>
        <span className="light-color">U</span>
        <span className="light-color">T</span>
        <span>M</span>
        <span>E</span>
      </div>
      <div className="about-right">
        <div className="content">
          <div className="about-logo">C</div>
          <div className="about-me">
            cryptSuck is a project to allow anyone to send Near whenever they
            want to anyone within just few clicks.
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
