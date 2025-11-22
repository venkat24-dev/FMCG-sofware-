import React, { useState } from 'react';
import { Download, Filter, Calendar, TrendingUp } from 'lucide-react';
import { BarChart, Bar, LineChart, Line, PieChart, Pie, Cell, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import { Badge } from '../components/ui/Badge';

export default function Reports() {
  const [reportType, setReportType] = useState('inventory');

  const inventoryTurnover = [
    { month: 'Jan', turnover: 4.2, sales: 450000 },
    { month: 'Feb', turnover: 4.8, sales: 520000 },
    { month: 'Mar', turnover: 3.9, sales: 480000 },
    { month: 'Apr', turnover: 5.2, sales: 610000 },
    { month: 'May', turnover: 5.5, sales: 720000 },
    { month: 'Jun', turnover: 5.1, sales: 680000 }
  ];

  const salesAnalytics = [
    { category: 'Dairy', sales: 245000, profit: 45000, margin: 18.4 },
    { category: 'Grains', sales: 189000, profit: 32000, margin: 16.9 },
    { category: 'Oil', sales: 167000, profit: 28000, margin: 16.8 },
    { category: 'Beverages', sales: 134000, profit: 24000, margin: 17.9 },
    { category: 'Spices', sales: 98000, profit: 18000, margin: 18.4 }
  ];

  const expiryLoss = [
    { month: 'Jan', expired: 12, value: 45000 },
    { month: 'Feb', expired: 8, value: 28000 },
    { month: 'Mar', expired: 15, value: 56000 },
    { month: 'Apr', expired: 10, value: 38000 },
    { month: 'May', expired: 6, value: 22000 },
    { month: 'Jun', expired: 9, value: 34000 }
  ];

  const gstSummary = [
    { month: 'January', sales: 520000, gst5: 26000, gst12: 0, gst18: 0, total: 26000 },
    { month: 'February', sales: 480000, gst5: 24000, gst12: 0, gst18: 0, total: 24000 },
    { month: 'March', sales: 610000, gst5: 30500, gst12: 0, gst18: 0, total: 30500 }
  ];

  const productDistribution = [
    { name: 'Dairy', value: 35, color: '#2962FF' },
    { name: 'Grains', value: 28, color: '#10B981' },
    { name: 'Oil', value: 18, color: '#F59E0B' },
    { name: 'Beverages', value: 12, color: '#8B5CF6' },
    { name: 'Others', value: 7, color: '#6B7280' }
  ];

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <div className="mb-6">
            <div className="w-7 h-10">
            </div>
          </div>
          <div className="text-sm text-[#6B7280] mb-1">Home {'>'} Reports</div>
          <h1 className="text-[#1A1A1A]">Reports & Analytics</h1>
        </div>
        <div className="flex items-center gap-3">
          <button className="h-[40px] px-4 bg-white border border-[#E6E8EC] rounded-lg hover:bg-[#F8F9FC] transition-colors flex items-center gap-2">
            <Calendar className="w-4 h-4" />
            <span className="text-sm">Date Range</span>
          </button>
          <button className="h-[40px] px-4 bg-[#2962FF] hover:bg-[#1E4ED8] text-white rounded-lg flex items-center gap-2 transition-colors">
            <Download className="w-4 h-4" />
            <span className="text-sm">Export Report</span>
          </button>
        </div>
      </div>

      {/* Report Type Selector */}
      <div className="flex justify-evenly h-[200px] w-[100px] gap-6">
        {['inventory', 'sales', 'expiry', 'gst'].map((type) => (
          <button
            key={type}
            onClick={() => setReportType(type)}
            className={`px-4 py-2 rounded-lg text-sm transition-colors ${
              reportType === type
                ? 'bg-[#2962FF] text-white'
                : 'bg-white border border-[#E6E8EC] text-[#6B7280] hover:bg-[#F8F9FC]'
            }`}
          >
            {type === 'inventory' && 'Inventory Turnover'}
            {type === 'sales' && 'Sales Analytics'}
            {type === 'expiry' && 'Expiry Loss'}
            {type === 'gst' && 'GST Summary'}
          </button>
        ))}
      </div>

      {/* Inventory Turnover Report */}
      {reportType === 'inventory' && (
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          <div className="lg:col-span-2 bg-white rounded-lg border border-[#E6E8EC] p-6">
            <h3 className="text-[#1A1A1A] mb-4">Inventory Turnover Ratio</h3>
            <ResponsiveContainer width="100%" height={350}>
              <LineChart data={inventoryTurnover}>
                <CartesianGrid strokeDasharray="3 3" stroke="#E6E8EC" />
                <XAxis dataKey="month" tick={{ fill: '#6B7280', fontSize: 12 }} />
                <YAxis tick={{ fill: '#6B7280', fontSize: 12 }} />
                <Tooltip />
                <Legend />
                <Line type="monotone" dataKey="turnover" stroke="#2962FF" strokeWidth={2} name="Turnover Ratio" />
              </LineChart>
            </ResponsiveContainer>
          </div>

          <div className="bg-white rounded-lg border border-[#E6E8EC] p-6">
            <h3 className="text-[#1A1A1A] mb-4">Product Distribution</h3>
            <ResponsiveContainer width="100%" height={250}>
              <PieChart>
                <Pie
                  data={productDistribution}
                  cx="50%"
                  cy="50%"
                  innerRadius={60}
                  outerRadius={100}
                  paddingAngle={5}
                  dataKey="value"
                >
                  {productDistribution.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={entry.color} />
                  ))}
                </Pie>
                <Tooltip />
              </PieChart>
            </ResponsiveContainer>
            <div className="mt-4 space-y-2">
              {productDistribution.map((item, index) => (
                <div key={index} className="flex items-center justify-between text-sm">
                  <div className="flex items-center gap-2">
                    <div className="w-3 h-3 rounded-full" style={{ backgroundColor: item.color }}></div>
                    <span className="text-[#6B7280]">{item.name}</span>
                  </div>
                  <span className="text-[#1A1A1A]">{item.value}%</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}

      {/* Sales Analytics Report */}
      {reportType === 'sales' && (
        <div className="bg-white rounded-lg border border-[#E6E8EC] p-6">
          <h3 className="text-[#1A1A1A] mb-4">Sales by Category</h3>
          <ResponsiveContainer width="100%" height={400}>
            <BarChart data={salesAnalytics}>
              <CartesianGrid strokeDasharray="3 3" stroke="#E6E8EC" />
              <XAxis dataKey="category" tick={{ fill: '#6B7280', fontSize: 12 }} />
              <YAxis tick={{ fill: '#6B7280', fontSize: 12 }} />
              <Tooltip />
              <Legend />
              <Bar dataKey="sales" fill="#2962FF" radius={[8, 8, 0, 0]} name="Sales (₹)" />
              <Bar dataKey="profit" fill="#10B981" radius={[8, 8, 0, 0]} name="Profit (₹)" />
            </BarChart>
          </ResponsiveContainer>
          
          <div className="mt-6">
            <table className="w-full">
              <thead>
                <tr className="border-b border-[#E6E8EC]">
                  <th className="px-4 py-3 text-left text-xs text-[#6B7280] uppercase">Category</th>
                  <th className="px-4 py-3 text-right text-xs text-[#6B7280] uppercase">Sales</th>
                  <th className="px-4 py-3 text-right text-xs text-[#6B7280] uppercase">Profit</th>
                  <th className="px-4 py-3 text-right text-xs text-[#6B7280] uppercase">Margin %</th>
                </tr>
              </thead>
              <tbody>
                {salesAnalytics.map((item, index) => (
                  <tr key={index} className="border-b border-[#E6E8EC]">
                    <td className="px-4 py-4 text-sm">{item.category}</td>
                    <td className="px-4 py-4 text-sm text-right">₹{item.sales.toLocaleString()}</td>
                    <td className="px-4 py-4 text-sm text-right text-[#10B981]">₹{item.profit.toLocaleString()}</td>
                    <td className="px-4 py-4 text-sm text-right">{item.margin}%</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      )}

      {/* Expiry Loss Report */}
      {reportType === 'expiry' && (
        <div className="bg-white rounded-lg border border-[#E6E8EC] p-6">
          <h3 className="text-[#1A1A1A] mb-4">Expiry Loss Analysis</h3>
          <ResponsiveContainer width="100%" height={350}>
            <BarChart data={expiryLoss}>
              <CartesianGrid strokeDasharray="3 3" stroke="#E6E8EC" />
              <XAxis dataKey="month" tick={{ fill: '#6B7280', fontSize: 12 }} />
              <YAxis tick={{ fill: '#6B7280', fontSize: 12 }} />
              <Tooltip />
              <Legend />
              <Bar dataKey="expired" fill="#EF4444" radius={[8, 8, 0, 0]} name="Expired Items" />
              <Bar dataKey="value" fill="#F59E0B" radius={[8, 8, 0, 0]} name="Loss Value (₹)" />
            </BarChart>
          </ResponsiveContainer>
          
          <div className="mt-6 grid grid-cols-3 gap-6 p-6 bg-[#F8F9FC] rounded-lg">
            <div className="text-center">
              <div className="text-sm text-[#6B7280] mb-1">Total Expired Items</div>
              <div className="text-2xl text-[#EF4444]">60 items</div>
            </div>
            <div className="text-center">
              <div className="text-sm text-[#6B7280] mb-1">Total Loss Value</div>
              <div className="text-2xl text-[#EF4444]">₹2,23,000</div>
            </div>
            <div className="text-center">
              <div className="text-sm text-[#6B7280] mb-1">Average Monthly Loss</div>
              <div className="text-2xl text-[#F59E0B]">₹37,167</div>
            </div>
          </div>
        </div>
      )}

      {/* GST Summary Report */}
      {reportType === 'gst' && (
        <div className="bg-white rounded-lg border border-[#E6E8EC] p-6">
          <h3 className="text-[#1A1A1A] mb-4">GST Monthly Summary</h3>
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="bg-[#F8F9FC] border-b border-[#E6E8EC]">
                  <th className="px-4 py-3 text-left text-xs text-[#6B7280] uppercase">Month</th>
                  <th className="px-4 py-3 text-right text-xs text-[#6B7280] uppercase">Total Sales</th>
                  <th className="px-4 py-3 text-right text-xs text-[#6B7280] uppercase">GST @ 5%</th>
                  <th className="px-4 py-3 text-right text-xs text-[#6B7280] uppercase">GST @ 12%</th>
                  <th className="px-4 py-3 text-right text-xs text-[#6B7280] uppercase">GST @ 18%</th>
                  <th className="px-4 py-3 text-right text-xs text-[#6B7280] uppercase">Total GST</th>
                </tr>
              </thead>
              <tbody>
                {gstSummary.map((item, index) => (
                  <tr key={index} className="border-b border-[#E6E8EC]">
                    <td className="px-4 py-4 text-sm">{item.month}</td>
                    <td className="px-4 py-4 text-sm text-right">₹{item.sales.toLocaleString()}</td>
                    <td className="px-4 py-4 text-sm text-right">₹{item.gst5.toLocaleString()}</td>
                    <td className="px-4 py-4 text-sm text-right">₹{item.gst12.toLocaleString()}</td>
                    <td className="px-4 py-4 text-sm text-right">₹{item.gst18.toLocaleString()}</td>
                    <td className="px-4 py-4 text-sm text-right text-[#2962FF]">₹{item.total.toLocaleString()}</td>
                  </tr>
                ))}
                <tr className="bg-[#F8F9FC]">
                  <td className="px-4 py-4 text-sm">Total</td>
                  <td className="px-4 py-4 text-sm text-right">₹{gstSummary.reduce((acc, item) => acc + item.sales, 0).toLocaleString()}</td>
                  <td className="px-4 py-4 text-sm text-right">₹{gstSummary.reduce((acc, item) => acc + item.gst5, 0).toLocaleString()}</td>
                  <td className="px-4 py-4 text-sm text-right">₹0</td>
                  <td className="px-4 py-4 text-sm text-right">₹0</td>
                  <td className="px-4 py-4 text-sm text-right text-[#2962FF]">₹{gstSummary.reduce((acc, item) => acc + item.total, 0).toLocaleString()}</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      )}
    </div>
  );
}
