import React, { useState } from 'react';
import Sidebar from './Sidebar';
import TopNav from './TopNav';

interface DashboardLayoutProps {
  children: React.ReactNode;
}

export default function DashboardLayout({ children }: DashboardLayoutProps) {
  const [sidebarCollapsed, setSidebarCollapsed] = useState(false);

  return (
    <div className="min-h-screen bg-[#F8F9FC] flex flex-col">
      {/* Top Navigation */}
      <TopNav />
      
      {/* Horizontal Layout: Sidebar + Main Content */}
      <div className="flex flex-1 pt-[70px]">
        {/* Left: Sidebar */}
        <Sidebar collapsed={sidebarCollapsed} onToggle={() => setSidebarCollapsed(!sidebarCollapsed)} />
        
        {/* Right: Main Content */}
        <main className="flex-1 overflow-x-hidden">
          <div className="p-6">
            {children}
          </div>
        </main>
      </div>
    </div>
  );
}