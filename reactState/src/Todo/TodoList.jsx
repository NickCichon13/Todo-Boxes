import React, {useState} from "react";
import Task from "./Task"
import NewTodoForm from "./TodoForm";
import { v4 as uuid } from 'uuid'

const TodoList = () => {
    const [task, setTask] = useState('');
    const addTask = (task) => {
        setTask(tasks => [tasks, {...newTasks, id: uuid()}] )
    }
    
    return (
        <div>
            
        <h3>To Do List!</h3>
        <NewTodoForm addTask={addTask}/>
        <div>
            {task.map(({id, task}) => <Task id={id} task={task} key={id}/> )}
        </div>

       </div>
    )
}

export default TodoList;