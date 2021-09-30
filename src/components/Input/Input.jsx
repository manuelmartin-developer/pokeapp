import React, { useContext, useEffect, useRef, useState } from "react";
import ReactiveButton from "reactive-button";
import PokemonList from "../PokemonList";
import axios from "axios";
import Swal from 'sweetalert2';
import { pokeContext } from '../../context/pokeContext';

const Input = () => {
  const [input, setInput] = useState("");
  // const [pokemons, setPokemon] = useState([]);
  const [loading, setLoading] = useState(false);
  const { pokemons, setPokemon } = useContext(pokeContext);

  const inputSearch = useRef(null);

  const handleChange = (event) => {
    setInput(event.target.value);
  };
  const handleSubmit = (event) => {
    event.preventDefault();
  };
  const Toast = Swal.mixin({
    toast: true,
    position: 'bottom-end',
    showConfirmButton: false,
    timer: 2000,
    timerProgressBar: true,
  })

  const getData = () => {
    (async () => {
      try {
        if (input !== "") {
          setLoading(true)
          const resp = await axios.get(
            "https://pokeapi.co/api/v2/pokemon/" + input.toLocaleLowerCase()
          );
          setPokemon([...pokemons, resp.data]);
        }
      } catch (error) {
        setLoading(false);
        Toast.fire({
          icon: 'info',
          title: 'There is no pokemon with that name'
        })
      }
    })();
    
  };

  useEffect(() => {
    inputSearch.current.value = "";
    setInput('');
    inputSearch.current.focus();
  
    return () => {
      setTimeout(() => {
        setLoading(false) 
      }, 400);
    }
  }, [pokemons]);

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
      <section className="pokemons">
          <PokemonList />
      </section>
    </>
  );
};

export default Input;
