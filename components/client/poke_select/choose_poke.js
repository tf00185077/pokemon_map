import { Select } from '@chakra-ui/react'
import { useContext, useEffect } from 'react'
import { PokeDataContext } from '../../../store/poke_data_context_provider'
import { useChooseNoContext } from '../../../store/choose_id_context'
const ChoosePoke = () => {
  const pokemonData = useContext(PokeDataContext)

  const { setChoose } = useChooseNoContext()
  // console.log(useChooseNoContext)
  const changeHandler = (e) => {
    setChoose(e.target.value)
  }
  return (
    <Select bg="gray.100" placeholder="" mt={5} onChange={changeHandler}>
      {pokemonData &&
        pokemonData.map((data) => {
          return (
            <option key={data.id} value={data.id}>
              {data.id}.{data.name}
            </option>
          )
        })}
    </Select>
  )
}
export default ChoosePoke
