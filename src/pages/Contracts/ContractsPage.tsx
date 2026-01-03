import { DATA } from '../../data';
import { Badge } from '../../components/Badge';
import { Card } from '../../components/Card';

const ContractsPage = () => (
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

export default ContractsPage;
