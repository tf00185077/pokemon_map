import { Select } from '@chakra-ui/react'
import { useContext, useEffect } from 'react'
import { PokeDataContext } from '../../../store/poke_data_context_provider'
import { ChooseNoContext } from '../../../store/choose_id_context'
const ChoosePoke = (props) => {
  const pokemonData = useContext(PokeDataContext)

  const { dispatchChoole } = useContext(ChooseNoContext)
  const changeHandler = (e) => {
    dispatchChoole({ type: props.type, value: e.target.value })
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
