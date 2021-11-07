import { useDispatch, useSelector } from 'react-redux'
import { decrease, increase } from '../action/countAction'

export const CounterPage = () => {
  const count = useSelector((state) => state.count)
  const dispatch = useDispatch()
  const { result } = count

  const handleDecrement = () => {
    dispatch(decrease())
  }
  const handleIncrease = () => {
    dispatch(increase())
  }
  return (
    <>
      <h1>Result: {result}</h1>
      <button onClick={handleDecrement}>Decrease - </button>
      <button onClick={handleIncrease}>Increase + </button>
    </>
  )
}
