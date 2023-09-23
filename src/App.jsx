import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import NavBar from './components/NavBar/NavBar'
import Profile from './pages/Profile.jsx'


function App() {
  return (
    <>
    <div className='Paginita'>
      <NavBar/>
      <Profile/>
    </div>
    </>
  )
}

export default App
