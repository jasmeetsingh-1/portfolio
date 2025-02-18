import React from "react";
import "./cssFiles/aboutMeHome.css";

function AboutMeHome({ setPageNavigate }) {
  return (
    <div className="about-me-home-section">
      <h1 className="heading-font-portfolio">ABOUT ME</h1>
      <div className="about-section-details">
        <h4>Driven by Code, Inspired by History</h4>
        <span>
          Tech enthusiast, avid reader, and history buff passionate about exploring the past to inspire innovative tech solutions. As a full-stack developer, I aim to build meaningful solutions that solve real problems and contribute to a better future.
        </span>
        <button
          onClick={() => {
            setPageNavigate(false);
          }}
        >
          MORE ABOUT ME
        </button>
      </div>
    </div>
  );
}

export default AboutMeHome;
