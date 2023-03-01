import React from "react";

import "./List.css";

function List({ todoList, onClick, handleFiltered }) {

    const handleClick = (e) => {
        onClick(e.currentTarget.id)
    };

    const showList = todoList.map(x =>
        <li id={x._id} className={x.completed ? 'complete' : ''} key={x._id} onClick={handleClick}>
            {x.task}
        </li>
    );

    return (
        <div className="List">
            <h2>List</h2>
            <button onClick={handleFiltered}>Delete Completed Task</button>
            <p className="Task">{showList}</p>
        </div>
    );

}
export default List