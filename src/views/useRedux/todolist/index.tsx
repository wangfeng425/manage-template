import React from 'react'
import { Card } from 'antd'

import Todo from './../component/todoList'

const todolist = () => {
  return (
    <div className="pt10">
      <Card bordered={false}
        title="redux使用">
        <span>触发视图产生一个动作事件，调用dispatch方法，dispatch发送一个action给Store，Store会自动调用Reducer，Reducer返回一个新的状态给Store。子Reducer太多，可以采用combineReducers进行合并。新版本的react-redux提供了useDispatch, useSelector去操作和获取。（老版本可以使用connect）</span>
      </Card>
      <Todo/>
    </div>
  )
}

export default todolist