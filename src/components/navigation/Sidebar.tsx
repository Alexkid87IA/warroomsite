import React, { memo } from 'react';
import { PanelLeftClose, PanelLeft, X } from 'lucide-react';
import { cn } from '../../lib/utils';
import { useUIStore } from '../../stores';
import { NAV_SECTIONS } from '../../constants/navigation';
import { SidebarSection } from './SidebarSection';

interface SidebarProps {
  className?: string;
}

export const Sidebar = memo<SidebarProps>(({ className }) => {
  const {
    sidebarCollapsed,
    sidebarSections,
    mobileMenuOpen,
    toggleSidebar,
    toggleSection,
    setMobileMenuOpen,
  } = useUIStore();

  return (
    <>
      {/* Mobile overlay */}
      {mobileMenuOpen && (
        <div
          className="fixed inset-0 bg-black/60 z-40 lg:hidden"
          onClick={() => setMobileMenuOpen(false)}
        />
      )}

      {/* Sidebar */}
      <aside
        className={cn(
          'fixed top-0 left-0 h-full bg-slate-900/95 backdrop-blur-md border-r border-slate-800/80 z-50',
          'flex flex-col transition-all duration-300 ease-in-out',
          // Desktop: show based on collapsed state
          'hidden lg:flex',
          sidebarCollapsed ? 'w-[72px]' : 'w-[280px]',
          // Mobile: show/hide based on mobileMenuOpen
          mobileMenuOpen && 'flex w-[280px]',
          className
        )}
      >
        {/* Header */}
        <div className={cn(
          'flex items-center border-b border-slate-800/80 p-4',
          sidebarCollapsed ? 'justify-center' : 'justify-between'
        )}>
          {!sidebarCollapsed && (
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-gradient-to-br from-red-500 via-amber-500 to-emerald-500 rounded-lg flex items-center justify-center shadow-lg">
                <span className="text-white text-lg">⚔️</span>
              </div>
              <div className="flex flex-col">
                <span className="text-sm font-bold text-slate-100">War Room</span>
                <span className="text-xs text-slate-500">v4.3</span>
              </div>
            </div>
          )}

          {/* Desktop collapse button */}
          <button
            onClick={toggleSidebar}
            className="hidden lg:flex p-2 rounded-lg hover:bg-slate-800 text-slate-400 hover:text-slate-200 transition-colors"
            title={sidebarCollapsed ? 'Expand sidebar' : 'Collapse sidebar'}
          >
            {sidebarCollapsed ? (
              <PanelLeft className="w-5 h-5" />
            ) : (
              <PanelLeftClose className="w-5 h-5" />
            )}
          </button>

          {/* Mobile close button */}
          <button
            onClick={() => setMobileMenuOpen(false)}
            className="lg:hidden p-2 rounded-lg hover:bg-slate-800 text-slate-400 hover:text-slate-200 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Navigation */}
        <nav className="flex-1 overflow-y-auto px-2 py-4 scrollbar-thin scrollbar-thumb-slate-700 scrollbar-track-transparent">
          <div className="space-y-2">
            {NAV_SECTIONS.map((section) => (
              <SidebarSection
                key={section.id}
                section={section}
                isExpanded={sidebarSections[section.id] ?? true}
                onToggle={() => toggleSection(section.id)}
                collapsed={sidebarCollapsed}
              />
            ))}
          </div>
        </nav>

        {/* Footer */}
        {!sidebarCollapsed && (
          <div className="border-t border-slate-800/80 p-4">
            <div className="text-xs text-slate-500 text-center">
              ADN vs Copyright Capital
            </div>
          </div>
        )}
      </aside>

      {/* Mobile sidebar (overlay) */}
      <aside
        className={cn(
          'fixed top-0 left-0 h-full bg-slate-900/95 backdrop-blur-md border-r border-slate-800/80 z-50',
          'flex flex-col w-[280px] transition-transform duration-300 ease-in-out lg:hidden',
          mobileMenuOpen ? 'translate-x-0' : '-translate-x-full'
        )}
      >
        {/* Header */}
        <div className="flex items-center justify-between border-b border-slate-800/80 p-4">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-gradient-to-br from-red-500 via-amber-500 to-emerald-500 rounded-lg flex items-center justify-center shadow-lg">
              <span className="text-white text-lg">⚔️</span>
            </div>
            <div className="flex flex-col">
              <span className="text-sm font-bold text-slate-100">War Room</span>
              <span className="text-xs text-slate-500">v4.3</span>
            </div>
          </div>

          <button
            onClick={() => setMobileMenuOpen(false)}
            className="p-2 rounded-lg hover:bg-slate-800 text-slate-400 hover:text-slate-200 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Navigation */}
        <nav className="flex-1 overflow-y-auto px-2 py-4">
          <div className="space-y-2">
            {NAV_SECTIONS.map((section) => (
              <SidebarSection
                key={section.id}
                section={section}
                isExpanded={sidebarSections[section.id] ?? true}
                onToggle={() => toggleSection(section.id)}
                collapsed={false}
              />
            ))}
          </div>
        </nav>

        {/* Footer */}
        <div className="border-t border-slate-800/80 p-4">
          <div className="text-xs text-slate-500 text-center">
            ADN vs Copyright Capital
          </div>
        </div>
      </aside>
    </>
  );
});

Sidebar.displayName = 'Sidebar';
