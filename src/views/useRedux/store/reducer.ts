import { ADD_TODO, DELETE_TODO, GET_PRODUCT } from './constants'
interface actionType {
  type: string,
  input: string | number,
  index: number
}
const defaultTodo: (number | string)[] = [1, 2, 3, '4']

const todoReducer = (state = defaultTodo, action: actionType) => {
  if (action.type === ADD_TODO) {
    const newState = JSON.parse(JSON.stringify(state))
    newState.push(action.input)
    return newState
  } else if (action.type === DELETE_TODO) {
    const newState = JSON.parse(JSON.stringify(state))
    newState.splice(action.index, 1)
    return newState
  } else {
    return state
  }
}

interface productAction {
  type: string,
  data: any
}
const defaultProduct = { data: [] }
const productReducer = (state = defaultProduct, productAction: productAction) => {
  switch (productAction.type) {
  case GET_PRODUCT:
    return productAction.data
  default:
    return state
  }
}

export {
  todoReducer,
  productReducer
}