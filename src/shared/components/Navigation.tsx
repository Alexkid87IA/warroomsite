import { Link, useLocation } from 'react-router-dom';
import {
  Home, Scale, AlertTriangle, Mail, Swords, PinIcon, Brain,
  Users, FileText, BarChart3, Calendar, Phone, Repeat,
  Shield, Send, ClipboardList, Gavel, Target, Sparkles
} from 'lucide-react';

interface NavItem {
  path: string;
  label: string;
  icon: any;
  type?: 'critical' | 'important' | 'standard';
  group: 'primary' | 'secondary' | 'evidence' | 'documents';
}

const navItems: NavItem[] = [
  { path: '/', label: 'Dashboard', icon: Home, type: 'standard', group: 'primary' },
  { path: '/intelligence', label: 'Intelligence AI', icon: Sparkles, type: 'important', group: 'primary' },
  { path: '/neutral', label: 'Neutral Lens', icon: Scale, type: 'critical', group: 'primary' },
  { path: '/oye-clarification', label: 'OYE', icon: AlertTriangle, type: 'critical', group: 'primary' },
  { path: '/gmail', label: 'Gmail', icon: Mail, type: 'critical', group: 'primary' },
  { path: '/war', label: 'Stratégie', icon: Swords, type: 'critical', group: 'primary' },
  { path: '/encours', label: 'En Cours', icon: PinIcon, type: 'important', group: 'primary' },

  { path: '/psychology', label: 'Psycho CC', icon: Brain, type: 'standard', group: 'secondary' },
  { path: '/parties', label: 'Parties', icon: Users, type: 'standard', group: 'secondary' },
  { path: '/contracts', label: 'Contrats', icon: FileText, type: 'standard', group: 'secondary' },
  { path: '/assets', label: 'Actifs', icon: BarChart3, type: 'standard', group: 'secondary' },

  { path: '/chronology', label: 'Chronologie', icon: Calendar, type: 'standard', group: 'evidence' },
  { path: '/meeting-14nov', label: '14 Nov', icon: Phone, type: 'important', group: 'evidence' },
  { path: '/meta', label: 'Meta', icon: Repeat, type: 'important', group: 'evidence' },
  { path: '/2fa', label: '2FA', icon: Shield, type: 'important', group: 'evidence' },

  { path: '/letters', label: 'Lettres', icon: Send, type: 'standard', group: 'documents' },
  { path: '/evidence', label: 'Preuves', icon: ClipboardList, type: 'standard', group: 'documents' },
  { path: '/legal', label: 'Juridique', icon: Gavel, type: 'standard', group: 'documents' },
  { path: '/analysis', label: 'Analyse', icon: Target, type: 'standard', group: 'documents' }
];

export default function Navigation() {
  const location = useLocation();

  const getItemStyles = (item: NavItem, isActive: boolean) => {
    if (isActive) {
      if (item.type === 'critical') {
        return 'bg-red-950/50 text-red-200 border-red-500/50 shadow-sm shadow-red-500/20';
      }
      if (item.type === 'important') {
        return 'bg-amber-950/50 text-amber-200 border-amber-500/50 shadow-sm shadow-amber-500/20';
      }
      return 'bg-slate-800 text-slate-100 border-slate-600/50';
    }

    if (item.type === 'critical') {
      return 'text-red-300/70 border-red-500/20 hover:bg-red-950/30 hover:border-red-500/40 hover:text-red-200';
    }
    if (item.type === 'important') {
      return 'text-amber-300/70 border-amber-500/20 hover:bg-amber-950/30 hover:border-amber-500/40 hover:text-amber-200';
    }
    return 'text-slate-400 border-slate-700/30 hover:bg-slate-800/50 hover:border-slate-600/50 hover:text-slate-200';
  };

  const groupedItems = {
    primary: navItems.filter(item => item.group === 'primary'),
    secondary: navItems.filter(item => item.group === 'secondary'),
    evidence: navItems.filter(item => item.group === 'evidence'),
    documents: navItems.filter(item => item.group === 'documents')
  };

  return (
    <nav className="border-b border-slate-800/50 bg-slate-950/95 backdrop-blur-md sticky top-[73px] z-40">
      <div className="max-w-[1800px] mx-auto px-4">
        <div className="flex gap-2 overflow-x-auto py-3 scrollbar-thin scrollbar-thumb-slate-700 scrollbar-track-transparent">
          {Object.entries(groupedItems).map(([groupKey, items], groupIndex) => (
            <div key={groupKey} className="flex gap-1.5 items-center">
              {items.map(item => {
                const isActive = location.pathname === item.path;
                const Icon = item.icon;
                return (
                  <Link
                    key={item.path}
                    to={item.path}
                    className={`
                      group relative px-3.5 py-2 rounded-md text-[13px] font-medium
                      whitespace-nowrap transition-all duration-200
                      flex items-center gap-2 border
                      ${getItemStyles(item, isActive)}
                    `}
                  >
                    <Icon className="w-4 h-4 flex-shrink-0" />
                    <span className="hidden sm:inline">{item.label}</span>
                    {item.type === 'critical' && !isActive && (
                      <div className="absolute -top-0.5 -right-0.5 w-1.5 h-1.5 bg-red-500 rounded-full animate-pulse" />
                    )}
                  </Link>
                );
              })}
              {groupIndex < Object.keys(groupedItems).length - 1 && (
                <div className="w-px h-6 bg-slate-700/50 mx-1" />
              )}
            </div>
          ))}
        </div>
      </div>
    </nav>
  );
}
