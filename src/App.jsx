import { useState } from 'react'
import './App.css'
import { BrowserRouter, Route,Routes } from 'react-router-dom'
import Home from './pages/Home'
import Success from './pages/Success'
import Error from './pages/Error'
import ProtectedRoute from './components/ProtectedRoute'
import Login from './components/Login'


function App() {
 
  return (
    <>
    <BrowserRouter>
      <Routes>
        <Route path='/' element ={<Home/>}/>
        <Route path='/success' element ={<ProtectedRoute element={<Success/>}/>}/>
        <Route path='/*' element ={<Error/>}/>
        <Route path='/login' element ={<Login/>}/>
      </Routes>
    </BrowserRouter>
    </>
  )
}

export default App
