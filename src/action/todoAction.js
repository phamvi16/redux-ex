export const addNewTodo = (newTodo) => {
  return {
    type: 'ADD_NEW_TODO',
    payload: newTodo
  }
}

export const deleteTodo = (id) => {
  return {
    type: 'DELETE_TODO',
    payload: id
  }
}
