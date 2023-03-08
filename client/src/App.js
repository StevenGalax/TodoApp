import React, { useEffect, useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'

import './App.css';
import List from './componets/List/List';
import InputField from './componets/InputField/InputField';
// import NavBar from './componets/NavBar/NavBar';
// import Container from 'react-bootstrap/Container'
import axios from 'axios';
import NavBar from './componets/NavBar/NavBar';



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

  const deleteTask = async () => {
    return await axios
      .delete('/api/task', {
        complete: false
      })
      .then(res => res)
  }

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
    deleteTask()
    setList(filtered);
  }

  return (
    <>
      <NavBar />
      <div className='main'>
        <InputField className='Input' onSubmit={handelOnSubmit} onChange={handelOnChange} value={item} />
        <List todoList={list} onClick={handelOnClick} handleFiltered={handleFilter} />
      </div>
    </>
  )
}

export default App;
