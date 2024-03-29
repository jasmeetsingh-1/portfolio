import React from "react";
import "./cssFiles/header.css";

function Header() {
  return (
    <div className="header-div-holder">
      <nav className="navbar-header-holder">
        <ul>
          <li>Home</li>
          <li>About</li>
        </ul>
      </nav>
    </div>
  );
}
export default Header;
