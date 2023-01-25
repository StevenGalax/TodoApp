import React, { useState } from 'react';

import './App.css';
import List from './componets/List';
import InputField from './componets/InputField';
import data from './data.json'



function App() {

  const [list, setList] = useState(data)
  const [item, setItem] = useState('')

  function handelOnSubmit(e) {
    e.preventDefault();
    setList([...list, { id: list.length += Math.floor(Math.random() * 1000), task: item, complete: false }])
    setItem('')
  }

  function handelOnChange(e) {
    setItem(e.target.value);
  }

  function handelOnClick(id) {
    let mapped = list.map(task => {
      return task.id == id ? { ...task, complete: !task.complete } : { ...task };
    });
    setList(mapped);
  }

  const handleFilter = () => {
    let filtered = list.filter(task => {
      return !task.complete;
    });
    setList(filtered);
  }

  return (
    <div className='main'>
      Here Goes componets
      <InputField className='Input' onSubmit={handelOnSubmit} onChange={handelOnChange} value={item} />
      <List todoList={list} onClick={handelOnClick} handleFiltered={handleFilter} />
    </div>
  )
}

export default App;
