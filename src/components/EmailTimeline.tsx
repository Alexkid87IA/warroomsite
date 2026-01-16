import { memo, useState } from 'react';
import { Mail, Send, Inbox, ChevronRight, Filter, Calendar } from 'lucide-react';
import { cn } from '../lib/utils';

type EmailDirection = 'sent' | 'received';
type EmailImportance = 'critical' | 'important' | 'standard';

interface EmailEntry {
  id: string;
  date: string;
  from: string;
  to: string;
  subject: string;
  summary: string;
  direction: EmailDirection;
  importance: EmailImportance;
  keyPoints?: string[];
  path?: string;
}

const EMAILS: EmailEntry[] = [
  // 2024
  {
    id: 'e1',
    date: '25 sept 2024',
    from: 'Jonathan Mayorkas (CC)',
    to: 'ADN Production',
    subject: 'Accès Super Admin',
    summary: 'Mayorkas confirme que l\'accès Super Admin est limité aux "méthodes de paiement"',
    direction: 'received',
    importance: 'critical',
    keyPoints: [
      'Définit clairement le périmètre de l\'accès',
      'Aucune mention de transfert de pages',
      'Base de notre argument sur le dépassement de mandat',
    ],
  },
  {
    id: 'e2',
    date: '14 oct 2024',
    from: 'Alexandre Quilghini (ADN)',
    to: 'Copyright Capital',
    subject: 'Contestation retrait accès',
    summary: 'Première contestation : perte d\'accès au Business Manager non conforme au contrat',
    direction: 'sent',
    importance: 'critical',
    keyPoints: [
      'Contestation immédiate documentée',
      '"Il n\'a jamais été convenu que je perdrais mes accès"',
      'Preuve de notre opposition dès le début',
    ],
  },
  {
    id: 'e3',
    date: '16 oct 2024',
    from: 'Alexandre Quilghini (ADN)',
    to: 'Copyright Capital',
    subject: 'Contestation transfert pages',
    summary: 'Deuxième contestation : pages transférées vers le BM de CC sans accord',
    direction: 'sent',
    importance: 'critical',
    keyPoints: [
      '"Vous avez retiré mes pages de mon BM et les avez transférées dans le vôtre"',
      'Sans notification préalable',
      'Preuve du transfert non consenti',
    ],
  },
  {
    id: 'e4',
    date: '17 oct 2024',
    from: 'Jack Ojalvo (CC)',
    to: 'ADN Production',
    subject: 'Réponse aux contestations',
    summary: 'Ojalvo menace : serait "ravi" de récupérer les actifs si non-respect des obligations',
    direction: 'received',
    importance: 'important',
    keyPoints: [
      'Ton menaçant documenté',
      'Explique pourquoi ADN a continué à collaborer',
      'Pression exercée sur ADN',
    ],
  },
  // 2025
  {
    id: 'e5',
    date: '27 août 2025',
    from: 'Cheick Camara (Meta)',
    to: 'Jonathan Mayorkas',
    subject: 'Recommandation sécurité 2FA',
    summary: 'Meta recommande à Mayorkas d\'activer la double authentification',
    direction: 'received',
    importance: 'critical',
    keyPoints: [
      'Mayorkas identifié comme "titulaire du compte"',
      'Prouve que 2FA n\'était PAS actif',
      'Contredit les affirmations de CC',
      'Faille sur compte CC, pas ADN',
    ],
  },
  {
    id: 'e6',
    date: '31 oct 2025',
    from: 'Jérôme Cristaldi (ADN)',
    to: 'Jack Ojalvo (CC)',
    subject: 'Proposition compte séquestre',
    summary: 'ADN propose un séquestre pour sécuriser les intérêts des deux parties',
    direction: 'sent',
    importance: 'important',
    keyPoints: [
      'Solution équitable proposée',
      'Refusée immédiatement par CC',
      'Preuve de bonne foi ADN',
    ],
  },
  {
    id: 'e7',
    date: '14 nov 2025',
    from: 'ADN Production',
    to: 'Copyright Capital',
    subject: 'Compte-rendu réunion visio',
    summary: 'CR de la réunion avec demandes formelles de documents et explications',
    direction: 'sent',
    importance: 'important',
    keyPoints: [
      'Demandes documentées depuis cette date',
      'CC avait 2 mois pour répondre',
      'Rien fourni',
    ],
  },
  // 2025-2026
  {
    id: 'e8',
    date: '19 déc 2025',
    from: 'ADN Production',
    to: 'Copyright Capital',
    subject: 'Mise en demeure initiale',
    summary: 'Première mise en demeure formelle avec Art. 82 CO invoqué',
    direction: 'sent',
    importance: 'critical',
    keyPoints: [
      'Exception d\'inexécution invoquée',
      'Demandes précises avec délais',
      'Position juridique formalisée',
    ],
  },
  {
    id: 'e9',
    date: '26 déc 2025',
    from: 'Emre Kumet (CC)',
    to: 'ADN Production',
    subject: 'Réponse à mise en demeure',
    summary: 'CC rejette tout sans fournir de preuves, affirme que 2FA était actif',
    direction: 'received',
    importance: 'critical',
    keyPoints: [
      'Aucune réponse aux questions de fond',
      'Affirme 2FA actif (contredit par Meta)',
      'Ignore Art. 2 CC (abus de droit)',
    ],
  },
  {
    id: 'e10',
    date: '12 jan 2026',
    from: 'Martin Febvre (CC)',
    to: 'ADN Production',
    subject: 'Demande de paiement',
    summary: 'CC demande paiement 6 000€ + relevés, ignorant totalement l\'Art. 82 CO',
    direction: 'received',
    importance: 'important',
    keyPoints: [
      'Nouvelle personne apparaît (comptabilité)',
      'Ignore notre position juridique',
      'Preuve de mauvaise foi continue',
    ],
  },
  {
    id: 'e11',
    date: '16 jan 2026',
    from: 'ADN Production',
    to: 'Copyright Capital',
    subject: 'Lettre offensive - Contre-créance',
    summary: 'Mise en demeure complète avec contre-créance +1,2M€ et délais 15j/30j',
    direction: 'sent',
    importance: 'critical',
    keyPoints: [
      'Contre-créance formellement notifiée',
      'Délai 15j : documents + transfert actifs',
      'Délai 30j : position sur réparation',
      'Conséquences annoncées si non-réponse',
    ],
  },
];

