import React, { memo } from 'react';

interface CardProps {
  title?: string;
  children: React.ReactNode;
  accent?: 'slate' | 'blue' | 'red' | 'emerald' | 'amber' | 'purple' | 'fuchsia' | 'cyan';
  icon?: string | null;
  pulse?: boolean;
  className?: string;
}

const accents: Record<string, string> = {
  slate: "border-slate-700/50",
  blue: "border-blue-500/30",
  red: "border-red-500/30",
  emerald: "border-emerald-500/30",
  amber: "border-amber-500/30",
  purple: "border-purple-500/30",
  fuchsia: "border-fuchsia-500/30",
  cyan: "border-cyan-500/30"
};

export const Card = memo<CardProps>(({
  title,
  children,
  accent = "slate",
  icon = null,
  pulse = false,
  className = ''
}) => (
  <div className={`bg-slate-900/60 backdrop-blur-sm rounded-xl border ${accents[accent]} ${pulse ? 'ring-1 ring-red-500/30 animate-pulse' : ''} ${className}`}>
    {title && (
      <div className="px-5 py-3 border-b border-slate-800/50 flex items-center gap-2">
        {icon && <span className="text-lg">{icon}</span>}
        <h3 className="font-semibold text-slate-100 tracking-tight">{title}</h3>
      </div>
    )}
    <div className="p-5">{children}</div>
  </div>
));

Card.displayName = 'Card';
