import React from 'react';

interface StatusCardProps {
  label: string;
  count: number;
  color?: string;
  active?: boolean;
  onClick?: () => void;
}

export default function StatusCard({ label, count, color = '#6B7280', active = false, onClick }: StatusCardProps) {
  return (
    <button
      onClick={onClick}
      className={`px-5 py-3 rounded-lg border transition-all hover:shadow-md ${
        active
          ? 'border-[#2962FF] bg-[#EEF2FF] shadow-sm'
          : 'border-[#E6E8EC] bg-white hover:border-[#2962FF]'
      }`}
    >
      <div className="flex items-center gap-3">
        <div
          className="w-2 h-2 rounded-full"
          style={{ backgroundColor: active ? '#2962FF' : color }}
        ></div>
        <div className="text-left">
          <div className="text-xs text-[#6B7280]">{label}</div>
          <div className="text-[#1A1A1A] mt-0.5">{count}</div>
        </div>
      </div>
    </button>
  );
}
