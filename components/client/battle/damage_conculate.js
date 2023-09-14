import { useContext, useEffect, useState } from 'react'
import { MinePokemonDetailContext } from '@/store/mine_pokemon_detail_context'
import { RivalPokemonDetailContext } from '@/store/rival_pokemon_detail_context'
import { EffectiveListContext } from '@/store/effectiveness_context'
export const theGreatestCommonDamage = (type) => {
  const { Effectiveness } = useContext(EffectiveListContext)
  // return Effectiveness
  const minePokemonDetail = useContext(MinePokemonDetailContext)
  const rivalPokemonDetail = useContext(RivalPokemonDetailContext)
  const [bestDamageArr, setBestDamageArr] = useState([])
  let minePokemonCummonSkills,
    minePokemonChargedSkills,
    minePokemonAttr,
    rivalPokemonCummonSkills,
    rivalPokemonChargedSkills,
    rivalPokemonAttr
  useEffect(() => {
    if (minePokemonDetail && rivalPokemonDetail) {
      if (type == 'mine') {
        minePokemonCummonSkills = minePokemonDetail['cummon_skill']
        minePokemonChargedSkills = minePokemonDetail['charged_skill']
        minePokemonAttr = minePokemonDetail['pokemon_attr']
        rivalPokemonCummonSkills = rivalPokemonDetail['cummon_skill']
        rivalPokemonChargedSkills = rivalPokemonDetail['charged_skill']
        rivalPokemonAttr = rivalPokemonDetail['pokemon_attr']
      } else if (type == 'rival') {
        rivalPokemonCummonSkills = minePokemonDetail['cummon_skill']
        rivalPokemonChargedSkills = minePokemonDetail['charged_skill']
        rivalPokemonAttr = minePokemonDetail['pokemon_attr']
        minePokemonCummonSkills = rivalPokemonDetail['cummon_skill']
        minePokemonChargedSkills = rivalPokemonDetail['charged_skill']
        minePokemonAttr = rivalPokemonDetail['pokemon_attr']
      }
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
      // console.log(powerUpByAttData, '強化版')
      //接著看技能屬性有沒有和對手相剋
      //先取出對方屬性的相剋表-->取出自己攻擊技能的相剋表
      // console.log(rivalPokemonAttr)
      const filteredData = {}
      for (const key in Effectiveness) {
        //Effectiveness這是全部的屬性相剋表
        if (
          modifiedSkill
            .map((items) => items['type'])
            .some((keyword) => key.includes(keyword))
        ) {
          filteredData[key] = Effectiveness[key]
        }
      }
      // console.log(filteredData, '攻擊方技能的相剋表') //這是敵人的屬性相剋表 ->這是攻擊方技能的相剋表
      //接著找出技能屬性和對方屬性相剋係數
      //先取得技能屬性 --> 取得敵方被打的屬性
      // const rivalPokemonAttr = rivalPokemonAttr.map((items) => items.type)
      // console.log(rivalPokemonAttr, '被打的屬性') //-->被打的屬性
      //接著取得係數
      const effectivenessData = Object.values(filteredData)
      // console.log(filteredData, 'filteredData') //對手的屬性抗性
      // console.log(effectivenessData, 'effectivenessData') //對對手的屬性抗性["Name":{...}]=>[{...}]
      const effectivenessRate = effectivenessData.map((items) => {
        const extraObject = {}
        rivalPokemonAttr.forEach((key) => {
          extraObject[key] = items[key]
        })
        return extraObject
      })
      // console.log(
      //   effectivenessRate,
      //   '對手的屬性抗性和我方攻擊的屬性加成結算，這兩個數字要相乘',
      // )
      // 接著將effectivenessRate的數字相乘，同物件的所有Value相乘
      const lastEffectivenessRate = effectivenessRate.map((obj) => {
        const values = Object.values(obj)
        const product = values.reduce(
          (accumulator, currentValue) => accumulator * currentValue,
          1,
        )
        return product
      })

      // console.log(lastEffectivenessRate, '相乘後的值') //該屬性攻擊打到敵人身上的屬性總和
      // 接著將強化過的技能傷害*lastEffectivenessRate
      const theLastDamageData = powerUpByAttData.map((item, index) => {
        const theLastDamage = [...powerUpByAttData]
        if (Number(lastEffectivenessRate[index])) {
          theLastDamage[index]['power'] = Math.floor(
            Number(item['power']) * Number(lastEffectivenessRate[index]),
          )
          setBestDamageArr(theLastDamage)
          return theLastDamage
        }
        // console.log(theLastDamage, '你很可憐')

        // return bestDamage
      })
      // console.log(bestDamageArr, '最後結果')
    }
  }, [minePokemonDetail, rivalPokemonDetail])
  // return bestDamage
  useEffect(() => {
    // console.log(bestDamageArr, 'vim')
  }, [bestDamageArr])
  return bestDamageArr
}
export const theGreatestChargedDamageData = (type) => {
  const { Effectiveness } = useContext(EffectiveListContext)
  // return Effectiveness
  const minePokemonDetail = useContext(MinePokemonDetailContext)
  const rivalPokemonDetail = useContext(RivalPokemonDetailContext)
  const [bestDamageArr, setBestDamageArr] = useState([])
  let minePokemonCummonSkills,
    minePokemonChargedSkills,
    minePokemonAttr,
    rivalPokemonCummonSkills,
    rivalPokemonChargedSkills,
    rivalPokemonAttr
  useEffect(() => {
    if (minePokemonDetail && rivalPokemonDetail) {
      if (type == 'mine') {
        minePokemonCummonSkills = minePokemonDetail['cummon_skill']
        minePokemonChargedSkills = minePokemonDetail['charged_skill']
        minePokemonAttr = minePokemonDetail['pokemon_attr']
        rivalPokemonCummonSkills = rivalPokemonDetail['cummon_skill']
        rivalPokemonChargedSkills = rivalPokemonDetail['charged_skill']
        rivalPokemonAttr = rivalPokemonDetail['pokemon_attr']
      } else if (type == 'rival') {
        rivalPokemonCummonSkills = minePokemonDetail['cummon_skill']
        rivalPokemonChargedSkills = minePokemonDetail['charged_skill']
        rivalPokemonAttr = minePokemonDetail['pokemon_attr']
        minePokemonCummonSkills = rivalPokemonDetail['cummon_skill']
        minePokemonChargedSkills = rivalPokemonDetail['charged_skill']
        minePokemonAttr = rivalPokemonDetail['pokemon_attr']
      }
      //絕招招式是不是跟自身屬性相同
      const chargedSkillMatchingType = minePokemonChargedSkills.map((res) => {
        return minePokemonAttr.includes(res.type)
      })
      const theSameAttrBetweenChargedSkillAndPokemonAttr = []
      let chargedSkillIndex = chargedSkillMatchingType.indexOf(true)

      while (chargedSkillIndex !== -1) {
        theSameAttrBetweenChargedSkillAndPokemonAttr.push(chargedSkillIndex)
        chargedSkillIndex = chargedSkillMatchingType.indexOf(
          true,
          chargedSkillIndex + 1,
        )
      }
      // console.log(theSameAttrBetweenChargedSkillAndPokemonAttr, '屬性是?')
      //屬性一致傷害加乘1.2不同則不變
      const modifiedSkill = JSON.parse(JSON.stringify(minePokemonChargedSkills))
      const powerUpByAtt = theSameAttrBetweenChargedSkillAndPokemonAttr.map(
        (res) => {
          modifiedSkill[res].power = Math.round(modifiedSkill[res].power * 1.2)
          return modifiedSkill // 返回修改后的技能
        },
      )
      const powerUpByAttData = powerUpByAtt.flatMap((innerArray) => innerArray)
      // console.log(powerUpByAttData, '強化版')
      //接著看技能屬性有沒有和對手相剋
      //先取出對方屬性的相剋表-->取出自己攻擊技能的相剋表
      // console.log(rivalPokemonAttr)
      const filteredData = {}
      for (const key in Effectiveness) {
        //Effectiveness這是全部的屬性相剋表
        if (
          modifiedSkill
            .map((items) => items['type'])
            .some((keyword) => key.includes(keyword))
        ) {
          filteredData[key] = Effectiveness[key]
        }
      }
      // console.log(filteredData, '攻擊方技能的相剋表') //這是敵人的屬性相剋表 ->這是攻擊方技能的相剋表
      //接著找出技能屬性和對方屬性相剋係數
      //先取得技能屬性 --> 取得敵方被打的屬性
      // const rivalPokemonAttr = rivalPokemonAttr.map((items) => items.type)
      // console.log(rivalPokemonAttr, '被打的屬性') //-->被打的屬性
      //接著取得係數
      const effectivenessData = Object.values(filteredData)
      // console.log(filteredData, 'filteredData') //對手的屬性抗性
      // console.log(effectivenessData, 'effectivenessData') //對對手的屬性抗性["Name":{...}]=>[{...}]
      const effectivenessRate = effectivenessData.map((items) => {
        const extraObject = {}
        rivalPokemonAttr.forEach((key) => {
          extraObject[key] = items[key]
        })
        return extraObject
      })
      // console.log(
      //   effectivenessRate,
      //   '對手的屬性抗性和我方攻擊的屬性加成結算，這兩個數字要相乘',
      // )
      // 接著將effectivenessRate的數字相乘，同物件的所有Value相乘
      const lastEffectivenessRate = effectivenessRate.map((obj) => {
        const values = Object.values(obj)
        const product = values.reduce(
          (accumulator, currentValue) => accumulator * currentValue,
          1,
        )
        return product
      })

      // console.log(lastEffectivenessRate, '相乘後的值') //該屬性攻擊打到敵人身上的屬性總和
      // 接著將強化過的技能傷害*lastEffectivenessRate
      const theLastDamageData = powerUpByAttData.map((item, index) => {
        const theLastDamage = [...powerUpByAttData]
        if (Number(lastEffectivenessRate[index])) {
          theLastDamage[index]['power'] = Math.floor(
            Number(item['power']) * Number(lastEffectivenessRate[index]),
          )
          setBestDamageArr(theLastDamage)
          return theLastDamage
        }
        // console.log(theLastDamage)

        // return bestDamage
      })
      // console.log(bestDamageArr, '最後結果')
    }
  }, [minePokemonDetail, rivalPokemonDetail])
  // return bestDamage
  useEffect(() => {
    // console.log(bestDamageArr, 'vim')
  }, [bestDamageArr])
  return bestDamageArr
}
