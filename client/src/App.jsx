import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Signup from './Signup'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Login from './Login'
import Home from './Home'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<Signup/>}>  </Route>
      <Route path='/login' element={<Login/>}></Route>
    <Route path='/home' element={<Home/>}></Route>
      </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
