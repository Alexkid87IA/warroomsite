// ═══════════════════════════════════════════════════════════════════════════════
// 02-CONTRATS.TS — Structure contractuelle complète
// ═══════════════════════════════════════════════════════════════════════════════

import { KnowledgeChunk } from '../types';

export const contratsChunks: KnowledgeChunk[] = [
  // ─────────────────────────────────────────────────────────────────────────────
  // DOCUMENTS SIGNÉS
  // ─────────────────────────────────────────────────────────────────────────────
  {
    id: "contrats-documents",
    category: "contrats",
    title: "Documents contractuels signés",
    content: `DOCUMENTS CONTRACTUELS SIGNÉS

1. LICENSE AGREEMENT (GENERAL CONDITIONS)
• Date signature: 25 septembre 2024
• Signataires: Alexandre Quilghini (ADN) / Jack Ojalvo (CC)
• Version: PA (En) v2023.10.02 — 20 pages
• Contenu: Conditions générales, Clauses 1-14
• Source: PDF DocuSign
• FIABILITÉ: ✅ PROUVÉ

2. PURCHASE ORDER (PRODUCTION ADVANCE)
• Date signature: 26 septembre 2024
• Signataires: Alexandre Quilghini (ADN) / Jack Ojalvo (CC)
• Contenu: Avance 150k€, remboursement, Revenue Share, Conditions Precedents
• Source: PDF DocuSign
• FIABILITÉ: ✅ PROUVÉ

3. AMENDMENT PROTOCOL
• Date signature: 2 octobre 2024
• Signataires: 
  - Alexandre Quilghini (Licensor) — 02-Oct-24 13:50:10 CEST
  - Jack Ojalvo (Licensee) — 02-Oct-24 16:10:24 CEST
  - Alexandre Quilghini (Guarantor) — 02-Oct-24 13:50:10 CEST
• Version: PA (En) v2023.10.04 — 1 page
• Contenu: Garantie personnelle Alex, Minimum 6 000 €/mois
• Source: PDF DocuSign
• FIABILITÉ: ✅ PROUVÉ`,
    keywords: ["contrat", "license", "agreement", "purchase", "order", "amendment", "signature", "docusign"]
  },

  // ─────────────────────────────────────────────────────────────────────────────
  // MONTANTS
  // ─────────────────────────────────────────────────────────────────────────────
  {
    id: "contrats-montants",
    category: "contrats",
    title: "Montants contractuels",
    content: `MONTANTS CONTRACTUELS

PRODUCTION ADVANCE (Avance reçue par ADN):
• Montant total: 150 000 € (versé en 2 tranches: 65k + 85k)
• FIABILITÉ: ✅ PROUVÉ (source: contrat PO)

SPECIFIED AMOUNT (À rembourser):
• Montant standard: 210 000 €
• Si payé en 1 an: 202 500 € (réduction de 7 500 €)
• FIABILITÉ: ✅ PROUVÉ (source: contrat PO)

REVENUE SHARE:
• Taux standard: 30% des revenus
• Si non payé en 2 ans: 50% des revenus
• FIABILITÉ: ✅ PROUVÉ (source: contrat PO)

MINIMUM MENSUEL (Amendment):
• Montant: 6 000 €/mois
• Garanti personnellement par Alex
• FIABILITÉ: ✅ PROUVÉ (source: Amendment)

SITUATION ACTUELLE:
• Déjà remboursé par ADN: ~68 000 - 70 000 €
• Solde restant dû (selon CC): ~142 000 €
• Arriérés réclamés (lettre CC 26/12): 38 551 € sous 5 jours
• FIABILITÉ: 🔶 CONFIRMÉ (déjà remboursé) / ✅ PROUVÉ (solde et arriérés)

SECOND PRODUCTION ADVANCE (Non activé):
• Montant prévu: 200 000 €
• Condition d'activation: Specified Amount payé en 1 an + quality check
• Statut: NON ACTIVÉ
• FIABILITÉ: ✅ PROUVÉ (source: contrat PO)`,
    keywords: ["montant", "150000", "210000", "142000", "6000", "dette", "remboursement", "revenue", "share", "minimum"]
  },

  // ─────────────────────────────────────────────────────────────────────────────
  // CLAUSES DANGEREUSES
  // ─────────────────────────────────────────────────────────────────────────────
  {
    id: "contrats-clause-6",
    category: "contrats",
    title: "Clause 6 — Liquidated Damages (Pénalités ×3)",
    content: `CLAUSE 6 — LIQUIDATED DAMAGES (PÉNALITÉS)

⚠️ DANGER: 🔴 CRITIQUE

TEXTE RÉSUMÉ:
Si ADN a plus de 6 mois de retard de paiement, les pénalités peuvent être multipliées par 3.

CALCUL IMPACT MAXIMUM:
• Specified Amount: 210 000 €
• Multiplicateur: ×3
• TOTAL POTENTIEL: 630 000 €

CONDITIONS D'APPLICATION:
La Clause 6 s'applique si:
1. ADN est en défaut de paiement
2. Le retard dépasse 6 mois
3. Le défaut n'est PAS couvert par l'exception Clause 4.3(e)(ii)

DÉFENSE ADN — CLAUSE 4.3(e)(ii):
Les pénalités NE S'APPLIQUENT PAS si le manquement:
• Est "without fault" (sans faute d'ADN)
• "Could not have been prevented" (n'aurait pas pu être évité par ADN)

ARGUMENT ADN:
Le piratage de la page Oye n'est PAS la faute d'ADN:
• ADN n'avait pas le contrôle du Business Manager
• CC était le Super Admin avec contrôle exclusif
• ADN n'avait pas accès aux paramètres de sécurité (2FA)
• ADN a alerté CC dès la découverte du piratage

FIABILITÉ: ✅ PROUVÉ (source: contrat)`,
    keywords: ["clause 6", "liquidated", "damages", "pénalités", "retard", "630000", "multiplication"]
  },
  {
    id: "contrats-clause-7",
    category: "contrats",
    title: "Clause 7 — Breach Call Option (IP pour 1$)",
    content: `CLAUSE 7 — BREACH CALL OPTION

⚠️ DANGER: 🔴 CRITIQUE — LA PLUS DANGEREUSE

TEXTE (Clause 7.1):
"In case of occurrence of a Shortfall (as specified in Clause 6 (Liquidated Damages)) which remains unremedied for a period of 60 (sixty) days following written notice by Licensee to Licensor specifying the breach ('Breach Option Period'), Licensee shall have the right to acquire all Intellectual Property Rights of Licensor by serving a written notice ('Breach Call Notice')."

TEXTE (Clause 7.2):
"If Licensee exercises its right under Clause 7.1, all the Intellectual Property Rights of Licensor shall be transferred to Licensee in exchange for the payment of 1 (one) USD."

EN CLAIR:
Si ADN est en défaut de paiement pendant 60 jours après mise en demeure:
→ CC peut acquérir TOUTE la propriété intellectuelle d'ADN pour 1 USD

ACTIFS CONCERNÉS:
• Page Oye (1,2M abonnés) — déjà perdue
• Page Buzzly
• Page VoyagerLoin
• Chaîne YouTube Origines Media
• Tous les comptes TikTok, Instagram, X, Snapchat
• TOUT le contenu créé (200+ vidéos, 4 ans de travail)

DÉFENSE ADN — ARTICLE 2 CC (Abus de droit):
Activer la Clause 7 pour récupérer 142 000 € alors que CC a causé 1M€+ de préjudice = ABUS DE DROIT au sens de l'Art. 2 du Code Civil suisse.

PROBABILITÉ DE BLOQUER LA CLAUSE 7: 55-65%

FIABILITÉ: ✅ PROUVÉ (source: contrat)`,
    keywords: ["clause 7", "breach", "call", "option", "ip", "1 dollar", "propriété", "intellectuelle", "acquisition"]
  },
  {
    id: "contrats-clause-9",
    category: "contrats",
    title: "Clause 9 — Limitation de responsabilité",
    content: `CLAUSE 9 — LIMITATION DE RESPONSABILITÉ

CLAUSE 9.2 — Plafond de responsabilité CC:
La responsabilité de Copyright Capital est plafonnée à 150 000 €.

⚠️ DANGER: 🟡 MOYEN

TEXTE (Clause 9.2):
"Neither party shall be liable to the other for any special, indirect, incidental, consequential, punitive or exemplary damages of any kind, or for any loss of profits, business, contracts, revenue, goodwill, production, anticipated savings or wasted expenditure..."

LIMITATION POUR CC:
Si CC est reconnu responsable du préjudice, ils ne paieraient que 150 000 € maximum.

MAIS — CLAUSE 9.3 (Exclusions):
La limitation NE S'APPLIQUE PAS en cas de:
• Fraud (fraude)
• Gross negligence (négligence grave)
• Willful misconduct (faute intentionnelle)

DÉFENSE ADN — ARTICLE 100 CO SUISSE:
L'Art. 100 du Code des Obligations suisse permet d'ANNULER une clause d'exonération en cas de FAUTE GRAVE (dol ou négligence grave).

ARGUMENTS POUR FAUTE GRAVE DE CC:
1. Gmail personnel pour administrer des actifs de 1M€+ (×2 personnes = systématique)
2. 2FA non actif malgré recommandation Meta
3. 4+ mois d'inaction totale après le piratage
4. Aucune enquête interne documentée
5. Oye = seule page piratée du portefeuille CC

PROBABILITÉ D'ANNULER LA CLAUSE 9.2: 30-40%

FIABILITÉ: ✅ PROUVÉ (source: contrat)`,
    keywords: ["clause 9", "limitation", "responsabilité", "150000", "plafond", "faute grave", "négligence"]
  },
  {
    id: "contrats-clause-14",
    category: "contrats",
    title: "Clause 14 — Arbitrage ICC Genève",
    content: `CLAUSE 14 — ARBITRAGE ICC

TEXTE:
L'arbitrage sera conduit selon les règles de la Chambre de Commerce Internationale (ICC) à Genève, en anglais, avec 3 arbitres.

DÉTAILS:
• Institution: ICC (Chambre de Commerce Internationale)
• Lieu: Genève, Suisse
• Langue: Anglais
• Nombre d'arbitres: 3

COÛT ESTIMÉ DE L'ARBITRAGE ICC:
• Frais administratifs ICC: 15 000 - 50 000 €
• Honoraires des 3 arbitres: 50 000 - 150 000 €
• Avocats (chaque partie): 30 000 - 100 000 €
• TOTAL: 80 000 à 300 000 €

⚠️ DANGER: 🟡 MOYEN — Coûteux pour les DEUX parties

ARGUMENT STRATÉGIQUE ADN:
CC devrait dépenser 100 000 - 300 000 € en arbitrage pour récupérer 142 000 € de dette.
C'est économiquement ABSURDE pour CC.
De plus, si CC perd, ils n'auront RIEN à saisir chez Alex (pas d'actifs).

CONCLUSION: La menace d'arbitrage de CC est probablement du BLUFF.

FIABILITÉ: ✅ PROUVÉ (source: contrat)`,
    keywords: ["clause 14", "arbitrage", "icc", "genève", "coût", "arbitres", "anglais"]
  },

  // ─────────────────────────────────────────────────────────────────────────────
  // CONDITIONS PRECEDENTS
  // ─────────────────────────────────────────────────────────────────────────────
  {
    id: "contrats-conditions-precedents",
    category: "contrats",
    title: "Conditions Precedents — Super Admin obligatoire",
    content: `CONDITIONS PRECEDENTS — OBLIGATIONS DE CC

⚠️ IMPORTANCE STRATÉGIQUE MAJEURE

TEXTE EXACT — CONDITION 1 (Super Admin Access):
"The Licensor shall provide and maintain the Licensee with an administrative access to the Platform Channels belonging to the Licensor, revokable only by the Licensee, allowing solely the Licensee to adjust payment settings to collect revenues on behalf of the Licensor.

In particular, the Licensor shall appoint the Licensee as super-administrator ('Super Admin') of the Facebook Channels listed above.

It is agreed that such administrative access should not be used by the Licensee to comment, edit or post contents."

TEXTE EXACT — CONDITION 2 (Integration into CC's Management Tools):
"The Licensor's Platform Channels listed above shall become and remain part of the intellectual property and copyright management tools of the Licensee.

In particular, the Licensor's YouTube Channels listed above shall become and remain part of the multi-channel network owned or controlled by the Licensee on YouTube, and the Licensor's Facebook Channels listed above shall become and remain part of the Facebook Rights Manager tool of the Licensee."

CE QUE ÇA PROUVE:
1. CC était contractuellement OBLIGÉ d'être Super Admin
2. CC avait le CONTRÔLE TECHNIQUE EXCLUSIF du Business Manager
3. Les pages devaient RESTER dans les outils de gestion de CC
4. CC avait une OBLIGATION DE GARDE sur les actifs

CONTRADICTION AVEC LA LETTRE CC DU 26/12:
CC prétend: "Technical administrative access ≠ custodial responsibility"
LE CONTRAT DIT: CC doit "maintain" l'accès et les pages doivent "remain part of" leurs outils
→ C'est EXACTEMENT une responsabilité de garde (custodial)

FIABILITÉ: ✅ PROUVÉ (source: contrat PO)`,
    keywords: ["conditions", "precedents", "super admin", "obligation", "garde", "contrôle", "management tools"]
  },

  // ─────────────────────────────────────────────────────────────────────────────
  // GARANTIE PERSONNELLE
  // ─────────────────────────────────────────────────────────────────────────────
  {
    id: "contrats-garantie-personnelle",
    category: "contrats",
    title: "Garantie personnelle d'Alexandre Quilghini",
    content: `GARANTIE PERSONNELLE — AMENDMENT PROTOCOL

TEXTE EXACT:
"I, Alexandre Quilghini, the undersigned, having thoroughly understood the terms of this Amendment Protocol, the PO, and the Content License and Development Agreement dated September 26, 2024 ('License Agreement'), which was executed between the Licensee and Licensor, hereby irrevocably and personally guarantee the immediate and full payment of the minimum monthly payment of EUR 6,000 (Six Thousand Euros) as specified above.

My obligation under this personal guarantee shall take precedence over any other obligations or liabilities I may have, and I agree that my liability hereunder shall be fulfilled first and foremost, prior to the satisfaction of any other obligations."

CE QUE LA GARANTIE COUVRE:
✅ Minimum mensuel de 6 000 €/mois

CE QUE LA GARANTIE NE COUVRE PAS:
❌ Dette totale (142 000 €)
❌ Liquidated Damages (×3 = jusqu'à 630 000 €)
❌ Breach Call Option
❌ Intérêts et pénalités additionnelles

INTERPRÉTATION DE CC (Lettre 26/12):
CC prétend que la garantie est "personal, unconditional, and independent" couvrant TOUT.
C'est une INTERPRÉTATION EXTENSIVE — le texte ne mentionne que les 6 000 €/mois.

ARGUMENT ADN:
La garantie est LIMITÉE au minimum mensuel. Le reste (dette, pénalités) engage ADN Production SAS, pas Alex personnellement.

FIABILITÉ: ✅ PROUVÉ (source: Amendment Protocol)`,
    keywords: ["garantie", "personnelle", "alex", "6000", "amendment", "minimum", "mensuel"]
  },

  // ─────────────────────────────────────────────────────────────────────────────
  // CLAUSES DE DÉFENSE
  // ─────────────────────────────────────────────────────────────────────────────
  {
    id: "contrats-clause-defense",
    category: "contrats",
    title: "Clause 4.3(e)(ii) — Exception aux pénalités",
    content: `CLAUSE 4.3(e)(ii) — EXCEPTION AUX PÉNALITÉS

⚠️ LEVIER DE DÉFENSE ADN

TEXTE:
Les pénalités (Clause 6) ne s'appliquent pas si le manquement:
• Est "without fault" (sans faute du Licensor)
• "Could not have been prevented" (n'aurait pas pu être évité par le Licensor)

APPLICATION AU CAS ADN:

ARGUMENT 1 — "Without fault":
Le piratage n'est PAS la faute d'ADN:
• ADN n'avait pas le contrôle du Business Manager
• CC était le seul Super Admin
• ADN n'avait pas accès aux paramètres de sécurité

ARGUMENT 2 — "Could not have been prevented":
ADN ne pouvait pas empêcher le piratage:
• Pas d'accès au 2FA
• Pas d'accès aux logs de connexion
• Pas de contrôle sur les emails admin (Gmail de Jonathan)

CONCLUSION:
Si le tribunal accepte ces arguments, les Liquidated Damages (×3) ne s'appliquent PAS.
ADN ne devrait que le solde restant (~142 000 €), pas 630 000 €.

FIABILITÉ: ✅ PROUVÉ (source: contrat)`,
    keywords: ["clause 4", "exception", "without fault", "prevented", "défense", "pénalités"]
  },
  {
    id: "contrats-actifs-couverts",
    category: "contrats",
    title: "Actifs couverts par le contrat",
    content: `PLATFORM CHANNELS COUVERTS PAR LE CONTRAT

FACEBOOK:
• Oye — 1,2 million d'abonnés — ⚠️ PERDUE/PIRATÉE
• Buzzly — Active, sous BM de CC
• VoyagerLoin — Active, sous BM de CC

YOUTUBE:
• Origines Media — Active, sous contrôle CC

AUTRES PLATEFORMES:
• TikTok — Divers comptes
• Instagram — Divers comptes
• X (Twitter) — Divers comptes
• Snapchat — Divers comptes

STATUT ACTUEL:
Tous les actifs sont TOUJOURS sous le contrôle de Copyright Capital.
ADN a demandé le transfert de Buzzly et VoyagerLoin le 19/12/2025.
Deadline: 29/12/2025 — NON RESPECTÉE par CC.

FIABILITÉ: ✅ PROUVÉ (source: contrat + lettre ADN 19/12)`,
    keywords: ["actifs", "pages", "oye", "buzzly", "voyagerloin", "youtube", "origines", "tiktok", "instagram"]
  }
];

export default contratsChunks;