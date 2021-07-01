import React, { useState, useEffect } from 'react'
import styled from 'styled-components'
import { useSelector, useDispatch } from 'react-redux'
import { unwrapResult } from '@reduxjs/toolkit'

import { 
  fetchRepos,
  selectAll,
  selectAllRepos,
  selectRepoById,
  selectRepoIds,
} from './repoSlice'

let RepoList = ({ repoId }) => {
  const repo = useSelector(state => selectRepoById(state, repoId))
  return (
    <div>
      <div>
        {repo.name}
      </div>
      <div>
        {repo.full_name} 
      </div>
    </div>
  )
}

function GitHub() {
  const dispatch = useDispatch()
  const repoStatus = useSelector(state => state.repos.repoStatus)
  const error = useSelector(state => state.repos.error)
  const reposId = useSelector(selectRepoIds)

  useEffect(() => {
    async function initalize() {
      if (repoStatus === 'idle') {
        const result = await dispatch(fetchRepos())
        console.log(unwrapResult(result))
      }
    }
    initalize()

  })

  let content
  if (repoStatus === 'loading') {
    content = <div className='repo'> loading </div>
  } 
  else if (repoStatus === 'succeeded') {
    content = reposId.map(repoId => <RepoList key={repoId} repoId={repoId}></RepoList>)
  }
  else if (repoStatus === 'failed') {
    content = <div className='repo'> {error} </div>
  }

  return (
    <div>
      {content}
    </div>
  )
}

export default GitHub

// References
// https://docs.github.com/en/rest