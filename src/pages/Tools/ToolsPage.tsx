import { useState } from 'react';
import {
  Wrench, Calculator, GitBranch, Shield, MessageSquare,
  MessageCircle, Mail, Keyboard, HelpCircle
} from 'lucide-react';
import { cn } from '../../lib/utils';
import { CaseStrength } from '../../components/CaseStrength';
import { ResponseGenerator } from '../../components/ResponseGenerator';
import { TalkingPoints } from '../../components/TalkingPoints';
import { EmailTimeline } from '../../components/EmailTimeline';
import { useCalculatorStore } from '../../components/FinancialCalculator';
import { useDecisionMatrixStore } from '../../components/DecisionMatrix';
import { SHORTCUT_LIST } from '../../hooks/useKeyboardShortcuts';

type TabId = 'strength' | 'responses' | 'talking' | 'emails' | 'shortcuts';

interface Tab {
  id: TabId;
  label: string;
  icon: typeof Wrench;
}

const TABS: Tab[] = [
  { id: 'strength', label: 'Force du Dossier', icon: Shield },
  { id: 'responses', label: 'Générateur Réponses', icon: MessageSquare },
  { id: 'talking', label: 'Talking Points', icon: MessageCircle },
  { id: 'emails', label: 'Historique Emails', icon: Mail },
  { id: 'shortcuts', label: 'Raccourcis', icon: Keyboard },
];

const ToolsPage = () => {
  const [activeTab, setActiveTab] = useState<TabId>('strength');
  const openCalculator = useCalculatorStore((s) => s.open);
  const openDecisionMatrix = useDecisionMatrixStore((s) => s.open);

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-3">
          <Wrench className="text-purple-400" size={28} />
          <div>
            <h1 className="text-2xl font-bold text-slate-100">Outils</h1>
            <p className="text-slate-400 text-sm">Analyse, préparation et suivi du dossier</p>
          </div>
        </div>
      </div>

      {/* Quick action buttons */}
      <div className="flex gap-3">
        <button
          onClick={openCalculator}
          className="flex items-center gap-2 px-4 py-2 bg-emerald-500/10 border border-emerald-500/30 rounded-lg text-emerald-400 hover:bg-emerald-500/20 transition-colors"
        >
          <Calculator size={18} />
          Calculateur Financier
        </button>
        <button
          onClick={openDecisionMatrix}
          className="flex items-center gap-2 px-4 py-2 bg-purple-500/10 border border-purple-500/30 rounded-lg text-purple-400 hover:bg-purple-500/20 transition-colors"
        >
          <GitBranch size={18} />
          Matrice de Décision
        </button>
        <button
          onClick={() => {
            const event = new KeyboardEvent('keydown', { key: 'k', ctrlKey: true });
            window.dispatchEvent(event);
          }}
          className="flex items-center gap-2 px-4 py-2 bg-blue-500/10 border border-blue-500/30 rounded-lg text-blue-400 hover:bg-blue-500/20 transition-colors"
        >
          <HelpCircle size={18} />
          Recherche (Ctrl+K)
        </button>
      </div>

      {/* Tabs */}
      <div className="border-b border-slate-700">
        <div className="flex gap-1">
          {TABS.map((tab) => {
            const Icon = tab.icon;
            return (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={cn(
                  'flex items-center gap-2 px-4 py-3 text-sm font-medium transition-colors border-b-2 -mb-px',
                  activeTab === tab.id
                    ? 'text-purple-400 border-purple-400'
                    : 'text-slate-400 border-transparent hover:text-slate-200'
                )}
              >
                <Icon size={16} />
                {tab.label}
              </button>
            );
          })}
        </div>
      </div>

      {/* Tab content */}
      <div className="min-h-[500px]">
        {activeTab === 'strength' && <CaseStrength />}
        {activeTab === 'responses' && <ResponseGenerator />}
        {activeTab === 'talking' && <TalkingPoints />}
        {activeTab === 'emails' && <EmailTimeline />}
        {activeTab === 'shortcuts' && (
          <div className="space-y-6">
            <div className="flex items-center gap-2 mb-4">
              <Keyboard className="text-cyan-400" size={20} />
              <h3 className="text-lg font-semibold text-slate-200">Raccourcis Clavier</h3>
            </div>

            <p className="text-sm text-slate-400 mb-6">
              Utilisez ces raccourcis pour naviguer rapidement dans le War Room.
              Les raccourcis de navigation utilisent le préfixe <kbd className="px-1.5 py-0.5 bg-slate-800 rounded text-slate-300">g</kbd> suivi d'une lettre.
            </p>

            {SHORTCUT_LIST.map((category) => (
              <div key={category.category} className="bg-slate-800/50 rounded-lg border border-slate-700 overflow-hidden">
                <div className="px-4 py-3 bg-slate-800/50 border-b border-slate-700">
                  <h4 className="text-slate-200 font-medium">{category.category}</h4>
                </div>
                <div className="divide-y divide-slate-700/50">
                  {category.shortcuts.map((shortcut) => (
                    <div
                      key={shortcut.keys}
                      className="flex items-center justify-between px-4 py-3 hover:bg-slate-800/30"
                    >
                      <span className="text-slate-300">{shortcut.description}</span>
                      <kbd className="px-2 py-1 bg-slate-900 rounded text-sm font-mono text-slate-400 border border-slate-700">
                        {shortcut.keys}
                      </kbd>
                    </div>
                  ))}
                </div>
              </div>
            ))}

            <div className="bg-cyan-500/10 border border-cyan-500/30 rounded-xl p-5">
              <div className="text-cyan-400 font-semibold mb-2">Astuce</div>
              <p className="text-slate-300 text-sm">
                Appuyez sur <kbd className="px-1.5 py-0.5 bg-slate-800 rounded">?</kbd> n'importe où pour afficher l'aide des raccourcis.
                Utilisez <kbd className="px-1.5 py-0.5 bg-slate-800 rounded">Ctrl+K</kbd> ou <kbd className="px-1.5 py-0.5 bg-slate-800 rounded">/</kbd> pour la recherche globale.
              </p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default ToolsPage;
