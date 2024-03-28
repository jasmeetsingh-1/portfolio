import React from "react";
import "./cssFiles/project.css";
import githubLogo from "../../../assets/mainIntro-logos/bxl-github.svg.svg";
import { Link } from "react-router-dom";

function Project({ props }) {
  return (
    <div className="project-holder-div">
      <div className="left-side-project-image">
        <img
          src={props.images}
          alt="project"
          style={{ borderRadius: "10px", width: "500px" }}
        />
      </div>
      <div className="right-project-details-holder">
        <h3>{props.title}</h3>
        <p>
          Teamed up with a designer to breathe life into a promotional webpage
          for our beloved show, Adventure Time. Delivered a fully responsive
          design with dynamic content capabilities, seamlessly integrating a
          newsletter feature to keep fans updated with the latest adventures.
        </p>
        <div className="project-details-section">
          <h6>PROJECT INFO</h6>{" "}
          <div className="more-info-div">
            <span>Year</span>
            <span>{props.projectInfoyear}</span>
          </div>
          <div className="more-info-div">
            <span>Role</span>
            <span>{props.projectInforole}</span>
          </div>
        </div>
        <div style={{ display: "flex", alignItems: "center" }}>
          <Link to={props.demoLink}>
            <button className="projects-button-holder">LIVE DEMO</button>
          </Link>
          <Link to={props.githubLink}>
            <button
              className="projects-button-holder"
              style={{ display: "flex", alignItems: "center" }}
            >
              SEE ON GITHUB{" "}
              <img src={githubLogo} alt="gitHub-logo" width="20px" />
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Project;
