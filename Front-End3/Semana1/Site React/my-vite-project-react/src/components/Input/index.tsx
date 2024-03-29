import React from "react";

interface InputProps {
    name: string;
    placeholder: string;
    type: string;
    label: string;
    id: string;
};

const Input: React.FC<InputProps> = ({ label, name, placeholder, type, id }) => {
    return (
        <div>
            <label htmlFor={id}>{label}</label>
            <input type={type} placeholder={placeholder} id={id} name={name}/>
        </div>
    );
};

export default Input;