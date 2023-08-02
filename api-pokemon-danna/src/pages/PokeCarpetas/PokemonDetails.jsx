import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Loader } from "../../components/loader/loader";
import { getPokemonByID, getEvolutionChain } from "../../api/api";
import { Pokemon } from "../../components/Pokemon/Pokemon";
import { Link } from "react-router-dom";

export const PokemonDetails = () => {
  const [loading, setLoading] = useState(true);
  const [pokemon, setPokemon] = useState({});
  const [evolutiondata, setevolutiondata] = useState([]);

  const { id } = useParams();

  const getIdFromUrl = (url) => {
    const splitUrl = url.split("/");
    return splitUrl[splitUrl.length - 2];
  };

  const getEvolutions = ({ species = {}, evolves_to = [] }) => {
    const data = { name: species.name, id: getIdFromUrl(species.url) };
    if (evolves_to.length) {
      return [data, ...getEvolutions(evolves_to[0])];
    } else {
      return [data];
    }
  };

  const fetchPokemonE = async (id) => {
    const data = await getPokemonByID(id);
    const evolution = await getEvolutionChain(id);
    const evolutionlist = getEvolutions(evolution.chain);
    const promises = evolutionlist.map(async (pokemon) => {
      return await getPokemonByID(pokemon.id);
    });
    const results = await Promise.all(promises);
    setevolutiondata(results);
    setPokemon(data);
    setLoading(false);
    console.log(results);
  };

  useEffect(() => {
    fetchPokemonE(id);
  }, []);

  return (
    <main className="container main-pokemon">
      {loading ? (
        <Loader />
      ) : (
        <>
          <div className="header-main-pokemon">
            <div className="name-pokemon">{pokemon.name}</div>
            <span className="number-pokemon">#{pokemon.id}</span>
            <div className="container-img-pokemon">
              <img
                src={pokemon.sprites.other.dream_world.front_default}
                alt={`Pokemon ${pokemon?.name}`}
              />
            </div>
            <div className="container-info-pokemon">
              <div className="card-types info-pokemon-type">
                {pokemon.types.map((type) => (
                  <span key={type.type.name} className={`${type.type.name}`}>
                    {type.type.name}
                  </span>
                ))}
              </div>
              <div className="info-pokemon">
                <div className="group-info">
                  <p>Altura</p>
                  <span>{pokemon.height}CM</span>
                </div>
                <div className="group-info">
                  <p>Peso</p>
                  <span>{pokemon.weight}KG</span>
                </div>
              </div>
            </div>
          </div>
          <div className="container-stats">
            <h1 className="txtEstadistic">Estadísticas</h1>
            <div className="stats">
              <div className="stat-group">
                <span>Hp</span>
                <div className="progress-bar">
                  <div className="progress-bar-fill"></div>
                </div>
                <span className="counter-stat">
                  {pokemon.stats[0].base_stat}
                </span>
              </div>
              <div className="stat-group">
                <span>Attack</span>
                <div className="progress-bar">
                  <div className="progress-bar-fill"></div>
                </div>
                <span className="counter-stat">
                  {pokemon.stats[1].base_stat}
                </span>
              </div>
              <div className="stat-group">
                <span>Defense</span>
                <div className="progress-bar">
                  <div className="progress-bar-fill"></div>
                </div>
                <span className="counter-stat">
                  {pokemon.stats[2].base_stat}
                </span>
              </div>
              <div className="stat-group">
                <span>Special Attack</span>
                <div className="progress-bar">
                  <div className="progress-bar-fill"></div>
                </div>
                <span className="counter-stat">
                  {pokemon.stats[3].base_stat}
                </span>
              </div>
              <div className="stat-group">
                <span>Special Defense</span>
                <div className="progress-bar">
                  <div className="progress-bar-fill"></div>
                </div>
                <span className="counter-stat">
                  {pokemon.stats[4].base_stat}
                </span>
              </div>
              <div className="stat-group">
                <span>Speed</span>
                <div className="progress-bar">
                  <div className="progress-bar-fill"></div>
                </div>
                <span className="counter-stat">
                  {pokemon.stats[5].base_stat}
                </span>
              </div>
            </div>
          </div>
          <div className="evolutions">
            <p className="txtEvo">Evolution</p>
            <Link to={`/${pokemon.id}`} className="card-pokemon-evolution">
              {console.log(`/${pokemon.id}`)}
              <div className="evolition-grid">
                {evolutiondata?.map((pokemon) => {
                  return <Pokemon pokemon={pokemon} key={pokemon.name} />;
                })}
              </div>
            </Link>
          </div>
        </>
      )}
    </main>
  );
};
