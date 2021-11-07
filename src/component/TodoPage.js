import todoData from '../dummyData/todoData'
import { useState } from 'react'
import { useDispatch } from 'react-redux'
import { useSelector } from 'react-redux'
import { addNewTodo, deleteTodo } from '../action/todoAction'
export const TodoPage = () => {
  const [newTodo, setNewTodo] = useState('')
  const dispatch = useDispatch()
  const todo = useSelector((state) => state.todo)
  const { listTodo } = todo
  console.log('todo', todo)
  const randomId = () => {
    return 1000 + Math.trunc(Math.random() * 9000)
  }

  const handleAddNewTodo = () => {
    dispatch(addNewTodo({ id: randomId(), title: newTodo }))
  }

  const handleDeleteTodo = (id) => {
    dispatch(deleteTodo({ id }))
  }

  return (
    <>
      <h1>To do list</h1>
      <input placeholder='To do' onChange={(e) => setNewTodo(e.target.value)} />
      <button onClick={handleAddNewTodo}>Add to do</button>
      <ul style={{ listStyle: 'none' }}>
        {listTodo.map((item) => (
          <li key={item.id}>
            {item.title}
            <button onClick={() => handleDeleteTodo(item.id)}>Delete</button>
          </li>
        ))}
      </ul>
    </>
  )
}
