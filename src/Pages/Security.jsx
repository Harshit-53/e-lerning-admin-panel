import React from 'react'
import { LockKeyhole ,Ban, ArrowRight,ArrowLeft} from 'lucide-react'
import { NavLink } from 'react-router-dom'


const Security = () => {
    const securityOptions=[

      {
        title:"Change password",
        icon:<LockKeyhole/>,
        to:"change-password"
      },
      {
        title:"Restrict users",
        icon:<Ban/>,
        to:"restrict-users"
      },
    ]
    return (
      <div className="md:p-4 h-9/10 ">       
        <h1 className="text-2xl font-bold mb-4">Security</h1>
        <div className="bg-white rounded-lg shadow px-6 pt-12 h-full relative flex flex-col justify-between">
            <NavLink className="absolute top-[3%] " to="/settings">
                <ArrowLeft />
            </NavLink>
          <ul className='flex flex-col gap-6'>   
            {securityOptions.map((item)=>{
              return (<NavLink to={item.to} key={item.title} className='flex px-2 hover:bg-neutral-200 rounded-xl transition transition-300 justify-between relative py-3'>
                <div className='flex gap-2 '>
                  {item.icon}
                  <span className='font-bold'>{item.title}</span>
                </div>
                <div>
                <ArrowRight></ArrowRight>
                </div>
                <div className='bg-customgrey h-[3px] w-full absolute bottom-0'></div>
            </NavLink>)
            })}             
          </ul>
          <div className='text-sm md:text-base text-center w-full text-neutral-500'>© 2025 CertifyO. All rights reserved.</div>
        </div>
      </div>
    )
  }

  export default Security