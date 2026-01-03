import { DATA } from '../../data';
import { Card } from '../../components/Card';

const TwoFactorPage = () => (
  <div className="space-y-6">
    <div className="bg-gradient-to-r from-fuchsia-900/30 via-fuchsia-800/20 to-transparent border border-fuchsia-500/30 rounded-xl p-6">
      <div className="text-2xl font-bold text-fuchsia-300 mb-2">🔐 La preuve 2FA — DOUBLE CONTRADICTION</div>
      <div className="text-slate-300">CC affirme que le 2FA était "toujours en place" mais Meta a recommandé de l'ACTIVER.</div>
    </div>

    <div className="grid md:grid-cols-3 gap-4">
      <Card title="📧 Meta (27/08/2025)" accent="emerald">
        <div className="p-3 bg-emerald-900/20 border border-emerald-500/30 rounded-lg">
          <div className="text-emerald-300 italic text-sm">"{DATA.twoFactorProof.metaEmail.quote}"</div>
        </div>
        <div className="text-xs text-slate-400 mt-2">Envoyé à Jonathan Mayorkas</div>
      </Card>

      <Card title="📞 Jonathan (14/11/2025)" accent="purple">
        <div className="p-3 bg-purple-900/20 border border-purple-500/30 rounded-lg">
          <div className="text-purple-300 italic text-sm">"{DATA.twoFactorProof.jonathanMeeting.quote}"</div>
        </div>
        <div className="text-xs text-slate-400 mt-2">CR non contesté (≠ acceptation juridique en droit suisse)</div>
      </Card>

      <Card title="📄 Emre (26/12/2025)" accent="red">
        <div className="p-3 bg-red-900/20 border border-red-500/30 rounded-lg">
          <div className="text-red-300 italic text-sm">"{DATA.twoFactorProof.ccLetter.quote}"</div>
        </div>
        <div className="text-xs text-slate-400 mt-2">Lettre officielle CC</div>
      </Card>
    </div>
  </div>
);

export default TwoFactorPage;
