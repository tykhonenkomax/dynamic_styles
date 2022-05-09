import React from 'react';
import {useState} from "react";
import './TaskInput.css'

const TaskInputComponents = (props) => {

    const [inputText, setInputText] = useState("");
    const[isInputValid,setIsInputValid]=useState(true)

    const taskInputChangeHandler = (event) => {
        if (event.target.value.trim().length>0){
            setIsInputValid(true);
        }
        setInputText(event.target.value);
    };

    const formSubmitHandler = (event) => {
        event.preventDefault();
        if(inputText.trim().length===0){
            setIsInputValid(false);
            return;
        }
        props.onAddTask(inputText);
    };

    return (
        <form onSubmit={formSubmitHandler}>
            <div className={`form-control ${!isInputValid ? 'invalid': ''}`}>
                <label>Список задач:</label>
                <input type="text" onChange={taskInputChangeHandler} />
            </div>
            <button type="submit">Додати Задачу</button>
        </form>
    );
};

export {TaskInputComponents};