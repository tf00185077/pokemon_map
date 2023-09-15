import {
  Text,
  Highlight,
  Heading,
  Grid,
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  StackDivider,
  Stack,
} from '@chakra-ui/react'
import { useContext, useEffect, useState } from 'react'
import { BestSkillContext } from '@/store/best_skill_context'

const BattleAnalysis = (props) => {
  const { bestSkill, setBestSkill } = useContext(BestSkillContext)
  const [commonDataString, setCommonDataString] = useState('尚無技能')
  const [chargedDataString, setChargedDataString] = useState('尚無技能')

  useEffect(() => {
    if (
      bestSkill &&
      Object.keys(bestSkill).length > 0 &&
      bestSkill['bestCommonSkill'] &&
      Object.keys(bestSkill['bestCommonSkill']).length > 0 &&
      bestSkill['bestCommonSkill'].theBestDamageData &&
      bestSkill['bestChargedSkill'] &&
      Object.keys(bestSkill['bestChargedSkill']).length > 0 &&
      bestSkill['bestChargedSkill'].theBestChargedDamageData
    ) {
      setCommonDataString(bestSkill['bestCommonSkill'].theBestDamageData.name)
      setChargedDataString(
        bestSkill['bestChargedSkill'].theBestChargedDamageData.name,
      )
      console.log(commonDataString, '基礎技能')
      console.log(bestSkill, '充能技能')
    }
  }, [bestSkill, commonDataString, chargedDataString])

  return (
    <>
      {props.type != 'mine' ||
        (bestSkill && Object.keys(bestSkill).length > 0 && (
          <Card p={5} minWidth={600} mt={10}>
            <Grid gap={6} mt={6}>
              <CardHeader>
                <Heading size="xl">Summary</Heading>
              </CardHeader>
              <Card>
                <CardBody>
                  <Stack divider={<StackDivider />} spacing="4">
                    <Heading lineHeight="tall" size="xl">
                      <Highlight
                        query={`${commonDataString}`}
                        styles={{
                          px: '1',
                          py: '1',
                          rounded: 'full',
                          color: 'yellow.200',
                        }}
                      >
                        {`The most effective move skill is ${commonDataString}`}
                      </Highlight>
                    </Heading>
                    <Heading lineHeight="tall" size="xl">
                      <Highlight
                        query={`${chargedDataString}`}
                        styles={{
                          px: '2',
                          py: '1',
                          rounded: 'full',
                          color: 'red.100',
                        }}
                      >
                        {`The most effective charge skill is ${chargedDataString}`}
                      </Highlight>
                    </Heading>
                  </Stack>
                </CardBody>
              </Card>
            </Grid>
          </Card>
        ))}
    </>
  )
}

export default BattleAnalysis
