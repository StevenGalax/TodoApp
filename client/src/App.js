import React, { useEffect, useState, useCallback } from 'react';

import './App.css';
import List from './componets/List';
import InputField from './componets/InputField';
import data from './data.json'
import axios from 'axios';



function App() {

  const [list, setList] = useState(data)
  const [item, setItem] = useState('')

  const fetchTask = async () => {
    return await axios.get('/api/task')
      .then((res) => setList(res.data))
  }

  const postTask = async () => {
    return axios
      .post('/api/task', {
        id: list.length += Math.floor(Math.random() * 1000), task: item, complete: false
      })
  }

  useEffect(() => {
    fetchTask()
    // postTask()
  }, [])


  function handelOnSubmit(e) {
    // const newItem = { task: item, complete: false };
    postTask()
    e.preventDefault();
    fetchTask()
    // setList([...list, { id: list.length += Math.floor(Math.random() * 1000), ...newItem }])
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
      Here Goes components
      <InputField className='Input' onSubmit={handelOnSubmit} onChange={handelOnChange} value={item} />
      <List todoList={list} onClick={handelOnClick} handleFiltered={handleFilter} />
      <p>{ }</p>
    </div>
  )
}

export default App;
