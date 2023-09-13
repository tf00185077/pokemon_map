'use client'
import { Component } from 'react'
import PokeImg from '../../components/client/poke_select/poke_img'
import PokeAttr from '../../components/client/poke_select/poke_attribute'
import ChoosePoke from '../../components/client/poke_select/choose_poke'
import PokeSkill from '../../components/client/poke_select/poke_skill'
import { Grid, Box } from '@chakra-ui/react'
const BattlePage = () => {
  return (
    <Grid templateColumns="repeat(3, 1fr)" gap={6}>
      <Box w="70px" h="10" bg="blue.500" />
      <Box w="170px" h="10" bg="blue.500" />
      <Box w="180px" h="10" bg="blue.500" />
    </Grid>
  )
}
export default BattlePage
