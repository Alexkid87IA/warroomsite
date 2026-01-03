import { DATA } from '../data';
import { Badge } from './Badge';
import { Card } from './Card';
import { StatCard } from './StatCard';

export const DashboardSection = () => (
  <div className="space-y-6">
    <div className="bg-gradient-to-r from-red-900/30 via-red-800/20 to-transparent border border-red-500/30 rounded-xl p-5">
      <div className="flex items-start gap-4">
        <div className="w-12 h-12 bg-red-500/20 rounded-lg flex items-center justify-center text-2xl">⚠️</div>
        <div className="flex-1">
          <div className="text-red-300 font-semibold text-lg">SITUATION ACTUELLE — 29 décembre 2025</div>
          <div className="text-slate-300 mt-2">{DATA.summary.situation}</div>
          <div className="mt-3 flex flex-wrap gap-2">
            <Badge type="critical">Délai actifs EXPIRÉ</Badge>
            <Badge type="pending">Attente réponse 13 janvier</Badge>
            <Badge type="invoked">Art. 82 CO invoqué</Badge>
          </div>
        </div>
      </div>
    </div>

    <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
      <StatCard label="Dette restante (selon CC)" value="142 000 €" type="danger" />
      <StatCard label="Contre-créance ADN" value="1 - 1,3 M€" type="success" />
      <StatCard label="Déjà payé par ADN" value="~70 000 €" sublabel="Bonne foi démontrée" type="info" />
      <StatCard label="Mois d'inaction CC" value="4+" sublabel="Depuis 8 sept 2025" type="warning" />
    </div>

    <Card title="📅 Prochaines étapes" accent="blue">
      <div className="space-y-3">
        {[
          { date: "29 DÉC", action: "Délai actifs EXPIRÉ", instruction: "NE RIEN FAIRE (silence stratégique)", status: "now" },
          { date: "2 JAN", action: "Leur délai de paiement expire", instruction: "NE RIEN FAIRE", status: "upcoming" },
          { date: "13 JAN", action: "Délai réponse complète EXPIRE", instruction: "Observer", status: "upcoming" },
          { date: "14-15 JAN", action: "Si silence CC", instruction: "Lettre de constat + escalade", status: "upcoming" },
          { date: "Fin JAN", action: "Si toujours rien", instruction: "Plainte pénale (levier)", status: "upcoming" }
        ].map((item, i) => (
          <div key={i} className={`flex items-center gap-4 p-3 rounded-lg ${
            item.status === 'now' ? 'bg-cyan-500/10 border border-cyan-500/30' : 'bg-slate-800/30'
          }`}>
            <div className="w-20 text-xs font-mono text-slate-400">{item.date}</div>
            <div className="flex-1">
              <div className="text-slate-200 font-medium">{item.action}</div>
              <div className="text-slate-400 text-sm">{item.instruction}</div>
            </div>
            <Badge type={item.status}>{item.status === 'now' ? 'MAINTENANT' : 'À venir'}</Badge>
          </div>
        ))}
      </div>
    </Card>

    <Card title="⚔️ Règles d'or" accent="amber">
      <div className="grid md:grid-cols-2 gap-3">
        {DATA.goldenRules.map((item, i) => (
          <div key={i} className="flex items-start gap-3 p-3 bg-slate-800/30 rounded-lg">
            <div className="w-6 h-6 bg-amber-500/20 rounded flex items-center justify-center text-amber-400 text-xs font-bold">{i + 1}</div>
            <div>
              <div className="text-slate-200 font-medium">{item.rule}</div>
              <div className="text-slate-400 text-sm">{item.detail}</div>
            </div>
          </div>
        ))}
      </div>
    </Card>
  </div>
);

export const PartiesSection = () => (
  <div className="space-y-6">
    <div className="grid md:grid-cols-2 gap-6">
      <Card title="🔵 ADN Production SAS" accent="blue">
        <div className="space-y-4">
          <div className="text-sm text-slate-400">
            <div>{DATA.parties.adn.type}</div>
            <div>SIREN: {DATA.parties.adn.siren}</div>
            <div>{DATA.parties.adn.address}</div>
          </div>
          <div className="border-t border-slate-700/50 pt-4">
            <div className="text-xs text-slate-500 uppercase tracking-wider mb-2">Équipe</div>
            {DATA.parties.adn.team.map((p, i) => (
              <div key={i} className={`flex items-center justify-between py-2 ${p.key ? 'text-slate-100' : 'text-slate-400'}`}>
                <div>
                  <span className="font-medium">{p.name}</span>
                  {p.alias && <span className="text-slate-500 ml-1">({p.alias})</span>}
                </div>
                <div className="text-sm text-slate-500">{p.role}</div>
              </div>
            ))}
          </div>
        </div>
      </Card>

      <Card title="🔴 Copyright Capital SA" accent="red">
        <div className="space-y-4">
          <div className="text-sm text-slate-400">
            <div>{DATA.parties.cc.type}</div>
            <div>N°: {DATA.parties.cc.registration}</div>
            <div>{DATA.parties.cc.address}</div>
          </div>
          <div className="border-t border-slate-700/50 pt-4">
            <div className="text-xs text-slate-500 uppercase tracking-wider mb-2">Équipe</div>
            {DATA.parties.cc.team.map((p, i) => (
              <div key={i} className="py-2">
                <div className={`flex items-center justify-between ${p.key ? 'text-slate-100' : 'text-slate-400'}`}>
                  <span className="font-medium">{p.name}</span>
                  <span className="text-sm text-slate-500">{p.role}</span>
                </div>
                {p.note && <div className="text-xs text-amber-400 mt-1">⚠️ {p.note}</div>}
              </div>
            ))}
          </div>
        </div>
      </Card>
    </div>
  </div>
);

