export const searchPokemon = async (pokemon) => {
  try {
    let url = `https://pokeapi.co/api/v2/pokemon/${pokemon}`;
    const response = await fetch(url);
    const data = await response.json();
    return data;
  } catch (err) {}
};

export const getPokemons = async (limit = 20, offset = 0) => {
  try {
    let url = `https://pokeapi.co/api/v2/pokemon?limit=${limit}&offset=${offset}`;
    const response = await fetch(url);
    const data = await response.json();
    return data;
  } catch (err) {}
};

export const getPokemonData = async (url) => {
  console.log(url);
  try {
    const response = await fetch(url);
    const data = await response.json();
    return data;
  } catch (err) {}
};

export const getPokemonByID = async (id) => {
  const baseURL = "https://pokeapi.co/api/v2/";

  const res = await fetch(`${baseURL}pokemon/${id}`);
  const data = await res.json();
  return data;
};

export const getEvolutionChain = async (pokemon) => {
  try {
    const pokemonData = await searchPokemon(pokemon);
    const SpeciesUrl = pokemonData.species.url;

    const specieresponse = await fetch(SpeciesUrl);
    const speciedata = await specieresponse.json();

    const evolutionchainresponse = await fetch(speciedata.evolution_chain.url);
    const evolutiondata = await evolutionchainresponse.json();
    return evolutiondata;
  } catch (err) {
    console.error("Error al obtener la cadena de evolución:", err);
  }
};
