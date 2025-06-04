import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faArrowLeft,
  faTimes,
  faChevronDown,
  faPen,
  faBars,
} from '@fortawesome/free-solid-svg-icons';
import { useState } from 'react';
import Quiz from './Quiz';
import AddModule from './AddModule';

export default function Courses_mainpage() {
  const [showDropdown, setShowDropdown] = useState(false);
  const [showPDF, setShowPDF] = useState(false);
  const [showAddModule, setShowAddModule] = useState(false);
  const [heading, setHeading] = useState('Content :');
  const [showQuiz, setShowQuiz] = useState(false);
  const [videoUrl, setVideoUrl] = useState(null);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false); // 👈 mobile sidebar

  const handleLectureClick = () => {
    setVideoUrl('/videos/download2.mp4');
    setShowPDF(false);
    setShowQuiz(false);
    setHeading(`Lecture 1`);
  };

  const handleAssignmentClick = () => {
    setShowPDF(true);
    setVideoUrl(null);
    setShowQuiz(false);
    setHeading(`Assignment 1`);
  };

  const handleQuizClick = () => {
    setShowPDF(false);
    setVideoUrl(null);
    setShowQuiz(true);
    setHeading(`Quiz 1`);
  };

  return (
    <div className="w-full h-[100vh] overflow-y-auto hide-scrollbar bg-slate-200 flex relative">

      {/* Mobile Hamburger Button */}
      <button
        className={`absolute top-4 left-4 z-40 md:hidden text-2xl text-white bg-blue-600 p-2 rounded-md ${isSidebarOpen && 'hidden'}`}
        onClick={() => setIsSidebarOpen(true)}
      >
        <FontAwesomeIcon icon={faBars} />
      </button>

      {/* Sidebar */}
      <div
        className={`
          fixed md:relative top-0 left-0 z-30 h-full bg-slate-50 shadow-lg transform transition-transform duration-300 ease-in-out
          w-[70%] max-w-[300px] md:translate-x-0 md:block
          ${isSidebarOpen ? 'translate-x-0' : '-translate-x-full md:translate-x-0'}
        `}
      >
        {/* Close Sidebar (Mobile only) */}
        <div className="flex justify-end p-3 md:hidden">
          <button onClick={() => setIsSidebarOpen(false)}>
            <FontAwesomeIcon icon={faTimes} className="text-xl text-black" />
          </button>
        </div>

        {/* Add module button */}
        <div className="w-[90%] my-2 h-auto flex justify-end gap-2 mx-auto">
          <span
            className="w-full text-center h-auto bg-[#3B82F6] rounded-md text-white text-xl font-bold px-2 py-1 hover:cursor-pointer"
            onClick={() => setShowAddModule(true)}
          >
            Add modules +
          </span>
        </div>

        {/* Module Dropdown */}
        <div className="w-full h-[80vh] overflow-auto hide-scrollbar flex flex-col px-4 pb-4">
          <div className="relative w-full">
            <div className="relative z-10 w-full h-auto flex items-center justify-between px-2 py-1 bg-black text-white rounded-xl my-4">
              <span className="text-xl font-bold">Module-1</span>
              <span className="flex gap-2">
                <FontAwesomeIcon icon={faTimes} className="hover:cursor-pointer" />
                <FontAwesomeIcon
                  icon={faChevronDown}
                  className="hover:cursor-pointer"
                  onClick={() => setShowDropdown((prev) => !prev)}
                />
              </span>
            </div>

            {showDropdown && (
              <div className="w-full rounded-b-xl bg-slate-300 flex flex-col px-2 py-2 transition-all">
                {/* Lecture */}
                <div className="w-full flex justify-between items-center px-2 py-1 my-2 bg-blue-500 text-white rounded-md">
                  <span onClick={handleLectureClick} className="cursor-pointer">Lecture 1</span>
                  <span className="flex gap-3">
                    <FontAwesomeIcon icon={faTimes} />
                    <FontAwesomeIcon icon={faPen} className="text-xs mt-[1px]" />
                  </span>
                </div>
                {/* Assignment */}
                <div className="w-full flex justify-between items-center px-2 py-1 my-2 bg-blue-500 text-white rounded-md">
                  <span onClick={handleAssignmentClick} className="cursor-pointer">Assignment 1</span>
                  <span className="flex gap-3">
                    <FontAwesomeIcon icon={faTimes} />
                    <FontAwesomeIcon icon={faPen} className="text-xs mt-[1px]" />
                  </span>
                </div>
                {/* Quiz */}
                <div className="w-full flex justify-between items-center px-2 py-1 my-2 bg-blue-500 text-white rounded-md">
                  <span onClick={handleQuizClick} className="cursor-pointer">Quiz 1</span>
                  <span className="flex gap-3">
                    <FontAwesomeIcon icon={faTimes} />
                    <FontAwesomeIcon icon={faPen} className="text-xs mt-[1px]" />
                  </span>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Overlay for sidebar on mobile */}
      {isSidebarOpen && (
        <div
          className="fixed inset-0 bg-opacity-50 z-20 md:hidden"
          onClick={() => setIsSidebarOpen(false)}
        ></div>
      )}

      {/* Main Section */}
      <div className="flex-1 h-full flex flex-col bg-slate-200 p-4 md:p-6">
        {/* Heading */}
        <div className="sm:text-xl text-[12px] mx-auto md:text-2xl text-center font-bold bg-black text-white px-4 py-2 rounded-xl w-[40%] sm:w-[50%]">
          {heading}
        </div>

        {/* Main Content (video/pdf/quiz) */}
        <div className="flex-1 my-5 bg-slate-700 rounded-xl w-full overflow-x-auto hide-scrollbar">
          {videoUrl && (
            <video className="w-full h-full rounded-xl" controls autoPlay>
              <source src={videoUrl} type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          )}
          {showPDF && (
            <iframe
              src="/pdfs/SDE-Sheet(Core).pdf"
              className="w-full h-full rounded-xl"
              title="Assignment 1"
            />
          )}
          {showQuiz && <Quiz />}
        </div>
      </div>

      {showAddModule && <AddModule onClose={() => setShowAddModule(false)} />}
    </div>
  );
}