export const ContractsSection = () => (
  <div className="space-y-6">
    <Card title="📄 Documents contractuels" accent="slate">
      <div className="space-y-3">
        {DATA.contracts.documents.map((doc, i) => (
          <div key={i} className="flex items-center justify-between p-3 bg-slate-800/30 rounded-lg">
            <div>
              <div className="font-medium text-slate-200">{doc.name}</div>
              <div className="text-sm text-slate-400">{doc.key}</div>
            </div>
            <div className="text-sm text-slate-500">{doc.date}</div>
          </div>
        ))}
      </div>
    </Card>

    <Card title="💰 Structure financière" accent="amber">
      <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
        <div className="p-3 bg-slate-800/30 rounded-lg">
          <div className="text-xs text-slate-500 uppercase">Avance reçue</div>
          <div className="text-xl font-bold text-emerald-400">{DATA.contracts.finances.advanceReceived.toLocaleString()} €</div>
        </div>
        <div className="p-3 bg-slate-800/30 rounded-lg">
          <div className="text-xs text-slate-500 uppercase">À rembourser</div>
          <div className="text-xl font-bold text-red-400">{DATA.contracts.finances.toRepay.toLocaleString()} €</div>
        </div>
        <div className="p-3 bg-slate-800/30 rounded-lg">
          <div className="text-xs text-slate-500 uppercase">Déjà payé</div>
          <div className="text-xl font-bold text-blue-400">~{DATA.contracts.finances.alreadyPaid.toLocaleString()} €</div>
        </div>
        <div className="p-3 bg-slate-800/30 rounded-lg">
          <div className="text-xs text-slate-500 uppercase">Reste dû</div>
          <div className="text-xl font-bold text-amber-400">{DATA.contracts.finances.remainingDebt.toLocaleString()} €</div>
        </div>
        <div className="p-3 bg-slate-800/30 rounded-lg">
          <div className="text-xs text-slate-500 uppercase">Revenue Share</div>
          <div className="text-xl font-bold text-slate-300">{DATA.contracts.finances.revenueShare}%</div>
        </div>
        <div className="p-3 bg-slate-800/30 rounded-lg">
          <div className="text-xs text-slate-500 uppercase">Minimum mensuel</div>
          <div className="text-xl font-bold text-slate-300">{DATA.contracts.finances.minimumMonthly.toLocaleString()} €</div>
        </div>
      </div>
    </Card>

    <Card title="⚠️ Clauses critiques" accent="red">
      <div className="space-y-3">
        {DATA.contracts.clauses.map((clause, i) => (
          <div key={i} className={`p-4 rounded-lg border ${
            clause.danger === 'critical' ? 'bg-red-900/20 border-red-500/30' :
            clause.danger === 'leverage' ? 'bg-emerald-900/20 border-emerald-500/30' :
            'bg-slate-800/30 border-slate-700/30'
          }`}>
            <div className="flex items-center justify-between mb-2">
              <div className="font-semibold text-slate-100">Clause {clause.id} — {clause.name}</div>
              <Badge type={clause.danger}>{clause.danger === 'critical' ? 'CRITIQUE' : clause.danger === 'leverage' ? 'LEVIER ADN' : 'MOYEN'}</Badge>
            </div>
            <div className="text-sm text-slate-400">{clause.desc}</div>
            <div className="text-sm text-slate-300 mt-1">→ {clause.impact}</div>
          </div>
        ))}
      </div>
    </Card>
  </div>
);

export const AssetsSection = () => (
  <div className="space-y-6">
    <Card title="📊 Page Oye — PERDUE" accent="red" pulse={true}>
      <div className="grid md:grid-cols-2 gap-6">
        <div className="space-y-4">
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 bg-red-500/20 rounded-lg flex items-center justify-center text-2xl">📱</div>
            <div>
              <div className="text-xl font-bold text-red-300">{DATA.assets.oye.name}</div>
              <div className="text-slate-400">{DATA.assets.oye.platform}</div>
            </div>
          </div>
          <div className="p-3 bg-slate-800/30 rounded-lg">
            <div className="text-slate-500 text-sm mb-1">Audience</div>
            <div className="text-slate-200">{DATA.assets.oye.audience}</div>
          </div>
          <div className="grid grid-cols-2 gap-3 text-sm">
            <div className="p-2 bg-slate-800/50 rounded">
              <div className="text-slate-500">Abonnés</div>
              <div className="font-bold text-slate-200">{DATA.assets.oye.followers.toLocaleString()}</div>
            </div>
            <div className="p-2 bg-slate-800/50 rounded">
              <div className="text-slate-500">% revenus ADN</div>
              <div className="font-bold text-slate-200">{DATA.assets.oye.revenuePercent}%</div>
            </div>
            <div className="p-2 bg-slate-800/50 rounded col-span-2">
              <div className="text-slate-500">Revenus mensuels</div>
              <div className="font-bold text-slate-200">{DATA.assets.oye.revenueRange}</div>
            </div>
          </div>
          <div className="p-3 bg-amber-900/20 border border-amber-500/30 rounded-lg">
            <div className="text-amber-300 font-medium">Contenu perdu</div>
            <div className="text-amber-200 text-sm">{DATA.assets.oye.contentLost}</div>
          </div>
          <div className="p-3 bg-red-900/20 border border-red-500/30 rounded-lg">
            <div className="text-red-300 font-medium">État actuel</div>
            <div className="text-red-200 text-sm">{DATA.assets.oye.currentState}</div>
          </div>
        </div>
        <div className="space-y-4">
          <div>
            <div className="text-xs text-slate-500 uppercase mb-2">IDs de page</div>
            <div className="space-y-2">
              <div className="p-2 bg-slate-800/30 rounded text-sm">
                <div className="text-slate-400 font-medium">ID fourni par ADN (28/08)</div>
                <div className="font-mono text-slate-300 text-xs">{DATA.assets.oye.ids.fromADN.id}</div>
                <div className="text-xs text-slate-500">{DATA.assets.oye.ids.fromADN.source}</div>
              </div>
              <div className="p-2 bg-slate-800/30 rounded text-sm">
                <div className="text-slate-400 font-medium">ID Meta (29/08)</div>
                <div className="font-mono text-slate-300 text-xs">{DATA.assets.oye.ids.fromMeta.id}</div>
                <div className="text-xs text-red-400">{DATA.assets.oye.ids.fromMeta.status}</div>
              </div>
              <div className="p-2 bg-emerald-900/20 border border-emerald-500/30 rounded text-sm">
                <div className="text-emerald-400 font-medium">ID réel (retrouvé 03/09)</div>
                <div className="font-mono text-emerald-300 text-xs">{DATA.assets.oye.ids.actual.id}</div>
                <div className="text-xs text-emerald-400">💥 {DATA.assets.oye.ids.actual.status}</div>
              </div>
            </div>
          </div>
          <div className="p-3 bg-slate-800/30 rounded-lg">
            <div className="text-xs text-slate-500 uppercase mb-2">Contrôle technique</div>
            <div className="space-y-1 text-sm">
              <div className="flex justify-between">
                <span className="text-slate-400">Business Manager</span>
                <span className="font-mono text-slate-300 text-xs">{DATA.assets.technical.businessManagerId}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-slate-400">Propriétaire</span>
                <span className="text-slate-300">{DATA.assets.technical.owner}</span>
              </div>
              <div className="text-red-300 mt-2 pt-2 border-t border-slate-700/50">
                <div className="font-medium">Super Admin: {DATA.assets.technical.superAdmin}</div>
                <div className="text-xs text-red-400 mt-1">{DATA.assets.technical.superAdminEmail}</div>
              </div>
              <div className="text-amber-300 text-xs mt-2 pt-2 border-t border-slate-700/50">
                Accès ADN: {DATA.assets.technical.adnAccess}
              </div>
            </div>
          </div>
        </div>
      </div>
    </Card>

    <Card title="💀 Analyse du préjudice — AVANT vs APRÈS" accent="purple">
      <div className="grid md:grid-cols-2 gap-6">
        <div className="p-4 bg-emerald-900/10 border border-emerald-500/30 rounded-lg">
          <div className="text-emerald-400 font-semibold mb-3">✓ Avant piratage</div>
          <div className="space-y-2 text-sm">
            <div className="flex items-center gap-2">
              <span className="text-slate-400">Followers:</span>
              <span className="text-slate-200">{DATA.assets.oye.damageAnalysis.beforeHack.followers}</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-slate-400">Revenus:</span>
              <span className="text-slate-200">{DATA.assets.oye.damageAnalysis.beforeHack.revenue}</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-slate-400">Contenu:</span>
              <span className="text-slate-200">{DATA.assets.oye.damageAnalysis.beforeHack.content}</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-slate-400">Monétisation:</span>
              <span className="text-slate-200">{DATA.assets.oye.damageAnalysis.beforeHack.monetization}</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-slate-400">Réputation:</span>
              <span className="text-slate-200">{DATA.assets.oye.damageAnalysis.beforeHack.reputation}</span>
            </div>
          </div>
        </div>
        <div className="p-4 bg-red-900/10 border border-red-500/30 rounded-lg">
          <div className="text-red-400 font-semibold mb-3">✗ Après récupération (hypothétique)</div>
          <div className="space-y-2 text-sm">
            <div className="flex items-center gap-2">
              <span className="text-slate-400">Audience:</span>
              <span className="text-red-300 font-bold">{DATA.assets.oye.damageAnalysis.afterRecovery.followers}</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-slate-400">Engagement:</span>
              <span className="text-red-300 font-bold">{DATA.assets.oye.damageAnalysis.afterRecovery.engagement}</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-slate-400">Revenus:</span>
              <span className="text-red-300 font-bold">{DATA.assets.oye.damageAnalysis.afterRecovery.revenue}</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-slate-400">Contenu:</span>
              <span className="text-red-300 font-bold">{DATA.assets.oye.damageAnalysis.afterRecovery.content}</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-slate-400">Monétisation:</span>
              <span className="text-red-300 font-bold">{DATA.assets.oye.damageAnalysis.afterRecovery.monetization}</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-slate-400">Réputation:</span>
              <span className="text-red-300 font-bold">{DATA.assets.oye.damageAnalysis.afterRecovery.reputation}</span>
            </div>
          </div>
        </div>
      </div>
      <div className="mt-4 p-4 bg-red-900/20 border-2 border-red-500/50 rounded-lg">
        <div className="text-red-300 font-bold text-lg">⚠️ CONCLUSION</div>
        <div className="text-red-200 mt-2">{DATA.assets.oye.damageAnalysis.conclusion}</div>
      </div>
    </Card>

    <Card title="📦 Autres actifs" accent="slate">
      <div className="grid md:grid-cols-3 gap-4">
        {DATA.assets.others.map((asset, i) => (
          <div key={i} className="p-4 bg-slate-800/30 rounded-lg">
            <div className="font-medium text-slate-200">{asset.name}</div>
            <div className="text-sm text-slate-400">{asset.platform}</div>
            <div className="text-sm text-slate-300 mt-2">{asset.status}</div>
            {asset.transferRequested && <Badge type="pending">Transfert demandé</Badge>}
          </div>
        ))}
      </div>
    </Card>
  </div>
);

