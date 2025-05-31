import Coursecard from "../cards/Coursecard";

export default function Courses({openAddcourse}){

    return(

        <>
            {/* buttons and headers */}
            <div className="w-full h-auto bg-slate-100 flex items-center justify-between">
                {/* all courses */}
                <span className="h-auto w-auto py-2 px-4 rounded-xl bg-black text-white font-bold text-xl">
                    All courses here
                </span>

                <span className="w-auto h-auto rounded-md py-1 px-3 bg-[#3B82F6] text-white font-bold hover:cursor-pointer"
                onClick={openAddcourse} >
                    + Add courses
                </span>
            </div>

            {/* Courses cards section */}
            <div className="w-full h-full bg-[#D9D9D9] flex flex-wrap p-4 pb-20 mt-7 rounded-xl justify-between overflow-y-auto overflow-x-hidden hide-scrollbar" >
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
                <Coursecard />
                <Coursecard />
                <Coursecard />
            </div>
        </>
    );
}