import React, { memo } from 'react';
import { cn } from '../../lib/utils';

export interface DataBoxProps {
  children: React.ReactNode;
  variant?: 'default' | 'elevated' | 'danger' | 'success' | 'warning' | 'info';
  size?: 'sm' | 'md' | 'lg';
  className?: string;
}

const variantStyles = {
  default: 'bg-slate-800/30',
  elevated: 'bg-slate-800/50 border border-slate-700/50',
  danger: 'bg-red-500/20 border border-red-500/50',
  success: 'bg-emerald-500/20 border border-emerald-500/50',
  warning: 'bg-amber-500/20 border border-amber-500/50',
  info: 'bg-blue-500/20 border border-blue-500/50',
};

const sizeStyles = {
  sm: 'p-2',
  md: 'p-3',
  lg: 'p-4',
};

export const DataBox = memo<DataBoxProps>(({
  children,
  variant = 'default',
  size = 'md',
  className,
}) => {
  return (
    <div className={cn(
      'rounded-lg',
      variantStyles[variant],
      sizeStyles[size],
      className
    )}>
      {children}
    </div>
  );
});

DataBox.displayName = 'DataBox';
