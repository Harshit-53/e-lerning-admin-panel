import { useState } from "react";
import Optionbtn from "./Optionbtn";
import OptionDesc from "./optiondesc";

export default function AddQuestion({onClose}){
    const [addoption, setAddoption] = useState(false);

    return(
        <>
            <div className="fixed rounded-xl left-1/4 top-1/4 flex items-center justify-center bg-slate-300
            h-auto w-[80%] bg-opacity-20 z-20 backdrop-blur-sm p-3">

                <button
                className="absolute top-0 right-1 text-black text-xl font-bold hover:cursor-pointer"
                onClick={onClose}
                >
                &times;
                </button>

                {/* content here */}
                <div className="w-full h-auto flex flex-col">
                    <div className="w-full flex p-3">
                        <span className="font-semibold mr-2">Description: </span>
                        <input type="text" className="border-none outline-none rounded-md px-2 bg-slate-50 flex-1"/>
                    </div>

                    <div className="w-auto flex px-3">
                        <span className="font-semibold mr-2">Image{'(if any)'}: </span>
                        <span className="bg-[#3B82F6] text-white text-[12px] px-2 py-1 rounded-xl hover:cursor-pointer">Choose file</span>
                    </div>

                    <span className="bg-black text-white px-2 py-1 text-[12px] font-bold ml-3 mt-1 w-fit rounded-xl hover:cursor-pointer" onClick={()=> setAddoption(true)}>
                        Add option
                    </span>

                    <div className="w-[95%] h-14 p-3 mx-auto gap-2 bg-slate-50 rounded-xl flex flex-wrap overflow-auto hide-scrollbar my-2">
                        <Optionbtn Name={"A"}></Optionbtn>
                        <Optionbtn Name={"A"}></Optionbtn>
                        <Optionbtn Name={"A"}></Optionbtn>
                        <Optionbtn Name={"A"}></Optionbtn>
                        
                    </div>

                    <span className="self-center mt-auto  bg-black text-white rounded-md px-2 py-1 hover:cursor-pointer">
                        Add this question
                    </span>
                </div>

                {addoption && <OptionDesc onClose={()=> setAddoption(false)}></OptionDesc>}
            </div>
        </>
    );
}