import React, { useEffect,useState } from 'react'
import { useNavigate } from 'react-router-dom';
const Modal = ({setshowLogoutModal}) => {
    const [visible, setVisible] = useState(false);
    const navigate = useNavigate();
    const closeModal=()=>{
        setVisible(false)
        setTimeout(() => {       
            setshowLogoutModal(false)
        }, 400);
    }

    useEffect(() => {      
        setVisible(true);
        window.history.pushState(null, '', window.location.href);
        const handlePopState = () => {
            navigate(1); 
        };
        window.addEventListener('popstate', handlePopState);
        return () => window.removeEventListener('popstate', handlePopState);
    }, [])
    

  return (
    <div className={`z-20 absolute backdrop-blur-[1px] h-full w-full flex items-center justify-center `}>
        <div className={`p-8 transition-all rounded-2xl duration-800 md:h-1/2 md:w-1/2  ${visible ? 'opacity-100 -translate-y-5' : 'opacity-0 translate-y-0'} shadow-2xl bg-white `}>    
            <div className='bg-gray-200 h-full flex flex-col justify-around py-2 rounded-xl'>
              <div className=' font-bold text-2xl text-center'>Logout confirmation</div>
              <div  className=' font-semi-bold text-xl text-center'>Are you sure you want to logout ?</div>
              <div className='flex justify-around'>
                <button className='cursor-pointer text-center rounded-xl text-white font-bold text-xl w-[20%] bg-blue-800 p-3'>
                    Yes
                </button>
                <button onClick={closeModal} className='cursor-pointer text-center text-white font-bold text-xl rounded-xl w-[20%] bg-red-800 p-3'>
                    No 
                </button>
              </div>
            </div>
        </div>
    </div>
  )
}

export default Modal