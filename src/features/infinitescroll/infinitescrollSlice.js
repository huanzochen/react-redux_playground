import { createSlice } from '@reduxjs/toolkit'
import { mycounterSlice } from '../mycounter/mycounterSlice'

const initialState = {
  fakeData:['sadassa', 'sadassa', 'sadassa', 'sadassa', 'sadassa', 'sadassa',
    'sadassa', 'sadassa', 'sadassa', 'sadassa', 'sadassa', 'sadassa', 'sadassa', 'sadassa', 'sadassa', 'sadassa',
    'sadassa', 'sadassa', 'sadassa', 'sadassa', 'sadassa', 'sadassa', 'sadassa', 'sadassa', 'sadassa', 'sadassa',
    'sadassa', 'sadassa', 'sadassa', 'sadassa', 'sadassa', 'sadassa', 'sadassa', 'sadassa', 'sadassa', 'sadassa',
    'sadassa', 'sadassa', 'sadassa', 'sadassa', 'sadassa', 'sadassa', 'sadassa', 'sadassa', 'sadassa', 'sadassa',
    'sadassa', 'sadassa', 'sadassa', 'sadassa', 'sadassa', 'sadassa', 'sadassa', 'sadassa', 'sadassa', 'sadassa',
    'sadassa', 'sadassa', 'sadassa', 'sadassa', 'sadassa', 'sadassa', 'sadassa', 'sadassa', 'sadassa', 'sadassa',
    'sadassa', 'sadassa', 'sadassa', 'sadassa', 'sadassa', 'sadassa', 'sadassa', 'sadassa', 'sadassa', 'sadassa',
    'sadassa', 'sadassa', 'sadassa', 'sadassa', 'sadassa', 'sadassa', 'sadassa', 'sadassa', 'sadassa', 'sadassa',
    'sadassa', 'sadassa', 'sadassa', 'sadassa', 'sadassa', 'sadassa', 'sadassa', 'sadassa', 'sadassa', 'sadassa',
    'sadassa', 'sadassa', 'sadassa', 'sadassa', 'sadassa'],
  value: 0,
  status: 'idle',
}

export const infinitescrollSlice = createSlice({
  name: 'infinitescroll',
  initalState,
  reducers: {}
})

export const { decrement, increment } = infinitescrollSlice.actions
export default infinitescrollSlice.reducer