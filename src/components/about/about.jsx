import React from "react";
import "./about.css";
import gitHub from "../../assets/mainIntro-logos/bxl-github.svg.svg";
import backArrow from "../../assets/mainIntro-logos/arrow-right-top-svgrepo-com.svg";
import linkedIn from "../../assets/mainIntro-logos/bxl-linkedin.svg.svg";
// import aboutBg from "../../assets/about/bg.svg";
import resume from "../../assets/JasmeetSingh__CV.pdf";
import { Link } from "react-router-dom";
import ContactUs from "../home/componentsHome/contactUs";
import experienceData from "../experinceData";

const capibilties = [
  "REACT",
  "CORE JAVA",
  "HTML",
  "CSS",
  "JAVASCRIPT",
  "BOOTSTRAP",
  "DSA",
  "GITHUB",
  "FIGMA",
];
function About() {
  return (
    <div className="about-page-holder">
      <div className="main-about-holder-div">
        <h1 className="heading-font-portfolio">ABOUT ME</h1>
        <div className="about-me-right-section">
          <h4>I am a front-end developer based in Gurugram.</h4>
          <p>
            I am a front-end developer based in Sydney looking for exciting
            opportunities. Has Mechanical Engineering background. Likes to focus
            on accessibility when developing. Passionate and curious about
            solving problems. Currently, I’m exploring Reactjs, Webflow and a
            bit of Designing. While I am not programming, I enjoy playing
            football, photography and playing Valorant. Learning more to improve
            skill
          </p>
          <div className="right-section-button-holder">
            <a
              href={resume}
              download="Jasmeetsingh_cv"
              style={{ textDecoration: "none" }}
            >
              <button className="contact-me-main-intro-button">
                DOWNLOAD RESUME{" "}
                <img src={backArrow} alt="back-arrow" width="25px" />
              </button>
            </a>
            <div>
              <img src={linkedIn} alt="linkedIN" />
            </div>
            <div>
              <Link to="https://github.com/jasmeetsingh-1">
                <img src={gitHub} alt="github" />
              </Link>
            </div>
          </div>
        </div>
      </div>
      {/* <img src={aboutBg} alt="aboutbg" width="700px" /> */}
      {/* capabilites holder */}
      <div className="capabilites-holder">
        <div className="main-about-holder-div">
          <h4 className="heading-font-portfolio">MY CAPABILITIES</h4>
          <div className="about-right-section">
            <p>
              I am always looking to add more skills.Morbi egestas neque eu
              blandit fermentum. Nulla ac lobortis ligula. Pellentesque ac ex at
              purus faucibus tristique ut et dolor.
            </p>
            <div className="capabilites-list-holder">
              {capibilties.map((item) => {
                return (
                  <div className="captibilty-holder">
                    <span>{item}</span>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
      <div className="experience-holder">
        <div className="main-about-holder-div">
          <h4 className="heading-font-portfolio">My EXPERIENCE</h4>
          <div className="about-right-section">
            {experienceData.map((item) => {
              return (
                <div className="experience-item-holder">
                  <div className="item-header">
                    <span>{item.title}</span>
                    <span>
                      {item.startDate} - {item.endDate}
                    </span>
                  </div>
                  <span>{item.company}</span>
                  <ul>
                    {item.description.map((item) => {
                      return <li>{item}</li>;
                    })}
                  </ul>
                </div>
              );
            })}
          </div>
        </div>
      </div>
      <ContactUs />
    </div>
  );
}

export default About;
