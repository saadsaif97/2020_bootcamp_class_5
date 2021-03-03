### create context to avoid prop drilling

it is like global variable

```
import { createContext } from 'react'

export const ValueContext = createContext(45)
```

use the cotext provider to pass value to children

```
<ValueContext.Provider value={value}>
   <div className='block'>
      <Parent />
   </div>
</ValueContext.Provider>
```

we can access the context value in any child as

```
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
      </div>
  )
}
```

---

### use reducer

it is like simple version redux

define reducer as

```
export default function numberReducer(state, action) {
  switch (action.type) {
    case 'INCREMENT':
      return state + 1
    case 'DECREMENT':
      return state - 1
    default:
      return null
  }
}

```

use it as

```
let [state, dispacher] = useReducer(numberReducer, 25)
<button onClick={() => dispacher({ type: 'DECREMENT' })}>
   ↓ Decrease
</button>
<button onClick={() => dispacher({ type: 'INCREMENT' })}>
   ↑ Increase
</button>
```
