'use client'
import Image from 'next/image'
import Link from 'next/link'
import Header from '../components/client/header/header'
import {PokemonData} from '../store/poke_data_context_provider'
import { Center, Box, Grid } from '@chakra-ui/react'
import BattleInfo from '../components/client/battle/battle_info'
export default function Home() {
  return (
    // <Center>
    <PokemonData>
      <Center>
        <Box maxWidth="1600px">
          <Header></Header>
          <Grid templateColumns="1fr 1fr" gap={6}>
            <BattleInfo></BattleInfo>
            <BattleInfo></BattleInfo>
          </Grid>
        </Box>
      </Center>
    </PokemonData>
    /* </Center> */
  )
}
