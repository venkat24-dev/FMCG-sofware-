import React from 'react';
import { Plus, Search, Filter, Download, Users, Building, MapPin, Phone } from 'lucide-react';
import DataTable from '../components/ui/DataTable';
import{ Badge }from '../components/ui/Badge';
import StatCard from '../components/ui/StatCard';

export default function CRM() {
  const stats = [
    { title: 'Total Customers', value: '892', icon: <Users className="w-5 h-5" />, trend: { value: 15.3, direction: 'up' as const }, color: '#2962FF' },
    { title: 'Active Customers', value: '756', icon: <Users className="w-5 h-5" />, color: '#10B981' },
    { title: 'Distributors', value: '145', icon: <Building className="w-5 h-5" />, color: '#8B5CF6' },
    { title: 'New This Month', value: '34', icon: <Users className="w-5 h-5" />, trend: { value: 8.2, direction: 'up' as const }, color: '#F59E0B' }
  ];

  const customers = [
    {
      customerId: 'CUST-001',
      name: 'Retail Store A',
      type: 'Retailer',
      contact: '+91 98765 43210',
      email: 'retail.a@example.com',
      location: 'Mumbai, Maharashtra',
      gstin: '27AABCU9603R1ZM',
      totalOrders: 145,
      totalValue: 456789,
      lastOrder: '2024-02-20',
      status: 'Active'
    },
    {
      customerId: 'CUST-002',
      name: 'Distributor XYZ',
      type: 'Distributor',
      contact: '+91 98765 43211',
      email: 'xyz@distributor.com',
      location: 'Delhi, NCR',
      gstin: '07AABCU9603R1ZN',
      totalOrders: 89,
      totalValue: 892340,
      lastOrder: '2024-02-19',
      status: 'Active'
    },
    {
      customerId: 'CUST-003',
      name: 'Supermarket Chain',
      type: 'Retailer',
      contact: '+91 98765 43212',
      email: 'supermarket@chain.com',
      location: 'Bangalore, Karnataka',
      gstin: '29AABCU9603R1ZO',
      totalOrders: 234,
      totalValue: 1234560,
      lastOrder: '2024-02-21',
      status: 'Active'
    },
    {
      customerId: 'CUST-004',
      name: 'Wholesale Market',
      type: 'Wholesaler',
      contact: '+91 98765 43213',
      email: 'wholesale@market.com',
      location: 'Kolkata, West Bengal',
      gstin: '19AABCU9603R1ZP',
      totalOrders: 67,
      totalValue: 345678,
      lastOrder: '2024-01-15',
      status: 'Inactive'
    }
  ];

  const columns = [
    { key: 'customerId', label: 'Customer ID' },
    { key: 'name', label: 'Name', render: (value: string) => <span className="text-[#1A1A1A]">{value}</span> },
    {
      key: 'type',
      label: 'Type',
      render: (value: string) => (
        <Badge variant={
          value === 'Distributor' ? 'purple' :
          value === 'Wholesaler' ? 'info' :
          'default'
        }>
          {value}
        </Badge>
      )
    },
    { key: 'contact', label: 'Contact' },
    { key: 'location', label: 'Location' },
    { key: 'totalOrders', label: 'Orders', render: (value: number) => value },
    { key: 'totalValue', label: 'Total Value', render: (value: number) => `₹${value.toLocaleString()}` },
    { key: 'lastOrder', label: 'Last Order', render: (value: string) => new Date(value).toLocaleDateString() },
    {
      key: 'status',
      label: 'Status',
      render: (value: string) => (
        <Badge variant={value === 'Active' ? 'success' : 'default'}>{value}</Badge>
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
            </div>
          </div>
          <div className="text-sm text-[#6B7280] mb-1">Home {">"} CRM</div>
          <h1 className="text-[#1A1A1A]">Customer Relationship Management</h1>
        </div>
        <div className="mb-6">
          <div className="w-7 h-1">
            <p className="text-[16px]"></p>
          </div>
        </div>
        <div className="flex items-center gap-5">
          <button className="h-[40px] px-4 bg-white border border-[#E6E8EC] rounded-lg hover:bg-[#F8F9FC] transition-colors flex items-center gap-2">
            <Download className="w-4 h-4" />
            <span className="text-sm">Export</span>
          </button>
          <button className="h-[40px] px-4 bg-[#2962FF] hover:bg-[#1E4ED8] text-white rounded-lg flex items-center gap-2 transition-colors">
            <Plus className="w-4 h-4" />
            <span className="text-sm">Add Customer</span>
          </button>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {stats.map((stat, index) => (
          <StatCard key={index} {...stat} />
        ))}
      </div>

      <div className="bg-white rounded-lg border border-[#E6E8EC] p-4">
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center gap-3">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 w- h-4 text-[#6B7280]" />
              <input
                type="text"
                placeholder="Search customers..."
                className="w-[400px] h-[40px] bg-[#F8F9FC] border border-[#E6E8EC] rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-[#2962FF] focus:border-transparent font-[Imprima] text-[16px] not-italic text-center font-bold font-normal"
              />
            </div>
            <button className="w-[100px] h-[40px] px-4 bg-white border border-[#E6E8EC] rounded-lg hover:bg-[#F8F9FC] transition-colors flex items-center gap-2 text-sm">
              <Filter className="w-7 h-4" />
              <span>Filters</span>
            </button>
          </div>
        </div>

        <DataTable columns={columns} data={customers} />
      </div>
    </div>
  );
}
