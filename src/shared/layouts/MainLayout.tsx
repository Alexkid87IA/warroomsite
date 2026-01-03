import { ReactNode } from 'react';

interface MainLayoutProps {
  children: ReactNode;
}

export default function MainLayout({ children }: MainLayoutProps) {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 text-slate-100">
      <div className="fixed inset-0 bg-[linear-gradient(rgba(148,163,184,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(148,163,184,0.03)_1px,transparent_1px)] bg-[size:60px_60px] pointer-events-none"></div>

      <header className="border-b border-slate-800/80 bg-slate-900/95 backdrop-blur-md sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 bg-gradient-to-br from-red-500 via-amber-500 to-emerald-500 rounded-xl flex items-center justify-center shadow-lg">
                <span className="text-white font-black text-lg">⚔️</span>
              </div>
              <div>
                <h1 className="text-xl font-bold tracking-tight">
                  <span className="text-blue-400">ADN Production</span>
                  <span className="text-slate-600 mx-2">vs</span>
                  <span className="text-red-400">Copyright Capital</span>
                </h1>
                <p className="text-slate-500 text-sm">War Room v4.3 — Centre de Commandement Stratégique</p>
              </div>
            </div>
          </div>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-4 py-6 relative">
        {children}
      </main>

      <footer className="border-t border-slate-800/50 mt-12 bg-slate-900/50">
        <div className="max-w-7xl mx-auto px-4 py-6 text-center text-slate-500 text-sm">
          War Room v4.3 — 30/12/2025 — Stratégie Taleb (Antifragilité)
        </div>
      </footer>
    </div>
  );
}
