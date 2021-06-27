import { configureStore } from '@reduxjs/toolkit'
import counterReducer from '../features/counter/counterSlice'
import mycounterReducer from '../features/mycounter/mycounterSlice'
import githubReducer from '../features/github/githubSlice'

export const store = configureStore({
  reducer: {
    counter: counterReducer,
    mycounter: mycounterReducer,
    github: githubReducer
  },
})
