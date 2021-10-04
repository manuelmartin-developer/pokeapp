import React from "react";
import Navigation from "../Navigation/Navigation";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header className="header">
      <Link to="/">
        <img className="header-logo" src="/assets/logo.png" alt="logo" />
      </Link>
      <Navigation />      
    </header>
  )
};

export default Header;
