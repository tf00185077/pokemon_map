import { useState, useEffect, createContext, useContext } from 'react'
import EffectivenessApi from '../api_service/effectiveness_api'
export const EffectiveListContext = createContext()
export function EffectiveListContextProvider(props) {
  const [Effectiveness, setEffectiveness] = useState()
  useEffect(() => {
    const GetData = async () => {
      const Data = await EffectivenessApi()
      setEffectiveness(Data)
    }
    GetData()
  }, [])
  return (
    <EffectiveListContext.Provider value={{ Effectiveness, setEffectiveness }}>
      {props.children}
    </EffectiveListContext.Provider>
  )
}
