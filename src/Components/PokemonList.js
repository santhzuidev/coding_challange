import React from 'react';

export function PokemonList({ pokemon }) {
  return (
    <div className="pokemon">
      <div className="pokemonHPCP">
        <span>maxhp:{pokemon.maxHP}</span>
        <span>maxcp:{pokemon.maxCP}</span>
      </div>
      <div className="pokemonImage">
        <img src={pokemon.image} alt={pokemon.name} />
      </div>
      <div className="pokemonAttacks">
        {pokemon &&
          pokemon.attacks &&
          pokemon.attacks.special
            .map(attack => (
              <span key={`${attack.name}-${attack.damage}`}>
                {attack.name}
              </span>
            ))}
      </div>
      <div className="pokemonName">
        <p>{pokemon.name}</p>
      </div>
    </div>
  )
}