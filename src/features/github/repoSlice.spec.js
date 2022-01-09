import GitHub from './GitHub'
import Enzyme, { shallow, mount } from 'enzyme'

import repoReducer, {
  fetchRepos,
  selectAll,
  selectAllRepos,
  selectRepoById,
  selectRepoIds,
} from './repoSlice'

describe('<GitHub />', () => {
  const initialState = {
    repoStatus: 'idle',
    error: 'null',
  }

  test('repoSlice reducer', () => {
    expect(repoReducer(undefined, { type: 'unknown' })).toEqual({
      repoStatus: 'idle',
      error: 'null',
      entities: {},
      ids: [],
    })
  })

  // test('should handle fetchRepos', () => {
  //   const actual = repoReducer(initialState, fetchRepos())
  //   expect(actual.ids).toBeGreaterThan(1)
  // })
})
