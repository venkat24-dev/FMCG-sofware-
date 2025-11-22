import React, { useState } from 'react';
import { Plus, Search, Filter, Download } from 'lucide-react';
import DataTable from '../components/ui/DataTable';
import { Badge } from '../components/ui/Badge';
import StatCard from '../components/ui/StatCard';
import { FileText, Clock, CheckCircle, XCircle } from 'lucide-react';

export default function Purchasing() {
  const [activeTab, setActiveTab] = useState('po');

  const stats = [
    { title: 'Total POs', value: '234', icon: <FileText className="w-5 h-5" />, color: '#2962FF' },
    { title: 'Pending Approval', value: '12', icon: <Clock className="w-5 h-5" />, color: '#F59E0B' },
    { title: 'Approved', value: '198', icon: <CheckCircle className="w-5 h-5" />, color: '#10B981' },
    { title: 'Rejected', value: '24', icon: <XCircle className="w-5 h-5" />, color: '#EF4444' }
  ];

  const vendors = [
    {
      vendorCode: 'VND-001',
      vendorName: 'ABC Suppliers',
      category: 'Dairy',
      contact: '+91 98765 43210',
      email: 'abc@suppliers.com',
      rating: 4.5,
      status: 'Active'
    },
    {
      vendorCode: 'VND-002',
      vendorName: 'XYZ Distributors',
      category: 'Grains',
      contact: '+91 98765 43211',
      email: 'xyz@distributors.com',
      rating: 4.8,
      status: 'Active'
    },
    {
      vendorCode: 'VND-003',
      vendorName: 'Global Traders',
      category: 'Oil',
      contact: '+91 98765 43212',
      email: 'global@traders.com',
      rating: 4.2,
      status: 'Active'
    }
  ];

  const purchaseOrders = [
    {
      poNumber: 'PO-2024-001',
      vendor: 'ABC Suppliers',
      orderDate: '2024-02-15',
      deliveryDate: '2024-02-25',
      items: 12,
      totalAmount: 125000,
      approvalStatus: 'Approved',
      status: 'Delivered'
    },
    {
      poNumber: 'PO-2024-002',
      vendor: 'XYZ Distributors',
      orderDate: '2024-02-18',
      deliveryDate: '2024-02-28',
      items: 24,
      totalAmount: 245000,
      approvalStatus: 'Pending',
      status: 'Processing'
    },
    {
      poNumber: 'PO-2024-003',
      vendor: 'Global Traders',
      orderDate: '2024-02-20',
      deliveryDate: '2024-03-01',
      items: 8,
      totalAmount: 89000,
      approvalStatus: 'Approved',
      status: 'In Transit'
    }
  ];

  const vendorColumns = [
    { key: 'vendorCode', label: 'Vendor Code' },
    { key: 'vendorName', label: 'Vendor Name' },
    {
      key: 'category',
      label: 'Category',
      render: (value: string) => <Badge variant="info">{value}</Badge>
    },
    { key: 'contact', label: 'Contact' },
    { key: 'email', label: 'Email' },
    {
      key: 'rating',
      label: 'Rating',
      render: (value: number) => (
        <div className="flex items-center gap-1">
          <span className="text-[#F59E0B]">★</span>
          <span>{value}</span>
        </div>
      )
    },
    {
      key: 'status',
      label: 'Status',
      render: (value: string) => <Badge variant="success">{value}</Badge>
    }
  ];

  const poColumns = [
    { key: 'poNumber', label: 'PO Number' },
    { key: 'vendor', label: 'Vendor' },
    {
      key: 'orderDate',
      label: 'Order Date',
      render: (value: string) => new Date(value).toLocaleDateString()
    },
    {
      key: 'deliveryDate',
      label: 'Delivery Date',
      render: (value: string) => new Date(value).toLocaleDateString()
    },
    { key: 'items', label: 'Items', render: (value: number) => `${value} items` },
    {
      key: 'totalAmount',
      label: 'Total Amount',
      render: (value: number) => `₹${value.toLocaleString()}`
    },
    {
      key: 'approvalStatus',
      label: 'Approval',
      render: (value: string) => (
        <Badge variant={
          value === 'Approved' ? 'success' :
          value === 'Pending' ? 'warning' :
          'danger'
        }>
          {value}
        </Badge>
      )
    },
    {
      key: 'status',
      label: 'Status',
      render: (value: string) => (
        <Badge variant={
          value === 'Delivered' ? 'success' :
          value === 'In Transit' ? 'info' :
          'warning'
        }>
          {value}
        </Badge>
      )
    }
  ];

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <div className="mb-6">
            <div className="w-7 h-10">
              <p className="text-[16px]"></p>
              <p className="text-[16px]"></p>
            </div>
          </div><div className="mb-6">
            <div className="w-7 h-3">

            </div>
          </div>
          <div className="text-sm text-[#6B7280] mb-1">Home {'>'} Purchasing</div>
          <h1 className="text-[#1A1A1A]">Purchasing Management</h1>
        </div>
        <div className="flex items-center gap-3">
          <button className="h-[40px] px-4 bg-white border border-[#E6E8EC] rounded-lg hover:bg-[#F8F9FC] transition-colors flex items-center gap-2">
            <Download className="w-4 h-4" />
            <span className="text-sm">Export</span>
          </button>
          <button className="h-[40px] px-4 b bg-[#2962FF] hover:bg-[#1E4ED8] text-white rounded-lg flex items-center gap-1 transition-colors">
            <Plus className="w-4 h-4" />
            <span className="text-sm pr-4">{activeTab === 'po' ? 'Create PO' : 'Add Vendor'}</span>
          </button>
        </div>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {stats.map((stat, index) => (
          <StatCard key={index} {...stat} />
        ))}
      </div>

      {/* Tabs */}
      <div className="bg-white rounded-lg border border-[#E6E8EC]">
        <div className="border-b border-[#E6E8EC] px-6">
          <div className="flex gap-6">
            <button
              onClick={() => setActiveTab('po')}
              className={`py-4 border-b-2 transition-colors ${
                activeTab === 'po'
                  ? 'border-[#2962FF] text-[#2962FF]'
                  : 'border-transparent text-[#6B7280] hover:text-[#1A1A1A]'
              }`}
            >
              Purchase Orders
            </button>
            <button
              onClick={() => setActiveTab('vendors')}
              className={`py-4 border-b-2 transition-colors ${
                activeTab === 'vendors'
                  ? 'border-[#2962FF] text-[#2962FF]'
                  : 'border-transparent text-[#6B7280] hover:text-[#1A1A1A]'
              }`}
            >
              Vendor Management
            </button>
          </div>
        </div>

        <div className="p-4">
          {/* Search & Filters */}
          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center gap-3">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-[#6B7280]" />               
                <input
                  type="text"
                  placeholder={`Search ${activeTab === 'po' ? 'purchase orders' : 'vendors'}...`}
                  className="w-[400px] h-[40px] bg-[#F8F9FC] border border-[#E6E8EC] rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-[#2962FF] focus:border-transparent font-[Imprima] text-[16px] not-italic text-center font-bold font-normal"                />
              </div>
              <button className="h-[40px] px-4 bg-white border border-[#E6E8EC] rounded-lg hover:bg-[#F8F9FC] transition-colors flex items-center gap-2 text-sm">
                <Filter className="w-4 h-4" />
                <span>Filters</span>
              </button>
            </div>
          </div>

          {/* Table */}
          {activeTab === 'po' && <DataTable columns={poColumns} data={purchaseOrders} />}
          {activeTab === 'vendors' && <DataTable columns={vendorColumns} data={vendors} />}
        </div>
      </div>
    </div>
  );
}
