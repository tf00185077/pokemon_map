import { useContext } from 'react'
import { PokeDataContext } from '../../../store/poke_data_context_provider'
import { Center, Image } from '@chakra-ui/react'
const PokeImg = () => {
  const pokeData = useContext(PokeDataContext)
  console.log(pokeData)
  return (
    <Center>
      <Image src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1000.png"></Image>
    </Center>
  )
}
export default PokeImg
