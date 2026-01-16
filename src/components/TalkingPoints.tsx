import { memo, useState } from 'react';
import { MessageCircle, Copy, Check, ChevronDown, AlertTriangle, Shield, DollarSign, Clock, Users } from 'lucide-react';
import { cn } from '../lib/utils';

interface TalkingPoint {
  id: string;
  point: string;
  detail: string;
  source?: string;
}

interface TalkingPointCategory {
  id: string;
  name: string;
  icon: typeof MessageCircle;
  color: string;
  points: TalkingPoint[];
}

const TALKING_POINTS: TalkingPointCategory[] = [
  {
    id: 'transfer',
    name: 'Transfert illégal (Sept 2024)',
    icon: AlertTriangle,
    color: 'text-red-400',
    points: [
      {
        id: 't1',
        point: 'Email 25 sept 2024 : CC ne demandait que "super admin pour les paiements"',
        detail: 'Mayorkas a confirmé par écrit que leur accès se limitait aux méthodes de paiement. Aucune mention de transfert.',
        source: 'Email Mayorkas 25/09/2024',
      },
      {
        id: 't2',
        point: 'Le transfert du 28 sept 2024 n\'était autorisé par AUCUNE clause du contrat',
        detail: 'Le contrat accorde un accès Super Admin "to adjust payment settings to collect revenues" — point final.',
        source: 'License Agreement, Section accès',
      },
      {
        id: 't3',
        point: 'Nous avons contesté IMMÉDIATEMENT (14 et 16 octobre 2024)',
        detail: 'Deux emails documentent notre opposition claire. CC a ignoré ces contestations.',
        source: 'Emails ADN 14/10 et 16/10/2024',
      },
      {
        id: 't4',
        point: 'Si c\'était un "standard de l\'industrie", pourquoi sont-ils ENCORE super admin de notre BM ?',
        detail: 'Question rhétorique puissante : ils contrôlent NOTRE infrastructure ET ont transféré nos actifs vers la leur.',
      },
    ],
  },
  {
    id: '2fa',
    name: 'Contradiction 2FA',
    icon: Shield,
    color: 'text-amber-400',
    points: [
      {
        id: '2fa1',
        point: 'Email Meta 27 août 2025 : Cheick Camara recommande à Mayorkas d\'activer le 2FA',
        detail: 'Si le 2FA était déjà actif (comme CC l\'affirme), Meta ne recommanderait pas de l\'activer.',
        source: 'Email Meta/Camara 27/08/2025',
      },
      {
        id: '2fa2',
        point: 'Mayorkas identifié comme "le titulaire" du compte compromis',
        detail: 'Meta a accès à ses propres systèmes. C\'est LE compte CC qui était vulnérable, pas le nôtre.',
        source: 'Email Meta 27/08/2025',
      },
      {
        id: '2fa3',
        point: 'CC affirme dans sa lettre du 26 déc que "all accounts were protected by 2FA"',
        detail: 'Contradiction directe avec l\'email de Meta. L\'un des deux ment.',
        source: 'Lettre CC 26/12/2025',
      },
      {
        id: '2fa4',
        point: 'Demander à CC : "Prouvez que le 2FA était actif au moment du piratage"',
        detail: 'Ils ne peuvent pas. L\'email de Meta prouve le contraire.',
      },
    ],
  },
  {
    id: 'gmail',
    name: 'Gmail personnels (négligence)',
    icon: Users,
    color: 'text-purple-400',
    points: [
      {
        id: 'g1',
        point: 'jmayorkas2@gmail.com — compte personnel utilisé comme Super Admin',
        detail: 'Un Gmail perso pour gérer des actifs de +1M€. Non soumis aux protocoles sécurité de CC.',
        source: 'Email Meta 27/08/2025',
      },
      {
        id: 'g2',
        point: 'joelcoopercinema@gmail.com — découvert le 31 octobre 2025',
        detail: 'Un DEUXIÈME Gmail perso. Joel Cooper n\'avait jamais été mentionné avant.',
        source: 'Découverte ADN 31/10/2025',
      },
      {
        id: 'g3',
        point: 'Art. 101 CO : CC est responsable des actes de ses auxiliaires',
        detail: 'La négligence de Mayorkas et Cooper engage directement CC.',
        source: 'Code des Obligations suisse',
      },
      {
        id: 'g4',
        point: 'Question : "Quel gestionnaire d\'actifs professionnel utilise des Gmail perso ?"',
        detail: 'Argument de bon sens qui parle à tout le monde, y compris aux arbitres.',
      },
    ],
  },
  {
    id: 'inaction',
    name: 'Inaction 6 mois',
    icon: Clock,
    color: 'text-blue-400',
    points: [
      {
        id: 'i1',
        point: 'Piratage signalé fin juillet 2025 — AUCUNE action documentée de CC',
        detail: 'Nous avons demandé des comptes. Silence total pendant des mois.',
      },
      {
        id: 'i2',
        point: 'Réunion 14 nov 2025 : Ojalvo promet ses "crédits Meta" — Rien fait',
        detail: 'Promesses verbales non tenues. Documenté dans notre compte-rendu.',
        source: 'CR Réunion 14/11/2025',
      },
      {
        id: 'i3',
        point: 'RDV technique 23 déc 2025 : Annulé par CC après réception de notre lettre',
        detail: 'Ils ont annulé LA solution qu\'ils avaient eux-mêmes proposée.',
        source: 'Email annulation 23/12/2025',
      },
      {
        id: 'i4',
        point: 'Contenu porno sur Oye pendant 5+ mois — CC n\'a jamais signalé à Meta',
        detail: 'Notre image de marque détruite. CC n\'a RIEN fait pour limiter les dégâts.',
      },
    ],
  },
  {
    id: 'financial',
    name: 'Position financière',
    icon: DollarSign,
    color: 'text-emerald-400',
    points: [
      {
        id: 'f1',
        point: 'CC réclame ~142 000 € — Notre contre-créance dépasse 1 200 000 €',
        detail: 'Nous ne sommes pas leurs débiteurs. Nous sommes leurs CRÉANCIERS.',
      },
      {
        id: 'f2',
        point: 'ADN a déjà payé ~70 000 € avant de suspendre — Bonne foi démontrée',
        detail: 'Nous avons honoré nos engagements tant que le contrat fonctionnait.',
      },
      {
        id: 'f3',
        point: 'Art. 82 CO : Droit de suspendre jusqu\'à exécution par l\'autre partie',
        detail: 'Base légale solide. CC n\'a pas exécuté ses obligations de sécurité.',
        source: 'Code des Obligations suisse',
      },
      {
        id: 'f4',
        point: 'Coût arbitrage : 150-300k€ — CC n\'a pas intérêt à y aller',
        detail: 'Leur créance de 142k€ serait mangée par les frais d\'arbitrage seuls.',
      },
      {
        id: 'f5',
        point: 'Proposition séquestre 31 oct 2025 : CC a refusé immédiatement',
        detail: 'Nous voulions sécuriser les deux parties. Ils ont dit non.',
        source: 'Proposition Cristaldi 31/10/2025',
      },
    ],
  },
];

