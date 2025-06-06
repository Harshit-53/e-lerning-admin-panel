import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import Courses from "./Pages/Courses.jsx";
import Dashboard from "./Pages/Dashboard.jsx";
import General from "./Pages/General.jsx"
import Security from "./Pages/Security.jsx"
import About from "./Pages/About.jsx"
import ErrorPage from "./Pages/ErrorPage.jsx";
import Feedback from "./Pages/Feedback.jsx";
import Payments from "./Pages/Payments.jsx";
import Reports from "./Pages/Reports.jsx";
import Settings from "./Pages/Settings.jsx";
import ChangePassword from './Pages/ChangePassword.jsx';
import RestrictUsers from './Pages/RestrictUsers.jsx';
import Courses_mainpage from './Pages/Courses internals/Courses_mainpage.jsx';
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
      <Route path='settings/general' element={<General/>}/>
      <Route path='settings/about' element={<About/>}/> 
      <Route path='settings/security' element={<Security/>}/>  
      <Route path='settings/security/change-password' element={<ChangePassword/>}/>  
      <Route path='settings/security/restrict-users' element={<RestrictUsers/>}/>  

      <Route path='*' element={<ErrorPage/>}/>
    </Route>
  )
)

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router}/>
  </StrictMode>,
)
