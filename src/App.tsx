import React from 'react'
import { Route, Routes } from 'react-router-dom'
import { Provider } from 'react-redux'
import store from './store'
import Home from './components/home'
import Login from './views/login'
import './assets/style/index.scss'
import 'antd/dist/antd.css';

const App = () => {
  return (
    <Provider store={store}>
      <Routes>
        <Route element={<Login/>}
          path="/login"
        />
        <Route element={<Home/>}
          path="*"
        />
      </Routes>
    </Provider>
  )
}

export default App
