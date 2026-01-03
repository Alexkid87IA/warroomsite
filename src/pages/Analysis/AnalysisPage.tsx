import { DATA } from '../../data';
import { Badge } from '../../components/Badge';
import { Card } from '../../components/Card';

const AnalysisPage = () => (
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

export default AnalysisPage;
