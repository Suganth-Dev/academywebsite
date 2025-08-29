import React from 'react';
import { NavLink } from 'react-router-dom';
import {
  LayoutDashboard,
  Users,
  UserCheck,
  TrendingUp,
  BarChart3,
  PieChart,
  Mail,
  ShoppingCart,
  MessageSquare,
  Download,
  X
} from 'lucide-react';
import logo from '../assets/logo.png'

interface SidebarProps {
  isOpen: boolean;
  toggleSidebar: () => void;
}

const Sidebar: React.FC<SidebarProps> = ({ isOpen, toggleSidebar }) => {
  const menuItems = [
    { path: '/admin/dashboard', icon: LayoutDashboard, label: 'Dashboard' },
    { path: '/admin/registered-users', icon: Users, label: 'Registered Users' },
    { path: '/admin/employee-management', icon: UserCheck, label: 'Employee Management' },
    { path: '/admin/income-reports', icon: TrendingUp, label: 'Income Reports' },
    { path: '/admin/user-metrics', icon: BarChart3, label: 'User Metrics' },
    { path: '/admin/analytics', icon: PieChart, label: 'Analytics' },
    { path: '/admin/contact-us', icon: Mail, label: 'Contact Us' },
    { path: '/admin/sales-inquiries', icon: ShoppingCart, label: 'Sales Inquiries' },
    { path: '/admin/feedbacks', icon: MessageSquare, label: 'Feedbacks' },
    { path: '/admin/downloads-history', icon: Download, label: 'Downloads History' },
  ];

  return (
    <>
      {/* Mobile overlay */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-40 lg:hidden"
          onClick={toggleSidebar}
        />
      )}

      {/* Sidebar */}
      <div
        className={`fixed left-0 top-0 h-full bg-white shadow-lg z-50 transform transition-transform duration-300 ease-in-out ${
          isOpen ? 'translate-x-0' : '-translate-x-full'
        } lg:translate-x-0 lg:static lg:z-auto w-64`}
      >
        {/* Header */}
        <div className="flex items-center justify-between p-4 border-b border-gray-200">
          <img src={logo} alt="Logo" />
          <button
            onClick={toggleSidebar}
            className="lg:hidden p-1 rounded-md hover:bg-gray-100"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Navigation */}
        <nav className="p-4 space-y-2">
          {menuItems.map((item) => (
            <NavLink
              key={item.path}
              to={item.path}
              className={({ isActive }) =>
                `flex items-center space-x-3 px-4 py-3 rounded-lg transition-colors duration-200 ${
                  isActive
                    ? 'bg-orange-500 text-white'
                    : 'text-gray-700 hover:bg-orange-50 hover:text-orange-600'
                }`
              }
              onClick={() => window.innerWidth < 1024 && toggleSidebar()}
            >
              <item.icon className="w-5 h-5" />
              <span className="font-medium">{item.label}</span>
            </NavLink>
          ))}
        </nav>
      </div>
    </>
  );
};

export default Sidebar;
