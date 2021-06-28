import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import { createEntityAdapter } from '@reduxjs/toolkit'

const reposAdapter = createEntityAdapter()

const initialState = reposAdapter.getInitialState({
  repoStatus: 'idle',
  error: 'null'
})

export const fetchRepos = createAsyncThunk('github/fetchRepos', async() => {
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

const repoSlice = createSlice({
  name:'repo',
  initialState,
  reducers: {

  },
  extraReducers: {
    [fetchRepos.pending]:(state, action) => {
      state.repoStatus = 'loading'
    },
    [fetchRepos.fulfilled]:(state, action) => {
      state.repoStatus = 'succeeded'
      reposAdapter.upsertMany(state, action.payload)
    },
    [fetchRepos.rejected]:(state, action) => {
      state.repoStatus = 'failed'
      state.error = action.error.message
    }
  }
})

export const {} = repoSlice.actions

export default repoSlice.reducer

export const { 
  selectAll: selectAll,
  selectEntities: selectAllRepos,
  selectById: selectRepoById,
  selectIds: selectRepoIds
} = reposAdapter.getSelectors(state => state.repos)