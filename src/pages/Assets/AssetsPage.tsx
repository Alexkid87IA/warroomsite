import { DATA } from '../../data';
import { Badge } from '../../components/Badge';
import { Card } from '../../components/Card';

const AssetsPage = () => (
  <div className="space-y-6">
    <Card title="📊 Page Oye — PERDUE" accent="red" pulse={true}>
      <div className="grid md:grid-cols-2 gap-6">
        <div className="space-y-4">
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 bg-red-500/20 rounded-lg flex items-center justify-center text-2xl">📱</div>
            <div>
              <div className="text-xl font-bold text-red-300">{DATA.assets.oye.name}</div>
              <div className="text-slate-400">{DATA.assets.oye.platform}</div>
            </div>
          </div>
          <div className="p-3 bg-slate-800/30 rounded-lg">
            <div className="text-slate-500 text-sm mb-1">Audience</div>
            <div className="text-slate-200">{DATA.assets.oye.audience}</div>
          </div>
          <div className="grid grid-cols-2 gap-3 text-sm">
            <div className="p-2 bg-slate-800/50 rounded">
              <div className="text-slate-500">Abonnés</div>
              <div className="font-bold text-slate-200">{DATA.assets.oye.followers.toLocaleString()}</div>
            </div>
            <div className="p-2 bg-slate-800/50 rounded">
              <div className="text-slate-500">% revenus ADN</div>
              <div className="font-bold text-slate-200">{DATA.assets.oye.revenuePercent}%</div>
            </div>
            <div className="p-2 bg-slate-800/50 rounded col-span-2">
              <div className="text-slate-500">Revenus mensuels</div>
              <div className="font-bold text-slate-200">{DATA.assets.oye.revenueRange}</div>
            </div>
          </div>
          <div className="p-3 bg-amber-900/20 border border-amber-500/30 rounded-lg">
            <div className="text-amber-300 font-medium">Contenu perdu</div>
            <div className="text-amber-200 text-sm">{DATA.assets.oye.contentLost}</div>
          </div>
          <div className="p-3 bg-red-900/20 border border-red-500/30 rounded-lg">
            <div className="text-red-300 font-medium">État actuel</div>
            <div className="text-red-200 text-sm">{DATA.assets.oye.currentState}</div>
          </div>
        </div>
        <div className="space-y-4">
          <div>
            <div className="text-xs text-slate-500 uppercase mb-2">IDs de page</div>
            <div className="space-y-2">
              <div className="p-2 bg-slate-800/30 rounded text-sm">
                <div className="text-slate-400 font-medium">ID fourni par ADN (28/08)</div>
                <div className="font-mono text-slate-300 text-xs">{DATA.assets.oye.ids.fromADN.id}</div>
                <div className="text-xs text-slate-500">{DATA.assets.oye.ids.fromADN.source}</div>
              </div>
              <div className="p-2 bg-slate-800/30 rounded text-sm">
                <div className="text-slate-400 font-medium">ID Meta (29/08)</div>
                <div className="font-mono text-slate-300 text-xs">{DATA.assets.oye.ids.fromMeta.id}</div>
                <div className="text-xs text-red-400">{DATA.assets.oye.ids.fromMeta.status}</div>
              </div>
              <div className="p-2 bg-emerald-900/20 border border-emerald-500/30 rounded text-sm">
                <div className="text-emerald-400 font-medium">ID réel (retrouvé 03/09)</div>
                <div className="font-mono text-emerald-300 text-xs">{DATA.assets.oye.ids.actual.id}</div>
                <div className="text-xs text-emerald-400">💥 {DATA.assets.oye.ids.actual.status}</div>
              </div>
            </div>
          </div>
          <div className="p-3 bg-slate-800/30 rounded-lg">
            <div className="text-xs text-slate-500 uppercase mb-2">Contrôle technique</div>
            <div className="space-y-1 text-sm">
              <div className="flex justify-between">
                <span className="text-slate-400">Business Manager</span>
                <span className="font-mono text-slate-300 text-xs">{DATA.assets.technical.businessManagerId}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-slate-400">Propriétaire</span>
                <span className="text-slate-300">{DATA.assets.technical.owner}</span>
              </div>
              <div className="text-red-300 mt-2 pt-2 border-t border-slate-700/50">
                <div className="font-medium">Super Admin: {DATA.assets.technical.superAdmin}</div>
                <div className="text-xs text-red-400 mt-1">{DATA.assets.technical.superAdminEmail}</div>
              </div>
              <div className="text-amber-300 text-xs mt-2 pt-2 border-t border-slate-700/50">
                Accès ADN: {DATA.assets.technical.adnAccess}
              </div>
            </div>
          </div>
        </div>
      </div>
    </Card>

    <Card title="💀 Analyse du préjudice — AVANT vs APRÈS" accent="purple">
      <div className="grid md:grid-cols-2 gap-6">
        <div className="p-4 bg-emerald-900/10 border border-emerald-500/30 rounded-lg">
          <div className="text-emerald-400 font-semibold mb-3">✓ Avant piratage</div>
          <div className="space-y-2 text-sm">
            <div className="flex items-center gap-2">
              <span className="text-slate-400">Followers:</span>
              <span className="text-slate-200">{DATA.assets.oye.damageAnalysis.beforeHack.followers}</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-slate-400">Revenus:</span>
              <span className="text-slate-200">{DATA.assets.oye.damageAnalysis.beforeHack.revenue}</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-slate-400">Contenu:</span>
              <span className="text-slate-200">{DATA.assets.oye.damageAnalysis.beforeHack.content}</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-slate-400">Monétisation:</span>
              <span className="text-slate-200">{DATA.assets.oye.damageAnalysis.beforeHack.monetization}</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-slate-400">Réputation:</span>
              <span className="text-slate-200">{DATA.assets.oye.damageAnalysis.beforeHack.reputation}</span>
            </div>
          </div>
        </div>
        <div className="p-4 bg-red-900/10 border border-red-500/30 rounded-lg">
          <div className="text-red-400 font-semibold mb-3">✗ Après récupération (hypothétique)</div>
          <div className="space-y-2 text-sm">
            <div className="flex items-center gap-2">
              <span className="text-slate-400">Audience:</span>
              <span className="text-red-300 font-bold">{DATA.assets.oye.damageAnalysis.afterRecovery.followers}</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-slate-400">Engagement:</span>
              <span className="text-red-300 font-bold">{DATA.assets.oye.damageAnalysis.afterRecovery.engagement}</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-slate-400">Revenus:</span>
              <span className="text-red-300 font-bold">{DATA.assets.oye.damageAnalysis.afterRecovery.revenue}</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-slate-400">Contenu:</span>
              <span className="text-red-300 font-bold">{DATA.assets.oye.damageAnalysis.afterRecovery.content}</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-slate-400">Monétisation:</span>
              <span className="text-red-300 font-bold">{DATA.assets.oye.damageAnalysis.afterRecovery.monetization}</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-slate-400">Réputation:</span>
              <span className="text-red-300 font-bold">{DATA.assets.oye.damageAnalysis.afterRecovery.reputation}</span>
            </div>
          </div>
        </div>
      </div>
      <div className="mt-4 p-4 bg-red-900/20 border-2 border-red-500/50 rounded-lg">
        <div className="text-red-300 font-bold text-lg">⚠️ CONCLUSION</div>
        <div className="text-red-200 mt-2">{DATA.assets.oye.damageAnalysis.conclusion}</div>
      </div>
    </Card>

    <Card title="📦 Autres actifs" accent="slate">
      <div className="grid md:grid-cols-3 gap-4">
        {DATA.assets.others.map((asset, i) => (
          <div key={i} className="p-4 bg-slate-800/30 rounded-lg">
            <div className="font-medium text-slate-200">{asset.name}</div>
            <div className="text-sm text-slate-400">{asset.platform}</div>
            <div className="text-sm text-slate-300 mt-2">{asset.status}</div>
            {asset.transferRequested && <Badge type="pending">Transfert demandé</Badge>}
          </div>
        ))}
      </div>
    </Card>
  </div>
);

export default AssetsPage;
