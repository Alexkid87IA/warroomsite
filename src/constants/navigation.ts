import {
  Home, Scale, AlertTriangle, Mail, Swords, PinIcon, Brain,
  Users, FileText, BarChart3, Calendar, Phone, Repeat,
  Shield, Send, ClipboardList, Gavel, Target, Sparkles, Wrench,
  type LucideIcon
} from 'lucide-react';

export interface NavItem {
  path: string;
  label: string;
  icon: LucideIcon;
  type: 'critical' | 'important' | 'standard';
}

export interface NavSection {
  id: string;
  label: string;
  icon: LucideIcon;
  items: NavItem[];
}

export const NAV_SECTIONS: NavSection[] = [
  {
    id: 'principal',
    label: 'Principal',
    icon: Home,
    items: [
      { path: '/', label: 'Dashboard', icon: Home, type: 'standard' },
      { path: '/intelligence', label: 'Intelligence AI', icon: Sparkles, type: 'important' },
      { path: '/neutral', label: 'Neutral Lens', icon: Scale, type: 'critical' },
      { path: '/oye-clarification', label: 'OYE', icon: AlertTriangle, type: 'critical' },
      { path: '/gmail', label: 'Gmail', icon: Mail, type: 'critical' },
      { path: '/war', label: 'Stratégie', icon: Swords, type: 'critical' },
      { path: '/encours', label: 'En Cours', icon: PinIcon, type: 'important' },
      { path: '/tools', label: 'Outils', icon: Wrench, type: 'important' },
    ],
  },
  {
    id: 'contexte',
    label: 'Contexte',
    icon: Users,
    items: [
      { path: '/psychology', label: 'Psycho CC', icon: Brain, type: 'standard' },
      { path: '/parties', label: 'Parties', icon: Users, type: 'standard' },
      { path: '/contracts', label: 'Contrats', icon: FileText, type: 'standard' },
      { path: '/assets', label: 'Actifs', icon: BarChart3, type: 'standard' },
    ],
  },
  {
    id: 'preuves',
    label: 'Preuves',
    icon: Shield,
    items: [
      { path: '/chronology', label: 'Chronologie', icon: Calendar, type: 'standard' },
      { path: '/meeting-14nov', label: '14 Nov', icon: Phone, type: 'important' },
      { path: '/meta', label: 'Meta', icon: Repeat, type: 'important' },
      { path: '/2fa', label: '2FA', icon: Shield, type: 'important' },
    ],
  },
  {
    id: 'documents',
    label: 'Documents',
    icon: FileText,
    items: [
      { path: '/letters', label: 'Lettres', icon: Send, type: 'standard' },
      { path: '/evidence', label: 'Preuves', icon: ClipboardList, type: 'standard' },
      { path: '/legal', label: 'Juridique', icon: Gavel, type: 'standard' },
      { path: '/analysis', label: 'Analyse', icon: Target, type: 'standard' },
    ],
  },
];
