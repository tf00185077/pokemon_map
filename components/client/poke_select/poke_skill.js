import {
  List,
  ListItem,
  ListIcon,
  Grid,
  Flex,
  Text,
  Card,
  Stack,
  StackDivider,
  Box,
  Heading,
} from '@chakra-ui/react'
import { StarIcon } from '@chakra-ui/icons'
import { useContext, useEffect, useState } from 'react'
import { MinePokemonDetailContext } from '@/store/mine_pokemon_detail_context'
import { RivalPokemonDetailContext } from '@/store/rival_pokemon_detail_context'
import {
  theGreatestCommonDamage,
  theGreatestChargedDamageData,
} from '../battle/damage_conculate'
import { BestSkillContext } from '@/store/best_skill_context'
const Skill = (props) => {
  let PokemonDetail = {}
  // console.log(theGreatestDamageToRival(), 'theGreatestDamageToRival')
  // let damageData = theGreatestDamageToRival() //傷害處理後的值
  // console.log(damageData, '處理後的值被丟回skill')
  const theGreatestDamage = theGreatestCommonDamage(props.type)
  const theGreatestChargedDamage = theGreatestChargedDamageData(props.type)
  const [finalDamageData, setFinalDamageData] = useState()
  const [finalChargedDamageData, setFinalChargedDamageData] = useState()
  const [theBestDamageData, setTheBestDamageData] = useState()
  const [theBestChargedDamageData, setTheBestChargedDamageData] = useState()
  const { bestSkill, setBestSkill } = useContext(BestSkillContext)
  useEffect(() => {
    const bestDamageData = {
      bestCommonSkill: { theBestDamageData },
      bestChargedSkill: { theBestChargedDamageData },
    }
    if (props.type == 'mine') {
      setBestSkill(bestDamageData)
    }
  }, [theBestDamageData, theBestChargedDamageData])
  useEffect(() => {
    setFinalDamageData(theGreatestDamage)
    setFinalChargedDamageData(theGreatestChargedDamage)
  }, [theGreatestDamage, theGreatestChargedDamage])

  useEffect(() => {
    if (
      finalDamageData &&
      finalDamageData.length != 0 &&
      finalChargedDamageData &&
      finalChargedDamageData.length != 0
    ) {
      // console.log(finalDamageData, '該腳色有的技能')
      const conculateDamageData = finalDamageData.reduce((prev, current) => {
        return prev['power'] > current['power'] ? prev : current
      })
      const conculateChargedDamageData = finalChargedDamageData.reduce(
        (prev, current) => {
          return prev['power'] > current['power'] ? prev : current
        },
      )
      setTheBestDamageData(conculateDamageData)
      setTheBestChargedDamageData(conculateChargedDamageData)
    }
  }, [finalDamageData, finalChargedDamageData])
  if (props.type == 'mine') {
    const minePokemonDetail = useContext(MinePokemonDetailContext)
    PokemonDetail = minePokemonDetail
  } else if (props.type == 'rival') {
    const rivalPokemonDetail = useContext(RivalPokemonDetailContext)
    PokemonDetail = rivalPokemonDetail
  }
  // console.log(theBestChargedDamageData,"WHY")
  return (
    <Card minHeight="400px">
      <Grid>
        <Stack divider={<StackDivider />} spacing="4">
          <Grid mt={10}>
            <Box padding={2}>
              <Heading fontSize="xl">Move Skill</Heading>
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
                                <StarIcon color="yellow"></StarIcon>
                              )}
                          </Flex>

                          <Text>{items.name}</Text>
                          <Text>{finalDamageData[index]['power']}</Text>
                        </Grid>
                      )
                    })}
                </Grid>
              </List>
            </Box>
          </Grid>

          <Grid mt={10}>
            <Box mb={10} padding={2}>
              <Heading fontSize="xl">Charge Skill</Heading>
              <List spacing={3}>
                <Grid mt={3}>
                  {PokemonDetail &&
                    theBestChargedDamageData &&
                    PokemonDetail['charged_skill'].map((items, index) => {
                      return (
                        <Grid templateColumns="20px 1fr 40px" key={index}>
                          <Flex align="center" justify="center">
                            {theBestChargedDamageData &&
                              theBestChargedDamageData.name == items.name && (
                                <StarIcon color="pink"></StarIcon>
                              )}
                          </Flex>

                          <Text>{items.name}</Text>
                          <Text>{finalChargedDamageData[index]['power']}</Text>
                        </Grid>
                      )
                    })}
                </Grid>
              </List>
            </Box>
          </Grid>
        </Stack>
      </Grid>
    </Card>
  )
}
export default Skill
