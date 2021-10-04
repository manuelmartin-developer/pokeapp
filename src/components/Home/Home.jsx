import React from "react";
import PokemonList from "../PokemonList";

const Home = () => {
  return (
    <div className="home">
      <section className="home-pokemons">
        <PokemonList />
      </section>
    </div>
  )
};

export default Home;
