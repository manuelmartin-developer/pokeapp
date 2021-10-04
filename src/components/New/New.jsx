import React, { useContext } from "react";
import { useForm } from "react-hook-form";
import { pokeContext } from "../../context/pokeContext";
import { Toast } from "../../hooks/useToast";

const New = () => {
  
  const { pokemons, setPokemon } = useContext(pokeContext);
  const { register, handleSubmit } = useForm();


  const onSubmit = (data, e) => {
    if(data && pokemons.some((pokemon) => pokemon.name === data.name)){

      Toast.fire({
        icon: "info",
        title: "That pokemon is already on our list",
      });

    }else{

      setPokemon([...pokemons, data]);
      e.target.reset()
      Toast.fire({
        icon: "success",
        title: "New pokemon has been added to list!",
      });
    }
  }

  return (
    <section className="new">
      <form className="new-form" onSubmit={handleSubmit(onSubmit)} autoComplete="off">
      <label htmlFor="id">Id</label>
      <input type="number" {...register("id", { required: true })} />
      <label htmlFor="name">Name</label>
      <input {...register("name", { required: true, minLength: 3 })} />
      <label htmlFor="url">Url</label>
      <input type="url" {...register("url", { required: true })} />
      <label htmlFor="typeone">Types</label>
      <select {...register("typeone", { required: true })}>
        <option></option>
        <option value="bug">Bug</option>
        <option value="dark">Dark</option>
        <option value="dragon">Dragon</option>
        <option value="electric">Electric</option>
        <option value="fairy">Fairy</option>
        <option value="fighting">Fighting</option>
        <option value="fire">Fire</option>
        <option value="flying">Flying</option>
        <option value="gosht">Gosht</option>
        <option value="grass">Grass</option>
        <option value="ground">Ground</option>
        <option value="ice">Ice</option>
        <option value="normal">Normal</option>
        <option value="poison">Poison</option>
        <option value="psychic">Psychic</option>
        <option value="rock">Rock</option>
        <option value="steel">Steel</option>
        <option value="water">Water</option>
      </select>
      <select {...register("typetwo")}>
      <option></option>
      <option value="bug">Bug</option>
        <option value="dark">Dark</option>
        <option value="dragon">Dragon</option>
        <option value="electric">Electric</option>
        <option value="fairy">Fairy</option>
        <option value="fighting">Fighting</option>
        <option value="fire">Fire</option>
        <option value="flying">Flying</option>
        <option value="gosht">Gosht</option>
        <option value="grass">Grass</option>
        <option value="ground">Ground</option>
        <option value="ice">Ice</option>
        <option value="normal">Normal</option>
        <option value="poison">Poison</option>
        <option value="psychic">Psychic</option>
        <option value="rock">Rock</option>
        <option value="steel">Steel</option>
        <option value="water">Water</option>
      </select>
      <input type="submit" />
    </form>
    </section>
  );
};

export default New;
