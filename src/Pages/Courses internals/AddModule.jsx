import { useState } from "react";
import AddLecture from "./Addlecture";
import AddAssignment from "./Addassignment";
import AddLiveClass from "./Addliveclass";
import AddQuiz from "./Addquiz";

export default function AddModule({ onClose }) {
    const [tab, setTab] = useState("lecture");

    return (
        <div className="fixed inset-0 z-10 flex items-center justify-center  bg-opacity-40 backdrop-blur-sm p-2">
            <div className="relative w-[90%] max-w-[700px] bg-slate-50 rounded-xl shadow-lg flex flex-col">
                
                <button
                    className="absolute top-0 right-0 text-black text-2xl font-bold hover:cursor-pointer outline-none"
                    onClick={onClose}
                >
                    &times;
                </button>

                <div className="w-full p-4 flex flex-col gap-3">
                    {/* Module Name Input */}
                    <div className="w-full flex flex-col sm:flex-row gap-2 sm:items-center">
                        <span className="font-semibold">Module Name:</span>
                        <input type="text" className="border-none outline-none rounded-md px-2 py-1 bg-slate-200 flex-1" />
                    </div>

                    {/* Tab Buttons */}
                    <div className="flex flex-wrap gap-2 justify-between">
                        <button className="bg-blue-500 text-white px-3 py-1 rounded-xl text-sm" onClick={() => setTab("lecture")}>Lecture add +</button>
                        <button className="bg-blue-500 text-white px-3 py-1 rounded-xl text-sm" onClick={() => setTab("assignment")}>Assignment add +</button>
                        <button className="bg-blue-500 text-white px-3 py-1 rounded-xl text-sm" onClick={() => setTab("live class")}>Live class add +</button>
                        <button className="bg-blue-500 text-white px-3 py-1 rounded-xl text-sm" onClick={() => setTab("quiz")}>Quiz add +</button>
                    </div>

                    {/* Tab Content */}
                    {tab === "lecture" && <AddLecture />}
                    {tab === "assignment" && <AddAssignment />}
                    {tab === "live class" && <AddLiveClass />}
                    {tab === "quiz" && <AddQuiz />}
                </div>
            </div>
        </div>
    );
}
