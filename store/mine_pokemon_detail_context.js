import { createContext } from 'react'
export const MinePokemonDetailContext = createContext({
  id: '',
  name: '',
  attr: [],
  first_skill: [],
  second_skill: [],
})
