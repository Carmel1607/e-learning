import React from 'react';
import { NavLink } from 'react-router-dom';
import { LayoutDashboard, Compass, BookOpen, MessageSquare, Settings, LogOut, Plus } from 'lucide-react';

import { user } from '../data/mockData';

const Sidebar = ({ onLogout }) => {
  const isAdmin = user.role === 'admin';

  const menuItems = [
    { icon: <Compass size={20} />, label: 'Explore Courses', path: '/explore' },
  ];

  const adminItems = [
    { icon: <LayoutDashboard size={20} />, label: 'Admin Panel', path: '/admin' },
    { icon: <Plus size={20} />, label: 'Create Course', path: '/admin/create-course' },
  ];

  return (
    <div className="w-64 bg-white h-screen border-r border-slate-200 flex flex-col fixed left-0 top-0">
      <div className="p-6">
        <h1 className="text-2xl font-bold text-primary italic">e-learning</h1>
      </div>
      
      <nav className="flex-1 px-4 space-y-2">
        <p className="text-xs font-semibold text-slate-400 uppercase tracking-wider mb-2 px-4">Menu</p>
        {menuItems.map((item) => (
          <NavLink
            key={item.path}
            to={item.path}
            className={({ isActive }) =>
              `flex items-center gap-3 px-4 py-3 rounded-xl transition-all ${
                isActive 
                  ? 'bg-primary text-white shadow-lg shadow-primary/30' 
                  : 'text-slate-500 hover:bg-slate-50 hover:text-primary'
              }`
            }
          >
            {item.icon}
            <span className="font-medium">{item.label}</span>
          </NavLink>
        ))}

        {isAdmin && (
          <div className="pt-6">
            <p className="text-xs font-semibold text-slate-400 uppercase tracking-wider mb-2 px-4">Admin</p>
            {adminItems.map((item) => (
              <NavLink
                key={item.path}
                to={item.path}
                className={({ isActive }) =>
                  `flex items-center gap-3 px-4 py-3 rounded-xl transition-all ${
                    isActive 
                      ? 'bg-primary text-white shadow-lg shadow-primary/30' 
                      : 'text-slate-500 hover:bg-slate-50 hover:text-primary'
                  }`
                }
              >
                {item.icon}
                <span className="font-medium">{item.label}</span>
              </NavLink>
            ))}
          </div>
        )}
      </nav>

      <div className="p-4 border-t border-slate-100">
        <p className="text-xs font-semibold text-slate-400 uppercase tracking-wider mb-4 px-4">Settings</p>
        <div className="space-y-2">
          <NavLink
            to="/settings"
            className={({ isActive }) =>
              `flex items-center gap-3 px-4 py-3 rounded-xl transition-all ${
                isActive 
                  ? 'bg-primary text-white shadow-lg shadow-primary/30' 
                  : 'text-slate-500 hover:bg-slate-50 hover:text-primary'
              }`
            }
          >
            <Settings size={20} />
            <span className="font-medium">Settings</span>
          </NavLink>
          <button
            onClick={onLogout}
            className="w-full flex items-center gap-3 px-4 py-3 rounded-xl transition-all text-slate-500 hover:bg-red-50 hover:text-red-500"
          >
            <LogOut size={20} />
            <span className="font-medium">Logout</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
