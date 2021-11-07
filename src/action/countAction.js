export const increase = (number) => {
  return {
    type: 'INCREMENT',
    payload: number
  }
}

export const decrease = (number) => {
  return {
    type: 'DECREMENT',
    payload: number
  }
}
