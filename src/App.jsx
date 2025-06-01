import { useState } from 'react'
import './App.css'
import { Outlet } from 'react-router-dom'
import Sidebar from './components/Sidebar'
import Searchbar from './components/Searchbar'

function App() {
  return (
    <div className="min-h-screen flex">
      <Sidebar />
      <div className="flex-1">
        <Searchbar />
        <main className="p-4">
          <Outlet />
        </main>
      </div>
    </div>
  )
}

export default App
