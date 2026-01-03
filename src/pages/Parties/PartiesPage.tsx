import { DATA } from '../../data';
import { Card } from '../../components/Card';

const PartiesPage = () => (
  <div className="space-y-6">
    <div className="grid md:grid-cols-2 gap-6">
      <Card title="🔵 ADN Production SAS" accent="blue">
        <div className="space-y-4">
          <div className="text-sm text-slate-400">
            <div>{DATA.parties.adn.type}</div>
            <div>SIREN: {DATA.parties.adn.siren}</div>
            <div>{DATA.parties.adn.address}</div>
          </div>
          <div className="border-t border-slate-700/50 pt-4">
            <div className="text-xs text-slate-500 uppercase tracking-wider mb-2">Équipe</div>
            {DATA.parties.adn.team.map((p, i) => (
              <div key={i} className={`flex items-center justify-between py-2 ${p.key ? 'text-slate-100' : 'text-slate-400'}`}>
                <div>
                  <span className="font-medium">{p.name}</span>
                  {p.alias && <span className="text-slate-500 ml-1">({p.alias})</span>}
                </div>
                <div className="text-sm text-slate-500">{p.role}</div>
              </div>
            ))}
          </div>
        </div>
      </Card>

      <Card title="🔴 Copyright Capital SA" accent="red">
        <div className="space-y-4">
          <div className="text-sm text-slate-400">
            <div>{DATA.parties.cc.type}</div>
            <div>N°: {DATA.parties.cc.registration}</div>
            <div>{DATA.parties.cc.address}</div>
          </div>
          <div className="border-t border-slate-700/50 pt-4">
            <div className="text-xs text-slate-500 uppercase tracking-wider mb-2">Équipe</div>
            {DATA.parties.cc.team.map((p, i) => (
              <div key={i} className="py-2">
                <div className={`flex items-center justify-between ${p.key ? 'text-slate-100' : 'text-slate-400'}`}>
                  <span className="font-medium">{p.name}</span>
                  <span className="text-sm text-slate-500">{p.role}</span>
                </div>
                {p.note && <div className="text-xs text-amber-400 mt-1">⚠️ {p.note}</div>}
              </div>
            ))}
          </div>
        </div>
      </Card>
    </div>
  </div>
);

export default PartiesPage;
