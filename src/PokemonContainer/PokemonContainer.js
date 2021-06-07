import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import { useQuery } from '@apollo/react-hooks';
import { POKEMON_DATA } from '../Graphql/pokemon';
import { PokemonList } from '../Components/PokemonList';
import { savePokemonData } from '../store/actions'

export function PokemonContainer(props) {

    const { pokemonData, savePokemonData } = props

    const response = useQuery(POKEMON_DATA, {
        variables: { first : 12 },
    });

    useEffect(() => {
        savePokemonData(response?.data?.pokemons || [])
    }, [response])

    return (
        <div className="container">
            {pokemonData && pokemonData.map(pokemon => <PokemonList key={pokemon.id} pokemon={pokemon} />)}
        </div>
    )
}

const mapDispatchToProps = dispatch => ({
    savePokemonData: (data) => dispatch(savePokemonData(data))
})

const mapStateToProps = state => ({
    pokemonData: state.pokemon.pokemon
})

export default connect(mapStateToProps, mapDispatchToProps)(PokemonContainer);