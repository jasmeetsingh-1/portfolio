import React from "react";
import Header from "./header";
import "./cssFiles/mainIntro.css";
import linkedIn from "../../../assets/mainIntro-logos/bxl-linkedin.svg.svg";
import gitHub from "../../../assets/mainIntro-logos/bxl-github.svg.svg";
import image from "../../../assets/image.svg";
import backArrow from "../../../assets/mainIntro-logos/arrow-right-top-svgrepo-com.svg";
import Project from "./project";

function MainIntro() {
  return (
    <div className="main-intro-holder-div">
      <Header />
      <div className="main-intro-content-holder">
        <div className="left-content-holder">
          <h1 className="heading-font-portfolio">
            HI, I AM <br /> JASMEET SINGH.
          </h1>
          <span>
            A Sydney based front-end developer passionate about building
            accessible and user friendly websites.
          </span>
          <div className="left-content-buttons-holder">
            <button className="contact-me-main-intro-button">
              CONTACT ME <img src={backArrow} alt="back-arrow" width="25px" />
            </button>
            <div>
              <img src={linkedIn} alt="linkedIN" />
            </div>
            <div>
              <img src={gitHub} alt="github" />
            </div>
          </div>
        </div>
        <div className="right-image-holder">
          <img src={image} alt="image-mainIntro" width="325px" />
        </div>
      </div>
      <div className="projects-holder-div">
        <h1 className="heading-font-portfolio">FEATURED PROJECTS</h1>
        <span>
          Here are some of the selected projects that showcase my passion <br />
          for front-end development.
        </span>
        <Project />
      </div>
    </div>
  );
}

export default MainIntro;
