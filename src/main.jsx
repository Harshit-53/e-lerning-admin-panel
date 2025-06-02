import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import Settings from "./Pages/Settings.jsx"


import { createBrowserRouter, createRoutesFromElements, Route ,RouterProvider} from 'react-router-dom'

const router=createBrowserRouter(
  createRoutesFromElements(
    //Import your component and uncomment your route when done making the page
    <Route path='/' element={<App/>}>
      {/* <Route path='' element={<Dashboard/>}/>
      <Route path='courses' element={<Courses/>}/> 
      <Route path='users' element={<Users/>}/>
      <Route path='payments' element={<Payments/>}/>
      <Route path='feedback' element={<Feedback/>}/>
      <Route path='reports' element={<Reports/>}/> */}
      <Route path='settings' element={<Settings/>}/>
    </Route>
  )
)

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router}/>
  </StrictMode>,
)
