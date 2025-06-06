import React, { useEffect, useState } from 'react'
import {ArrowLeft} from 'lucide-react'
import { NavLink } from 'react-router-dom'
const About = () => {
    const [fade, setfade] = useState(false)
    useEffect(() => {
      setfade(true)
    }, [])
    
    return (
        <div className="lg:p-4 h-95/100 ">  
            <div className='flex items-center pb-3 gap-3'>
                <NavLink to="/settings">
                    <ArrowLeft className='h-[22px]'></ArrowLeft>
                </NavLink>
                <h1 className="lg:text-2xl font-bold">About CertifyO</h1>
            </div>     
         
          <div className="bg-[#f5f7fa]  rounded-lg shadow lg:px-6 pb-6 h-full relative flex flex-col justify-between">
             <div className={`rounded-xl shadow-sm transition-all duration-1000 overflow-clip ${fade?"opacity-100":"-translate-x-6 opacity-0"} flex justify-center`}>
                <img className=" rounded-[50%] h-24 w-28" src="/certifyO.png" alt="certifyOlogo" />
             </div>
             <div className={`rounded-xl lg:shadow-sm transition-all duration-1000 overflow-clip flex justify-around ${fade?"opacity-100":"translate-x-6 opacity-0"}`}>
                <img className=" rounded-[50%] h-18 w-18 lg:h-24 lg:w-28" src="/msme.png" alt="msme" />
                <div className='hidden lg:block h-full w-0.5 bg-neutral-600'></div>
                <img className="rounded-[50%] h-18 w-18 lg:h-24 lg:w-28" src="/ncs.png" alt="ncs" />
                <div className='hidden lg:block h-full w-0.5 bg-neutral-600'></div>
                <img className=" rounded-[50%] h-18 w-18 lg:h-24 lg:w-28" src="/skill.png" alt="skill" />
             </div>
             <div className={` transition-all  duration-1000 ${fade?"opacity-100":"-translate-x-6 opacity-0"} flex justify-center  font-bold text-[#1f2937 ]`}>
                <p className='shadow-lg text-[10px] lg:text-base lg:p-0 p-1 lg:w-[70%] lg:px-16 rounded-2xl bg-[#f0f4f8]'>CertifyO is a professional certification and learning platform designed to help individuals advance their careers by earning recognized credentials. It offers expert-created exams, quality learning resources, and the ability to earn certificates that validate your skills and knowledge.</p>
             </div>
             <div className={` transition-all  duration-1000 ${fade?"opacity-100":"translate-x-6 opacity-0"} flex justify-center  font-bold text-[#1f2937 ]`}>
                <p className='shadow-lg p-1 lg:p-0 text-[10px] lg:text-base lg:w-[70%] lg:px-16 rounded-2xl bg-[#f0f4f8]'>Certifyo aims to empower professionals by providing accessible and credible certification opportunities, thereby enhancing their career prospects.</p>
             </div>
            <div className='text-sm lg:text-base text-center w-full text-neutral-500'>
                © 2025 CertifyO. All rights reserved.               
            </div>
          </div>
        </div>
      )
}

export default About