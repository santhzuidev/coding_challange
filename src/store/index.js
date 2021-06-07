import { configureStore } from '@reduxjs/toolkit'
import pokemonReducer from './reducer'

export default configureStore({
  reducer: {
    pokemon: pokemonReducer
  },
})
