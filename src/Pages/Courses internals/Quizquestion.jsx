import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEdit, faTimes } from '@fortawesome/free-solid-svg-icons';

export default function QuizQuestion({Name}){

    return(
        <>
            <div className="w-fit h-fit shrink-0 px-1 py-1 gap-2 text-sm bg-[#3B82F6] rounded-md flex text-white items-center justify-between">
                <span>{Name}</span>
                <span>
                    <FontAwesomeIcon icon={faEdit} className="cursor-pointer" />
                    <FontAwesomeIcon icon={faTimes} className=" cursor-pointer ml-1" />
                </span>
            </div>
        </>
    );
}