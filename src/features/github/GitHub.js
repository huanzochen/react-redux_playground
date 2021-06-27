import React, { useState, useEffect } from 'react'
import styled from 'styled-components'
import { useSelector, useDispatch } from 'react-redux'
import { 
  fetchRepos 
} from './githubSlice'

let RepoList = ({ repo }) => {
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
  const repoStatus = useSelector(state => state.github.repoStatus)
  const repos = useSelector(state => state.github.repos)
  const error = useSelector(state => state.github.error)

  useEffect(() => {
    if (repoStatus === 'idle') {
      dispatch(fetchRepos())
    }
  })

  let content
  if (repoStatus === 'loading') {
    content = <div className='repo'> loading </div>
  } 
  else if (repoStatus === 'succeeded') {
    content = repos.map(repo => <RepoList key={repo.id} repo={repo}></RepoList>)
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