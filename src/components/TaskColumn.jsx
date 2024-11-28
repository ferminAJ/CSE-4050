import React from 'react'
import './TaskColumn.css'
import ToDo from "../assets/RedPoint.png"
import TaskCard from './TaskCard'
const TaskColumn = (props) => {
  return (
    <div>
      <section className='task_column'>
        <h2 className='task_column_heading'>
            <img className='task_column_icon' src={props.icon} alt="" />
            {props.title}
        </h2>

        <TaskCard></TaskCard>
      </section>
    </div>
  )
}

export default TaskColumn
