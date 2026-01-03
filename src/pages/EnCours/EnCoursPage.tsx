import { Target, Brain, FileText, TreeDeciduous, BookOpen, AlertTriangle, CheckCircle2, Clock, Zap } from 'lucide-react';
import { Card, Badge } from '../../components';
import {
  prochainActionData,
  ouEnEstOnData,
  strategieData,
  phases,
  arbreDecision,
  journalBord
} from './data';

function ProchainActionHeader() {
  return (
    <div className="bg-gradient-to-r from-emerald-900/40 via-cyan-900/30 to-blue-900/20 border-2 border-emerald-500/50 rounded-xl p-6 shadow-lg shadow-emerald-500/10 mb-8">
      <div className="flex items-start gap-4">
        <div className="bg-gradient-to-br from-emerald-500 to-cyan-500 p-3 rounded-xl">
          <Target className="w-8 h-8 text-white" />
        </div>
        <div className="flex-1">
          <div className="text-xs text-emerald-400 uppercase tracking-wider mb-2">
            Prochaine action immédiate
          </div>
          <div className="text-3xl font-bold text-white mb-2">
            {prochainActionData.action}
          </div>
          <div className="text-slate-300 mb-4">
            Jusqu'au <span className="text-cyan-300 font-semibold">{prochainActionData.date}</span>
          </div>

          <div className="bg-black/30 rounded-lg p-4 space-y-2">
            <p className="text-slate-200">
              <span className="font-semibold text-emerald-400">Pourquoi ?</span> {prochainActionData.pourquoi}
            </p>
            <p className="text-amber-300 flex items-start gap-2">
              <AlertTriangle className="w-4 h-4 mt-1 flex-shrink-0" />
              <span><span className="font-semibold">Exception :</span> {prochainActionData.exception}</span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

function OuEnEstOnSection() {
  return (
    <Card title="📍 1. OÙ EN EST-ON ?" accent="cyan">
      <div className="space-y-6">
        <div className="bg-cyan-900/20 border border-cyan-500/30 rounded-lg p-4">
          <p className="text-cyan-100 text-lg leading-relaxed">
            {ouEnEstOnData.resume}
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-4">
          <div className="bg-blue-900/20 border border-blue-500/30 rounded-lg p-4">
            <div className="text-blue-400 text-xs uppercase tracking-wider mb-3">
              Notre dernière action
            </div>
            <div className="space-y-2">
              <div className="font-semibold text-white">{ouEnEstOnData.notreAction.quoi}</div>
              <div className="text-slate-300 text-sm">{ouEnEstOnData.notreAction.contenu}</div>
            </div>
          </div>

          <div className="bg-red-900/20 border border-red-500/30 rounded-lg p-4">
            <div className="text-red-400 text-xs uppercase tracking-wider mb-3">
              Leur dernière action
            </div>
            <div className="space-y-2">
              <div className="font-semibold text-white">{ouEnEstOnData.leurAction.quoi}</div>
              <div className="text-slate-300 text-sm">{ouEnEstOnData.leurAction.contenu}</div>
            </div>
          </div>
        </div>

        <div>
          <div className="text-xs text-slate-500 uppercase tracking-wider mb-3">
            Délais en cours
          </div>
          <div className="flex flex-wrap gap-2">
            {ouEnEstOnData.delais.map((delai, index) => {
              const colorClasses = {
                red: 'bg-red-900/30 border-red-500/50 text-red-200',
                amber: 'bg-amber-900/30 border-amber-500/50 text-amber-200',
                blue: 'bg-blue-900/30 border-blue-500/50 text-blue-200'
              };

              return (
                <div
                  key={index}
                  className={`px-3 py-2 rounded-lg border ${colorClasses[delai.type]} text-sm`}
                >
                  <div className="font-semibold">{delai.titre}</div>
                  <div className="text-xs opacity-90">{delai.statut}</div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </Card>
  );
}

function StrategieSection() {
  return (
    <Card title="🧠 2. POURQUOI CETTE STRATÉGIE ?" accent="purple">
      <div className="space-y-6">
        <div className="flex items-center justify-between flex-wrap gap-3">
          <h3 className="text-2xl font-bold text-purple-300">{strategieData.nom}</h3>
          <Badge type="active">{strategieData.periode}</Badge>
        </div>

        <div className="bg-purple-900/20 border border-purple-500/30 rounded-lg p-4">
          <div className="text-purple-400 text-xs uppercase tracking-wider mb-3">
            Pourquoi le silence fonctionne
          </div>
          <div className="space-y-2">
            {strategieData.pourquoiSilence.map((point, index) => (
              <div key={index} className="flex items-start gap-2 text-slate-200">
                <span className="text-purple-400 mt-1">→</span>
                <span>{point}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-emerald-900/20 border border-emerald-500/30 rounded-lg p-4">
          <div className="text-emerald-400 text-xs uppercase tracking-wider mb-3">
            Ce que le silence communique
          </div>
          <p className="text-lg italic text-emerald-100">
            "{strategieData.message}"
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-4">
          {strategieData.risques.map((risque, index) => (
            <div key={index} className="bg-slate-800/30 border border-slate-700/30 rounded-lg p-4">
              <div className="flex items-start gap-2 mb-2">
                <AlertTriangle className="w-5 h-5 text-amber-400 flex-shrink-0 mt-1" />
                <div className="font-semibold text-white">{risque.risque}</div>
              </div>
              <div className="text-amber-300 text-sm mb-2">
                Probabilité: {risque.probabilite}
              </div>
              <div className="text-slate-300 text-sm flex items-start gap-2">
                <span className="text-emerald-400">→</span>
                <span>{risque.reponse}</span>
              </div>
            </div>
          ))}
        </div>

        <div className="bg-red-900/20 border border-red-500/30 rounded-lg p-4">
          <div className="text-red-400 text-xs uppercase tracking-wider mb-3 flex items-center gap-2">
            <Zap className="w-4 h-4" />
            On change de stratégie si...
          </div>
          <div className="space-y-2">
            {strategieData.changementSi.map((condition, index) => (
              <div key={index} className="flex items-start gap-2 text-slate-200">
                <span className="text-red-400">•</span>
                <span>{condition}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </Card>
  );
}

function PhaseCard({ phase }: { phase: typeof phases[0] }) {
  const statusColors = {
    'EN COURS': 'bg-cyan-500/30 text-cyan-200 border-cyan-400/50',
    'PLANIFIÉ': 'bg-purple-500/20 text-purple-300 border-purple-500/50',
    'EN RÉSERVE': 'bg-slate-600/20 text-slate-400 border-slate-500/30',
    'OBJECTIF': 'bg-emerald-500/20 text-emerald-300 border-emerald-500/50'
  };

  const headerColors = {
    cyan: 'bg-cyan-900/40 border-cyan-500/50',
    purple: 'bg-purple-900/40 border-purple-500/50',
    red: 'bg-red-900/40 border-red-500/50',
    emerald: 'bg-emerald-900/40 border-emerald-500/50'
  };

  return (
    <div className={`rounded-xl overflow-hidden border ${phase.statut === 'EN COURS' ? 'shadow-lg shadow-cyan-500/20' : ''}`}>
      <div className={`${headerColors[phase.couleur]} border-b border-slate-700/50 p-4`}>
        <div className="flex items-center justify-between flex-wrap gap-3">
          <div className="flex items-center gap-4">
            <div className="bg-slate-800/50 rounded-lg w-12 h-12 flex items-center justify-center text-2xl font-bold text-white">
              {phase.numero}
            </div>
            <div>
              <div className="text-xl font-bold text-white">{phase.nom}</div>
              <div className="text-sm text-slate-300">{phase.periode}</div>
            </div>
          </div>
          <Badge type={phase.statut === 'EN COURS' ? 'active' : 'default'} className={statusColors[phase.statut]}>
            {phase.statut}
          </Badge>
        </div>
      </div>

      <div className="bg-slate-900/40 p-4 space-y-4">
        <div className="border-l-4 border-cyan-500 pl-4">
          <div className="text-cyan-400 text-xs uppercase tracking-wider mb-2">Quoi</div>
          <p className="text-slate-200">{phase.quoi}</p>
        </div>

        <div className="border-l-4 border-purple-500 pl-4">
          <div className="text-purple-400 text-xs uppercase tracking-wider mb-2">Pourquoi</div>
          <div className="space-y-1">
            {phase.pourquoi.map((raison, index) => (
              <div key={index} className="flex items-start gap-2 text-slate-200">
                <CheckCircle2 className="w-4 h-4 text-purple-400 flex-shrink-0 mt-1" />
                <span>{raison}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="border-l-4 border-emerald-500 pl-4">
          <div className="text-emerald-400 text-xs uppercase tracking-wider mb-2">Comment</div>
          <div className="space-y-1">
            {phase.comment.map((modalite, index) => (
              <div key={index} className="flex items-start gap-2 text-slate-200">
                <span className="text-emerald-400">→</span>
                <span>{modalite}</span>
              </div>
            ))}
          </div>
        </div>

        {phase.exception && (
          <div className="bg-amber-900/20 border border-amber-500/30 rounded-lg p-3">
            <div className="text-amber-400 text-xs uppercase tracking-wider mb-2">Exception</div>
            <div className="text-sm text-slate-200">
              <div className="mb-1"><span className="font-semibold">Si:</span> {phase.exception.si}</div>
              <div><span className="font-semibold">Alors:</span> {phase.exception.alors}</div>
            </div>
          </div>
        )}

        {'contenu' in phase && phase.contenu && (
          <div className="bg-slate-800/30 border border-slate-700/30 rounded-lg p-3">
            <div className="text-slate-400 text-xs uppercase tracking-wider mb-2">Contenu prévu</div>
            <div className="space-y-2">
              {phase.contenu.map((item, index) => (
                <div key={index} className="text-sm text-slate-300">
                  {item}
                </div>
              ))}
            </div>
          </div>
        )}

        {'condition' in phase && phase.condition && (
          <div className="bg-red-900/20 border border-red-500/30 rounded-lg p-3">
            <div className="text-red-400 text-xs uppercase tracking-wider mb-2">Condition de déclenchement</div>
            <p className="text-sm text-slate-200">{phase.condition}</p>
          </div>
        )}

        {'conditionsMin' in phase && phase.conditionsMin && (
          <div className="bg-emerald-900/20 border border-emerald-500/30 rounded-lg p-3">
            <div className="text-emerald-400 text-xs uppercase tracking-wider mb-2">Conditions minimales</div>
            <div className="space-y-1">
              {phase.conditionsMin.map((condition, index) => (
                <div key={index} className="flex items-start gap-2 text-sm text-slate-200">
                  <span className="text-emerald-400">•</span>
                  <span>{condition}</span>
                </div>
              ))}
            </div>
          </div>
        )}

        {'leviers' in phase && phase.leviers && (
          <div className="bg-amber-900/20 border border-amber-500/30 rounded-lg p-3">
            <div className="text-amber-400 text-xs uppercase tracking-wider mb-2">Leviers de négociation</div>
            <div className="space-y-1">
              {phase.leviers.map((levier, index) => (
                <div key={index} className="flex items-start gap-2 text-sm text-slate-200">
                  <span className="text-amber-400">•</span>
                  <span>{levier}</span>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

function PlanActionSection() {
  return (
    <Card title="📋 3. LE PLAN D'ACTION" accent="blue">
      <div className="space-y-6">
        {phases.map((phase) => (
          <PhaseCard key={phase.numero} phase={phase} />
        ))}
      </div>
    </Card>
  );
}

function ArbreDecisionSection() {
  return (
    <Card title="🌳 4. ARBRE DE DÉCISION — Si CC fait X, alors on fait Y" accent="amber">
      <div className="space-y-4">
        {arbreDecision.map((scenario, index) => (
          <div key={index} className="bg-slate-800/30 border border-slate-700/30 rounded-lg p-4">
            <div className="flex items-start gap-4">
              <div className="text-3xl">{scenario.emoji}</div>
              <div className="flex-1 grid md:grid-cols-2 gap-4">
                <div>
                  <div className="text-amber-500 text-xs uppercase tracking-wider mb-2">
                    Si CC fait
                  </div>
                  <p className="text-slate-200">{scenario.si}</p>
                </div>
                <div>
                  <div className="text-emerald-500 text-xs uppercase tracking-wider mb-2">
                    Alors on fait
                  </div>
                  <p className="text-slate-200">{scenario.alors}</p>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </Card>
  );
}

function JournalBordSection() {
  return (
    <Card title="📓 5. JOURNAL DE BORD" accent="slate">
      <div className="space-y-4">
        {journalBord.map((entree, index) => (
          <div key={index} className="bg-slate-800/30 border border-slate-700/30 rounded-lg p-4">
            <div className="font-mono text-cyan-400 text-sm mb-2">
              {entree.date} — {entree.heure}
            </div>
            <p className="text-slate-200 mb-3">{entree.evenement}</p>
            <div className="bg-purple-900/20 border border-purple-500/30 rounded-lg p-3">
              <div className="text-purple-400 text-xs uppercase tracking-wider mb-1 flex items-center gap-2">
                <span>📌</span>
                <span>Décision</span>
              </div>
              <p className="text-slate-200 text-sm">{entree.decision}</p>
            </div>
          </div>
        ))}

        <div className="bg-slate-900/50 border border-dashed border-slate-700 rounded-lg p-4 text-center text-slate-400 text-sm">
          💡 Ce journal sera mis à jour au fur et à mesure des événements
        </div>
      </div>
    </Card>
  );
}

export default function EnCoursPage() {
  return (
    <div className="space-y-8">
      <ProchainActionHeader />
      <OuEnEstOnSection />
      <StrategieSection />
      <PlanActionSection />
      <ArbreDecisionSection />
      <JournalBordSection />

      <div className="text-center text-slate-500 text-sm pt-8">
        Dernière mise à jour : 29 décembre 2025 — 21h00
      </div>
    </div>
  );
}
