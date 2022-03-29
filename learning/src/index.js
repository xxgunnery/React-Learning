import ReactDOM from 'react-dom'
import './index.css'

import {MoshES6} from './practice/Mosh.js'
import {Ziroll} from './practice/Ziroll.js'

function Button() {
  function clearConsole(e) {
    e.preventDefault()
    console.clear()
  }
  return (
      <div className="buttonContainer">
        <div className="commands">COMMANDS: </div>
        <div className="clearButton" onClick={clearConsole}>CLEAR CONSOLE</div>
      </div>
  )
}

function ReactZir() {
    return (
    <div>
      {Ziroll.App()}
    </div>
  )
}
function ES6() {
  return (
    <div>
      {MoshES6.varReplacements("varReplacements")}
      {MoshES6.objects("objects")}
      {MoshES6.thisKeyword("thisKeyword")}
      {MoshES6.binding("binding")}
      {MoshES6.arrow("arrow")}
      {MoshES6.arrowThis("arrowThis")}
      {MoshES6.arrayMap("arrayMap")}
      {MoshES6.objDest("objDest")}
      {MoshES6.spread("spread")}
      {MoshES6.classes("classes")}
    </div>
  )
}
function Module() {
  return (
    <div className="container">
        <Button />
        <ReactZir />
    </div>
  )
}

ReactDOM.render(<Module />, document.getElementById("root"))

