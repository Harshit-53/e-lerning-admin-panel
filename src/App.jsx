import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Outlet } from 'react-router-dom'
import Sidebar from './components/Sidebar'
import Searchbar from './components/Searchbar'
function App() {

  return (
      <Outlet/>  
  )
}

export default App
