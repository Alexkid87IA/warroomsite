import { DATA } from '../../data';
import { Badge } from '../../components/Badge';
import { Card } from '../../components/Card';
import { StatCard } from '../../components/StatCard';

const DashboardPage = () => (
  <div className="space-y-6">
    <div className="bg-gradient-to-r from-amber-900/30 via-amber-800/20 to-transparent border border-amber-500/30 rounded-xl p-5">
      <div className="flex items-start gap-4">
        <div className="w-12 h-12 bg-amber-500/20 rounded-lg flex items-center justify-center text-2xl">⚔️</div>
        <div className="flex-1">
          <div className="text-amber-300 font-semibold text-lg">SITUATION ACTUELLE — 16 janvier 2026</div>
          <div className="text-slate-300 mt-2">Lettre offensive envoyée le 16 janvier 2026. Mise en demeure formelle avec délais : 15 jours pour documents et transfert des actifs, 30 jours pour position sur réparation du préjudice. Contre-créance ADN notifiée : 1 247 683 €.</div>
          <div className="mt-3 flex flex-wrap gap-2">
            <Badge type="invoked">Lettre envoyée 16/01</Badge>
            <Badge type="pending">Délai 15j : ~31 janvier</Badge>
            <Badge type="pending">Délai 30j : ~15 février</Badge>
            <Badge type="critical">Contre-créance notifiée</Badge>
          </div>
        </div>
      </div>
    </div>

    <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
      <StatCard label="Créance CC alléguée" value="~142 000 €" type="danger" />
      <StatCard label="Contre-créance ADN" value="1 247 683 €" type="success" />
      <StatCard label="Déjà payé par ADN" value="~70 000 €" sublabel="Bonne foi démontrée" type="info" />
      <StatCard label="Mois d'inaction CC" value="6+" sublabel="Depuis juillet 2025" type="warning" />
    </div>

    <Card title="📅 Prochaines étapes" accent="blue">
      <div className="space-y-3">
        {[
          { date: "16 JAN", action: "Lettre offensive envoyée", instruction: "Mise en demeure avec délais 15j/30j", status: "done" },
          { date: "~31 JAN", action: "Délai 15 jours expire", instruction: "Documents + Transfert Buzzly/VoyagerLoin", status: "now" },
          { date: "~15 FÉV", action: "Délai 30 jours expire", instruction: "Position formelle sur réparation préjudice", status: "upcoming" },
          { date: "APRÈS", action: "Si silence ou refus CC", instruction: "Communication publique + Plainte pénale + Arbitrage", status: "upcoming" }
        ].map((item, i) => (
          <div key={i} className={`flex items-center gap-4 p-3 rounded-lg ${
            item.status === 'now' ? 'bg-cyan-500/10 border border-cyan-500/30' :
            item.status === 'done' ? 'bg-green-500/10 border border-green-500/30' : 'bg-slate-800/30'
          }`}>
            <div className="w-20 text-xs font-mono text-slate-400">{item.date}</div>
            <div className="flex-1">
              <div className="text-slate-200 font-medium">{item.action}</div>
              <div className="text-slate-400 text-sm">{item.instruction}</div>
            </div>
            <Badge type={item.status}>{item.status === 'now' ? 'EN COURS' : item.status === 'done' ? 'FAIT' : 'À venir'}</Badge>
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
