import 'babel-polyfill'
import React from 'react'
import { render } from 'react-dom'
import App from './containers/App'

render(
  <div>
    <App />
  </div>,
  document.getElementById('root')
)
