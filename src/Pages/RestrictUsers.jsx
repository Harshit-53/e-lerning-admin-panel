import React, { useRef, useState } from 'react';
import { ArrowLeft} from 'lucide-react'
import { NavLink } from 'react-router-dom';
const RestrictUsers = () => {
    
    const handleToggle = (restrictuser) => {
    
        const choice=confirm(`Are you sure you want to ${restrictuser.isRestricted?"unrestrict":"restrict"} `+restrictuser.name)
        if(choice){
            //Add backend logic here
            let updatedusers=[...users]
            for (const user of updatedusers) {
                if(user.id==restrictuser.id){
                    user.isRestricted=(!user.isRestricted)
                    break
                }
            }
            setusers(updatedusers)
 
        }
      };
    
    
  const [users,setusers] = useState([ //Dummy users
    {
        name: 'A',
        email: 'emilyjohnson@gmail.com',
        enrolledCourses: 2,
        id: 1,
        lastAccess: 'Apr, 22 , 2025',
        isRestricted:false
      },
      {
        name: 'B',
        email: 'emilyjohnson@gmail.com',
        enrolledCourses:5,
        id: 2,
        lastAccess: 'Apr, 25 , 2025',
        isRestricted:false
      },
      {
        name: 'C',
        email: 'emilyjohnson@gmail.com',
        enrolledCourses: 1,
        id: 3,
        lastAccess: 'Apr, 15, 2025',
        isRestricted:false
      },
    
  ]);

  return (
    <div className="overflow-y-auto max-h-9/10 bg-gray-100">
        <div className='pl-8 relative'>
        <div className='absolute left-0 top-1'>
            <NavLink to="/settings/security">
                <ArrowLeft></ArrowLeft>
            </NavLink>
        </div>
        <h1 className="text-2xl font-bold pb-3">Restrict users</h1>
        </div>
      <div className="hidden md:block overflow-x-auto shadow-md sm:rounded-lg bg-white">
        <table className="min-w-full h-full text-sm text-left text-gray-700 border border-gray-200">
          <thead className="text-xs text-gray-700 uppercase bg-gray-200">
            <tr>
              <th className="px-6 py-3">Name</th>
              <th className="px-6 py-3">Enrolled courses</th>
              <th className="px-6 py-3">Last Access</th>
              <th className="px-6 py-3">Restrict user</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user, idx) => (
              <tr key={idx} className="bg-white border-b hover:bg-gray-50">
                <td className="px-6 py-4 whitespace-nowrap">
                  <div className="font-medium text-gray-900">{user.name}</div>
                  <div className="text-sm text-gray-500">{user.email}</div>
                </td>
                <td className="px-6 py-4">{user.enrolledCourses}</td>
                <td className="px-6 py-4">{user.lastAccess}</td>
                <td className="px-6 py-4">
                <label className="inline-flex items-center">
                 <input                  
                    type="checkbox"
                    className="form-checkbox h-5 w-5 text-red-600"
                    checked={user.isRestricted}
                    onChange={() => handleToggle(user)}
                 />
               </label>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Mobile version */}
      <div className="md:hidden space-y-4">
        {users.map((user, idx) => (
          <div key={idx} className="bg-white p-4 rounded-lg shadow">
            <div className="font-semibold text-gray-800">{user.name}</div>
            <div className="text-sm text-gray-500 mb-2">{user.email}</div>
            <div><strong>Enrolled Courses:</strong> {user.enrolledCourses}</div>
            <div><strong>Last Access:</strong> {user.lastAccess}</div>
            <div><strong>Restrict user:</strong>  <label className="inline-flex items-center">
            <input                  
                    type="checkbox"
                    className="form-checkbox h-5 w-5 text-red-600"
                    checked={user.isRestricted}
                    onChange={() => handleToggle(user)}
                 />
               </label></div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default RestrictUsers;

// import React, { useState } from "react";

// const usersData = [
//   { id: 1, name: "Alice Johnson" },
//   { id: 2, name: "Bob Smith" },
//   { id: 3, name: "Charlie Davis" },
//   { id: 1, name: "Alice Johnson" },
//   { id: 2, name: "Bob Smith" },
//   { id: 3, name: "Charlie Davis" },{ id: 1, name: "Alice Johnson" },
//   { id: 2, name: "Bob Smith" },
//   { id: 3, name: "Charlie Davis" },{ id: 1, name: "Alice Johnson" },
//   { id: 2, name: "Bob Smith" },
//   { id: 3, name: "Charlie Davis" },{ id: 1, name: "Alice Johnson" },
//   { id: 2, name: "Bob Smith" },
//   { id: 3, name: "Charlie Davis" },{ id: 1, name: "Alice Johnson" },
//   { id: 2, name: "Bob Smith" },
//   { id: 3, name: "Charlie Davis" },{ id: 1, name: "Alice Johnson" },
//   { id: 2, name: "Bob Smith" },
//   { id: 3, name: "Charlie Davis" },{ id: 1, name: "Alice Johnson" },
//   { id: 2, name: "Bob Smith" },
//   { id: 3, name: "Charlie Davis" },{ id: 1, name: "Alice Johnson" },
//   { id: 2, name: "Bob Smith" },
//   { id: 3, name: "Charlie Davis" },{ id: 1, name: "Alice Johnson" },
//   { id: 2, name: "Bob Smith" },
//   { id: 3, name: "Charlie Davis" },{ id: 1, name: "Alice Johnson" },
//   { id: 2, name: "Bob Smith" },
//   { id: 3, name: "Charlie Davis" },
// ];

// const RestrictUsers = () => {
//   const [restrictedUsers, setRestrictedUsers] = useState([]);

//   const handleToggle = (userId) => {
//     const choice=confirm("Are you sure you want to restrict "+userId)
//     if(choice){
//     setRestrictedUsers((prev) =>
//       prev.includes(userId)
//         ? prev.filter((id) => id !== userId)
//         : [...prev, userId]
//     );
//     }
//   };

//   return (
//     <div className=" h-140 bg-gray-100 flex items-center justify-center px-4 overflow-y-scroll ">
//       <div className="w-full  bg-white rounded-2xl shadow-md p-6 ">
//         <h2 className="text-2xl font-semibold text-gray-800 mb-4 text-center">
//           Restrict Users
//         </h2>

//         <ul className="space-y-4 ">
//           {usersData.map((user) => (
//             <li
//               key={user.id}
//               className="flex items-center justify-between px-3 py-2 border rounded-lg"
//             >
//               <span className="text-gray-700">{user.name}</span>
//               <label className="inline-flex items-center">
//                 <input
//                   type="checkbox"
//                   className="form-checkbox h-5 w-5 text-red-600"
//                   checked={restrictedUsers.includes(user.id)}
//                   onChange={() => handleToggle(user.id)}
//                 />
//               </label>
//             </li>
//           ))}
//         </ul>

//         {/* Debug Output (Optional) */}
//         <div className="mt-6 text-sm text-gray-600">
//           Restricted User IDs: {JSON.stringify(restrictedUsers)}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default RestrictUsers;

