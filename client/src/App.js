import Task from './pages/Task'
import { Routes, Route } from 'react-router-dom';
import NavBar from './componets/NavBar/NavBar';



function App() {

  function Home() {
    return (
      <h1>Home</h1>
    );
  }

  return (
    <>
      <NavBar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/TodoApp' element={<Task />} />
      </Routes>
    </>
  )
}

export default App;
