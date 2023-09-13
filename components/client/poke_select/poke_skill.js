import { List, ListItem, ListIcon, Grid, Flex, Text } from '@chakra-ui/react'
import { StarIcon } from '@chakra-ui/icons'
const Skill = () => {
  return (
    <Grid mt={10}>
        <Text fontSize="3xl">基礎招式</Text>
    <List spacing={3} >
      <Grid mt={3}>
        <ListItem>
          <Grid templateColumns="20px 1fr 40px">
            <Flex align="center" justify="center"></Flex>
            <Text>水槍</Text>
            <Text>66</Text>
          </Grid>
        </ListItem>
        <ListItem>
          <Grid templateColumns="20px 1fr 40px">
            <Flex align="center" justify="center">
              <ListIcon as={StarIcon} color="green.500" />
            </Flex>
            <Text>跳樓</Text>
            <Text>6</Text>
          </Grid>
        </ListItem>
        <ListItem>
          <Grid templateColumns="20px 1fr 40px">
            <Flex align="center" justify="center"></Flex>
            <Text>火槍</Text>
            <Text>6</Text>
          </Grid>
        </ListItem>
      </Grid>
    </List>
    </Grid>
  )
}
export default Skill
