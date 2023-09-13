import { useContext } from 'react'
import { PokeDataContext } from '../../../store/poke_data_context_provider'
import { Center, Image } from '@chakra-ui/react'
import { useChooseNoContext } from '@/store/choose_id_context'
const PokeImg = () => {
  const { choose } = useChooseNoContext()
  console.log(choose)
  return (
    <Center>
      <Image
        src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${choose}.png`}
      ></Image>
    </Center>
  )
}
export default PokeImg
