'use client'
import Image from 'next/image'
import Link from 'next/link'
import Header from '../components/client/header/header'
import { PokemonData } from '../store/poke_data_context_provider'
import { Center, Box, Grid, Card } from '@chakra-ui/react'
import BattleInfo from '../components/client/battle/battle_info'
import { ChooseNoContextProvider } from '@/store/choose_id_context'
import { AllFistSkill } from '@/store/all_first_skill_context'
import { AllSecondSkill } from '@/store/all_second_skill_context'
import { MinePokemonDetailProvider } from '@/store/mine_pokemon_detail_context_provider'
import { RivalPokemonDetailProvider } from '@/store/rival_pokemon_detail_context_provider'
import { EffectiveListContextProvider } from '@/store/effectiveness_context'
import { BestSkillContextProvider } from '@/store/best_skill_context_provider'
import BattleAnalysis from '@/components/client/battle/battle_analysis'
export default function Home() {
  return (
    // <Center>
    <ChooseNoContextProvider>
      <AllFistSkill>
        <AllSecondSkill>
          <PokemonData>
            <EffectiveListContextProvider>
              <MinePokemonDetailProvider>
                <RivalPokemonDetailProvider>
                  <BestSkillContextProvider>
                    <Center>
                      <Card padding={5}>
                        <Box maxWidth="1600px">
                          <Header></Header>
                          <Grid templateColumns="1fr 1fr" gap={5}>
                            <BattleInfo owner="mine"></BattleInfo>
                            <BattleInfo owner="rival"></BattleInfo>
                          </Grid>
                          <BattleAnalysis type="mine"></BattleAnalysis>
                        </Box>
                      </Card>
                    </Center>
                  </BestSkillContextProvider>
                </RivalPokemonDetailProvider>
              </MinePokemonDetailProvider>
            </EffectiveListContextProvider>
          </PokemonData>
        </AllSecondSkill>
      </AllFistSkill>
    </ChooseNoContextProvider>
    /* </Center> */
  )
}
