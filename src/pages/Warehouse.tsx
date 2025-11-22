import React, { useState } from 'react';
import { Plus, Search, Filter, Download, TruckIcon, Package, CheckCircle } from 'lucide-react';
import DataTable from '../components/ui/DataTable';
import { Badge } from '../components/ui/Badge';
import StatCard from '../components/ui/StatCard';

export default function Warehouse() {
  const [activeTab, setActiveTab] = useState('grn');

  const stats = [
    { title: 'Pending GRN', value: '23', icon: <Package className="w-5 h-5" />, color: '#F59E0B' },
    { title: 'Ready to Pick', value: '45', icon: <CheckCircle className="w-5 h-5" />, color: '#2962FF' },
    { title: 'In Transit', value: '67', icon: <TruckIcon className="w-5 h-5" />, color: '#8B5CF6' },
    { title: 'Dispatched Today', value: '89', icon: <CheckCircle className="w-5 h-5" />, color: '#10B981' }
  ];

  const grnData = [
    {
      grnNo: 'GRN-2024-001',
      poNumber: 'PO-2024-001',
      vendor: 'ABC Suppliers',
      receivedDate: '2024-02-20',
      items: 12,
      status: 'Verified',
      inspector: 'John Doe'
    },
    {
      grnNo: 'GRN-2024-002',
      poNumber: 'PO-2024-002',
      vendor: 'XYZ Distributors',
      receivedDate: '2024-02-21',
      items: 24,
      status: 'Pending',
      inspector: 'Jane Smith'
    },
    {
      grnNo: 'GRN-2024-003',
      poNumber: 'PO-2024-003',
      vendor: 'Global Traders',
      receivedDate: '2024-02-22',
      items: 8,
      status: 'Verified',
      inspector: 'Mike Johnson'
    }
  ];

  const pickingData = [
    {
      pickListNo: 'PL-2024-001',
      orderNo: 'ORD-2024-001',
      customer: 'Retail Store A',
      items: 15,
      picker: 'David Miller',
      status: 'In Progress',
      priority: 'High'
    },
    {
      pickListNo: 'PL-2024-002',
      orderNo: 'ORD-2024-002',
      customer: 'Distributor XYZ',
      items: 45,
      picker: 'Sarah Williams',
      status: 'Completed',
      priority: 'Medium'
    },
    {
      pickListNo: 'PL-2024-003',
      orderNo: 'ORD-2024-003',
      customer: 'Supermarket Chain',
      items: 32,
      picker: 'Tom Brown',
      status: 'Pending',
      priority: 'High'
    }
  ];

  const dispatchData = [
    {
      dispatchNo: 'DSP-2024-001',
      orderNo: 'ORD-2024-001',
      customer: 'Retail Store A',
      vehicle: 'MH-01-AB-1234',
      driver: 'Ramesh Kumar',
      dispatchTime: '2024-02-20 09:00 AM',
      status: 'Dispatched'
    },
    {
      dispatchNo: 'DSP-2024-002',
      orderNo: 'ORD-2024-002',
      customer: 'Distributor XYZ',
      vehicle: 'MH-02-CD-5678',
      driver: 'Suresh Patel',
      dispatchTime: '2024-02-20 11:30 AM',
      status: 'Loading'
    }
  ];

  const grnColumns = [
    { key: 'grnNo', label: 'GRN No.' },
    { key: 'poNumber', label: 'PO Number' },
    { key: 'vendor', label: 'Vendor' },
    {
      key: 'receivedDate',
      label: 'Received Date',
      render: (value: string) => new Date(value).toLocaleDateString()
    },
    { key: 'items', label: 'Items', render: (value: number) => `${value} items` },
    {
      key: 'status',
      label: 'Status',
      render: (value: string) => (
        <Badge variant={value === 'Verified' ? 'success' : 'warning'}>{value}</Badge>
      )
    },
    { key: 'inspector', label: 'Inspector' }
  ];

  const pickingColumns = [
    { key: 'pickListNo', label: 'Pick List No.' },
    { key: 'orderNo', label: 'Order No.' },
    { key: 'customer', label: 'Customer' },
    { key: 'items', label: 'Items', render: (value: number) => `${value} items` },
    { key: 'picker', label: 'Picker' },
    {
      key: 'status',
      label: 'Status',
      render: (value: string) => (
        <Badge variant={
          value === 'Completed' ? 'success' :
          value === 'In Progress' ? 'info' :
          'warning'
        }>
          {value}
        </Badge>
      )
    },
    {
      key: 'priority',
      label: 'Priority',
      render: (value: string) => (
        <Badge variant={value === 'High' ? 'danger' : 'default'}>{value}</Badge>
      )
    }
  ];

  const dispatchColumns = [
    { key: 'dispatchNo', label: 'Dispatch No.' },
    { key: 'orderNo', label: 'Order No.' },
    { key: 'customer', label: 'Customer' },
    { key: 'vehicle', label: 'Vehicle' },
    { key: 'driver', label: 'Driver' },
    { key: 'dispatchTime', label: 'Dispatch Time' },
    {
      key: 'status',
      label: 'Status',
      render: (value: string) => (
        <Badge variant={value === 'Dispatched' ? 'success' : 'warning'}>{value}</Badge>
      )
    }
  ];

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between px-[0px] py-[18px] mt-10">
        <div>
          <div className="mb-6">
            <div className="w-7 h-10">
              <p className="text-[16px]"></p>
              <p className="text-[16px]"></p>
            </div>
          </div>
          <div className="text-sm text-[#6B7280] mb-1">Home {'>'} Warehouse</div>
          <h1 className="text-[#1A1A1A]">Warehouse Management</h1>
        </div>
        <div className="flex items-center gap-3">
          <button className="h-[40px] px-4 bg-white border border-[#E6E8EC] rounded-lg hover:bg-[#F8F9FC] transition-colors flex items-center gap-2">
            <Download className="w-4 h-5" />
            <span className="text-sm">Export</span>
          </button>
          <button className="h-[40px] px-4 bg-[#2962FF] hover:bg-[#1E4ED8] text-white rounded-lg flex items-center gap-2 transition-colors">
            <Plus className="w-4 h-4" />
            <span className="text-sm">Create GRN</span>
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
              onClick={() => setActiveTab('grn')}
              className={`py-4 border-b-2 transition-colors ${
                activeTab === 'grn'
                  ? 'border-[#2962FF] text-[#2962FF]'
                  : 'border-transparent text-[#6B7280] hover:text-[#1A1A1A]'
              }`}
            >
              Goods Received Note (GRN)
            </button>
            <button
              onClick={() => setActiveTab('picking')}
              className={`py-4 border-b-2 transition-colors ${
                activeTab === 'picking'
                  ? 'border-[#2962FF] text-[#2962FF]'
                  : 'border-transparent text-[#6B7280] hover:text-[#1A1A1A]'
              }`}
            >
              Picking & Packing
            </button>
            <button
              onClick={() => setActiveTab('dispatch')}
              className={`py-4 border-b-2 transition-colors ${
                activeTab === 'dispatch'
                  ? 'border-[#2962FF] text-[#2962FF]'
                  : 'border-transparent text-[#6B7280] hover:text-[#1A1A1A]'
              }`}
            >
              Dispatch Board
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
                  placeholder="Search..."
                  className="w-[400px] h-[40px] bg-[#F8F9FC] border border-[#E6E8EC] rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-[#2962FF] focus:border-transparent font-[Imprima] text-[16px] not-italic text-center font-bold font-normal"
                />
              </div>
              <button className="h-[40px] px-4 bg-white border border-[#E6E8EC] rounded-lg hover:bg-[#F8F9FC] transition-colors flex items-center gap-2 text-sm">
                <Filter className="w-4 h-4" />
                <span>Filters</span>
              </button>
            </div>
          </div>

          {/* Table based on active tab */}
          {activeTab === 'grn' && <DataTable columns={grnColumns} data={grnData} />}
          {activeTab === 'picking' && <DataTable columns={pickingColumns} data={pickingData} />}
          {activeTab === 'dispatch' && <DataTable columns={dispatchColumns} data={dispatchData} />}
        </div>
      </div>
    </div>
  );
}