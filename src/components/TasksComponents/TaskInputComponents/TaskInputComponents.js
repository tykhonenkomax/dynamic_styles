import React from 'react';
import {useState} from "react";
import './TaskInput.css'

const TaskInputComponents = (props) => {

    const [inputText, setInputText] = useState("");

    const taskInputChangeHandler = (event) => {
        setInputText(event.target.value);
    };

    const formSubmitHandler = (event) => {
        event.preventDefault();
        props.onAddTask(inputText);
    };

    return (
        <form onSubmit={formSubmitHandler}>
            <div className="form-control">
                <label>Список задач:</label>
                <input type="text" onChange={taskInputChangeHandler} />
            </div>
            <button type="submit">Додати Задачу</button>
        </form>
    );
};

export {TaskInputComponents};