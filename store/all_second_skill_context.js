import { useState, useEffect, createContext, useContext } from 'react'
import AllSecondSkills from '../api_service/all_second_skill_api'
export const AllSecondSkillContext = createContext()
export function AllSecondSkill(props) {
  const [secondSkills, setSecondSkills] = useState()
  useEffect(() => {
    const GetData = async () => {
      const Data = await AllSecondSkills()
      let datas = Object.values(Data)
      setSecondSkills(datas)
    }
    GetData()
  }, [])
  return (
    <AllSecondSkillContext.Provider value={{ secondSkills, setSecondSkills }}>
      {props.children}
    </AllSecondSkillContext.Provider>
  )
}
