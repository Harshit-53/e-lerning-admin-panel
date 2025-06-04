import { useState } from "react";
import AddLecture from "./Addlecture";
import AddAssignment from "./Addassignment";
import AddLiveClass from "./Addliveclass";
import AddQuiz from "./Addquiz";

export default function AddModule({onClose}){
    const [tab, setTab] = useState("lecture");

    return(
        <>
            <div className="fixed rounded-xl left-1/4 top-1/5 flex items-center justify-center bg-slate-50
            h-auto w-[700px] bg-opacity-20 z-10 backdrop-blur-sm">
                
                <button
                className="absolute top-0 right-1 text-black text-xl font-bold hover:cursor-pointer"
                onClick={onClose}
                >
                &times;
                </button>

                {/* Your Add Module content goes here */}
                <div className="w-full h-full p-4 flex flex-col">
                    {/* module name */}
                    <div className="w-full flex p-3">
                        <span className="font-semibold mr-2">Module Name: </span>
                        <input type="text" className="border-none outline-none rounded-md px-2 bg-slate-300 flex-1"/>
                    </div>
                    {/* Adding options */}
                    <div className="flex w-full items-center justify-between mb-3">
                        <span className="bg-[#3B82F6] w-auto  font-semibold text-white px-2 py-1 rounded-xl hover:cursor-pointer" onClick={()=> setTab("lecture")}>
                            Lecture add +
                        </span>
                        <span className="bg-[#3B82F6] w-auto  font-semibold text-white px-2 py-1 rounded-xl hover:cursor-pointer" onClick={()=> setTab("assignment")}>
                            Assignment add +
                        </span>
                        <span className="bg-[#3B82F6] w-auto  font-semibold text-white px-2 py-1 rounded-xl hover:cursor-pointer" onClick={()=> setTab("live class")}>
                            Live class add +
                        </span>
                        <span className="bg-[#3B82F6] w-auto font-semibold text-white px-2 py-1 rounded-xl mr-5 hover:cursor-pointer" onClick={()=> setTab("quiz")}>
                            Quiz add +
                        </span>
                    </div>

                    {/* Section wise content */}
                    {tab=="lecture" && <AddLecture></AddLecture>}
                    {tab=="assignment" && <AddAssignment></AddAssignment>}
                    {tab=="live class" && <AddLiveClass></AddLiveClass>}
                    {tab=="quiz" && <AddQuiz></AddQuiz>}
                </div>
            </div>

        </>
    );
}