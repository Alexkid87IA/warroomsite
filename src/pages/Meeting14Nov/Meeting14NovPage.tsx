import { DATA } from '../../data';
import { Badge } from '../../components/Badge';
import { Card } from '../../components/Card';

const Meeting14NovPage = () => (
  <div className="space-y-6">
    <div className="bg-gradient-to-r from-purple-900/30 via-purple-800/20 to-transparent border border-purple-500/30 rounded-xl p-5">
      <div className="text-purple-300 font-semibold text-lg">📞 Réunion du 14 novembre 2025</div>
      <div className="text-slate-300 mt-2">Réunion téléphonique suivie d'un compte-rendu écrit envoyé par Jérôme à 18:45</div>
      <div className="text-slate-400 text-sm mt-1">Participants: {DATA.meeting14Nov.participants.join(", ")}</div>
    </div>

    <Card title="📋 Points NON CONTESTÉS par CC (≠ acceptés juridiquement)" accent="emerald">
      <div className="p-3 bg-amber-900/20 border border-amber-500/30 rounded-lg mb-4">
        <div className="text-amber-300 text-sm">⚠️ <strong>Nuance importante:</strong> En droit suisse, le silence ne vaut généralement PAS acceptation. Ces points n'ont pas été contestés, mais un arbitre pourrait ne pas les considérer comme "validés".</div>
      </div>
      <div className="space-y-2">
        {DATA.meeting14Nov.pointsNonContestes.map((item, i) => (
          <div key={i} className={`p-3 rounded-lg ${item.critical ? 'bg-fuchsia-900/20 border border-fuchsia-500/30' : 'bg-slate-800/30'}`}>
            <div className="flex items-center justify-between">
              <span className="text-slate-200">{item.point}</span>
              {item.critical && <Badge type="strong">NON CONTESTÉ</Badge>}
            </div>
            {item.note && <div className="text-amber-400 text-xs mt-1">→ {item.note}</div>}
          </div>
        ))}
      </div>
    </Card>

    <Card title="💣 Réponse de Jonathan — 19:08" accent="red">
      <div className="p-4 bg-slate-800/50 rounded-lg mb-4">
        <div className="text-slate-300 italic">"{DATA.meeting14Nov.jonathanResponse.quote}"</div>
      </div>
      <div className="text-sm text-slate-400 mb-3">AVEUX CONTENUS DANS CETTE RÉPONSE:</div>
      <div className="space-y-3">
        {DATA.meeting14Nov.jonathanResponse.admissions.map((adm, i) => (
          <div key={i} className="p-3 bg-red-900/20 border border-red-500/30 rounded-lg">
            <div className="text-red-300 font-medium">"{adm.text}"</div>
            <div className="text-red-200 text-sm mt-1">→ {adm.meaning}</div>
          </div>
        ))}
      </div>
    </Card>
  </div>
);

export default Meeting14NovPage;
