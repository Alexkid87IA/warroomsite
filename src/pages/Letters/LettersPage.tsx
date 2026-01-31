import { Badge } from '../../components/Badge';
import { Card } from '../../components/Card';
import { allLetters } from './data';

const LettersPage = () => (
  <div className="space-y-6">
    {allLetters.map((letter, idx) => {
      const isCC = letter.type === 'cc';
      const accent = isCC ? 'red' : 'blue';
      const icon = isCC ? '📩' : '📄';

      return (
        <Card
          key={idx}
          title={`${icon} ${isCC ? 'Lettre CC' : 'Lettre ADN'} — ${letter.date}`}
          accent={accent}
        >
          {/* Summary + sender */}
          <div className="mb-4 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2">
            <div className="text-slate-400 text-sm">Expéditeur: {letter.sender}</div>
            {letter.critical && <Badge type="critical">LETTRE NUCLÉAIRE</Badge>}
            {letter.timing && <Badge type="warning">{letter.timing}</Badge>}
          </div>
          <div className="text-slate-300 text-sm mb-4 p-3 bg-slate-800/30 rounded-lg">
            {letter.summary}
          </div>

          {/* Sections (ADN letters) */}
          {letter.sections && (
            <div className="grid md:grid-cols-2 gap-3 mb-4">
              {letter.sections.map((sec, i) => (
                <div key={i} className="p-3 bg-slate-800/30 rounded-lg">
                  <div className={`${isCC ? 'text-red-400' : 'text-blue-400'} text-xs font-bold`}>
                    {sec.num}. {sec.title}
                  </div>
                  <div className="text-slate-300 text-sm mt-1">{sec.content}</div>
                </div>
              ))}
            </div>
          )}

          {/* Documents requested (ADN letters) */}
          {letter.documentsRequested && (
            <div className="mb-4">
              <div className="text-slate-400 text-xs font-bold mb-2">DOCUMENTS DEMANDÉS</div>
              <div className="space-y-1">
                {letter.documentsRequested.map((doc, i) => (
                  <div key={i} className="text-slate-300 text-sm pl-3 border-l-2 border-blue-500/30">
                    {doc}
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Claims (CC letters) */}
          {letter.claims && (
            <div className="space-y-3 mb-4">
              <div className="text-slate-400 text-xs font-bold">AFFIRMATIONS CC</div>
              {letter.claims.filter(c => c.critical).map((item, i) => (
                <div key={i} className="p-3 rounded-lg bg-red-900/20 border border-red-500/30">
                  <div className="text-slate-300 text-sm">
                    <span className="text-slate-500">Leur affirmation:</span> "{item.claim}"
                  </div>
                  <div className="text-red-300 font-medium text-sm mt-1">{item.response}</div>
                </div>
              ))}
              {letter.claims.filter(c => !c.critical).map((item, i) => (
                <div key={i} className="p-3 rounded-lg bg-slate-800/30">
                  <div className="text-slate-300 text-sm">
                    <span className="text-slate-500">Leur affirmation:</span> "{item.claim}"
                  </div>
                  <div className="text-slate-400 text-sm mt-1">{item.response}</div>
                </div>
              ))}
            </div>
          )}

          {/* Demands (CC letters) */}
          {letter.demands && (
            <div className="mb-4 p-3 rounded-lg bg-red-900/10 border border-red-500/20">
              <div className="text-red-400 text-xs font-bold mb-2">DEMANDES CC</div>
              <div className="text-slate-300 text-sm">
                Montant: <span className="text-red-300 font-bold">{letter.demands.amount.toLocaleString('fr-FR')} €</span>
              </div>
              <div className="text-slate-400 text-sm">Délai: {letter.demands.deadline}</div>
              <div className="mt-2 space-y-1">
                {letter.demands.threats.map((t, i) => (
                  <div key={i} className="text-red-300/80 text-sm pl-3 border-l-2 border-red-500/30">{t}</div>
                ))}
              </div>
            </div>
          )}

          {/* Not answered (CC letters) */}
          {letter.notAnswered && (
            <div>
              <div className="text-amber-400 text-xs font-bold mb-2">NON RÉPONDU PAR CC</div>
              <div className="flex flex-wrap gap-2">
                {letter.notAnswered.map((item, i) => (
                  <Badge key={i} type="warning">{item}</Badge>
                ))}
              </div>
            </div>
          )}
        </Card>
      );
    })}
  </div>
);

export default LettersPage;
