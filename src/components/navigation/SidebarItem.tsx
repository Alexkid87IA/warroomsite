import React, { memo } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { cn } from '../../lib/utils';
import type { NavItem } from '../../constants/navigation';

interface SidebarItemProps {
  item: NavItem;
  collapsed: boolean;
}

const typeStyles = {
  critical: {
    active: 'bg-red-950/50 text-red-200 border-l-2 border-red-500',
    inactive: 'text-red-300/70 hover:bg-red-950/30 hover:text-red-200',
  },
  important: {
    active: 'bg-amber-950/50 text-amber-200 border-l-2 border-amber-500',
    inactive: 'text-amber-300/70 hover:bg-amber-950/30 hover:text-amber-200',
  },
  standard: {
    active: 'bg-slate-800 text-white border-l-2 border-blue-500',
    inactive: 'text-slate-400 hover:bg-slate-800/50 hover:text-slate-200',
  },
};

export const SidebarItem = memo<SidebarItemProps>(({ item, collapsed }) => {
  const location = useLocation();
  const isActive = location.pathname === item.path;
  const Icon = item.icon;
  const styles = typeStyles[item.type];

  return (
    <Link
      to={item.path}
      className={cn(
        'flex items-center gap-3 px-3 py-2.5 rounded-lg transition-all duration-200 relative',
        isActive ? styles.active : styles.inactive,
        collapsed && 'justify-center px-2'
      )}
      title={collapsed ? item.label : undefined}
    >
      <Icon className="w-5 h-5 flex-shrink-0" />
      {!collapsed && (
        <span className="text-sm font-medium truncate">{item.label}</span>
      )}
      {item.type === 'critical' && !isActive && (
        <div className="absolute top-2 right-2 w-2 h-2 bg-red-500 rounded-full animate-pulse" />
      )}
    </Link>
  );
});

SidebarItem.displayName = 'SidebarItem';
