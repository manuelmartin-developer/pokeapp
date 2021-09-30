import React from "react";
import { Link } from "react-router-dom";

const Nav = () => {
  return (
    <nav className="nav">
      <ul className="nav-list">
        <li className="nav-list-element"><Link to="/">Home</Link></li>
      </ul>
    </nav>
  )
};

export default Nav;
