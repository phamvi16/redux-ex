import { combineReducers, createStore } from 'redux'
import { counterReducer } from './reducer/countReducer'
import { todoReducer } from './reducer/todoReducer'
import { devToolsEnhancer } from 'redux-devtools-extension'
const rootReducer = combineReducers({
  count: counterReducer,
  todo: todoReducer
})

const store = createStore(rootReducer, devToolsEnhancer())

export default store
