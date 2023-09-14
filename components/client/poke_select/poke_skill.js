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
  console.log(theGreatestDamageToRival(), 'theGreatestDamageToRival')
  let PokemonDetail = {}
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
              PokemonDetail['cummon_skill'].map((items) => {
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
