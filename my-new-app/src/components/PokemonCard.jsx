import React from "react";

function PokemonCard() {
  const pokemon = pokemonList[1];
  let imageElement = null;
  if (pokemon.imgSrc) {
    imageElement = <img src={pokemon.imgSrc} alt={pokemon.name} />;
  } else {
    imageElement = <p>???</p>;
  }
  return (
    <figure>
      {imageElement}
      <figcaption>{pokemon.name}</figcaption>
    </figure>
  );
}

const pokemonList = [
  {
    name: "bulbasaur",
    imgSrc:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/1.png",
  },
  {
    name: "mew",
  },
];

export default PokemonCard;
