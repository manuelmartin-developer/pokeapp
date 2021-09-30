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
        <div>
          <img className="gif" src="poke.gif" alt="" />
        </div>
    )
  }else {
    return (
      paintPokemon()
    )
  }
  
};

export default PokemonList;
