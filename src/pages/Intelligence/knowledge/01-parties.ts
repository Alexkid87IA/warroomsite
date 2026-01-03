// ═══════════════════════════════════════════════════════════════════════════════
// 01-PARTIES.TS — Toutes les parties impliquées dans le litige
// ═══════════════════════════════════════════════════════════════════════════════

import { KnowledgeChunk } from '../types';

export const partiesChunks: KnowledgeChunk[] = [
  // ─────────────────────────────────────────────────────────────────────────────
  // ADN PRODUCTION
  // ─────────────────────────────────────────────────────────────────────────────
  {
    id: "parties-adn-societe",
    category: "parties",
    title: "ADN Production SAS — Informations société",
    content: `ADN PRODUCTION SAS — INFORMATIONS LÉGALES

FORME JURIDIQUE: SAS (Société par Actions Simplifiée) française
SIREN: 981 012 917 R.C.S.
SIÈGE SOCIAL: 40 Avenue de Saint-Antoine, 13015 Marseille, France

⚠️ NOTE IMPORTANTE: L'adresse "13 rue de Berne 75008 Paris" mentionnée dans certains documents (notamment l'Amendment) n'est PAS le siège social actuel.

ACTIVITÉ: Création de contenu digital, gestion de pages sur réseaux sociaux
ACTIFS PRINCIPAUX: Pages Facebook (Oye, Buzzly, VoyagerLoin), chaîne YouTube (Origines Media), comptes TikTok, Instagram, X, Snapchat

FIABILITÉ: ✅ FAIT PROUVÉ (source: contrats signés)`,
    keywords: ["adn", "production", "sas", "marseille", "siren", "société", "siège"]
  },
  {
    id: "parties-adn-equipe",
    category: "parties",
    title: "Équipe ADN Production",
    content: `ÉQUIPE ADN PRODUCTION

ALEXANDRE QUILGHINI (ALEX)
- Fonction: Président d'ADN Production SAS
- Rôle: Signataire des contrats, représentant légal
- Garantie personnelle: A signé une garantie pour le minimum 6 000 €/mois
- Passeport: 22RF01382
- Adresse personnelle: 7 Avenue Bocoumajour C 02 13620 Carry-Le-Rouet, France
- Contact Meta: Connaît Tom Rouyrès (collaborations précédentes)
- FIABILITÉ: ✅ PROUVÉ

JÉRÔME CRISTALDI
- Fonction: Directeur Général d'ADN Production
- Rôle: Bras droit d'Alex, gère les négociations opérationnelles
- Actions clés: 
  • A proposé le compte séquestre (31/10/2025) — REFUSÉ par Jack
  • A envoyé le compte-rendu de la réunion du 14/11/2025
  • Interlocuteur principal avec CC depuis le piratage
- FIABILITÉ: ✅ PROUVÉ (source: échanges emails)

ALEXIS CHAVETNOIR
- Fonction: Co-fondateur / Collaborateur technique
- Rôle: Contact technique, gère les communications avec Meta
- Actions clés:
  • A signalé que la page n'était plus accessible (27/08/2025)
  • A fourni l'ID 110170275225790 trouvé dans Remittance Details (28/08/2025)
  • Présent dans toute la boucle email Meta
- FIABILITÉ: ✅ PROUVÉ (source: boucle email Meta)`,
    keywords: ["alex", "alexandre", "quilghini", "jérôme", "cristaldi", "alexis", "chavetnoir", "équipe", "président", "directeur"]
  },

  // ─────────────────────────────────────────────────────────────────────────────
  // COPYRIGHT CAPITAL
  // ─────────────────────────────────────────────────────────────────────────────
  {
    id: "parties-cc-societe",
    category: "parties",
    title: "Copyright Capital SA — Informations société",
    content: `COPYRIGHT CAPITAL SA — INFORMATIONS LÉGALES

FORME JURIDIQUE: SA (Société Anonyme) suisse
N° ENTREPRISE: CHE-368.989.668
SIÈGE: Rue du Nant 8, 1207 Genève, Suisse

ACTIVITÉ DÉCLARÉE: Fonds d'investissement spécialisé dans les actifs digitaux et la propriété intellectuelle

IRONIE: CC se présente comme "expert des actifs digitaux" mais:
- N'a pas de vrais contacts chez Meta (seulement support automatique)
- Utilise des emails Gmail personnels pour administrer des actifs valant des centaines de milliers d'euros
- N'a pas détecté le piratage (c'est Alex qui a alerté)

FIABILITÉ: ✅ FAIT PROUVÉ (source: contrats signés)`,
    keywords: ["copyright", "capital", "sa", "suisse", "genève", "société", "fonds"]
  },
  {
    id: "parties-cc-jack",
    category: "parties",
    title: "Jack Ojalvo — Chairman de Copyright Capital",
    content: `JACK OJALVO — CHAIRMAN DE COPYRIGHT CAPITAL

FONCTION: Chairman (Président) de Copyright Capital SA
EMAIL PROFESSIONNEL: (non documenté dans les échanges)
EMAIL PERSONNEL: jackojalvo@stanfordalumni.org (fourni le 25/08/2025)

COMPORTEMENTS DOCUMENTÉS:

SETUP (2024):
• Impose le transfert des pages vers le BM de CC (sept 2024)
• Refuse le remboursement anticipé de 150 000 € proposé par ADN (oct 2024)
• ULTIMATUM IMPOSSIBLE: Exige remboursement en 1 JOUR (email 17/10/2024)
• Citation révélatrice: "What may be worst for you, we can live with" (17/10/2024)
• Citation révélatrice: "We will become rightful owner of all your content" (17/10/2024)
• Menace de poursuivre Alex personnellement

NÉGOCIATION (2025):
• "Pas besoin de legal" (14/11/2025) — préfère l'informel
• Valide ORALEMENT le transfert vers le BM d'ADN ("more safe") — JAMAIS fait
• Propose d'utiliser ses "crédits Meta" — promesse JAMAIS tenue
• Ne répond PAS au compte-rendu du 14/11 — évite toute trace écrite
• REFUSE le compte séquestre proposé par Jérôme (31/10 et 14/11)

ESCALADE:
• Disparaît quand ça devient juridique
• Délègue les problèmes à Emre Kumet (Head of Legal)
• RDV technique annulé le 23/12 après réception de la lettre ADN

PROFIL PSYCHOLOGIQUE: STRATÈGE AGRESSIF / PRÉDATEUR
• Sa lettre d'oct 2024 révèle une intention DÉLIBÉRÉE de s'emparer des actifs
• L'ultimatum d'un jour est un piège classique
• Promet ce qu'on veut entendre, puis disparaît
• FAIBLESSE: Sa propre lettre du 17/10/24 prouve son intention prédatrice

FIABILITÉ: ✅ PROUVÉ (source: contrats, emails, compte-rendu 14/11)`,
    keywords: ["jack", "ojalvo", "chairman", "président", "cc", "comportement", "ultimatum", "prédateur"]
  },
  {
    id: "parties-cc-jonathan",
    category: "parties",
    title: "Jonathan Mayorkas — Associé Copyright Capital",
    content: `JONATHAN MAYORKAS — ASSOCIÉ / CO-FONDATEUR DE COPYRIGHT CAPITAL

⚠️ IMPORTANT: Jonathan n'est PAS un simple employé. Il est ASSOCIÉ et CO-FONDATEUR de Copyright Capital. Il a un intérêt personnel DIRECT dans l'issue du litige.

FONCTION: Associé / Co-fondateur
EMAIL PROFESSIONNEL: jonathan@copyrightcapital.com
EMAIL PERSONNEL (utilisé comme admin): jmayorkas2@gmail.com ← PROBLÈME MAJEUR

RÔLE DANS LE PIRATAGE:
• Administrateur du Business Manager contenant les pages ADN
• Destinataire de l'email Meta du 27/08/2025 recommandant le 2FA
• A changé son mot de passe le 27/08/2025 après l'alerte
• N'a PAS détecté le piratage lui-même (c'est Alex qui a alerté)

COMPORTEMENTS DOCUMENTÉS:

Réunion 14 novembre 2025:
• Affirme que le 2FA était "toujours en place" sur jmayorkas2@gmail.com
  → CONTREDIT par l'email Meta du 27/08 qui RECOMMANDE d'activer le 2FA
• Citation révélatrice: "Si vous souhaitez qu'on essaye de notre côté"
  → AVEU qu'au 14/11 (3,5 mois après), CC n'avait TOUJOURS PAS essayé de récupérer la page
• Répond au compte-rendu avec "PS - ma réponse ne concerne que ce point"
  → A lu le CR mais n'a contesté qu'un seul point

Email du 31/10/2025:
• Transmet les documents "ADN Oye" à Jérôme
• Ces documents révèlent Joel Cooper (jamais mentionné avant)

PROFIL PSYCHOLOGIQUE: EXÉCUTANT NÉGLIGENT
• Fait le travail technique mais sans rigueur
• Utilise des outils non sécurisés (Gmail personnel)
• Minimise les problèmes
• Délègue la responsabilité
• FAIBLESSE: Ses propres emails le contredisent

FIABILITÉ: ✅ PROUVÉ (source: boucle email Meta, compte-rendu 14/11)`,
    keywords: ["jonathan", "mayorkas", "associé", "gmail", "jmayorkas2", "2fa", "admin", "négligent"]
  },
  {
    id: "parties-cc-joel",
    category: "parties",
    title: "Joel Cooper — Director DRM chez Copyright Capital",
    content: `JOEL COOPER — DIRECTOR OF DRM & OPERATIONS

⚠️ ACTEUR CACHÉ: Joel Cooper n'avait JAMAIS été mentionné dans les échanges avec ADN avant le 31 octobre 2025. C'est pourtant lui qui gérait les communications avec Meta sur la compromission.

FONCTION: Director of DRM & Operations chez Copyright Capital
EMAIL PROFESSIONNEL: joelcooper@copyrightcapital.com
EMAIL PERSONNEL (utilisé comme admin): joelcoopercinema@gmail.com ← 2ème GMAIL PERSONNEL

DÉCOUVERTE:
• Révélé dans les documents transmis par Jonathan le 31/10/2025
• A reçu l'email automatique Meta du 8 août 2025 "No evidence of compromise"
• A confirmé l'ID du Business Manager: 1149345562525337 (email 25/08/2025)

IMPORTANCE STRATÉGIQUE:
1. DEUXIÈME email Gmail personnel = PRATIQUE SYSTÉMATIQUE chez CC
2. Prouve que la négligence n'est pas une erreur isolée de Jonathan
3. Renforce l'argument de NÉGLIGENCE ORGANISATIONNELLE (faute grave Art. 100 CO)

QUESTIONS À POSER À CC:
• "Pourquoi ne nous avez-vous jamais mentionné Joel Cooper ?"
• "Pourquoi deux de vos employés utilisent-ils des emails Gmail personnels ?"
• "Que cachez-vous d'autre ?"

FIABILITÉ: ✅ PROUVÉ (source: email 8 août 2025, documents 31/10/2025)`,
    keywords: ["joel", "cooper", "drm", "director", "gmail", "joelcoopercinema", "caché", "négligence"]
  },
  {
    id: "parties-cc-emre",
    category: "parties",
    title: "Emre Kumet — Head of Legal Copyright Capital",
    content: `EMRE KUMET — HEAD OF LEGAL

FONCTION: Head of Legal (Directeur Juridique) chez Copyright Capital
RÔLE: Auteur de la lettre CC du 26/12/2025

LETTRE DU 26 DÉCEMBRE 2025:
• Réponse agressive à la lettre ADN du 19/12
• Contient des affirmations CONTREDITES par les preuves
• Menace avec Liquidated Damages et Breach Call Option
• N'a PAS répondu aux questions clés (Art. 2 CC, logs, rapport d'enquête)

STYLE: Juridique agressif, intimidation plutôt que réponses factuelles

FIABILITÉ: ✅ PROUVÉ (source: lettre CC 26/12/2025)`,
    keywords: ["emre", "kumet", "legal", "juridique", "lettre", "26 décembre"]
  },
  {
    id: "parties-cc-frederic",
    category: "parties",
    title: "Frédéric Porcherot — Recouvrement Copyright Capital",
    content: `FRÉDÉRIC PORCHEROT — RECOUVREMENT

FONCTION: Chargé de recouvrement chez Copyright Capital
RÔLE: Gestion des paiements et relances

PRÉSENT DANS: Les échanges email concernant les paiements mensuels

FIABILITÉ: ✅ PROUVÉ (source: emails)`,
    keywords: ["frédéric", "porcherot", "recouvrement", "paiement"]
  },

  // ─────────────────────────────────────────────────────────────────────────────
  // CONTACTS META
  // ─────────────────────────────────────────────────────────────────────────────
  {
    id: "parties-meta-contacts",
    category: "parties",
    title: "Contacts Meta (Facebook)",
    content: `CONTACTS META — VRAIS EMPLOYÉS

TOM ROUYRÈS
• Email: tomrouyres@meta.com
• Fonction: Employé Meta
• Relation avec ADN: Contact initial d'Alex, collaborations précédentes
• Action clé: A assigné Cheick Camara sur le dossier (22/08/2025)
• FIABILITÉ: ✅ PROUVÉ

CHEICK CAMARA
• Email: camaracheick@meta.com
• Fonction: Expert Média, Partenariats chez Meta
• Rôle: A géré le dossier piratage côté Meta
• Actions clés:
  - A demandé les informations techniques (Page ID, emails admin)
  - A envoyé l'email CRUCIAL du 27/08/2025 recommandant le 2FA
  - A tenté de localiser la page
  - A communiqué que l'ID 100087176420390 était "permanently deleted"
• FIABILITÉ: ✅ PROUVÉ

IMPORTANCE STRATÉGIQUE:
ADN a de VRAIS contacts humains chez Meta.
CC n'a que du support automatique (noreply@).
C'est une IRONIE majeure: CC se présente comme "expert des actifs digitaux" mais n'a même pas de vrais contacts chez Meta.`,
    keywords: ["meta", "facebook", "tom", "rouyrès", "cheick", "camara", "contact", "employé"]
  },
  {
    id: "parties-meta-support-auto",
    category: "parties",
    title: "Support automatique Meta vs contacts humains",
    content: `COMPARAISON: QUALITÉ DES CONTACTS META

| Critère | Copyright Capital | ADN Production |
|---------|-------------------|----------------|
| Type de contact | 🤖 Support automatique | 👤 Vrais employés Meta |
| Adresse email | advertise-noreply@support.facebook.com | tomrouyres@meta.com, camaracheick@meta.com |
| Reply-To | noreply@facebookmail.com | Réponse directe possible |
| Analyse | Automatisée, générique | Humaine, spécifique au cas |
| Résultat | "No evidence" (contredit par les faits) | Recommandation 2FA ciblée |
| Qualité relationnelle | Aucune relation | Contacts de confiance |

EMAIL ROBOT DU 8 AOÛT 2025 (reçu par Joel Cooper):
• De: advertise-noreply@support.facebook.com
• Message: "Based on our investigation, we don't believe there is evidence to suggest there was a compromise."
• PROBLÈME: C'est une réponse AUTOMATIQUE générée par un robot, pas une analyse humaine
• CONTREDIT PAR: Alex retrouve la page sous contrôle pirates le 3 septembre 2025

CONCLUSION: Le "no evidence of compromise" de CC est une réponse automatique générique, pas une analyse humaine. Elle n'a AUCUNE valeur probante.`,
    keywords: ["support", "automatique", "robot", "noreply", "comparaison", "contact", "meta"]
  }
];

export default partiesChunks;