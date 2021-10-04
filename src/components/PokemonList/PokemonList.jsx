import React, { useContext } from "react";
import Card from '../Card'
import { pokeContext } from "../../context/pokeContext";


const PokemonList = () => {

  const { pokemons } = useContext(pokeContext);


  const paintPokemon = () => {
    return pokemons.map ((pokemon, index) => <Card key={index} data={pokemon} />)
  }

  if(pokemons.length === 0){
    return(
        <section>
          <img className="gif" src="/assets/poke.gif" alt="" />
          <h1>No pokemons around...try to catch one!</h1>
        </section>
    )
  }else {
    return (
      paintPokemon()
    )
  }
  
};

export default PokemonList;
