 
import React from 'react'
import { NavLink } from 'react-router-dom'
const Sidebar = () => {
  return (
    <div className='w-[22%] px-4'>
      <div>
        <h1 className='text-center font-bold text-2xl bg-white p-2 '>E-learning</h1>
        <ul className='bg-customgrey py-2 flex flex-col gap-2 rounded-xl h-full'>
            <NavLink to="/" className={({isActive})=>`${isActive?"bg-customblue":"bg-white"} font-semibold text-center py-3 rounded-xl w-full`}>
            Dashboard
            </NavLink>  
            <NavLink to="/courses" className={({isActive})=>`${isActive?"bg-customblue":"bg-white"} font-semibold text-center py-3 rounded-xl w-full`}>
            Courses
            </NavLink>  
            <NavLink to="/users" className={({isActive})=>`${isActive?"bg-customblue":"bg-white"} font-semibold text-center py-3 rounded-xl w-full`}>
            Users
            </NavLink>  
            <NavLink to="/assignments" className={({isActive})=>`${isActive?"bg-customblue":"bg-white"} font-semibold text-center py-3 rounded-xl w-full`}>
            Assignments
            </NavLink>  
            <NavLink to="/live-classes" className={({isActive})=>`${isActive?"bg-customblue":"bg-white"} font-semibold text-center py-3 rounded-xl w-full`}>
            Live classes
            </NavLink>  
            <NavLink to="/content" className={({isActive})=>`${isActive?"bg-customblue":"bg-white"} font-semibold text-center py-3 rounded-xl w-full`}>
            Content
            </NavLink>  
            <NavLink to="/reports" className={({isActive})=>`${isActive?"bg-customblue":"bg-white"} font-semibold text-center py-3 rounded-xl w-full`}>
            Reports
            </NavLink>  
            <NavLink to="/payments" className={({isActive})=>`${isActive?"bg-customblue":"bg-white"} font-semibold text-center py-3 rounded-xl w-full`}>
            Payments
            </NavLink>
            <NavLink to="/feedback" className={({isActive})=>`${isActive?"bg-customblue":"bg-white"} font-semibold text-center py-3 rounded-xl w-full`}>
            Feedback
            </NavLink>
            <NavLink to="/settings" className={({isActive})=>`${isActive?"bg-customblue":"bg-white"} font-semibold text-center py-3 rounded-xl w-full`}>
            Settings
            </NavLink>
        </ul>
      </div>
    </div>
  )
}

export default Sidebar
