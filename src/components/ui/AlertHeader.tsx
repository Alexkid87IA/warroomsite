import React, { memo } from 'react';
import { cn } from '../../lib/utils';

export interface AlertHeaderProps {
  children: React.ReactNode;
  variant?: 'danger' | 'warning' | 'info' | 'success' | 'amber';
  icon?: React.ReactNode;
  className?: string;
}

const variantStyles = {
  danger: 'from-red-900/30 via-red-800/20 to-transparent border-red-500/30',
  warning: 'from-amber-900/30 via-amber-800/20 to-transparent border-amber-500/30',
  amber: 'from-amber-900/30 via-amber-800/20 to-transparent border-amber-500/30',
  info: 'from-blue-900/30 via-blue-800/20 to-transparent border-blue-500/30',
  success: 'from-emerald-900/30 via-emerald-800/20 to-transparent border-emerald-500/30',
};

const iconBgStyles = {
  danger: 'bg-red-500/20',
  warning: 'bg-amber-500/20',
  amber: 'bg-amber-500/20',
  info: 'bg-blue-500/20',
  success: 'bg-emerald-500/20',
};

export const AlertHeader = memo<AlertHeaderProps>(({
  children,
  variant = 'info',
  icon,
  className,
}) => {
  return (
    <div className={cn(
      'bg-gradient-to-r rounded-xl p-5 border',
      variantStyles[variant],
      className
    )}>
      <div className="flex items-start gap-4">
        {icon && (
          <div className={cn(
            'w-12 h-12 rounded-lg flex items-center justify-center text-2xl flex-shrink-0',
            iconBgStyles[variant]
          )}>
            {icon}
          </div>
        )}
        <div className="flex-1">
          {children}
        </div>
      </div>
    </div>
  );
});

AlertHeader.displayName = 'AlertHeader';
