import React from "react";
import java from "../../../assets/tech_stack/java-icon.svg";
import html from "../../../assets/tech_stack/html_logo.svg";
import css from "../../../assets/tech_stack/css_logo.svg";
import js from "../../../assets/tech_stack/js_logo.svg";
import bootstrap from "../../../assets/tech_stack/logos_bootstrap.svg";
import git from "../../../assets/tech_stack/logos_git-icon.svg";
import vsCode from "../../../assets/tech_stack/vscode-icons_file-type-vscode.svg";
import reactLogo from "../../../assets/tech_stack/react_logo.svg";
import "./cssFiles/technologies.css";

function Technologies() {
  return (
    <div className="technologies-div-holder">
      <h1 className="heading-font-portfolio">MY TECH STACK</h1>
      <span>Technologies I’ve been working with recently</span>
      <div className="tech-logos-holder">
        <img src={reactLogo} alt="React" />
        <img src={html} alt="html" />
        <img src={css} alt="CSS" />
        <img src={js} alt="JavaScript" />
        <img src={java} alt="java" />
      </div>
      <div className="tech-logos-holder">
        <img src={bootstrap} alt="Bootstrap" />
        <img src={git} alt="Git" />
        <img src={vsCode} alt="Visual Studio Code" />
      </div>
    </div>
  );
}

export default Technologies;
