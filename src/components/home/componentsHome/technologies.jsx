import React from "react";
import "./cssFiles/technologies.css";

import java from "../../../assets/tech_stack/java-icon.svg";
import html from "../../../assets/tech_stack/html_logo.svg";
import css from "../../../assets/tech_stack/css_logo.svg";
import js from "../../../assets/tech_stack/js_logo.svg";
import bootstrap from "../../../assets/tech_stack/logos_bootstrap.svg";
import git from "../../../assets/tech_stack/logos_git-icon.svg";
import reactLogo from "../../../assets/tech_stack/react_logo.svg";
import nodejs from "../../../assets/tech_stack/nodejs.svg";
import expressjs from "../../../assets/tech_stack/expressjs.svg";
import mongodb from "../../../assets/tech_stack/mongodb.svg";

function Technologies() {
  return (
    <div className="technologies-div-holder">
      <h1 className="heading-font-portfolio">MY TECH STACK</h1>
      <span>Recent Technologies I've been engaged with: </span>
      <div className="tech-logos-holder">
        <img src={reactLogo} alt="ReactJs" width="100px" />
        <img src={nodejs} alt="NodeJs" width="100px" />
        <img src={expressjs} alt="ExpressJs" width="100px" />
        <img src={mongodb} alt="mongoDB" width="90px" />
      </div>
      <div className="tech-logos-holder">
        <img src={html} alt="html" width="100px" />
        <img src={css} alt="CSS" width="100px" />
        <img src={js} alt="JavaScript" width="100px" />
        <img src={java} alt="java" width="100px" />
        <img src={bootstrap} alt="Bootstrap" width="100px" />
        <img src={git} alt="Git" width="100px" />
      </div>
    </div>
  );
}

export default Technologies;
