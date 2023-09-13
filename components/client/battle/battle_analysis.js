import { Text, Highlight, Heading,Grid } from '@chakra-ui/react'
const BattleAnalysis = () => {
  return (
    <Grid gap={6} mt={6}>
    <Heading lineHeight="tall">
      <Highlight 
        query="跳樓"
        styles={{ px: '3', py: '1', rounded: 'full', bg: 'yellow' }}
      >
        基礎技能跳樓是最有效的
      </Highlight>
    </Heading>
    <Heading lineHeight="tall">
      <Highlight
        query="跳樓"
        styles={{ px: '2', py: '1', rounded: 'full', bg: 'red.100' }}
      >
        充能技能跳樓是最有效的
      </Highlight>
    </Heading>
    </Grid>
  )
}
export default BattleAnalysis
