import { createContext, useContext, useState, useReducer } from 'react'
export const ChooseNoContext = createContext({ mine: '', rival: '' })
const chooseReducer = (state, action) => {
  if (action.type == 'mine') {
    // console.log("mine",{...state})
    return { ...state, mine: action.value }
  } else if (action.type == 'rival') {
    // console.log("rival",{...state})
    return { ...state, rival: action.value }
  }
}
export const ChooseNoContextProvider = ({ children }) => {
  // const [choose, setChoose] = useState('')
  const [choose, dispatchChoole] = useReducer(chooseReducer, {
    mine: '1',
    rival: '1',
  })

  return (
    <ChooseNoContext.Provider value={{ choose, dispatchChoole }}>
      {children}
    </ChooseNoContext.Provider>
  )
}
// export const useChooseNoContext = () => {
//   const thisNo = useContext(ChooseNoContext)
//   return thisNo
// }
export const useChooseNoContext = () => {
  const context = useContext(ChooseNoContext)
  // if (!context) {
  //   throw new Error(
  //     'useChooseNoContext must be used within a ChooseNoContextProvider',
  //   )
  // }

  return context
}
