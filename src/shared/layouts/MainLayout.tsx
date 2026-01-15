import { ReactNode } from 'react';
import { Sidebar, MobileMenuButton } from '../../components/navigation';
import { useUIStore } from '../../stores';
import { cn } from '../../lib/utils';

interface MainLayoutProps {
  children: ReactNode;
}

export default function MainLayout({ children }: MainLayoutProps) {
  const sidebarCollapsed = useUIStore((state) => state.sidebarCollapsed);

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 text-slate-100">
      {/* Background grid pattern */}
      <div className="fixed inset-0 bg-[linear-gradient(rgba(148,163,184,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(148,163,184,0.03)_1px,transparent_1px)] bg-[size:60px_60px] pointer-events-none" />

      {/* Sidebar */}
      <Sidebar />

      {/* Main content area */}
      <div
        className={cn(
          'min-h-screen flex flex-col transition-all duration-300',
          // Desktop: offset by sidebar width
          'lg:ml-[280px]',
          sidebarCollapsed && 'lg:ml-[72px]'
        )}
      >
        {/* Header */}
        <header className="border-b border-slate-800/80 bg-slate-900/95 backdrop-blur-md sticky top-0 z-30">
          <div className="px-4 lg:px-6 py-4">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-4">
                {/* Mobile menu button */}
                <MobileMenuButton />

                {/* Logo - only on mobile or when sidebar collapsed */}
                <div className={cn(
                  'flex items-center gap-3',
                  'lg:hidden',
                  sidebarCollapsed && 'lg:flex'
                )}>
                  <div className="w-10 h-10 bg-gradient-to-br from-red-500 via-amber-500 to-emerald-500 rounded-lg flex items-center justify-center shadow-lg">
                    <span className="text-white text-lg">⚔️</span>
                  </div>
                </div>

                {/* Title */}
                <div>
                  <h1 className="text-lg lg:text-xl font-bold tracking-tight">
                    <span className="text-blue-400">ADN Production</span>
                    <span className="text-slate-600 mx-2">vs</span>
                    <span className="text-red-400">Copyright Capital</span>
                  </h1>
                  <p className="text-slate-500 text-xs lg:text-sm hidden sm:block">
                    War Room v4.3 — Centre de Commandement Stratégique
                  </p>
                </div>
              </div>
            </div>
          </div>
        </header>

        {/* Main content */}
        <main className="flex-1 px-4 lg:px-6 py-6 relative">
          <div className="max-w-7xl mx-auto">
            {children}
          </div>
        </main>

        {/* Footer */}
        <footer className="border-t border-slate-800/50 bg-slate-900/50">
          <div className="px-4 lg:px-6 py-6 text-center text-slate-500 text-sm">
            War Room v4.3 — 16/01/2026 — Stratégie Taleb (Antifragilité)
          </div>
        </footer>
      </div>
    </div>
  );
}
