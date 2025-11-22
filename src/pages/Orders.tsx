import React from "react";
import { useNavigate } from "react-router-dom";
import {
  Plus,
  Search,
  Filter,
  Download,
  FileText,
} from "lucide-react";
import DataTable from "../components/ui/DataTable";
import { Badge } from "../components/ui/Badge";
import StatCard from "../components/ui/StatCard";
import {
  ShoppingCart,
  Clock,
  CheckCircle,
  XCircle,
} from "lucide-react";

export default function Orders() {
  const navigate = useNavigate();

  const stats = [
    {
      title: "Total Orders",
      value: "1,234",
      icon: <ShoppingCart className="w-5 h-5" />,
      trend: { value: 8.2, direction: "up" as const },
      color: "#2962FF",
    },
    {
      title: "Pending",
      value: "89",
      icon: <Clock className="w-5 h-5" />,
      trend: { value: 5.1, direction: "up" as const },
      color: "#F59E0B",
    },
    {
      title: "Completed",
      value: "1,089",
      icon: <CheckCircle className="w-5 h-5" />,
      trend: { value: 12.3, direction: "up" as const },
      color: "#10B981",
    },
    {
      title: "Cancelled",
      value: "56",
      icon: <XCircle className="w-5 h-5" />,
      trend: { value: 3.4, direction: "down" as const },
      color: "#EF4444",
    },
  ];

  const orders = [
    {
      orderNo: "ORD-2024-001",
      customer: "Retail Store A",
      orderDate: "2024-02-15",
      deliveryDate: "2024-02-20",
      items: 24,
      totalAmount: 45890,
      paymentStatus: "Paid",
      orderStatus: "Delivered",
      priority: "High",
    },
    {
      orderNo: "ORD-2024-002",
      customer: "Distributor XYZ",
      orderDate: "2024-02-16",
      deliveryDate: "2024-02-22",
      items: 156,
      totalAmount: 234500,
      paymentStatus: "Pending",
      orderStatus: "Processing",
      priority: "Medium",
    },
    {
      orderNo: "ORD-2024-003",
      customer: "Supermarket Chain",
      orderDate: "2024-02-17",
      deliveryDate: "2024-02-25",
      items: 89,
      totalAmount: 128900,
      paymentStatus: "Paid",
      orderStatus: "Shipped",
      priority: "High",
    },
    {
      orderNo: "ORD-2024-004",
      customer: "Wholesale Market",
      orderDate: "2024-02-18",
      deliveryDate: "2024-02-28",
      items: 45,
      totalAmount: 67800,
      paymentStatus: "Partial",
      orderStatus: "Pending",
      priority: "Low",
    },
    {
      orderNo: "ORD-2024-005",
      customer: "Retail Store B",
      orderDate: "2024-02-19",
      deliveryDate: "2024-02-23",
      items: 32,
      totalAmount: 56700,
      paymentStatus: "Paid",
      orderStatus: "Processing",
      priority: "Medium",
    },
  ];

  const columns = [
    {
      key: "orderNo",
      label: "Order No.",
      render: (value: string) => (
        <span className="text-[#2962FF] hover:underline cursor-pointer">
          {value}
        </span>
      ),
    },
    { key: "customer", label: "Customer" },
    {
      key: "orderDate",
      label: "Order Date",
      render: (value: string) =>
        new Date(value).toLocaleDateString("en-US", {
          month: "short",
          day: "numeric",
          year: "numeric",
        }),
    },
    {
      key: "deliveryDate",
      label: "Delivery Date",
      render: (value: string) =>
        new Date(value).toLocaleDateString("en-US", {
          month: "short",
          day: "numeric",
          year: "numeric",
        }),
    },
    {
      key: "items",
      label: "Items",
      render: (value: number) => `${value} items`,
    },
    {
      key: "totalAmount",
      label: "Total Amount",
      render: (value: number) => `₹${value.toLocaleString()}`,
    },
    {
      key: "paymentStatus",
      label: "Payment",
      render: (value: string) => (
        <Badge
          variant={
            value === "Paid"
              ? "success"
              : value === "Partial"
                ? "warning"
                : "danger"
          }
        >
          {value}
        </Badge>
      ),
    },
    {
      key: "orderStatus",
      label: "Status",
      render: (value: string) => (
        <Badge
          variant={
            value === "Delivered"
              ? "success"
              : value === "Shipped"
                ? "info"
                : value === "Processing"
                  ? "warning"
                  : "default"
          }
        >
          {value}
        </Badge>
      ),
    },
    {
      key: "priority",
      label: "Priority",
      render: (value: string) => (
        <Badge
          variant={
            value === "High"
              ? "danger"
              : value === "Medium"
                ? "warning"
                : "default"
          }
        >
          {value}
        </Badge>
      ),
    },
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
              <p className="text-[16px]"></p>
            </div>
          </div>
          <div className="text-sm text-[#6B7280] mb-1">
            Home {">"} Orders
          </div>
          <h1 className="text-[#1A1A1A]">Orders Management</h1>
        </div>
        <div className="flex items-center gap-3">
          <button className="h-[40px] px-4 bg-white border border-[#E6E8EC] rounded-lg hover:bg-[#F8F9FC] transition-colors flex items-center gap-2">
            <Download className="w-4 h-4" />
            <span className="text-sm">Export</span>
          </button>
          <button className="h-[40px] px-4 bg-white border border-[#E6E8EC] rounded-lg hover:bg-[#F8F9FC] transition-colors flex items-center gap-2">
            <FileText className="w-4 h-4" />
            <span className="text-sm">Bulk Invoice</span>
          </button>
          <button className="h-[40px] px-4 bg-[#2962FF] hover:bg-[#1E4ED8] text-white rounded-lg flex items-center gap-2 transition-colors">
            <Plus className="w-4 h-4" />
            <span className="text-sm">Create Order</span>
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
                placeholder="Search orders..."
                className="w-[400px] h-[40px] bg-[#F8F9FC] border border-[#E6E8EC] rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-[#2962FF] focus:border-transparent font-[Imprima] text-[16px] not-italic text-center font-bold font-normal"
              />
            </div>
            <button className="h-[40px] px-4 bg-white border border-[#E6E8EC] rounded-lg hover:bg-[#F8F9FC] transition-colors flex items-center gap-2 text-sm">
              <Filter className="w-4 h-4" />
              <span>Filters</span>
            </button>
          </div>
          <div className="flex items-center gap-2 text-sm text-[#6B7280]">
            <span>Show</span>
            <select className="h-[40px] px-3 bg-white border border-[#E6E8EC] rounded-lg focus:outline-none focus:ring-2 focus:ring-[#2962FF]">
              <option>10</option>
              <option>25</option>
              <option>50</option>
            </select>
            <span>entries</span>
          </div>
        </div>

        <DataTable
          columns={columns}
          data={orders}
          onRowClick={(row) =>
            navigate(`/orders/${row.orderNo}`)
          }
        />

        {/* Pagination */}
        <div className="flex items-center justify-between mt-4">
          <div className="text-sm text-[#6B7280] flex-1">
            Showing 1 to {orders.length} of {orders.length}{" "}
            entries
          </div>
          <div className="flex items-center gap-3 flex-1 justify-center">
            <button
              className="h-10 w-10 flex items-center justify-center bg-white border border-[#E6E8EC] rounded-full hover:bg-[#F8F9FC] transition-colors text-sm">
              ←
            </button>

            <button
              className="h-10 w-10 flex items-center justify-center bg-[#2962FF] text-white rounded-full text-sm font-medium">
              1
            </button>

            <button
              className="h-10 w-10 flex items-center justify-center bg-white border border-[#E6E8EC] rounded-full hover:bg-[#F8F9FC] transition-colors text-sm">
              2
            </button>

            <button
              className="h-10 w-10 flex items-center justify-center bg-white border border-[#E6E8EC] rounded-full hover:bg-[#F8F9FC] transition-colors text-sm">
              3
            </button>

            <button
              className="h-10 w-10 flex items-center justify-center bg-white border border-[#E6E8EC] rounded-full hover:bg-[#F8F9FC] transition-colors text-sm">
              →
            </button>
          </div>

          <div className="flex-1"></div>
        </div>
      </div>
    </div>
  );
}