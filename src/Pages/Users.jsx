import React, { useState } from 'react';

const UsersPage = () => {
  const [users] = useState([
    {
      name: 'Emily Johnson',
      email: 'emilyjohnson@gmail.com',
      enrolledCourses: 2,
      progress: '75%',
      lastAccess: 'Apr, 25 , 2025',
    },
    {
      name: 'John Doe',
      email: 'johndoe@example.com',
      enrolledCourses: 3,
      progress: '50%',
      lastAccess: 'May, 15 , 2025',
    },
  ]);

  return (
    <div className=" bg-gray-100 min-h-screen">
      <div className="hidden md:block overflow-x-auto shadow-md sm:rounded-lg bg-white">
        <table className="min-w-full text-sm text-left text-gray-700 border border-gray-200">
          <thead className="text-xs text-gray-700 uppercase bg-gray-200">
            <tr>
              <th className="px-6 py-3">Name</th>
              <th className="px-6 py-3">Enrolled_courses</th>
              <th className="px-6 py-3">Progress</th>
              <th className="px-6 py-3">Last_Access</th>
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
                <td className="px-6 py-4">{user.progress}</td>
                <td className="px-6 py-4">{user.lastAccess}</td>
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
            <div><strong>Progress:</strong> {user.progress}</div>
            <div><strong>Last Access:</strong> {user.lastAccess}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default UsersPage;
