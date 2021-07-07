import React, { useState } from "react";
import Radium, { StyleRoot } from "radium";
import { GiHamburgerMenu } from "react-icons/gi";
import "../App.css";
import { Link } from "react-router-dom";
const Nav = () => {
  const [showMediaIcons, setShowMediaIcons] = useState(false);
  return (
    <nav className="main-nav">
      {/* 1st Heading*/}
      <div className="logo">
        <span className="heart">
          <ion-icon name="heart-outline" className="heart1"></ion-icon>
          <span>ReadyLead</span>
        </span>
      </div>
      <div
        className={showMediaIcons ? "menu-link mobile-menu-link" : "menu-link"}
      >
        <ul className="nav-links">
          <Link to="/home">
            <li>Home</li>
          </Link>
          <Link to="/contactus">
            <li>Contact Us</li>
          </Link>
          <Link to="/loginhere">
            <li>Login Here</li>
          </Link>
        </ul>
      </div>
      {/* hamburget menu start  */}
      <div className="hamburger-menu">
        <a href="#" onClick={() => setShowMediaIcons(!showMediaIcons)}>
          <GiHamburgerMenu />
        </a>
      </div>
    </nav>
  );
};
export default Nav;
