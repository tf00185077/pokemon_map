'use client'
import { Fragment } from 'react'
import { Link } from '@chakra-ui/next-js'
import { CircularProgress, CircularProgressLabel } from '@chakra-ui/react'
import { Flex, Spacer, Box } from '@chakra-ui/react'
const pokeMap = () => {
  return (
    <Fragment>
      <Flex>
        <Box p="4" bg="red.400" margin="10px">
          Box 1
        </Box>
        <Spacer />
        <Box p="4" bg="green.400" margin="10px">
          Box 2
        </Box>
      </Flex>
      <Link href="/battle">BATTLE PAGE</Link>
    </Fragment>
  )
}
export default pokeMap
