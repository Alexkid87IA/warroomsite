import { DATA } from '../../data';
import { Card } from '../../components/Card';

const LiveTimelinePage = () => (
  <div className="space-y-6">
    <div className="bg-gradient-to-r from-emerald-900/40 via-cyan-900/30 to-blue-900/20 border-2 border-emerald-500/50 rounded-xl p-6">
      <div className="text-3xl font-bold text-white mb-2">{DATA.actionPlan.prochaineAction.quoi}</div>
      <div className="text-slate-300">Jusqu'au {DATA.actionPlan.prochaineAction.jusqua}</div>
      <div className="text-emerald-300 mt-2">{DATA.actionPlan.prochaineAction.pourquoi}</div>
    </div>

    <Card title="📍 Situation actuelle" accent="cyan">
      <div className="text-slate-300">{DATA.actionPlan.situationActuelle.resume}</div>
    </Card>
  </div>
);

export default LiveTimelinePage;
