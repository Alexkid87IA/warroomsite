// ═══════════════════════════════════════════════════════════════════════════════
// 12-SCENARIOS.TS — Calculs financiers, scénarios, réponses types
// ═══════════════════════════════════════════════════════════════════════════════

import { KnowledgeChunk } from '../types';

export const scenariosChunks: KnowledgeChunk[] = [
  // ─────────────────────────────────────────────────────────────────────────────
  // ESTIMATION DU PRÉJUDICE
  // ─────────────────────────────────────────────────────────────────────────────
  {
    id: "scenarios-prejudice",
    category: "scénarios",
    title: "Estimation détaillée du préjudice",
    content: `ESTIMATION DÉTAILLÉE DU PRÉJUDICE ADN

MÉTHODE 1: COÛT DE RECONSTITUTION

Acquisition d'abonnés:
• 1,2 million d'abonnés
• Coût pub Facebook: 0,20 - 0,50 €/abonné
• TOTAL: 240 000 - 600 000 €

Production de contenu:
• ~200 vidéos perdues
• Coût production: 500 - 1 500 €/vidéo
• TOTAL: 100 000 - 300 000 €

Community management:
• 4 ans de travail
• Coût annuel: 25 000 - 50 000 €
• TOTAL: 100 000 - 200 000 €

TOTAL RECONSTITUTION: 440 000 - 1 100 000 €

MÉTHODE 2: PERTES D'EXPLOITATION

Revenus perdus (août → décembre 2025):
• 5 mois × 4 000 - 15 000 €/mois
• TOTAL PASSÉ: 20 000 - 75 000 €

Revenus futurs (projection 10 ans):
• Hypothèse conservatrice: 4 000 €/mois × 120 mois
• TOTAL FUTUR: 480 000 €
• Hypothèse optimiste: 10 000 €/mois × 120 mois
• TOTAL FUTUR: 1 200 000 €

MÉTHODE 3: AUTRES PRÉJUDICES

Atteinte à l'image:
• Contenu sexuel publié pendant 5+ mois
• Réputation de la marque "Oye" détruite
• ESTIMATION: 50 000 - 150 000 €

Perte d'opportunités:
• Collaborations marques perdues
• Potentiel e-commerce perdu
• ESTIMATION: 50 000 - 100 000 €

SYNTHÈSE DES ESTIMATIONS:
| Méthode | Minimum | Maximum |
|---------|---------|---------|
| Reconstitution | 440 000 € | 1 100 000 € |
| Pertes d'exploitation | 500 000 € | 1 275 000 € |
| Autres préjudices | 100 000 € | 250 000 € |

TOTAL PRÉJUDICE ESTIMÉ:
• Minimum: 400 000 €
• Médian: 800 000 - 1 000 000 €
• Maximum: 1 000 000 - 1 300 000 €

NOTE: Ces chiffres sont des estimations de NÉGOCIATION. Un arbitre pourrait les réduire significativement.`,
    keywords: ["préjudice", "estimation", "calcul", "reconstitution", "pertes", "dommages"]
  },

  // ─────────────────────────────────────────────────────────────────────────────
  // CALCULS DETTE VS PRÉJUDICE
  // ─────────────────────────────────────────────────────────────────────────────
  {
    id: "scenarios-dette-vs-prejudice",
    category: "scénarios",
    title: "Comparaison dette vs préjudice",
    content: `COMPARAISON DETTE VS PRÉJUDICE

CE QUE CC RÉCLAME:
• Dette principale: ~142 000 €
• Arriérés réclamés (lettre 26/12): 38 551 €
• Si Liquidated Damages (×3): jusqu'à 630 000 €

CE QU'ADN A SUBI:
• Préjudice estimé: 800 000 - 1 300 000 €
• Minimum absolu: 400 000 €

BALANCE:
| CC réclame | ADN a subi |
|------------|-----------|
| 142 000 € (dette) | 800 000 - 1 300 000 € (préjudice) |
| Ratio: 1 | Ratio: 5.6 à 9.2 |

ARGUMENT:
Le préjudice subi par ADN est 5 à 9 fois supérieur à la dette réclamée par CC.
Il serait ABUSIF (Art. 2 CC) pour CC de:
• Réclamer 142k€ alors qu'ils ont causé 1M€+ de préjudice
• Activer la Clause 7 (IP pour 1$) dans ce contexte

CE QUE CC A DÉJÀ RÉCUPÉRÉ:
• ~70 000 € remboursés par ADN avant suspension
• Revenus Buzzly/VoyagerLoin/YouTube (montant inconnu)
• TOTAL: Probablement déjà rentabilisé leur investissement

CONCLUSION:
ADN n'est PAS un mauvais payeur.
ADN a payé ~70k€ de bonne foi.
ADN a suspendu APRÈS le piratage non résolu.
CC est en position de DEMANDEUR, pas de victime.`,
    keywords: ["dette", "préjudice", "comparaison", "balance", "ratio", "abusif"]
  },

  // ─────────────────────────────────────────────────────────────────────────────
  // SITUATION ALEX
  // ─────────────────────────────────────────────────────────────────────────────
  {
    id: "scenarios-situation-alex",
    category: "scénarios",
    title: "Situation personnelle d'Alex — Levier stratégique",
    content: `SITUATION PERSONNELLE D'ALEXANDRE QUILGHINI

ACTIFS SAISISSABLES:
• Maison: NON
• Épargne importante: NON
• Véhicules de valeur: NON
• Biens saisissables: AUCUN

GARANTIE PERSONNELLE:
• Alex a signé une garantie
• MAIS limitée au minimum 6 000 €/mois
• Ne couvre PAS: dette totale, pénalités, Breach Call Option

IMPLICATION STRATÉGIQUE:

1. SENTENCE INEXÉCUTABLE:
• Si CC gagne l'arbitrage
• Et obtient une sentence contre Alex personnellement
• CC n'aura RIEN à saisir
• La sentence sera un bout de papier

2. LEVIER DE NÉGOCIATION:
• CC sait probablement qu'Alex n'a pas d'actifs
• CC sait qu'une victoire juridique ne rapportera rien
• CC est donc MOTIVÉ à trouver un accord

3. ASYMÉTRIE DES RISQUES:
• Alex risque: Rien de concret (pas d'actifs)
• CC risque: 100k+ en frais d'arbitrage pour rien

BONNE FOI D'ADN:
• ADN a remboursé ~70 000 € avant de suspendre
• ADN a proposé un compte séquestre (refusé par CC)
• ADN a toujours été transparent
• ADN n'essaie pas de fuir, mais de résoudre équitablement

NOTE: Ne pas MENTIONNER cette situation à CC. C'est un atout silencieux.`,
    keywords: ["alex", "situation", "personnelle", "actifs", "saisissable", "levier"]
  },

  // ─────────────────────────────────────────────────────────────────────────────
  // RÉPONSES TYPES
  // ─────────────────────────────────────────────────────────────────────────────
  {
    id: "scenarios-reponses-types",
    category: "scénarios",
    title: "Réponses types aux arguments de CC",
    content: `RÉPONSES TYPES AUX ARGUMENTS DE CC

SI CC DIT: "L'Art. 82 CO est inapplicable"
RÉPONDRE: "CC avait une obligation de garde selon les Conditions Precedents du contrat. Cette obligation n'a pas été exécutée. L'exception d'inexécution est donc applicable."

SI CC DIT: "Tous les comptes étaient protégés par 2FA"
RÉPONDRE: "L'email de Meta du 27 août 2025 recommande explicitement d'activer le 2FA. Si le 2FA était déjà actif, Meta ne recommanderait pas de l'activer."

SI CC DIT: "Il n'y a pas de preuve de compromission"
RÉPONDRE: "La page Oye existe toujours (ID 100089751341306) sous contrôle de pirates qui publient du contenu inapproprié. C'est la preuve directe de la compromission."

SI CC DIT: "Notre accès était technique, pas fiduciaire"
RÉPONDRE: "Meta vous affiche comme 'responsable de cette Page'. Le contrat dit que les pages doivent 'remain part of management tools'. C'est une responsabilité de garde."

SI CC DIT: "Le piratage vient d'un appareil ADN"
RÉPONDRE: "Cette affirmation est sans preuve. Le compte admin était jmayorkas2@gmail.com, pas un compte ADN. Fournissez les logs pour prouver votre allégation."

SI CC DIT: "La garantie personnelle couvre tout"
RÉPONDRE: "Le texte de l'Amendment mentionne uniquement 'the minimum monthly payment of EUR 6,000'. La garantie ne couvre pas la dette totale ni les pénalités."

SI CC DIT: "Nous allons lancer l'arbitrage"
RÉPONDRE: "C'est votre droit. Nous nous défendrons avec les preuves documentées. Notez que l'arbitrage ICC coûte 100-300k€ pour récupérer 142k€."

SI CC DIT: "Payez immédiatement ou nous activons la Clause 7"
RÉPONDRE: "Activer la Clause 7 pour 142k€ de dette alors que vous avez causé 1M€+ de préjudice constituerait un abus de droit (Art. 2 CC)."`,
    keywords: ["réponses", "types", "arguments", "cc", "contre-arguments"]
  },

  // ─────────────────────────────────────────────────────────────────────────────
  // QUESTIONS PIÈGES
  // ─────────────────────────────────────────────────────────────────────────────
  {
    id: "scenarios-questions-pieges",
    category: "scénarios",
    title: "Questions pièges pour CC",
    content: `QUESTIONS PIÈGES POUR COPYRIGHT CAPITAL

Ces questions sont conçues pour mettre CC en difficulté. Ils ne peuvent pas y répondre de manière satisfaisante.

QUESTION 1: Le 2FA
"L'email de Cheick Camara du 27 août 2025 recommande d'activer le 2FA. Si le 2FA était déjà actif comme vous l'affirmez, pourquoi Meta recommanderait-il de l'activer?"

QUESTION 2: La page existe encore
"Vous affirmez qu'il n'y a pas de preuve de compromission. Comment expliquez-vous que la page Oye (ID 100089751341306) existe toujours sous contrôle de pirates qui publient du contenu sexuel?"

QUESTION 3: Pourquoi Oye seule
"La page Oye est la seule page piratée de tout votre portefeuille. Si votre sécurité est si rigoureuse, pourquoi cette page en particulier a-t-elle été compromise?"

QUESTION 4: Les Gmail personnels
"Pourquoi deux de vos employés (Jonathan Mayorkas et Joel Cooper) utilisent-ils des emails Gmail personnels pour administrer des actifs valant plus d'un million d'euros? Est-ce conforme à vos politiques de sécurité internes?"

QUESTION 5: L'inaction
"Entre le 8 septembre 2025 et aujourd'hui, quelles démarches concrètes et documentées avez-vous entreprises pour récupérer la page Oye? Pouvez-vous fournir des preuves de ces démarches?"

QUESTION 6: Le rapport d'enquête
"Nous avons demandé un rapport d'enquête interne sur l'incident. Ce rapport existe-t-il? Si oui, pourquoi ne l'avez-vous pas fourni? Si non, pourquoi n'avez-vous pas mené d'enquête?"

QUESTION 7: Les logs
"Nous avons demandé les logs de connexion du Business Manager pour juin-août 2025. Ces logs existent-ils? Si oui, pourquoi ne les fournissez-vous pas? Que révéleraient-ils?"

QUESTION 8: Joel Cooper
"Pourquoi ne nous avez-vous jamais mentionné Joel Cooper, alors qu'il était Director of DRM & Operations et gérait les communications avec Meta sur la compromission?"

QUESTION 9: L'email robot vs l'email humain
"Vous citez un email automatique du 8 août ('no evidence'). Pourquoi ignorez-vous l'email d'un vrai employé Meta du 27 août qui recommande d'activer le 2FA?"

QUESTION 10: Le RDV annulé
"Un RDV technique était prévu pour le 23 décembre. Pourquoi l'avez-vous annulé immédiatement après avoir reçu notre mise en demeure du 19 décembre?"`,
    keywords: ["questions", "pièges", "cc", "difficulté", "réponse impossible"]
  },

  // ─────────────────────────────────────────────────────────────────────────────
  // PROPOSITIONS D'ACCORD
  // ─────────────────────────────────────────────────────────────────────────────
  {
    id: "scenarios-propositions-accord",
    category: "scénarios",
    title: "Propositions d'accord possibles",
    content: `PROPOSITIONS D'ACCORD POSSIBLES

PROPOSITION A: ANNULATION TOTALE (position haute)
• Annulation de la dette (142k€ → 0€)
• Transfert immédiat des actifs (Buzzly, VoyagerLoin, YouTube)
• Pas de compensation supplémentaire
• Pas de poursuites mutuelles
• Fin de la relation contractuelle

JUSTIFICATION:
• Le préjudice ADN (1M€+) dépasse largement la dette (142k€)
• Les créances s'annulent mutuellement

PROBABILITÉ D'ACCEPTATION: 20%

---

PROPOSITION B: RÉDUCTION SIGNIFICATIVE (position médiane)
• Réduction de 70% de la dette (142k€ → 42k€)
• Paiement des 42k€ sur 12 mois (3 500€/mois)
• Transfert immédiat des actifs
• Pas de poursuites mutuelles
• Fin de la relation contractuelle

JUSTIFICATION:
• Compromis équitable
• ADN reconnaît une partie de la dette
• CC récupère quelque chose

PROBABILITÉ D'ACCEPTATION: 40%

---

PROPOSITION C: RÉDUCTION MODÉRÉE (position de repli)
• Réduction de 50% de la dette (142k€ → 71k€)
• Paiement des 71k€ sur 18 mois (~4 000€/mois)
• Transfert des actifs
• CC renonce aux Liquidated Damages et Breach Call Option
• Pas de poursuites mutuelles

PROBABILITÉ D'ACCEPTATION: 60%

---

PROPOSITION D: MÉDIATION
• Accepter une médiation avec un médiateur neutre
• Chaque partie expose ses arguments
• Le médiateur propose une solution
• Solution généralement équilibrée

AVANTAGES:
• Moins cher que l'arbitrage (~5 000 - 15 000€)
• Plus rapide (quelques semaines)
• Préserve la relation

PROBABILITÉ D'ACCEPTATION: 50%`,
    keywords: ["propositions", "accord", "négociation", "annulation", "réduction", "médiation"]
  },

  // ─────────────────────────────────────────────────────────────────────────────
  // LETTRE 14 JANVIER
  // ─────────────────────────────────────────────────────────────────────────────
  {
    id: "scenarios-lettre-14-janvier",
    category: "scénarios",
    title: "Structure de la lettre du 14 janvier",
    content: `STRUCTURE PROPOSÉE — LETTRE DU 14 JANVIER 2026

OBJECTIF: Constater les manquements de CC, maintenir la position, sans escalade inutile

---

POINT I: RAPPEL DES DÉLAIS

"Par notre courrier du 19 décembre 2025, nous avions fixé:
• Transfert des actifs (Buzzly, VoyagerLoin): 29 décembre 2025
• Réponse complète: 13 janvier 2026"

---

POINT II: CONSTAT DES MANQUEMENTS

"À ce jour, nous constatons:
1. Aucun transfert d'actifs réalisé malgré le délai du 29 décembre
2. Aucune réponse à nos demandes de:
   - Rapport d'enquête interne
   - Logs de connexion du Business Manager
   - Échanges complets avec Meta
3. Aucune explication de la contradiction entre:
   - L'email Meta du 27/08 (recommandation 2FA)
   - L'affirmation de M. Mayorkas (14/11)
4. La page Oye (ID 100089751341306) existe toujours sous contrôle de pirates"

---

POINT III: POSITION MAINTENUE

"Dans ces conditions, nous maintenons:
• L'exception d'inexécution (Art. 82 CO)
• La suspension de nos paiements
• Nos réserves (Art. 100 CO, Art. 2 CC)"

---

POINT IV: OUVERTURE AU DIALOGUE

"Nous restons disposés à trouver une solution amiable équitable pour les deux parties. Une médiation pourrait être envisagée."

---

POINT V: MISE EN GARDE (sobre)

"À défaut d'avancée significative dans les 15 prochains jours, nous serons contraints de prendre les mesures appropriées pour protéger nos droits."

---

TON: FACTUEL, pas agressif. Constater les faits, maintenir la position, laisser la porte ouverte.`,
    keywords: ["lettre", "14 janvier", "constat", "structure", "manquements"]
  }
];

export default scenariosChunks;