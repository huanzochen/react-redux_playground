import React, { useReducer } from 'react'
import { reducer, initialState } from './reducer'

const Counter = () => {
  const [state, dispatch] = useReducer(reducer, initialState)
  return (
    <React.Fragment>
      Count: {state.count}
      <button onClick={() => dispatch({ type: 'decrement' })}> - </button>
      <button onClick={() => dispatch({ type: 'increment' })}> + </button>
    </React.Fragment>
  )
}

export default Counter
