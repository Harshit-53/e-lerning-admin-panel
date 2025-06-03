import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import {
  LayoutDashboard, Book, Users, FileText, Video, Folder, BarChart2, CreditCard, MessageCircle, Settings,
  ChevronLeft, ChevronRight
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
  const [collapsed, setCollapsed] = useState(false);

  return (
    <div
      className={`
        flex flex-col bg-white shadow-lg min-h-screen
        transition-width duration-300 ease-in-out
        w-20 md:${collapsed ? 'w-20' : 'w-[22%]'}
      `}
      style={{ transitionProperty: 'width' }}
    >
      {/* Logo + toggle container */}
      <div
        className={`flex items-center  p-3
          ${collapsed ? 'justify-center' : 'justify-between'}
        `}
      >
        {/* Logo only visible on md+ and expanded */}
        <div className="hidden md:block">
          {!collapsed && <ElearningLogo />}
        </div>

        {/* Collapse toggle - only on md+ */}
        <button
          onClick={() => setCollapsed(!collapsed)}
          className="hidden md:inline-flex p-1 rounded-md hover:bg-gray-200"
          aria-label={collapsed ? 'Expand sidebar' : 'Collapse sidebar'}
        >
          {collapsed ? <ChevronRight size={20} /> : <ChevronLeft size={20} />}
        </button>
      </div>

      {/* Nav items */}
      <ul className="flex-1 overflow-y-auto mt-4 space-y-2">
        {navItems.map((item) => (
          <NavLink
            key={item.to}
            to={item.to}
            className={({ isActive }) =>
              `
                flex items-center gap-3 px-4 py-2 rounded-lg font-medium transition-colors
                ${isActive ? 'bg-blue-100 text-customblue' : 'text-gray-700 hover:bg-gray-100'}
                ${collapsed ? 'justify-center' : ''}
              `
            }
          >
            {item.icon}
            {/* Labels: hidden on mobile always, on md+ show only if expanded */}
            <span className="hidden md:inline">
              {!collapsed && item.label}
            </span>
          </NavLink>
        ))}
      </ul>
    </div>
  );
};

export default Sidebar;
