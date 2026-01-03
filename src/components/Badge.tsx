import React from 'react';

interface BadgeProps {
  type?: string;
  children: React.ReactNode;
}

export const Badge: React.FC<BadgeProps> = ({ type = 'medium', children }) => {
  const styles: Record<string, string> = {
    critical: "bg-red-500/20 text-red-300 border-red-500/50 animate-pulse",
    devastating: "bg-fuchsia-500/30 text-fuchsia-200 border-fuchsia-400/50",
    very_strong: "bg-emerald-500/20 text-emerald-300 border-emerald-500/50",
    strong: "bg-cyan-500/20 text-cyan-300 border-cyan-500/50",
    medium: "bg-amber-500/20 text-amber-300 border-amber-500/50",
    leverage: "bg-purple-500/20 text-purple-300 border-purple-500/50",
    contractual: "bg-slate-500/20 text-slate-300 border-slate-500/50",
    factual: "bg-orange-500/20 text-orange-300 border-orange-500/50",
    major: "bg-red-500/20 text-red-300 border-red-500/50",
    invoked: "bg-emerald-500/20 text-emerald-300 border-emerald-500/50",
    reserved: "bg-slate-600/20 text-slate-400 border-slate-500/30",
    expired: "bg-red-500/30 text-red-200 border-red-500/50",
    pending: "bg-amber-500/20 text-amber-300 border-amber-500/50",
    now: "bg-cyan-500/30 text-cyan-200 border-cyan-400/50 animate-pulse",
    upcoming: "bg-slate-600/20 text-slate-400 border-slate-500/30",
    documented: "bg-emerald-500/20 text-emerald-300 border-emerald-500/50",
    active: "bg-cyan-500/30 text-cyan-200 border-cyan-400/50",
    high: "bg-orange-500/20 text-orange-300 border-orange-500/50",
    reserve: "bg-slate-600/20 text-slate-400 border-slate-500/30",
    fact: "bg-blue-500/20 text-blue-300 border-blue-500/50",
    inference: "bg-purple-500/20 text-purple-300 border-purple-500/50"
  };

  return (
    <span className={`px-2 py-0.5 text-xs font-semibold rounded border ${styles[type] || styles.medium}`}>
      {children}
    </span>
  );
};
