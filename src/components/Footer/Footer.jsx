import React, { useContext } from "react";
import { pokeContext } from "../../context/pokeContext";


const Footer = () => {

  const { pokemons } = useContext(pokeContext);

  return (
  <div className="footer">
    {pokemons.map((pokemon, index) => <img key={index} className="footer-img" src="assets/favicon.ico" alt="pokeball"></img>)}
  </div>);
};

export default Footer;
