import React, { useState } from "react";
import { ChevronDown, Search, Filter, Plus } from "lucide-react";
import StatusCard from "../components/ui/StatusCard";
import DataTable from "../components/ui/DataTable";
import AvatarGroup from "../components/ui/AvatarGroup";
import ProgressBar from "../components/ui/ProgressBar";
import { Badge } from "../components/ui/Badge";

export default function Projects() {
  const [activeStatus, setActiveStatus] = useState("all");

  const statusCounts = [
    { label: "Total", count: 48, id: "all" },
    { label: "Overdue", count: 5, id: "overdue" },
    { label: "Finished", count: 12, id: "finished" },
    { label: "Not Started", count: 8, id: "not-started" },
    { label: "In Progress", count: 18, id: "in-progress" },
    { label: "On Hold", count: 3, id: "on-hold" },
    { label: "Cancelled", count: 2, id: "cancelled" },
  ];

  const projects = [
    {
      name: "E-commerce Platform Redesign",
      category: "Web Development",
      members: [
        { name: "John Doe" },
        { name: "Jane Smith" },
        { name: "Mike Johnson" },
      ],
      deadline: "2024-03-15",
      client: "TechCorp Inc",
      completion: 75,
      status: "In Progress",
      warning: null,
    },
    {
      name: "Mobile App Development",
      category: "Mobile",
      members: [{ name: "Sarah Williams" }, { name: "Tom Brown" }],
      deadline: "2024-02-28",
      client: "StartupXYZ",
      completion: 45,
      status: "In Progress",
      warning: "Overdue",
    },
    {
      name: "Brand Identity Package",
      category: "Design",
      members: [
        { name: "Emma Davis" },
        { name: "Alex Wilson" },
        { name: "Chris Lee" },
        { name: "Pat Taylor" },
      ],
      deadline: "2024-04-10",
      client: "Fashion Brand Co",
      completion: 90,
      status: "In Progress",
      warning: null,
    },
    {
      name: "CRM System Integration",
      category: "Software",
      members: [{ name: "David Miller" }, { name: "Lisa Anderson" }],
      deadline: "2024-03-20",
      client: "Enterprise Solutions",
      completion: 100,
      status: "Finished",
      warning: "Unpaid Payment",
    },
    {
      name: "Marketing Campaign Website",
      category: "Web Development",
      members: [
        { name: "Kevin Moore" },
        { name: "Rachel Green" },
        { name: "Mark White" },
      ],
      deadline: "2024-05-01",
      client: "Marketing Agency",
      completion: 30,
      status: "In Progress",
      warning: null,
    },
    {
      name: "Data Analytics Dashboard",
      category: "Analytics",
      members: [{ name: "Nancy Brown" }, { name: "Steven Clark" }],
      deadline: "2024-04-15",
      client: "Data Corp",
      completion: 0,
      status: "Not Started",
      warning: null,
    },
  ];

  const columns = [
    {
      key: "name",
      label: "Project Name",
      render: (value: string) => (
        <div>
          <div className="text-[#1A1A1A]">{value}</div>
        </div>
      ),
    },
    {
      key: "category",
      label: "Category",
      render: (value: string) => <Badge variant="info">{value}</Badge>,
    },
    {
      key: "members",
      label: "Members",
      render: (value: any[]) => (
        <AvatarGroup avatars={value} max={3} size="sm" />
      ),
    },
    {
      key: "deadline",
      label: "Deadline",
      render: (value: string) => (
        <span className="text-sm">
          {new Date(value).toLocaleDateString("en-US", {
            month: "short",
            day: "numeric",
            year: "numeric",
          })}
        </span>
      ),
    },
    {
      key: "client",
      label: "Client",
    },
    {
      key: "completion",
      label: "Completion Status",
      render: (value: number, row: any) => (
        <div className="min-w-[150px]">
          <ProgressBar percentage={value} showLabel={true} />
          {row.warning && (
            <div className="text-xs text-[#EF4444] mt-1">{row.warning}</div>
          )}
        </div>
      ),
    },
  ];

  return (
    <div className="space-y-6">
      {/* Breadcrumb & Header */}
      <div className="flex items-center justify-between">
        <div>
          <div className="mb-6">
            <div className="w-7 h-10">
              <p className="text-[16px]"></p>
              <p className="text-[16px]"></p>
            </div>
          </div>
          <div className="text-sm text-[#6B7280] mb-1">Home {">"} Projects</div>
          <h1 className="text-[#1A1A1A]">Projects</h1>
        </div>
        <div className="flex items-center gap-3">
          <button className="h-[40px] px-2 bg-white border border-[#E6E8EC] rounded-lg hover:bg-[#F8F9FC] transition-colors text-sm">
            Project Templates
          </button>
          <button className="h-[40px] px-4 bg-[#2962FF] hover:bg-[#1E4ED8] text-white rounded-lg flex items-center gap-2 transition-colors">
            <Plus className="w-4 h-4" />
            <span className="text-sm">Add New Project</span>
          </button>
        </div>
      </div>

      {/* Filters */}
      <div className="flex items-center gap-3">
        <div className="relative">
          <button className="h-[40px] w-[20px] px-4 bg-white border border-[#E6E8EC] rounded-lg hover:bg-[#F8F9FC] transition-colors flex items-center gap-2 text-sm">
            <span>Project Status</span>
            <ChevronDown className="w-4 h-4 text-[#6B7280]" />
          </button>
        </div>
        <div className="relative">
          <button className="h-[40px] px-4 bg-white border border-[#E6E8EC] rounded-lg hover:bg-[#F8F9FC] transition-colors flex items-center gap-2 text-sm">
            <span>Client Name</span>
            <ChevronDown className="w-4 h-4 text-[#6B7280]" />
          </button>
        </div>
      </div>

      {/* Status Cards */}
      <div className="flex flex-row gap-5 p-7 w-[800px] h-[100px]  ">
        {statusCounts.map((status) => (
          <StatusCard
            key={status.id}
            label={status.label}
            count={status.count}
            active={activeStatus === status.id}
            onClick={() => setActiveStatus(status.id)}
          />
        ))}
      </div>

      {/* Table Controls */}
      <div className="bg-white rounded-lg border border-[#E6E8EC] p-4">
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center gap-3">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-[#6B7280]" />
              <input
                type="text"
                placeholder="Search projects..."
                className="w-[400px] h-[40px] bg-[#F8F9FC] border border-[#E6E8EC] rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-[#2962FF] focus:border-transparent font-[Imprima] text-[16px] not-italic text-center font-bold font-normal"
              />
            </div>
            <button className="h-[40px] px-4 bg-white border border-[#E6E8EC] rounded-lg hover:bg-[#F8F9FC] transition-colors flex items-center gap-2 text-sm">
              <Filter className="w-4 h-4" />
              <span>Filter Columns</span>
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

        <DataTable columns={columns} data={projects} />

        {/* Pagination */}
          <div className="text-sm text-[#6B7280] flex-1">
            Showing 1 to {projects.length} of {projects.length} entries
          </div>
          <div className="flex items-center gap-2 flex-1 justify-center">
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
  );
}
