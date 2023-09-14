import { ChooseNoContext } from '@/store/choose_id_context'
import { MinePokemonDetailContext } from './mine_pokemon_detail_context'
import PokemonAttr from '@/api_service/pokemon_attr_api'
import { PokeDataContext } from '@/store/poke_data_context_provider'
import PokemonSkill from '@/api_service/pokemon_skill' //哪隻怪會什麼技能
import { AllFirstSkillContext } from '@/store/all_first_skill_context' //全部基礎招式
import { AllSecondSkillContext } from '@/store/all_second_skill_context' //全部充能招式
import { useContext, useState, useEffect } from 'react'
export const MinePokemonDetailProvider = (props) => {
  const pokemonData = useContext(PokeDataContext)
  const { choose } = useContext(ChooseNoContext)
  const chooseNumber = choose['mine'] //找出自己context的編號
  const { firstSkills } = useContext(AllFirstSkillContext)
  const { secondSkills } = useContext(AllSecondSkillContext)
  const [firstSkill, setFirstSkill] = useState([])
  const [secondSkill, setSecondSkill] = useState([])
  const [type, setType] = useState([])
  let defaultValue = {
    pokemon_id: '',
    pokemon_name: '',
    pokemon_attr: [],
    cummon_skill: [
      { cummon_skill_name: '', cummon_skill_attr: '', cummon_skill_damage: '' },
    ],
    charged_skill: [
      {
        charged_skill_name: '',
        charged_skill_attr: '',
        charged_skill_damage: '',
      },
    ],
  }
  let cummonSkillDetail = []
  let chargedSkillDetail = []
  useEffect(() => {
    const GetData = async () => {
      const attrData = await PokemonAttr()
      const skillData = await PokemonSkill()
      //寫入屬性資料
      const choosePokemonAttrData = attrData.find(
        (item) => item.pokemon_id == chooseNumber,
      )
      setType(choosePokemonAttrData.type)
      //寫入屬性資料
      //寫入技能資料
      const choosePokemonSkillData = skillData.find(
        (item) => item.pokemon_id == chooseNumber,
      )
      setFirstSkill(choosePokemonSkillData.fast_moves)
      setSecondSkill(choosePokemonSkillData.charged_moves)
      //寫入技能資料
    }
    GetData()
  }, [choose])
  if (firstSkills) {
    //將所有基礎招式解開一層
    const AllFirstSkillData = firstSkills.map((items) => items)
    //定義選中的pokemon持有的招式名稱
    const pokemonCummonSkillName = [
      firstSkill && firstSkill.map((items) => items),
    ]
    //將陣列拆開
    const pokemonCummonSkillNameArray = [].concat(...pokemonCummonSkillName)
    //將展開的基礎招式取出名字條件符合的
    for (const name of pokemonCummonSkillNameArray) {
      const matchingSkills = AllFirstSkillData.filter(
        (item) => item.name === name,
      )
      cummonSkillDetail.push(...matchingSkills) // 将所有匹配项添加到 skillDetail 数组中
    }
  }
  if (secondSkills) {
    //將所有充能招式解開一層
    const AllSecondSkillData = secondSkills.map((items) => items)
    //定義選中的pokemon持有的招式名稱
    const pokemonChargedSkillName = [
      secondSkill && secondSkill.map((items) => items),
    ]
    //將陣列拆開
    const pokemonChargedSkillNameArray = [].concat(...pokemonChargedSkillName)
    //將展開的基礎招式取出名字條件符合的
    for (const name of pokemonChargedSkillNameArray) {
      const matchingSkills = AllSecondSkillData.filter(
        (item) => item.name === name,
      )
      chargedSkillDetail.push(...matchingSkills) // 将所有匹配项添加到 skillDetail 数组中
    }
  }
  //把取得的資料放進defaultValue
  defaultValue = {
    ...defaultValue,
    pokemon_id: chooseNumber,
    pokemon_name:
      pokemonData && pokemonData.map((datas) => datas)[chooseNumber].name,
    pokemon_attr: type && type.map((items) => items),
    cummon_skill: cummonSkillDetail,
    charged_skill: chargedSkillDetail,
  }
  //   console.log(defaultValue,"Mine")
  return (
    <MinePokemonDetailContext.Provider value={defaultValue}>
      {props.children}
    </MinePokemonDetailContext.Provider>
  )
}
