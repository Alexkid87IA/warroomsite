import { DATA } from '../../data';
import { Badge } from '../../components/Badge';
import { Card } from '../../components/Card';

const ChronologyPage = () => (
  <div className="space-y-6">
    <Card title="📆 Chronologie complète ADN-CC" accent="slate">
      <div className="relative">
        <div className="absolute left-4 top-0 bottom-0 w-0.5 bg-slate-700"></div>
        <div className="space-y-2">
          {DATA.mainTimeline.map((item, i) => (
            <div key={i} className={`relative pl-10 py-2 ${
              item.critical ? 'bg-red-900/20 -mx-3 px-3 pl-12 rounded-lg border border-red-500/30' :
              item.important ? 'bg-amber-900/20 -mx-3 px-3 pl-12 rounded-lg border border-amber-500/30' : ''
            }`}>
              <div className={`absolute left-2.5 w-3 h-3 rounded-full border-2 ${
                item.critical ? 'bg-red-500 border-red-400' :
                item.important ? 'bg-amber-500 border-amber-400' :
                item.phase === 'setup' ? 'bg-blue-500 border-blue-400' :
                item.phase === 'current' ? 'bg-cyan-500 border-cyan-400 animate-pulse' :
                'bg-slate-600 border-slate-500'
              }`}></div>
              <div className="flex flex-wrap items-center gap-2">
                <span className="text-slate-500 font-mono text-xs">{item.date}</span>
                {item.critical && <Badge type="critical">CRITIQUE</Badge>}
              </div>
              <div className={`text-sm ${item.critical ? 'text-red-200 font-medium' : 'text-slate-300'}`}>
                {item.event}
              </div>
            </div>
          ))}
        </div>
      </div>
    </Card>
  </div>
);

export default ChronologyPage;
