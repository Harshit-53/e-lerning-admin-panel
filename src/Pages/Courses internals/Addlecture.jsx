
export default function AddLecture() {
    return (
        <div className="w-full bg-slate-200 rounded-xl p-3 flex flex-col gap-3">
            <div className="flex flex-col sm:flex-row gap-2 sm:items-center">
                <span className="font-semibold">Lecture Name:</span>
                <input type="text" className="border-none outline-none rounded-md px-2 py-1 bg-slate-50 flex-1" />
            </div>
            <div className="flex flex-col sm:flex-row gap-2 sm:items-center">
                <span className="font-semibold">Upload lecture:</span>
                <button className="bg-blue-500 text-white text-sm px-3 py-1 rounded-xl">Choose file</button>
            </div>
            <button className="self-center mt-2 bg-black text-white rounded-md px-4 py-2 hover:opacity-90">
                Add this lecture
            </button>
        </div>
    );
}
