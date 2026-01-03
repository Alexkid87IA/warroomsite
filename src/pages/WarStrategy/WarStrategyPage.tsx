import { useState } from 'react';
import TabNav from '../../shared/components/TabNav';
import { Card, StatCard, Badge } from '../../components';
import { warStrategyData } from './data';

const tabs = [
  { id: 'objective', label: 'Objectif', icon: '🎯' },
  { id: 'why-they-lose', label: 'Pourquoi CC perd', icon: '💀' },
  { id: 'phases', label: 'Plan de bataille', icon: '⚔️' },
  { id: 'messages', label: 'Messages clés', icon: '💬' },
  { id: 'calculation', label: 'Leur calcul', icon: '🧮' },
  { id: 'signals', label: 'Signaux capitulation', icon: '🏳️' },
  { id: 'taleb', label: 'Principes Taleb', icon: '🧠' },
  { id: 'mistakes', label: 'Erreurs à éviter', icon: '🚫' },
];

const WarStrategyPage = () => {
  const [activeTab, setActiveTab] = useState('objective');

  const getColorClasses = (color: string, type: 'bg' | 'border' | 'text' = 'bg') => {
    const colorMap = {
      bg: {
        amber: 'bg-amber-900/20',
        red: 'bg-red-900/20',
        purple: 'bg-purple-900/20',
        emerald: 'bg-emerald-900/20',
        cyan: 'bg-cyan-900/20',
        fuchsia: 'bg-fuchsia-900/20',
        slate: 'bg-slate-900/20',
      },
      border: {
        amber: 'border-amber-500/30',
        red: 'border-red-500/30',
        purple: 'border-purple-500/30',
        emerald: 'border-emerald-500/30',
        cyan: 'border-cyan-500/30',
        fuchsia: 'border-fuchsia-500/30',
        slate: 'border-slate-500/30',
      },
      text: {
        amber: 'text-amber-400',
        red: 'text-red-400',
        purple: 'text-purple-400',
        emerald: 'text-emerald-400',
        cyan: 'text-cyan-400',
        fuchsia: 'text-fuchsia-400',
        slate: 'text-slate-400',
      },
    };
    return colorMap[type][color as keyof typeof colorMap[typeof type]] || '';
  };

  const renderObjective = () => (
    <div className="space-y-6">
      <Card>
        <h3 className="text-xl font-bold text-white mb-2">{warStrategyData.ultimateGoal.title}</h3>
        <p className="text-slate-300 mb-4">{warStrategyData.ultimateGoal.description}</p>

        <div className="space-y-3">
          <h4 className="text-sm font-semibold text-slate-400 uppercase tracking-wider">Objectifs par priorité :</h4>
          {warStrategyData.ultimateGoal.outcomes.map((outcome, idx) => (
            <div key={idx} className="flex items-start gap-3">
              <Badge variant={outcome.priority}>{outcome.priority.toUpperCase()}</Badge>
              <span className="text-slate-300">{outcome.outcome}</span>
            </div>
          ))}
        </div>
      </Card>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {warStrategyData.ultimateGoal.stats.map((stat, idx) => (
          <StatCard key={idx} label={stat.label} value={stat.value} subtext={stat.subtext} />
        ))}
      </div>
    </div>
  );

  const renderWhyTheyLose = () => (
    <div className="space-y-6">
      <div className="bg-slate-800/50 border border-slate-700 rounded-xl p-6">
        <h3 className="text-xl font-bold text-white">{warStrategyData.whyCCLoses.title}</h3>
        <p className="text-slate-400 mt-1">{warStrategyData.whyCCLoses.subtitle}</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {warStrategyData.whyCCLoses.reasons.map((reason, idx) => (
          <Card key={idx} className={`${getColorClasses(reason.color, 'bg')} border ${getColorClasses(reason.color, 'border')}`}>
            <h4 className={`text-lg font-bold ${getColorClasses(reason.color, 'text')} mb-3`}>{reason.category}</h4>
            <ul className="space-y-2">
              {reason.points.map((point, pidx) => (
                <li key={pidx} className="text-slate-300 flex items-start gap-2">
                  <span className="text-slate-500 mt-1">•</span>
                  <span>{point}</span>
                </li>
              ))}
            </ul>
          </Card>
        ))}
      </div>

      <div className="bg-gradient-to-r from-fuchsia-900/30 to-purple-900/30 border border-fuchsia-500/30 rounded-xl p-6">
        <h4 className="text-lg font-bold text-fuchsia-400 mb-3">{warStrategyData.whyCCLoses.conclusion.title}</h4>
        <p className="text-2xl text-white font-semibold mb-2 leading-relaxed">{warStrategyData.whyCCLoses.conclusion.text}</p>
        <p className="text-slate-300">{warStrategyData.whyCCLoses.conclusion.subtext}</p>
      </div>
    </div>
  );

  const renderPhases = () => (
    <div className="space-y-6">
      <div className="bg-slate-800/50 border border-slate-700 rounded-xl p-6">
        <h3 className="text-xl font-bold text-white">PLAN DE BATAILLE EN 5 PHASES</h3>
      </div>

      {warStrategyData.phases.map((phase) => (
        <Card key={phase.phase} className={`${getColorClasses(phase.color, 'bg')} border ${getColorClasses(phase.color, 'border')}`}>
          <div className="flex items-start justify-between mb-4">
            <div>
              <div className="flex items-center gap-3 mb-2">
                <span className={`text-2xl font-bold ${getColorClasses(phase.color, 'text')}`}>PHASE {phase.phase}</span>
                <Badge variant={
                  phase.status === '🔥 EN COURS' ? 'critical' :
                  phase.status === 'OBJECTIF' ? 'high' : 'medium'
                }>{phase.status}</Badge>
              </div>
              <h4 className="text-xl font-bold text-white">{phase.name}</h4>
              <p className={`${getColorClasses(phase.color, 'text')} mt-1`}>{phase.period}</p>
            </div>
          </div>

          <div className="space-y-4">
            <div>
              <h5 className="text-sm font-semibold text-slate-400 uppercase tracking-wider mb-2">Actions:</h5>
              <ul className="space-y-2">
                {phase.actions.map((action, idx) => (
                  <li key={idx} className="text-slate-300 flex items-start gap-2">
                    <span className="text-slate-500 mt-1">•</span>
                    <span>{action}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="bg-slate-900/50 rounded-lg p-4">
              <h5 className="text-sm font-semibold text-slate-400 uppercase tracking-wider mb-2">Psychologie:</h5>
              <p className="text-slate-300">{phase.psychology}</p>
            </div>

            {phase.additional && (
              <div className="bg-slate-900/50 rounded-lg p-4">
                <h5 className="text-sm font-semibold text-slate-400 uppercase tracking-wider mb-2">{phase.additional.title}</h5>
                <ul className="space-y-2">
                  {phase.additional.items.map((item, idx) => (
                    <li key={idx} className="text-slate-300 flex items-start gap-2">
                      <span className="text-slate-500 mt-1">•</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {phase.conditions && (
              <div className="bg-amber-900/20 border border-amber-500/30 rounded-lg p-4">
                <h5 className="text-sm font-semibold text-amber-400 uppercase tracking-wider mb-2">Condition de déclenchement:</h5>
                <p className="text-slate-300">{phase.conditions}</p>
              </div>
            )}
          </div>
        </Card>
      ))}
    </div>
  );

  const renderMessages = () => (
    <div className="space-y-6">
      <div className="bg-slate-800/50 border border-slate-700 rounded-xl p-6">
        <h3 className="text-xl font-bold text-white">MESSAGES À FAIRE PASSER</h3>
        <p className="text-slate-400 mt-1">Sans jamais les dire explicitement — les faire COMPRENDRE</p>
      </div>

      <div className="space-y-4">
        {warStrategyData.keyMessages.map((msg, idx) => (
          <Card key={idx} className={`${getColorClasses(msg.color, 'bg')} border ${getColorClasses(msg.color, 'border')}`}>
            <h4 className={`text-lg font-bold ${getColorClasses(msg.color, 'text')} mb-3`}>{msg.message}</h4>
            <div className="space-y-2">
              <div>
                <span className="text-sm font-semibold text-slate-400">Comment: </span>
                <span className="text-slate-300">{msg.how}</span>
              </div>
              <div>
                <span className="text-sm font-semibold text-slate-400">Ton: </span>
                <span className="text-slate-300">{msg.tone}</span>
              </div>
              <div className="bg-slate-900/50 rounded-lg p-3 mt-3">
                <span className="text-sm font-semibold text-slate-400">Exemple: </span>
                <p className="text-slate-300 italic mt-1">"{msg.example}"</p>
              </div>
            </div>
          </Card>
        ))}
      </div>
    </div>
  );

  const renderCalculation = () => (
    <div className="space-y-6">
      <div className="bg-slate-800/50 border border-slate-700 rounded-xl p-6">
        <h3 className="text-xl font-bold text-white">{warStrategyData.ccCalculation.title}</h3>
        <p className="text-slate-400 mt-1">{warStrategyData.ccCalculation.subtitle}</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {warStrategyData.ccCalculation.options.map((option, idx) => (
          <Card key={idx} className={`${getColorClasses(option.color, 'bg')} border ${getColorClasses(option.color, 'border')}`}>
            <h4 className={`text-xl font-bold ${getColorClasses(option.color, 'text')} mb-4`}>{option.label}</h4>

            <div className="space-y-3 mb-4">
              <h5 className="text-sm font-semibold text-slate-400 uppercase tracking-wider">
                {option.type === 'costs' ? 'Coûts estimés:' : 'Gains:'}
              </h5>
              {option.items.map((item, iidx) => (
                <div key={iidx} className="flex justify-between items-start gap-4">
                  <span className="text-slate-300">{item.item}</span>
                  <span className={`font-semibold ${getColorClasses(option.color, 'text')} whitespace-nowrap`}>{item.amount}</span>
                </div>
              ))}
            </div>

            <div className="border-t border-slate-700 pt-4 space-y-2">
              <div className="text-slate-300">
                <span className="font-semibold">Total: </span>
                {option.total}
              </div>
              <div className={`text-lg font-bold ${getColorClasses(option.color, 'text')}`}>
                {option.result}
              </div>
            </div>
          </Card>
        ))}
      </div>

      <div className="bg-gradient-to-r from-fuchsia-900/30 to-purple-900/30 border border-fuchsia-500/30 rounded-xl p-6">
        <p className="text-2xl text-white font-bold mb-2 whitespace-pre-line">{warStrategyData.ccCalculation.conclusion.main}</p>
        <p className="text-slate-300">{warStrategyData.ccCalculation.conclusion.subtext}</p>
      </div>
    </div>
  );

  const renderSignals = () => (
    <div className="space-y-6">
      <div className="bg-slate-800/50 border border-slate-700 rounded-xl p-6">
        <h3 className="text-xl font-bold text-white">{warStrategyData.surrenderSignals.title}</h3>
        <p className="text-slate-400 mt-1">{warStrategyData.surrenderSignals.subtitle}</p>
      </div>

      <Card>
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="border-b border-slate-700">
                <th className="text-left py-3 px-4 text-slate-400 font-semibold">Signal</th>
                <th className="text-left py-3 px-4 text-slate-400 font-semibold">Signification possible</th>
                <th className="text-left py-3 px-4 text-slate-400 font-semibold">Notre réponse</th>
              </tr>
            </thead>
            <tbody>
              {warStrategyData.surrenderSignals.signals.map((signal, idx) => (
                <tr key={idx} className="border-b border-slate-800 last:border-0">
                  <td className="py-4 px-4 text-slate-300">{signal.signal}</td>
                  <td className="py-4 px-4 text-slate-300">{signal.meaning}</td>
                  <td className="py-4 px-4 text-emerald-400">{signal.response}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </Card>
    </div>
  );

  const renderTaleb = () => (
    <div className="space-y-6">
      <div className="bg-slate-800/50 border border-slate-700 rounded-xl p-6">
        <h3 className="text-xl font-bold text-white">{warStrategyData.talebPrinciples.title}</h3>
        <p className="text-slate-400 mt-1">{warStrategyData.talebPrinciples.subtitle}</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {warStrategyData.talebPrinciples.principles.map((principle, idx) => (
          <Card key={idx} className="bg-blue-900/20 border border-blue-500/30">
            <h4 className="text-lg font-bold text-blue-400 mb-3">{principle.principle}</h4>
            <p className="text-slate-300">{principle.application}</p>
          </Card>
        ))}
      </div>

      <div className="bg-gradient-to-r from-blue-900/30 to-purple-900/30 border border-blue-500/30 rounded-xl p-6">
        <p className="text-2xl text-white font-semibold italic mb-2">"{warStrategyData.talebPrinciples.quote.text}"</p>
        <p className="text-blue-400 mb-3">— {warStrategyData.talebPrinciples.quote.author}</p>
        <p className="text-slate-300 text-sm">{warStrategyData.talebPrinciples.quote.subtext}</p>
      </div>
    </div>
  );

  const renderMistakes = () => (
    <div className="space-y-6">
      <div className="bg-slate-800/50 border border-slate-700 rounded-xl p-6">
        <h3 className="text-xl font-bold text-white">{warStrategyData.mistakes.title}</h3>
        <p className="text-slate-400 mt-1">{warStrategyData.mistakes.subtitle}</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {warStrategyData.mistakes.mistakes.map((mistake, idx) => (
          <Card key={idx} className="bg-red-900/20 border border-red-500/30">
            <div className="flex items-start gap-3">
              <span className="text-2xl">❌</span>
              <div className="flex-1">
                <h4 className="text-lg font-bold text-red-400 mb-2">{mistake.mistake}</h4>
                <p className="text-slate-300 text-sm">{mistake.why}</p>
              </div>
            </div>
          </Card>
        ))}
      </div>

      <Card className="bg-emerald-900/20 border border-emerald-500/30">
        <h4 className="text-lg font-bold text-emerald-400 mb-4">✅ À la place, faire:</h4>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
          {warStrategyData.mistakes.goodActions.map((action, idx) => (
            <div key={idx} className="flex items-start gap-2">
              <span className="text-emerald-400 mt-1">✓</span>
              <span className="text-slate-300">{action.action}</span>
            </div>
          ))}
        </div>
      </Card>
    </div>
  );

  const renderContent = () => {
    switch (activeTab) {
      case 'objective':
        return renderObjective();
      case 'why-they-lose':
        return renderWhyTheyLose();
      case 'phases':
        return renderPhases();
      case 'messages':
        return renderMessages();
      case 'calculation':
        return renderCalculation();
      case 'signals':
        return renderSignals();
      case 'taleb':
        return renderTaleb();
      case 'mistakes':
        return renderMistakes();
      default:
        return null;
    }
  };

  return (
    <div className="space-y-6">
      <div className="bg-gradient-to-r from-red-900/40 via-amber-900/30 to-emerald-900/20 border border-red-500/30 rounded-xl p-6">
        <div className="flex items-center gap-3 mb-2">
          <div className="text-3xl">⚔️</div>
          <div>
            <div className="text-2xl font-bold text-white">STRATÉGIE DE GUERRE</div>
            <div className="text-slate-300 mt-1">Comment amener Copyright Capital à la capitulation</div>
          </div>
        </div>
      </div>

      <TabNav
        tabs={tabs}
        activeTab={activeTab}
        onTabChange={setActiveTab}
        accentColor="red"
      />

      <div className="min-h-[400px]">
        {renderContent()}
      </div>
    </div>
  );
};

export default WarStrategyPage;
