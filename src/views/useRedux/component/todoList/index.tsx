import React, { useState } from 'react'
import { Button, Input } from 'antd'
import { useDispatch, useSelector, shallowEqual } from 'react-redux'
import { addTodo, deleteTodo } from './../../store/actionCreator'
import './index.scss'

interface stateType {
  todoList: number[]
}

const Todo = () => {
  const [inputval, setInputval] = useState('666')
  const dispatch = useDispatch()

  const { todoList } = useSelector((state: stateType) => ({
    todoList: state.todoList
  }), shallowEqual)

  const add = () => {
    dispatch(addTodo(inputval))
  }

  const remove = (index: number) => {
    dispatch(deleteTodo(index))
  }

  return (
    <div className="component-todo">
      <div className="operation-line">
        <Input onChange={(e: any) => setInputval(e.target.value)}
          value={inputval}
        />
        <Button className="ml10"
          onClick={add}>增加</Button>
      </div>
      <ul>
        {
          todoList.map((item, index) =>
            <li className="todo-item"
              key={index}>{item}  <Button onClick={() => remove(index)}>删除</Button></li>
          )
        }
      </ul>
    </div>
  )
}

export default Todo
