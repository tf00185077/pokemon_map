import { Flex, Text } from '@chakra-ui/react'
import PokemonAttr from '../../../api_service/pokemon_attr_api'
const PokeAttribute = () => {
  // const attr = PokemonAttr()
  // attr
  //   .then((res) =>
  //     res.map((item) => {
  //       console.log(item.type)
  //     }),
  //   )
  //   .catch((err) => console.log(err))
  // console.log(Att)
  return (
    <Flex justify="center" gap="10px">
      <Text bg="red.300" padding="5px">
        Fire
      </Text>
      <Text bg="blue.100" padding="5px">
        Ice
      </Text>
    </Flex>
  )
}
export default PokeAttribute
