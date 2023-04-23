import React, { useState } from "react";
import "./Nav.scss";

export const Nav = () => {
  const [showMenu, setShowMenu] = useState(false);

  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };

  return (
    <header>
      <div className="menu">
      <nav className="large-screen">
          <ul>
            <li style={{ marginRight: "10rem" }}>
              <a href="#about">Nikita Kharya</a>
            </li>
            <li>
              <a href="#skills">Skills</a>
            </li>
            <li>
              <a href="#experience">Experience</a>
            </li>
            <li>
              <a href="#personal">Personal</a>
            </li>
            <li>
              <a href="#contacts">Contact</a>
            </li>
          </ul>
        </nav>
        <nav className="small-screen">
          <div className="logo">
            <a href="#about">Nikita Kharya</a>
          </div>
          <div className={`menu-icon ${showMenu ? "show" : ""}`} onClick={toggleMenu}>
            <span></span>
            <span></span>
            <span></span>
            <span className={showMenu ? "show" : "hide"}></span>
          </div>
          <ul className={`menu-items ${showMenu ? "show" : ""}`}>
            <li>
              <a href="#skills" onClick={toggleMenu}>
                Skills
              </a>
            </li>
            <li>
              <a href="#experience" onClick={toggleMenu}>
                Experience
              </a>
            </li>
            <li>
              <a href="#personal" onClick={toggleMenu}>
                Personal
              </a>
            </li>
            <li>
              <a href="#contacts" onClick={toggleMenu}>
                Contact
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};
