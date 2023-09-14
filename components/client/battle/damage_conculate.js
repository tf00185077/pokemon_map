import { useContext, useEffect } from 'react'
import { MinePokemonDetailContext } from '@/store/mine_pokemon_detail_context'
import { RivalPokemonDetailContext } from '@/store/rival_pokemon_detail_context'
import { EffectiveListContext } from '@/store/effectiveness_context'
export const theGreatestDamageToRival = () => {
  const { Effectiveness } = useContext(EffectiveListContext)
  // return Effectiveness
  const minePokemonDetail = useContext(MinePokemonDetailContext)
  const rivalPokemonDetail = useContext(RivalPokemonDetailContext)
  let bestDamage = 123
  useEffect(() => {
    if (minePokemonDetail && rivalPokemonDetail) {
      const minePokemonCummonSkills = minePokemonDetail['cummon_skill']
      const minePokemonChargedSkills = minePokemonDetail['charged_skill']
      const minePokemonAttr = minePokemonDetail['pokemon_attr']
      const rivalPokemonCummonSkills = rivalPokemonDetail['cummon_skill']
      const rivalPokemonChargedSkills = rivalPokemonDetail['charged_skill']
      const rivalPokemonAttr = rivalPokemonDetail['pokemon_attr']
      //基礎招式是不是跟自身屬性相同
      const commonSkillMatchingType = minePokemonCummonSkills.map((res) => {
        return minePokemonAttr.includes(res.type)
      })
      const theSameAttrBetweenCummonSkillAndPokemonAttr = []
      let cummonSkillIndex = commonSkillMatchingType.indexOf(true)

      while (cummonSkillIndex !== -1) {
        theSameAttrBetweenCummonSkillAndPokemonAttr.push(cummonSkillIndex)
        cummonSkillIndex = commonSkillMatchingType.indexOf(
          true,
          cummonSkillIndex + 1,
        )
      }
      // console.log(theSameAttrBetweenCummonSkillAndPokemonAttr, '屬性是?')
      //屬性一致傷害加乘1.2不同則不變
      const modifiedSkill = JSON.parse(JSON.stringify(minePokemonCummonSkills))
      const powerUpByAtt = theSameAttrBetweenCummonSkillAndPokemonAttr.map(
        (res) => {
          modifiedSkill[res].power = Math.round(modifiedSkill[res].power * 1.2)
          return modifiedSkill // 返回修改后的技能
        },
      )
      const powerUpByAttData = powerUpByAtt.flatMap((innerArray) => innerArray)
      console.log(powerUpByAttData, '強化版')
      //看技能屬性有沒有和對手相剋
      //先取出對方屬性的相剋表
      console.log(rivalPokemonAttr)
      const filteredData = {}
      for (const key in Effectiveness) {
        if (rivalPokemonAttr.some((keyword) => key.includes(keyword))) {
          filteredData[key] = Effectiveness[key]
        }
      }
      console.log(filteredData, '屬性相剋表') //這是敵人的屬性相剋表
      //接著找出技能屬性和對方屬性相剋係數
      //先取得技能屬性
      const AttAbooutPowerUpByAttData = powerUpByAttData.map(
        (items) => items.type,
      )
      console.log(AttAbooutPowerUpByAttData, '我方技能屬性')
      //接著去得係數
      const result = {}

      const conditionData = {}
      AttAbooutPowerUpByAttData.forEach((condition) => {

        for (const key in filteredData) {
          if (filteredData[key].hasOwnProperty(condition)) {
            conditionData[key] = filteredData[key][condition]
          }
        }
        result[condition] = conditionData
        console.log(result,"技能屬性對應敵人屬性的參數")//技能屬性對應敵人屬性的參數
        //接著把技能*參數
      })
    }
  }, [minePokemonDetail, rivalPokemonDetail])
  // return bestDamage
  return ''
}
export const theGreatestDamageToMine = () => {
  const minePokemonDetail = useContext(MinePokemonDetailContext)
  const rivalPokemonDetail = useContext(RivalPokemonDetailContext)
}