export const Meeting14NovSection = () => (
  <div className="space-y-6">
    <div className="bg-gradient-to-r from-purple-900/30 via-purple-800/20 to-transparent border border-purple-500/30 rounded-xl p-5">
      <div className="text-purple-300 font-semibold text-lg">📞 Réunion du 14 novembre 2025</div>
      <div className="text-slate-300 mt-2">Réunion téléphonique suivie d'un compte-rendu écrit envoyé par Jérôme à 18:45</div>
      <div className="text-slate-400 text-sm mt-1">Participants: {DATA.meeting14Nov.participants.join(", ")}</div>
    </div>

    <Card title="📋 Points NON CONTESTÉS par CC (≠ acceptés juridiquement)" accent="emerald">
      <div className="p-3 bg-amber-900/20 border border-amber-500/30 rounded-lg mb-4">
        <div className="text-amber-300 text-sm">⚠️ <strong>Nuance importante:</strong> En droit suisse, le silence ne vaut généralement PAS acceptation. Ces points n'ont pas été contestés, mais un arbitre pourrait ne pas les considérer comme "validés".</div>
      </div>
      <div className="space-y-2">
        {DATA.meeting14Nov.pointsNonContestes.map((item, i) => (
          <div key={i} className={`p-3 rounded-lg ${item.critical ? 'bg-fuchsia-900/20 border border-fuchsia-500/30' : 'bg-slate-800/30'}`}>
            <div className="flex items-center justify-between">
              <span className="text-slate-200">{item.point}</span>
              {item.critical && <Badge type="strong">NON CONTESTÉ</Badge>}
            </div>
            {item.note && <div className="text-amber-400 text-xs mt-1">→ {item.note}</div>}
          </div>
        ))}
      </div>
    </Card>

    <Card title="💣 Réponse de Jonathan — 19:08" accent="red">
      <div className="p-4 bg-slate-800/50 rounded-lg mb-4">
        <div className="text-slate-300 italic">"{DATA.meeting14Nov.jonathanResponse.quote}"</div>
      </div>
      <div className="text-sm text-slate-400 mb-3">AVEUX CONTENUS DANS CETTE RÉPONSE:</div>
      <div className="space-y-3">
        {DATA.meeting14Nov.jonathanResponse.admissions.map((adm, i) => (
          <div key={i} className="p-3 bg-red-900/20 border border-red-500/30 rounded-lg">
            <div className="text-red-300 font-medium">"{adm.text}"</div>
            <div className="text-red-200 text-sm mt-1">→ {adm.meaning}</div>
          </div>
        ))}
      </div>
    </Card>
  </div>
);

export const MetaTimelineSection = () => (
  <div className="space-y-6">
    <Card title="📧 Boucle email Meta — Piratage Oye (Août-Sept 2025)" accent="blue">
      <div className="relative">
        <div className="absolute left-4 top-0 bottom-0 w-0.5 bg-slate-700"></div>
        <div className="space-y-2">
          {DATA.metaTimeline.map((item, i) => (
            <div key={i} className={`relative pl-10 py-3 ${
              item.type === 'critical' ? 'bg-red-900/20 -mx-3 px-3 pl-12 rounded-lg border border-red-500/30' :
              item.type === 'important' ? 'bg-amber-900/20 -mx-3 px-3 pl-12 rounded-lg border border-amber-500/30' :
              item.type === 'evidence' ? 'bg-purple-900/20 -mx-3 px-3 pl-12 rounded-lg border border-purple-500/30' :
              item.type === 'internal' ? 'bg-slate-800/50 -mx-3 px-3 pl-12 rounded-lg' : ''
            }`}>
              <div className={`absolute left-2.5 w-3 h-3 rounded-full border-2 ${
                item.type === 'critical' ? 'bg-red-500 border-red-400' :
                item.type === 'important' ? 'bg-amber-500 border-amber-400' :
                item.type === 'evidence' ? 'bg-purple-500 border-purple-400' :
                item.type === 'internal' ? 'bg-slate-500 border-slate-400' :
                'bg-blue-500 border-blue-400'
              }`}></div>
              <div className="flex flex-wrap items-center gap-2 text-xs">
                <span className="text-slate-500 font-mono">{item.date}</span>
                {item.from && <span className="text-slate-400">de {item.from}</span>}
                {item.to && <span className="text-slate-400">→ {item.to}</span>}
                {item.highlight === '2FA' && <Badge type="devastating">🔐 PREUVE 2FA</Badge>}
                {item.highlight === 'PAGE_EXISTS' && <Badge type="devastating">PAGE EXISTE</Badge>}
              </div>
              <div className={`text-sm mt-1 ${item.type === 'critical' ? 'text-red-200 font-medium' : 'text-slate-300'}`}>
                {item.event}
              </div>
              {item.note && <div className="text-amber-400 text-xs mt-1">→ {item.note}</div>}
            </div>
          ))}
        </div>
      </div>
    </Card>
  </div>
);

