import axios from "axios";
import React, { useEffect, useRef, useState } from "react";
import ReactiveButton from "reactive-button";
import Card from "../Card";

const Input = () => {
  const [input, setInput] = useState("");
  const [pokemon, setPokemon] = useState({});
  const [loading, setLoading] = useState(false);

  const inputSearch = useRef(null);

  const handleChange = (event) => {
    setInput(event.target.value);
  };
  const handleSubmit = (event) => {
    event.preventDefault();
  };

  const getData = () => {
    (async () => {
      try {
        if (input !== "") {
          setLoading(true)
          const resp = await axios.get(
            "https://pokeapi.co/api/v2/pokemon/" + input.toLocaleLowerCase()
          );
          setPokemon(resp.data);
        }
      } catch (error) {
        setPokemon({ error });
      }
    })();
    
  };

  useEffect(() => {
    inputSearch.current.value = "";
    return () => {
      setTimeout(() => {
        setLoading(false) 
      }, 400);
    }
  }, [pokemon]);

  return (
    <>
      <section className="input">
        <form onSubmit={handleSubmit} autoComplete="off">
          <input
            className="input-input"
            type="text"
            name="search"
            ref={inputSearch}
            onChange={handleChange}
          />

          <ReactiveButton shadow
            color="yellow"
            size="tiny"
            buttonState={loading ? 'loading' : 'idle'}
            idleText={'Search'}
            loadingText={'Loading'}
            onClick={getData}
          />
        </form>
      </section>
        <Card data={pokemon} />
    </>
  );
};

export default Input;
