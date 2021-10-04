import React, { useContext, useEffect, useRef, useState } from "react";
import { getData } from "../../hooks/usePokeAPI";
import { pokeContext } from "../../context/pokeContext";
import useDebounce from "../../hooks/useDebounce";
import { Toast } from "../../hooks/useToast";

const Input = () => {
  const [input, setInput] = useState("");
  const { pokemons, setPokemon } = useContext(pokeContext);

  const inputSearch = useRef(null);

  const debouncedSearchTerm = useDebounce(input, 1500);

  const handleChange = (event) => {
    setInput(event.target.value);
  };

  useEffect(() => {
    if (input) {
      getData(input).then((results) => {
        if (pokemons.some((pokemon) => pokemon.name === results.name)) {
          Toast.fire({
            icon: "info",
            title: "That pokemon is already on our list",
          });
        }

        if (
          results.length !== 0 &&
          !pokemons.some((pokemon) => pokemon.name === results.name)
        ) {
          setPokemon([...pokemons, results]);
          inputSearch.current.value = "";
          Toast.fire({
            icon: "success",
            title: `${input} has been added to list!`,
          });
          setInput("");
          inputSearch.current.focus();
        }
      });
    }
  }, [debouncedSearchTerm]);

  return (
    <>
      <section className="input">
        <form autoComplete="off">
          <input
            className="input-input"
            type="text"
            name="search"
            ref={inputSearch}
            onChange={handleChange}
          />
        </form>
      </section>
    </>
  );
};

export default Input;
