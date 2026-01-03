import { DATA } from '../../data';
import { Badge } from '../../components/Badge';
import { Card } from '../../components/Card';

const LettersPage = () => (
  <div className="space-y-6">
    <Card title="📄 Lettre ADN — 19 décembre 2025" accent="blue">
      <div className="grid md:grid-cols-2 gap-3 mb-4">
        {DATA.letters.adn.sections.map((sec, i) => (
          <div key={i} className="p-3 bg-slate-800/30 rounded-lg">
            <div className="text-blue-400 text-xs font-bold">{sec.num}. {sec.title}</div>
            <div className="text-slate-300 text-sm mt-1">{sec.content}</div>
          </div>
        ))}
      </div>
    </Card>

    <Card title="📄 Lettre CC — 26 décembre 2025" accent="red">
      <div className="mb-4 flex items-center justify-between">
        <div className="text-slate-400">Expéditeur: {DATA.letters.cc.sender}</div>
        <Badge type="warning">{DATA.letters.cc.timing}</Badge>
      </div>

      <div className="space-y-3 mb-4">
        {DATA.letters.cc.claims.filter(c => c.critical).map((item, i) => (
          <div key={i} className="p-3 rounded-lg bg-red-900/20 border border-red-500/30">
            <div className="text-slate-300 text-sm">
              <span className="text-slate-500">Leur affirmation:</span> "{item.claim}"
            </div>
            <div className="text-red-300 font-medium text-sm mt-1">🔴 {item.response}</div>
          </div>
        ))}
      </div>
    </Card>
  </div>
);

export default LettersPage;
