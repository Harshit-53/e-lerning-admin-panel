import { useState } from "react";

export default function AddModule({onClose}){
    const [tab, setTab] = useState("lecture");

    return(
        <>
            <div className="fixed rounded-xl left-1/4 top-1/5 flex items-center justify-center bg-slate-50
            h-[400px] w-[700px] bg-opacity-20 z-50 backdrop-blur-sm">
                
                <button
                className="absolute top-0 right-1 text-black text-xl font-bold hover:cursor-pointer"
                onClick={onClose}
                >
                &times;
                </button>

                {/* Your Add Module content goes here */}
                <div className="w-full h-full p-4 flex flex-col">
                    {/* Adding options */}
                    <div className="flex w-full items-center justify-between mb-3">
                        <span className="bg-[#3B82F6] w-auto  font-semibold text-white px-2 py-1 rounded-xl hover:cursor-pointer">
                            Lecture add +
                        </span>
                        <span className="bg-[#3B82F6] w-auto  font-semibold text-white px-2 py-1 rounded-xl hover:cursor-pointer">
                            Assignment add +
                        </span>
                        <span className="bg-[#3B82F6] w-auto  font-semibold text-white px-2 py-1 rounded-xl hover:cursor-pointer">
                            Live class add +
                        </span>
                        <span className="bg-[#3B82F6] w-auto font-semibold text-white px-2 py-1 rounded-xl mr-5 hover:cursor-pointer">
                            Quiz add +
                        </span>
                    </div>

                    {/* Section wise content */}
                    <div className="w-full flex-1 mb-3 bg-slate-200 ">

                    </div>
                </div>
            </div>

        </>
    );
}