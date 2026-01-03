// ═══════════════════════════════════════════════════════════════════════════════
// 09-JURIDIQUE.TS — Base juridique et articles de loi
// ═══════════════════════════════════════════════════════════════════════════════

import { KnowledgeChunk } from '../types';

export const juridiqueChunks: KnowledgeChunk[] = [
  // ─────────────────────────────────────────────────────────────────────────────
  // DROIT APPLICABLE
  // ─────────────────────────────────────────────────────────────────────────────
  {
    id: "juridique-droit-applicable",
    category: "juridique",
    title: "Droit applicable au litige",
    content: `DROIT APPLICABLE AU LITIGE

DROIT PRINCIPAL: DROIT SUISSE
• Clause 14 du contrat: Arbitrage ICC à Genève
• Code des Obligations suisse (CO)
• Code Civil suisse (CC)

DROIT SECONDAIRE (potentiel): DROIT FRANÇAIS
• ADN Production est une société française (Marseille)
• Art. 323-1 Code Pénal français (accès frauduleux STAD)
• Peut servir de LEVIER (plainte pénale)

JURIDICTION:
• Arbitrage ICC (Chambre de Commerce Internationale)
• Lieu: Genève, Suisse
• Langue: Anglais
• Nombre d'arbitres: 3`,
    keywords: ["droit", "applicable", "suisse", "français", "arbitrage", "icc", "genève"]
  },

  // ─────────────────────────────────────────────────────────────────────────────
  // ARTICLES INVOQUÉS
  // ─────────────────────────────────────────────────────────────────────────────
  {
    id: "juridique-art-82-co",
    category: "juridique",
    title: "Article 82 CO — Exception d'inexécution",
    content: `ARTICLE 82 CO — EXCEPTION D'INEXÉCUTION

TEXTE (résumé):
Dans un contrat bilatéral, celui qui veut réclamer l'exécution de l'obligation de l'autre partie doit avoir exécuté ou offrir d'exécuter sa propre obligation.

APPLICATION AU CAS ADN:

ARGUMENT ADN:
• CC avait une obligation de GARDE des actifs (Conditions Precedents)
• CC n'a pas protégé la page Oye (piratage)
• CC n'a pas tenté de récupérer la page (4+ mois d'inaction)
• DONC: ADN peut suspendre ses paiements tant que CC n'a pas exécuté son obligation

CONTRE-ARGUMENT CC (lettre 26/12):
• CC prétend que l'Art. 82 est "inapplicable"
• CC nie avoir une obligation de garde
• CC dit que leur accès était "technique, pas custodial"

RÉPONSE ADN:
• Le contrat dit: "shall remain part of management tools" = garde
• Meta affiche CC comme "responsable de cette Page"
• CC était le SEUL Super Admin avec contrôle de sécurité

PROBABILITÉ DE SUCCÈS: 55-65%

FIABILITÉ: ✅ Article de loi + arguments factuels`,
    keywords: ["article 82", "co", "exception", "inexécution", "suspension", "paiements"]
  },
  {
    id: "juridique-art-97-co",
    category: "juridique",
    title: "Article 97 CO — Responsabilité pour inexécution",
    content: `ARTICLE 97 CO — RESPONSABILITÉ POUR INEXÉCUTION

TEXTE (résumé):
Lorsque le débiteur ne peut s'acquitter de son obligation ou ne l'exécute qu'imparfaitement, il est tenu de réparer le dommage en résultant, à moins qu'il ne prouve qu'aucune faute ne lui est imputable.

APPLICATION AU CAS ADN:

ARGUMENT ADN:
• CC avait l'obligation de protéger les actifs (Super Admin)
• CC n'a pas exécuté cette obligation correctement
• ADN a subi un dommage (perte page Oye = ~1M€)
• CC doit réparer ce dommage

CHARGE DE LA PREUVE:
• ADN doit prouver: l'obligation, l'inexécution, le dommage
• CC doit prouver: l'absence de faute

CE QUE CC DEVRAIT PROUVER:
• Que le 2FA était actif (contredit par email Meta)
• Qu'ils ont fait tout ce qui était possible
• Que le piratage n'était pas évitable

CE QUE CC NE PEUT PAS PROUVER:
• Ils n'ont pas fourni les logs
• Ils n'ont pas fourni le rapport d'enquête
• Ils n'ont pas fourni les échanges complets avec Meta

FIABILITÉ: ✅ Article de loi`,
    keywords: ["article 97", "co", "responsabilité", "inexécution", "dommage", "faute"]
  },
  {
    id: "juridique-art-100-co",
    category: "juridique",
    title: "Article 100 CO — Nullité en cas de faute grave",
    content: `ARTICLE 100 CO — NULLITÉ DE L'EXONÉRATION EN CAS DE FAUTE GRAVE

TEXTE (résumé):
Est nulle toute clause qui libérerait d'avance le débiteur de la responsabilité qu'il encourrait en cas de dol ou de faute grave.

APPLICATION AU CAS ADN:

CIBLE: CLAUSE 9.2 (Limitation de responsabilité CC à 150 000 €)

ARGUMENT ADN:
• Si CC a commis une FAUTE GRAVE, la Clause 9.2 est NULLE
• CC pourrait être responsable de la TOTALITÉ du préjudice (pas juste 150k€)

CE QUI CONSTITUE UNE FAUTE GRAVE:
1. Gmail personnel pour administrer des actifs de 1M€+ (×2 personnes)
2. 2FA non actif malgré recommandation Meta
3. 4+ mois d'inaction totale après le piratage
4. Aucune enquête interne documentée
5. Oye = seule page piratée du portefeuille CC

PROBABILITÉ D'ANNULER LA CLAUSE 9.2: 30-40%

NOTE:
L'Art. 100 CO est en RÉSERVE dans la lettre ADN du 19/12.
Il n'a pas été pleinement invoqué pour garder une marge de manœuvre.

FIABILITÉ: ✅ Article de loi`,
    keywords: ["article 100", "co", "nullité", "faute grave", "exonération", "dol"]
  },
  {
    id: "juridique-art-2-cc",
    category: "juridique",
    title: "Article 2 CC — Abus de droit",
    content: `ARTICLE 2 CC — ABUS DE DROIT

TEXTE:
Chacun est tenu d'exercer ses droits et d'exécuter ses obligations selon les règles de la bonne foi.
L'abus manifeste d'un droit n'est pas protégé par la loi.

APPLICATION AU CAS ADN:

CIBLE: CLAUSE 7 (Breach Call Option — IP pour 1$)

ARGUMENT ADN:
• CC a causé un préjudice de ~1M€ à ADN (perte page Oye)
• CC veut maintenant activer la Clause 7 pour récupérer 142k€
• Et prendre TOUTE la propriété intellectuelle d'ADN pour 1$
• C'est DISPROPORTIONNÉ = ABUS DE DROIT

DISPROPORTION:
| Ce que CC veut | Ce que CC a causé |
|----------------|-------------------|
| Récupérer 142k€ | Préjudice de ~1M€ |
| Acquérir toute l'IP pour 1$ | Perte d'un actif de ~1M€ |

JURISPRUDENCE SUISSE:
L'abus de droit est reconnu quand:
• L'exercice du droit est disproportionné
• Il y a contradiction avec le comportement antérieur
• L'exercice vise uniquement à nuire

CC A VIOLÉ LA BONNE FOI:
• Refus du remboursement anticipé (oct 2024)
• Refus du compte séquestre (oct-nov 2025)
• Promesses orales non tenues (transfert BM, crédits Meta)
• Inaction de 4+ mois

PROBABILITÉ DE BLOQUER LA CLAUSE 7: 55-65%

NOTE:
CC n'a PAS répondu à l'Art. 2 CC dans sa lettre du 26/12.
C'est un SILENCE révélateur.

FIABILITÉ: ✅ Article de loi`,
    keywords: ["article 2", "cc", "abus", "droit", "bonne foi", "disproportionné", "clause 7"]
  },
  {
    id: "juridique-art-323-1-cp",
    category: "juridique",
    title: "Article 323-1 CP (France) — Accès frauduleux STAD",
    content: `ARTICLE 323-1 CODE PÉNAL FRANÇAIS — ACCÈS FRAUDULEUX STAD

TEXTE:
"Le fait d'accéder ou de se maintenir, frauduleusement, dans tout ou partie d'un système de traitement automatisé de données est puni de trois ans d'emprisonnement et de 100 000 € d'amende."

APPLICATION AU CAS ADN:

UTILISATION: LEVIER DE PRESSION (pas une action principale)

ARGUMENT ADN:
• La page Oye était un "système de traitement automatisé de données"
• Des pirates ont accédé frauduleusement à ce système
• Le piratage a eu lieu alors que CC était responsable de la sécurité
• ADN peut déposer une plainte pénale en France

POURQUOI C'EST UN LEVIER:
• Une plainte pénale peut créer une pression médiatique
• CC devrait se défendre sur deux fronts (civil + pénal)
• Les investigations pénales pourraient révéler des informations

LIMITES:
• Ce n'est pas CC qui a piraté (c'est un tiers)
• La responsabilité pénale de CC est indirecte
• L'objectif est la PRESSION, pas la condamnation

STATUT: EN RÉSERVE (mentionné dans lettre ADN 19/12)

FIABILITÉ: ✅ Article de loi français`,
    keywords: ["article 323-1", "cp", "pénal", "fraud", "stad", "plainte", "levier"]
  },

  // ─────────────────────────────────────────────────────────────────────────────
  // AUTRES ARTICLES
  // ─────────────────────────────────────────────────────────────────────────────
  {
    id: "juridique-autres-articles",
    category: "juridique",
    title: "Autres articles en réserve",
    content: `AUTRES ARTICLES EN RÉSERVE

ARTICLE 101 CO — Responsabilité pour auxiliaires:
• CC est responsable des fautes de ses employés (Jonathan, Joel)
• Les Gmail personnels = faute des employés → responsabilité CC

ARTICLE 120-125 CO — Compensation:
• ADN peut déclarer une contre-créance (préjudice subi)
• Permet de compenser dette vs préjudice
• ATTENTION: Pas automatique si créance contestée

ARTICLE 398 CO — Diligence du mandataire:
• CC avait un rôle de "mandataire" pour gérer les actifs
• Obligation de diligence (comme un bon père de famille)
• Gmail personnel + 2FA absent = manque de diligence

ARTICLE 44 CO — Devoir de mitigation:
• CC avait le devoir de LIMITER les dégâts après le piratage
• CC n'a RIEN fait pendant 4+ mois
• → Violation du devoir de mitigation
• Cet article peut être utilisé CONTRE CC

TABLEAU RÉCAPITULATIF:
| Article | Objectif | Probabilité |
|---------|----------|-------------|
| Art. 82 CO | Suspendre paiements | 55-65% |
| Art. 97 CO | Demander dommages | - |
| Art. 100 CO | Annuler Clause 9.2 | 30-40% |
| Art. 2 CC | Bloquer Clause 7 | 55-65% |
| Art. 323-1 CP | Levier/pression | - |`,
    keywords: ["articles", "réserve", "101", "120", "398", "44", "co"]
  },

  // ─────────────────────────────────────────────────────────────────────────────
  // ARBITRAGE
  // ─────────────────────────────────────────────────────────────────────────────
  {
    id: "juridique-arbitrage-icc",
    category: "juridique",
    title: "Arbitrage ICC — Coûts et procédure",
    content: `ARBITRAGE ICC — COÛTS ET PROCÉDURE

CLAUSE 14 DU CONTRAT:
• Institution: ICC (Chambre de Commerce Internationale)
• Lieu: Genève, Suisse
• Langue: Anglais
• Nombre d'arbitres: 3

ESTIMATION DES COÛTS:

Frais administratifs ICC:
• Calculés sur la valeur du litige
• Pour ~150k€ de litige: 15 000 - 30 000 €
• Pour ~1M€ de litige: 30 000 - 50 000 €

Honoraires des 3 arbitres:
• ~15 000 - 50 000 € par arbitre
• Total: 50 000 - 150 000 €

Avocats (chaque partie):
• Préparation: 10 000 - 30 000 €
• Audience: 10 000 - 30 000 €
• Expertise: 10 000 - 40 000 €
• Total par partie: 30 000 - 100 000 €

COÛT TOTAL ESTIMÉ:
• Minimum: 80 000 €
• Maximum: 300 000 €
• Moyenne: ~150 000 €

ABSURDITÉ ÉCONOMIQUE POUR CC:
• CC réclame ~142 000 € à ADN
• CC devrait dépenser ~75 000 - 150 000 € en arbitrage (sa part)
• Même si CC gagne, ils n'ont RIEN à saisir chez Alex
• → L'arbitrage est économiquement ABSURDE pour CC

CONCLUSION:
Les menaces d'arbitrage de CC sont probablement du BLUFF.
CC préférera négocier plutôt que dépenser 150k€ pour peut-être récupérer 142k€.`,
    keywords: ["arbitrage", "icc", "coûts", "procédure", "genève", "bluff"]
  }
];

export default juridiqueChunks;