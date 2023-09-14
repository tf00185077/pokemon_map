import { useContext } from 'react'
import { Center, Image } from '@chakra-ui/react'
import { ChooseNoContext } from '../../../store/choose_id_context'
const PokeImg = (props) => {
  const { choose } = useContext(ChooseNoContext)
  const chooseNumber = choose[props.type]
  return (
    <Center>
      <Image
        src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${chooseNumber}.png`}
      ></Image>
    </Center>
  )
}
export default PokeImg
