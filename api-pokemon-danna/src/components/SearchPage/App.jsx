import React from "react";
import "../../styles.css";
import Navbar from "../../components/Nadvar/Nadvar";
import Searchbar from "../../components/SearchPokemon/Searchbar";
import Pokedex from "../PokeCarpetas/Pokedex";
import { getPokemonData, getPokemons, searchPokemon } from "../../api/api";
import Swal from "sweetalert2";

const { useState, useEffect } = React;

export default function App() {
  const [pokemons, setPokemons] = useState([]);
  const [pagina, setPagina] = useState(0);
  const [total, setTotal] = useState(0);
  const [loading, setLoading] = useState(true);
  const [notFound, setNotFound] = useState(false);
  const [searching, setSearching] = useState(false);

  const fetchPokemons = async () => {
    try {
      setLoading(true);
      const data = await getPokemons(20, 20 * pagina);
      const promises = data.results.map(async (pokemon) => {
        return await getPokemonData(pokemon.url);
      });
      const results = await Promise.all(promises);
      setPokemons(results);
      setLoading(false);
      setTotal(Math.ceil(data.count / 20));
      setNotFound(false);
    } catch (err) {}
  };

  useEffect(() => {
    if (!searching) {
      fetchPokemons();
    }
  }, [pagina]);

  const onSearch = async (pokemon) => {
    if (!pokemon) {
      return fetchPokemons();
    }
    setLoading(true);
    setNotFound(false);
    setSearching(true);
    const result = await searchPokemon(pokemon);
    if (!result) {
      setNotFound(true);
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "Pokemon no encontrado! Por favor verifique e intente de nuevo!",
      });
      setLoading(false);
      return;
    } else {
      setPokemons([result]);
      setPagina(0);
      setTotal(1);
    }
    setLoading(false);
    setSearching(false);
  };

  return (
    <div>
      <Navbar />
      <div className="App">
        <Searchbar onSearch={onSearch} />
        {notFound ? (
          <div className="not-found-text">
            No se encontro el Pokemon que buscabas 😭
          </div>
        ) : (
          <Pokedex
            loading={loading}
            pokemons={pokemons}
            pagina={pagina}
            setPagina={setPagina}
            total={total}
          />
        )}
      </div>
    </div>
  );
}
