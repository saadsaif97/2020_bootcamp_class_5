import { useContext, useReducer } from 'react'
import { ValueContext } from '../../contexts/ValueContext'
import numberReducer from '../../reducers/numberReducer'

export default function Child() {
  let value = useContext(ValueContext)

  let number = value[0]
  let setNumber = value[1]

  let [state, dispacher] = useReducer(numberReducer, 25)

  return (
    <div>
      <h1>Value pased from context: {value}</h1>
      <button onClick={() => setNumber(--number)}>
        ↓ Decrease Context Value
      </button>
      <button onClick={() => setNumber(++number)}>
        ↑ Increase Context Value
      </button>

      <br />

      <h1>{state}</h1>
      <button onClick={() => dispacher({ type: 'DECREMENT' })}>
        ↓ Decrease
      </button>
      <button onClick={() => dispacher({ type: 'INCREMENT' })}>
        ↑ Increase
      </button>
    </div>
  )
}
