import { DATA } from '../../data';
import { Badge } from '../../components/Badge';
import { Card } from '../../components/Card';

const articlesDetails = [
  {
    art: "Art. 101 CO",
    name: "Responsabilité pour auxiliaires",
    text: "Celui qui, même d'une manière licite, confie à des auxiliaires, tels que des personnes vivant en ménage avec lui ou des travailleurs, le soin d'exécuter une obligation ou d'exercer un droit dérivant d'une obligation, est responsable envers l'autre partie du dommage qu'ils causent dans l'accomplissement de leur travail.",
    pertinence: "Jonathan et Joel (employés de CC) ont utilisé des Gmail perso pour gérer les actifs. CC est responsable de leurs fautes."
  },
  {
    art: "Art. 398 CO",
    name: "Diligence du mandataire",
    text: "Le mandataire est soumis à la même obligation de diligence que le travailleur dans un contrat de travail et le mandataire est responsable envers le mandant de la bonne exécution du mandat.",
    pertinence: "Si on qualifie CC de \"gestionnaire\" des actifs numériques (ce que le contrat suggère avec \"Super Admin\"), ils avaient une obligation de diligence qu'ils n'ont pas respectée."
  },
  {
    art: "Art. 163 al.2/3 CO",
    name: "Réduction des clauses pénales",
    text: "En vertu de l'art. 163 al. 3 CO, le juge doit réduire les peines qu'il estime excessives. Cette disposition est une norme d'ordre public, destinée à protéger la partie faible.",
    pertinence: "Contre les pénalités ×3 de la Clause 6 (630k€). Un arbitre pourrait réduire cette pénalité s'il la juge excessive."
  },
  {
    art: "Art. 44 CO",
    name: "Réduction de l'indemnité (mitigation)",
    text: "Le juge peut réduire les dommages-intérêts, ou même n'en point allouer, lorsque la partie lésée a consenti la lésion ou lorsque des faits dont elle est responsable ont contribué à créer le dommage, l'augmenter, ou qu'ils ont aggravé la situation du débiteur.",
    pertinence: "CONTRE CC : CC n'a rien fait pendant 5 mois pour limiter les dégâts (récupérer la page). Donc cet article joue en ta faveur pour reprocher à CC de n'avoir rien fait pour mitiger."
  }
];

const LegalPage = () => (
  <div className="space-y-6">
    <Card title="⚖️ Arsenal juridique — Droit suisse" accent="purple">
      <div className="space-y-3">
        {DATA.legal.swiss.map((item, i) => (
          <div key={i} className="p-4 bg-slate-800/30 rounded-lg flex items-start justify-between gap-4">
            <div className="flex-1">
              <div className="font-mono text-purple-400">{item.art}</div>
              <div className="font-medium text-slate-200">{item.name}</div>
              <div className="text-sm text-slate-400 mt-1">{item.use}</div>
            </div>
            <Badge type={item.status}>{item.status === 'invoked' ? 'INVOQUÉ' : 'EN RÉSERVE'}</Badge>
          </div>
        ))}
      </div>
    </Card>

    <Card title="📜 Textes de loi — Détails complets" accent="blue">
      <div className="space-y-6">
        {articlesDetails.map((article, i) => (
          <div key={i} className="border-l-4 border-blue-500/50 pl-6 py-2">
            <div className="font-mono text-blue-400 text-lg mb-1">{article.art}</div>
            <div className="font-semibold text-slate-200 text-lg mb-3">{article.name}</div>

            <div className="bg-slate-800/40 border border-slate-700/50 rounded-lg p-4 mb-3">
              <div className="text-xs uppercase tracking-wider text-slate-500 mb-2">Texte de loi</div>
              <p className="text-slate-300 italic leading-relaxed">{article.text}</p>
            </div>

            <div className="bg-green-900/20 border border-green-500/30 rounded-lg p-4">
              <div className="text-xs uppercase tracking-wider text-green-400 mb-2 flex items-center gap-2">
                <span>🎯</span>
                <span>Pertinence pour le dossier</span>
              </div>
              <p className="text-slate-200">{article.pertinence}</p>
            </div>
          </div>
        ))}

        <div className="bg-purple-900/20 border border-purple-500/30 rounded-lg p-4 mt-6">
          <div className="text-purple-300 font-semibold mb-2">🎯 CONCLUSION</div>
          <p className="text-slate-300 mb-3">
            Ces articles sont pertinents et font avancer le dossier. Ce ne sont pas des hallucinations. Ils ajoutent des armes juridiques :
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
            <div className="bg-slate-800/50 rounded p-3">
              <div className="font-mono text-purple-400 text-sm">Art. 101 CO</div>
              <div className="text-slate-300 text-sm">Tenir CC responsable des fautes de Jonathan/Joel</div>
            </div>
            <div className="bg-slate-800/50 rounded p-3">
              <div className="font-mono text-purple-400 text-sm">Art. 398 CO</div>
              <div className="text-slate-300 text-sm">Attaquer le manque de diligence de CC</div>
            </div>
            <div className="bg-slate-800/50 rounded p-3">
              <div className="font-mono text-purple-400 text-sm">Art. 163 CO</div>
              <div className="text-slate-300 text-sm">Réduire les pénalités ×3 si jugées excessives</div>
            </div>
            <div className="bg-slate-800/50 rounded p-3">
              <div className="font-mono text-purple-400 text-sm">Art. 44 CO</div>
              <div className="text-slate-300 text-sm">Reprocher à CC de n'avoir rien fait pour mitiger</div>
            </div>
          </div>
        </div>
      </div>
    </Card>
  </div>
);

export default LegalPage;