export const TalkingPoints = memo(() => {
  const [expandedCategories, setExpandedCategories] = useState<string[]>(['transfer']);
  const [copiedId, setCopiedId] = useState<string | null>(null);

  const toggleCategory = (id: string) => {
    setExpandedCategories((prev) =>
      prev.includes(id) ? prev.filter((c) => c !== id) : [...prev, id]
    );
  };

  const handleCopy = (text: string, id: string) => {
    navigator.clipboard.writeText(text);
    setCopiedId(id);
    setTimeout(() => setCopiedId(null), 2000);
  };

  return (
    <div className="space-y-4">
      <div className="flex items-center gap-2 mb-4">
        <MessageCircle className="text-cyan-400" size={20} />
        <h3 className="text-lg font-semibold text-slate-200">Talking Points</h3>
      </div>

      <p className="text-sm text-slate-400 mb-4">
        Points clés à ne jamais oublier lors de toute communication.
        Cliquez pour copier un point.
      </p>

      {TALKING_POINTS.map((category) => {
        const Icon = category.icon;
        const isExpanded = expandedCategories.includes(category.id);

        return (
          <div
            key={category.id}
            className="bg-slate-800/50 rounded-lg border border-slate-700 overflow-hidden"
          >
            <button
              onClick={() => toggleCategory(category.id)}
              className="w-full flex items-center justify-between p-4 hover:bg-slate-800/70 transition-colors"
            >
              <div className="flex items-center gap-3">
                <Icon size={20} className={category.color} />
                <span className="text-slate-200 font-medium">{category.name}</span>
                <span className="text-xs text-slate-500 bg-slate-700 px-2 py-0.5 rounded">
                  {category.points.length} points
                </span>
              </div>
              <ChevronDown
                size={20}
                className={cn(
                  'text-slate-400 transition-transform',
                  isExpanded && 'rotate-180'
                )}
              />
            </button>

            {isExpanded && (
              <div className="border-t border-slate-700 p-4 space-y-3">
                {category.points.map((point, index) => (
                  <div
                    key={point.id}
                    className="group bg-slate-900/50 rounded-lg p-4 hover:bg-slate-900/70 transition-colors cursor-pointer"
                    onClick={() => handleCopy(point.point, point.id)}
                  >
                    <div className="flex items-start justify-between gap-3">
                      <div className="flex-1">
                        <div className="flex items-center gap-2 mb-1">
                          <span className="text-xs text-slate-500 bg-slate-700 px-1.5 py-0.5 rounded">
                            #{index + 1}
                          </span>
                          {point.source && (
                            <span className="text-xs text-blue-400 bg-blue-500/10 px-2 py-0.5 rounded">
                              {point.source}
                            </span>
                          )}
                        </div>
                        <p className="text-slate-200 font-medium">{point.point}</p>
                        <p className="text-slate-400 text-sm mt-1">{point.detail}</p>
                      </div>
                      <button
                        className={cn(
                          'p-2 rounded transition-colors shrink-0',
                          copiedId === point.id
                            ? 'bg-emerald-500/20 text-emerald-400'
                            : 'bg-slate-700 text-slate-400 opacity-0 group-hover:opacity-100'
                        )}
                      >
                        {copiedId === point.id ? <Check size={16} /> : <Copy size={16} />}
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        );
      })}

      {/* Quick reminder */}
      <div className="bg-cyan-500/10 border border-cyan-500/30 rounded-xl p-5 mt-6">
        <div className="text-cyan-400 font-semibold mb-2">Règle d'or des communications</div>
        <ul className="text-slate-300 text-sm space-y-1">
          <li>• Toujours par ÉCRIT (email + recommandé AR)</li>
          <li>• JAMAIS au téléphone sans trace</li>
          <li>• TOUJOURS factuel, jamais émotionnel</li>
          <li>• CONSERVER copies datées de tout</li>
        </ul>
      </div>
    </div>
  );
});

TalkingPoints.displayName = 'TalkingPoints';
