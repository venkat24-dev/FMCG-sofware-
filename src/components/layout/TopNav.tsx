import React, { useState } from 'react';
import { Search, Bell, Moon, Sun, Plus, ChevronDown } from 'lucide-react';

export default function TopNav() {
  const [darkMode, setDarkMode] = useState(false);
  const [showCreateMenu, setShowCreateMenu] = useState(false);
  const [showProfileMenu, setShowProfileMenu] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 h-[40px] bg-white border-b border-[#E6E8EC] z-50">
      <div className="h-full px-6 flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center gap-8">
          <div className="flex items-center gap-2">
            <div className="w-9 h-9 bg-gradient-to-br from-[#2962FF] to-[#4975FF] rounded-lg flex items-center justify-center">
              <span className="text-white font-semibold text-[16px] font-bold italic">ERP</span>
            </div>
            <span className="text-[#1A1A1A] tracking-tight no-underline font-bold text-[20px] px-[3px] py-[0px] mx-[1px] my-[0px] font-[Goldman] italic">BUSY FMCG Manager</span>
          </div>

          {/* Search */}
          <div className="relative">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-[#6B7280]" />
            <input
              type="text"
              placeholder="Search..."
              className="w-[400px] h-[40px] bg-[#F8F9FC] border border-[#E6E8EC] rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-[#2962FF] focus:border-transparent font-[Imprima] text-[16px] not-italic text-center font-bold font-normal"
            />
          </div>
        </div>

        {/* Right Side */}
        <div className="flex items-center gap-4">
          {/* Create Button */}
          <div className="relative">
            <button
              onClick={() => setShowCreateMenu(!showCreateMenu)}
              className="h-[40px] px-4 bg-[#2962FF] hover:bg-[#1E4ED8] text-white rounded-lg flex items-center gap-2 transition-colors"
            >
              <Plus className="w-4 h-4" />
              <span className="text-sm">Create</span>
              <ChevronDown className="w-4 h-4" />
            </button>
            {showCreateMenu && (
              <div className="absolute right-0 top-full mt-2 w-[200px] bg-white rounded-lg shadow-lg border border-[#E6E8EC] py-2 z-50">
                <button className="w-full px-4 py-2 text-left text-sm hover:bg-[#F8F9FC] transition-colors">New Project</button>
                <button className="w-full px-4 py-2 text-left text-sm hover:bg-[#F8F9FC] transition-colors">New Task</button>
                <button className="w-full px-4 py-2 text-left text-sm hover:bg-[#F8F9FC] transition-colors">New Order</button>
                <button className="w-full px-4 py-2 text-left text-sm hover:bg-[#F8F9FC] transition-colors">New Product</button>
                <button className="w-full px-4 py-2 text-left text-sm hover:bg-[#F8F9FC] transition-colors">New Customer</button>
              </div>
            )}
          </div>

          {/* Dark Mode Toggle */}
          <button
            onClick={() => setDarkMode(!darkMode)}
            className="w-[40px] h-[40px] flex items-center justify-center rounded-lg hover:bg-[#F8F9FC] transition-colors"
          >
            {darkMode ? <Sun className="w-5 h-5 text-[#6B7280]" /> : <Moon className="w-5 h-5 text-[#6B7280]" />}
          </button>

          {/* Notifications */}
          <div className="relative">
            <button className="w-[40px] h-[40px] flex items-center justify-center rounded-lg hover:bg-[#F8F9FC] transition-colors">
              <Bell className="w-5 h-5 text-[#6B7280]" />
              <span className="absolute top-2 right-2 w-2 h-2 bg-[#EF4444] rounded-full"></span>
            </button>
          </div>

          {/* Profile */}
          <div className="relative">
            <button
              onClick={() => setShowProfileMenu(!showProfileMenu)}
              className="flex items-center gap-3 pl-3 pr-2 py-1 rounded-lg hover:bg-[#F8F9FC] transition-colors"
            >
              <div className="text-right">
                <div className="text-sm text-[#1A1A1A]">John Anderson</div>
                <div className="text-xs text-[#6B7280]">Administrator</div>
              </div>
              <div className="w-9 h-9 bg-gradient-to-br from-[#2962FF] to-[#4975FF] rounded-full flex items-center justify-center">
                <span className="text-white text-sm">JA</span>
              </div>
            </button>
            {showProfileMenu && (
              <div className="absolute right-0 top-full mt-2 w-[200px] bg-white rounded-lg shadow-lg border border-[#E6E8EC] py-2 z-50">
                <button className="w-full px-4 py-2 text-left text-sm hover:bg-[#F8F9FC] transition-colors">Profile Settings</button>
                <button className="w-full px-4 py-2 text-left text-sm hover:bg-[#F8F9FC] transition-colors">Account</button>
                <button className="w-full px-4 py-2 text-left text-sm hover:bg-[#F8F9FC] transition-colors">Preferences</button>
                <div className="border-t border-[#E6E8EC] my-2"></div>
                <button className="w-full px-4 py-2 text-left text-sm text-[#EF4444] hover:bg-[#F8F9FC] transition-colors">Logout</button>
              </div>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
}
