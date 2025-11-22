import React from 'react';

interface ProgressBarProps {
  percentage: number;
  color?: string;
  showLabel?: boolean;
  height?: 'sm' | 'md' | 'lg';
}

export default function ProgressBar({ 
  percentage, 
  color = '#2962FF', 
  showLabel = true,
  height = 'md'
}: ProgressBarProps) {
  const heightClasses = {
    sm: 'h-1.5',
    md: 'h-2',
    lg: 'h-3'
  };

  return (
    <div className="flex items-center gap-2">
      <div className={`flex-1 bg-[#E6E8EC] rounded-full overflow-hidden ${heightClasses[height]}`}>
        <div
          className="h-full rounded-full transition-all duration-300"
          style={{ width: `${Math.min(100, Math.max(0, percentage))}%`, backgroundColor: color }}
        ></div>
      </div>
      {showLabel && (
        <span className="text-xs text-[#6B7280] min-w-[40px] text-right">{percentage}%</span>
      )}
    </div>
  );
}
