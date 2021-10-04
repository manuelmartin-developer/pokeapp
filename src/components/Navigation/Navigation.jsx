import React from "react";
import { Link } from "react-router-dom";

const Navigation = () => {
  return (

    <nav className="nav">
      <Link to="/"><img className="nav-logo" src="/assets/logo.png" alt="logo" /></Link>
      <ul className="nav-list">
        <li className="nav-list-element"><Link to="/">Home</Link></li>
        <li className="nav-list-element"><Link to="new">Make your pokemon</Link></li>
        <li className="nav-list-element"><Link to="/search">Catch one!</Link></li>
      </ul>

    </nav>
  );
};

export default Navigation;