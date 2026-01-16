import { memo } from 'react';
import { Shield, AlertTriangle, CheckCircle, TrendingUp, FileText } from 'lucide-react';
import { cn } from '../lib/utils';

interface ArgumentStrength {
  id: string;
  title: string;
  strength: number; // 0-100
  evidence: string[];
  category: 'offensive' | 'defensive' | 'procedural';
}

const ARGUMENTS: ArgumentStrength[] = [
  // Offensive arguments
  {
    id: 'transfer-illegal',
    title: 'Transfert illégal du 28 sept 2024',
    strength: 95,
    evidence: [
      'Email 25 sept 2024 - Mayorkas confirme accès limité aux paiements',
      'Email 14 oct 2024 - Contestation immédiate',
      'Email 16 oct 2024 - Constat transfert vers BM de CC',
      'Contrat ne mentionne aucun transfert',
    ],
    category: 'offensive',
  },
  {
    id: '2fa-contradiction',
    title: 'Contradiction 2FA',
    strength: 90,
    evidence: [
      'Email Meta 27 août 2025 - Recommande 2FA à Mayorkas',
      'CC affirme 2FA actif dans lettre 26 déc',
      'Si 2FA actif, Meta ne recommanderait pas de l\'activer',
      'Mayorkas identifié comme "titulaire du compte"',
    ],
    category: 'offensive',
  },
  {
    id: 'gmail-perso',
    title: 'Gmail personnels (négligence)',
    strength: 85,
    evidence: [
      'jmayorkas2@gmail.com - Super Admin',
      'joelcoopercinema@gmail.com - Contact Meta',
      'Actifs >1M€ gérés via Gmail perso',
      'Non soumis aux protocoles sécurité CC',
    ],
    category: 'offensive',
  },
  {
    id: 'inaction-6months',
    title: '6 mois d\'inaction documentée',
    strength: 88,
    evidence: [
      'Piratage juillet 2025 - Aucune action CC',
      'Réunion 14 nov - Promesses non tenues',
      'RDV 23 déc annulé par CC',
      'Contenu porno non signalé à Meta',
    ],
    category: 'offensive',
  },
  {
    id: 'oye-only-hacked',
    title: 'Oye seule page piratée du portefeuille',
    strength: 75,
    evidence: [
      'Déclaration Mayorkas réunion 14 nov',
      'Question: pourquoi cette page uniquement?',
      'Suggère faille spécifique, pas générique',
    ],
    category: 'offensive',
  },
  // Defensive arguments
  {
    id: 'art82-co',
    title: 'Art. 82 CO - Exception d\'inexécution',
    strength: 92,
    evidence: [
      'CC n\'a pas exécuté ses obligations (sécurité)',
      'Piratage sous leur garde exclusive',
      'Droit de suspendre paiements jusqu\'à réparation',
      'Base légale solide en droit suisse',
    ],
    category: 'defensive',
  },
  {
    id: 'art100-co',
    title: 'Art. 100 CO - Nullité clause limitation',
    strength: 80,
    evidence: [
      'Faute grave = clause 9.2 inapplicable',
      'Gmail perso + absence 2FA = faute grave',
      'Limitation 150k€ potentiellement nulle',
    ],
    category: 'defensive',
  },
  {
    id: 'clause-4.3e',
    title: 'Clause 4.3(e)(ii) - Exception pénalités',
    strength: 85,
    evidence: [
      '"Through no fault of Licensor"',
      '"Could not have been prevented"',
      'Piratage sous contrôle CC, pas ADN',
      'ADN n\'avait aucun accès sécurité',
    ],
    category: 'defensive',
  },
  {
    id: 'art2-cc',
    title: 'Art. 2 CC - Abus de droit',
    strength: 78,
    evidence: [
      'Invoquer clauses 6/7 après avoir causé le dommage',
      'CC silence sur ce point dans lettre 26 déc',
      'Comportement contradictoire documenté',
    ],
    category: 'defensive',
  },
  // Procedural
  {
    id: 'counterclaim',
    title: 'Contre-créance +1,2M€',
    strength: 82,
    evidence: [
      '500k€ création Oye (31 mois)',
      'Revenus perdus depuis juillet 2025',
      'Atteinte image (porno 5+ mois)',
      'Perte marchés US/hispanophone',
    ],
    category: 'procedural',
  },
  {
    id: 'good-faith',
    title: 'Bonne foi ADN documentée',
    strength: 90,
    evidence: [
      '70k€ déjà payés',
      'Proposition règlement oct 2024 refusée par CC',
      'Proposition séquestre oct 2025 refusée par CC',
      'Tentatives dialogue multiples',
    ],
    category: 'procedural',
  },
];

