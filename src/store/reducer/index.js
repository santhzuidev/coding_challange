import { SAVE_POKEMON_DATA } from '../actions'

const initialState = {
    pokemon: []
}

export const pokemonReducer = (state = initialState, action) => {
    switch (action.type) {
        case SAVE_POKEMON_DATA:
            return {
                ...state,
                pokemon: action.payload
            }
        default:
            return state
    }
}

export default pokemonReducer
