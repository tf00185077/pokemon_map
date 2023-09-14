import { useState, useEffect, createContext, useContext } from 'react'
import AllFirstSkill from '../api_service/all_first_skill_api'
export const AllFirstSkillContext = createContext()
export function AllFistSkill(props) {
  const [firstSkills, setFirstSkills] = useState()
  useEffect(() => {
    const GetData = async () => {
      const Data = await AllFirstSkill()
      let datas = Object.values(Data)
      setFirstSkills(datas)
    }
    GetData()
  }, [])
  return (
    <AllFirstSkillContext.Provider value={{ firstSkills, setFirstSkills }}>
      {props.children}
    </AllFirstSkillContext.Provider>
  )
}
