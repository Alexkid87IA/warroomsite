import { memo, useState } from 'react';
import { GitBranch, ChevronRight, AlertTriangle, CheckCircle, Clock, X } from 'lucide-react';
import { cn } from '../lib/utils';
import { create } from 'zustand';

interface DecisionNode {
  id: string;
  condition: string;
  probability: string;
  actions: string[];
  outcome: 'positive' | 'negative' | 'neutral';
  children?: DecisionNode[];
}

interface DecisionMatrixState {
  isOpen: boolean;
  open: () => void;
  close: () => void;
}

export const useDecisionMatrixStore = create<DecisionMatrixState>((set) => ({
  isOpen: false,
  open: () => set({ isOpen: true }),
  close: () => set({ isOpen: false }),
}));

const DECISION_TREE: DecisionNode[] = [
  {
    id: 'silence',
    condition: 'CC garde le silence jusqu\'au 31 janvier',
    probability: '40%',
    outcome: 'neutral',
    actions: [
      'Email de constat du défaut',
      'Communication publique programmée',
      'Plainte pénale préparée',
    ],
    children: [
      {
        id: 'silence-exec',
        condition: 'Silence continue après constat',
        probability: '70%',
        outcome: 'positive',
        actions: [
          'Exécuter communication publique',
          'Déposer plainte pénale',
          'Préparer arbitrage',
        ],
      },
      {
        id: 'silence-react',
        condition: 'CC réagit tardivement',
        probability: '30%',
        outcome: 'neutral',
        actions: [
          'Évaluer la réaction',
          'Maintenir pression',
          'Exiger transfert actifs d\'abord',
        ],
      },
    ],
  },
  {
    id: 'aggressive',
    condition: 'CC contre-attaque agressivement',
    probability: '45%',
    outcome: 'neutral',
    actions: [
      'NE PAS répondre aux provocations',
      'Documenter tout',
      'Maintenir nos positions',
    ],
    children: [
      {
        id: 'aggressive-legal',
        condition: 'CC menace procédure juridique',
        probability: '60%',
        outcome: 'neutral',
        actions: [
          'Rappeler notre contre-créance +1,2M€',
          'Invoquer Art. 82 CO',
          'Coût arbitrage les dissuade',
        ],
      },
      {
        id: 'aggressive-arbitrage',
        condition: 'CC lance arbitrage ICC',
        probability: '40%',
        outcome: 'neutral',
        actions: [
          'Contre-créance immédiate',
          'Exception d\'inexécution',
          'Dossier complet avec tous les leviers',
        ],
      },
    ],
  },
  {
    id: 'negotiate',
    condition: 'CC propose une négociation',
    probability: '15%',
    outcome: 'positive',
    actions: [
      'Écouter MAIS tout par écrit',
      'Exiger transfert Buzzly/VoyagerLoin AVANT tout',
      'Conditions minimales non négociables',
    ],
    children: [
      {
        id: 'negotiate-serious',
        condition: 'Proposition sérieuse',
        probability: '30%',
        outcome: 'positive',
        actions: [
          'Annulation dette minimum',
          'Compensation préjudice',
          'Quitus mutuel',
        ],
      },
      {
        id: 'negotiate-bluff',
        condition: 'Proposition insuffisante / bluff',
        probability: '70%',
        outcome: 'negative',
        actions: [
          'Refuser poliment',
          'Réitérer nos conditions',
          'Continuer exécution si délai passé',
        ],
      },
    ],
  },
  {
    id: 'documents',
    condition: 'CC fournit les documents demandés',
    probability: '5%',
    outcome: 'positive',
    actions: [
      'Analyser minutieusement',
      'Vérifier cohérence',
      'Maintenir demande réparation',
    ],
  },
  {
    id: 'accept',
    condition: 'CC accepte nos conditions minimales',
    probability: '5%',
    outcome: 'positive',
    actions: [
      'Accord écrit formel',
      'Vérifier exécution complète',
      'Quitus APRÈS réception fonds et actifs',
    ],
  },
];

const outcomeColors = {
  positive: 'border-emerald-500/30 bg-emerald-500/10',
  negative: 'border-red-500/30 bg-red-500/10',
  neutral: 'border-amber-500/30 bg-amber-500/10',
};

const outcomeIcons = {
  positive: CheckCircle,
  negative: AlertTriangle,
  neutral: Clock,
};

