import { useState } from "react";
import Optionbtn from "./Optionbtn";
import OptionDesc from "./optiondesc";

export default function AddQuestion({ onClose }) {
    const [addoption, setAddoption] = useState(false);

    return (
        <div className="fixed inset-0 flex items-center justify-center bg-opacity-50 z-20 p-4">
            <div className="relative w-full max-w-3xl bg-white rounded-xl p-4">
                <button
                    className="absolute top-2 right-4 text-black text-xl font-bold cursor-pointer"
                    onClick={onClose}
                >
                    &times;
                </button>

                <div className="w-full flex flex-col gap-4 mt-6">
                    <div className="flex flex-col sm:flex-row sm:items-center gap-2">
                        <span className="font-semibold">Description:</span>
                        <input type="text" className="border-none outline-none rounded-md px-2 py-1 bg-slate-50 flex-1" />
                    </div>

                    <div className="flex flex-col sm:flex-row sm:items-center gap-2">
                        <span className="font-semibold">Image (if any):</span>
                        <label className="bg-blue-500 text-white text-sm px-3 py-2 rounded-xl cursor-pointer">
                            Choose file
                            <input type="file" className="hidden" />
                        </label>
                    </div>

                    <span
                        className="bg-black text-white px-3 py-1 text-sm font-bold w-fit rounded-xl cursor-pointer"
                        onClick={() => setAddoption(true)}
                    >
                        Add Option
                    </span>
                    <div className="w-[95%] h-auto p-3 mx-auto gap-2 bg-slate-200 rounded-xl flex flex-wrap overflow-auto hide-scrollbar ">
                        <Optionbtn Name={'Option A'}></Optionbtn>
                        <Optionbtn Name={'Option A'}></Optionbtn>
                        <Optionbtn Name={'Option A'}></Optionbtn>
    
                    </div>

                    <button className="self-center bg-black text-white rounded-md px-2 py-1 hover:cursor-pointer mt-2">
                        Add question
                    </button>
                    {addoption && (
                        <div className="flex flex-col gap-2">
                            <OptionDesc onClose={()=>setAddoption(false)} />
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
}
