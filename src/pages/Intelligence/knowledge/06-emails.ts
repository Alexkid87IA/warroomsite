// ═══════════════════════════════════════════════════════════════════════════════
// 06-EMAILS.TS — Tous les échanges email clés
// ═══════════════════════════════════════════════════════════════════════════════

import { KnowledgeChunk } from '../types';

export const emailsChunks: KnowledgeChunk[] = [
  // ─────────────────────────────────────────────────────────────────────────────
  // EMAIL CRUCIAL — 27 AOÛT
  // ─────────────────────────────────────────────────────────────────────────────
  {
    id: "email-27-aout-2fa",
    category: "emails",
    title: "Email crucial du 27 août 2025 — Recommandation 2FA",
    content: `EMAIL CRUCIAL — 27 AOÛT 2025

⚠️ C'EST L'EMAIL LE PLUS IMPORTANT DU DOSSIER

EXPÉDITEUR: Cheick Camara (camaracheick@meta.com)
DESTINATAIRES: Jonathan Mayorkas, Alex, Alexis, Tom, Jack
DATE: 27 août 2025

CONTENU (extrait clé):
"Demandez au titulaire (jmayorkas2@gmail.com) de consulter sa boîte mail...
Nous vous recommandons vivement d'activer l'authentification à deux facteurs"

ANALYSE:
• Cheick est un VRAI employé Meta (pas un robot)
• Il recommande d'ACTIVER le 2FA
• Si le 2FA était déjà actif, il ne recommanderait pas de l'activer
• → PREUVE que le 2FA n'était PAS actif au moment du piratage

RÉPONSE DE JONATHAN (même jour):
"J'ai changé mon mot de passe"
• Note: Jonathan ne dit PAS qu'il a activé le 2FA
• Il parle uniquement du mot de passe

IMPORTANCE STRATÉGIQUE:
Cet email CONTREDIT directement:
1. L'affirmation de Jonathan (14/11): "2FA toujours en place"
2. La lettre CC (26/12): "All accounts were protected by 2FA"

FIABILITÉ: ✅ PROUVÉ (email documenté)`,
    keywords: ["email", "27 août", "2fa", "cheick", "camara", "recommandation", "activer", "crucial"]
  },

  // ─────────────────────────────────────────────────────────────────────────────
  // EMAIL ROBOT — 8 AOÛT
  // ─────────────────────────────────────────────────────────────────────────────
  {
    id: "email-8-aout-robot",
    category: "emails",
    title: "Email robot du 8 août 2025 — No evidence",
    content: `EMAIL ROBOT — 8 AOÛT 2025

⚠️ CET EMAIL N'A AUCUNE VALEUR PROBANTE

EXPÉDITEUR: advertise-noreply@support.facebook.com
DESTINATAIRE: Joel Cooper (joelcoopercinema@gmail.com)
REPLY-TO: noreply@facebookmail.com
DATE: 8 août 2025, 7:51 AM EDT

CONTENU:
"Based on our investigation, we don't believe there is evidence to suggest there was a compromise."

SECTION "WHAT YOU CAN DO":
"On your personal account, turn on login alerts, two-factor authentication and check password strength"

POURQUOI CET EMAIL N'A AUCUNE VALEUR:

1. C'EST UN EMAIL AUTOMATIQUE:
• Adresse: advertise-noreply@support.facebook.com
• Reply-To: noreply@facebookmail.com
• Aucun nom de personne
• Template générique automatisé

2. LA MENTION DU 2FA EST UN TEMPLATE:
• La section "What you can do" est un bloc de conseils STANDARD
• Meta l'inclut dans TOUS ses emails de sécurité
• Ce n'est PAS une recommandation ciblée

3. CONTREDIT PAR LES FAITS:
• L'email dit: "No evidence of compromise"
• Le 3 septembre: Alex retrouve la page sous contrôle pirates avec contenu sexuel
• → L'email robot avait TORT

COMPARAISON AVEC L'EMAIL DU 27 AOÛT:
| 8 août (CC) | 27 août (ADN) |
|-------------|---------------|
| Robot automatique | Cheick Camara (humain) |
| Template générique | Recommandation ciblée |
| Valeur: FAIBLE | Valeur: FORTE |

FIABILITÉ: ✅ PROUVÉ (que l'email existe, mais valeur probante NULLE)`,
    keywords: ["email", "8 août", "robot", "automatique", "no evidence", "joel", "noreply"]
  },

  // ─────────────────────────────────────────────────────────────────────────────
  // BOUCLE META COMPLÈTE
  // ─────────────────────────────────────────────────────────────────────────────
  {
    id: "email-boucle-meta",
    category: "emails",
    title: "Boucle email Meta — Chronologie complète",
    content: `BOUCLE EMAIL META — CHRONOLOGIE COMPLÈTE

4 AOÛT 2025:
• De: Alex (ADN)
• À: Tom Rouyrès (Meta)
• Message: "La page Oye a été compromise suite à un piratage"

12 AOÛT 2025:
• De: Alex
• À: Tom
• Message: Relance — aucune réponse

22 AOÛT 2025:
• De: Tom (Meta)
• À: Cheick Camara (Meta)
• Message: "Peux-tu aider les équipes d'Origines Media ?"
• De: Cheick
• À: Alex
• Message: "Veuillez fournir l'adresse email associée au compte"

25 AOÛT 2025:
• De: Alex
• À: Tous
• Message: "Page sous BM de CC, ID: 1149345562525337"
• De: Jack (CC)
• Message: Donne son email: jackojalvo@stanfordalumni.org
• De: Jonathan (CC)
• Message: Donne son email: jmayorkas2@gmail.com

26 AOÛT 2025:
• De: Cheick (Meta)
• À: Tous
• Message: "Pouvez-vous me donner l'ID de la page ?"
• De: Alexis (ADN)
• À: Cheick
• Message: "Nous n'avons pas l'ID de la page Facebook, uniquement l'URL"

27 AOÛT 2025:
• De: Cheick (Meta)
• À: Tous
• Message: "Demandez au titulaire (jmayorkas2@gmail.com)...
  Nous vous recommandons vivement d'activer l'authentification à deux facteurs"
• De: Jonathan (CC)
• Message: "J'ai changé mon mot de passe"
• De: Cheick
• Message: "Avez-vous accès de nouveau à la page ?"
• De: Alexis (ADN)
• Message: "La page ne semble pas être en ligne" + screenshot

28 AOÛT 2025:
• De: Cheick (Meta)
• Message: "Notre équipe n'a pas réussi à localiser la page. Communiquez le Page ID"
• De: Alexis (ADN)
• Message: "Je viens de retrouver l'ID: 110170275225790 dans les Remittance Details"

29 AOÛT 2025:
• De: Cheick (Meta)
• À: Tom [Internal]
• Message: "Page ID 100087176420390 permanently deleted. Dois-je prévenir le partenaire?"

3 SEPTEMBRE 2025:
• De: Alex
• Message: "Avons-nous un recours? La page était sur un BM sécurisé."
• De: Alex
• Message: "On a retrouvé la page qui affiche des storys sexuelles. ID: 100089751341306"

8 SEPTEMBRE 2025:
• De: Alex
• Message: "Les pirates continuent de poster du contenu horrible"
• De: Alexis (ADN)
• Message: "Je n'ai pas pu envoyer de mail à clementine@lists / deletion-eng@lists"

APRÈS 8 SEPTEMBRE: FIN DE LA BOUCLE — Plus aucune action documentée

FIABILITÉ: ✅ PROUVÉ (emails documentés)`,
    keywords: ["boucle", "meta", "chronologie", "email", "tom", "cheick", "alexis", "jonathan"]
  },

  // ─────────────────────────────────────────────────────────────────────────────
  // EMAIL JACK OCTOBRE 2024
  // ─────────────────────────────────────────────────────────────────────────────
  {
    id: "email-jack-octobre-2024",
    category: "emails",
    title: "Email Jack Ojalvo — 17 octobre 2024",
    content: `EMAIL JACK OJALVO — 17 OCTOBRE 2024

⚠️ CET EMAIL RÉVÈLE L'INTENTION PRÉDATRICE DE CC

CONTEXTE:
• Octobre 2024
• ADN propose de rembourser les 150 000 € immédiatement
• CC refuse
• Jack envoie un email agressif

CITATIONS CLÉS:

1. "What may be worst for you, we can live with"
• Traduction: "Ce qui peut être le pire pour vous, nous pouvons vivre avec"
• SIGNIFICATION: Jack accepte de nuire à ADN si nécessaire
• Révèle une mentalité PRÉDATRICE

2. "We will become rightful owner of all your content"
• Traduction: "Nous deviendrons propriétaires légitimes de tout votre contenu"
• SIGNIFICATION: Jack ANTICIPE la prise de possession des actifs
• Révèle une intention DÉLIBÉRÉE de s'emparer des actifs

3. ULTIMATUM D'UN JOUR:
• Jack exige le remboursement en 1 JOUR
• C'est IMPOSSIBLE à satisfaire
• C'est un PIÈGE classique

4. MENACE PERSONNELLE:
• Jack menace de poursuivre Alex personnellement
• Intimidation

ANALYSE:
Cet email prouve que CC avait l'INTENTION dès le départ de s'emparer des actifs d'ADN si possible. Le refus de remboursement anticipé + l'ultimatum impossible = stratégie prédatrice.

FIABILITÉ: 🔶 CONFIRMÉ PAR ALEX (email à documenter)`,
    keywords: ["email", "jack", "octobre", "2024", "ultimatum", "prédateur", "intention", "menace"]
  },

  // ─────────────────────────────────────────────────────────────────────────────
  // RÉPONSE JONATHAN 14/11
  // ─────────────────────────────────────────────────────────────────────────────
  {
    id: "email-jonathan-14-nov",
    category: "emails",
    title: "Réponse Jonathan — 14 novembre 2025 (19h08)",
    content: `RÉPONSE JONATHAN — 14 NOVEMBRE 2025

CONTEXTE:
• Réunion du 14 novembre 2025
• Jérôme envoie le compte-rendu à 18h45
• Jonathan répond à 19h08

CITATION EXACTE:
"Depuis qu'Alex nous a alerté sur le piratage d'Oye, nous avons fait les actions que vous nous avez demandé auprès de Facebook, et si vous souhaitez désormais qu'on essaye de notre côté, on est disposé à vous aider comme Jack vous l'a proposé"

"PS - ma réponse ne concerne que ce point"

AVEUX CONTENUS DANS CETTE RÉPONSE:

1. "Alex nous a alerté"
• CC n'a PAS détecté le piratage eux-mêmes
• C'est ADN qui a dû alerter CC
• Preuve de l'absence de monitoring

2. "Les actions que VOUS nous avez demandé"
• CC n'a agi que sur INSTRUCTION d'ADN
• CC n'a pas pris d'initiative
• Preuve de passivité

3. "Si vous souhaitez qu'on essaye DE NOTRE CÔTÉ"
• Au 14 novembre (3,5 mois après le piratage)
• CC n'avait TOUJOURS PAS essayé de leur côté
• AVEU d'inaction totale

4. "PS - ma réponse ne concerne que ce point"
• Jonathan a LU le compte-rendu complet
• Mais n'a contesté qu'un seul point
• Tout le reste = non contesté

CE QUE JACK N'A JAMAIS RÉPONDU:
• Le compte-rendu complet
• Confirmation du transfert BM (promis oralement)
• Utilisation des "crédits Meta" (promis oralement)

FIABILITÉ: ✅ PROUVÉ (email documenté)`,
    keywords: ["email", "jonathan", "14 novembre", "réponse", "aveu", "inaction", "alerté"]
  },

  // ─────────────────────────────────────────────────────────────────────────────
  // TRANSMISSION DOCUMENTS 31/10
  // ─────────────────────────────────────────────────────────────────────────────
  {
    id: "email-31-oct-documents",
    category: "emails",
    title: "Transmission documents — 31 octobre 2025",
    content: `TRANSMISSION DOCUMENTS — 31 OCTOBRE 2025

EXPÉDITEUR: Jonathan Mayorkas (jonathan@copyrightcapital.com)
DESTINATAIRES: Jérôme, Frédéric, Alex, Martin
OBJET: "Doc ADN Oye"
DATE: 31 octobre 2025

CONTENU TRANSMIS:
Documents concernant le piratage de la page Oye

DÉCOUVERTES DANS CES DOCUMENTS:

1. JOEL COOPER — ACTEUR CACHÉ:
• Fonction: Director of DRM & Operations
• Email pro: joelcooper@copyrightcapital.com
• Email perso: joelcoopercinema@gmail.com
• JAMAIS mentionné avant dans les échanges avec ADN
• Gérait les communications avec Meta sur la compromission

2. DEUXIÈME GMAIL PERSONNEL:
• Jonathan: jmayorkas2@gmail.com
• Joel: joelcoopercinema@gmail.com
• = PRATIQUE SYSTÉMATIQUE chez CC

3. EMAIL ROBOT DU 8 AOÛT:
• Reçu par Joel Cooper
• "No evidence of compromise"
• Support automatique, pas analyse humaine

4. CONFIRMATION ID BUSINESS MANAGER:
• Email du 25 août de Joel Cooper
• "Here you go, this is the id for Copyright Capitals business manager: 1149345562525337"

QUESTIONS SOULEVÉES:
• Pourquoi CC n'a jamais mentionné Joel Cooper ?
• Que cachent-ils d'autre ?
• Pourquoi 2 Gmail personnels pour gérer des actifs de 1M€+ ?

FIABILITÉ: ✅ PROUVÉ (documents transmis)`,
    keywords: ["email", "31 octobre", "documents", "joel", "cooper", "transmission", "découverte"]
  }
];

export default emailsChunks;