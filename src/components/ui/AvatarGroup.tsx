import React from 'react';

interface Avatar {
  name: string;
  image?: string;
  color?: string;
}

interface AvatarGroupProps {
  avatars: Avatar[];
  max?: number;
  size?: 'sm' | 'md' | 'lg';
}

export default function AvatarGroup({ avatars, max = 4, size = 'md' }: AvatarGroupProps) {
  const displayAvatars = avatars.slice(0, max);
  const remaining = Math.max(0, avatars.length - max);

  const sizeClasses = {
    sm: 'w-6 h-6 text-xs',
    md: 'w-8 h-8 text-xs',
    lg: 'w-10 h-10 text-sm'
  };

  const getInitials = (name: string) => {
    return name
      .split(' ')
      .map(n => n[0])
      .join('')
      .toUpperCase()
      .slice(0, 2);
  };

  const getColor = (name: string) => {
    const colors = [
      '#2962FF', '#4975FF', '#10B981', '#F59E0B', '#EF4444', 
      '#8B5CF6', '#EC4899', '#14B8A6', '#F97316', '#06B6D4'
    ];
    const index = name.charCodeAt(0) % colors.length;
    return colors[index];
  };

  return (
    <div className="flex items-center -space-x-2">
      {displayAvatars.map((avatar, index) => (
        <div
          key={index}
          className={`${sizeClasses[size]} rounded-full border-2 border-white flex items-center justify-center text-white overflow-hidden`}
          style={{ backgroundColor: avatar.color || getColor(avatar.name) }}
          title={avatar.name}
        >
          {avatar.image ? (
            <img src={avatar.image} alt={avatar.name} className="w-full h-full object-cover" />
          ) : (
            <span>{getInitials(avatar.name)}</span>
          )}
        </div>
      ))}
      {remaining > 0 && (
        <div
          className={`${sizeClasses[size]} rounded-full border-2 border-white bg-[#E6E8EC] flex items-center justify-center text-[#6B7280]`}
        >
          <span>+{remaining}</span>
        </div>
      )}
    </div>
  );
}
