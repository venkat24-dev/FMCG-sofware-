import React, { useState } from 'react';
import { MoreVertical, ChevronDown, Eye, Edit, Copy, Trash2 } from 'lucide-react';

interface Column {
  key: string;
  label: string;
  render?: (value: any, row: any) => React.ReactNode;
}

interface DataTableProps {
  columns: Column[];
  data: any[];
  showCheckbox?: boolean;
  onRowClick?: (row: any) => void;
}

export default function DataTable({ columns, data, showCheckbox = true, onRowClick }: DataTableProps) {
  const [selectedRows, setSelectedRows] = useState<number[]>([]);
  const [activeMenu, setActiveMenu] = useState<number | null>(null);

  const toggleRow = (index: number) => {
    setSelectedRows(prev =>
      prev.includes(index) ? prev.filter(i => i !== index) : [...prev, index]
    );
  };

  const toggleAll = () => {
    setSelectedRows(selectedRows.length === data.length ? [] : data.map((_, i) => i));
  };

  return (
    <div className="bg-white rounded-lg border border-[#E6E8EC] overflow-hidden">
      <div className="overflow-x-auto">
        <table className="w-full">
          <thead>
            <tr className="bg-[#F8F9FC] border-b border-[#E6E8EC]">
              {showCheckbox && (
                <th className="w-12 px-4 py-3">
                  <input
                    type="checkbox"
                    checked={selectedRows.length === data.length && data.length > 0}
                    onChange={toggleAll}
                    className="w-4 h-4 rounded border-[#E6E8EC] text-[#2962FF] focus:ring-[#2962FF]"
                  />
                </th>
              )}
              {columns.map((col) => (
                <th key={col.key} className="px-4 py-3 text-left text-xs text-[#6B7280] uppercase tracking-wider">
                  {col.label}
                </th>
              ))}
              <th className="w-12 px-4 py-3"></th>
            </tr>
          </thead>
          <tbody className="divide-y divide-[#E6E8EC]">
            {data.map((row, index) => (
              <tr
                key={index}
                className="hover:bg-[#F8F9FC] transition-colors cursor-pointer"
                onClick={() => onRowClick?.(row)}
              >
                {showCheckbox && (
                  <td className="px-4 py-4">
                    <input
                      type="checkbox"
                      checked={selectedRows.includes(index)}
                      onChange={(e) => {
                        e.stopPropagation();
                        toggleRow(index);
                      }}
                      className="w-4 h-4 rounded border-[#E6E8EC] text-[#2962FF] focus:ring-[#2962FF]"
                    />
                  </td>
                )}
                {columns.map((col) => (
                  <td key={col.key} className="px-4 py-4 text-sm text-[#1A1A1A]">
                    {col.render ? col.render(row[col.key], row) : row[col.key]}
                  </td>
                ))}
                <td className="px-4 py-4 relative">
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      setActiveMenu(activeMenu === index ? null : index);
                    }}
                    className="p-1 hover:bg-[#E6E8EC] rounded transition-colors"
                  >
                    <MoreVertical className="w-4 h-4 text-[#6B7280]" />
                  </button>
                  {activeMenu === index && (
                    <div className="absolute right-0 top-full mt-1 w-[160px] bg-white rounded-lg shadow-lg border border-[#E6E8EC] py-2 z-10">
                      <button className="w-full px-4 py-2 text-left text-sm hover:bg-[#F8F9FC] transition-colors flex items-center gap-2">
                        <Eye className="w-4 h-4" />
                        View
                      </button>
                      <button className="w-full px-4 py-2 text-left text-sm hover:bg-[#F8F9FC] transition-colors flex items-center gap-2">
                        <Edit className="w-4 h-4" />
                        Edit
                      </button>
                      <button className="w-full px-4 py-2 text-left text-sm hover:bg-[#F8F9FC] transition-colors flex items-center gap-2">
                        <Copy className="w-4 h-4" />
                        Duplicate
                      </button>
                      <div className="border-t border-[#E6E8EC] my-1"></div>
                      <button className="w-full px-4 py-2 text-left text-sm text-[#EF4444] hover:bg-[#F8F9FC] transition-colors flex items-center gap-2">
                        <Trash2 className="w-4 h-4" />
                        Delete
                      </button>
                    </div>
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
