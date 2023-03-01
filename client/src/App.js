import React, { useEffect, useState } from 'react';

import './App.css';
import List from './componets/List';
import InputField from './componets/InputField';
import axios from 'axios';



function App() {

  const [list, setList] = useState([]);
  const [item, setItem] = useState('');

  const fetchTask = async () => {
    return await axios.get('/api/task')
      .then((res) => setList(res.data));
  }

  const postTask = async () => {
    return await axios
      .post('/api/task', {
        id: list.length += Math.floor(Math.random() * 1000), task: item, complete: false
      })
      .then(res => res.data)
  }

  const updateTask = async (id, completed) => {
    return await axios
      .patch('/api/task', {
        id: id,
        complete: completed
      })
      .then(res => res);
  }

  // const deleteTask = async () => {
  //   return await axios
  //     .delete('/api/task', {

  //     })
  // }

  useEffect(() => {
    fetchTask()
  }, []);


  async function handelOnSubmit(e) {
    e.preventDefault();
    const updateATask = await postTask();
    setList(updateATask);
    setItem('');
  }

  function handelOnChange(e) {
    setItem(e.target.value);
  }

  async function handelOnClick(_id) {
    let mapped = list.map(task => {
      return task._id === _id ? { ...task, completed: !task.completed } : { ...task };
    });
    let obj = mapped.find(o => o._id === _id);
    await updateTask(_id, obj.completed);
    setList(mapped);
  }

  const handleFilter = () => {
    let filtered = list.filter(task => {
      return !task.completed;
    });
    setList(filtered);
  }

  return (
    <div className='main'>
      Here Goes components
      <InputField className='Input' onSubmit={handelOnSubmit} onChange={handelOnChange} value={item} />
      <List todoList={list} onClick={handelOnClick} handleFiltered={handleFilter} />
    </div>
  )
}

export default App;
