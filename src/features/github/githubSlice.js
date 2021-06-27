import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'

const initialState = {
  repos:[],
  repoStatus: 'idle',
  error: 'null'
}

export const fetchRepos = createAsyncThunk('github/fetchRepos', async() => {
  let headersList = {
    'Accept': 'application/vnd.github.v3+json',
    'User-Agent': 'Thunder Client (https://www.thunderclient.io)'
  }
  const response = await fetch('https://api.github.com/users/huanzochen/repos', { 
    method: 'GET',
    headers: headersList
  })
  return await response.json()
})

const githubSlice = createSlice({
  name:'github',
  initialState,
  reducers: {

  },
  extraReducers: {
    [fetchRepos.pending]:(state, action) => {
      state.repoStatus = 'loading'
    },
    [fetchRepos.fulfilled]:(state, action) => {
      state.repoStatus = 'succeeded'
      state.repos = action.payload
    }
  }
})

export const {} = githubSlice.actions

export default githubSlice.reducer