import React, { useState } from "react";
import {
  User,
  Building2,
  Palette,
  Bell,
  Shield,
  MapPin,
  Users,
  Plug,
  CreditCard,
  Database,
  FileText,
  Save,
  Upload,
  Download,
  Plus,
  Trash2,
  Edit,
  Eye,
  LogOut,
  Check,
  X,
} from "lucide-react";
import  { Badge }from "../components/ui/Badge";
import DataTable from "../components/ui/DataTable";

type SettingsTab =
  | "profile"
  | "account"
  | "appearance"
  | "notifications"
  | "security"
  | "warehouses"
  | "users"
  | "integrations"
  | "billing"
  | "backup"
  | "audit";

export default function Settings() {
  const [activeTab, setActiveTab] = useState<SettingsTab>("appearance");
  const [darkMode, setDarkMode] = useState(false);
  const [primaryColor, setPrimaryColor] = useState("#2962FF");

  const menuItems = [
    { id: "profile" as SettingsTab, label: "Profile Settings", icon: User },
    {
      id: "account" as SettingsTab,
      label: "Account Settings",
      icon: Building2,
    },
    { id: "appearance" as SettingsTab, label: "Appearance", icon: Palette },
    { id: "notifications" as SettingsTab, label: "Notifications", icon: Bell },
    { id: "security" as SettingsTab, label: "Security", icon: Shield },
    {
      id: "warehouses" as SettingsTab,
      label: "Warehouses & Locations",
      icon: MapPin,
    },
    { id: "users" as SettingsTab, label: "Users & Roles", icon: Users },
    { id: "integrations" as SettingsTab, label: "Integrations", icon: Plug },
    {
      id: "billing" as SettingsTab,
      label: "Billing & Subscription",
      icon: CreditCard,
    },
    { id: "backup" as SettingsTab, label: "Backup & Restore", icon: Database },
    { id: "audit" as SettingsTab, label: "Audit Log", icon: FileText },
  ];

  // Sample data for tables
  const warehouseData = [
    {
      name: "Main Warehouse",
      location: "Mumbai, Maharashtra",
      manager: "Rajesh Kumar",
      status: "Active",
      capacity: "85%",
    },
    {
      name: "Secondary Warehouse",
      location: "Delhi, NCR",
      manager: "Priya Sharma",
      status: "Active",
      capacity: "62%",
    },
    {
      name: "Distribution Center",
      location: "Bangalore, Karnataka",
      manager: "Amit Patel",
      status: "Active",
      capacity: "78%",
    },
  ];

  const userData = [
    {
      name: "John Doe",
      email: "john@busyfmcg.com",
      role: "Admin",
      status: "Active",
      lastLogin: "2 hours ago",
    },
    {
      name: "Jane Smith",
      email: "jane@busyfmcg.com",
      role: "Manager",
      status: "Active",
      lastLogin: "5 hours ago",
    },
    {
      name: "Mike Johnson",
      email: "mike@busyfmcg.com",
      role: "Staff",
      status: "Inactive",
      lastLogin: "2 days ago",
    },
  ];

  const auditLogData = [
    {
      user: "John Doe",
      action: "Created Order",
      module: "Orders",
      timestamp: "2024-02-20 10:30 AM",
      ipAddress: "192.168.1.1",
      status: "Success",
    },
    {
      user: "Jane Smith",
      action: "Updated Inventory",
      module: "Inventory",
      timestamp: "2024-02-20 09:15 AM",
      ipAddress: "192.168.1.2",
      status: "Success",
    },
    {
      user: "Mike Johnson",
      action: "Deleted Product",
      module: "Products",
      timestamp: "2024-02-19 03:45 PM",
      ipAddress: "192.168.1.3",
      status: "Failed",
    },
  ];

  const loginHistoryData = [
    {
      device: "Chrome on Windows",
      location: "Mumbai, India",
      ipAddress: "103.45.67.89",
      timestamp: "2024-02-20 09:00 AM",
      status: "Active",
    },
    {
      device: "Safari on iPhone",
      location: "Mumbai, India",
      ipAddress: "103.45.67.90",
      timestamp: "2024-02-19 06:30 PM",
      status: "Logged Out",
    },
  ];

  const invoiceData = [
    {
      invoiceNo: "INV-2024-001",
      date: "2024-02-01",
      amount: "₹14,999",
      status: "Paid",
      plan: "Professional",
    },
    {
      invoiceNo: "INV-2024-002",
      date: "2024-01-01",
      amount: "₹14,999",
      status: "Paid",
      plan: "Professional",
    },
  ];

  const warehouseColumns = [
    { key: "name", label: "Warehouse Name" },
    { key: "location", label: "Location" },
    { key: "manager", label: "Manager" },
    {
      key: "status",
      label: "Status",
      render: (value: string) => (
        <Badge variant={value === "Active" ? "success" : "danger"}>
          {value}
        </Badge>
      ),
    },
    { key: "capacity", label: "Capacity" },
    {
      key: "actions",
      label: "Actions",
      render: () => (
        <div className="flex items-center gap-2">
          <button className="p-1 hover:bg-[#F8F9FC] rounded">
            <Edit className="w-4 h-4 text-[#6B7280]" />
          </button>
          <button className="p-1 hover:bg-[#F8F9FC] rounded">
            <Trash2 className="w-4 h-4 text-[#EF4444]" />
          </button>
        </div>
      ),
    },
  ];

  const userColumns = [
    { key: "name", label: "Name" },
    { key: "email", label: "Email" },
    {
      key: "role",
      label: "Role",
      render: (value: string) => (
        <Badge variant={value === "Admin" ? "info" : "default"}>{value}</Badge>
      ),
    },
    {
      key: "status",
      label: "Status",
      render: (value: string) => (
        <Badge variant={value === "Active" ? "success" : "warning"}>
          {value}
        </Badge>
      ),
    },
    { key: "lastLogin", label: "Last Login" },
    {
      key: "actions",
      label: "Actions",
      render: () => (
        <div className="flex items-center gap-2">
          <button className="p-1 hover:bg-[#F8F9FC] rounded">
            <Edit className="w-4 h-4 text-[#6B7280]" />
          </button>
          <button className="p-1 hover:bg-[#F8F9FC] rounded">
            <Trash2 className="w-4 h-4 text-[#EF4444]" />
          </button>
        </div>
      ),
    },
  ];

  const auditColumns = [
    { key: "user", label: "User" },
    { key: "action", label: "Action" },
    { key: "module", label: "Module" },
    { key: "timestamp", label: "Timestamp" },
    { key: "ipAddress", label: "IP Address" },
    {
      key: "status",
      label: "Status",
      render: (value: string) => (
        <Badge variant={value === "Success" ? "success" : "danger"}>
          {value}
        </Badge>
      ),
    },
  ];

  const loginColumns = [
    { key: "device", label: "Device" },
    { key: "location", label: "Location" },
    { key: "ipAddress", label: "IP Address" },
    { key: "timestamp", label: "Timestamp" },
    {
      key: "status",
      label: "Status",
      render: (value: string) => (
        <Badge variant={value === "Active" ? "success" : "default"}>
          {value}
        </Badge>
      ),
    },
  ];

  const invoiceColumns = [
    { key: "invoiceNo", label: "Invoice No." },
    { key: "date", label: "Date" },
    { key: "plan", label: "Plan" },
    { key: "amount", label: "Amount" },
    {
      key: "status",
      label: "Status",
      render: (value: string) => <Badge variant="success">{value}</Badge>,
    },
    {
      key: "actions",
      label: "Actions",
      render: () => (
        <button className="text-[#2962FF] hover:underline text-sm">
          Download
        </button>
      ),
    },
  ];

  const integrations = [
    {
      name: "GST Portal",
      description: "Sync GST returns and compliance",
      status: true,
      icon: "🇮🇳",
    },
    {
      name: "Payment Gateway",
      description: "Razorpay integration",
      status: true,
      icon: "💳",
    },
    {
      name: "SMS Provider",
      description: "Send SMS notifications",
      status: false,
      icon: "📱",
    },
    {
      name: "WhatsApp API",
      description: "WhatsApp Business integration",
      status: true,
      icon: "💬",
    },
    {
      name: "Tally / Busy Accounting",
      description: "Sync with accounting software",
      status: false,
      icon: "📊",
    },
  ];

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between px-[0px] py-[18px] mt-6">
        <div>
          <div className="text-sm text-[#6B7280] mb-1">Home {">"} Settings</div>
          <h1 className="text-[#1A1A1A]">Settings</h1>
        </div>
      </div>

      {/* Main Layout: Vertical Tabs + Content */}
      <div className="grid grid-cols-12 gap-5">
        {/* Left Sidebar - Vertical Tabs */}
        <div className="col-span-3">
          <div className="bg-white rounded-xl border border-[#E6E8EC] p-4 shadow-sm">
            <nav className="space-y-1">
              {menuItems.map((item) => {
                const Icon = item.icon;
                return (
                  <button
                    key={item.id}
                    onClick={() => setActiveTab(item.id)}
                    className={`w-full flex items-center gap-3 px-4 py-3 rounded-lg transition-colors text-left ${
                      activeTab === item.id
                        ? "bg-[#EEF2FF] text-[#2962FF]"
                        : "text-[#6B7280] hover:bg-[#F8F9FC]"
                    }`}
                  >
                    <Icon className="w-5 h-5 flex-shrink-0" />
                    <span className="text-sm">{item.label}</span>
                  </button>
                );
              })}
            </nav>
          </div>
        </div>

        {/* Right Content Area */}
        <div className="col-span-9">
          {/* Profile Settings */}
          {activeTab === "profile" && (
            <div className="bg-white rounded-xl border border-[#E6E8EC] p-6 shadow-sm">
              <h2 className="text-lg mb-6 text-[#1A1A1A]">Profile Settings</h2>

              <div className="space-y-6">
                {/* Profile Photo */}
                <div className="flex items-center gap-6">
                  <div className="w-24 h-24 rounded-full bg-gradient-to-br from-[#2962FF] to-[#4975FF] flex items-center justify-center text-white text-2xl">
                    JD
                  </div>
                  <div>
                    <button className="px-4 py-2 bg-[#2962FF] text-white rounded-lg hover:bg-[#1E4ED8] transition-colors text-sm">
                      Change Photo
                    </button>
                    <p className="text-xs text-[#6B7280] mt-2">
                      JPG, PNG or GIF. Max size 2MB
                    </p>
                  </div>
                </div>

                {/* Form Fields */}
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm text-[#6B7280] mb-2">
                      Full Name
                    </label>
                    <input
                      type="text"
                      defaultValue="John Doe"
                      className="w-full h-[44px] px-4 bg-[#F8F9FC] border border-[#E6E8EC] rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-[#2962FF] focus:border-transparent"
                    />
                  </div>
                  <div>
                    <label className="block text-sm text-[#6B7280] mb-2">
                      Email
                    </label>
                    <input
                      type="email"
                      defaultValue="john@busyfmcg.com"
                      className="w-full h-[44px] px-4 bg-[#F8F9FC] border border-[#E6E8EC] rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-[#2962FF] focus:border-transparent"
                    />
                  </div>
                  <div>
                    <label className="block text-sm text-[#6B7280] mb-2">
                      Phone
                    </label>
                    <input
                      type="tel"
                      defaultValue="+91 98765 43210"
                      className="w-full h-[44px] px-4 bg-[#F8F9FC] border border-[#E6E8EC] rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-[#2962FF] focus:border-transparent"
                    />
                  </div>
                  <div>
                    <label className="block text-sm text-[#6B7280] mb-2">
                      Role
                    </label>
                    <input
                      type="text"
                      defaultValue="Administrator"
                      disabled
                      className="w-full h-[44px] px-4 bg-[#E6E8EC] border border-[#E6E8EC] rounded-lg text-sm text-[#6B7280]"
                    />
                  </div>
                </div>

                <div className="flex justify-end pt-4">
                  <button className="px-6 py-2.5 bg-[#2962FF] text-white rounded-lg hover:bg-[#1E4ED8] transition-colors flex items-center gap-2">
                    <Save className="w-4 h-4" />
                    Save Changes
                  </button>
                </div>
              </div>
            </div>
          )}

          {/* Account Settings */}
          {activeTab === "account" && (
            <div className="bg-white rounded-xl border border-[#E6E8EC] p-6 shadow-sm">
              <h2 className="text-lg mb-6 text-[#1A1A1A]">Account Settings</h2>

              <div className="space-y-6">
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm text-[#6B7280] mb-2">
                      Company Name
                    </label>
                    <input
                      type="text"
                      defaultValue="BUSY FMCG Manager Pvt Ltd"
                      className="w-full h-[44px] px-4 bg-[#F8F9FC] border border-[#E6E8EC] rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-[#2962FF] focus:border-transparent"
                    />
                  </div>
                  <div>
                    <label className="block text-sm text-[#6B7280] mb-2">
                      Company GST Number
                    </label>
                    <input
                      type="text"
                      defaultValue="27AABCU9603R1ZM"
                      className="w-full h-[44px] px-4 bg-[#F8F9FC] border border-[#E6E8EC] rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-[#2962FF] focus:border-transparent"
                    />
                  </div>
                  <div>
                    <label className="block text-sm text-[#6B7280] mb-2">
                      Currency
                    </label>
                    <select className="w-full h-[44px] px-4 bg-[#F8F9FC] border border-[#E6E8EC] rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-[#2962FF] focus:border-transparent">
                      <option>INR - Indian Rupee (₹)</option>
                      <option>USD - US Dollar ($)</option>
                      <option>EUR - Euro (€)</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-sm text-[#6B7280] mb-2">
                      Timezone
                    </label>
                    <select className="w-full h-[44px] px-4 bg-[#F8F9FC] border border-[#E6E8EC] rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-[#2962FF] focus:border-transparent">
                      <option>Asia/Kolkata (IST +5:30)</option>
                      <option>America/New_York (EST -5:00)</option>
                      <option>Europe/London (GMT +0:00)</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-sm text-[#6B7280] mb-2">
                    Registered Address
                  </label>
                  <textarea
                    rows={3}
                    defaultValue="123, Business Park, Andheri East, Mumbai, Maharashtra - 400069"
                    className="w-full px-4 py-3 bg-[#F8F9FC] border border-[#E6E8EC] rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-[#2962FF] focus:border-transparent"
                  />
                </div>

                <div className="flex justify-end pt-4">
                  <button className="px-6 py-2.5 bg-[#2962FF] text-white rounded-lg hover:bg-[#1E4ED8] transition-colors flex items-center gap-2">
                    <Save className="w-4 h-4" />
                    Save Changes
                  </button>
                </div>
              </div>
            </div>
          )}

          {/* Appearance */}
          {activeTab === "appearance" && (
            <div className="space-y-5">
              <div className="bg-white rounded-xl border border-[#E6E8EC] p-6 shadow-sm">
                <h2 className="text-lg mb-6 text-[#1A1A1A]">Appearance</h2>

                <div className="space-y-6">
                  {/* Theme Mode */}
                  <div className="flex items-center justify-between pb-4 border-b border-[#E6E8EC]">
                    <div>
                      <p className="text-sm text-[#1A1A1A] mb-1">Theme Mode</p>
                      <p className="text-xs text-[#6B7280]">
                        Choose between light and dark mode
                      </p>
                    </div>
                    <div className="flex items-center gap-3">
                      <button
                        onClick={() => setDarkMode(false)}
                        className={`px-4 py-2 rounded-lg text-sm transition-colors ${
                          !darkMode
                            ? "bg-[#2962FF] text-white"
                            : "bg-[#F8F9FC] text-[#6B7280] hover:bg-[#E6E8EC]"
                        }`}
                      >
                        Light Mode
                      </button>
                      <button
                        onClick={() => setDarkMode(true)}
                        className={`px-4 py-2 rounded-lg text-sm transition-colors ${
                          darkMode
                            ? "bg-[#2962FF] text-white"
                            : "bg-[#F8F9FC] text-[#6B7280] hover:bg-[#E6E8EC]"
                        }`}
                      >
                        Dark Mode
                      </button>
                    </div>
                  </div>

                  {/* Primary Color */}
                  <div className="flex items-center justify-between pb-4 border-b border-[#E6E8EC]">
                    <div>
                      <p className="text-sm text-[#1A1A1A] mb-1">
                        Primary Color
                      </p>
                      <p className="text-xs text-[#6B7280]">
                        Customize your brand color
                      </p>
                    </div>
                    <div className="flex items-center gap-3">
                      {[
                        "#2962FF",
                        "#8B5CF6",
                        "#10B981",
                        "#F59E0B",
                        "#EF4444",
                      ].map((color) => (
                        <button
                          key={color}
                          onClick={() => setPrimaryColor(color)}
                          className={`w-10 h-10 rounded-lg transition-all ${
                            primaryColor === color
                              ? "ring-2 ring-offset-2 ring-[#2962FF]"
                              : ""
                          }`}
                          style={{ backgroundColor: color }}
                        />
                      ))}
                    </div>
                  </div>

                  {/* Font Size */}
                  <div className="flex items-center justify-between pb-4 border-b border-[#E6E8EC]">
                    <div>
                      <p className="text-sm text-[#1A1A1A] mb-1">Font Size</p>
                      <p className="text-xs text-[#6B7280]">
                        Adjust the text size
                      </p>
                    </div>
                    <select className="w-[200px] h-[40px] px-4 bg-[#F8F9FC] border border-[#E6E8EC] rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-[#2962FF]">
                      <option>Small</option>
                      <option selected>Medium (Default)</option>
                      <option>Large</option>
                    </select>
                  </div>
                </div>
              </div>

              {/* Preview Box */}
              <div className="bg-white rounded-xl border border-[#E6E8EC] p-6 shadow-sm">
                <h3 className="text-sm text-[#1A1A1A] mb-4">Theme Preview</h3>
                <div
                  className="border border-[#E6E8EC] rounded-lg p-6"
                  style={{ backgroundColor: darkMode ? "#1A1A1A" : "#F8F9FC" }}
                >
                  <div className="flex items-center gap-3 mb-4">
                    <div
                      className="w-12 h-12 rounded-lg"
                      style={{ backgroundColor: primaryColor }}
                    ></div>
                    <div>
                      <p
                        className={`text-sm mb-1 ${
                          darkMode ? "text-white" : "text-[#1A1A1A]"
                        }`}
                      >
                        Sample Card Title
                      </p>
                      <p
                        className={`text-xs ${
                          darkMode ? "text-gray-400" : "text-[#6B7280]"
                        }`}
                      >
                        This is how your dashboard will look
                      </p>
                    </div>
                  </div>
                  <button
                    className="px-4 py-2 rounded-lg text-sm text-white"
                    style={{ backgroundColor: primaryColor }}
                  >
                    Sample Button
                  </button>
                </div>
              </div>
            </div>
          )}

          {/* Notifications */}
          {activeTab === "notifications" && (
            <div className="bg-white rounded-xl border border-[#E6E8EC] p-6 shadow-sm">
              <h2 className="text-lg mb-6 text-[#1A1A1A]">
                Notification Preferences
              </h2>

              <div className="space-y-6">
                {/* Email Alerts */}
                <div className="flex items-center justify-between pb-4 border-b border-[#E6E8EC]">
                  <div>
                    <p className="text-sm text-[#1A1A1A] mb-1">Email Alerts</p>
                    <p className="text-xs text-[#6B7280]">
                      Receive notifications via email
                    </p>
                  </div>
                  <label className="relative inline-flex items-center cursor-pointer">
                    <input
                      type="checkbox"
                      className="sr-only peer"
                      defaultChecked
                    />
                    <div className="w-11 h-6 bg-[#E6E8EC] peer-focus:outline-none peer-focus:ring-2 peer-focus:ring-[#2962FF] rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-[#2962FF]"></div>
                  </label>
                </div>

                {/* SMS Alerts */}
                <div className="flex items-center justify-between pb-4 border-b border-[#E6E8EC]">
                  <div>
                    <p className="text-sm text-[#1A1A1A] mb-1">SMS Alerts</p>
                    <p className="text-xs text-[#6B7280]">
                      Receive notifications via SMS
                    </p>
                  </div>
                  <label className="relative inline-flex items-center cursor-pointer">
                    <input type="checkbox" className="sr-only peer" />
                    <div className="w-11 h-6 bg-[#E6E8EC] peer-focus:outline-none peer-focus:ring-2 peer-focus:ring-[#2962FF] rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-[#2962FF]"></div>
                  </label>
                </div>

                {/* Inventory Alerts */}
                <div className="pb-4 border-b border-[#E6E8EC]">
                  <div className="flex items-center justify-between mb-3">
                    <div>
                      <p className="text-sm text-[#1A1A1A] mb-1">
                        Low Stock Alerts
                      </p>
                      <p className="text-xs text-[#6B7280]">
                        Get notified when inventory is low
                      </p>
                    </div>
                    <label className="relative inline-flex items-center cursor-pointer">
                      <input
                        type="checkbox"
                        className="sr-only peer"
                        defaultChecked
                      />
                      <div className="w-11 h-6 bg-[#E6E8EC] peer-focus:outline-none peer-focus:ring-2 peer-focus:ring-[#2962FF] rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-[#2962FF]"></div>
                    </label>
                  </div>
                  <div className="ml-0">
                    <label className="block text-xs text-[#6B7280] mb-2">
                      Alert Threshold
                    </label>
                    <select className="w-[200px] h-[40px] px-4 bg-[#F8F9FC] border border-[#E6E8EC] rounded-lg text-sm">
                      <option>10 units</option>
                      <option selected>20 units</option>
                      <option>50 units</option>
                      <option>100 units</option>
                    </select>
                  </div>
                </div>

                {/* Order Status Updates */}
                <div className="space-y-3">
                  <p className="text-sm text-[#1A1A1A]">Order Status Updates</p>

                  <div className="flex items-center justify-between">
                    <p className="text-xs text-[#6B7280]">New Order Created</p>
                    <label className="relative inline-flex items-center cursor-pointer">
                      <input
                        type="checkbox"
                        className="sr-only peer"
                        defaultChecked
                      />
                      <div className="w-11 h-6 bg-[#E6E8EC] peer-focus:outline-none peer-focus:ring-2 peer-focus:ring-[#2962FF] rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-[#2962FF]"></div>
                    </label>
                  </div>

                  <div className="flex items-center justify-between">
                    <p className="text-xs text-[#6B7280]">Order Shipped</p>
                    <label className="relative inline-flex items-center cursor-pointer">
                      <input
                        type="checkbox"
                        className="sr-only peer"
                        defaultChecked
                      />
                      <div className="w-11 h-6 bg-[#E6E8EC] peer-focus:outline-none peer-focus:ring-2 peer-focus:ring-[#2962FF] rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-[#2962FF]"></div>
                    </label>
                  </div>

                  <div className="flex items-center justify-between">
                    <p className="text-xs text-[#6B7280]">Order Delivered</p>
                    <label className="relative inline-flex items-center cursor-pointer">
                      <input
                        type="checkbox"
                        className="sr-only peer"
                        defaultChecked
                      />
                      <div className="w-11 h-6 bg-[#E6E8EC] peer-focus:outline-none peer-focus:ring-2 peer-focus:ring-[#2962FF] rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-[#2962FF]"></div>
                    </label>
                  </div>

                  <div className="flex items-center justify-between">
                    <p className="text-xs text-[#6B7280]">Order Cancelled</p>
                    <label className="relative inline-flex items-center cursor-pointer">
                      <input
                        type="checkbox"
                        className="sr-only peer"
                        defaultChecked
                      />
                      <div className="w-11 h-6 bg-[#E6E8EC] peer-focus:outline-none peer-focus:ring-2 peer-focus:ring-[#2962FF] rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-[#2962FF]"></div>
                    </label>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* Security */}
          {activeTab === "security" && (
            <div className="space-y-5">
              {/* Change Password */}
              <div className="bg-white rounded-xl border border-[#E6E8EC] p-6 shadow-sm">
                <h2 className="text-lg mb-6 text-[#1A1A1A]">Change Password</h2>

                <div className="space-y-4">
                  <div>
                    <label className="block text-sm text-[#6B7280] mb-2">
                      Current Password
                    </label>
                    <input
                      type="password"
                      className="w-full h-[44px] px-4 bg-[#F8F9FC] border border-[#E6E8EC] rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-[#2962FF] focus:border-transparent"
                    />
                  </div>
                  <div>
                    <label className="block text-sm text-[#6B7280] mb-2">
                      New Password
                    </label>
                    <input
                      type="password"
                      className="w-full h-[44px] px-4 bg-[#F8F9FC] border border-[#E6E8EC] rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-[#2962FF] focus:border-transparent"
                    />
                  </div>
                  <div>
                    <label className="block text-sm text-[#6B7280] mb-2">
                      Confirm New Password
                    </label>
                    <input
                      type="password"
                      className="w-full h-[44px] px-4 bg-[#F8F9FC] border border-[#E6E8EC] rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-[#2962FF] focus:border-transparent"
                    />
                  </div>
                  <button className="px-6 py-2.5 bg-[#2962FF] text-white rounded-lg hover:bg-[#1E4ED8] transition-colors text-sm">
                    Update Password
                  </button>
                </div>
              </div>

              {/* Two-Factor Authentication */}
              <div className="bg-white rounded-xl border border-[#E6E8EC] p-6 shadow-sm">
                <h2 className="text-lg mb-4 text-[#1A1A1A]">
                  Two-Factor Authentication
                </h2>
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm text-[#1A1A1A] mb-1">Enable 2FA</p>
                    <p className="text-xs text-[#6B7280]">
                      Add an extra layer of security to your account
                    </p>
                  </div>
                  <label className="relative inline-flex items-center cursor-pointer">
                    <input type="checkbox" className="sr-only peer" />
                    <div className="w-11 h-6 bg-[#E6E8EC] peer-focus:outline-none peer-focus:ring-2 peer-focus:ring-[#2962FF] rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-[#2962FF]"></div>
                  </label>
                </div>
              </div>

              {/* Login History */}
              <div className="bg-white rounded-xl border border-[#E6E8EC] p-6 shadow-sm">
                <div className="flex items-center justify-between mb-4">
                  <h2 className="text-lg text-[#1A1A1A]">Login History</h2>
                  <button className="px-4 py-2 bg-[#EF4444] text-white rounded-lg hover:bg-[#DC2626] transition-colors text-sm flex items-center gap-2">
                    <LogOut className="w-4 h-4" />
                    Logout All Devices
                  </button>
                </div>
                <DataTable columns={loginColumns} data={loginHistoryData} />
              </div>
            </div>
          )}

          {/* Warehouses & Locations */}
          {activeTab === "warehouses" && (
            <div className="bg-white rounded-xl border border-[#E6E8EC] p-6 shadow-sm">
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-lg text-[#1A1A1A]">
                  Warehouses & Locations
                </h2>
                <button className="px-4 py-2 bg-[#2962FF] text-white rounded-lg hover:bg-[#1E4ED8] transition-colors text-sm flex items-center gap-2">
                  <Plus className="w-4 h-4" />
                  Add Warehouse
                </button>
              </div>
              <DataTable columns={warehouseColumns} data={warehouseData} />
            </div>
          )}

          {/* Users & Roles */}
          {activeTab === "users" && (
            <div className="bg-white rounded-xl border border-[#E6E8EC] p-6 shadow-sm">
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-lg text-[#1A1A1A]">Users & Roles</h2>
                <button className="px-4 py-2 bg-[#2962FF] text-white rounded-lg hover:bg-[#1E4ED8] transition-colors text-sm flex items-center gap-2">
                  <Plus className="w-4 h-4" />
                  Add User
                </button>
              </div>
              <DataTable columns={userColumns} data={userData} />
            </div>
          )}

          {/* Integrations */}
          {activeTab === "integrations" && (
            <div className="bg-white rounded-xl border border-[#E6E8EC] p-6 shadow-sm">
              <h2 className="text-lg mb-6 text-[#1A1A1A]">Integrations</h2>

              <div className="grid grid-cols-1 gap-4">
                {integrations.map((integration, index) => (
                  <div
                    key={index}
                    className="flex items-center justify-between p-4 border border-[#E6E8EC] rounded-lg hover:shadow-sm transition-shadow"
                  >
                    <div className="flex items-center gap-4">
                      <div className="w-12 h-12 bg-[#F8F9FC] rounded-lg flex items-center justify-center text-2xl">
                        {integration.icon}
                      </div>
                      <div>
                        <p className="text-sm text-[#1A1A1A] mb-1">
                          {integration.name}
                        </p>
                        <p className="text-xs text-[#6B7280]">
                          {integration.description}
                        </p>
                      </div>
                    </div>
                    <div className="flex items-center gap-3">
                      <label className="relative inline-flex items-center cursor-pointer">
                        <input
                          type="checkbox"
                          className="sr-only peer"
                          defaultChecked={integration.status}
                        />
                        <div className="w-11 h-6 bg-[#E6E8EC] peer-focus:outline-none peer-focus:ring-2 peer-focus:ring-[#2962FF] rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-[#2962FF]"></div>
                      </label>
                      <button className="px-4 py-2 bg-[#F8F9FC] border border-[#E6E8EC] rounded-lg hover:bg-white transition-colors text-sm">
                        Configure
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Billing & Subscription */}
          {activeTab === "billing" && (
            <div className="space-y-5">
              {/* Current Plan */}
              <div className="bg-white rounded-xl border border-[#E6E8EC] p-6 shadow-sm">
                <h2 className="text-lg mb-6 text-[#1A1A1A]">Current Plan</h2>

                <div className="bg-gradient-to-br from-[#2962FF] to-[#4975FF] rounded-lg p-6 text-white mb-6">
                  <div className="flex items-center justify-between mb-4">
                    <div>
                      <h3 className="text-2xl mb-2">Professional Plan</h3>
                      <p className="text-sm opacity-90">
                        For growing businesses
                      </p>
                    </div>
                    <div className="text-right">
                      <p className="text-3xl">₹14,999</p>
                      <p className="text-sm opacity-90">/month</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-2 text-sm">
                    <Check className="w-4 h-4" />
                    <span>Renews on March 1, 2024</span>
                  </div>
                </div>

                <div className="space-y-4">
                  <div className="flex items-center justify-between pb-3 border-b border-[#E6E8EC]">
                    <span className="text-sm text-[#6B7280]">
                      Payment Method
                    </span>
                    <div className="flex items-center gap-2">
                      <span className="text-sm text-[#1A1A1A]">
                        •••• •••• •••• 4242
                      </span>
                      <button className="text-[#2962FF] hover:underline text-sm">
                        Change
                      </button>
                    </div>
                  </div>
                  <button className="w-full h-[44px] bg-[#2962FF] text-white rounded-lg hover:bg-[#1E4ED8] transition-colors text-sm">
                    Change Plan
                  </button>
                </div>
              </div>

              {/* Invoice History */}
              <div className="bg-white rounded-xl border border-[#E6E8EC] p-6 shadow-sm">
                <h2 className="text-lg mb-6 text-[#1A1A1A]">Invoice History</h2>
                <DataTable columns={invoiceColumns} data={invoiceData} />
              </div>
            </div>
          )}

          {/* Backup & Restore */}
          {activeTab === "backup" && (
            <div className="bg-white rounded-xl border border-[#E6E8EC] p-6 shadow-sm">
              <h2 className="text-lg mb-6 text-[#1A1A1A]">Backup & Restore</h2>

              <div className="space-y-6">
                {/* Auto Backup */}
                <div className="flex items-center justify-between pb-4 border-b border-[#E6E8EC]">
                  <div>
                    <p className="text-sm text-[#1A1A1A] mb-1">
                      Automatic Backup
                    </p>
                    <p className="text-xs text-[#6B7280]">
                      Enable daily automatic backups
                    </p>
                  </div>
                  <label className="relative inline-flex items-center cursor-pointer">
                    <input
                      type="checkbox"
                      className="sr-only peer"
                      defaultChecked
                    />
                    <div className="w-11 h-6 bg-[#E6E8EC] peer-focus:outline-none peer-focus:ring-2 peer-focus:ring-[#2962FF] rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-[#2962FF]"></div>
                  </label>
                </div>

                {/* Last Backup */}
                <div className="bg-[#F8F9FC] rounded-lg p-4">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-sm text-[#1A1A1A] mb-1">Last Backup</p>
                      <p className="text-xs text-[#6B7280]">
                        February 20, 2024 at 3:00 AM
                      </p>
                    </div>
                    <Badge variant="success">Completed</Badge>
                  </div>
                </div>

                {/* Actions */}
                <div className="grid grid-cols-2 gap-4">
                  <button className="h-[44px] px-4 bg-[#2962FF] text-white rounded-lg hover:bg-[#1E4ED8] transition-colors flex items-center justify-center gap-2">
                    <Download className="w-4 h-4" />
                    Export Data
                  </button>
                  <button className="h-[44px] px-4 bg-white border border-[#E6E8EC] rounded-lg hover:bg-[#F8F9FC] transition-colors flex items-center justify-center gap-2">
                    <Upload className="w-4 h-4" />
                    Import Data
                  </button>
                </div>

                {/* Backup Info */}
                <div className="bg-[#FEF3C7] border border-[#FCD34D] rounded-lg p-4">
                  <p className="text-sm text-[#92400E]">
                    ⚠️ Backups are stored securely for 30 days. Download
                    important backups locally for long-term storage.
                  </p>
                </div>
              </div>
            </div>
          )}

          {/* Audit Log */}
          {activeTab === "audit" && (
            <div className="bg-white rounded-xl border border-[#E6E8EC] p-6 shadow-sm">
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-lg text-[#1A1A1A]">Audit Log</h2>
                <div className="flex items-center gap-3">
                  <select className="h-[40px] px-4 bg-[#F8F9FC] border border-[#E6E8EC] rounded-lg text-sm">
                    <option>All Users</option>
                    <option>John Doe</option>
                    <option>Jane Smith</option>
                  </select>
                  <select className="h-[40px] px-4 bg-[#F8F9FC] border border-[#E6E8EC] rounded-lg text-sm">
                    <option>All Actions</option>
                    <option>Create</option>
                    <option>Update</option>
                    <option>Delete</option>
                  </select>
                  <button className="h-[40px] px-4 bg-white border border-[#E6E8EC] rounded-lg hover:bg-[#F8F9FC] transition-colors flex items-center gap-2">
                    <Download className="w-4 h-4" />
                    Export
                  </button>
                </div>
              </div>
              <DataTable columns={auditColumns} data={auditLogData} />
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
