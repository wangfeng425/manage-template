import { combineReducers } from 'redux'
import { todoReducer, productReducer } from '@/views/useRedux/store/index'

const cReducer = combineReducers({
  todoList: todoReducer,
  product: productReducer
})

export default cReducer