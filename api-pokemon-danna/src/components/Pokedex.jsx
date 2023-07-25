import React from "react";
import Pagination from "./Pagination";
import Pokemon from "./Pokemon";

const Pokedex = (props) => {
  const { pokemons, pagina, setPagina, total, loading } = props;

  const lastPage = () => {
    const nextPage = Math.max(pagina - 1, 0);
    setPagina(nextPage);
  };

  const nextPage = () => {
    const nextPage = Math.min(pagina + 1, total - 1);
    setPagina(nextPage);
  };

  return (
    <div>
      <div className="header">
        <h1>Poke-API-Danna!</h1>
        <Pagination
          page={pagina + 1}
          totalPages={total}
          onLeftClick={lastPage}
          onRightClick={nextPage}
        />
      </div>
      {loading ? (
        <div>Cargando pokemones...</div>
      ) : (
        <div className="pokedex-grid">
          {pokemons.map((pokemon, id) => {
            return <Pokemon pokemon={pokemon} key={pokemon.name} />;
          })}
        </div>
      )}
    </div>
  );
};

export default Pokedex;
