import React, { useState } from "react";
import {
  FileText,
  Folder,
  Star,
  Clock,
  Search,
  Plus,
  MoreHorizontal,
  Download,
  Share2,
  Trash2,
  Edit,
  Eye,
  Grid,
  List,
  Filter,
} from "lucide-react";
import { Badge } from "../components/ui/Badge";

export default function Docs() {
  const [viewMode, setViewMode] = useState<"grid" | "list">("grid");

  const folders = [
    {
      id: 1,
      name: "Product Documentation",
      count: 24,
      color: "bg-blue-100 text-blue-600",
    },
    {
      id: 2,
      name: "Policies & Procedures",
      count: 18,
      color: "bg-purple-100 text-purple-600",
    },
    {
      id: 3,
      name: "Training Materials",
      count: 32,
      color: "bg-green-100 text-green-600",
    },
    {
      id: 4,
      name: "Vendor Contracts",
      count: 12,
      color: "bg-orange-100 text-orange-600",
    },
  ];

  const recentDocs = [
    {
      id: 1,
      name: "Inventory Management SOP",
      type: "PDF",
      size: "2.4 MB",
      modified: "2 hours ago",
      owner: "John Doe",
      starred: true,
      thumbnail: "bg-red-100",
    },
    {
      id: 2,
      name: "Q4 Sales Report",
      type: "Excel",
      size: "1.8 MB",
      modified: "5 hours ago",
      owner: "Sarah Smith",
      starred: false,
      thumbnail: "bg-green-100",
    },
    {
      id: 3,
      name: "Warehouse Layout Design",
      type: "PDF",
      size: "5.2 MB",
      modified: "1 day ago",
      owner: "Mike Johnson",
      starred: true,
      thumbnail: "bg-blue-100",
    },
    {
      id: 4,
      name: "Product Catalog 2025",
      type: "Word",
      size: "3.1 MB",
      modified: "2 days ago",
      owner: "Emily Davis",
      starred: false,
      thumbnail: "bg-purple-100",
    },
    {
      id: 5,
      name: "Safety Guidelines",
      type: "PDF",
      size: "1.2 MB",
      modified: "3 days ago",
      owner: "Tom Wilson",
      starred: false,
      thumbnail: "bg-orange-100",
    },
    {
      id: 6,
      name: "Vendor Agreement - ABC Corp",
      type: "PDF",
      size: "892 KB",
      modified: "4 days ago",
      owner: "Sarah Smith",
      starred: true,
      thumbnail: "bg-yellow-100",
    },
    {
      id: 7,
      name: "Training Presentation",
      type: "PowerPoint",
      size: "4.5 MB",
      modified: "1 week ago",
      owner: "John Doe",
      starred: false,
      thumbnail: "bg-pink-100",
    },
    {
      id: 8,
      name: "Pricing Strategy 2025",
      type: "Word",
      size: "2.8 MB",
      modified: "1 week ago",
      owner: "Mike Johnson",
      starred: false,
      thumbnail: "bg-indigo-100",
    },
  ];

  const stats = [
    {
      label: "Total Documents",
      value: "1,248",
      icon: FileText,
      color: "bg-blue-100 text-blue-600",
    },
    {
      label: "Folders",
      value: "42",
      icon: Folder,
      color: "bg-purple-100 text-purple-600",
    },
    {
      label: "Starred",
      value: "86",
      icon: Star,
      color: "bg-yellow-100 text-yellow-600",
    },
    {
      label: "Storage Used",
      value: "24.8 GB",
      icon: Clock,
      color: "bg-green-100 text-green-600",
    },
  ];

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <div className="mb-6">
            <div className="w-7 h-10"></div>
          </div>
          <h1>Documents</h1>
          <p className="text-slate-500 mt-1">Manage your files and folders</p>
        </div>
        <button className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors flex items-center gap-2">
          <Plus className="w-4 h-4" />
          Upload Document
        </button>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        {stats.map((stat, index) => {
          const Icon = stat.icon;
          return (
            <div
              key={index}
              className="bg-white rounded-xl p-5 border border-slate-200 hover:shadow-md transition-shadow"
            >
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-slate-500 text-sm">{stat.label}</p>
                  <p className="text-2xl mt-1">{stat.value}</p>
                </div>
                <div className={`${stat.color} p-3 rounded-lg`}>
                  <Icon className="w-6 h-6" />
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {/* Search and Filters */}
      <div className="bg-white rounded-xl border border-slate-200 p-4">
        <div className="flex items-center justify-between gap-4">
          <div className="relative flex-1">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-[#6B7280]" />
            <input
              type="text"
              placeholder="Search documents..."
              className="w-[600px] h-[40px] bg-[#F8F9FC] border border-[#E6E8EC] rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-[#2962FF] focus:border-transparent font-[Imprima] text-[16px] not-italic text-center font-bold font-normal"
            />
          </div>
          <div className="flex items-center gap-3">
            <button className="px-4 py-2 border border-slate-200 rounded-lg hover:bg-slate-50 transition-colors flex items-center gap-3">
              <Filter className="w-4 h-4" />
              Filter
            </button>
            <div className="flex bg-slate-100 rounded-lg p-2">
              <button
                onClick={() => setViewMode("grid")}
                className={`p-2 rounded transition-colors ${
                  viewMode === "grid"
                    ? "bg-white shadow-sm"
                    : "hover:bg-slate-200"
                }`}
              >
                <Grid className="w-4 h-4" />
              </button>
              <button
                onClick={() => setViewMode("list")}
                className={`p-2 rounded transition-colors ${
                  viewMode === "list"
                    ? "bg-white shadow-sm"
                    : "hover:bg-slate-200"
                }`}
              >
                <List className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Folders */}
      <div>
        <h2 className="mb-4">Folders</h2>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
          {folders.map((folder) => (
            <div
              key={folder.id}
              className="bg-white rounded-xl p-5 border border-slate-200 hover:shadow-md transition-all cursor-pointer group"
            >
              <div className="flex items-start justify-between">
                <div className={`${folder.color} p-3 rounded-lg`}>
                  <Folder className="w-6 h-6" />
                </div>
                <button className="opacity-0 group-hover:opacity-100 transition-opacity p-2 hover:bg-slate-100 rounded-lg">
                  <MoreHorizontal className="w-4 h-4" />
                </button>
              </div>
              <h3 className="mt-4">{folder.name}</h3>
              <p className="text-slate-500 text-sm mt-1">
                {folder.count} documents
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* Recent Documents */}
      <div>
        <h2 className="mb-4">Recent Documents</h2>
        {viewMode === "grid" ? (
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            {recentDocs.map((doc) => (
              <div
                key={doc.id}
                className="bg-white rounded-xl border border-slate-200 overflow-hidden hover:shadow-md transition-all cursor-pointer group"
              >
                <div
                  className={`${doc.thumbnail} h-32 flex items-center justify-center relative`}
                >
                  <FileText className="w-12 h-12 text-slate-400" />
                  {doc.starred && (
                    <div className="absolute top-2 right-2">
                      <Star className="w-4 h-4 text-yellow-500 fill-yellow-500" />
                    </div>
                  )}
                </div>
                <div className="p-4">
                  <div className="flex items-start justify-between gap-2">
                    <div className="flex-1 min-w-0">
                      <h3 className="text-sm truncate">{doc.name}</h3>
                      <p className="text-xs text-slate-500 mt-1">{doc.size}</p>
                    </div>
                    <button className="opacity-0 group-hover:opacity-100 transition-opacity p-1 hover:bg-slate-100 rounded">
                      <MoreHorizontal className="w-4 h-4" />
                    </button>
                  </div>
                  <div className="flex items-center gap-2 mt-3">
                    <Badge variant="secondary" className="text-xs">
                      {doc.type}
                    </Badge>
                    <span className="text-xs text-slate-500">
                      {doc.modified}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="bg-white rounded-xl border border-slate-200 overflow-hidden">
            <table className="w-full">
              <thead>
                <tr className="border-b border-slate-200 bg-slate-50">
                  <th className="px-6 py-3 text-left text-xs text-slate-500">
                    Name
                  </th>
                  <th className="px-6 py-3 text-left text-xs text-slate-500">
                    Type
                  </th>
                  <th className="px-6 py-3 text-left text-xs text-slate-500">
                    Size
                  </th>
                  <th className="px-6 py-3 text-left text-xs text-slate-500">
                    Owner
                  </th>
                  <th className="px-6 py-3 text-left text-xs text-slate-500">
                    Modified
                  </th>
                  <th className="px-6 py-3 text-left text-xs text-slate-500">
                    Actions
                  </th>
                </tr>
              </thead>
              <tbody>
                {recentDocs.map((doc) => (
                  <tr
                    key={doc.id}
                    className="border-b border-slate-200 last:border-b-0 hover:bg-slate-50 transition-colors"
                  >
                    <td className="px-6 py-4">
                      <div className="flex items-center gap-3">
                        <div className={`${doc.thumbnail} p-2 rounded`}>
                          <FileText className="w-4 h-4 text-slate-600" />
                        </div>
                        <div className="flex items-center gap-2">
                          <span className="text-sm">{doc.name}</span>
                          {doc.starred && (
                            <Star className="w-3 h-3 text-yellow-500 fill-yellow-500" />
                          )}
                        </div>
                      </div>
                    </td>
                    <td className="px-6 py-4">
                      <Badge variant="secondary" className="text-xs">
                        {doc.type}
                      </Badge>
                    </td>
                    <td className="px-6 py-4 text-sm text-slate-600">
                      {doc.size}
                    </td>
                    <td className="px-6 py-4 text-sm text-slate-600">
                      {doc.owner}
                    </td>
                    <td className="px-6 py-4 text-sm text-slate-500">
                      {doc.modified}
                    </td>
                    <td className="px-6 py-4">
                      <div className="flex items-center gap-1">
                        <button
                          className="p-2 hover:bg-slate-100 rounded-lg transition-colors"
                          title="View"
                        >
                          <Eye className="w-4 h-4 text-slate-600" />
                        </button>
                        <button
                          className="p-2 hover:bg-slate-100 rounded-lg transition-colors"
                          title="Download"
                        >
                          <Download className="w-4 h-4 text-slate-600" />
                        </button>
                        <button
                          className="p-2 hover:bg-slate-100 rounded-lg transition-colors"
                          title="Share"
                        >
                          <Share2 className="w-4 h-4 text-slate-600" />
                        </button>
                        <button
                          className="p-2 hover:bg-slate-100 rounded-lg transition-colors"
                          title="More"
                        >
                          <MoreHorizontal className="w-4 h-4 text-slate-600" />
                        </button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </div>

      {/* Storage Info */}
      <div className="relative overflow-hidden rounded-2xl p-2 bg-gradient-to-br from-blue-600 via-blue-700 to-blue-800 text-white shadow-lg">
        {/* Glow Effect */}
        <div className="absolute inset-0 bg-white/10 blur-3xl opacity-20"></div>

        <div className="relative flex items-start justify-between">
          <div>
            <h3 className="text-lg font-semibold">Storage</h3>
            <p className="text-blue-100 text-sm mt-1 tracking-wide">
              24.8 GB <span className="text-white/80">/ 100 GB used</span>
            </p>

            {/* Progress Bar */}
            <div className="w-full bg-white/20 rounded-full h-2 mt-4 overflow-hidden">
              <div className="h-full bg-white rounded-full transition-all duration-700 ease-out w-[25%] shadow-[0_0_8px_rgba(255,255,255,0.6)]"></div>
            </div>

            {/* Mini stats */}
            <div className="flex justify-between text-xs text-white/80 mt-2">
              <span>Used: 25%</span>
              <span>Remaining: 75%</span>
            </div>
          </div>
          <button className="bg-white/20 hover:bg-white/30 backdrop-blur-md text-white px-4 py-2 rounded-lg transition-all text-sm shadow-md">
            Upgrade
          </button>
        </div>
      </div>
    </div>
  );
}
