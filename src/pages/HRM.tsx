import React, { useState } from 'react';
import { Plus, Search, Filter, Download, Users, Calendar } from 'lucide-react';
import DataTable from '../components/ui/DataTable';
import { Badge } from '../components/ui/Badge';
import StatCard from '../components/ui/StatCard';
import { UserCheck, UserX, Clock } from 'lucide-react';

export default function HRM() {
  const [activeTab, setActiveTab] = useState('employees');

  const stats = [
    { title: 'Total Employees', value: '156', icon: <Users className="w-5 h-5" />, color: '#2962FF' },
    { title: 'Present Today', value: '142', icon: <UserCheck className="w-5 h-5" />, color: '#10B981' },
    { title: 'On Leave', value: '14', icon: <UserX className="w-5 h-5" />, color: '#F59E0B' },
    { title: 'Pending Leaves', value: '8', icon: <Clock className="w-5 h-5" />, color: '#8B5CF6' }
  ];

  const employees = [
    {
      empId: 'EMP-001',
      name: 'John Anderson',
      department: 'Operations',
      designation: 'Manager',
      email: 'john.anderson@company.com',
      phone: '+91 98765 43210',
      joiningDate: '2020-05-15',
      status: 'Active'
    },
    {
      empId: 'EMP-002',
      name: 'Sarah Williams',
      department: 'Sales',
      designation: 'Executive',
      email: 'sarah.williams@company.com',
      phone: '+91 98765 43211',
      joiningDate: '2021-08-20',
      status: 'Active'
    },
    {
      empId: 'EMP-003',
      name: 'Mike Johnson',
      department: 'Warehouse',
      designation: 'Supervisor',
      email: 'mike.johnson@company.com',
      phone: '+91 98765 43212',
      joiningDate: '2019-03-10',
      status: 'Active'
    }
  ];

  const attendance = [
    { empId: 'EMP-001', name: 'John Anderson', date: '2024-02-20', checkIn: '09:15 AM', checkOut: '06:30 PM', hours: '09:15', status: 'Present' },
    { empId: 'EMP-002', name: 'Sarah Williams', date: '2024-02-20', checkIn: '09:00 AM', checkOut: '06:00 PM', hours: '09:00', status: 'Present' },
    { empId: 'EMP-003', name: 'Mike Johnson', date: '2024-02-20', checkIn: '-', checkOut: '-', hours: '-', status: 'On Leave' }
  ];

  const leaveRequests = [
    {
      empId: 'EMP-004',
      name: 'Emma Davis',
      leaveType: 'Sick Leave',
      from: '2024-02-22',
      to: '2024-02-23',
      days: 2,
      reason: 'Medical appointment',
      status: 'Pending'
    },
    {
      empId: 'EMP-005',
      name: 'Tom Brown',
      leaveType: 'Casual Leave',
      from: '2024-02-25',
      to: '2024-02-27',
      days: 3,
      reason: 'Personal work',
      status: 'Approved'
    }
  ];

  const empColumns = [
    { key: 'empId', label: 'Employee ID' },
    { key: 'name', label: 'Name' },
    { key: 'department', label: 'Department', render: (value: string) => <Badge variant="info">{value}</Badge> },
    { key: 'designation', label: 'Designation' },
    { key: 'email', label: 'Email' },
    { key: 'phone', label: 'Phone' },
    { key: 'joiningDate', label: 'Joining Date', render: (value: string) => new Date(value).toLocaleDateString() },
    { key: 'status', label: 'Status', render: (value: string) => <Badge variant="success">{value}</Badge> }
  ];

  const attendanceColumns = [
    { key: 'empId', label: 'Emp ID' },
    { key: 'name', label: 'Name' },
    { key: 'date', label: 'Date', render: (value: string) => new Date(value).toLocaleDateString() },
    { key: 'checkIn', label: 'Check In' },
    { key: 'checkOut', label: 'Check Out' },
    { key: 'hours', label: 'Hours' },
    {
      key: 'status',
      label: 'Status',
      render: (value: string) => (
        <Badge variant={value === 'Present' ? 'success' : value === 'On Leave' ? 'warning' : 'danger'}>
          {value}
        </Badge>
      )
    }
  ];

  const leaveColumns = [
    { key: 'empId', label: 'Emp ID' },
    { key: 'name', label: 'Name' },
    { key: 'leaveType', label: 'Leave Type', render: (value: string) => <Badge variant="purple">{value}</Badge> },
    { key: 'from', label: 'From', render: (value: string) => new Date(value).toLocaleDateString() },
    { key: 'to', label: 'To', render: (value: string) => new Date(value).toLocaleDateString() },
    { key: 'days', label: 'Days' },
    { key: 'reason', label: 'Reason' },
    {
      key: 'status',
      label: 'Status',
      render: (value: string) => (
        <Badge variant={
          value === 'Approved' ? 'success' :
          value === 'Pending' ? 'warning' :
          'danger'
        }>
          {value}
        </Badge>
      )
    }
  ];

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <div className="mb-6">
            <div className="w-7 h-10">
              <p className="text-[16px]"></p>
              <p className="text-[16px]"></p>
            </div>
          </div>
          <div className="text-sm text-[#6B7280] mb-1">Home {">"} HRM</div>
          <h1 className="text-[#1A1A1A]">Human Resource Management</h1>
        </div>
        <div className="flex items-center gap-3">
          <button className="h-[40px] px-4 bg-white border border-[#E6E8EC] rounded-lg hover:bg-[#F8F9FC] transition-colors flex items-center gap-2">
            <Download className="w-4 h-4" />
            <span className="text-sm">Export</span>
          </button>
          <button className="h-[40px] px-4 bg-[#2962FF] hover:bg-[#1E4ED8] text-white rounded-lg flex items-center gap-2 transition-colors">
            <Plus className="w-4 h-4" />
            <span className="text-sm">Add Employee</span>
          </button>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {stats.map((stat, index) => (
          <StatCard key={index} {...stat} />
        ))}
      </div>

      <div className="bg-white rounded-lg border border-[#E6E8EC]">
        <div className="border-b border-[#E6E8EC] px-6">
          <div className="flex gap-6">
            <button
              onClick={() => setActiveTab("employees")}
              className={`py-4 border-b-2 transition-colors ${
                activeTab === "employees"
                  ? "border-[#2962FF] text-[#2962FF]"
                  : "border-transparent text-[#6B7280]"
              }`}
            >
              Employees
            </button>
            <button
              onClick={() => setActiveTab("attendance")}
              className={`py-4 border-b-2 transition-colors ${
                activeTab === "attendance"
                  ? "border-[#2962FF] text-[#2962FF]"
                  : "border-transparent text-[#6B7280]"
              }`}
            >
              Attendance
            </button>
            <button
              onClick={() => setActiveTab("leaves")}
              className={`py-4 border-b-2 transition-colors ${
                activeTab === "leaves"
                  ? "border-[#2962FF] text-[#2962FF]"
                  : "border-transparent text-[#6B7280]"
              }`}
            >
              Leave Management
            </button>
          </div>
        </div>

        <div className="p-4">
          <div className="flex justify-between items-center mb-4">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-[#6B7280]" />
              <input
                type="text"
                placeholder="Search..."
                className="w-[400px] h-[40px] bg-[#F8F9FC] border border-[#E6E8EC] rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-[#2962FF] focus:border-transparent font-[Imprima] text-[16px] not-italic text-center font-bold font-normal"
              />
            </div>
            <button className="h-[40px] w-[200px] px-4 bg-white border border-[#E6E8EC] rounded-lg hover:bg-[#F8F9FC] transition-colors flex items-center justify-center gap-2 text-sm">
              <Filter className="w-4 h-4" />
              <span>Filters</span>
            </button>
          </div>

          {activeTab === "employees" && (
            <DataTable columns={empColumns} data={employees} />
          )}
          {activeTab === "attendance" && (
            <DataTable columns={attendanceColumns} data={attendance} />
          )}
          {activeTab === "leaves" && (
            <DataTable columns={leaveColumns} data={leaveRequests} />
          )}
        </div>
      </div>
    </div>
  );
}
