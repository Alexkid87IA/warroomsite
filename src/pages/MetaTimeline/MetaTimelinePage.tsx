import { DATA } from '../../data';
import { Badge } from '../../components/Badge';
import { Card } from '../../components/Card';

const MetaTimelinePage = () => (
  <div className="space-y-6">
    <Card title="📧 Boucle email Meta — Piratage Oye (Août-Sept 2025)" accent="blue">
      <div className="relative">
        <div className="absolute left-4 top-0 bottom-0 w-0.5 bg-slate-700"></div>
        <div className="space-y-2">
          {DATA.metaTimeline.map((item, i) => (
            <div key={i} className={`relative pl-10 py-3 ${
              item.type === 'critical' ? 'bg-red-900/20 -mx-3 px-3 pl-12 rounded-lg border border-red-500/30' :
              item.type === 'important' ? 'bg-amber-900/20 -mx-3 px-3 pl-12 rounded-lg border border-amber-500/30' :
              item.type === 'evidence' ? 'bg-purple-900/20 -mx-3 px-3 pl-12 rounded-lg border border-purple-500/30' :
              item.type === 'internal' ? 'bg-slate-800/50 -mx-3 px-3 pl-12 rounded-lg' : ''
            }`}>
              <div className={`absolute left-2.5 w-3 h-3 rounded-full border-2 ${
                item.type === 'critical' ? 'bg-red-500 border-red-400' :
                item.type === 'important' ? 'bg-amber-500 border-amber-400' :
                item.type === 'evidence' ? 'bg-purple-500 border-purple-400' :
                item.type === 'internal' ? 'bg-slate-500 border-slate-400' :
                'bg-blue-500 border-blue-400'
              }`}></div>
              <div className="flex flex-wrap items-center gap-2 text-xs">
                <span className="text-slate-500 font-mono">{item.date}</span>
                {item.from && <span className="text-slate-400">de {item.from}</span>}
                {item.to && <span className="text-slate-400">→ {item.to}</span>}
                {item.highlight === '2FA' && <Badge type="devastating">🔐 PREUVE 2FA</Badge>}
                {item.highlight === 'PAGE_EXISTS' && <Badge type="devastating">PAGE EXISTE</Badge>}
              </div>
              <div className={`text-sm mt-1 ${item.type === 'critical' ? 'text-red-200 font-medium' : 'text-slate-300'}`}>
                {item.event}
              </div>
              {item.note && <div className="text-amber-400 text-xs mt-1">→ {item.note}</div>}
            </div>
          ))}
        </div>
      </div>
    </Card>
  </div>
);

export default MetaTimelinePage;
