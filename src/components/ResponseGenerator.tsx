import { memo, useState } from 'react';
import { MessageSquare, Copy, Check, ChevronDown } from 'lucide-react';
import { cn } from '../lib/utils';

interface ResponseTemplate {
  id: string;
  scenario: string;
  description: string;
  tone: 'firm' | 'neutral' | 'conciliatory';
  template: string;
  variables?: string[];
}

const TEMPLATES: ResponseTemplate[] = [
  {
    id: 'silence-constat',
    scenario: 'CC ne répond pas au délai 15j',
    description: 'Email de constat du défaut',
    tone: 'firm',
    template: `Objet : Constat de défaut — Délai du 31 janvier 2026 expiré

Messieurs,

Nous constatons qu'à la date du [DATE], vous n'avez pas donné suite à notre mise en demeure du 16 janvier 2026.

En particulier :
- Aucun document n'a été fourni (rapport d'enquête, logs, échanges Meta)
- Le transfert des pages Buzzly et VoyagerLoin n'a pas été effectué

Conformément aux termes de notre lettre, nous mettons en œuvre les mesures annoncées :
1. Communication publique auprès de notre communauté
2. Dépôt de plainte pénale (Art. 323-1 et 314-1 CP)
3. Préparation de la procédure arbitrale

Cette décision est définitive. Toute proposition de votre part sera examinée à la lumière de vos refus passés.

Cordialement,
Alexandre Quilghini
Président, ADN Production SAS`,
  },
  {
    id: 'aggressive-response',
    scenario: 'CC contre-attaque / menace',
    description: 'Réponse mesurée mais ferme',
    tone: 'firm',
    template: `Objet : RE: [Objet de leur email]

Messieurs,

Nous accusons réception de votre courrier du [DATE].

Nous notons que vous persistez à ignorer les questions de fond que nous avons posées depuis le 14 novembre 2025. Pour rappel, nous attendons toujours :
- Le rapport d'enquête interne sur le piratage
- Les logs de connexion au Business Manager
- Vos échanges avec Meta

Concernant votre créance alléguée de ~142 000 €, nous vous rappelons notre contre-créance de plus de 1 200 000 € résultant directement de vos manquements (Art. 97, 101 CO).

L'exception d'inexécution (Art. 82 CO) que nous avons invoquée reste pleinement applicable.

Nous restons à votre disposition pour toute proposition écrite et sérieuse.

Cordialement,
Alexandre Quilghini`,
  },
  {
    id: 'negotiate-response',
    scenario: 'CC propose de négocier',
    description: 'Réponse conditionnelle',
    tone: 'neutral',
    template: `Objet : RE: Proposition de règlement

Messieurs,

Nous avons pris connaissance de votre proposition du [DATE].

Avant d'examiner toute négociation, nous exigeons comme preuve préalable de bonne foi :
1. Le transfert immédiat des pages Buzzly et VoyagerLoin vers notre Business Manager
2. La transmission des documents demandés dans notre lettre du 16 janvier

Une fois ces conditions remplies, nous serons disposés à examiner votre proposition sur la base de nos conditions minimales, à savoir :
- Annulation intégrale de la dette restante (~142k€)
- Compensation du préjudice subi (à discuter)
- Quitus mutuel

Dans l'attente de vos actions concrètes.

Cordialement,
Alexandre Quilghini`,
  },
  {
    id: 'payment-demand',
    scenario: 'CC demande paiement (type Martin Febvre)',
    description: 'Rappel Art. 82 CO',
    tone: 'firm',
    template: `Objet : RE: Demande de paiement

Monsieur [NOM],

Nous accusons réception de votre demande de paiement du [DATE].

Nous vous invitons à prendre connaissance de notre lettre du 16 janvier 2026, adressée à M. Ojalvo, M. Kumet et M. Mayorkas, qui expose en détail notre position juridique.

Pour rappel : conformément à l'article 82 du Code des Obligations suisse, nos paiements sont suspendus jusqu'à ce que Copyright Capital SA ait exécuté ses propres obligations — ce qui n'est pas le cas à ce jour.

Notre contre-créance (+1,2M€) dépasse largement votre créance alléguée.

Nous vous prions de transmettre ce message à vos dirigeants et de ne plus nous adresser de demandes de paiement tant que les questions de fond n'auront pas été traitées.

Cordialement,
Alexandre Quilghini`,
  },
  {
    id: 'arbitrage-response',
    scenario: 'CC lance procédure arbitrale',
    description: 'Confirmation contre-créance',
    tone: 'firm',
    template: `Objet : Procédure arbitrale ICC — Position ADN Production

Messieurs,

Suite à votre notification de procédure arbitrale, nous confirmons notre intention de :

1. Faire valoir notre contre-créance de plus de 1 200 000 € au titre de :
   - Préjudice Oye (création, revenus perdus)
   - Atteinte à l'image de marque
   - Perte d'opportunités commerciales

2. Invoquer l'exception d'inexécution (Art. 82 CO)

3. Demander l'inapplicabilité des Clauses 6 et 7 pour :
   - Abus de droit (Art. 2 CC)
   - Application de la Clause 4.3(e)(ii)

4. Contester la limitation de responsabilité (Clause 9.2) pour faute grave (Art. 100 CO)

Notre dossier complet, incluant la synthèse de 9 experts et l'intégralité des preuves documentées, sera soumis au tribunal arbitral.

Nous nous réservons le droit d'engager parallèlement les procédures pénales annoncées.

Cordialement,
Alexandre Quilghini`,
  },
  {
    id: 'settlement-accept',
    scenario: 'Accord de règlement',
    description: 'Confirmation accord (si CC accepte)',
    tone: 'conciliatory',
    template: `Objet : Confirmation accord de règlement

Messieurs,

Suite à nos échanges, nous confirmons les termes de l'accord intervenu :

1. DETTE : [Annulation totale / Réduction à X€]
2. COMPENSATION : [Montant] € versé à ADN Production
3. ACTIFS : Transfert de Buzzly et VoyagerLoin vers notre Business Manager
4. DÉLAIS : Exécution complète sous [X] jours
5. QUITUS : Mutuel, effectif APRÈS réception intégrale

Nous vous prions de nous retourner ce document signé pour confirmation.

Le présent accord ne constitue pas une reconnaissance de responsabilité de l'une ou l'autre partie.

Cordialement,
Alexandre Quilghini`,
  },
];

