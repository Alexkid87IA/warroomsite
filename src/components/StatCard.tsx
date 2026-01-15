import React, { memo } from 'react';

interface StatCardProps {
  label: string;
  value: string | number;
  sublabel?: string;
  type?: 'default' | 'danger' | 'success' | 'warning' | 'info';
}

const typeStyles: Record<string, string> = {
  default: "from-slate-800 to-slate-900",
  danger: "from-red-900/40 to-slate-900",
  success: "from-emerald-900/40 to-slate-900",
  warning: "from-amber-900/40 to-slate-900",
  info: "from-blue-900/40 to-slate-900"
};

export const StatCard = memo<StatCardProps>(({
  label,
  value,
  sublabel,
  type = "default"
}) => (
  <div className={`bg-gradient-to-br ${typeStyles[type]} rounded-xl p-4 border border-slate-700/30`}>
    <div className="text-slate-400 text-xs uppercase tracking-wider mb-1">{label}</div>
    <div className="text-2xl font-bold text-white">{value}</div>
    {sublabel && <div className="text-slate-500 text-xs mt-1">{sublabel}</div>}
  </div>
));

StatCard.displayName = 'StatCard';
