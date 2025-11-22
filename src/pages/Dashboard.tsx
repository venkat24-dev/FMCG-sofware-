import React from 'react';
import StatCard from '../components/ui/StatCard';
import { Package, ShoppingCart, DollarSign, AlertTriangle, TrendingUp, Users, Warehouse, FileText } from 'lucide-react';
import { BarChart, Bar, LineChart, Line, PieChart, Pie, Cell, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

export default function Dashboard() {
  const salesData = [
    { month: 'Jan', sales: 45000, orders: 120 },
    { month: 'Feb', sales: 52000, orders: 145 },
    { month: 'Mar', sales: 48000, orders: 132 },
    { month: 'Apr', sales: 61000, orders: 167 },
    { month: 'May', sales: 72000, orders: 189 },
    { month: 'Jun', sales: 68000, orders: 176 }
  ];

  const inventoryData = [
    { name: 'In Stock', value: 1245, color: '#10B981' },
    { name: 'Low Stock', value: 156, color: '#F59E0B' },
    { name: 'Out of Stock', value: 23, color: '#EF4444' },
    { name: 'Expired', value: 12, color: '#6B7280' }
  ];

  const topProducts = [
    { name: 'Product A', sold: 1234, revenue: '₹2,45,000', trend: 12 },
    { name: 'Product B', sold: 987, revenue: '₹1,89,000', trend: 8 },
    { name: 'Product C', sold: 856, revenue: '₹1,67,000', trend: -3 },
    { name: 'Product D', sold: 743, revenue: '₹1,45,000', trend: 15 },
    { name: 'Product E', sold: 621, revenue: '₹1,23,000', trend: 5 }
  ];

  const alerts = [
    { type: 'critical', message: '23 products out of stock', time: '2 mins ago' },
    { type: 'warning', message: '156 products below reorder level', time: '15 mins ago' },
    { type: 'info', message: '12 products expiring in 7 days', time: '1 hour ago' },
    { type: 'success', message: 'Monthly target achieved: 105%', time: '3 hours ago' }
  ];

  return (
    <div className="max-w-[1600px] mx-auto px-6">
      {/* Header */}
      <div className="mb-6">
        <div className='w-7 h-9'>
        <p className='text-[16px]'></p>
      </div>
        <h1 className="text-[24px] font-semibold text-[#1A1A1A] mb-2">Dashboard</h1>
        <h4 className="text-[24px] text-[#6B7280] ">Welcome back, venkat ! Here's what's happening with your business .</h4>
      </div>

      {/* Stats Grid - 12 column grid with 20px gap */}
      <div className="grid grid-cols-12 gap-5 mb-5">
        <div className="col-span-12 sm:col-span-6 lg:col-span-3 p-1">
          <StatCard
            title="Total Revenue"
            value="₹12,45,890"
            icon={<DollarSign className="w-5 h-5" />}
            trend={{ value: 12.5, direction: 'up' }}
            color="#10B981"
          />
        </div>
        <div className="col-span-12 sm:col-span-6 lg:col-span-3">
          <StatCard
            title="Total Orders"
            value="1,234"
            icon={<ShoppingCart className="w-5 h-5" />}
            trend={{ value: 8.2, direction: 'up' }}
            color="#2962FF"
          />
        </div>
        <div className="col-span-12 sm:col-span-6 lg:col-span-3">
          <StatCard
            title="Products in Stock"
            value="1,436"
            icon={<Package className="w-5 h-5" />}
            trend={{ value: 3.1, direction: 'down' }}
            color="#F59E0B"
          />
        </div>
        <div className="col-span-12 sm:col-span-6 lg:col-span-3">
          <StatCard
            title="Active Customers"
            value="892"
            icon={<Users className="w-5 h-5" />}
            trend={{ value: 15.3, direction: 'up' }}
            color="#8B5CF6"
          />
        </div>
      </div>

      {/* Charts Row - 12 column grid */}
      <div className="grid grid-cols-12 gap-5 mb-5">
        {/* Sales Trend - 8 columns */}
        <div className="col-span-12 lg:col-span-8">
          <div className="bg-white rounded-2xl border border-[#E6E8EC] p-4 h-full shadow-sm hover:shadow-md transition-shadow">
            <h3 className="text-[20px] font-semibold text-[#1A1A1A] mb-4 py-3 px-2">Sales Trend</h3>
            <div className="px-2">
              <ResponsiveContainer width="100%" height={320}>
                <BarChart data={salesData} margin={{ top: 10, right: 10, left: 0, bottom: 10 }}>
                  <CartesianGrid strokeDasharray="3 3" stroke="#E6E8EC" vertical={false} />
                  <XAxis 
                    dataKey="month" 
                    tick={{ fill: '#6B7280', fontSize: 13 }} 
                    axisLine={{ stroke: '#E6E8EC' }}
                    tickLine={false}
                    dy={10}
                  />
                  <YAxis 
                    tick={{ fill: '#6B7280', fontSize: 13 }} 
                    axisLine={false}
                    tickLine={false}
                    dx={-10}
                  />
                  <Tooltip 
                    contentStyle={{ 
                      backgroundColor: '#fff', 
                      border: '1px solid #E6E8EC',
                      borderRadius: '8px',
                      boxShadow: '0 4px 12px rgba(0,0,0,0.08)'
                    }}
                  />
                  <Legend wrapperStyle={{ paddingTop: '20px' }} />
                  <Bar dataKey="sales" fill="#2962FF" radius={[8, 8, 0, 0]} />
                </BarChart>
              </ResponsiveContainer>
            </div>
          </div>
        </div>

        {/* Inventory Status - 4 columns */}
        <div className="col-span-12 lg:col-span-4">
          <div className="bg-white rounded-2xl border border-[#E6E8EC] p-6 h-full shadow-sm hover:shadow-md transition-shadow">
            <h3 className="text-[20px] font-semibold text-[#1A1A1A] mb-4 py-3 px-2 pl-4">Inventory Status</h3>
            <div className="flex flex-col items-center justify-center">
              <ResponsiveContainer width="100%" height={240}>
                <PieChart>
                  <Pie
                    data={inventoryData}
                    cx="50%"
                    cy="50%"
                    innerRadius={60}
                    outerRadius={90}
                    paddingAngle={2}
                    dataKey="value"
                  >
                    {inventoryData.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={entry.color} />
                    ))}
                  </Pie>
                  <Tooltip 
                    contentStyle={{ 
                      backgroundColor: '#fff', 
                      border: '1px solid #E6E8EC',
                      borderRadius: '8px',
                      boxShadow: '0 4px 12px rgba(0,0,0,0.08)'
                    }}
                  />
                </PieChart>
              </ResponsiveContainer>
              <div className="w-full space-y-3 mt-2 px-2">
                {inventoryData.map((item, index) => (
                  <div key={index} className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <div className="w-3 h-3 rounded-full" style={{ backgroundColor: item.color }}></div>
                      <span className="text-[14px] text-[#6B7280]">{item.name}</span>
                    </div>
                    <span className="text-[14px] font-medium text-[#1A1A1A]">{item.value}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Section - 12 column grid */}
      <div className="grid grid-cols-12 gap-5">
        {/* Top Products - 6 columns */}
        <div className="col-span-12 lg:col-span-6">
          <div className="bg-white rounded-2xl border border-[#E6E8EC] p-4 shadow-sm hover:shadow-md transition-shadow">
            <h3 className="text-[18px] font-semibold text-[#1A1A1A] mb-4 py-2 px-2">Top Selling Products</h3>
            <div className="space-y-4 px-2">
              {topProducts.map((product, index) => (
                <div key={index} className="flex items-center justify-between py-2">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-[#F8F9FC] rounded-lg flex items-center justify-center">
                      <Package className="w-5 h-5 text-[#6B7280]" />
                    </div>
                    <div>
                      <div className="text-[14px] font-medium text-[#1A1A1A]">{product.name}</div>
                      <div className="text-[13px] text-[#6B7280]">{product.sold} units sold</div>
                    </div>
                  </div>
                  <div className="text-right">
                    <div className="text-[14px] font-medium text-[#1A1A1A]">{product.revenue}</div>
                    <div className={`text-[13px] font-medium ${product.trend > 0 ? 'text-[#10B981]' : 'text-[#EF4444]'}`}>
                      {product.trend > 0 ? '+' : ''}{product.trend}%
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Alerts - 6 columns */}
        <div className="col-span-12 lg:col-span-6">
          <div className="bg-white rounded-2xl border border-[#E6E8EC] p-4 shadow-sm hover:shadow-md transition-shadow">
            <h3 className="text-[18px] font-semibold text-[#1A1A1A] mb-4 py-2 px-2">Recent Alerts</h3>
            <div className="space-y-4 px-2">
              {alerts.map((alert, index) => (
                <div key={index} className="flex items-start gap-3 py-2">
                  <div className={`w-2 h-2 rounded-full mt-2 flex-shrink-0 ${
                    alert.type === 'critical' ? 'bg-[#EF4444]' :
                    alert.type === 'warning' ? 'bg-[#F59E0B]' :
                    alert.type === 'info' ? 'bg-[#3B82F6]' :
                    'bg-[#10B981]'
                  }`}></div>
                  <div className="flex-1 min-w-0">
                    <div className="text-[14px] font-medium text-[#1A1A1A]">{alert.message}</div>
                    <div className="text-[13px] text-[#6B7280] mt-1">{alert.time}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}