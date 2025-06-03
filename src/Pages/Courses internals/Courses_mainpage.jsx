import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft, faTimes, faChevronDown, faPen } from '@fortawesome/free-solid-svg-icons';
import { useState } from 'react';
import { Document, Page, pdfjs } from 'react-pdf';
import Quiz from './Quiz';
import AddModule from './AddModule';

pdfjs.GlobalWorkerOptions.workerSrc = new URL(
  'pdfjs-dist/build/pdf.worker.min.mjs',
  import.meta.url,
).toString();

export default function Courses_mainpage(){
    const [showDropdown, setShowDropdown] = useState(false);
    const [showPDF, setShowPDF] = useState(false);
    const [showAddModule, setShowAddModule] = useState(false);
    const [heading, setHeading] = useState("Content :");
    const [showQuiz, setShowQuiz] = useState(false);
    const [videoUrl, setVideoUrl] = useState(null);

    const handleLectureClick = () => {
        // Local file in public/videos folder
        setVideoUrl('/videos/download2.mp4');
        setShowPDF(false);
        setHeading(`Lecture ${1}`);
    };

    const handleAssignmentClick = () => {
        setShowPDF(true);
        setVideoUrl(null); // Hide video if needed
        setShowQuiz(false);
        setHeading(`Assignment ${1}`);
    };

    const handleQuizClick = () => {
        setShowPDF(false);
        setVideoUrl(null); // Hide video if needed
        setShowQuiz(true);
        setHeading(`Quiz ${1}`);
    };

    

    return(

        <>
            
            <div className={`w-full h-[100vh] overflow-y-auto hide-scrollbar bg-slate-50 flex`}>
                {showAddModule && <AddModule onClose={() => setShowAddModule(false)} />}
                {/* Sidebar section */}
                <div className="w-[300px] h-full flex flex-col bg-amber-300 p-4 items-center">
                    
                    {/* Heading : add module and back button */}
                    <div className="w-full h-auto flex justify-end gap-2">
                        {/* back button */}
                        {/* <span>
                            <FontAwesomeIcon icon={faArrowLeft} /> 
                        </span> */}

                        <span className='w-auto h-auto bg-[#3B82F6] rounded-md text-white text-xl font-bold px-2 py-1 hover:cursor-pointer'
                        onClick={() => setShowAddModule(true)}>
                            Add modules +
                        </span>

                    </div>

                    {/* Modules */}
                    <div className="relative w-full">
                        {/* Main module div */}
                        <div className='relative z-10 w-full h-auto flex items-center justify-between px-2 py-1 bg-black text-white rounded-xl my-4'>
                            <span className='text-xl font-bold text-white'>
                            Module-1
                            </span>
                            <span className='flex gap-2 text-white'>
                            <FontAwesomeIcon icon={faTimes} className='hover:cursor-pointer' />
                            <FontAwesomeIcon
                                icon={faChevronDown}
                                className='hover:cursor-pointer'
                                onClick={() => setShowDropdown(prev => !prev)}
                            />
                            </span>
                        </div>

                        {/* Dropdown div */}
                        {showDropdown && (
                            <div className="absolute top-full z-0 w-full mt-[-20px] rounded-b-xl bg-slate-300 flex flex-col px-2 py-2">
                                {/* Contents of dropdown */}
                                <div className="w-full h-auto flex items-center justify-between px-2 py-1 my-2 bg-[#3B82F6] text-white rounded-md">
                                    <span className='text-white hover:cursor-pointer' onClick={handleLectureClick}>
                                        Lecture 1
                                    </span>
                                    <span className='flex gap-3 text-white' >
                                        <FontAwesomeIcon icon={faTimes} className='hover:cursor-pointer' />
                                        <FontAwesomeIcon
                                            icon={faPen}
                                            className='hover:cursor-pointer text-[12px] mt-[1px]'
                                        />
                                    </span>
                                </div>
                                <div className="w-full h-auto flex items-center justify-between px-2 py-1 my-2 bg-[#3B82F6] text-white rounded-md">
                                    <span className='text-white hover:cursor-pointer' onClick={handleAssignmentClick}>
                                        Assignment 1
                                    </span>
                                    <span className='flex gap-3 text-white'>
                                        <FontAwesomeIcon icon={faTimes} className='hover:cursor-pointer' />
                                        <FontAwesomeIcon
                                            icon={faPen}
                                            className='hover:cursor-pointer text-[12px] mt-[1px]'
                                        />
                                    </span>
                                </div>
                                <div className="w-full h-auto flex items-center justify-between px-2 py-1 my-2 bg-[#3B82F6] text-white rounded-md">
                                    <span className='text-white hover: cursor-pointer' onClick={handleQuizClick}>
                                        Quiz 1
                                    </span>
                                    <span className='flex gap-3 text-white'>
                                        <FontAwesomeIcon icon={faTimes} className='hover:cursor-pointer' />
                                        <FontAwesomeIcon
                                            icon={faPen}
                                            className='hover:cursor-pointer text-[12px] mt-[1px]'
                                        />
                                    </span>
                                </div>
                            </div>
                        )}
                    </div>
                </div>

                {/* main section */}
                <div className="h-full flex-1 flex flex-col bg-blue-300 p-6">
                    
                    {/* Heading section */}
                    <div className='h-auto w-[50%] text-2xl font-bold bg-black text-white px-4 py-2 rounded-xl'>
                        {heading}
                    </div>

                    {/* Video player here */}
                    <div className='flex-1 my-5 bg-slate-700 rounded-xl w-full overflow-x-auto hide-scrollbar'>
                        {videoUrl ? (
                            <video className="w-[100%] h-[100%] rounded-xl" controls autoPlay>
                                <source src={videoUrl} type="video/mp4" />
                                Your browser does not support the video tag.
                            </video>
                        ) :null}

                        {showPDF ? (
                            <iframe
                                src="/pdfs/SDE-Sheet(Core).pdf"
                                className="w-[100%] h-[100%] rounded-xl"
                                title="Assignment 1"
                            />
                        ): null}
                        
                        {showQuiz && <Quiz />}
                    </div>
                </div>

                
            </div>

            
            
        </>
    );
}