'use client'
import {
  IconButton,
  Input,
  InputGroup,
  InputLeftElement,
  InputRightElement,
  Button,
  ButtonGroup,
} from '@chakra-ui/react'
import { SearchIcon, ArrowForwardIcon } from '@chakra-ui/icons'
const SearchBar = () => {
  return (
    <InputGroup>
      <InputLeftElement>
        <IconButton
          colorScheme="gray"
          aria-label="Search database"
          icon={<SearchIcon />}
        />
      </InputLeftElement>
      <Input
        paddingLeft="50px"
        color="black"
        type="tel"
        placeholder="Poke no. or Name"
      />
      {/* <InputRightElement >
    <Button rightIcon={<ArrowForwardIcon />} colorScheme='teal' variant='outline'>
    </Button>
    </InputRightElement> */}
    </InputGroup>
  )
}
export default SearchBar
