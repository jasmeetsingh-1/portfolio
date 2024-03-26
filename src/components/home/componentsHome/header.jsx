import React from "react";
import "./cssFiles/header.css";

function Header() {
  return (
    <div className="header-div-holder">
      <span className="name-header-holder heading-font-portfolio">
        {/* Jasmeet Singh */}
      </span>
      <nav className="navbar-header-holder">
        <ul>
          <li>Work</li>
          <li>About</li>
          <li>Contact</li>
        </ul>
      </nav>
    </div>
  );
}
export default Header;
