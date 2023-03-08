import React from "react";
import Button from "react-bootstrap/Button"

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
            <h1>List</h1>
            <Button variant='danger' onClick={handleFiltered}>Delete Completed Task</Button>
            <p className="Task">{showList}</p>
        </div>
    );

}
export default List