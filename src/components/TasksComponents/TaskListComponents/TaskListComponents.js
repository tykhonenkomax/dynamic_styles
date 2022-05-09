import React from 'react';

import {TaskComponents} from "../TaskComponents";
import './TaskList.css'

const TaskListComponents = (props) => {
    return (
        <ul className="task-list">
            {props.items.map((task) => (
                <TaskComponents key={task.id} id={task.id} onDelete={props.onDeleteTask}>
                    {task.text}
                </TaskComponents>
            ))}
        </ul>
    );
};

export {TaskListComponents};