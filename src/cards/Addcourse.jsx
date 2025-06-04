

export default function Addcourse({ onClose }) {
  return (
    <div className="fixed inset-0 bg-opacity-40 backdrop-blur-sm flex justify-center items-center z-50 px-4">
      <div className="bg-white w-full max-w-lg rounded-lg p-6 relative shadow-2xl transition-all duration-300">
        {/* Close Button */}
        <button
          className="absolute top-3 right-3 text-gray-500 hover:text-black text-lg font-bold"
          onClick={onClose}
          aria-label="Close popup"
        >
          ✕
        </button>

        {/* Title */}
        <h2 className="text-lg sm:text-xl font-bold mb-6 text-center">
          Add a New Course
        </h2>

        {/* Form */}
        <form className="space-y-5">
          {/* Course Name */}
          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-2">
            <label className="w-full sm:w-1/3 font-medium">Course Name:</label>
            <input
              type="text"
              placeholder="Enter course name"
              className="w-full sm:flex-1 bg-slate-200 p-2 rounded-md text-sm outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          {/* Instructor Name */}
          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-2">
            <label className="w-full sm:w-1/3 font-medium">Instructor:</label>
            <input
              type="text"
              placeholder="Enter instructor name"
              className="w-full sm:flex-1 bg-slate-200 p-2 rounded-md text-sm outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          {/* Submit Button */}
          <div className="flex justify-center">
            <button
              type="submit"
              className="bg-blue-500 hover:bg-blue-600 text-white font-semibold px-6 py-2 rounded-md transition"
            >
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
