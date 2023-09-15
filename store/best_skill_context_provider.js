// import {useContext, useEffect, useState} from "react"
// import {BestSkillContext} from './best_skill_context'
// export function BestSkillContextProvider(props){
//     const [bestSkill , setBestSkill] = useState()
//     return(
//         <BestSkillContext.Provider value={{bestSkill,setBestSkill}}>{props.children}</BestSkillContext.Provider>
//     )
// }
import React, { useContext, useState } from 'react'
import { BestSkillContext } from './best_skill_context'

export function BestSkillContextProvider(props) {
  const [bestSkill, setBestSkill] = useState({}) // 初始化为空对象

  return (
    <BestSkillContext.Provider value={{ bestSkill, setBestSkill }}>
      {props.children}
    </BestSkillContext.Provider>
  )
}
