import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEdit, faTimes } from '@fortawesome/free-solid-svg-icons';
import { useNavigate } from 'react-router-dom';

export default function Coursecard() {

    const navigate = useNavigate();

    return (
        <>
            <div className="h-[225px] w-[30%] p-2 bg-white flex flex-col rounded-xl shrink-0 mb-5">
                {/* title */}
                <div className="text-3xl font-bold text-black w-full">
                    Python programming for beginners
                </div>

                {/* edit and delete buttons */}
                <div className="w-[90%] h-auto flex items-center gap-2 justify-between mt-4">
                    <div className='w-[150px] h-auto p-2 text-white bg-[#3B82F6] rounded-xl text-center hover:cursor-pointer'
                    onClick={() => navigate('/edit-course')}>
                        Edit course
                    </div>
                    
                    <div className='w-[150px] h-auto p-2 text-white bg-[#ef1c39] rounded-xl text-center hover:cursor-pointer'>
                        Delete course
                    </div>
                </div>

                {/* instructor */}
                <div className='w-full h-auto text-slate-700 mt-5'>
                    - By instructor 1
                </div>
            </div>
        </>
    );
}
