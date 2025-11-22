import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import {
  LayoutDashboard,
  Users,
  FolderKanban,
  CheckSquare,
  Clock,
  DollarSign,
  FileText,
  Calendar,
  UserCheck,
  Settings,
  Package,
  ShoppingCart,
  Warehouse,
  ShoppingBag,
  Tag,
  Receipt,
  ChevronDown,
  ChevronRight,
  BarChart3,
  PanelLeftClose,
  PanelLeft
} from 'lucide-react';

interface SidebarProps {
  collapsed: boolean;
  onToggle: () => void;
}

interface MenuItem {
  name: string;
  icon: any;
  path?: string;
  badge?: string;
  children?: { name: string; path: string; icon?: any }[];
}

export default function Sidebar({ collapsed, onToggle }: SidebarProps) {
  const location = useLocation();
  const [expandedSections, setExpandedSections] = useState<string[]>(['Productivity', 'Inventory']);

  const toggleSection = (name: string) => {
    setExpandedSections(prev =>
      prev.includes(name) ? prev.filter(s => s !== name) : [...prev, name]
    );
  };

  const menuItems: MenuItem[] = [
    { name: 'Dashboard', icon: LayoutDashboard, path: '/' },
    { name: 'CRM', icon: Users, path: '/crm' },
    {
      name: 'Productivity',
      icon: FolderKanban,
      children: [
        { name: 'Projects', path: '/projects', icon: FolderKanban },
        { name: 'Tasks', path: '/tasks', icon: CheckSquare },
        { name: 'Time Tracker', path: '/time-tracker', icon: Clock }
      ]
    },
    {
      name: 'Inventory',
      icon: Package,
      children: [
        { name: 'Stock Management', path: '/inventory', icon: Package },
        { name: 'Orders', path: '/orders', icon: ShoppingCart },
        { name: 'Warehouse', path: '/warehouse', icon: Warehouse },
        { name: 'Purchasing', path: '/purchasing', icon: ShoppingBag }
      ]
    },
    { name: 'Pricing & Schemes', icon: Tag, path: '/pricing' },
    { name: 'Finance', icon: DollarSign, path: '/accounting' },
    { name: 'Docs', icon: FileText, path: '/docs' },
    { name: 'Scheduling', icon: Calendar, path: '/scheduling' },
    { name: 'HRM', icon: UserCheck, path: '/hrm' },
    { name: 'Reports', icon: BarChart3, path: '/reports' },
    { name: 'settings', icon: Settings, path: '/settings' }
  ];

  const isActive = (path?: string, children?: { name: string; path: string }[]) => {
    if (path) {
      return location.pathname === path;
    }
    if (children) {
      return children.some(child => location.pathname === child.path);
    }
    return false;
  };

  return (
    <aside
      className={`bg-white border-r border-[#E6E8EC] transition-all duration-300 overflow-y-auto flex-shrink-0 ${
        collapsed ? 'w-[70px]' : 'w-[200px]'
      }`}
    >
      <div className='w-7 h-9'>
        <p className='text-[16px]'></p>
      </div>
      <div className="h-full flex flex-col">
        {/* Toggle Button */}
        <div className="px-4 py-4 border-b border-[#E6E8EC]">
          <button
            onClick={onToggle}
            className={`w-full h-[36px] flex items-center gap-2 px-3 rounded-lg hover:bg-[#F8F9FC] transition-colors text-[17px] ${
              collapsed ? 'justify-center' : 'text-left'
            }`}
          >
            {collapsed ? (
              <PanelLeft className="w-5 h-5 text-[#6B7280]" />
            ) : (
              <>
                <PanelLeftClose className="w-5 h-5 text-[#6B7280]" />
                <span className="text-[#6B7280] font-medium">Menu Bar</span>
              </>
            )}
          </button>
        </div>

        {/* Menu Items */}
        <nav className="flex-1 overflow-y-auto py-4 px-2">
          {menuItems.map((item) => (
            <div key={item.name}>
              {item.children ? (
                <div>
                  <button
                    onClick={() => !collapsed && toggleSection(item.name)}
                    className={`w-full flex items-center gap-3 px-3 py-2.5 rounded-lg mb-1 transition-colors ${
                      isActive(undefined, item.children)
                        ? 'bg-[#EEF2FF] text-[#2962FF]'
                        : 'text-[#6B7280] hover:bg-[#F8F9FC]'
                    } ${collapsed ? 'justify-center' : ''}`}
                  >
                    <item.icon className="w-7 h-7 flex-shrink-0" />
                    {!collapsed && (
                      <>
                        <span className="flex-1 text-left text-sm">{item.name}</span>
                        {expandedSections.includes(item.name) ? (
                          <ChevronDown className="w-4 h-4" />
                        ) : (
                          <ChevronRight className="w-4 h-4" />
                        )}
                      </>
                    )}
                  </button>
                  {!collapsed && expandedSections.includes(item.name) && (
                    <div className="ml-8 mb-2 px-[20px] py-[0px]"> 
                      {item.children.map((child) => {
                        const ChildIcon = child.icon;
                        return (
                          <Link
                            key={child.path}
                            to={child.path}
                            className={`flex items-center gap-2 pl-12 px-3 py-2 rounded-lg mb-1 text-sm transition-colors ${
                              location.pathname === child.path
                                ? 'bg-[#EEF2FF] text-[#2962FF]'
                                : 'text-[#6B7280] hover:bg-[#F8F9FC]'
                            }`}
                          >
                            {ChildIcon && <ChildIcon className="w-4 h-4 flex-shrink-0" />}
                            {child.name}
                          </Link>
                        );
                      })}
                    </div>
                  )}
                </div>
              ) : (
                <Link
                  to={item.path || '#'}
                  className={`flex items-center gap-3 px-3 py-2.5 rounded-lg mb-1 transition-colors ${
                    isActive(item.path)
                      ? 'bg-[#EEF2FF] text-[#2962FF]'
                      : 'text-[#6B7280] hover:bg-[#F8F9FC]'
                  } ${collapsed ? 'justify-center' : ''}`}
                >
                  <item.icon className="w-5 h-5 flex-shrink-0" />
                  {!collapsed && <span className="text-sm">{item.name}</span>}
                  {!collapsed && item.badge && (
                    <span className="ml-auto text-xs bg-[#EF4444] text-white px-2 py-0.5 rounded-full">
                      {item.badge}
                    </span>
                  )}
                </Link>
              )}
            </div>
          ))}
        </nav>

        {/* Bottom Section */}
        {!collapsed && (
          <div className="p-4 border-t border-[#E6E8EC]">
            <div className="bg-gradient-to-br from-[#2962FF] to-[#4975FF] rounded-lg p-4 text-white">
              <p className="text-sm mb-2">Upgrade to Pro</p>
              <p className="text-xs opacity-90 mb-3">Get unlimited access to all features</p>
              <button className="w-full bg-white text-[#2962FF] py-2 rounded-lg text-sm hover:bg-gray-80 transition-colors">
                Upgrade Now
              </button>
            </div>
          </div>
        )}
      </div>
    </aside>
  );
}