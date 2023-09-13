import {
  useState,
  useEffect,
  useReducer,
  createContext,
  useContext,
} from 'react'
import dynamic from 'next/dynamic'
// import PokeAllData from './poke_data.api'
export const PokeDataContext = createContext()
const PokeAllData = dynamic(() => import('./poke_data.api'))
// const GetData = PokeAllData.then( res=>res.data)
console.log(typeof PokeAllData)
export function PokemonData (props){
  const [pokeData,setPokeData] = useState(PokeAllData);
  // useEffect(()=>{
  //   setPokeData((pre)=>{
  //     pre,
  //     ...PokeAllData
  //   })
  // },PokeAllData)
  return (
    <PokeDataContext.Provider value={pokeData}>
      {props.children}
    </PokeDataContext.Provider>
  )
}