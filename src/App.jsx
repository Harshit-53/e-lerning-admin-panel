import { useState } from 'react'
import './App.css'
import { Outlet,useLocation } from 'react-router-dom'
import Modal from './components/Modal'
import Sidebar from './components/Sidebar'
import Searchbar from './components/Searchbar'

function App() {
  const location=useLocation()
  const [showLogoutModal, setshowLogoutModal] = useState(false)

  return (


    <div className="min-h-screen relative flex bg-gray-50">
      {showLogoutModal && <Modal setshowLogoutModal={setshowLogoutModal}/>}
  <Sidebar />
  <div className="flex-1 flex flex-col overflow-hidden">
    <header className="p-4 shadow-sm bg-white z-10">
      <Searchbar />
    </header>
    <main className="flex-1 overflow-y-auto p-6">
      <Outlet context={location.pathname=="/settings"?{setshowLogoutModal}:null} />
    </main>
  </div>
</div>

    // <div className="min-h-screen flex">
    //   <Sidebar />
    //   <div className="flex-1">
    //     <Searchbar />
    //     <main className="p-4">
    //       <Outlet />
    //     </main>
    //   </div>
    // </div>
  )
}

export default App