const DecisionNodeCard = memo<{ node: DecisionNode; depth?: number }>(
  ({ node, depth = 0 }) => {
    const [isExpanded, setIsExpanded] = useState(depth === 0);
    const Icon = outcomeIcons[node.outcome];

    return (
      <div className={cn('relative', depth > 0 && 'ml-8 mt-3')}>
        {depth > 0 && (
          <div className="absolute left-[-20px] top-0 h-full w-px bg-slate-700" />
        )}

        <div
          className={cn(
            'rounded-lg border p-4 cursor-pointer transition-all',
            outcomeColors[node.outcome],
            isExpanded && 'ring-1 ring-white/10'
          )}
          onClick={() => setIsExpanded(!isExpanded)}
        >
          <div className="flex items-start gap-3">
            <Icon
              size={20}
              className={cn(
                node.outcome === 'positive' && 'text-emerald-400',
                node.outcome === 'negative' && 'text-red-400',
                node.outcome === 'neutral' && 'text-amber-400'
              )}
            />

            <div className="flex-1">
              <div className="flex items-center gap-2 mb-1">
                <span className="text-slate-200 font-medium">{node.condition}</span>
                <span
                  className={cn(
                    'text-xs px-2 py-0.5 rounded',
                    node.outcome === 'positive' && 'bg-emerald-500/20 text-emerald-400',
                    node.outcome === 'negative' && 'bg-red-500/20 text-red-400',
                    node.outcome === 'neutral' && 'bg-amber-500/20 text-amber-400'
                  )}
                >
                  {node.probability}
                </span>
              </div>

              {isExpanded && (
                <div className="mt-3 space-y-2">
                  <div className="text-sm text-slate-400 font-medium">Actions:</div>
                  <ul className="space-y-1">
                    {node.actions.map((action, i) => (
                      <li key={i} className="flex items-start gap-2 text-sm text-slate-300">
                        <ChevronRight size={14} className="mt-0.5 text-slate-500" />
                        {action}
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </div>

            {node.children && (
              <ChevronRight
                size={20}
                className={cn(
                  'text-slate-400 transition-transform',
                  isExpanded && 'rotate-90'
                )}
              />
            )}
          </div>
        </div>

        {isExpanded && node.children && (
          <div className="relative">
            {node.children.map((child) => (
              <DecisionNodeCard key={child.id} node={child} depth={depth + 1} />
            ))}
          </div>
        )}
      </div>
    );
  }
);

DecisionNodeCard.displayName = 'DecisionNodeCard';

export const DecisionMatrix = memo(() => {
  const { isOpen, close } = useDecisionMatrixStore();

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      {/* Backdrop */}
      <div className="absolute inset-0 bg-black/60 backdrop-blur-sm" onClick={close} />

      {/* Modal */}
      <div className="relative w-full max-w-4xl bg-slate-900 border border-slate-700 rounded-xl shadow-2xl overflow-hidden max-h-[90vh] overflow-y-auto">
        {/* Header */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-slate-700 bg-slate-800/50 sticky top-0 z-10">
          <div className="flex items-center gap-3">
            <GitBranch className="text-purple-400" size={24} />
            <h2 className="text-xl font-semibold text-slate-200">Matrice de Décision</h2>
          </div>
          <button onClick={close} className="p-2 text-slate-400 hover:text-slate-200">
            <X size={20} />
          </button>
        </div>

        {/* Legend */}
        <div className="px-6 py-3 border-b border-slate-700 flex items-center gap-6 text-sm">
          <div className="flex items-center gap-2">
            <div className="w-3 h-3 rounded bg-emerald-500/30 border border-emerald-500/50" />
            <span className="text-slate-400">Favorable</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-3 h-3 rounded bg-amber-500/30 border border-amber-500/50" />
            <span className="text-slate-400">Neutre</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-3 h-3 rounded bg-red-500/30 border border-red-500/50" />
            <span className="text-slate-400">Défavorable</span>
          </div>
        </div>

        {/* Content */}
        <div className="p-6 space-y-4">
          <div className="text-sm text-slate-400 mb-4">
            Cliquez sur un scénario pour voir les actions recommandées et les sous-scénarios.
          </div>

          {DECISION_TREE.map((node) => (
            <DecisionNodeCard key={node.id} node={node} />
          ))}
        </div>

        {/* Footer */}
        <div className="px-6 py-4 border-t border-slate-700 bg-slate-800/50">
          <div className="text-sm text-slate-400">
            <strong className="text-slate-200">Règle d'or:</strong> On a dit ce qu'on allait faire.
            Maintenant on le fait. Pas de bluff. Chaque jour sans réponse de CC = preuve supplémentaire de mauvaise foi.
          </div>
        </div>
      </div>
    </div>
  );
});

DecisionMatrix.displayName = 'DecisionMatrix';
