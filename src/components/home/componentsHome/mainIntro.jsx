import React from "react";
import "./cssFiles/mainIntro.css";
import linkedIn from "../../../assets/mainIntro-logos/bxl-linkedin.svg.svg";
import gitHub from "../../../assets/mainIntro-logos/bxl-github.svg.svg";
import image from "../../../assets/image.svg";
import backArrow from "../../../assets/mainIntro-logos/arrow-right-top-svgrepo-com.svg";
import Project from "./project";
import AboutMeHome from "./aboutMeHome";
import Technologies from "./technologies";
import ContactUs from "./contactUs";
import { Link } from "react-router-dom";
import projectsData from "../../projectsData";
import { TypeAnimation } from "react-type-animation";

function MainIntro() {
  return (
    <div className="main-intro-holder-div">
      <div className="main-intro-content-holder">
        <div className="left-content-holder">
          <h1 className="heading-font-portfolio">
            HI, I AM <br />
            <TypeAnimation
              sequence={["JASMEET SINGH.", 1000]}
              speed={30}
              style={{ fontSize: "4rem" }}
              repeat={Infinity}
            />
          </h1>
          <span>
            A Delhi-based front-end developer dedicated to crafting accessible
            and user-friendly websites.
          </span>
          <div className="left-content-buttons-holder">
            <button className="contact-me-main-intro-button">
              CONTACT ME <img src={backArrow} alt="back-arrow" width="25px" />
            </button>
            <div>
              <img src={linkedIn} alt="linkedIN" />
            </div>
            <div>
              <Link
                to="https://github.com/jasmeetsingh-1"
                style={{ display: "flex" }}
              >
                <img src={gitHub} alt="github" />
              </Link>
            </div>
          </div>
        </div>
        <div className="right-image-holder">
          <img
            src={image}
            alt="mainIntro"
            width="325px"
            style={{ borderRadius: "10px" }}
          />
        </div>
      </div>
      <Technologies />
      <div className="projects-holder-div">
        <h1 className="heading-font-portfolio">FEATURED PROJECTS</h1>
        <span>
          Below are a few handpicked projects that demonstrate my fervor for
          front-end development:
        </span>
        {projectsData.map((item) => {
          return <Project props={item} />;
        })}
      </div>
      <AboutMeHome />
      <ContactUs />
    </div>
  );
}

export default MainIntro;
