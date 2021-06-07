import React from 'react';
import { useQuery } from '@apollo/react-hooks';
import {GET_POKEMON_DATA} from '../Graphql/pokemon';
import {PokemonList} from '../Components/PokemonList';

export function PokemonContainer(){

    const { data:{ pokemons = []} = {} } = useQuery(GET_POKEMON_DATA, {
        variables :{ first : 12},
    });

    return (
        
        <div className = "container">
            {pokemons.map(pokemon => <PokemonList key={pokemon.id} pokemon={pokemon} />)}
        </div>
    )
}