import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { ArrowLeft, Printer, Download, Edit, Truck, CheckCircle, Clock, Package } from 'lucide-react';
import { Badge } from '../components/ui/Badge';

export default function OrderDetail() {
  const { id } = useParams();
  const navigate = useNavigate();

  const orderData = {
    orderNo: 'ORD-2024-001',
    customer: {
      name: 'Retail Store A',
      address: '123 Market Street, Mumbai, Maharashtra 400001',
      phone: '+91 98765 43210',
      email: 'retail.storea@example.com',
      gstin: '27AABCU9603R1ZM'
    },
    orderDate: '2024-02-15',
    deliveryDate: '2024-02-20',
    status: 'Delivered',
    paymentStatus: 'Paid',
    paymentMethod: 'UPI',
    items: [
      { sku: 'FMCG-001', name: 'Premium Milk 1L', quantity: 50, unitPrice: 65, tax: 5, total: 3412.5 },
      { sku: 'FMCG-002', name: 'Wheat Flour 5kg', quantity: 100, unitPrice: 245, tax: 5, total: 25725 },
      { sku: 'FMCG-004', name: 'Rice Basmati 10kg', quantity: 75, unitPrice: 890, tax: 5, total: 70087.5 },
      { sku: 'FMCG-005', name: 'Sugar 1kg', quantity: 200, unitPrice: 45, tax: 5, total: 9450 }
    ],
    subtotal: 103675,
    tax: 5183.75,
    shipping: 500,
    discount: 2500,
    total: 106858.75
  };

  const timeline = [
    { status: 'Order Placed', date: '2024-02-15 10:30 AM', completed: true },
    { status: 'Payment Confirmed', date: '2024-02-15 11:00 AM', completed: true },
    { status: 'Processing', date: '2024-02-16 09:00 AM', completed: true },
    { status: 'Packed', date: '2024-02-17 02:30 PM', completed: true },
    { status: 'Shipped', date: '2024-02-18 08:00 AM', completed: true },
    { status: 'Out for Delivery', date: '2024-02-20 07:00 AM', completed: true },
    { status: 'Delivered', date: '2024-02-20 03:45 PM', completed: true }
  ];

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-4">
          <button 
            onClick={() => navigate('/orders')}
            className="w-[40px] h-[40px] flex items-center justify-center rounded-lg hover:bg-[#F8F9FC] transition-colors"
          >
            <ArrowLeft className="w-5 h-5" />
          </button>
          <div>
            <h1 className="text-[#1A1A1A]">Order Details</h1>
            <p className="text-sm text-[#6B7280]">{orderData.orderNo}</p>
          </div>
        </div>
        <div className="flex items-center gap-3">
          <button className="h-[40px] px-4 bg-white border border-[#E6E8EC] rounded-lg hover:bg-[#F8F9FC] transition-colors flex items-center gap-2">
            <Edit className="w-4 h-4" />
            <span className="text-sm">Edit</span>
          </button>
          <button className="h-[40px] px-4 bg-white border border-[#E6E8EC] rounded-lg hover:bg-[#F8F9FC] transition-colors flex items-center gap-2">
            <Printer className="w-4 h-4" />
            <span className="text-sm">Print</span>
          </button>
          <button className="h-[40px] px-4 bg-[#2962FF] hover:bg-[#1E4ED8] text-white rounded-lg flex items-center gap-2 transition-colors">
            <Download className="w-4 h-4" />
            <span className="text-sm">Generate Invoice</span>
          </button>
        </div>
      </div>

      {/* Status & Info Cards */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Order Status */}
        <div className="bg-white rounded-lg border border-[#E6E8EC] p-6">
          <h3 className="text-[#1A1A1A] mb-4">Order Status</h3>
          <div className="space-y-3">
            <div className="flex items-center justify-between">
              <span className="text-sm text-[#6B7280]">Status</span>
              <Badge variant="success">{orderData.status}</Badge>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-sm text-[#6B7280]">Payment</span>
              <Badge variant="success">{orderData.paymentStatus}</Badge>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-sm text-[#6B7280]">Method</span>
              <span className="text-sm text-[#1A1A1A]">{orderData.paymentMethod}</span>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-sm text-[#6B7280]">Order Date</span>
              <span className="text-sm text-[#1A1A1A]">{new Date(orderData.orderDate).toLocaleDateString()}</span>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-sm text-[#6B7280]">Delivery Date</span>
              <span className="text-sm text-[#1A1A1A]">{new Date(orderData.deliveryDate).toLocaleDateString()}</span>
            </div>
          </div>
        </div>

        {/* Customer Info */}
        <div className="lg:col-span-2 bg-white rounded-lg border border-[#E6E8EC] p-6">
          <h3 className="text-[#1A1A1A] mb-4">Customer Information</h3>
          <div className="grid grid-cols-2 gap-4">
            <div>
              <div className="text-sm text-[#6B7280] mb-1">Customer Name</div>
              <div className="text-sm text-[#1A1A1A]">{orderData.customer.name}</div>
            </div>
            <div>
              <div className="text-sm text-[#6B7280] mb-1">Phone</div>
              <div className="text-sm text-[#1A1A1A]">{orderData.customer.phone}</div>
            </div>
            <div>
              <div className="text-sm text-[#6B7280] mb-1">Email</div>
              <div className="text-sm text-[#1A1A1A]">{orderData.customer.email}</div>
            </div>
            <div>
              <div className="text-sm text-[#6B7280] mb-1">GSTIN</div>
              <div className="text-sm text-[#1A1A1A]">{orderData.customer.gstin}</div>
            </div>
            <div className="col-span-2">
              <div className="text-sm text-[#6B7280] mb-1">Delivery Address</div>
              <div className="text-sm text-[#1A1A1A]">{orderData.customer.address}</div>
            </div>
          </div>
        </div>
      </div>

      {/* Order Timeline */}
      <div className="bg-white rounded-lg border border-[#E6E8EC] p-6">
        <h3 className="text-[#1A1A1A] mb-6">Order Timeline</h3>
        <div className="relative">
          {timeline.map((item, index) => (
            <div key={index} className="flex gap-4 mb-6 last:mb-0">
              <div className="flex flex-col items-center">
                <div className={`w-10 h-10 rounded-full flex items-center justify-center ${
                  item.completed ? 'bg-[#10B981]' : 'bg-[#E6E8EC]'
                }`}>
                  {item.completed ? (
                    <CheckCircle className="w-5 h-5 text-white" />
                  ) : (
                    <Clock className="w-5 h-5 text-[#6B7280]" />
                  )}
                </div>
                {index < timeline.length - 1 && (
                  <div className={`w-0.5 h-12 ${item.completed ? 'bg-[#10B981]' : 'bg-[#E6E8EC]'}`}></div>
                )}
              </div>
              <div className="flex-1 pb-6">
                <div className="text-sm text-[#1A1A1A]">{item.status}</div>
                <div className="text-xs text-[#6B7280] mt-1">{item.date}</div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Order Items */}
      <div className="bg-white rounded-lg border border-[#E6E8EC] p-6">
        <h3 className="text-[#1A1A1A] mb-4">Order Items</h3>
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="border-b border-[#E6E8EC]">
                <th className="px-4 py-3 text-left text-xs text-[#6B7280] uppercase">SKU</th>
                <th className="px-4 py-3 text-left text-xs text-[#6B7280] uppercase">Product</th>
                <th className="px-4 py-3 text-right text-xs text-[#6B7280] uppercase">Quantity</th>
                <th className="px-4 py-3 text-right text-xs text-[#6B7280] uppercase">Unit Price</th>
                <th className="px-4 py-3 text-right text-xs text-[#6B7280] uppercase">Tax (%)</th>
                <th className="px-4 py-3 text-right text-xs text-[#6B7280] uppercase">Total</th>
              </tr>
            </thead>
            <tbody>
              {orderData.items.map((item, index) => (
                <tr key={index} className="border-b border-[#E6E8EC]">
                  <td className="px-4 py-4 text-sm text-[#6B7280]">{item.sku}</td>
                  <td className="px-4 py-4 text-sm text-[#1A1A1A]">{item.name}</td>
                  <td className="px-4 py-4 text-sm text-[#1A1A1A] text-right">{item.quantity}</td>
                  <td className="px-4 py-4 text-sm text-[#1A1A1A] text-right">₹{item.unitPrice}</td>
                  <td className="px-4 py-4 text-sm text-[#1A1A1A] text-right">{item.tax}%</td>
                  <td className="px-4 py-4 text-sm text-[#1A1A1A] text-right">₹{item.total.toLocaleString()}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Totals */}
        <div className="mt-6 flex justify-end">
          <div className="w-[400px] space-y-3">
            <div className="flex justify-between text-sm">
              <span className="text-[#6B7280]">Subtotal</span>
              <span className="text-[#1A1A1A]">₹{orderData.subtotal.toLocaleString()}</span>
            </div>
            <div className="flex justify-between text-sm">
              <span className="text-[#6B7280]">Tax (GST 5%)</span>
              <span className="text-[#1A1A1A]">₹{orderData.tax.toLocaleString()}</span>
            </div>
            <div className="flex justify-between text-sm">
              <span className="text-[#6B7280]">Shipping</span>
              <span className="text-[#1A1A1A]">₹{orderData.shipping.toLocaleString()}</span>
            </div>
            <div className="flex justify-between text-sm">
              <span className="text-[#6B7280]">Discount</span>
              <span className="text-[#10B981]">-₹{orderData.discount.toLocaleString()}</span>
            </div>
            <div className="border-t border-[#E6E8EC] pt-3 flex justify-between">
              <span className="text-[#1A1A1A]">Total Amount</span>
              <span className="text-[#1A1A1A]">₹{orderData.total.toLocaleString()}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
