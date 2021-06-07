export const SAVE_POKEMON_DATA = 'SAVE_POKEMON_DATA'

export const savePokemonData = (data) => dispatch => {
    dispatch({
        type: SAVE_POKEMON_DATA,
        payload: data
    })
}
