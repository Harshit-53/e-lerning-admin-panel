import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import Settings from "./Pages/Settings.jsx"
import ErrorPage from './Pages/ErrorPage.jsx'
import Dashboard from './Pages/Dashboard.jsx'
import Courses from './Pages/Courses.jsx'
import Reports from './Pages/Reports.jsx'
import Feedback from './Pages/Feedback.jsx'
import Payments from './Pages/Payments.jsx'
import Users from './Pages/Users.jsx'


import { createBrowserRouter, createRoutesFromElements, Route ,RouterProvider} from 'react-router-dom'

const router=createBrowserRouter(
  createRoutesFromElements(
    //Import your component and uncomment your route when done making the page
    <Route path='/' element={<App/>}>
        <Route index element={<Dashboard />} />
       <Route path='courses' element={<Courses/>}/> 
     <Route path='users' element={<Users/>}/>
      <Route path='payments' element={<Payments/>}/>
      <Route path='feedback' element={<Feedback/>}/>
      <Route path='reports' element={<Reports/>}/>
      <Route path='settings' element={<Settings/>}/>
      <Route path='*' element={<ErrorPage/>}/>
    </Route>
  )
)

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router}/>
  </StrictMode>,
)
