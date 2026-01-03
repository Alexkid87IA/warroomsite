import { useState, useEffect, ReactNode } from 'react';
import { Shield, Lock, Eye, EyeOff, AlertCircle } from 'lucide-react';

const PASSWORD_HASH = import.meta.env.VITE_APP_PASSWORD_HASH || '';
const STORAGE_KEY = 'warroom-auth';
const SESSION_DURATION = 24 * 60 * 60 * 1000;

async function hashPassword(password: string): Promise<string> {
  const encoder = new TextEncoder();
  const data = encoder.encode(password);
  const hashBuffer = await crypto.subtle.digest('SHA-256', data);
  const hashArray = Array.from(new Uint8Array(hashBuffer));
  return hashArray.map(b => b.toString(16).padStart(2, '0')).join('');
}

function isSessionValid(): boolean {
  try {
    const stored = localStorage.getItem(STORAGE_KEY);
    if (!stored) return false;
    const { expiry } = JSON.parse(stored);
    return Date.now() < expiry;
  } catch { return false; }
}

function saveSession() {
  localStorage.setItem(STORAGE_KEY, JSON.stringify({ expiry: Date.now() + SESSION_DURATION }));
}

export function logout() {
  localStorage.removeItem(STORAGE_KEY);
  window.location.reload();
}

function LoginPage({ onSuccess }: { onSuccess: () => void }) {
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    setIsLoading(true);
    try {
      const hash = await hashPassword(password);
      if (hash === PASSWORD_HASH) { saveSession(); onSuccess(); }
      else { setError('Mot de passe incorrect'); setPassword(''); }
    } catch { setError('Erreur de vérification'); }
    finally { setIsLoading(false); }
  };

  return (
    <div className="min-h-screen bg-slate-950 flex items-center justify-center p-4">
      <div className="absolute inset-0 bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-red-900/20 via-transparent to-transparent" />
      <div className="relative z-10 w-full max-w-md">
        <div className="bg-slate-900/80 backdrop-blur-xl border border-slate-800 rounded-2xl p-8 shadow-2xl">
          <div className="text-center mb-8">
            <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-red-500 to-orange-600 flex items-center justify-center mx-auto mb-4 shadow-lg shadow-red-500/25">
              <Shield className="w-8 h-8 text-white" />
            </div>
            <h1 className="text-2xl font-bold text-white mb-2">War Room</h1>
            <p className="text-slate-400 text-sm">ADN Production vs Copyright Capital</p>
          </div>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-slate-300 mb-2">Mot de passe</label>
              <div className="relative">
                <Lock className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-500" />
                <input type={showPassword ? 'text' : 'password'} value={password} onChange={(e) => setPassword(e.target.value)} placeholder="Entrez le mot de passe" className="w-full pl-10 pr-10 py-3 bg-slate-800/50 border border-slate-700 rounded-xl text-white placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-red-500/50" autoFocus />
                <button type="button" onClick={() => setShowPassword(!showPassword)} className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-500 hover:text-slate-300">
                  {showPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
                </button>
              </div>
            </div>
            {error && <div className="flex items-center gap-2 p-3 bg-red-500/10 border border-red-500/30 rounded-lg text-red-400 text-sm"><AlertCircle className="w-4 h-4" /><span>{error}</span></div>}
            <button type="submit" disabled={!password || isLoading} className="w-full py-3 bg-gradient-to-r from-red-600 to-orange-600 text-white font-medium rounded-xl hover:from-red-500 hover:to-orange-500 disabled:opacity-50 transition-all">
              {isLoading ? 'Vérification...' : 'Accéder'}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default function ProtectedRoute({ children }: { children: ReactNode }) {
  const [isAuthenticated, setIsAuthenticated] = useState<boolean | null>(null);
  useEffect(() => {
    if (!PASSWORD_HASH) { setIsAuthenticated(true); return; }
    setIsAuthenticated(isSessionValid());
  }, []);
  if (isAuthenticated === null) return <div className="min-h-screen bg-slate-950 flex items-center justify-center"><div className="w-8 h-8 border-2 border-red-500 border-t-transparent rounded-full animate-spin" /></div>;
  if (!isAuthenticated) return <LoginPage onSuccess={() => setIsAuthenticated(true)} />;
  return <>{children}</>;
}