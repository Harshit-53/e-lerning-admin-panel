export default function AddAssignment() {
    return (
        <div className="w-full mb-3 bg-slate-200 rounded-xl flex flex-col gap-2 p-4">
            <div className="flex flex-col sm:flex-row sm:items-center w-full gap-2">
                <span className="font-semibold">Assignment Name:</span>
                <input type="text" className="border-none outline-none rounded-md px-2 py-1 bg-slate-50 flex-1" />
            </div>
            <div className="flex flex-col sm:flex-row sm:items-center w-full gap-2">
                <span className="font-semibold">Upload File:</span>
                <span className="bg-[#3B82F6] text-white text-sm px-3 py-1 rounded-xl cursor-pointer w-fit">Choose file</span>
            </div>
            <span className="self-center mt-auto mb-3 bg-black text-white rounded-md px-4 py-2 cursor-pointer text-sm">
                Add this assignment
            </span>
        </div>
    );
}
