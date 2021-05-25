import { createSlice } from '@reduxjs/toolkit'
import { counterSlice } from '../counter/counterSlice'

const initialState = {
  value: 0,
  status: 'idle',
}


export const mycounterSlice = createSlice({
  name: 'mycounter',
  initialState,
  reducers: {
    decrement: (state) => {
      state.value = state.value - 1
    },
    increment: (state) => {
      state.value = state.value + 1
    }
  }
})

export const { decrement, increment } = mycounterSlice.actions

export default mycounterSlice.reducer