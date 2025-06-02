
export default function Addcourse({ onClose }) {
  return (
    <div className="fixed inset-0 backdrop-blur-sm bg-opacity-20 flex justify-center items-center z-50">
        <div className="bg-white p-6 rounded-lg max-w-md w-full relative shadow-lg">
            <button
            className="absolute top-2 right-2 text-gray-600 hover:text-gray-900 hover:cursor-pointer"
            onClick={onClose}
            aria-label="Close popup"
            >
            X
            </button>
            <h2 className="text-xl font-bold mb-4">Add a New Course</h2>
            {/* Your add course form or content here */}

            <div className="w-full h-auto flex flex-col gap-3 items-center">
                {/* Name of course */}
                <div className="flex items-center w-full justify-between mb-5">
                    <span className="p-2  mr-5">Name of course : </span>
                    <input className="bg-slate-200 p-2 rounded-md flex-1" placeholder="enter course name"></input>
                </div>

                {/* Instructor */}
                <div className="flex items-center w-full justify-between mb-5">
                    <span className="p-2  mr-5">Name of instructor : </span>
                    <input className="bg-slate-200 p-2 rounded-md flex-1" placeholder="enter instructor"></input>
                </div>

                {/* submit button */}
                <span className="bg-[#3B82F6] text-white p-1 px-2 rounded-md hover:cursor-pointer">
                    Submit
                </span>
            </div>
        </div>
    </div>

  );
}