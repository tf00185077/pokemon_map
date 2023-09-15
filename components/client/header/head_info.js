import { Flex, Center, Text } from '@chakra-ui/react'
import { InfoIcon } from '@chakra-ui/icons'
import Image from 'next/image'
import Link from 'next/link'
const HeadInform = () => {
  return (
    <Flex color="white" gap="3px">
      <Center w="100px" flex="1">
        <Link href='https://line.me/ti/p/hTbpDm6LFC'>
        <Image width="20" height="20" alt="AuthLine" src="/line.png"></Image>
        </Link>
      </Center>
      <Center size="150px" flex="1">
      <Link href='https://www.instagram.com/redgodkill_0406/'>
        <Image
          width="20"
          height="20"
          alt="AuthInstagram"
          src="/instagram.png"
        ></Image>
          </Link>
      </Center>
      <Center flex="1">
        <InfoIcon color="black"></InfoIcon>
      </Center>
    </Flex>
  )
}
export default HeadInform
