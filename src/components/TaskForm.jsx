import React, {useState} from 'react'
import './TaskForm.css'
import Tag from './Tag'
const TaskForm = () => {
    const [task,setTask] = useState("");
    console.log(task);
    const handleTaskChange = (event) => {
        setTask(event.target.value);
    };
    

  return (
        <header className='app_header'>Header Section
        <form>
            <input type="text" 
            className="task_input" 
            placeholder="Enter Your Task"
            onChange={handleTaskChange}
            />
            
            <div className="task_form_bottom_line">
                <div>
                    <Tag name= "Home"></Tag>
                    <Tag name= "School"></Tag>
                    <Tag name= "Work"></Tag>
                </div>
                
                <div>
                    <select className="task_status">
                        <option value="todo">To Do</option>
                        <option value="inprogress">In Progress</option>
                        <option value="completed">Completed</option>
                    </select>

                    <button type="submit" className="task_submit"> 
                        Add Task +
                    </button>
                </div>
                
            </div>
        </form>
    </header>
    )
}

export default TaskForm
