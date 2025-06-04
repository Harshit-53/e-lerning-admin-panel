
export default function AddLecture(){

    return(
        <>
            <div className="w-full flex-1 mb-3 bg-slate-200 rounded-xl flex gap-2 flex-col">
                <div className="w-full flex p-3">
                    <span className="font-semibold mr-2">Lecture Name: </span>
                    <input type="text" className="border-none outline-none rounded-md px-2 bg-slate-50 flex-1"/>
                </div>
                <div className="w-auto flex p-3">
                    <span className="font-semibold mr-2">Upload lecture: </span>
                    <span className="bg-[#3B82F6] text-white text-[12px] px-2 py-1 rounded-xl hover:cursor-pointer">Choose file</span>
                </div>
                <span className="self-center mt-auto mb-3 bg-black text-white rounded-md px-2 py-1 hover:cursor-pointer">
                    Add this lecture
                </span>
            </div>
        </>
    );
}