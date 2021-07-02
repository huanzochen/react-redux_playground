import { configureStore } from '@reduxjs/toolkit'
import counterReducer from '../features/counter/counterSlice'
import mycounterReducer from '../features/mycounter/mycounterSlice'
import repoReducer from '../features/github/repoSlice'
import infinitescrollsReducer from '../features/infinitescroll/infinitescrollSlice'

export const store = configureStore({
  reducer: {
    counter: counterReducer,
    mycounter: mycounterReducer,
    repos: repoReducer,
    infinitescrolls: infinitescrollsReducer
  },
})
