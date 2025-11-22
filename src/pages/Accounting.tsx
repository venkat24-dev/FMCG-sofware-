import React from "react";
import { Plus, Search, Filter, Download, FileText } from "lucide-react";
import DataTable from "../components/ui/DataTable";
import { Badge } from "../components/ui/Badge";
import StatCard from "../components/ui/StatCard";
import { DollarSign, TrendingUp, CreditCard, Receipt } from "lucide-react";

export default function Accounting() {
  const stats = [
    {
      title: "Total Revenue",
      value: "₹24,56,890",
      icon: <DollarSign className="w-5 h-5" />,
      trend: { value: 15.3, direction: "up" as const },
      color: "#10B981",
    },
    {
      title: "Outstanding",
      value: "₹3,45,670",
      icon: <CreditCard className="w-5 h-5" />,
      color: "#F59E0B",
    },
    {
      title: "Tax Collected",
      value: "₹1,23,450",
      icon: <Receipt className="w-5 h-5" />,
      color: "#2962FF",
    },
    {
      title: "Net Profit",
      value: "₹8,92,340",
      icon: <TrendingUp className="w-5 h-5" />,
      trend: { value: 12.8, direction: "up" as const },
      color: "#8B5CF6",
    },
  ];

  const invoices = [
    {
      invoiceNo: "INV-2024-001",
      customer: "Retail Store A",
      date: "2024-02-15",
      dueDate: "2024-03-15",
      amount: 45890,
      gst: 2294.5,
      total: 48184.5,
      paymentStatus: "Paid",
      paymentDate: "2024-02-20",
    },
    {
      invoiceNo: "INV-2024-002",
      customer: "Distributor XYZ",
      date: "2024-02-16",
      dueDate: "2024-03-16",
      amount: 234500,
      gst: 11725,
      total: 246225,
      paymentStatus: "Pending",
      paymentDate: "-",
    },
    {
      invoiceNo: "INV-2024-003",
      customer: "Supermarket Chain",
      date: "2024-02-17",
      dueDate: "2024-03-17",
      amount: 128900,
      gst: 6445,
      total: 135345,
      paymentStatus: "Partial",
      paymentDate: "2024-02-25",
    },
  ];

  const columns = [
    {
      key: "invoiceNo",
      label: "Invoice No.",
      render: (value: string) => (
        <span className="text-[#2962FF]">{value}</span>
      ),
    },
    { key: "customer", label: "Customer" },
    {
      key: "date",
      label: "Date",
      render: (value: string) => new Date(value).toLocaleDateString(),
    },
    {
      key: "dueDate",
      label: "Due Date",
      render: (value: string) => new Date(value).toLocaleDateString(),
    },
    {
      key: "amount",
      label: "Amount",
      render: (value: number) => `₹${value.toLocaleString()}`,
    },
    {
      key: "gst",
      label: "GST (5%)",
      render: (value: number) => `₹${value.toLocaleString()}`,
    },
    {
      key: "total",
      label: "Total",
      render: (value: number) => `₹${value.toLocaleString()}`,
    },
    {
      key: "paymentStatus",
      label: "Status",
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
    { key: "paymentDate", label: "Payment Date" },
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
          <div className="text-sm text-[#6B7280] mb-1">Home {">"} Finance</div>
          <h1 className="text-[#1A1A1A]">Accounting & Finance</h1>
        </div>
        <div className="flex items-center gap-3">
          <button className="h-[40px] px-4 bg-white border border-[#E6E8EC] rounded-lg hover:bg-[#F8F9FC] transition-colors flex items-center gap-2">
            <Download className="w-4 h-4" />
            <span className="text-sm">Export GST Report</span>
          </button>
          <button className="h-[40px] px-4 bg-[#2962FF] hover:bg-[#1E4ED8] text-white rounded-lg flex items-center gap-2 transition-colors">
            <FileText className="w-4 h-4" />
            <span className="text-sm">Generate Invoice</span>
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
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-[#6B7280]" />
              <input
                type="text"
                placeholder="Search invoices..."
                className="w-[400px] h-[40px] bg-[#F8F9FC] border border-[#E6E8EC] rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-[#2962FF] focus:border-transparent font-[Imprima] text-[16px] not-italic text-center font-bold font-normal"
              />
            </div>
            <button className="h-[40px] px-4 bg-white border border-[#E6E8EC] rounded-lg hover:bg-[#F8F9FC] transition-colors flex items-center gap-2 text-sm">
              <Filter className="w-4 h-4" />
              <span>Filters</span>
            </button>
          </div>
        </div>

        <DataTable columns={columns} data={invoices} />
      </div>
    </div>
  );
}
