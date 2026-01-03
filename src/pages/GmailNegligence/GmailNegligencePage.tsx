import { DATA } from '../../data';
import { Badge } from '../../components/Badge';
import { Card } from '../../components/Card';

const GmailNegligencePage = () => (
  <div className="space-y-6">
    <div className="bg-gradient-to-r from-red-900/40 via-orange-900/30 to-amber-900/20 border-2 border-red-500/50 rounded-xl p-6">
      <div className="text-2xl font-bold text-red-300">{DATA.gmailNegligence.title}</div>
      <div className="text-slate-300 mt-2">{DATA.gmailNegligence.impact}</div>
      <div className="text-amber-400 text-sm mt-3">📅 Découverte: {DATA.gmailNegligence.discovery}</div>
    </div>

    <Card title="👥 Gmail personnels identifiés" accent="red">
      <div className="space-y-4">
        {DATA.gmailNegligence.persons.map((person: any, i: number) => (
          <div key={i} className="p-4 bg-slate-800/30 rounded-lg border border-red-500/20">
            <div className="flex items-start justify-between mb-3">
              <div>
                <div className="font-bold text-white text-lg">{person.name}</div>
                <div className="text-slate-400 text-sm">{person.role}</div>
              </div>
              <Badge type="critical">GMAIL</Badge>
            </div>
            <div className="space-y-2 text-sm">
              <div className="flex items-center gap-2">
                <span className="text-slate-500">Email pro:</span>
                <span className="font-mono text-slate-300">{person.emailPro}</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-slate-500">Gmail perso:</span>
                <span className="font-mono text-red-400 font-bold">{person.emailGmail}</span>
              </div>
              <div className="mt-3 pt-3 border-t border-slate-700/50">
                <div className="text-amber-400">⚠️ {person.usage}</div>
                <div className="text-slate-500 text-xs mt-1">Découvert: {person.discovered}</div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </Card>

    <Card title="⚖️ Implications juridiques" accent="purple">
      <div className="grid md:grid-cols-2 gap-4">
        <div className="p-4 bg-slate-800/30 rounded-lg">
          <div className="text-slate-400 font-semibold mb-2">Avant découverte Joel</div>
          <div className="text-slate-300">{DATA.gmailNegligence.legalImplication.before}</div>
        </div>
        <div className="p-4 bg-red-900/20 border border-red-500/30 rounded-lg">
          <div className="text-red-400 font-semibold mb-2">Après découverte Joel</div>
          <div className="text-red-300 font-bold">{DATA.gmailNegligence.legalImplication.after}</div>
        </div>
      </div>
      <div className="mt-4 p-4 bg-purple-900/20 border border-purple-500/30 rounded-lg">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 bg-purple-500/20 rounded flex items-center justify-center text-xl">⚖️</div>
          <div className="flex-1">
            <div className="text-purple-400 font-semibold">{DATA.gmailNegligence.legalImplication.article}</div>
            <div className="text-slate-300 text-sm mt-1">{DATA.gmailNegligence.legalImplication.conclusion}</div>
          </div>
        </div>
      </div>
    </Card>

    <Card title="🤖 vs 👤 Qualité des contacts Meta" accent="cyan">
      <div className="text-slate-300 text-lg mb-4 italic">"{DATA.gmailNegligence.robotVsHuman.irony}"</div>
      <div className="grid md:grid-cols-2 gap-4">
        <div className="p-4 bg-slate-800/30 rounded-lg border border-slate-600/30">
          <div className="flex items-center gap-2 mb-3">
            <span className="text-2xl">🤖</span>
            <div>
              <div className="font-bold text-slate-200">Copyright Capital</div>
              <div className="text-slate-400 text-sm">{DATA.gmailNegligence.robotVsHuman.cc.type}</div>
            </div>
          </div>
          <div className="space-y-2 text-sm">
            <div className="font-mono text-xs text-slate-400">{DATA.gmailNegligence.robotVsHuman.cc.email}</div>
            <div className="font-mono text-xs text-slate-400">{DATA.gmailNegligence.robotVsHuman.cc.replyTo}</div>
            <div className="text-red-400 mt-3 pt-3 border-t border-slate-700/50">
              ❌ {DATA.gmailNegligence.robotVsHuman.cc.value}
            </div>
          </div>
        </div>
        <div className="p-4 bg-emerald-900/20 rounded-lg border border-emerald-500/30">
          <div className="flex items-center gap-2 mb-3">
            <span className="text-2xl">👤</span>
            <div>
              <div className="font-bold text-emerald-300">ADN Production</div>
              <div className="text-emerald-400 text-sm">{DATA.gmailNegligence.robotVsHuman.adn.type}</div>
            </div>
          </div>
          <div className="space-y-2 text-sm">
            {DATA.gmailNegligence.robotVsHuman.adn.contacts.map((contact: string, i: number) => (
              <div key={i} className="font-mono text-xs text-slate-300">• {contact}</div>
            ))}
            <div className="text-emerald-400 mt-3 pt-3 border-t border-emerald-700/50">
              ✓ {DATA.gmailNegligence.robotVsHuman.adn.value}
            </div>
          </div>
        </div>
      </div>
    </Card>

    <Card title="❓ Questions stratégiques pour CC" accent="amber">
      <div className="space-y-3">
        {DATA.gmailNegligence.questions.map((question: string, i: number) => (
          <div key={i} className="flex items-start gap-3 p-3 bg-amber-900/20 border border-amber-500/30 rounded-lg">
            <div className="w-6 h-6 bg-amber-500/20 rounded flex items-center justify-center text-amber-400 font-bold text-sm">{i + 1}</div>
            <div className="text-slate-200 flex-1">{question}</div>
          </div>
        ))}
      </div>
    </Card>
  </div>
);

export default GmailNegligencePage;
