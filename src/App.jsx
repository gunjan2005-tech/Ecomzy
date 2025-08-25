import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Route,Routes } from 'react-router-dom'
import Home from './pages/Home';
import Cart from './pages/Cart';
import { Toaster } from "react-hot-toast";
import Navbar from './components/Navbar'

function App() {
  
  return (
    <div>
      <div className='bg-slate-900'>
        <Navbar/>
      </div>
      <Routes>
        <Route path="/" element = {<Home/>} />
        <Route path = "/cart" element = {<Cart/>} />
      </Routes>
      <Toaster /> 
    </div>
  )
}

export default App
