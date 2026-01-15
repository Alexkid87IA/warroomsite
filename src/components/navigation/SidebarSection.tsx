import React, { memo } from 'react';
import { ChevronDown } from 'lucide-react';
import { cn } from '../../lib/utils';
import { SidebarItem } from './SidebarItem';
import type { NavSection } from '../../constants/navigation';

interface SidebarSectionProps {
  section: NavSection;
  isExpanded: boolean;
  onToggle: () => void;
  collapsed: boolean;
}

export const SidebarSection = memo<SidebarSectionProps>(({
  section,
  isExpanded,
  onToggle,
  collapsed,
}) => {
  const Icon = section.icon;

  if (collapsed) {
    // In collapsed mode, show items directly without section header
    return (
      <div className="space-y-1 py-2">
        {section.items.map((item) => (
          <SidebarItem key={item.path} item={item} collapsed={collapsed} />
        ))}
      </div>
    );
  }

  return (
    <div className="py-1">
      <button
        onClick={onToggle}
        className="w-full flex items-center justify-between px-3 py-2 text-xs font-semibold text-slate-400 uppercase tracking-wider hover:text-slate-300 transition-colors"
      >
        <div className="flex items-center gap-2">
          <Icon className="w-4 h-4" />
          <span>{section.label}</span>
        </div>
        <ChevronDown
          className={cn(
            'w-4 h-4 transition-transform duration-200',
            isExpanded ? 'rotate-0' : '-rotate-90'
          )}
        />
      </button>

      <div
        className={cn(
          'overflow-hidden transition-all duration-200',
          isExpanded ? 'max-h-[500px] opacity-100' : 'max-h-0 opacity-0'
        )}
      >
        <div className="space-y-1 pt-1">
          {section.items.map((item) => (
            <SidebarItem key={item.path} item={item} collapsed={collapsed} />
          ))}
        </div>
      </div>
    </div>
  );
});

SidebarSection.displayName = 'SidebarSection';
