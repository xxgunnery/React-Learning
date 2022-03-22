import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'

import {moshES6} from './practice/Mosh.js'

function Module() {
  return (
    moshES6.exports()
  )
}

ReactDOM.render(<Module />, document.getElementById("root"))

