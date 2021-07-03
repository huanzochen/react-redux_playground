import { createSlice, createEntityAdapter, createAsyncThunk, createSelector } from '@reduxjs/toolkit'
import { mycounterSlice } from '../mycounter/mycounterSlice'

const fakeDataAdapter = createEntityAdapter()

const initialState = fakeDataAdapter.getInitialState({
  status: 'idle',
  pagination: 1
})

export const getFakeData = createAsyncThunk('infinitescroll/get', async() => {
  let headersList = {
    'Accept': 'application/vnd.github.v3+json',
    'User-Agent': 'Thunder Client (https://www.thunderclient.io)'
  }
  const response = await fetch('https://api.github.com/users/huanzochen/repos?sort=pushed', { 
    method: 'GET',
    headers: headersList
  })
  return await response.json()
})

export const infinitescrollSlice = createSlice({
  name: 'infinitescroll',
  initialState,
  reducers: {
    nextPage: {
      reducer(state, action) {
        state.pagination++
      }
    }
  },
  extraReducers: {
    [getFakeData.pending]: (state, action) => {
      state.status = 'loading'
    },
    [getFakeData.fulfilled]: (state, action) => {
      state.status = 'succeeded'
      fakeDataAdapter.upsertMany(state, action.payload)
    },
    [getFakeData.rejected]: (state, action) => {
      state.status = 'failed'
      console.log(action.error.message)
    }
  }
})

export const { nextPage, moreData, noData } = infinitescrollSlice.actions

export default infinitescrollSlice.reducer

export const {
  selectIds: selectDataIds,
  selectById: selectDataById
} = fakeDataAdapter.getSelectors(state => state.infinitescrolls)

export const selectDataIdsPart = createSelector(
  selectDataIds, 
  (state, pagination) => pagination,
  (dataIds, pagination) => {
    return dataIds.slice(0, pagination * 10)
  }
)