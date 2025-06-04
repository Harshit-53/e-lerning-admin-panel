
export default function OptionDesc({onClose}){

    return(
        <>
            <div className="fixed rounded-xl right-1/4 top-1/2 flex items-center justify-center bg-slate-200
            h-auto w-full bg-opacity-20 z-20 backdrop-blur-sm p-3">

                <button
                className="absolute top-0 right-1 text-black text-xl font-bold hover:cursor-pointer"
                onClick={onClose}
                >
                &times;
                </button>

                <div className="w-full h-auto flex flex-col">

                    <div className="w-auto flex p-3">
                        <span className="font-semibold mr-2">Option name: </span>
                        <input type="text" className="border-none outline-none rounded-md px-2 bg-slate-50 flex-1"/>
                    </div>

                    <div className="w-full flex p-3">
                        <span className="font-semibold mr-2">Description: </span>
                        <input type="text" className="border-none outline-none rounded-md px-2 bg-slate-50 flex-1"/>
                    </div>
                    
                    <div className="w-auto flex px-3">
                        <span className="font-semibold mr-2">Image{'(if any)'}: </span>
                        <span className="bg-[#3B82F6] text-white text-[12px] px-2 py-1 rounded-xl hover:cursor-pointer">Choose file</span>
                    </div>

                    <span className="self-center mt-auto  bg-black text-white rounded-md px-2 py-1 hover:cursor-pointer">
                        Add this option
                    </span>
                </div>
            </div>
        </>
    );
}