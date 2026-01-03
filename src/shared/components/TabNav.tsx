import { useState } from 'react';

export interface Tab {
  id: string;
  label: string;
  icon?: string;
}

interface TabNavProps {
  tabs: Tab[];
  activeTab: string;
  onTabChange: (tabId: string) => void;
  accentColor?: 'red' | 'purple' | 'blue' | 'emerald' | 'cyan' | 'amber';
}

const colorClasses = {
  red: {
    active: 'bg-red-600/40 text-white border-red-500/50',
    inactive: 'text-slate-400 hover:text-slate-200 hover:bg-red-900/20 border-transparent'
  },
  purple: {
    active: 'bg-purple-600/40 text-white border-purple-500/50',
    inactive: 'text-slate-400 hover:text-slate-200 hover:bg-purple-900/20 border-transparent'
  },
  blue: {
    active: 'bg-blue-600/40 text-white border-blue-500/50',
    inactive: 'text-slate-400 hover:text-slate-200 hover:bg-blue-900/20 border-transparent'
  },
  emerald: {
    active: 'bg-emerald-600/40 text-white border-emerald-500/50',
    inactive: 'text-slate-400 hover:text-slate-200 hover:bg-emerald-900/20 border-transparent'
  },
  cyan: {
    active: 'bg-cyan-600/40 text-white border-cyan-500/50',
    inactive: 'text-slate-400 hover:text-slate-200 hover:bg-cyan-900/20 border-transparent'
  },
  amber: {
    active: 'bg-amber-600/40 text-white border-amber-500/50',
    inactive: 'text-slate-400 hover:text-slate-200 hover:bg-amber-900/20 border-transparent'
  }
};

export default function TabNav({ tabs, activeTab, onTabChange, accentColor = 'blue' }: TabNavProps) {
  const colors = colorClasses[accentColor];

  return (
    <div className="border-b border-slate-700/50 mb-6">
      <div className="flex gap-2 overflow-x-auto pb-2">
        {tabs.map(tab => {
          const isActive = activeTab === tab.id;
          return (
            <button
              key={tab.id}
              onClick={() => onTabChange(tab.id)}
              className={`px-4 py-2.5 rounded-t-lg text-sm font-medium whitespace-nowrap transition-all flex items-center gap-2 border-b-2 ${
                isActive ? colors.active : colors.inactive
              }`}
            >
              {tab.icon && <span>{tab.icon}</span>}
              <span>{tab.label}</span>
            </button>
          );
        })}
      </div>
    </div>
  );
}
