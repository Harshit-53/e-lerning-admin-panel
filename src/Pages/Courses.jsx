import Coursecard from "../cards/Coursecard";
import { useState } from "react";
import Addcourse from "../cards/Addcourse"

export default function Courses(){

    const [addcourse, setAddcourse] = useState(false);


    return(

        <>
            {/* buttons and headers */}
            <div className="w-full h-auto bg-slate-100 flex items-center justify-between">
                {/* Info Badge */}
                <span className="px-2 py-1 md:px-4 md:py-2 bg-black text-white font-bold text-[12px] md:text-xl rounded-sm md:rounded-xl">
                    All courses here
                </span>

                {/* Add Button */}
                <span
                    className="px-2 py-1 md:px-3 md:py-1 bg-blue-500 text-white font-bold text-[12px] md:text-[18px] rounded-md hover:cursor-pointer hover:bg-blue-600 transition"
                    onClick={() => {
                    console.log("opened add courses");
                    setAddcourse(true);
                    }}
                >
                    + Add courses
                </span>
            </div>

            {/* Courses cards section */}
            <div className="w-full h-[100vh] bg-[#D9D9D9] flex flex-wrap p-4 pb-20 mt-7 rounded-xl justify-between overflow-y-auto overflow-x-hidden hide-scrollbar" >
                <Coursecard />
                <Coursecard />
                <Coursecard />
                <Coursecard />
                <Coursecard />
                <Coursecard />
                <Coursecard />
                <Coursecard />
                <Coursecard />
                <Coursecard />
                
                {/* Conditionally render Addcourse popup */}
                {addcourse && (
                    <Addcourse
                    onClose={() => setAddcourse(false)} // pass a handler to close popup
                    />
                )}
            </div>
        </>
    );
}