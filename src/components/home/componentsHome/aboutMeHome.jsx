import React from "react";
import "./cssFiles/aboutMeHome.css";

function AboutMeHome() {
  return (
    <div className="about-me-home-section">
      <h1 className="heading-font-portfolio">ABOUT ME</h1>
      <div className="about-section-details">
        <h4>
          I am a front-end developer based in Delhi, Gurugram and A vivid
          reader.
        </h4>
        <span>
          I am a front-end developer based in Dekhi looking for exciting
          opportunities. Has BTech(CSE) background. Likes to focus on
          accessibility when developing. Passionate and curious about solving
          problems. Currently, I’m exploring Reactjs and a bit of Designing.
          While I am not programming, I enjoy playing basketball and to read
          about our great histories and learning from ancestors. Learning more
          to improve skill.
        </span>
        <button>MORE ABOUT ME</button>
      </div>
    </div>
  );
}

export default AboutMeHome;
