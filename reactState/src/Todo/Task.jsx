import React, {useState} from "react";

const Task = ({id, tasks}) => {
    
    return (
        <ul>
            <li>Task to do:{tasks}</li>
        </ul>
    )
}

export default Task;