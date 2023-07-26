import React from "react";
import { PokemonContext } from "../context/PokemonContext";
import { useLocation } from "react-router-dom";
import { useContext } from "react";
import Pokemon from "./Pokemon";

const { useState } = React;

const Searchbar = (props) => {
  const { onSearch } = props;
  const [search, setSearch] = useState("");

  const onChange = (e) => {
    setSearch(e.target.value.toLowerCase().trim());
    if (e.target.value.length === 0) {
      onSearch(null);
    }
  };

  const onClick = async (e) => {
    onSearch(search);
  };

  // const PaginaBusqueda = () => {
  //   const location = useLocation();

  //   const { globalPokemons } = useContext(PokemonContext);

  //   const filteredPokemons = globalPokemons.filter((Pokemon) =>
  //     Pokemon.name.includes(location.state.toLowerCase())
  //     );
 

  return (
    <div className="searchbar-container">
      <div className="searchbar">
        <input placeholder="Buscar pokemon..." onChange={onChange} />
      </div>
      {/* <p className="p-search">
        Se encontraron <span>{filteredPokemons.length}</span> resultados:
      </p> */}
      <div className="searchbar-btn">
        <button onClick={onClick}>Buscar</button>
      </div>
      {/* <div className="card-list-pokemon container">
        {filteredPokemons.map((pokemon) => (
          <Pokemon pokemon={pokemon} key={pokemon.id} />
        ))} */}
      {/* </div> */}
    </div>
    
  );
};
// };

export default Searchbar;
