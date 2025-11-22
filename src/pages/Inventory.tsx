import React, { useState } from 'react';
import { Plus, Search, Filter, Download, Upload, Barcode, RefreshCw } from 'lucide-react';
import DataTable from '../components/ui/DataTable';
import { Badge }from '../components/ui/Badge';
import StatCard from '../components/ui/StatCard';
import { Package, AlertTriangle, TrendingDown, Clock } from 'lucide-react';

export default function Inventory() {
  const [showAddModal, setShowAddModal] = useState(false);

  const stats = [
    { title: 'Total Products', value: '1,436', icon: <Package className="w-5 h-5" />, trend: { value: 5.2, direction: 'up' as const }, color: '#2962FF' },
    { title: 'Low Stock Items', value: '156', icon: <AlertTriangle className="w-5 h-5" />, trend: { value: 12.4, direction: 'up' as const }, color: '#F59E0B' },
    { title: 'Out of Stock', value: '23', icon: <TrendingDown className="w-5 h-5" />, trend: { value: 8.1, direction: 'down' as const }, color: '#EF4444' },
    { title: 'Expiring Soon', value: '12', icon: <Clock className="w-5 h-5" />, trend: { value: 3.2, direction: 'down' as const }, color: '#8B5CF6' }
  ];

  const inventory = [
    {
      sku: 'FMCG-001',
      productName: 'Premium Milk 1L',
      category: 'Dairy',
      batch: 'BTH-2024-001',
      quantity: 1245,
      reorderLevel: 500,
      expiryDate: '2024-04-15',
      location: 'WH-A-01',
      unitPrice: 65,
      totalValue: 80925,
      status: 'In Stock'
    },
    {
      sku: 'FMCG-002',
      productName: 'Wheat Flour 5kg',
      category: 'Grains',
      batch: 'BTH-2024-002',
      quantity: 85,
      reorderLevel: 100,
      expiryDate: '2024-06-20',
      location: 'WH-A-02',
      unitPrice: 245,
      totalValue: 20825,
      status: 'Low Stock'
    },
    {
      sku: 'FMCG-003',
      productName: 'Cooking Oil 1L',
      category: 'Oil',
      batch: 'BTH-2024-003',
      quantity: 0,
      reorderLevel: 200,
      expiryDate: '2024-08-10',
      location: 'WH-B-01',
      unitPrice: 180,
      totalValue: 0,
      status: 'Out of Stock'
    },
    {
      sku: 'FMCG-004',
      productName: 'Rice Basmati 10kg',
      category: 'Grains',
      batch: 'BTH-2024-004',
      quantity: 456,
      reorderLevel: 150,
      expiryDate: '2024-12-31',
      location: 'WH-A-03',
      unitPrice: 890,
      totalValue: 405840,
      status: 'In Stock'
    },
    {
      sku: 'FMCG-005',
      productName: 'Sugar 1kg',
      category: 'Sweeteners',
      batch: 'BTH-2024-005',
      quantity: 789,
      reorderLevel: 300,
      expiryDate: '2025-03-15',
      location: 'WH-B-02',
      unitPrice: 45,
      totalValue: 35505,
      status: 'In Stock'
    },
    {
      sku: 'FMCG-006',
      productName: 'Tea Leaves 500g',
      category: 'Beverages',
      batch: 'BTH-2024-006',
      quantity: 234,
      reorderLevel: 200,
      expiryDate: '2024-03-10',
      location: 'WH-C-01',
      unitPrice: 320,
      totalValue: 74880,
      status: 'Expiring Soon'
    }
  ];

  const columns = [
    { key: 'sku', label: 'SKU' },
    {
      key: 'productName',
      label: 'Product Name',
      render: (value: string) => <span className="text-[#1A1A1A]">{value}</span>
    },
    {
      key: 'category',
      label: 'Category',
      render: (value: string) => <Badge variant="default">{value}</Badge>
    },
    { key: 'batch', label: 'Batch No' },
    {
      key: 'quantity',
      label: 'Quantity',
      render: (value: number, row: any) => (
        <div>
          <div className={`${
            value === 0 ? 'text-[#EF4444]' : 
            value < row.reorderLevel ? 'text-[#F59E0B]' : 
            'text-[#10B981]'
          }`}>
            {value} units
          </div>
          {value < row.reorderLevel && value > 0 && (
            <div className="text-xs text-[#6B7280]">Reorder: {row.reorderLevel}</div>
          )}
        </div>
      )
    },
    {
      key: 'expiryDate',
      label: 'Expiry Date',
      render: (value: string) => {
        const daysUntilExpiry = Math.ceil((new Date(value).getTime() - new Date().getTime()) / (1000 * 60 * 60 * 24));
        return (
          <div>
            <div className="text-sm">{new Date(value).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })}</div>
            {daysUntilExpiry < 30 && daysUntilExpiry > 0 && (
              <div className="text-xs text-[#F59E0B]">{daysUntilExpiry} days left</div>
            )}
          </div>
        );
      }
    },
    { key: 'location', label: 'Location' },
    {
      key: 'totalValue',
      label: 'Total Value',
      render: (value: number) => <span>₹{value.toLocaleString()}</span>
    },
    {
      key: 'status',
      label: 'Status',
      render: (value: string) => (
        <Badge variant={
          value === 'In Stock' ? 'success' :
          value === 'Low Stock' ? 'warning' :
          value === 'Out of Stock' ? 'danger' :
          'info'
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
          <div className="text-sm text-[#6B7280] mb-1">Home {'>'} Inventory</div>
          <h1 className="text-[#1A1A1A]">Stock Management</h1>
        </div>
        <div className="flex items-center gap-3">
          <button className="h-[40px] px-4 bg-white border border-[#E6E8EC] rounded-lg hover:bg-[#F8F9FC] transition-colors flex items-center gap-2">
            <Barcode className="w-4 h-4" />
            <span className="text-sm">Scan Barcode</span>
          </button>
          <button className="h-[40px] px-4 bg-white border border-[#E6E8EC] rounded-lg hover:bg-[#F8F9FC] transition-colors flex items-center gap-2">
            <Download className="w-4 h-4" />
            <span className="text-sm">Export</span>
          </button>
          <button 
            onClick={() => setShowAddModal(true)}
            className="h-[40px] px-4 bg-[#2962FF] hover:bg-[#1E4ED8] text-white rounded-lg flex items-center gap-2 transition-colors"
          >
            <Plus className="w-4 h-4" />
            <span className="text-sm">Add Product</span>
          </button>
        </div>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {stats.map((stat, index) => (
          <StatCard key={index} {...stat} />
        ))}
      </div>

      {/* Table Section */}
      <div className="bg-white rounded-lg border border-[#E6E8EC] p-4">
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center gap-3">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-[#6B7280]" />
              <input
                type="text"
                placeholder="Search by SKU, name, or batch..."
                className="w-[350px] h-[40px] pl-10 pr-4 bg-[#F8F9FC] border border-[#E6E8EC] rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-[#2962FF] focus:border-transparent"
              />
            </div>
            <button className="h-[40px] px-4 bg-white border border-[#E6E8EC] rounded-lg hover:bg-[#F8F9FC] transition-colors flex items-center gap-2 text-sm">
              <Filter className="w-4 h-4" />
              <span>Filters</span>
            </button>
            <button className="h-[40px] px-4 bg-white border border-[#E6E8EC] rounded-lg hover:bg-[#F8F9FC] transition-colors flex items-center gap-2 text-sm">
              <RefreshCw className="w-4 h-4" />
              <span>Refresh</span>
            </button>
          </div>
          <div className="flex items-center gap-2 text-sm text-[#6B7280]">
            <span>Show</span>
            <select className="h-[40px] px-3 bg-white border border-[#E6E8EC] rounded-lg focus:outline-none focus:ring-2 focus:ring-[#2962FF]">
              <option>10</option>
              <option>25</option>
              <option>50</option>
              <option>100</option>
            </select>
            <span>entries</span>
          </div>
        </div>

        <DataTable columns={columns} data={inventory} />

        {/* Pagination */}
        <div className="flex items-center justify-between mt-4">
          <div className="text-sm text-[#6B7280] flex-1">
            Showing 1 to {inventory.length} of {inventory.length} entries
          </div>
          <div className="flex items-center gap-3 flex-1 justify-center">
            <button className="h-10 w-10 flex items-center justify-center bg-white border border-[#E6E8EC] rounded-full hover:bg-[#F8F9FC] transition-colors text-sm">
              ←
            </button>
            <button className="h-10 w-10 flex items-center justify-center bg-[#2962FF] text-white rounded-full text-sm font-medium">
              1
            </button>
            <button className="h-10 w-10 flex items-center justify-center bg-white border border-[#E6E8EC] rounded-full hover:bg-[#F8F9FC] transition-colors text-sm">
              2
            </button>
            <button className="h-10 w-10 flex items-center justify-center bg-white border border-[#E6E8EC] rounded-full hover:bg-[#F8F9FC] transition-colors text-sm">
              3
            </button>
            <button className="h-10 w-10 flex items-center justify-center bg-white border border-[#E6E8EC] rounded-full hover:bg-[#F8F9FC] transition-colors text-sm">
              →
            </button>
          </div>
        </div>
      </div>

      {/* Add Product Modal */}
      {showAddModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white rounded-lg w-[600px] max-h-[90vh] overflow-y-auto">
            <div className="p-6 border-b border-[#E6E8EC]">
              <h3 className="text-[#1A1A1A]">Add New Product</h3>
            </div>
            <div className="p-6 space-y-4">
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm text-[#6B7280] mb-2">Product Name</label>
                  <input type="text" className="w-full h-[40px] px-3 border border-[#E6E8EC] rounded-lg focus:outline-none focus:ring-2 focus:ring-[#2962FF]" />
                </div>
                <div>
                  <label className="block text-sm text-[#6B7280] mb-2">SKU</label>
                  <input type="text" className="w-full h-[40px] px-3 border border-[#E6E8EC] rounded-lg focus:outline-none focus:ring-2 focus:ring-[#2962FF]" />
                </div>
                <div>
                  <label className="block text-sm text-[#6B7280] mb-2">Category</label>
                  <select className="w-full h-[40px] px-3 border border-[#E6E8EC] rounded-lg focus:outline-none focus:ring-2 focus:ring-[#2962FF]">
                    <option>Select Category</option>
                    <option>Dairy</option>
                    <option>Grains</option>
                    <option>Oil</option>
                    <option>Beverages</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm text-[#6B7280] mb-2">Batch Number</label>
                  <input type="text" className="w-full h-[40px] px-3 border border-[#E6E8EC] rounded-lg focus:outline-none focus:ring-2 focus:ring-[#2962FF]" />
                </div>
                <div>
                  <label className="block text-sm text-[#6B7280] mb-2">Quantity</label>
                  <input type="number" className="w-full h-[40px] px-3 border border-[#E6E8EC] rounded-lg focus:outline-none focus:ring-2 focus:ring-[#2962FF]" />
                </div>
                <div>
                  <label className="block text-sm text-[#6B7280] mb-2">Reorder Level</label>
                  <input type="number" className="w-full h-[40px] px-3 border border-[#E6E8EC] rounded-lg focus:outline-none focus:ring-2 focus:ring-[#2962FF]" />
                </div>
                <div>
                  <label className="block text-sm text-[#6B7280] mb-2">Unit Price (₹)</label>
                  <input type="number" className="w-full h-[40px] px-3 border border-[#E6E8EC] rounded-lg focus:outline-none focus:ring-2 focus:ring-[#2962FF]" />
                </div>
                <div>
                  <label className="block text-sm text-[#6B7280] mb-2">Expiry Date</label>
                  <input type="date" className="w-full h-[40px] px-3 border border-[#E6E8EC] rounded-lg focus:outline-none focus:ring-2 focus:ring-[#2962FF]" />
                </div>
                <div>
                  <label className="block text-sm text-[#6B7280] mb-2">Warehouse Location</label>
                  <input type="text" className="w-full h-[40px] px-3 border border-[#E6E8EC] rounded-lg focus:outline-none focus:ring-2 focus:ring-[#2962FF]" />
                </div>
              </div>
            </div>
            <div className="p-6 border-t border-[#E6E8EC] flex justify-end gap-3">
              <button 
                onClick={() => setShowAddModal(false)}
                className="h-[40px] px-4 bg-white border border-[#E6E8EC] rounded-lg hover:bg-[#F8F9FC] transition-colors text-sm"
              >
                Cancel
              </button>
              <button className="h-[40px] px-4 bg-[#2962FF] hover:bg-[#1E4ED8] text-white rounded-lg transition-colors text-sm">
                Add Product
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}