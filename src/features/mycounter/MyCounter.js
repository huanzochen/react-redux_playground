import React from 'react'
import styled from 'styled-components'
import { useSelector, useDispatch } from 'react-redux'
import { decrement, increment } from './mycounterSlice'

const AddButton = styled.button``

function MyCounter() {
  const mycountValue = useSelector((state) => state.mycounter.value)
  const dispatch = useDispatch()

  return (
    <div>
      <button type="button" onClick={() => dispatch(decrement())}>
        -
      </button>
      <span>{mycountValue}</span>
      <AddButton type="submit" onClick={() => dispatch(increment())}>
        +
      </AddButton>
    </div>
  )
}

export default MyCounter
