import { DATA } from '../../data';
import { Badge } from '../../components/Badge';
import { Card } from '../../components/Card';

const EvidencePage = () => (
  <div className="space-y-6">
    <Card title="📋 Arsenal de preuves" accent="fuchsia">
      <div className="space-y-3">
        {DATA.evidence.map((ev, i) => (
          <div key={i} className={`p-4 rounded-lg border ${
            ev.strength === 'devastating' ? 'bg-fuchsia-900/20 border-fuchsia-500/30' :
            ev.strength === 'very_strong' ? 'bg-emerald-900/20 border-emerald-500/30' :
            'bg-slate-800/30 border-slate-700/30'
          }`}>
            <div className="flex items-start justify-between gap-4">
              <div className="flex-1">
                <div className="font-medium text-slate-100">{ev.name}</div>
                <div className="text-sm text-slate-400 mt-1">{ev.desc}</div>
              </div>
              <Badge type={ev.strength}>
                {ev.strength === 'devastating' ? '💥 DÉVASTATEUR' :
                 ev.strength === 'very_strong' ? '🔥 TRÈS FORT' : '✓ FORT'}
              </Badge>
            </div>
          </div>
        ))}
      </div>
    </Card>
  </div>
);

export default EvidencePage;
