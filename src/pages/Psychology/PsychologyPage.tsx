import { useState } from 'react';
import { Calendar, Users, Repeat, Target, Brain } from 'lucide-react';
import TabNav from '../../shared/components/TabNav';
import { Card } from '../../components/Card';
import { psychologyCCData } from './data';

const tabs = [
  { id: 'phases', label: 'Chronologie comportementale', icon: '📅' },
  { id: 'profiles', label: 'Profils individuels', icon: '👤' },
  { id: 'patterns', label: 'Patterns', icon: '🔄' },
  { id: 'weaknesses', label: 'Failles', icon: '🎯' },
  { id: 'mindset', label: 'État d\'esprit', icon: '🧠' },
];

const colorMap: Record<string, string> = {
  blue: 'bg-blue-900/30 border-blue-500/30',
  slate: 'bg-slate-900/30 border-slate-500/30',
  red: 'bg-red-900/30 border-red-500/30',
  amber: 'bg-amber-900/30 border-amber-500/30',
  purple: 'bg-purple-900/30 border-purple-500/30',
};

const PsychologyPage = () => {
  const [activeTab, setActiveTab] = useState('phases');

  const renderPhasesTab = () => (
    <div className="space-y-8">
      {psychologyCCData.phases.map((phase, index) => (
        <div key={index} className={`border rounded-xl p-6 ${colorMap[phase.color]}`}>
          <div className="flex items-center gap-4 mb-4">
            <Calendar className={`w-6 h-6 text-${phase.color}-400`} />
            <div>
              <h3 className="text-xl font-bold text-white">{phase.phase}</h3>
              <p className="text-slate-400">{phase.period}</p>
            </div>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-slate-700/50">
                  <th className="text-left p-3 text-slate-300 font-semibold">Date</th>
                  <th className="text-left p-3 text-slate-300 font-semibold">Événement</th>
                  <th className="text-left p-3 text-slate-300 font-semibold">Détail</th>
                  <th className="text-left p-3 text-slate-300 font-semibold">Signification</th>
                  <th className="text-center p-3 text-slate-300 font-semibold">Critique?</th>
                </tr>
              </thead>
              <tbody>
                {phase.events.map((event, i) => (
                  <tr key={i} className="border-b border-slate-800/50">
                    <td className="p-3 text-slate-400 whitespace-nowrap">{event.date}</td>
                    <td className="p-3 text-white font-medium">{event.event}</td>
                    <td className="p-3 text-slate-300">{event.detail}</td>
                    <td className="p-3 text-slate-300">{event.meaning}</td>
                    <td className="p-3 text-center">
                      {event.critical ? (
                        <span className="text-red-400 font-bold">✅ OUI</span>
                      ) : (
                        <span className="text-slate-500">Non</span>
                      )}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div className="mt-6 p-4 bg-slate-900/50 rounded-lg border border-slate-700/50">
            <h4 className="text-white font-semibold mb-2">Synthèse :</h4>
            <p className="text-slate-300">{phase.synthesis}</p>
          </div>
        </div>
      ))}
    </div>
  );

  const renderProfilesTab = () => (
    <div className="space-y-6">
      {psychologyCCData.individuals.map((individual, index) => (
        <Card key={index} className={`border-l-4 border-${individual.color}-500`}>
          <div className="flex items-center gap-4 mb-4">
            <div className={`w-12 h-12 rounded-full bg-${individual.color}-900/40 flex items-center justify-center`}>
              <Users className={`w-6 h-6 text-${individual.color}-400`} />
            </div>
            <div>
              <h3 className="text-2xl font-bold text-white">{individual.name}</h3>
              <p className="text-slate-400">{individual.role}</p>
            </div>
          </div>

          <div className="space-y-4">
            <div>
              <h4 className="text-sm font-semibold text-slate-400 mb-2">Comportements documentés :</h4>
              <div className="overflow-x-auto">
                <table className="w-full text-sm">
                  <thead>
                    <tr className="border-b border-slate-700/50">
                      <th className="text-left p-2 text-slate-300">Comportement</th>
                      <th className="text-left p-2 text-slate-300">Signification</th>
                      <th className="text-left p-2 text-slate-300">Période</th>
                    </tr>
                  </thead>
                  <tbody>
                    {individual.behaviors.map((behavior, i) => (
                      <tr key={i} className="border-b border-slate-800/50">
                        <td className="p-2 text-slate-300">{behavior.behavior}</td>
                        <td className="p-2 text-slate-300">{behavior.meaning}</td>
                        <td className="p-2 text-slate-400">{behavior.period}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-4">
              <div className="p-4 bg-slate-900/50 rounded-lg border border-slate-700/50">
                <h4 className="text-sm font-semibold text-slate-400 mb-2">Profil :</h4>
                <p className="text-slate-300">{individual.profile}</p>
              </div>

              <div className="p-4 bg-red-900/20 rounded-lg border border-red-500/30">
                <h4 className="text-sm font-semibold text-red-400 mb-2">Faille :</h4>
                <p className="text-slate-300">{individual.weakness}</p>
              </div>
            </div>

            {individual.contradiction && (
              <div className="p-4 bg-amber-900/20 rounded-lg border border-amber-500/30">
                <h4 className="text-sm font-semibold text-amber-400 mb-2">Contradiction documentée :</h4>
                <p className="text-slate-300">{individual.contradiction}</p>
              </div>
            )}

            <div className="p-4 bg-emerald-900/20 rounded-lg border border-emerald-500/30">
              <h4 className="text-sm font-semibold text-emerald-400 mb-2">Comment le gérer :</h4>
              <p className="text-slate-300">{individual.howToHandle}</p>
            </div>
          </div>
        </Card>
      ))}
    </div>
  );

  const renderPatternsTab = () => (
    <div className="space-y-6">
      <Card title="Patterns de comportement récurrents">
        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead>
              <tr className="border-b border-slate-700/50">
                <th className="text-left p-3 text-slate-300 font-semibold">Icône</th>
                <th className="text-left p-3 text-slate-300 font-semibold">Pattern</th>
                <th className="text-left p-3 text-slate-300 font-semibold">Exemples</th>
                <th className="text-left p-3 text-slate-300 font-semibold">Période</th>
              </tr>
            </thead>
            <tbody>
              {psychologyCCData.patterns.map((pattern, i) => (
                <tr key={i} className="border-b border-slate-800/50">
                  <td className="p-3 text-2xl">{pattern.icon}</td>
                  <td className="p-3 text-white font-medium">{pattern.pattern}</td>
                  <td className="p-3 text-slate-300">{pattern.examples}</td>
                  <td className="p-3 text-slate-400">{pattern.period}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </Card>

      <Card title="Évolution des comportements">
        <div className="grid grid-cols-5 gap-2 text-center text-sm">
          <div className="p-4 bg-red-900/30 border border-red-500/30 rounded-lg">
            <div className="font-bold text-white mb-2">Oct 2024</div>
            <div className="text-red-400 text-2xl mb-2">🦈</div>
            <div className="text-slate-300">Propos révélateurs / Ultimatum impossible</div>
          </div>
          <div className="p-4 bg-slate-900/30 border border-slate-500/30 rounded-lg">
            <div className="font-bold text-white mb-2">Nov 2024-Juil 2025</div>
            <div className="text-slate-400 text-2xl mb-2">🔇</div>
            <div className="text-slate-300">SILENCE / Opacité</div>
          </div>
          <div className="p-4 bg-red-900/30 border border-red-500/30 rounded-lg">
            <div className="font-bold text-white mb-2">Août-Sept 2025</div>
            <div className="text-red-400 text-2xl mb-2">🔓</div>
            <div className="text-slate-300">NÉGLIGENCE / Abandon</div>
          </div>
          <div className="p-4 bg-amber-900/30 border border-amber-500/30 rounded-lg">
            <div className="font-bold text-white mb-2">Oct-Nov 2025</div>
            <div className="text-amber-400 text-2xl mb-2">🤝❌</div>
            <div className="text-slate-300">PROMESSES / Non tenues</div>
          </div>
          <div className="p-4 bg-red-900/30 border border-red-500/30 rounded-lg">
            <div className="font-bold text-white mb-2">Déc 2025</div>
            <div className="text-red-400 text-2xl mb-2">😰</div>
            <div className="text-slate-300">PRESSION / Intimidation</div>
          </div>
        </div>
      </Card>
    </div>
  );

  const renderWeaknessesTab = () => (
    <div className="space-y-6">
      <Card title="Failles exploitables">
        <div className="space-y-3">
          {psychologyCCData.weaknesses.map((weakness, i) => (
            <div key={i} className="p-4 bg-slate-900/50 rounded-lg border border-slate-700/50 hover:border-red-500/50 transition-colors">
              <div className="flex items-start gap-3">
                <Target className="w-5 h-5 text-red-400 mt-1 flex-shrink-0" />
                <div className="flex-1">
                  <h4 className="text-white font-semibold mb-1">{weakness.weakness}</h4>
                  <p className="text-slate-300 text-sm">{weakness.exploit}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </Card>

      <div className="bg-slate-900/30 border border-slate-600/40 rounded-xl p-6">
        <div className="flex items-center gap-4 mb-4">
          <div className="text-4xl">📄</div>
          <div>
            <h3 className="text-2xl font-bold text-white">CONTEXTE HISTORIQUE — Lettre de Jack (17 oct 2024)</h3>
            <p className="text-slate-400">Élément de contexte, pas une preuve directe</p>
          </div>
        </div>

        <div className="p-4 bg-amber-900/20 border border-amber-500/40 rounded-lg mb-4">
          <div className="flex items-start gap-3">
            <span className="text-2xl">⚠️</span>
            <div>
              <h4 className="text-amber-400 font-semibold mb-1">Important</h4>
              <p className="text-slate-300">Cet élément n'est PAS une preuve directe de négligence sur Oye. C'est un élément de contexte sur le comportement général de CC.</p>
            </div>
          </div>
        </div>

        <div className="space-y-4">
          <div className="p-4 bg-slate-800/50 rounded-lg border border-slate-700/40">
            <h4 className="text-slate-300 font-semibold mb-2">Citation 1:</h4>
            <blockquote className="text-white italic border-l-4 border-slate-500 pl-4 mb-2">
              "What may be the worst option for you, is something that is just not ideal that we can live with for us."
            </blockquote>
            <p className="text-slate-400 text-sm">→ Posture de négociation agressive, pas nécessairement intention malveillante</p>
          </div>

          <div className="p-4 bg-slate-800/50 rounded-lg border border-slate-700/40">
            <h4 className="text-slate-300 font-semibold mb-2">Citation 2:</h4>
            <blockquote className="text-white italic border-l-4 border-slate-500 pl-4 mb-2">
              "After the 2nd breach or so we will fully exercise our rights... we will become the rightful owner of all of your content (not just of facebook)."
            </blockquote>
            <p className="text-slate-400 text-sm">→ Il rappelle les termes contractuels (Clause 7)</p>
          </div>

          <div className="p-4 bg-slate-800/50 rounded-lg border border-slate-700/40">
            <h4 className="text-slate-300 font-semibold mb-2">Citation 3:</h4>
            <blockquote className="text-white italic border-l-4 border-slate-500 pl-4 mb-2">
              "You can pay us back fully by the end of business day tomorrow"
            </blockquote>
            <p className="text-slate-400 text-sm">→ Délai difficile à respecter, mais pas illégal en soi</p>
          </div>

          <div className="p-4 bg-slate-800/30 rounded-lg border border-slate-600/40 mt-4">
            <h4 className="text-slate-300 font-semibold mb-3">UTILITÉ RÉELLE</h4>
            <div className="space-y-2">
              <div className="flex items-start gap-2">
                <span className="text-green-400 font-bold">✅</span>
                <div className="flex-1">
                  <div className="text-green-400 font-semibold text-sm">Utile pour:</div>
                  <ul className="text-slate-300 text-sm mt-1 space-y-1">
                    <li>• Contexte comportemental général</li>
                    <li>• Contre-argument si CC se présente comme victime</li>
                    <li>• Preuve qu'ils ont refusé une sortie amiable</li>
                  </ul>
                </div>
              </div>
              <div className="flex items-start gap-2 mt-3">
                <span className="text-red-400 font-bold">❌</span>
                <div className="flex-1">
                  <div className="text-red-400 font-semibold text-sm">Pas utile pour:</div>
                  <ul className="text-slate-300 text-sm mt-1 space-y-1">
                    <li>• Preuve directe de négligence sur Oye</li>
                    <li>• Argument juridique principal</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Card className="bg-slate-900/50 border-slate-700/50">
        <div className="flex items-center gap-3 mb-3">
          <span className="text-2xl">😰</span>
          <h3 className="text-xl font-bold text-white">CE QU'ILS CRAIGNENT</h3>
        </div>
        <p className="text-slate-300">{psychologyCCData.theirFear}</p>
      </Card>
    </div>
  );

  const renderMindsetTab = () => (
    <div className="space-y-6">
      <div className="grid md:grid-cols-2 gap-6">
        <Card className="bg-amber-900/20 border-amber-500/30">
          <h3 className="text-xl font-bold text-amber-400 mb-4">Ce qu'ils pensent</h3>
          <p className="text-slate-300 italic">"{psychologyCCData.theyThink}"</p>
        </Card>

        <Card className="bg-red-900/20 border-red-500/30">
          <h3 className="text-xl font-bold text-red-400 mb-4">Ce qu'ils ne réalisent PAS</h3>
          <ul className="space-y-2">
            {psychologyCCData.theyDontRealize.map((item, i) => (
              <li key={i} className="text-slate-300 text-sm flex items-start gap-2">
                <span className="text-red-400 mt-1">•</span>
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </Card>
      </div>

      <Card title="CONCLUSION STRATÉGIQUE">
        <div className="grid md:grid-cols-3 gap-4">
          <div className="p-4 bg-slate-900/50 rounded-lg border border-slate-700/50">
            <h4 className="text-slate-400 font-semibold mb-2 text-sm">Leur force apparente</h4>
            <p className="text-slate-300 text-sm">{psychologyCCData.strategicConclusion.theirApparentStrength}</p>
          </div>
          <div className="p-4 bg-red-900/20 rounded-lg border border-red-500/30">
            <h4 className="text-red-400 font-semibold mb-2 text-sm">Leur vraie faiblesse</h4>
            <p className="text-slate-300 text-sm">{psychologyCCData.strategicConclusion.theirRealWeakness}</p>
          </div>
          <div className="p-4 bg-emerald-900/20 rounded-lg border border-emerald-500/30">
            <h4 className="text-emerald-400 font-semibold mb-2 text-sm">Notre approche</h4>
            <p className="text-slate-300 text-sm">{psychologyCCData.strategicConclusion.ourApproach}</p>
          </div>
        </div>
      </Card>

      <div className="bg-gradient-to-r from-fuchsia-900/40 via-purple-900/30 to-pink-900/20 border-4 border-fuchsia-500/50 rounded-xl p-6">
        <div className="flex items-center gap-4 mb-4">
          <span className="text-4xl">🚨</span>
          <h3 className="text-2xl font-bold text-white">{psychologyCCData.keyReminder.title}</h3>
        </div>
        <p className="text-white text-lg mb-3">{psychologyCCData.keyReminder.text}</p>
        <p className="text-fuchsia-300 font-semibold">→ {psychologyCCData.keyReminder.subtext}</p>
      </div>
    </div>
  );

  const renderContent = () => {
    switch (activeTab) {
      case 'phases':
        return renderPhasesTab();
      case 'profiles':
        return renderProfilesTab();
      case 'patterns':
        return renderPatternsTab();
      case 'weaknesses':
        return renderWeaknessesTab();
      case 'mindset':
        return renderMindsetTab();
      default:
        return null;
    }
  };

  return (
    <div className="space-y-6">
      <div className="bg-gradient-to-r from-purple-900/40 via-fuchsia-900/30 to-pink-900/20 border border-purple-500/30 rounded-xl p-6">
        <div className="flex items-center justify-between">
          <div>
            <div className="flex items-center gap-4 mb-2">
              <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-purple-600 to-fuchsia-600 flex items-center justify-center text-2xl">
                🧠
              </div>
              <div className="text-2xl font-bold text-white">PROFIL PSYCHOLOGIQUE — COPYRIGHT CAPITAL</div>
            </div>
            <div className="text-slate-300">Analyse exhaustive des comportements depuis le début</div>
          </div>
          <div className="text-right">
            <div className="text-sm text-slate-400">Dernière analyse</div>
            <div className="text-white font-semibold">{psychologyCCData.lastUpdate}</div>
          </div>
        </div>
      </div>

      <TabNav
        tabs={tabs}
        activeTab={activeTab}
        onTabChange={setActiveTab}
        accentColor="purple"
      />

      <div className="min-h-[400px]">
        {renderContent()}
      </div>
    </div>
  );
};

export default PsychologyPage;
