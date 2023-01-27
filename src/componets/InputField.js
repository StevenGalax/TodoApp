import React from "react";

const InputField = ({ onSubmit, onChange, value }) => {

    return (
        <form onSubmit={onSubmit} className='Input'>
            <input
                value={value}
                onChange={onChange}
            />
            <button className="btn">Add to List</button>
        </form>
    )
}

export default InputField;