import React from "react";
import {ArrowLeft,EyeOff,Eye} from 'lucide-react'
import { NavLink } from "react-router-dom";

const ChangePassword = () => {
  return (
    <div className="h-full flex items-center justify-center bg-gray-100 ">
      <div className="relative pt-5 w-full max-w-md bg-white py-6 px-1 md:px-6 rounded-2xl shadow-md">
      <NavLink className=" absolute top-1 left-2 flex items-center" to="/settings/security">
            <ArrowLeft></ArrowLeft>
          </NavLink>
        <div className="flex relative justify-center pb-6">
         
          <h2 className="text-2xl font-semibold text-gray-800  text-center">
          Change Password
        </h2>
          </div>
       

        <form className="space-y-5">
          {/* Current Password */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Current Password
            </label>
            <input
              type="password"
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Enter current password"
            />

          </div>

          {/* New Password */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              New Password
            </label>
            <input
              type="password"
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Enter new password"
            />
          </div>

          {/* Forgot Password */}
          <div className="text-right">
            <NavLink
              to=""
              className="text-sm text-blue-600 hover:underline"
            >
              Forgot password?
            </NavLink>
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition duration-200"
          >
            Change Password
          </button>
        </form>
      </div>
    </div>
  );
};

export default ChangePassword;
