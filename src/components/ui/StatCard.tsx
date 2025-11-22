import React from 'react';
import { TrendingUp, TrendingDown } from 'lucide-react';

interface StatCardProps {
  title: string;
  value: string | number;
  icon?: React.ReactNode;
  trend?: {
    value: number;
    direction: 'up' | 'down';
  };
  color?: string;
}

export default function StatCard({ title, value, icon, trend, color = '#2962FF' }: StatCardProps) {
  return (
    <div className="bg-white rounded-2xl border border-[#E6E8EC] p-4 hover:shadow-md transition-shadow h-full shadow-sm">
      <div className="flex items-start justify-between mb-3">
        <div className="text-[14px] font-medium text-[#6B7280]">{title}</div>
        {icon && (
          <div
            className="w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0"
            style={{ backgroundColor: `${color}15`, color }}
          >
            {icon}
          </div>
        )}
      </div>
      <div className="flex items-end justify-between">
        <div className="text-[28px] font-semibold text-[#1A1A1A]">{value}</div>
        {trend && (
          <div className={`flex items-center gap-1 text-[13px] font-medium ${
            trend.direction === 'up' ? 'text-[#10B981]' : 'text-[#EF4444]'
          }`}>
            {trend.direction === 'up' ? <TrendingUp className="w-4 h-4" /> : <TrendingDown className="w-4 h-4" />}
            <span>{Math.abs(trend.value)}%</span>
          </div>
        )}
      </div>
    </div>
  );
}