const categoryLabels = {
  offensive: 'Arguments offensifs',
  defensive: 'Arguments défensifs',
  procedural: 'Position procédurale',
};

const categoryColors = {
  offensive: 'text-red-400',
  defensive: 'text-blue-400',
  procedural: 'text-purple-400',
};

const getStrengthColor = (strength: number) => {
  if (strength >= 85) return 'bg-emerald-500';
  if (strength >= 70) return 'bg-amber-500';
  return 'bg-red-500';
};

const getStrengthLabel = (strength: number) => {
  if (strength >= 90) return 'Très fort';
  if (strength >= 80) return 'Fort';
  if (strength >= 70) return 'Bon';
  return 'À renforcer';
};

export const CaseStrength = memo(() => {
  const overallStrength = Math.round(
    ARGUMENTS.reduce((sum, arg) => sum + arg.strength, 0) / ARGUMENTS.length
  );

  const grouped = ARGUMENTS.reduce((acc, arg) => {
    if (!acc[arg.category]) acc[arg.category] = [];
    acc[arg.category].push(arg);
    return acc;
  }, {} as Record<string, ArgumentStrength[]>);

  return (
    <div className="space-y-6">
      {/* Overall score */}
      <div className="bg-slate-800/50 rounded-xl p-6 border border-slate-700">
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center gap-3">
            <Shield className="text-emerald-400" size={24} />
            <h3 className="text-lg font-semibold text-slate-200">Force du Dossier</h3>
          </div>
          <div className="text-right">
            <div className="text-3xl font-bold text-emerald-400">{overallStrength}%</div>
            <div className="text-sm text-slate-400">{getStrengthLabel(overallStrength)}</div>
          </div>
        </div>

        <div className="h-3 bg-slate-700 rounded-full overflow-hidden">
          <div
            className={cn('h-full transition-all duration-500', getStrengthColor(overallStrength))}
            style={{ width: `${overallStrength}%` }}
          />
        </div>

        <div className="mt-4 grid grid-cols-3 gap-4 text-center">
          {(['offensive', 'defensive', 'procedural'] as const).map((cat) => {
            const catArgs = grouped[cat] || [];
            const catStrength = catArgs.length
              ? Math.round(catArgs.reduce((s, a) => s + a.strength, 0) / catArgs.length)
              : 0;
            return (
              <div key={cat} className="bg-slate-700/30 rounded-lg p-3">
                <div className={cn('text-sm font-medium', categoryColors[cat])}>
                  {categoryLabels[cat]}
                </div>
                <div className="text-xl font-bold text-slate-200">{catStrength}%</div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Arguments by category */}
      {(['offensive', 'defensive', 'procedural'] as const).map((category) => (
        <div key={category} className="space-y-3">
          <h4 className={cn('font-semibold flex items-center gap-2', categoryColors[category])}>
            {category === 'offensive' && <AlertTriangle size={18} />}
            {category === 'defensive' && <Shield size={18} />}
            {category === 'procedural' && <FileText size={18} />}
            {categoryLabels[category]}
          </h4>

          {(grouped[category] || []).map((arg) => (
            <div
              key={arg.id}
              className="bg-slate-800/30 rounded-lg p-4 border border-slate-700/50"
            >
              <div className="flex items-center justify-between mb-2">
                <span className="text-slate-200 font-medium">{arg.title}</span>
                <div className="flex items-center gap-2">
                  <div className="w-24 h-2 bg-slate-700 rounded-full overflow-hidden">
                    <div
                      className={cn('h-full', getStrengthColor(arg.strength))}
                      style={{ width: `${arg.strength}%` }}
                    />
                  </div>
                  <span className="text-sm text-slate-400 w-12 text-right">{arg.strength}%</span>
                </div>
              </div>

              <div className="mt-2 space-y-1">
                {arg.evidence.map((ev, i) => (
                  <div key={i} className="flex items-start gap-2 text-sm text-slate-400">
                    <CheckCircle size={12} className="mt-1 text-emerald-500 shrink-0" />
                    {ev}
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      ))}

      {/* Summary */}
      <div className="bg-emerald-500/10 border border-emerald-500/30 rounded-xl p-5">
        <div className="flex items-center gap-2 mb-3">
          <TrendingUp className="text-emerald-400" size={20} />
          <span className="text-emerald-400 font-semibold">Conclusion</span>
        </div>
        <p className="text-slate-300 text-sm">
          Le dossier ADN est solide avec un score global de {overallStrength}%. Les arguments
          les plus forts concernent le transfert illégal, la contradiction 2FA, et l'exception
          d'inexécution (Art. 82 CO). La position de CC est fragilisée par leurs propres
          contradictions documentées.
        </p>
      </div>
    </div>
  );
});

CaseStrength.displayName = 'CaseStrength';
