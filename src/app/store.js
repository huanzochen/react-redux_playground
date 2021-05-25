import { configureStore } from '@reduxjs/toolkit'
import counterReducer from '../features/counter/counterSlice'
import mycounterReducer from '../features/mycounter/mycounterSlice'

export const store = configureStore({
  reducer: {
    counter: counterReducer,
    mycounter: mycounterReducer
  },
})
