import PokeAttribute from '../poke_select/poke_attribute'
import ChoosePoke from '../poke_select/choose_poke'
import PokeSkill from '../poke_select/poke_skill'
import BattleAnalysis from './battle_analysis'
import {
  Box,
  Flex,
  Grid,
  Card,
  CardHeader,
  CardBody,
  CardFooter,
} from '@chakra-ui/react'
import PokeImg from '../poke_select/poke_img'
import { useContext, useState, useEffect } from 'react'
import { PokeDataContext } from '../../../store/poke_data_context_provider'
import { ChooseNoContextProvider } from '../../../store/poke_data_context_provider'
const BattleInfo = (props) => {
  // const pokemonaData = useContext(PokeDataContext)
  // console.log(pokemonaData)
  const [getBestCommonDamageData, setGetBestCommonDagageData] = useState()
  const [getBestChargedDamageData, setGetBestChargedDagageData] = useState()
  const getBestCommonDamageDataHandler = () => {
    setGetBestCommonDagageData(theGreatestDamage)
  }
  const getBestChargedDamageDataHandler = () => {
    setGetBestChargedDagageData(theGreatestChargedDamage)
  }
  useEffect(() => {})

  return (
    <Box>
      <Card>
        <CardBody>
          {/* <ChooseNoContextProvideKr> */}
          <Card mb={5}>
            <PokeImg type={props.owner}></PokeImg>
            <PokeAttribute type={props.owner}></PokeAttribute>
          </Card>
          <Card mb={5} mHeight="400px">
            <ChoosePoke type={props.owner}></ChoosePoke>
            <PokeSkill
              type={props.owner}
              pushBestCommonDamageData={getBestCommonDamageDataHandler}
              pushBestChargedDamageData={getBestChargedDamageDataHandler}
            ></PokeSkill>
          </Card>
          <Card mb={5}></Card>
          {/* </ChooseNoContextProvider> */}
        </CardBody>
      </Card>
    </Box>
  )
}
export default BattleInfo
