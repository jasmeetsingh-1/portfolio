import React from "react";
import "./cssFiles/project.css";
import projectImage from "../../../assets/work.svg";
import githubLogo from "../../../assets/mainIntro-logos/bxl-github.svg.svg";

function Project() {
  return (
    <div className="project-holder-div">
      <div className="left-side-project-image">
        <img src={projectImage} alt="project" />
      </div>
      <div className="right-project-details-holder">
        <h3>Promotional landing page for our favourite show</h3>
        <p>
          Teamed up with a designer to breathe life into a promotional webpage
          for our beloved show, Adventure Time. Delivered a fully responsive
          design with dynamic content capabilities, seamlessly integrating a
          newsletter feature to keep fans updated with the latest adventures.
        </p>
        <div className="project-details-section">
          <h6>PROJECT INFO</h6>
          <div className="more-info-div">
            <span>Year</span>
            <span>2023</span>
          </div>
          <div className="more-info-div">
            <span>Role</span>
            <span>Front-end Developer</span>
          </div>
        </div>
        <div className="projects-button-holder">
          <button>LIVE DEMO</button>
          <button style={{ display: "flex", alignItems: "center" }}>
            SEE ON GITHUB{" "}
            <img src={githubLogo} alt="gitHub-logo" width="20px" />
          </button>
        </div>
      </div>
    </div>
  );
}

export default Project;