export const TwoFactorSection = () => (
  <div className="space-y-6">
    <div className="bg-gradient-to-r from-fuchsia-900/30 via-fuchsia-800/20 to-transparent border border-fuchsia-500/30 rounded-xl p-6">
      <div className="text-2xl font-bold text-fuchsia-300 mb-2">🔐 La preuve 2FA — DOUBLE CONTRADICTION</div>
      <div className="text-slate-300">CC affirme que le 2FA était "toujours en place" mais Meta a recommandé de l'ACTIVER.</div>
    </div>

    <div className="grid md:grid-cols-3 gap-4">
      <Card title="📧 Meta (27/08/2025)" accent="emerald">
        <div className="p-3 bg-emerald-900/20 border border-emerald-500/30 rounded-lg">
          <div className="text-emerald-300 italic text-sm">"{DATA.twoFactorProof.metaEmail.quote}"</div>
        </div>
        <div className="text-xs text-slate-400 mt-2">Envoyé à Jonathan Mayorkas</div>
      </Card>

      <Card title="📞 Jonathan (14/11/2025)" accent="purple">
        <div className="p-3 bg-purple-900/20 border border-purple-500/30 rounded-lg">
          <div className="text-purple-300 italic text-sm">"{DATA.twoFactorProof.jonathanMeeting.quote}"</div>
        </div>
        <div className="text-xs text-slate-400 mt-2">CR non contesté (≠ acceptation juridique en droit suisse)</div>
      </Card>

      <Card title="📄 Emre (26/12/2025)" accent="red">
        <div className="p-3 bg-red-900/20 border border-red-500/30 rounded-lg">
          <div className="text-red-300 italic text-sm">"{DATA.twoFactorProof.ccLetter.quote}"</div>
        </div>
        <div className="text-xs text-slate-400 mt-2">Lettre officielle CC</div>
      </Card>
    </div>
  </div>
);

export const LettersSection = () => (
  <div className="space-y-6">
    <Card title="📄 Lettre ADN — 19 décembre 2025" accent="blue">
      <div className="grid md:grid-cols-2 gap-3 mb-4">
        {DATA.letters.adn.sections.map((sec, i) => (
          <div key={i} className="p-3 bg-slate-800/30 rounded-lg">
            <div className="text-blue-400 text-xs font-bold">{sec.num}. {sec.title}</div>
            <div className="text-slate-300 text-sm mt-1">{sec.content}</div>
          </div>
        ))}
      </div>
    </Card>

    <Card title="📄 Lettre CC — 26 décembre 2025" accent="red">
      <div className="mb-4 flex items-center justify-between">
        <div className="text-slate-400">Expéditeur: {DATA.letters.cc.sender}</div>
        <Badge type="warning">{DATA.letters.cc.timing}</Badge>
      </div>
      
      <div className="space-y-3 mb-4">
        {DATA.letters.cc.claims.filter(c => c.critical).map((item, i) => (
          <div key={i} className="p-3 rounded-lg bg-red-900/20 border border-red-500/30">
            <div className="text-slate-300 text-sm">
              <span className="text-slate-500">Leur affirmation:</span> "{item.claim}"
            </div>
            <div className="text-red-300 font-medium text-sm mt-1">🔴 {item.response}</div>
          </div>
        ))}
      </div>
    </Card>
  </div>
);

export const EvidenceSection = () => (
  <div className="space-y-6">
    <Card title="📋 Arsenal de preuves" accent="fuchsia">
      <div className="space-y-3">
        {DATA.evidence.map((ev, i) => (
          <div key={i} className={`p-4 rounded-lg border ${
            ev.strength === 'devastating' ? 'bg-fuchsia-900/20 border-fuchsia-500/30' :
            ev.strength === 'very_strong' ? 'bg-emerald-900/20 border-emerald-500/30' :
            'bg-slate-800/30 border-slate-700/30'
          }`}>
            <div className="flex items-start justify-between gap-4">
              <div className="flex-1">
                <div className="font-medium text-slate-100">{ev.name}</div>
                <div className="text-sm text-slate-400 mt-1">{ev.desc}</div>
              </div>
              <Badge type={ev.strength}>
                {ev.strength === 'devastating' ? '💥 DÉVASTATEUR' :
                 ev.strength === 'very_strong' ? '🔥 TRÈS FORT' : '✓ FORT'}
              </Badge>
            </div>
          </div>
        ))}
      </div>
    </Card>
  </div>
);

export const LegalSection = () => (
  <div className="space-y-6">
    <Card title="⚖️ Arsenal juridique — Droit suisse" accent="purple">
      <div className="space-y-3">
        {DATA.legal.swiss.map((item, i) => (
          <div key={i} className="p-4 bg-slate-800/30 rounded-lg flex items-start justify-between gap-4">
            <div className="flex-1">
              <div className="font-mono text-purple-400">{item.art}</div>
              <div className="font-medium text-slate-200">{item.name}</div>
              <div className="text-sm text-slate-400 mt-1">{item.use}</div>
            </div>
            <Badge type={item.status}>{item.status === 'invoked' ? 'INVOQUÉ' : 'EN RÉSERVE'}</Badge>
          </div>
        ))}
      </div>
    </Card>
  </div>
);

