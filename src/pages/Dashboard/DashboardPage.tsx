import { DATA } from '../../data';
import { Badge } from '../../components/Badge';
import { Card } from '../../components/Card';
import { StatCard } from '../../components/StatCard';
import { useCoreDataStore, formatCurrency, formatCurrencyShort } from '../../stores';
import { AlertHeader } from '../../components/ui';

const DashboardPage = () => {
  const { financial, lastUpdate } = useCoreDataStore();

  return (
    <div className="space-y-6">
      <AlertHeader variant="amber" icon="⚔️">
        <div className="text-amber-300 font-semibold text-lg">SITUATION ACTUELLE — {lastUpdate}</div>
        <div className="text-slate-300 mt-2">
          Plainte pénale DÉPOSÉE (2 février). Signalement DDPP envoyé. CC non enregistré FINMA. Lettre nucléaire CC du 26/01 : BCO pour 1$, 630K€ de pénalités. Avocat suisse et signalement FINMA en priorité cette semaine.
        </div>
        <div className="mt-3 flex flex-wrap gap-2">
          <Badge type="done">Lettre 16/01</Badge>
          <Badge type="done">Lettre 30/01 (LRAR)</Badge>
          <Badge type="done">Plainte pénale 2/02</Badge>
          <Badge type="done">Signalement DDPP</Badge>
          <Badge type="critical">FINMA : CC non enregistré</Badge>
          <Badge type="critical">Avocat suisse : cette semaine</Badge>
        </div>
      </AlertHeader>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        <StatCard
          label="Créance CC alléguée"
          value={`~${formatCurrency(financial.debt)}`}
          type="danger"
        />
        <StatCard
          label="Contre-créance ADN"
          value={`+${formatCurrencyShort(financial.counterClaimMin)}`}
          type="success"
        />
        <StatCard
          label="Déjà payé par ADN"
          value={`~${formatCurrency(financial.alreadyPaid)}`}
          sublabel="Bonne foi démontrée"
          type="info"
        />
        <StatCard
          label="Mois d'inaction CC"
          value={`${financial.monthsInaction}+`}
          sublabel="Depuis juillet 2025"
          type="warning"
        />
      </div>

      <Card title="📅 Prochaines étapes" accent="blue">
        <div className="space-y-3">
          {[
            { date: "16 JAN", action: "Lettre offensive envoyée", instruction: "Mise en demeure avec délais 15j/30j + contre-créance +1,2M€", status: "done" },
            { date: "26 JAN", action: "Lettre nucléaire CC", instruction: "BCO pour 1$ + 630K€ pénalités + insinuation piratage ADN", status: "done" },
            { date: "30 JAN", action: "Réponse ADN (LRAR)", instruction: "Renforcement Art. 82, 97, 100 CO + Art. 2 CC + Art. 163 al. 3 CO", status: "done" },
            { date: "~31 JAN", action: "Délai 15j EXPIRÉ", instruction: "CC EN DÉFAUT — Aucun document, aucun transfert", status: "done" },
            { date: "2 FÉV", action: "Plainte pénale déposée", instruction: "Art. 323-1 + 323-3 + 314-1 CP — Tribunal Marseille", status: "done" },
            { date: "2 FÉV", action: "Signalement DDPP", instruction: "Art. L442-1 C.com — Pratiques abusives B2B", status: "done" },
            { date: "3-7 FÉV", action: "FINMA + Avocat suisse", instruction: "CC non enregistré FINMA + mandater avocat Genève", status: "now" },
            { date: "~9 FÉV", action: "Article Origines Media", instruction: "Communication publique (APRÈS avocat mandaté)", status: "upcoming" },
            { date: "~15 FÉV", action: "Délai 30 jours expire", instruction: "Position formelle sur réparation préjudice", status: "upcoming" },
            { date: "MARS+", action: "Arbitrage ICC si nécessaire", instruction: "Contre-créance +1,2M€ — Espérance CC = -360K€", status: "upcoming" }
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
};

export default DashboardPage;
