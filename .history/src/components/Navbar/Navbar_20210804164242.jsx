import React from "react";
import { Link } from "react-scroll";
// import { scrollToBottom } from 'react-scroll/modules/mixins/animate-scroll'
// import { scrollTo } from 'react-scroll/modules/mixins/scroller'

function Navbar() {
  return (
    <nav>
      <a href="/home" className="logo">
        <span>lg99</span>.dev
      </a>

      <input type="checkbox" className="menu-btn" id="menu-btn" />
      <label for="menu-btn" className="menu-icon">
        <span className="nav-icon"></span>
      </label>

      <ul className="menu">
        <li>
          <Link activeClass="active" to="header" spy="true" smooth="true">
            Home
          </Link>
        </li>
        <li>
          <Link activeClass="active" to="about" spy="true" smooth="true">
            About
          </Link>
        </li>
        <li>
          <Link activeClass="active" to="service" spy="true" smooth="true">
            Services
          </Link>
        </li>
        <li>
          <Link activeClass="active" to="contact" spy="true" smooth="true">
            Contact
          </Link>
        </li>
      </ul>
      {/* <a onClick={scrollToBottom} href="contact" className="Hey">Hey!</a> */}
    </nav>
  );
}

export default Navbar;
