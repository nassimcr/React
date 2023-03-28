import React from "react";

function PokemonCard(props) {
  const pokemon = props.pokemon;
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

export default PokemonCard;
