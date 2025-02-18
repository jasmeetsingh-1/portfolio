import React from "react";
import "./about.css";
import gitHub from "../../assets/mainIntro-logos/bxl-github.svg.svg";
import backArrow from "../../assets/mainIntro-logos/arrow-right-top-svgrepo-com.svg";
import linkedIn from "../../assets/mainIntro-logos/bxl-linkedin.svg.svg";
// import aboutBg from "../../assets/about/bg.svg";
import resume from "../../assets/JasmeetSingh_cv.pdf";
import { Link } from "react-router-dom";
import ContactUs from "../home/componentsHome/contactUs";
import experienceData from "../experinceData";

const capibilties = [
  "REACTJs",
  "NodeJs",
  "Express Js",
  "Mongo DB",
  "MySQL",
  "CORE JAVA",
  "HTML",
  "CSS",
  "JAVASCRIPT",
  "BOOTSTRAP",
  "Data Str and Algorithms",
  "GITHUB",
  "FIGMA",
  "Salesforce - LWC"
];
function About() {
  return (
    <div className="about-page-holder">
      <div className="main-about-holder-div">
        <h4 className="heading-font-portfolio">ABOUT ME</h4>
        <div className="about-me-right-section">
          <h4>I’m a Full-Stack Developer Based in India, Driven by Tech and History</h4>
          <p>
              Hi, Jasmeet Singh here - a tech enthusiast and an avid reader with a keen interest in history. I love diving into the stories of the past, unraveling how events unfolded to shape the world we live in today. It’s fascinating to learn from those moments and use that knowledge to create something meaningful with technology.

              As a developer, My goal is to build solutions that not only solve problems but also contribute to a better, more thoughtful future
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
      <div className="capabilites-holder">
        <div className="main-about-holder-div">
          <h4 className="heading-font-portfolio">MY CAPABILITIES</h4>
          <div className="about-right-section">
            <p>
              Continuously expanding my skill set, I am currently immersed in
              mastering the following tech stack
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
          <h4 className="heading-font-portfolio">MY EXPERIENCE</h4>
          <div className="about-right-section">
            {experienceData.map((item) => {
              return (
                <div className="experience-item-holder">
                  <div className="item-header">
                    <span>{item.title}</span>
                    <div>
                      <span>
                        {item.startDate} - {item.endDate}
                      </span>
                      {item.secondDate ? <span className="experience-second-date">{item.secondDate}</span> : ""}
                    </div>
                  </div>
                  <span>
                    {item.company}{" "}
                    <span className="company-location">({item.location})</span>
                  </span>
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
