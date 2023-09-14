import { createContext } from 'react'
export const RivalPokemonDetailContext = createContext({
  id: '',
  name: '',
  attr: [],
  first_skill: [],
  second_skill: [],
})
