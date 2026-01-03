import { DATA } from '../../data';
import { Badge } from '../../components/Badge';
import { Card } from '../../components/Card';
import { StatCard } from '../../components/StatCard';

const DashboardPage = () => (
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

export default DashboardPage;
