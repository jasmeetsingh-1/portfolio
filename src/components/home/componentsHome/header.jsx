import React from "react";
import "./cssFiles/header.css";

function Header() {
  return (
    <div className="header-div-holder">
      <nav className="navbar-header-holder">
        <ul>
          <li>About</li>
          <li>Contact</li>
        </ul>
      </nav>
    </div>
  );
}
export default Header;