const importanceColors = {
  critical: 'border-red-500/30 bg-red-500/5',
  important: 'border-amber-500/30 bg-amber-500/5',
  standard: 'border-slate-700 bg-slate-800/30',
};

const importanceBadgeColors = {
  critical: 'bg-red-500/20 text-red-400',
  important: 'bg-amber-500/20 text-amber-400',
  standard: 'bg-slate-700 text-slate-400',
};

export const EmailTimeline = memo(() => {
  const [filter, setFilter] = useState<'all' | 'sent' | 'received'>('all');
  const [importanceFilter, setImportanceFilter] = useState<'all' | EmailImportance>('all');
  const [expandedId, setExpandedId] = useState<string | null>(null);

  const filteredEmails = EMAILS.filter((email) => {
    if (filter !== 'all' && email.direction !== filter) return false;
    if (importanceFilter !== 'all' && email.importance !== importanceFilter) return false;
    return true;
  });

  return (
    <div className="space-y-4">
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center gap-2">
          <Mail className="text-blue-400" size={20} />
          <h3 className="text-lg font-semibold text-slate-200">Historique des Échanges</h3>
        </div>
        <span className="text-sm text-slate-400">{filteredEmails.length} emails</span>
      </div>

      {/* Filters */}
      <div className="flex flex-wrap gap-2 mb-4">
        <div className="flex items-center gap-1 bg-slate-800/50 rounded-lg p-1">
          <Filter size={14} className="text-slate-400 ml-2" />
          {(['all', 'sent', 'received'] as const).map((f) => (
            <button
              key={f}
              onClick={() => setFilter(f)}
              className={cn(
                'px-3 py-1.5 text-sm rounded transition-colors',
                filter === f
                  ? 'bg-blue-500/20 text-blue-400'
                  : 'text-slate-400 hover:text-slate-200'
              )}
            >
              {f === 'all' ? 'Tous' : f === 'sent' ? 'Envoyés' : 'Reçus'}
            </button>
          ))}
        </div>

        <div className="flex items-center gap-1 bg-slate-800/50 rounded-lg p-1">
          {(['all', 'critical', 'important', 'standard'] as const).map((f) => (
            <button
              key={f}
              onClick={() => setImportanceFilter(f)}
              className={cn(
                'px-3 py-1.5 text-sm rounded transition-colors',
                importanceFilter === f
                  ? f === 'critical'
                    ? 'bg-red-500/20 text-red-400'
                    : f === 'important'
                    ? 'bg-amber-500/20 text-amber-400'
                    : 'bg-blue-500/20 text-blue-400'
                  : 'text-slate-400 hover:text-slate-200'
              )}
            >
              {f === 'all' ? 'Tous' : f === 'critical' ? 'Critiques' : f === 'important' ? 'Importants' : 'Standard'}
            </button>
          ))}
        </div>
      </div>

      {/* Timeline */}
      <div className="relative">
        {/* Vertical line */}
        <div className="absolute left-[19px] top-0 bottom-0 w-px bg-slate-700" />

        <div className="space-y-3">
          {filteredEmails.map((email) => (
            <div key={email.id} className="relative pl-12">
              {/* Timeline dot */}
              <div
                className={cn(
                  'absolute left-0 top-4 w-10 h-10 rounded-full flex items-center justify-center',
                  email.direction === 'sent'
                    ? 'bg-emerald-500/20 text-emerald-400'
                    : 'bg-blue-500/20 text-blue-400'
                )}
              >
                {email.direction === 'sent' ? <Send size={18} /> : <Inbox size={18} />}
              </div>

              {/* Email card */}
              <div
                className={cn(
                  'rounded-lg border p-4 cursor-pointer transition-all',
                  importanceColors[email.importance],
                  expandedId === email.id && 'ring-1 ring-white/10'
                )}
                onClick={() => setExpandedId(expandedId === email.id ? null : email.id)}
              >
                <div className="flex items-start justify-between gap-3">
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-2 mb-1 flex-wrap">
                      <span className="flex items-center gap-1 text-xs text-slate-400">
                        <Calendar size={12} />
                        {email.date}
                      </span>
                      <span
                        className={cn(
                          'text-xs px-2 py-0.5 rounded',
                          importanceBadgeColors[email.importance]
                        )}
                      >
                        {email.importance === 'critical'
                          ? 'Critique'
                          : email.importance === 'important'
                          ? 'Important'
                          : 'Standard'}
                      </span>
                      <span
                        className={cn(
                          'text-xs px-2 py-0.5 rounded',
                          email.direction === 'sent'
                            ? 'bg-emerald-500/20 text-emerald-400'
                            : 'bg-blue-500/20 text-blue-400'
                        )}
                      >
                        {email.direction === 'sent' ? 'Envoyé' : 'Reçu'}
                      </span>
                    </div>

                    <div className="text-sm text-slate-400 mb-1">
                      <span className="text-slate-500">De:</span> {email.from}
                    </div>

                    <div className="text-slate-200 font-medium">{email.subject}</div>
                    <div className="text-slate-400 text-sm mt-1">{email.summary}</div>
                  </div>

                  <ChevronRight
                    size={20}
                    className={cn(
                      'text-slate-400 transition-transform shrink-0',
                      expandedId === email.id && 'rotate-90'
                    )}
                  />
                </div>

                {expandedId === email.id && email.keyPoints && (
                  <div className="mt-4 pt-4 border-t border-slate-700/50">
                    <div className="text-sm text-slate-400 font-medium mb-2">Points clés:</div>
                    <ul className="space-y-1">
                      {email.keyPoints.map((point, i) => (
                        <li key={i} className="flex items-start gap-2 text-sm text-slate-300">
                          <ChevronRight size={14} className="mt-0.5 text-slate-500 shrink-0" />
                          {point}
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
});

EmailTimeline.displayName = 'EmailTimeline';
