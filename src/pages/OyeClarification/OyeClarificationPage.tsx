import { oyeClarificationData } from './data';
import { Card } from '../../components/Card';
import {
  AlertTriangle,
  FileText,
  Shield,
  TrendingDown,
  AlertCircle,
  CheckCircle,
  X,
  Check,
  Hash,
  Building2,
  Calendar,
  MessageSquare
} from 'lucide-react';

const OyeClarificationPage = () => {
  const data = oyeClarificationData;

  const strengthColors = {
    devastating: 'bg-red-500/20 border-red-500 text-red-300',
    very_strong: 'bg-orange-500/20 border-orange-500 text-orange-300',
    strong: 'bg-yellow-500/20 border-yellow-500 text-yellow-300'
  };

  const strengthLabels = {
    devastating: '💥 DÉVASTATRICE',
    very_strong: '🔥 TRÈS FORTE',
    strong: '✓ FORTE'
  };

  return (
    <div className="space-y-8">
      <div className="bg-gradient-to-r from-red-900/40 via-orange-900/30 to-yellow-900/20 border-2 border-red-500/50 rounded-xl p-8">
        <div className="flex items-center gap-3 mb-3">
          <AlertTriangle className="w-10 h-10 text-red-400" />
          <div className="text-3xl font-bold text-red-300">{data.title}</div>
        </div>
        <div className="text-lg text-slate-300">{data.subtitle}</div>
      </div>

      <Card title="1. RÉSUMÉ EXÉCUTIF" accent="red">
        <div className="space-y-4">
          <div className="bg-red-900/20 border border-red-500/30 rounded-lg p-4">
            <div className="text-red-300 font-bold mb-2">FAIT</div>
            <div className="text-slate-200">{data.executiveSummary.fact}</div>
          </div>
          <div className="bg-orange-900/20 border border-orange-500/30 rounded-lg p-4">
            <div className="text-orange-300 font-bold mb-2">CAUSE PROBABLE</div>
            <div className="text-slate-200">{data.executiveSummary.probableCause}</div>
          </div>
          <div className="bg-amber-900/20 border border-amber-500/30 rounded-lg p-4">
            <div className="text-amber-300 font-bold mb-2">INACTION</div>
            <div className="text-slate-200">{data.executiveSummary.inaction}</div>
          </div>
          <div className="bg-red-900/20 border border-red-500/30 rounded-lg p-4">
            <div className="text-red-300 font-bold mb-2">AVEU</div>
            <div className="text-slate-200 italic">"{data.executiveSummary.admission}"</div>
          </div>
          <div className="bg-purple-900/20 border border-purple-500/30 rounded-lg p-4">
            <div className="text-purple-300 font-bold mb-2">PRÉJUDICE ESTIMÉ</div>
            <div className="text-white text-2xl font-bold">{data.executiveSummary.estimatedDamage}</div>
          </div>
          <div className="bg-blue-900/20 border border-blue-500/30 rounded-lg p-4">
            <div className="text-blue-300 font-bold mb-2">POSITION JURIDIQUE</div>
            <div className="text-slate-200">{data.executiveSummary.legalPosition}</div>
          </div>
        </div>
      </Card>

      <Card title="2. FICHE D'IDENTITÉ — PAGE OYE" accent="blue">
        <div className="space-y-4">
          <div className="grid md:grid-cols-2 gap-4">
            <div className="bg-slate-800/30 rounded-lg p-4">
              <div className="text-slate-400 text-sm mb-1">Plateforme</div>
              <div className="text-white font-bold">{data.identity.platform}</div>
            </div>
            <div className="bg-slate-800/30 rounded-lg p-4">
              <div className="text-slate-400 text-sm mb-1">Nom</div>
              <div className="text-white font-bold text-xl">{data.identity.name}</div>
            </div>
            <div className="bg-slate-800/30 rounded-lg p-4">
              <div className="text-slate-400 text-sm mb-1">Followers</div>
              <div className="text-cyan-400 font-bold text-xl">{data.identity.followers}</div>
            </div>
            <div className="bg-slate-800/30 rounded-lg p-4">
              <div className="text-slate-400 text-sm mb-1">Audience</div>
              <div className="text-white">{data.identity.audience}</div>
            </div>
            <div className="bg-slate-800/30 rounded-lg p-4">
              <div className="text-slate-400 text-sm mb-1">Revenus mensuels</div>
              <div className="text-green-400 font-bold">{data.identity.monthlyRevenue}</div>
            </div>
            <div className="bg-slate-800/30 rounded-lg p-4">
              <div className="text-slate-400 text-sm mb-1">Part des revenus ADN</div>
              <div className="text-white">{data.identity.revenueShare}</div>
            </div>
            <div className="bg-slate-800/30 rounded-lg p-4">
              <div className="text-slate-400 text-sm mb-1">Contenu</div>
              <div className="text-white">{data.identity.content}</div>
            </div>
            <div className="bg-red-900/30 rounded-lg p-4 border border-red-500/50">
              <div className="text-red-300 text-sm mb-1">Statut actuel</div>
              <div className="text-red-200 font-bold">{data.identity.currentStatus}</div>
            </div>
          </div>

          <div className="mt-6">
            <div className="font-bold text-white mb-3 flex items-center gap-2">
              <Hash className="w-5 h-5 text-cyan-400" />
              Identifiants techniques
            </div>
            <div className="space-y-2">
              {data.pageIds.map((pageId, i) => (
                <div
                  key={i}
                  className={`flex items-center justify-between p-4 rounded-lg ${
                    pageId.status.includes('EXISTE ENCORE')
                      ? 'bg-red-900/30 border border-red-500/50'
                      : 'bg-slate-800/30 border border-slate-700'
                  }`}
                >
                  <div className="flex-1">
                    <div className="font-mono text-white font-bold mb-1">{pageId.id}</div>
                    <div className="text-slate-400 text-sm">{pageId.source}</div>
                  </div>
                  <div className={`px-3 py-1 rounded text-sm font-medium ${
                    pageId.status.includes('EXISTE ENCORE')
                      ? 'bg-red-500/20 text-red-300 border border-red-500/50'
                      : 'bg-slate-700 text-slate-300'
                  }`}>
                    {pageId.status}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </Card>

      <Card title="3. QUI ÉTAIT RESPONSABLE ?" accent="purple">
        <div className="space-y-6">
          <div>
            <div className="flex items-center gap-2 mb-3">
              <Building2 className="w-5 h-5 text-purple-400" />
              <div className="font-bold text-white text-lg">Business Manager</div>
            </div>
            <div className="grid md:grid-cols-2 gap-3">
              <div className="bg-slate-800/30 rounded-lg p-3">
                <div className="text-slate-400 text-sm">ID</div>
                <div className="text-white font-mono">{data.businessManager.id}</div>
              </div>
              <div className="bg-slate-800/30 rounded-lg p-3">
                <div className="text-slate-400 text-sm">Propriétaire</div>
                <div className="text-white font-bold">{data.businessManager.owner}</div>
              </div>
              <div className="bg-slate-800/30 rounded-lg p-3">
                <div className="text-slate-400 text-sm">Super Admin</div>
                <div className="text-white font-bold">{data.businessManager.superAdmin}</div>
              </div>
              <div className="bg-slate-800/30 rounded-lg p-3">
                <div className="text-slate-400 text-sm">Email du Super Admin</div>
                <div className="text-red-400 font-mono">{data.businessManager.superAdminEmail}</div>
              </div>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-4">
            <div className="bg-red-900/20 border border-red-500/30 rounded-lg p-4">
              <div className="font-bold text-red-300 mb-3 flex items-center gap-2">
                <Shield className="w-5 h-5" />
                Copyright Capital contrôlait
              </div>
              <ul className="space-y-2">
                {data.pageAccess.ccControl.map((item, i) => (
                  <li key={i} className="flex items-start gap-2">
                    <Check className="w-5 h-5 text-red-400 flex-shrink-0 mt-0.5" />
                    <span className="text-slate-200">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="bg-slate-800/30 border border-slate-600 rounded-lg p-4">
              <div className="font-bold text-slate-300 mb-3 flex items-center gap-2">
                <X className="w-5 h-5" />
                ADN avait seulement
              </div>
              <ul className="space-y-2">
                {data.pageAccess.adnAccess.map((item, i) => (
                  <li key={i} className="flex items-start gap-2">
                    <X className="w-5 h-5 text-slate-500 flex-shrink-0 mt-0.5" />
                    <span className="text-slate-300">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="bg-amber-900/20 border-2 border-amber-500/50 rounded-lg p-5">
            <div className="font-bold text-amber-300 mb-2">Conclusion</div>
            <div className="text-white text-lg">{data.pageAccess.conclusion}</div>
          </div>

          <div className="bg-blue-900/20 border border-blue-500/30 rounded-lg p-4">
            <div className="font-bold text-blue-300 mb-2">Ce que dit Meta</div>
            <div className="text-slate-200 italic">"{data.metaStatement}"</div>
          </div>
        </div>
      </Card>

      <Card title="4. CHRONOLOGIE DE L'AFFAIRE OYE" accent="cyan">
        <div className="space-y-2">
          {data.timeline.map((event, i) => (
            <div
              key={i}
              className={`flex gap-4 p-4 rounded-lg ${
                event.event.includes('🔴') || event.event.includes('⚠️')
                  ? 'bg-red-900/20 border border-red-500/30'
                  : event.event.includes('⛔') || event.event.includes('📍')
                  ? 'bg-orange-900/20 border border-orange-500/30'
                  : 'bg-slate-800/30 border border-slate-700'
              }`}
            >
              <div className="flex-shrink-0">
                <Calendar className="w-5 h-5 text-cyan-400" />
              </div>
              <div className="flex-1">
                <div className="font-bold text-cyan-400 mb-1">{event.date}</div>
                <div className="text-slate-200">{event.event}</div>
              </div>
            </div>
          ))}
        </div>
      </Card>

      <Card title="5. PREUVES SPÉCIFIQUES À OYE" accent="amber">
        <div className="space-y-3">
          {data.evidence.map((evidence) => (
            <div
              key={evidence.id}
              className={`flex gap-4 p-4 rounded-lg border ${strengthColors[evidence.strength]}`}
            >
              <div className="flex-shrink-0">
                <FileText className="w-6 h-6" />
              </div>
              <div className="flex-1">
                <div className="flex items-center gap-3 mb-2">
                  <span className="text-white font-bold">#{evidence.id}</span>
                  <span className="text-xs px-2 py-1 rounded bg-slate-900/50 font-medium">
                    {strengthLabels[evidence.strength]}
                  </span>
                </div>
                <div className="text-white font-medium mb-1">{evidence.proof}</div>
                <div className="text-sm opacity-90">Ce que ça prouve: {evidence.proves}</div>
              </div>
            </div>
          ))}
        </div>
      </Card>

      <Card title="6. CHIFFRAGE DU PRÉJUDICE" accent="red">
        <div className="space-y-4">
          <div className="bg-slate-800/30 rounded-lg p-4 mb-4">
            <div className="text-slate-400 text-sm mb-3">Hypothèses de calcul</div>
            <ul className="space-y-1 text-slate-300 text-sm">
              <li>• Revenu mensuel moyen : 9 500 € (milieu de fourchette 4k-15k)</li>
              <li>• Valeur par follower : 0,50 € (standard industrie)</li>
              <li>• Coût moyen par vidéo : 500 € (production + valeur catalogue)</li>
            </ul>
          </div>

          {data.damages.map((damage, i) => (
            <div key={i} className="bg-slate-800/30 rounded-lg p-4 border border-slate-700">
              <div className="flex items-center justify-between mb-2">
                <div className="text-white font-medium">{damage.item}</div>
                <div className="text-red-400 text-xl font-bold">{damage.amount}</div>
              </div>
              {damage.calculation && (
                <div className="text-slate-400 text-sm">{damage.calculation}</div>
              )}
            </div>
          ))}

          <div className="bg-gradient-to-r from-red-900/40 to-orange-900/40 border-2 border-red-500 rounded-xl p-6 text-center mt-6">
            <div className="text-red-300 text-sm mb-2">TOTAL ESTIMÉ</div>
            <div className="text-white text-4xl font-bold">{data.totalEstimate}</div>
            <div className="text-slate-300 text-sm mt-2">selon la méthode de valorisation</div>
          </div>
        </div>
      </Card>

      <Card title="7. VALEUR DE LA PAGE — AVANT / APRÈS" accent="purple">
        <div className="grid md:grid-cols-2 gap-6">
          <div className="bg-green-900/20 border border-green-500/30 rounded-lg p-5">
            <div className="font-bold text-green-300 text-lg mb-4">AVANT le piratage</div>
            <div className="space-y-3">
              <div>
                <div className="text-slate-400 text-sm">Followers</div>
                <div className="text-white">{data.beforeAfter.before.followers}</div>
              </div>
              <div>
                <div className="text-slate-400 text-sm">Revenus</div>
                <div className="text-green-400 font-bold">{data.beforeAfter.before.revenue}</div>
              </div>
              <div>
                <div className="text-slate-400 text-sm">Contenu</div>
                <div className="text-white">{data.beforeAfter.before.content}</div>
              </div>
              <div>
                <div className="text-slate-400 text-sm">Monétisation</div>
                <div className="text-white">{data.beforeAfter.before.monetization}</div>
              </div>
              <div>
                <div className="text-slate-400 text-sm">Réputation</div>
                <div className="text-white">{data.beforeAfter.before.reputation}</div>
              </div>
            </div>
          </div>

          <div className="bg-red-900/20 border border-red-500/30 rounded-lg p-5">
            <div className="font-bold text-red-300 text-lg mb-4">APRÈS récupération éventuelle</div>
            <div className="space-y-3">
              <div>
                <div className="text-slate-400 text-sm">Followers</div>
                <div className="text-red-300">{data.beforeAfter.after.followers}</div>
              </div>
              <div>
                <div className="text-slate-400 text-sm">Engagement</div>
                <div className="text-red-300 font-bold">{data.beforeAfter.after.engagement}</div>
              </div>
              <div>
                <div className="text-slate-400 text-sm">Revenus</div>
                <div className="text-red-400 font-bold">{data.beforeAfter.after.revenue}</div>
              </div>
              <div>
                <div className="text-slate-400 text-sm">Contenu</div>
                <div className="text-red-300">{data.beforeAfter.after.content}</div>
              </div>
              <div>
                <div className="text-slate-400 text-sm">Monétisation</div>
                <div className="text-red-300">{data.beforeAfter.after.monetization}</div>
              </div>
              <div>
                <div className="text-slate-400 text-sm">Réputation</div>
                <div className="text-red-300">{data.beforeAfter.after.reputation}</div>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-red-950/50 border-2 border-red-500 rounded-lg p-5 mt-6 text-center">
          <div className="text-red-300 font-bold text-xl">Conclusion</div>
          <div className="text-white text-lg mt-2">
            Même récupérée, la page n'a PLUS DE VALEUR. Le préjudice est IRRÉVERSIBLE.
          </div>
        </div>
      </Card>

      <Card title="8. PRINCIPE FONDAMENTAL" accent="red">
        <div className="bg-gradient-to-r from-red-900/30 to-orange-900/30 border-2 border-red-500/50 rounded-xl p-6">
          <div className="text-red-300 font-bold text-2xl mb-4">{data.fundamentalPrinciple.title}</div>
          <div className="text-white text-lg mb-6">{data.fundamentalPrinciple.statement}</div>

          <div className="font-bold text-red-300 mb-3">Liste des préjudices qui restent dus :</div>
          <div className="grid md:grid-cols-2 gap-3">
            {data.fundamentalPrinciple.remainingDamages.map((damage, i) => (
              <div key={i} className="flex items-center gap-3 bg-red-950/30 p-3 rounded-lg">
                <TrendingDown className="w-5 h-5 text-red-400 flex-shrink-0" />
                <div className="flex-1">
                  <div className="text-slate-200">{damage}</div>
                  <div className="text-red-400 text-xs font-bold">RESTE DÛ</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </Card>

      <Card title="9. ANALOGIE POUR UN JUGE" accent="cyan">
        <div className="text-slate-300 italic text-xl bg-cyan-900/20 p-8 rounded-lg border border-cyan-500/30 text-center">
          "{data.analogy}"
        </div>
      </Card>

      <Card title="10. COMMENT FORMULER" accent="emerald">
        <div className="space-y-5">
          <div className="bg-red-900/20 border border-red-500/30 rounded-lg p-5">
            <div className="flex items-center gap-2 mb-3">
              <X className="w-6 h-6 text-red-400" />
              <span className="text-red-300 font-bold text-lg">MAUVAISE formulation</span>
            </div>
            <div className="text-slate-200 italic text-lg mb-3">"{data.formulation.bad.text}"</div>
            <div className="text-red-400 text-sm">
              <span className="font-bold">Risque:</span> {data.formulation.bad.risk}
            </div>
          </div>

          <div className="bg-emerald-900/20 border border-emerald-500/30 rounded-lg p-5">
            <div className="flex items-center gap-2 mb-3">
              <CheckCircle className="w-6 h-6 text-emerald-400" />
              <span className="text-emerald-300 font-bold text-lg">BONNE formulation</span>
            </div>
            <div className="text-slate-200 italic text-lg mb-3">"{data.formulation.good.text}"</div>
            <div className="text-emerald-400 text-sm">
              <span className="font-bold">Avantage:</span> {data.formulation.good.advantage}
            </div>
          </div>
        </div>
      </Card>

      <Card title="11. SI CC PRÉTEND RÉCUPÉRER LA PAGE" accent="orange">
        <div className="space-y-4">
          <div className="font-bold text-orange-300 text-lg mb-3">{data.recoveryScenario.title}</div>

          <div className="space-y-2">
            {data.recoveryScenario.actions.map((action, i) => (
              <div key={i} className="flex items-start gap-3 bg-orange-900/20 p-4 rounded-lg border border-orange-500/30">
                <div className="w-6 h-6 bg-orange-500/30 rounded flex items-center justify-center text-orange-300 font-bold flex-shrink-0">
                  {i + 1}
                </div>
                <div className="text-slate-200">{action}</div>
              </div>
            ))}
          </div>

          <div className="bg-orange-950/50 border border-orange-500 rounded-lg p-4 mt-4">
            <div className="text-orange-300 font-bold mb-2">Note importante</div>
            <div className="text-white">{data.recoveryScenario.note}</div>
          </div>
        </div>
      </Card>

      <Card title="12. SCÉNARIOS DE RÉPONSE" accent="blue">
        <div className="space-y-3">
          {data.responseScenarios.map((scenario, i) => (
            <div key={i} className="bg-slate-800/30 border border-slate-700 rounded-lg p-4">
              <div className="flex items-start gap-3">
                <MessageSquare className="w-5 h-5 text-blue-400 flex-shrink-0 mt-1" />
                <div className="flex-1">
                  <div className="text-blue-300 font-bold mb-2">{scenario.question}</div>
                  <div className="text-emerald-400 italic">→ "{scenario.answer}"</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </Card>

      <Card title="13. RÉSUMÉ FINAL — 3 QUESTIONS CLÉS" accent="purple">
        <div className="space-y-4">
          <div className="bg-slate-800/30 rounded-lg p-5 border border-slate-700">
            <div className="font-bold text-white mb-3 text-lg">
              Demander la récupération nous nuit-il ?
            </div>
            <div className="flex items-center gap-3 mb-2">
              <div className="text-3xl font-bold text-emerald-400">{data.finalSummary.doesRequestingRecoveryHurtUs.answer}</div>
            </div>
            <div className="text-slate-300">{data.finalSummary.doesRequestingRecoveryHurtUs.explanation}</div>
          </div>

          <div className="bg-slate-800/30 rounded-lg p-5 border border-slate-700">
            <div className="font-bold text-white mb-3 text-lg">
              Peut-on attaquer même si la page est récupérée ?
            </div>
            <div className="flex items-center gap-3 mb-2">
              <div className="text-3xl font-bold text-emerald-400">{data.finalSummary.canWeAttackIfRecovered.answer}</div>
            </div>
            <div className="text-slate-300">{data.finalSummary.canWeAttackIfRecovered.explanation}</div>
          </div>

          <div className="bg-purple-900/20 rounded-lg p-5 border-2 border-purple-500/50">
            <div className="font-bold text-white mb-3 text-lg">
              Quelle stratégie adopter ?
            </div>
            <div className="flex items-center gap-3 mb-2">
              <div className="text-3xl font-bold text-purple-300">{data.finalSummary.whatStrategy.answer}</div>
            </div>
            <div className="text-slate-300">{data.finalSummary.whatStrategy.explanation}</div>
          </div>
        </div>
      </Card>

      <div className="bg-gradient-to-r from-red-950 via-orange-950 to-red-950 border-2 border-red-500 rounded-xl p-8 text-center">
        <div className="flex items-center justify-center gap-3 mb-4">
          <AlertCircle className="w-10 h-10 text-red-400" />
          <div className="text-3xl font-bold text-red-300">STRATÉGIE CLAIRE</div>
        </div>
        <div className="text-xl text-white mb-4">
          CONSTATER l'inaction de Copyright Capital
        </div>
        <div className="text-lg text-red-200">
          Le préjudice reste dû indépendamment de toute récupération éventuelle
        </div>
      </div>
    </div>
  );
};

export default OyeClarificationPage;
