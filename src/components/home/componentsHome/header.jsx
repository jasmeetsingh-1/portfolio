import React from "react";
import "./cssFiles/header.css";

function Header({ setPageNavigate }) {
  return (
    <div className="header-div-holder">
      <nav className="navbar-header-holder">
        <ul>
          <li
            onClick={() => {
              setPageNavigate(true);
            }}
          >
            Home
          </li>
          <li
            onClick={() => {
              setPageNavigate(false);
            }}
          >
            About
          </li>
        </ul>
      </nav>
    </div>
  );
}
export default Header;
