import { DATA } from '../../data';
import { Badge } from '../../components/Badge';
import { Card } from '../../components/Card';

const NeutralLensPage = () => (
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

export default NeutralLensPage;
