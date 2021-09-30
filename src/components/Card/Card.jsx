import React from "react";


const Card = (props) => {


    const pokemon = props.data;
      return (
        <section className="card">
          <article className="card-title">
            <p className="card-title-title">{pokemon ? pokemon.name : ""}</p>
            <p id="id">#{pokemon ? pokemon.id : ""}</p>
          </article>
          <section className="card-info">
            <article className="card-stats">
              <p className="card-stats-label"><span className="card-stats-data">stats</span> {pokemon.stats ? pokemon.stats[0].base_stat : ""}</p>
              <p className="card-stats-label"><span className="card-stats-data">type</span> {pokemon.types ? pokemon.types[0].type.name : ""}</p>
              <p className="card-stats-label"><span className="card-stats-data">weight</span> {pokemon ? pokemon.weight : ""}</p>
              <p className="card-stats-label"><span className="card-stats-data">height</span> {pokemon ? pokemon.height : ""}</p>
            </article>
            <article className="card-image">
              {pokemon.sprites ? (
                <img id="image"
                  src={pokemon.sprites.other["official-artwork"]["front_default"]}
                  alt={pokemon.name}
                />
              ) : (
                ""
              )}
            </article>
          </section>
          <article className="card-abilities">
            {pokemon.abilities
              ? pokemon.abilities.map((ability, index) => (
                  <p key={index}>{ability.name}</p>
                ))
              : ""}
          </article>
        </section>
      );

}

export default Card

