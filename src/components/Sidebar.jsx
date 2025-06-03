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
  // { label: 'Assignments', icon: <FileText size={20} />, to: '/assignments' },
  // { label: 'Live Classes', icon: <Video size={20} />, to: '/live-classes' },
  // { label: 'Content', icon: <Folder size={20} />, to: '/content' },
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
        flex flex-col bg-white shadow-lg min-h-screen transition-all duration-300 ease-in-out
        ${collapsed ? 'w-16' : 'w-16 md:w-64 lg:w-72'}
      `}
    >
      {/* Header section with logo and toggle */}
      <div className="flex items-center justify-between p-3  border-gray-200">
        {/* Logo - only show on desktop when expanded */}
        <div className="flex items-center overflow-hidden">
          <div className={`transition-all duration-300 ${collapsed ? 'opacity-0 w-0' : 'opacity-100 w-auto'} hidden md:block`}>
            <ElearningLogo />
          </div>
        </div>

        {/* Collapse toggle button - only visible on desktop */}
        <button
          onClick={() => setCollapsed(!collapsed)}
          className="hidden md:flex items-center justify-center w-8 h-8 rounded-md hover:bg-gray-100 transition-colors"
          aria-label={collapsed ? 'Expand sidebar' : 'Collapse sidebar'}
        >
          {collapsed ? <ChevronRight size={18} /> : <ChevronLeft size={18} />}
        </button>
      </div>

      {/* Navigation items */}
      <nav className="flex-1 overflow-y-auto py-4">
        <ul className="space-y-1 px-2">
          {navItems.map((item) => (
            <li key={item.to}>
              <NavLink
                to={item.to}
                className={({ isActive }) =>
                  `
                    relative group flex items-center px-3 py-2.5 rounded-lg font-medium 
                    transition-all duration-200 hover:scale-[1.02]
                    ${isActive 
                      ? 'bg-blue-50 text-blue-600 border-r-2 border-blue-600' 
                      : 'text-gray-700 hover:bg-gray-50 hover:text-gray-900'
                    }
                    ${collapsed ? 'justify-center' : 'justify-start'}
                  `
                }
                title={collapsed ? item.label : ''}
              >
                <span className="flex-shrink-0 transition-transform group-hover:scale-110">
                  {item.icon}
                </span>
                
                {/* Label text - hidden when collapsed */}
                {!collapsed && (
                  <span className="ml-3 transition-all duration-300 font-medium hidden md:inline-block whitespace-nowrap">
                    {item.label}
                  </span>
                )}
                
                {/* Tooltip for collapsed state */}
                {collapsed && (
                  <div className="absolute left-full ml-2 px-2 py-1 bg-gray-900 text-white text-sm rounded-md opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 whitespace-nowrap z-50 hidden md:block">
                    {item.label}
                    <div className="absolute left-0 top-1/2 transform -translate-y-1/2 -translate-x-1 border-4 border-transparent border-r-gray-900"></div>
                  </div>
                )}
              </NavLink>
            </li>
          ))}
        </ul>
      </nav>

      {/* Footer section */}
      <div className="border-t border-gray-200 p-3">
        {!collapsed && (
          <div className="text-xs text-gray-500 text-center hidden md:block">
            E-Learning Platform
          </div>
        )}
      </div>
    </div>
  );
};

export default Sidebar;