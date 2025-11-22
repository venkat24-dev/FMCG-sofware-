import React, { useState } from "react";
import { Plus, Search, Filter, Download, Tag, Percent } from "lucide-react";
import DataTable from "../components/ui/DataTable";
import { Badge } from "../components/ui/Badge";

export default function Pricing() {
  const [activeTab, setActiveTab] = useState("pricing");

  const priceList = [
    {
      sku: "FMCG-001",
      productName: "Premium Milk 1L",
      basePrice: 65,
      mrp: 75,
      region: "Mumbai",
      discount: 5,
      finalPrice: 71.25,
      effectiveDate: "2024-02-01",
    },
    {
      sku: "FMCG-002",
      productName: "Wheat Flour 5kg",
      basePrice: 245,
      mrp: 280,
      region: "Delhi",
      discount: 10,
      finalPrice: 252,
      effectiveDate: "2024-02-01",
    },
  ];

  const schemes = [
    {
      schemeCode: "SCH-001",
      schemeName: "Buy 10 Get 1 Free",
      products: "Premium Milk 1L",
      type: "Quantity",
      startDate: "2024-02-01",
      endDate: "2024-03-31",
      status: "Active",
    },
    {
      schemeCode: "SCH-002",
      schemeName: "Flat 15% Off",
      products: "All Grains",
      type: "Percentage",
      startDate: "2024-02-15",
      endDate: "2024-02-29",
      status: "Active",
    },
  ];

  const priceColumns = [
    { key: "sku", label: "SKU" },
    { key: "productName", label: "Product Name" },
    {
      key: "basePrice",
      label: "Base Price",
      render: (value: number) => `₹${value}`,
    },
    { key: "mrp", label: "MRP", render: (value: number) => `₹${value}` },
    {
      key: "region",
      label: "Region",
      render: (value: string) => <Badge variant="info">{value}</Badge>,
    },
    {
      key: "discount",
      label: "Discount",
      render: (value: number) => `${value}%`,
    },
    {
      key: "finalPrice",
      label: "Final Price",
      render: (value: number) => `₹${value}`,
    },
    {
      key: "effectiveDate",
      label: "Effective Date",
      render: (value: string) => new Date(value).toLocaleDateString(),
    },
  ];

  const schemeColumns = [
    { key: "schemeCode", label: "Scheme Code" },
    { key: "schemeName", label: "Scheme Name" },
    { key: "products", label: "Products" },
    {
      key: "type",
      label: "Type",
      render: (value: string) => <Badge variant="purple">{value}</Badge>,
    },
    {
      key: "startDate",
      label: "Start Date",
      render: (value: string) => new Date(value).toLocaleDateString(),
    },
    {
      key: "endDate",
      label: "End Date",
      render: (value: string) => new Date(value).toLocaleDateString(),
    },
    {
      key: "status",
      label: "Status",
      render: (value: string) => <Badge variant="success">{value}</Badge>,
    },
  ];

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <div className="mb-6">
            <div className="w-7 h-10"></div>
          </div>
          <div className="text-sm text-[#6B7280] mb-1">
            Home {">"} Pricing & Schemes
          </div>
          <h1 className="text-[#1A1A1A]">Pricing & Schemes</h1>
        </div>
        <div>
          <button className="h-[40px] px-4 bg-[#2962FF] hover:bg-[#1E4ED8] text-white rounded-lg flex items-center gap-2 transition-colors">
            <Plus className="w-4 h-4" />
            <span className="text-sm">
              {activeTab === "pricing" ? "Add Price" : "Create Scheme"}
            </span>
          </button>
        </div>
      </div>

      <div className="bg-white rounded-lg border border-[#E6E8EC]">
        <div className="border-b border-[#E6E8EC] px-6">
          <div className="flex gap-6">
            <button
              onClick={() => setActiveTab("pricing")}
              className={`py-4 border-b-2 transition-colors ${
                activeTab === "pricing"
                  ? "border-[#2962FF] text-[#2962FF]"
                  : "border-transparent text-[#6B7280]"
              }`}
            >
              <div className="flex items-center gap-2">
                <Tag className="w-4 h-4" />
                <span>Price List</span>
              </div>
            </button>
            <button
              onClick={() => setActiveTab("schemes")}
              className={`py-4 border-b-2 transition-colors ${
                activeTab === "schemes"
                  ? "border-[#2962FF] text-[#2962FF]"
                  : "border-transparent text-[#6B7280]"
              }`}
            >
              <div className="flex items-center gap-2">
                <Percent className="w-4 h-4" />
                <span>Schemes & Discounts</span>
              </div>
            </button>
          </div>
        </div>

        <div className="p-4">
          <div className="flex items-center gap-3 mb-4">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-[#6B7280]" />
              <input
                type="text"
                placeholder="Search..."
                className="w-[400px] h-[40px] bg-[#F8F9FC] border border-[#E6E8EC] rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-[#2962FF] focus:border-transparent font-[Imprima] text-[16px] not-italic text-center font-bold font-normal"
              />
            </div>
          </div>

          {activeTab === "pricing" && (
            <DataTable columns={priceColumns} data={priceList} />
          )}
          {activeTab === "schemes" && (
            <DataTable columns={schemeColumns} data={schemes} />
          )}
        </div>
      </div>
    </div>
  );
}
