

export default function OptionDesc({ onClose }) {
    return (
        <div className="fixed inset-0 z-20 bg-opacity-30 backdrop-blur-sm flex items-center justify-center p-4">
            <div className="relative bg-slate-200 rounded-xl w-full max-w-md p-6 shadow-lg">
                {/* Close button */}
                <button
                    className="absolute top-2 right-2 text-black text-xl font-bold hover:cursor-pointer"
                    onClick={onClose}
                >
                    &times;
                </button>

                <div className="flex flex-col gap-4 mt-6">
                    {/* Option name */}
                    <div className="flex flex-col sm:flex-row sm:items-center gap-2">
                        <label className="font-semibold w-32">Option name:</label>
                        <input
                            type="text"
                            className="flex-1 border-none outline-none rounded-md px-3 py-2 bg-slate-50"
                        />
                    </div>

                    {/* Description */}
                    <div className="flex flex-col sm:flex-row sm:items-center gap-2">
                        <label className="font-semibold w-32">Description:</label>
                        <input
                            type="text"
                            className="flex-1 border-none outline-none rounded-md px-3 py-2 bg-slate-50"
                        />
                    </div>

                    {/* Image */}
                    <div className="flex flex-col sm:flex-row sm:items-center gap-2">
                        <label className="font-semibold w-32">Image (if any):</label>
                        <label className="bg-blue-500 text-white text-sm px-3 py-2 rounded-xl cursor-pointer">
                            Choose file
                            <input type="file" className="hidden" />
                        </label>
                    </div>

                    {/* Submit */}
                    <button className="self-center bg-black text-white rounded-md px-4 py-2 hover:bg-gray-800 mt-2">
                        Add this option
                    </button>
                </div>
            </div>
        </div>
    );
}
