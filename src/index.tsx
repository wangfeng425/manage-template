import React, { Suspense } from 'react'
import ReactDOM from 'react-dom'
import App from './App'
import { HashRouter } from 'react-router-dom'

ReactDOM.render(
  <HashRouter>
    <Suspense fallback={<div></div>}>
      <App />
    </Suspense>
  </HashRouter>,
  document.getElementById('root')
)
