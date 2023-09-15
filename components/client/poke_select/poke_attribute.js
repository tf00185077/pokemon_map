import { Flex, Text } from '@chakra-ui/react'
import { useContext, useEffect, useState } from 'react'
import { MinePokemonDetailContext } from '@/store/mine_pokemon_detail_context'
import { RivalPokemonDetailContext } from '@/store/rival_pokemon_detail_context'
import customizeStyles from './poke_attribute.module.css'
const PokeAttribute = (props) => {
  let pokemonDetail = {}
  if (props.type == 'mine') {
    const minePokemonDetail = useContext(MinePokemonDetailContext)
    pokemonDetail = minePokemonDetail
  } else if (props.type == 'rival') {
    const rivalPokemonDetail = useContext(RivalPokemonDetailContext)
    pokemonDetail = rivalPokemonDetail
  }
  return (
    <Flex justify="center" gap="10px" mb={5}>
      {pokemonDetail &&
        pokemonDetail['pokemon_attr'].map((item) => {
          return (
            <Text
              className={`${customizeStyles[item]}`}
              padding="5px"
              key={item}
              fontSize="lg"
              color="white"
              rounded={'幹'}
            >
              {item}
            </Text>
          )
        })}
    </Flex>
  )
}
export default PokeAttribute