const toneColors = {
  firm: 'bg-red-500/10 border-red-500/30 text-red-400',
  neutral: 'bg-amber-500/10 border-amber-500/30 text-amber-400',
  conciliatory: 'bg-emerald-500/10 border-emerald-500/30 text-emerald-400',
};

const toneLabels = {
  firm: 'Ferme',
  neutral: 'Neutre',
  conciliatory: 'Conciliant',
};

export const ResponseGenerator = memo(() => {
  const [selectedTemplate, setSelectedTemplate] = useState<string | null>(null);
  const [copied, setCopied] = useState(false);

  const handleCopy = (text: string) => {
    navigator.clipboard.writeText(text);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="space-y-4">
      <div className="flex items-center gap-2 mb-4">
        <MessageSquare className="text-blue-400" size={20} />
        <h3 className="text-lg font-semibold text-slate-200">Générateur de Réponses</h3>
      </div>

      <p className="text-sm text-slate-400 mb-4">
        Sélectionnez un scénario pour obtenir un modèle de réponse adapté.
        Personnalisez les variables entre crochets [X] avant envoi.
      </p>

      {/* Template list */}
      <div className="space-y-3">
        {TEMPLATES.map((template) => (
          <div
            key={template.id}
            className="bg-slate-800/50 rounded-lg border border-slate-700 overflow-hidden"
          >
            <button
              onClick={() =>
                setSelectedTemplate(selectedTemplate === template.id ? null : template.id)
              }
              className="w-full flex items-center justify-between p-4 hover:bg-slate-800/70 transition-colors"
            >
              <div className="flex items-center gap-3">
                <span
                  className={cn(
                    'px-2 py-1 text-xs rounded border',
                    toneColors[template.tone]
                  )}
                >
                  {toneLabels[template.tone]}
                </span>
                <div className="text-left">
                  <div className="text-slate-200 font-medium">{template.scenario}</div>
                  <div className="text-slate-400 text-sm">{template.description}</div>
                </div>
              </div>
              <ChevronDown
                size={20}
                className={cn(
                  'text-slate-400 transition-transform',
                  selectedTemplate === template.id && 'rotate-180'
                )}
              />
            </button>

            {selectedTemplate === template.id && (
              <div className="border-t border-slate-700">
                <div className="p-4">
                  <div className="flex justify-end mb-2">
                    <button
                      onClick={() => handleCopy(template.template)}
                      className={cn(
                        'flex items-center gap-2 px-3 py-1.5 rounded text-sm transition-colors',
                        copied
                          ? 'bg-emerald-500/20 text-emerald-400'
                          : 'bg-slate-700 text-slate-300 hover:bg-slate-600'
                      )}
                    >
                      {copied ? (
                        <>
                          <Check size={14} />
                          Copié !
                        </>
                      ) : (
                        <>
                          <Copy size={14} />
                          Copier
                        </>
                      )}
                    </button>
                  </div>
                  <pre className="bg-slate-900 rounded-lg p-4 text-sm text-slate-300 whitespace-pre-wrap font-mono overflow-x-auto">
                    {template.template}
                  </pre>
                </div>

                <div className="px-4 pb-4">
                  <div className="bg-amber-500/10 border border-amber-500/30 rounded-lg p-3">
                    <div className="text-amber-400 text-sm font-medium mb-1">
                      Rappel important
                    </div>
                    <p className="text-slate-400 text-sm">
                      Toujours envoyer par email ET lettre recommandée avec AR.
                      Conserver une copie datée de chaque envoi.
                    </p>
                  </div>
                </div>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
});

ResponseGenerator.displayName = 'ResponseGenerator';
