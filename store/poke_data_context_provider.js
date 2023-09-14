import { useState, useEffect, createContext, useContext } from 'react'
import PokeAllData from './poke_data.api'
export const PokeDataContext = createContext()
export function PokemonData(props) {
  const [pokeData, setPokeData] = useState()
  useEffect(() => {
    const GetData = async () => {
      const Data = await PokeAllData()
      let datas = Object.values(Data)
      setPokeData(datas)
    }
    GetData()
  }, [])
  return (
    <PokeDataContext.Provider value={pokeData}>
      {props.children}
    </PokeDataContext.Provider>
  )
}
