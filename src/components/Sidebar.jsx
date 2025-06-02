import React from 'react';
import { NavLink } from 'react-router-dom';
import {
  LayoutDashboard, Book, Users, FileText, Video, Folder, BarChart2, CreditCard, MessageCircle, Settings
} from 'lucide-react';
import ElearningLogo from '../icons/ElearningLogo.jsx';

const navItems = [
  { label: 'Dashboard', icon: <LayoutDashboard size={20} />, to: '/' },
  { label: 'Courses', icon: <Book size={20} />, to: '/courses' },
  { label: 'Users', icon: <Users size={20} />, to: '/users' },
  { label: 'Assignments', icon: <FileText size={20} />, to: '/assignments' },
  { label: 'Live Classes', icon: <Video size={20} />, to: '/live-classes' },
  { label: 'Content', icon: <Folder size={20} />, to: '/content' },
  { label: 'Reports', icon: <BarChart2 size={20} />, to: '/reports' },
  { label: 'Payments', icon: <CreditCard size={20} />, to: '/payments' },
  { label: 'Feedback', icon: <MessageCircle size={20} />, to: '/feedback' },
  { label: 'Settings', icon: <Settings size={20} />, to: '/settings' },
];

const Sidebar = () => {
  return (
    <div className="w-[22%] min-h-screen bg-white shadow-lg p-4 flex flex-col">
      <ElearningLogo/>
      <ul className="space-y-2 overflow-y-auto">
        {navItems.map((item) => (
          <NavLink
            key={item.to}
            to={item.to}
            className={({ isActive }) =>
              `flex items-center gap-3 px-4 py-2 rounded-lg font-medium transition-colors ${
                isActive
                  ? 'bg-blue-100 text-customblue'
                  : 'text-gray-700 hover:bg-gray-100'
              }`
            }
          >
            {item.icon}
            <span>{item.label}</span>
          </NavLink>
        ))}
      </ul>
    </div>
  );
};

export default Sidebar;