export const ChronologySection = () => (
  <div className="space-y-6">
    <Card title="📆 Chronologie complète ADN-CC" accent="slate">
      <div className="relative">
        <div className="absolute left-4 top-0 bottom-0 w-0.5 bg-slate-700"></div>
        <div className="space-y-2">
          {DATA.mainTimeline.map((item, i) => (
            <div key={i} className={`relative pl-10 py-2 ${
              item.critical ? 'bg-red-900/20 -mx-3 px-3 pl-12 rounded-lg border border-red-500/30' :
              item.important ? 'bg-amber-900/20 -mx-3 px-3 pl-12 rounded-lg border border-amber-500/30' : ''
            }`}>
              <div className={`absolute left-2.5 w-3 h-3 rounded-full border-2 ${
                item.critical ? 'bg-red-500 border-red-400' :
                item.important ? 'bg-amber-500 border-amber-400' :
                item.phase === 'setup' ? 'bg-blue-500 border-blue-400' :
                item.phase === 'current' ? 'bg-cyan-500 border-cyan-400 animate-pulse' :
                'bg-slate-600 border-slate-500'
              }`}></div>
              <div className="flex flex-wrap items-center gap-2">
                <span className="text-slate-500 font-mono text-xs">{item.date}</span>
                {item.critical && <Badge type="critical">CRITIQUE</Badge>}
              </div>
              <div className={`text-sm ${item.critical ? 'text-red-200 font-medium' : 'text-slate-300'}`}>
                {item.event}
              </div>
            </div>
          ))}
        </div>
      </div>
    </Card>
  </div>
);

export const AnalysisSection = () => (
  <div className="space-y-6">
    <div className="grid md:grid-cols-2 gap-6">
      <Card title="💪 Forces d'ADN" accent="emerald">
        <div className="space-y-2">
          {[
            { point: "La page EXISTE encore sous pirates", strength: "devastating" },
            { point: "Meta a recommandé d'ACTIVER le 2FA à CC", strength: "devastating" },
            { point: "Aveu Jonathan 14/11: 'si vous voulez qu'on essaye'", strength: "devastating" },
            { point: "4+ mois d'inaction de CC", strength: "very_strong" },
            { point: "Silence sur CR 14/11 = absence de contestation", strength: "strong" },
            { point: "Alex n'a rien de saisissable", strength: "leverage" }
          ].map((item, i) => (
            <div key={i} className="flex items-center justify-between p-2 bg-slate-800/30 rounded">
              <span className="text-slate-300 text-sm">{item.point}</span>
              <Badge type={item.strength}>
                {item.strength === 'devastating' ? '💥' : 
                 item.strength === 'very_strong' ? '🔥' : '🎯'}
              </Badge>
            </div>
          ))}
        </div>
      </Card>

      <Card title="⚠️ Forces de CC" accent="red">
        <div className="space-y-2">
          {DATA.contracts.clauses.filter(c => c.danger === 'critical').map((item, i) => (
            <div key={i} className="flex items-center justify-between p-2 bg-slate-800/30 rounded">
              <span className="text-slate-300 text-sm">Clause {item.id}: {item.name}</span>
              <Badge type="critical">DANGER</Badge>
            </div>
          ))}
          <div className="flex items-center justify-between p-2 bg-slate-800/30 rounded">
            <span className="text-slate-300 text-sm">Garantie personnelle Alex</span>
            <Badge type="critical">DANGER</Badge>
          </div>
        </div>
      </Card>
    </div>

    <Card title="🚫 Erreurs à NE PAS commettre" accent="red">
      <div className="space-y-3">
        {DATA.errorsToAvoid.map((item, i) => (
          <div key={i} className="p-3 bg-slate-800/30 rounded-lg">
            <div className="text-red-400 text-sm">❌ {item.error}</div>
            <div className="text-emerald-400 text-sm mt-1">✓ {item.correction}</div>
          </div>
        ))}
      </div>
    </Card>
  </div>
);

