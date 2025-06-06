// App.jsx
import { useState } from "react";
import { Moon, CalendarDays, CalendarCheck, ArrowLeft } from 'lucide-react';
import { NavLink } from "react-router-dom";


export default function ProfileCard() {
  const [darkMode, setDarkMode] = useState(false);

  return (
    <div className="w-full flex justify-center bg-gradient-to-br  md:p-4">
      <div className="bg-white rounded-2xl w-full md:w-3/5 shadow-xl overflow-hidden">
        {/* Header with image */}
        <div className="relative bg-gray-100 pb-16">
          <NavLink to="/settings" className="absolute left-4 top-4 text-gray-600 text-xl">
            <ArrowLeft />
          </NavLink>
          <div className="flex justify-center">
            <img
              src="https://randomuser.me/api/portraits/men/32.jpg"
              alt="Profile"
              className="w-24 h-24 rounded-full border-4 border-white -mb-12 mt-8"
            />
          </div>
        </div>

        {/* Profile Info */}
        <div className="bg-blue-50 md:pt-8 p-1 md:px-6 pb-4 text-sm text-gray-800">
          <h2 className="text-center font-bold text-lg text-gray-900">JOHN DOE</h2>

          <div className="mt-4 space-y-2">
            <div className="flex justify-between">
              <span className="text-gray-600">Phone</span>
              <span className=" font-medium ">+91 9876543210</span>
            </div>
            <div className="flex justify-between">
              <span className="text-gray-600">Email id</span>
              <span className="font-medium max-w-1/2">abc@gmail.com</span>
            </div>
            <div className="text-blue-500 text-xs mt-2 hover:underline cursor-pointer">
              Change info?
            </div>
          </div>
        </div>

        {/* Divider */}
        <hr className="border-gray-300" />

        {/* Settings */}
        <div className="bg-blue-50 md:px-6 pt-5 pb-12 space-y-4 text-gray-800">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <Moon className=" fill-black" />
              <span>Dark mode</span>
            </div>
            <label className="flex items-center cursor-pointer">
              <input
                type="checkbox"
                checked={darkMode}
                onChange={() => setDarkMode(!darkMode)}
                className="sr-only peer"
              />
              <div className="w-10 h-5 bg-gray-300 rounded-full peer peer-checked:bg-blue-600 relative transition-colors">
                <div className={`w-4 h-4 bg-white rounded-full ${darkMode?"translate-x-5":""} shadow absolute top-0.5 left-0.5 transition-all`}></div>
              </div>
            </label>
          </div>

          <div className="flex justify-between items-center text-sm text-gray-700">
            <div className="flex items-center space-x-2">
              <CalendarDays className="text-gray-500" />
              <span className="text-sm">Date of birth</span>
            </div>
            <span className="text-gray-800 font-medium">01-01-1991</span>
          </div>

          <div className="flex justify-between items-center text-sm text-gray-700">
            <div className="flex items-center space-x-2">
              <CalendarCheck className="text-gray-500" />
              <span>Date joined</span>
            </div>
            <span className="text-gray-800 font-medium">01-01-2020</span>
          </div>
        </div>
      </div>
    </div>
  );
}
