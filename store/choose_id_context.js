import { createContext, useContext, useState } from 'react'
const ChooseNoContext = createContext(0)
export const ChooseNoContextProvider = ({ children }) => {
  const [choose, setChoose] = useState('')

  return (
    <ChooseNoContext.Provider value={{ choose, setChoose }}>
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

  if (!context) {
    throw new Error(
      'useChooseNoContext must be used within a ChooseNoContextProvider',
    )
  }

  return context
}
