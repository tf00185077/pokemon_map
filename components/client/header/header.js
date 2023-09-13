'use client'
import {
  Input,
  Flex,
  Spacer,
  Center,
  Square,
  Circle,
  Box,
  Text,
} from '@chakra-ui/react'
import SearchBar from './searchbar'
import HeadInform from './head_info'
import Image from 'next/image'
const Header = () => {
  return (
    <Flex gap="10px">
      <Center>
        <Image alt="meu" src="/logo.png" width="40" height="40"></Image>
      </Center>
      <Center flex="2" size="150px">
        <SearchBar></SearchBar>
      </Center>
      <Center flex=".8">
        <HeadInform></HeadInform>
      </Center>
    </Flex>
  )
}
export default Header
