import { List, ListItem, ListIcon, Grid, Flex, Text } from '@chakra-ui/react'
import { StarIcon } from '@chakra-ui/icons'
import { useContext, useEffect, useState } from 'react'
import { MinePokemonDetailContext } from '@/store/mine_pokemon_detail_context'
import { RivalPokemonDetailContext } from '@/store/rival_pokemon_detail_context'
import {
  theGreatestDamageToRival,
  theGreatestDamageToMine,
} from '../battle/damage_conculate'
const Skill = (props) => {
  let PokemonDetail = {}
  // console.log(theGreatestDamageToRival(), 'theGreatestDamageToRival')
  // let damageData = theGreatestDamageToRival() //傷害處理後的值
  // console.log(damageData, '處理後的值被丟回skill')
  const theGreatestDamage = theGreatestDamageToRival()
  const [finalDamageData, setFinalDamageData] = useState()
  useEffect(() => {
    setFinalDamageData(theGreatestDamage)
  }, [theGreatestDamage])

  const [theBestDamageData, setTheBestDamageData] = useState()

  useEffect(() => {
    if (finalDamageData && finalDamageData.length != 0) {
      console.log(finalDamageData, '該腳色有的技能')
      const conculateDamageData = finalDamageData.reduce((prev, current) => {
        return prev['power'] > current['power'] ? prev : current
      })
      setTheBestDamageData(conculateDamageData)

      // console.log(theBestDamageData, '取出傷害罪大的一邊')
    }
  }, [finalDamageData])

  useEffect(() => {
    console.log(theBestDamageData, '最高傷害的技能')
  }, [theBestDamageData])
  if (props.type == 'mine') {
    const minePokemonDetail = useContext(MinePokemonDetailContext)
    PokemonDetail = minePokemonDetail
    // console.log(PokemonDetail)
  } else if (props.type == 'rival') {
    const rivalPokemonDetail = useContext(RivalPokemonDetailContext)
    PokemonDetail = rivalPokemonDetail
  }
  return (
    <Grid>
      <Grid mt={10}>
        <Text fontSize="3xl">基礎招式</Text>
        <List spacing={3}>
          <Grid mt={3}>
            {PokemonDetail &&
              theBestDamageData &&
              PokemonDetail['cummon_skill'].map((items, index) => {
                return (
                  <Grid templateColumns="20px 1fr 40px" key={index}>
                    <Flex align="center" justify="center">
                      {theBestDamageData &&
                        theBestDamageData.name == items.name && (
                          <StarIcon></StarIcon>
                        )}
                    </Flex>

                    <Text>{items.name}</Text>
                    <Text>{finalDamageData[index]['power']}</Text>
                  </Grid>
                )
              })}
          </Grid>
        </List>
      </Grid>
      <Grid mt={10}>
        <Text fontSize="3xl">集氣招式</Text>
        <List spacing={3}>
          <Grid mt={3}>
            {PokemonDetail &&
              PokemonDetail['charged_skill'].map((items) => {
                return (
                  <Grid templateColumns="20px 1fr 40px" key={items.name}>
                    <Flex align="center" justify="center"></Flex>
                    <Text>{items.name}</Text>
                    <Text>{items.power}</Text>
                  </Grid>
                )
              })}
          </Grid>
        </List>
      </Grid>
    </Grid>
  )
}
export default Skill
