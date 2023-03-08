import React from "react";

const InputField = ({ onSubmit, onChange, value }) => {

    return (
        <form onSubmit={onSubmit} className='Input'>
            <input
                value={value}
                onChange={onChange}
                name="task"
            />
            <button className="btn btn-success mb-3">Add to List</button>
        </form>
    );
}

export default InputField;