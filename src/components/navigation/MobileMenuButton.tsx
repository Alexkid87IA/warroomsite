import React, { memo } from 'react';
import { Menu } from 'lucide-react';
import { useUIStore } from '../../stores';

export const MobileMenuButton = memo(() => {
  const setMobileMenuOpen = useUIStore((state) => state.setMobileMenuOpen);

  return (
    <button
      onClick={() => setMobileMenuOpen(true)}
      className="lg:hidden p-2 rounded-lg hover:bg-slate-800 text-slate-400 hover:text-slate-200 transition-colors"
      aria-label="Open menu"
    >
      <Menu className="w-6 h-6" />
    </button>
  );
});

MobileMenuButton.displayName = 'MobileMenuButton';
