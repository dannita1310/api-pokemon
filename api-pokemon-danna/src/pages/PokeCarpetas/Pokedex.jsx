import React from "react";
import Pagination from "../../components/Pagination/Pagination";
import { Pokemon } from "../../components/Pokemon/Pokemon";

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
      {loading ? (
        <div>Cargando pokemones...</div>
      ) : (
        <div className="pokedex-grid">
          {pokemons.map((pokemon, id) => {
            return <Pokemon pokemon={pokemon} key={pokemon.name} />;
          })}
          <div className="header">
            <Pagination
              pagina={pagina + 1}
              totalPages={total}
              onLeftClick={lastPage}
              onRightClick={nextPage}
            />
          </div>
        </div>
      )}
    </div>
  );
};

export default Pokedex;
