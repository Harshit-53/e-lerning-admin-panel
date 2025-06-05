import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEdit, faTimes } from '@fortawesome/free-solid-svg-icons';
import { useNavigate } from 'react-router-dom';

export default function Coursecard() {
    const navigate = useNavigate();

    return (
        <div className="w-full max-w-sm sm:max-w-md md:max-w-lg mb-3 lg:w-[350px] p-4 bg-white flex flex-col rounded-xl shadow-md hover:shadow-lg transition-all duration-300">
            {/* title */}
            <div className="text-xl sm:text-2xl md:text-3xl font-bold text-black">
                Python programming for beginners
            </div>

            {/* edit and delete buttons */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 mt-4">
                <div
                    className="w-full sm:w-auto px-4 py-2 text-xs sm:text-sm text-white bg-blue-500 rounded-xl text-center hover:cursor-pointer hover:bg-blue-600 transition"
                    onClick={() => navigate('/edit-course')}
                >
                    <FontAwesomeIcon icon={faEdit} className="mr-2" />
                    Edit course
                </div>

                <div
                    className="w-full sm:w-auto px-4 py-2 text-xs sm:text-sm text-white bg-red-600 rounded-xl text-center hover:cursor-pointer hover:bg-red-700 transition"
                >
                    <FontAwesomeIcon icon={faTimes} className="mr-2" />
                    Delete course
                </div>
            </div>

            {/* instructor */}
            <div className="text-sm text-gray-600 mt-5">
                - By instructor 1
            </div>
        </div>
    );
}