export const NeutralLensSection = () => (
  <div className="space-y-6">
    {/* Header */}
    <div className="bg-gradient-to-r from-blue-900/40 via-slate-800/30 to-purple-900/20 border border-blue-500/30 rounded-xl p-6">
      <div className="flex items-center gap-4">
        <div className="w-14 h-14 bg-gradient-to-br from-blue-500 to-purple-600 rounded-xl flex items-center justify-center text-2xl shadow-lg">
          ⚖️
        </div>
        <div>
          <div className="text-xl font-bold text-white">{DATA.neutralLens.title}</div>
          <div className="text-blue-300">{DATA.neutralLens.subtitle}</div>
        </div>
      </div>
    </div>

    {/* Facts vs Inferences */}
    <Card title="📊 Faits documentés vs Inférences" accent="blue">
      <div className="space-y-6">
        {DATA.neutralLens.factsVsInferences.map((cat, i) => (
          <div key={i} className="border border-slate-700/50 rounded-lg overflow-hidden">
            <div className="bg-slate-800/50 px-4 py-2 font-semibold text-slate-200">
              {cat.category}
            </div>
            <div className="grid md:grid-cols-2 gap-4 p-4">
              <div>
                <div className="flex items-center gap-2 mb-2">
                  <Badge type="fact">FAITS</Badge>
                </div>
                <div className="space-y-2">
                  {cat.facts.map((fact, j) => (
                    <div key={j} className="text-sm text-slate-300 flex items-start gap-2">
                      <span className="text-blue-400 mt-1">•</span>
                      <span>{fact}</span>
                    </div>
                  ))}
                </div>
              </div>
              <div>
                <div className="flex items-center gap-2 mb-2">
                  <Badge type="inference">INFÉRENCES</Badge>
                </div>
                <div className="space-y-2">
                  {cat.inferences.map((inf, j) => (
                    <div key={j} className="text-sm text-slate-400 flex items-start gap-2">
                      <span className="text-purple-400 mt-1">→</span>
                      <span>{inf}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </Card>

    {/* Strength Assessment */}
    <Card title="📈 Évaluation des arguments" accent="purple">
      <div className="space-y-4">
        {DATA.neutralLens.strengthAssessment.map((arg, i) => (
          <div key={i} className="p-4 bg-slate-800/30 rounded-lg border border-slate-700/30">
            <div className="flex items-center justify-between mb-3">
              <div className="font-semibold text-slate-100">{arg.argument}</div>
              <div className="flex items-center gap-2">
                <Badge type={arg.strength === 'MOYEN-FORT' ? 'strong' : 'medium'}>
                  {arg.strength}
                </Badge>
                <span className="text-slate-400 text-sm">{arg.probability}</span>
              </div>
            </div>
            <div className="grid md:grid-cols-2 gap-4">
              <div className="p-3 bg-emerald-900/20 rounded-lg">
                <div className="text-emerald-400 text-xs uppercase mb-2">Pour ADN</div>
                {arg.forADN.map((p, j) => (
                  <div key={j} className="text-sm text-slate-300">• {p}</div>
                ))}
              </div>
              <div className="p-3 bg-red-900/20 rounded-lg">
                <div className="text-red-400 text-xs uppercase mb-2">Pour CC</div>
                {arg.forCC.map((p, j) => (
                  <div key={j} className="text-sm text-slate-300">• {p}</div>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </Card>

    {/* Best Arguments */}
    <div className="grid md:grid-cols-2 gap-6">
      <Card title="🔵 Meilleurs arguments ADN" accent="blue">
        <div className="space-y-2">
          {DATA.neutralLens.adnBestArguments.map((arg, i) => (
            <div key={i} className="flex items-start gap-2 p-2 bg-blue-900/20 rounded">
              <span className="text-blue-400">✓</span>
              <span className="text-slate-300 text-sm">{arg}</span>
            </div>
          ))}
        </div>
      </Card>

      <Card title="🔴 Meilleurs arguments CC" accent="red">
        <div className="space-y-2">
          {DATA.neutralLens.ccBestArguments.map((arg, i) => (
            <div key={i} className="flex items-start gap-2 p-2 bg-red-900/20 rounded">
              <span className="text-red-400">✓</span>
              <span className="text-slate-300 text-sm">{arg}</span>
            </div>
          ))}
        </div>
      </Card>
    </div>

    {/* Arbitrator Perspective */}
    <Card title="👨‍⚖️ Perspective d'un arbitre" accent="amber">
      <div className="space-y-4">
        <div className="grid md:grid-cols-2 gap-4">
          <div className="p-4 bg-slate-800/30 rounded-lg">
            <div className="text-amber-400 text-xs uppercase mb-2">Ce qu'il verra</div>
            {DATA.neutralLens.arbitratorPerspective.whatTheyWillSee.map((item, i) => (
              <div key={i} className="text-sm text-slate-300 mb-1">• {item}</div>
            ))}
          </div>
          <div className="p-4 bg-slate-800/30 rounded-lg">
            <div className="text-amber-400 text-xs uppercase mb-2">Ce qu'il demandera</div>
            {DATA.neutralLens.arbitratorPerspective.whatTheyWillAsk.map((item, i) => (
              <div key={i} className="text-sm text-slate-300 mb-1">• {item}</div>
            ))}
          </div>
        </div>
        
        <div className="p-4 bg-amber-900/20 border border-amber-500/30 rounded-lg">
          <div className="text-amber-400 text-xs uppercase mb-3">Scénarios probables</div>
          <div className="grid md:grid-cols-2 gap-3">
            {DATA.neutralLens.arbitratorPerspective.likelyOutcomes.map((outcome, i) => (
              <div key={i} className="p-3 bg-slate-800/30 rounded">
                <div className="flex items-center justify-between mb-1">
                  <span className="text-slate-200 font-medium">{outcome.scenario}</span>
                  <span className="text-amber-300 text-sm">{outcome.probability}</span>
                </div>
                <div className="text-slate-400 text-xs">{outcome.consequence}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </Card>

    {/* Recommendations */}
    <Card title="📋 Recommandations pour renforcer le dossier" accent="emerald">
      <div className="space-y-3">
        {DATA.neutralLens.recommendations.map((rec, i) => (
          <div key={i} className={`p-4 rounded-lg border ${
            rec.priority === 'HIGH' ? 'bg-amber-900/20 border-amber-500/30' : 'bg-slate-800/30 border-slate-700/30'
          }`}>
            <div className="flex items-center justify-between mb-2">
              <span className="font-medium text-slate-100">{rec.action}</span>
              <Badge type={rec.priority === 'HIGH' ? 'high' : 'medium'}>{rec.priority}</Badge>
            </div>
            <div className="text-slate-400 text-sm">{rec.why}</div>
          </div>
        ))}
      </div>
    </Card>
  </div>
);

export const LiveTimelineSection = () => (
  <div className="space-y-6">
    <div className="bg-gradient-to-r from-emerald-900/40 via-cyan-900/30 to-blue-900/20 border-2 border-emerald-500/50 rounded-xl p-6">
      <div className="text-3xl font-bold text-white mb-2">{DATA.actionPlan.prochaineAction.quoi}</div>
      <div className="text-slate-300">Jusqu'au {DATA.actionPlan.prochaineAction.jusqua}</div>
      <div className="text-emerald-300 mt-2">{DATA.actionPlan.prochaineAction.pourquoi}</div>
    </div>
    
    <Card title="📍 Situation actuelle" accent="cyan">
      <div className="text-slate-300">{DATA.actionPlan.situationActuelle.resume}</div>
    </Card>
  </div>
);

export const PsychologySection = () => (
  <div className="space-y-6">
    <div className="bg-gradient-to-r from-purple-900/40 via-fuchsia-900/30 to-pink-900/20 border border-purple-500/30 rounded-xl p-6">
      <div className="text-xl font-bold text-white">🧠 PROFIL PSYCHOLOGIQUE — COPYRIGHT CAPITAL</div>
    </div>
    
    <Card title="👤 Profils individuels" accent="purple">
      <div className="space-y-4">
        {DATA.psychologyCC.individuals.map((person, i) => (
          <div key={i} className="p-4 bg-slate-800/30 rounded-lg">
            <div className="font-bold text-slate-100 mb-2">{person.name} — {person.role}</div>
            <div className="text-slate-400 text-sm">{person.profile}</div>
            <div className="mt-2 p-2 bg-emerald-900/20 rounded">
              <span className="text-emerald-400 text-xs">Faiblesse:</span>
              <span className="text-slate-300 text-sm ml-2">{person.weakness}</span>
            </div>
          </div>
        ))}
      </div>
    </Card>
  </div>
);

export const OyeClarificationSection = () => (
  <div className="space-y-6">
    <div className="bg-gradient-to-r from-fuchsia-900/40 via-purple-900/30 to-red-900/20 border-2 border-fuchsia-500/50 rounded-xl p-6">
      <div className="text-2xl font-bold text-fuchsia-300">{DATA.strategicClarification.title}</div>
    </div>

    <Card title="💡 Principe fondamental" accent="amber">
      <div className="text-xl text-white">{DATA.strategicClarification.principle}</div>
    </Card>

    <Card title="💔 Préjudices NON effaçables par récupération" accent="red">
      <div className="grid md:grid-cols-2 gap-3">
        {DATA.strategicClarification.damages.map((damage: any, i: number) => (
          <div key={i} className="flex items-center gap-3 p-3 bg-slate-800/30 rounded-lg">
            <div className="w-8 h-8 bg-red-500/20 rounded flex items-center justify-center text-red-400 text-lg">✗</div>
            <div className="flex-1">
              <div className="text-slate-200">{damage.type}</div>
              <div className="text-red-400 text-xs">NON réparable</div>
            </div>
          </div>
        ))}
      </div>
    </Card>

    <Card title="🚗 Analogie" accent="cyan">
      <div className="text-slate-300 italic text-lg">"{DATA.strategicClarification.analogy}"</div>
    </Card>

    <Card title="📝 Comment le formuler correctement" accent="emerald">
      <div className="space-y-4">
        <div className="p-4 bg-red-900/20 border border-red-500/30 rounded-lg">
          <div className="flex items-center gap-2 mb-2">
            <span className="text-red-400 font-bold">❌ MAUVAISE formulation</span>
          </div>
          <div className="text-slate-300 italic">"{DATA.strategicClarification.formulation.bad}"</div>
        </div>
        <div className="p-4 bg-emerald-900/20 border border-emerald-500/30 rounded-lg">
          <div className="flex items-center gap-2 mb-2">
            <span className="text-emerald-400 font-bold">✓ BONNE formulation</span>
          </div>
          <div className="text-slate-300 italic">"{DATA.strategicClarification.formulation.good}"</div>
        </div>
      </div>
    </Card>
  </div>
);

export const GmailNegligenceSection = () => (
  <div className="space-y-6">
    <div className="bg-gradient-to-r from-red-900/40 via-orange-900/30 to-amber-900/20 border-2 border-red-500/50 rounded-xl p-6">
      <div className="text-2xl font-bold text-red-300">{DATA.gmailNegligence.title}</div>
      <div className="text-slate-300 mt-2">{DATA.gmailNegligence.impact}</div>
      <div className="text-amber-400 text-sm mt-3">📅 Découverte: {DATA.gmailNegligence.discovery}</div>
    </div>

    <Card title="👥 Gmail personnels identifiés" accent="red">
      <div className="space-y-4">
        {DATA.gmailNegligence.persons.map((person: any, i: number) => (
          <div key={i} className="p-4 bg-slate-800/30 rounded-lg border border-red-500/20">
            <div className="flex items-start justify-between mb-3">
              <div>
                <div className="font-bold text-white text-lg">{person.name}</div>
                <div className="text-slate-400 text-sm">{person.role}</div>
              </div>
              <Badge type="critical">GMAIL</Badge>
            </div>
            <div className="space-y-2 text-sm">
              <div className="flex items-center gap-2">
                <span className="text-slate-500">Email pro:</span>
                <span className="font-mono text-slate-300">{person.emailPro}</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-slate-500">Gmail perso:</span>
                <span className="font-mono text-red-400 font-bold">{person.emailGmail}</span>
              </div>
              <div className="mt-3 pt-3 border-t border-slate-700/50">
                <div className="text-amber-400">⚠️ {person.usage}</div>
                <div className="text-slate-500 text-xs mt-1">Découvert: {person.discovered}</div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </Card>

    <Card title="⚖️ Implications juridiques" accent="purple">
      <div className="grid md:grid-cols-2 gap-4">
        <div className="p-4 bg-slate-800/30 rounded-lg">
          <div className="text-slate-400 font-semibold mb-2">Avant découverte Joel</div>
          <div className="text-slate-300">{DATA.gmailNegligence.legalImplication.before}</div>
        </div>
        <div className="p-4 bg-red-900/20 border border-red-500/30 rounded-lg">
          <div className="text-red-400 font-semibold mb-2">Après découverte Joel</div>
          <div className="text-red-300 font-bold">{DATA.gmailNegligence.legalImplication.after}</div>
        </div>
      </div>
      <div className="mt-4 p-4 bg-purple-900/20 border border-purple-500/30 rounded-lg">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 bg-purple-500/20 rounded flex items-center justify-center text-xl">⚖️</div>
          <div className="flex-1">
            <div className="text-purple-400 font-semibold">{DATA.gmailNegligence.legalImplication.article}</div>
            <div className="text-slate-300 text-sm mt-1">{DATA.gmailNegligence.legalImplication.conclusion}</div>
          </div>
        </div>
      </div>
    </Card>

    <Card title="🤖 vs 👤 Qualité des contacts Meta" accent="cyan">
      <div className="text-slate-300 text-lg mb-4 italic">"{DATA.gmailNegligence.robotVsHuman.irony}"</div>
      <div className="grid md:grid-cols-2 gap-4">
        <div className="p-4 bg-slate-800/30 rounded-lg border border-slate-600/30">
          <div className="flex items-center gap-2 mb-3">
            <span className="text-2xl">🤖</span>
            <div>
              <div className="font-bold text-slate-200">Copyright Capital</div>
              <div className="text-slate-400 text-sm">{DATA.gmailNegligence.robotVsHuman.cc.type}</div>
            </div>
          </div>
          <div className="space-y-2 text-sm">
            <div className="font-mono text-xs text-slate-400">{DATA.gmailNegligence.robotVsHuman.cc.email}</div>
            <div className="font-mono text-xs text-slate-400">{DATA.gmailNegligence.robotVsHuman.cc.replyTo}</div>
            <div className="text-red-400 mt-3 pt-3 border-t border-slate-700/50">
              ❌ {DATA.gmailNegligence.robotVsHuman.cc.value}
            </div>
          </div>
        </div>
        <div className="p-4 bg-emerald-900/20 rounded-lg border border-emerald-500/30">
          <div className="flex items-center gap-2 mb-3">
            <span className="text-2xl">👤</span>
            <div>
              <div className="font-bold text-emerald-300">ADN Production</div>
              <div className="text-emerald-400 text-sm">{DATA.gmailNegligence.robotVsHuman.adn.type}</div>
            </div>
          </div>
          <div className="space-y-2 text-sm">
            {DATA.gmailNegligence.robotVsHuman.adn.contacts.map((contact: string, i: number) => (
              <div key={i} className="font-mono text-xs text-slate-300">• {contact}</div>
            ))}
            <div className="text-emerald-400 mt-3 pt-3 border-t border-emerald-700/50">
              ✓ {DATA.gmailNegligence.robotVsHuman.adn.value}
            </div>
          </div>
        </div>
      </div>
    </Card>

    <Card title="❓ Questions stratégiques pour CC" accent="amber">
      <div className="space-y-3">
        {DATA.gmailNegligence.questions.map((question: string, i: number) => (
          <div key={i} className="flex items-start gap-3 p-3 bg-amber-900/20 border border-amber-500/30 rounded-lg">
            <div className="w-6 h-6 bg-amber-500/20 rounded flex items-center justify-center text-amber-400 font-bold text-sm">{i + 1}</div>
            <div className="text-slate-200 flex-1">{question}</div>
          </div>
        ))}
      </div>
    </Card>
  </div>
);


export const WarStrategySection = () => {
  return (
    <div className="space-y-6">
      <div className="bg-gradient-to-r from-red-900/40 via-amber-900/30 to-emerald-900/20 border border-red-500/30 rounded-xl p-6">
        <div className="text-2xl font-bold text-white">⚔️ STRATÉGIE DE GUERRE</div>
        <div className="text-slate-300 mt-1">Comment amener Copyright Capital à la capitulation</div>
      </div>

      <Card title="🎯 Objectif: CAPITULATION DE CC" accent="emerald">
        <div className="text-slate-300 mb-4">{DATA.warStrategy.ultimateGoal.description}</div>
        <div className="space-y-2">
          {DATA.warStrategy.ultimateGoal.outcomes.map((item: any, i: number) => (
            <div key={i} className={'p-3 rounded-lg border ' + (item.priority === 'critical' ? 'bg-red-900/20 border-red-500/30' : 'bg-slate-800/30 border-slate-700/30')}>
              <span className="text-slate-100">{item.outcome}</span>
            </div>
          ))}
        </div>
      </Card>

      <Card title="💀 POURQUOI C'EST INGAGNABLE POUR CC" accent="red">
        <div className="space-y-4">
          {DATA.warStrategy.whyCCLoses.reasons.map((reason: any, i: number) => (
            <div key={i} className="p-4 bg-slate-800/30 rounded-lg border border-slate-700/30">
              <div className="text-red-400 font-bold mb-2">{reason.category}</div>
              <div className="space-y-1">
                {reason.points.map((point: string, j: number) => (
                  <div key={j} className="text-slate-300 text-sm flex items-start gap-2">
                    <span className="text-red-400 mt-1">•</span>
                    <span>{point}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </Card>

      <Card title="📢 Messages clés à transmettre" accent="purple">
        <div className="space-y-3">
          {DATA.warStrategy.keyMessages.map((msg: any, i: number) => (
            <div key={i} className="p-4 bg-slate-800/30 rounded-lg border border-purple-500/20">
              <div className="text-purple-400 font-bold text-lg mb-2">{msg.message}</div>
              <div className="space-y-2 text-sm">
                <div className="flex items-start gap-2">
                  <span className="text-slate-500">Comment:</span>
                  <span className="text-slate-300">{msg.how}</span>
                </div>
                <div className="flex items-start gap-2">
                  <span className="text-slate-500">Ton:</span>
                  <span className="text-slate-300">{msg.tone}</span>
                </div>
                <div className="mt-3 p-3 bg-slate-900/50 rounded italic text-slate-400">
                  "{msg.example}"
                </div>
              </div>
            </div>
          ))}
        </div>
      </Card>

      <Card title="📅 LES 5 PHASES DE LA STRATÉGIE" accent="cyan">
        <div className="space-y-4">
          {DATA.warStrategy.phases.map((phase: any, i: number) => (
            <div key={i} className={`p-4 rounded-lg border-2 ${
              phase.status === 'active' ? 'bg-cyan-900/20 border-cyan-500/50' :
              phase.status === 'upcoming' ? 'bg-slate-800/30 border-slate-600/30' :
              'bg-slate-900/30 border-slate-700/20'
            }`}>
              <div className="flex items-center gap-3 mb-3">
                <div className="w-10 h-10 bg-cyan-500/20 rounded-full flex items-center justify-center font-bold text-cyan-400">
                  {phase.phase}
                </div>
                <div className="flex-1">
                  <div className="text-cyan-300 font-bold text-lg">{phase.name}</div>
                  <div className="text-slate-400 text-sm">{phase.period}</div>
                </div>
                {phase.status === 'active' && <Badge type="now">EN COURS</Badge>}
              </div>
              <div className="space-y-2 mb-3">
                {phase.actions.map((action: string, j: number) => (
                  <div key={j} className="text-slate-300 text-sm flex items-start gap-2">
                    <span className="text-cyan-400">→</span>
                    <span>{action}</span>
                  </div>
                ))}
              </div>
              <div className="p-3 bg-slate-900/50 rounded-lg">
                <div className="text-purple-400 text-xs font-semibold mb-1">🧠 Psychologie</div>
                <div className="text-slate-300 text-sm italic">{phase.psychology}</div>
              </div>
            </div>
          ))}
        </div>
      </Card>

      <Card title="💰 LE CALCUL DE CC (ce qu'ils doivent comprendre)" accent="amber">
        <div className="grid md:grid-cols-2 gap-6">
          <div className="p-4 bg-red-900/20 border-2 border-red-500/40 rounded-lg">
            <div className="text-red-400 font-bold text-lg mb-3">{DATA.warStrategy.ccCalculation.ifTheyFight.label}</div>
            <div className="space-y-2 mb-4">
              {DATA.warStrategy.ccCalculation.ifTheyFight.costs.map((cost: any, i: number) => (
                <div key={i} className="flex justify-between text-sm">
                  <span className="text-slate-300">{cost.item}</span>
                  <span className="text-red-400 font-mono">{cost.amount}</span>
                </div>
              ))}
            </div>
            <div className="pt-3 border-t border-red-500/30">
              <div className="text-red-300 font-bold">{DATA.warStrategy.ccCalculation.ifTheyFight.total}</div>
              <div className="text-red-400 text-lg font-bold mt-2">→ {DATA.warStrategy.ccCalculation.ifTheyFight.result}</div>
            </div>
          </div>
          <div className="p-4 bg-emerald-900/20 border-2 border-emerald-500/40 rounded-lg">
            <div className="text-emerald-400 font-bold text-lg mb-3">{DATA.warStrategy.ccCalculation.ifTheySettle.label}</div>
            <div className="space-y-2 mb-4">
              {DATA.warStrategy.ccCalculation.ifTheySettle.gains.map((gain: any, i: number) => (
                <div key={i} className="flex justify-between text-sm">
                  <span className="text-slate-300">{gain.item}</span>
                  <span className="text-emerald-400 font-mono">{gain.amount}</span>
                </div>
              ))}
            </div>
            <div className="pt-3 border-t border-emerald-500/30">
              <div className="text-emerald-300">Coût: {DATA.warStrategy.ccCalculation.ifTheySettle.cost}</div>
              <div className="text-emerald-400 text-lg font-bold mt-2">→ {DATA.warStrategy.ccCalculation.ifTheySettle.result}</div>
            </div>
          </div>
        </div>
      </Card>

      <Card title="🏳️ Signaux de capitulation" accent="emerald">
        <div className="space-y-3">
          {DATA.warStrategy.surrenderSignals.map((item: any, i: number) => (
            <div key={i} className="p-3 bg-slate-800/30 rounded-lg">
              <div className="flex items-start gap-3 mb-2">
                <div className="w-6 h-6 bg-emerald-500/20 rounded flex items-center justify-center text-emerald-400 font-bold text-xs">{i + 1}</div>
                <div className="flex-1">
                  <div className="text-slate-200 font-medium">{item.signal}</div>
                  <div className="text-slate-400 text-sm mt-1">→ {item.meaning}</div>
                  <div className="text-emerald-400 text-sm mt-2">✓ {item.response}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </Card>

      <Card title="❌ Erreurs à NE PAS commettre" accent="red">
        <div className="space-y-2">
          {DATA.warStrategy.mistakes.map((item: any, i: number) => (
            <div key={i} className="p-3 bg-red-900/10 border border-red-500/20 rounded-lg">
              <div className="text-red-400 font-medium">{item.mistake}</div>
              <div className="text-slate-400 text-sm mt-1">→ {item.why}</div>
            </div>
          ))}
        </div>
      </Card>

      <Card title="📚 Principes de Taleb appliqués" accent="purple">
        <div className="space-y-3">
          {DATA.warStrategy.talebPrinciples.map((item: any, i: number) => (
            <div key={i} className="p-4 bg-purple-900/10 border border-purple-500/20 rounded-lg">
              <div className="text-purple-400 font-bold text-lg mb-2">{item.principle}</div>
              <div className="text-slate-300 text-sm">{item.application}</div>
            </div>
          ))}
        </div>
      </Card>
    </div>
  );
};
