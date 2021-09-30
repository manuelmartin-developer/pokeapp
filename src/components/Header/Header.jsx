import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header className="header">
      {/* <Nav /> */}
      <Link to="/"><img className="header-image" src='logo.png' alt="logo" /></Link>
      
    </header>
  )
};

export default Header;
