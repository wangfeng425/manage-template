import { GET_PRODUCT, ADD_TODO, DELETE_TODO } from './constants'
import { getHotProduct } from '@/service/api/product'
import { Dispatch } from 'react'

export const addTodo = (res: string | number) => ({
  type: ADD_TODO,
  input: res
})

export const deleteTodo = (res: number) => ({
  type: DELETE_TODO,
  index: res
})

export const getProduct = () => {
  console.log(GET_PRODUCT)
  var classifyaction = (value: any) => ({
    type: GET_PRODUCT,
    data: value
  })

  return async (dispatch: Dispatch<any>) => {
    // 异步在这个函数里面去做的
    const data = await getHotProduct();
    dispatch(classifyaction(data));
  }
}
