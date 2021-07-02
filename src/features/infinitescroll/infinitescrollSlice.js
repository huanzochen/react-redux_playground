import { createSlice, createEntityAdapter, createAsyncThunk } from '@reduxjs/toolkit'
import { mycounterSlice } from '../mycounter/mycounterSlice'

const fakeDataAdapter = createEntityAdapter()

const initialState = fakeDataAdapter.getInitialState({
  isLoading: false,
  hasMoreData: false,
  status: 'idle',
  page:1
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
  reducers: {},
  extraReducers: {
    [getFakeData.pending]: (state, action) => {
      state.status = 'loading'
      state.isLoading = true
    },
    [getFakeData.fulfilled]: (state, action) => {
      state.status = 'succeeded'
      state.isLoading = false
      console.log(action.payload)
      fakeDataAdapter.upsertMany(state, action.payload)
    },
    [getFakeData.rejected]: (state, action) => {
      state.status = 'failed'
      console.log(action)
      console.log(action.error.message)
    }
  }
})

export const { } = infinitescrollSlice.actions

export default infinitescrollSlice.reducer

export const {
  selectIds: selectDataIds,
  selectById: selectDataById
} = fakeDataAdapter.getSelectors(state => state.infinitescrolls)