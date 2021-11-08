import todoData from '../dummyData/todoData'

const initialState = {
  listTodo: todoData
}

export const todoReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'ADD_NEW_TODO': {
      const newList = [...state.listTodo]
      newList.splice(0, 0, action.payload)
      return {
        ...state,
        listTodo: newList
      }
    }
    case 'DELETE_TODO': {
      const newList = [...state.listTodo]
      const index = newList.findIndex((item) => item.id === action.payload.id)
      newList.splice(index, 1)
      // newList.filter(item => item.id!==action.payload.id)
      return {
        ...state,
        listTodo: newList
      }
    }
    default:
      return state
  }
}
