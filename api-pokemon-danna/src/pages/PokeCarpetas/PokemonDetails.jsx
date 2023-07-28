import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Loader } from "../../components/loader/loader";
import { getPokemonByID, getEvolutionChain } from "../../api/api";

export const PokemonDetails = () => {
  const [loading, setLoading] = useState(true);
  const [pokemon, setPokemon] = useState({});
  const [evolutiondata, setevolutiondata] = useState({});

  const { id } = useParams();

  const fetchPokemon = async (id) => {
    const data = await getPokemonByID(id);
    setPokemon(data);
    setLoading(false);
  };

  useEffect(() => {
    fetchPokemon(id);
  }, []);

  const fetchPokemonE = async (id) => {
    const data = await getPokemonByID(id);
    const evolution = await getEvolutionChain(id);
    setevolutiondata(evolution);
    setPokemon(data);
    setLoading(false);

    console.log(evolution);
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
                  <span>{pokemon.height}</span>
                </div>
                <div className="group-info">
                  <p>Peso</p>
                  <span>{pokemon.weight}KG</span>
                </div>
                <div className="evolutions">
                  <p>Evolution</p>
                  <span>{pokemon.evolutions_chain}</span>
                </div>
              </div>
            </div>
          </div>
          <div className="container-stats">
            <h1>Estadísticas</h1>
            <div className="stats">
              <div className="stat-group">
                <span>Hp</span>
                <div className="progress-bar">
                  <div class="progress-bar-fill6"></div>
                </div>
                <span className="counter-stat">
                  {pokemon.stats[0].base_stat}
                </span>
              </div>
              <div className="stat-group">
                <span>Attack</span>
                <div className="progress-bar">
                  <div class="progress-bar-fill5"></div>
                </div>
                <span className="counter-stat">
                  {pokemon.stats[1].base_stat}
                </span>
              </div>
              <div className="stat-group">
                <span>Defense</span>
                <div className="progress-bar">
                  <div class="progress-bar-fill4"></div>
                </div>
                <span className="counter-stat">
                  {pokemon.stats[2].base_stat}
                </span>
              </div>
              <div className="stat-group">
                <span>Special Attack</span>
                <div className="progress-bar">
                  <div class="progress-bar-fill3"></div>
                </div>
                <span className="counter-stat">
                  {pokemon.stats[3].base_stat}
                </span>
              </div>
              <div className="stat-group">
                <span>Special Defense</span>
                <div className="progress-bar">
                  <div class="progress-bar-fill2"></div>
                </div>
                <span className="counter-stat">
                  {pokemon.stats[4].base_stat}
                </span>
              </div>
              <div className="stat-group">
                <span>Speed</span>
                <div className="progress-bar">
                  <div class="progress-bar-fill1"></div>
                </div>
                <span className="counter-stat">
                  {pokemon.stats[5].base_stat}
                </span>
              </div>
            </div>
          </div>
        </>
      )}
    </main>
  );
};
