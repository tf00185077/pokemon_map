import { Flex, Center, Text } from '@chakra-ui/react'
const PokeAttribute = () => {
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
