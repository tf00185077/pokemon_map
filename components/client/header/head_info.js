import { Flex, Center, Text } from '@chakra-ui/react'
import { InfoIcon } from '@chakra-ui/icons'
import Image from 'next/image'
const HeadInform = () => {
  return (
    <Flex color="white" gap="3px">
      <Center w="100px" flex="1">
        <Image width="20" height="20" alt="AuthLine" src="/line.png"></Image>
      </Center>
      <Center size="150px" flex="1">
        <Image
          width="20"
          height="20"
          alt="AuthInstagram"
          src="/instagram.png"
        ></Image>
      </Center>
      <Center flex="1">
        <InfoIcon color="black"></InfoIcon>
      </Center>
    </Flex>
  )
}
export default HeadInform
