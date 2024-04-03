import React from "react";
import "./cssFiles/aboutMeHome.css";

function AboutMeHome({ setPageNavigate }) {
  return (
    <div className="about-me-home-section">
      <h1 className="heading-font-portfolio">ABOUT ME</h1>
      <div className="about-section-details">
        <h4>
          I'm a front-end developer based in Gurugram, Delhi, and an avid
          reader.
        </h4>
        <span>
          I'm a Delhi-based front-end developer with a BTech (CSE) background,
          committed to accessibility and problem-solving. Currently, I'm
          expanding my expertise in React.js and design. Outside of coding, I
          enjoy basketball and exploring historical narratives for ongoing
          personal development.
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
