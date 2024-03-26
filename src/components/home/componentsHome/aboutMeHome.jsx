import React from "react";
import "./cssFiles/aboutMeHome.css";

function AboutMeHome() {
  return (
    <div className="about-me-home-section">
      <h1 className="heading-font-portfolio">ABOUT ME</h1>
      <div className="about-section-details">
        <h4>
          I am a front-end developer based in Sydney. Has Mechanical Engineering
          background.
        </h4>
        <span>
          I am a front-end developer based in Sydney looking for exciting
          opportunities. Has Mechanical Engineering background. Likes to focus
          on accessibility when developing. Passionate and curious about solving
          problems. Currently, I’m exploring Reactjs, Webflow and a bit of
          Designing. While I am not programming, I enjoy playing football,
          photography and playing Valorant. Learning more to improve skill.
        </span>
        <button>MORE ABOUT ME</button>
      </div>
    </div>
  );
}

export default AboutMeHome;
