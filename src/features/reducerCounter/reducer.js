export const initialState = {
  count: 0,
}

export const reducer = (state, action) => {
  const {
    type,
    //  payload
  } = action
  switch (type) {
    case 'increment':
      return { count: state.count + 1 }
    case 'decrement':
      return { count: state.count - 1 }
    default:
      throw new Error()
  }
}
