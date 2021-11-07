const initialState = {
  result: 0,
  test: '123'
}

export const counterReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'INCREMENT':
      return {
        result: state.result + action.payload || state.result + 1
      }
    case 'DECREMENT':
      return {
        result: state.result - action.payload || state.result - 1
      }

    default:
      return state
  }
}
