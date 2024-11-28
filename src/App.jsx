import React from "react"
import "./App.css"
import TaskForm from "./components/TaskForm"
import TaskColumn from "./components/TaskColumn"

import ToDoIcon from './assets/RedPoint.png'
import InProgIcon from './assets/Thinking.png'
import DoneIcon from './assets/Done.png'
const App = () => {
  return (
    <div className='app'>
      <TaskForm></TaskForm>
      <main className='app_main'>
        <TaskColumn title= "To Do" icon= {ToDoIcon}></TaskColumn>
        <TaskColumn title= "In Progress" icon={InProgIcon} ></TaskColumn>
        <TaskColumn title= "Complete" icon= {DoneIcon}></TaskColumn>
      </main> 
    </div>
  )
}

export default App
