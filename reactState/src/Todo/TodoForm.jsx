import React, {useState} from "react";

const NewTodoForm = ({addTask}) => {
    const INITIAL_STATE = {
        task: '' 
    }
    const [formData, setFormData] = useState(INITIAL_STATE);
    const [newTask, setNewTask] = useState(tasks.description)
    const handleChange = (e) => {
        const{task, value} = e.target;
        setFormData(formData => ({
            ...formData,
            [task]: value
        }));
    }
    const handleSubmit =(e) => {
        e.preventDefault();
        addTask(formData.task)
        setFormData(INITIAL_STATE)

    }

    function deletTodo(id){
        setFormData([...tasks].filter(task => task.id !== id));
    }
    
    return (
        <form onSubmit={handleSubmit}>
            <label htmlFor="task">Task</label>
            <input 
            id="task"
            type="text" 
            name="task" 
            placeholder="Todo Maker"
            value={formData.task}
            onChange={handleChange}
            />
            <button>Add Task</button>
            <button onClick={() => deletTodo(task.id)} 
                className="x-button"></button>
        
        <form onSubmit={(handleSubmit)}>
            <input
            className="input"
            value={newTask}
            onChange={(e) => setNewTask(e.target.value)}
            placeholder="Edit your Task"
            />
        </form>
                
        </form>
        )
    }

export default NewTodoForm;