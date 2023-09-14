import PokeAttribute from '../poke_select/poke_attribute'
import ChoosePoke from '../poke_select/choose_poke'
import PokeSkill from '../poke_select/poke_skill'
import BattleAnalysis from './battle_analysis'
import { Box, Flex, Grid } from '@chakra-ui/react'
import PokeImg from '../poke_select/poke_img'
import { useContext } from 'react'
import { PokeDataContext } from '../../../store/poke_data_context_provider'
import { ChooseNoContextProvider } from '../../../store/poke_data_context_provider'
const BattleInfo = (props) => {
  // const pokemonaData = useContext(PokeDataContext)
  // console.log(pokemonaData)
  return (
    <Box>
      {/* <ChooseNoContextProvideKr> */}
      <PokeImg type={props.owner}></PokeImg>
      <PokeAttribute type={props.owner}></PokeAttribute>
      <ChoosePoke type={props.owner}></ChoosePoke>
      <PokeSkill type={props.owner}></PokeSkill>
      <BattleAnalysis type={props.owner}></BattleAnalysis>
      {/* </ChooseNoContextProvider> */}
    </Box>
  )
}
export default BattleInfo
