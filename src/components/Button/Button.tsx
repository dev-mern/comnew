import React from 'react';
import "./button.css"

interface ButtonProp{
    lebel: string
}

const Button = ({lebel}:ButtonProp) => {
    return (
        <button>{lebel}</button>
    );
};

export default Button;