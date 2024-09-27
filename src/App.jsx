import './App.css'
import Navbar from './components/Navbar'
import {Routes, Route} from 'react-router-dom'
import Home from './pages/Home'
import Plans from './pages/Plans'
import Coaching from './pages/Coaching'
import Join from './pages/Join'
import Login from './pages/Login'

function App() {


  return (
    <>
    <Navbar />
    <Routes >
      <Route path='/' element={<Home />} />
      <Route path='/training-plans' element={<Plans />} />
      <Route path='/coaching' element={<Coaching />} />
      <Route path='/login' element={<Login />} />
      <Route path='/join-us' element={<Join />} />
    </Routes>
    </>
  )
}

export default App
