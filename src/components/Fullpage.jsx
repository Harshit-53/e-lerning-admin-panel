import Sidebar from "./Sidebar";
import Courses from "../Pages/Courses";
import { useState } from "react";
import Addcourse from "../cards/Addcourse";

export default function Fullpage() {

  const [addcourse, setAddcourse] = useState(false);
  
  return (
    <>
      <div className={`h-screen w-full bg-[#f2f2f2] flex  items-center gap-4 ${addcourse ? 'backdrop-blur-sm' : ''}`}>
        <Sidebar />
        <div className="h-full w-[70%] border-2 border-black p-5 m-1 flex flex-col gap-4">
          {/* Top section - Search bar */}
          <div className="h-[10%] w-full border-2 border-blue-500 rounded-md"></div>
          
          {/* Bottom section - Pages (Courses, Users etc.) */}
          <div className={`flex-1 w-full rounded-md overflow-y-auto `}>
            <Courses openAddcourse = {()=> setAddcourse(true)}></Courses>
            {addcourse && <Addcourse closeAddcourse={() => setAddcourse(false)} />}
          </div>
        </div>
      </div>
    </>
  );
}
