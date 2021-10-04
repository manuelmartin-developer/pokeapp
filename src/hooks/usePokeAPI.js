import axios from "axios";
import { Toast } from "./useToast";

export const getData = (searchInput) => {
    return axios
      .get(
        "https://pokeapi.co/api/v2/pokemon/" + searchInput.toLocaleLowerCase()
      )
      .then(response => response.data)
      .catch(error => {
        Toast.fire({
          icon: "info",
          title: "There is no pokemon with that name",
        });
        console.log(error);
        return[];
      });
  };