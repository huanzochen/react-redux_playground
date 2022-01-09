import mycounterReducer, { decrement, increment } from './mycounterSlice'

describe('mycounter reducer', () => {
  const initialState = {
    value: 5,
    status: 'idle',
  }
  it('正確地將 state 初始化', () => {
    expect(mycounterReducer(undefined, { type: 'unknown' })).toEqual({
      value: 0,
      status: 'idle',
    })
  })

  it('正確 handle increment', () => {
    const actual = mycounterReducer(initialState, increment())
    expect(actual.value).toEqual(6)
  })

  it('正確 handle decrement', () => {
    const actual = mycounterReducer(initialState, decrement())
    expect(actual.value).toEqual(4)
  })
})
