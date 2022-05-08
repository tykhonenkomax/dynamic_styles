import React from 'react';
import './Button.css'

const ButtonComponents = (props) => {
    return (
        <button type={props.type} className="button">
            {props.children}
        </button>
    );
};

export {ButtonComponents};