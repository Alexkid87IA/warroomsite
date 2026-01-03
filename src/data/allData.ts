// All data extracted from the original monolithic file
export const DATA = {
  // ═══════════════════════════════════════════════════════════════════════════
  // RÉSUMÉ EXÉCUTIF
  // ═══════════════════════════════════════════════════════════════════════════
  summary: {
    situation: "ADN Production (créateur de contenu digital, Marseille) en litige avec Copyright Capital (fonds d'investissement, Genève) après la perte de la page Facebook 'Oye' (1,2M abonnés, ~40% des revenus) alors qu'elle était sous la garde technique EXCLUSIVE de CC.",
    debt: 142000,
    counterClaim: { min: 1000000, max: 1300000 },
    strategy: "TALEB — Antifragilité",
    position: "Exception d'inexécution (Art. 82 CO) — Paiements suspendus jusqu'à réparation du préjudice"
  },

  // ═══════════════════════════════════════════════════════════════════════════
  // PARTIES
  // ═══════════════════════════════════════════════════════════════════════════
  parties: {
    adn: {
      name: "ADN Production SAS",
      type: "SAS française",
      siren: "981 012 917 R.C.S.",
      address: "40 Avenue Saint-Antoine, 13015 Marseille",
      team: [
        { name: "Alexandre Quilghini", alias: "Alex", role: "Président", key: true, email: "alex@origines.media" },
        { name: "Jérôme Cristaldi", role: "Directeur Général", key: true, email: "jerome@origines.media" },
        { name: "Alexis Chavetnoir", role: "Co-fondateur / Collaborateur", key: false, email: "alexis@origines.media" }
      ]
    },
    cc: {
      name: "Copyright Capital SA",
      type: "SA suisse",
      registration: "CHE-368.989.668",
      address: "Rue du Nant 8, 1207 Genève, Suisse",
      team: [
        { name: "Jack Ojalvo", role: "Chairman (Président)", key: true, email: "jack@copyrightcapital.com" },
        { name: "Jonathan Mayorkas", role: "Associé / Co-fondateur", key: true, email: "jonathan@copyrightcapital.com", emailPerso: "jmayorkas2@gmail.com", note: "Gmail perso utilisé comme Super Admin" },
        { name: "Joel Cooper", role: "Director of DRM & Operations", key: true, email: "joelcooper@copyrightcapital.com", emailPerso: "joelcoopercinema@gmail.com", note: "Gmail perso utilisé pour contacts Meta — 2ème Gmail perso découvert 31/10" },
        { name: "Emre Kumet", role: "Head of Legal", key: true, email: "emrekumet@copyrightcapital.com" },
        { name: "Frédéric Porcherot", role: "Recouvrement", key: false }
      ]
    },
    meta: {
      name: "Meta (Facebook)",
      contacts: [
        { name: "Tom Rouyrès", email: "tomrouyres@meta.com", note: "Contact initial d'Alex" },
        { name: "Cheick Camara", email: "camaracheick@meta.com", role: "Expert Média, Partenariats", note: "A géré le dossier piratage" }
      ],
      failedContacts: ["clementine@lists", "deletion-eng@lists"]
    }
  },

  // ═══════════════════════════════════════════════════════════════════════════
  // CONTRATS
  // ═══════════════════════════════════════════════════════════════════════════
  contracts: {
    documents: [
      { name: "License Agreement (Conditions Générales)", date: "25 sept 2024", key: "Clauses 6, 7, 9, 14" },
      { name: "Purchase Order (Production Advance)", date: "26 sept 2024", key: "Avance 150k€, remboursement 210k€" },
      { name: "Amendment Protocol", date: "2 oct 2024", key: "Garantie personnelle Alex, Minimum 6k€/mois" }
    ],
    finances: {
      advanceReceived: 150000,
      toRepay: 210000,
      ifPaidIn1Year: 202500,
      revenueShare: 30,
      minimumMonthly: 6000,
      alreadyPaid: 70000,
      remainingDebt: 142000,
      ccDemand: 11351.89
    },
    clauses: [
      { id: "6", name: "Liquidated Damages", desc: "Pénalités ×3 si >6 mois de retard", impact: "Jusqu'à 630 000 €", danger: "critical" },
      { id: "7", name: "Breach Call Option", desc: "CC acquiert TOUTE l'IP pour 1$ en cas de breach", impact: "PERTE TOTALE des actifs", danger: "critical" },
      { id: "4.3(e)(ii)", name: "Exception pénalités", desc: "'Without fault' + 'could not have been prevented'", impact: "Défense ADN", danger: "leverage" },
      { id: "9.2", name: "Limitation responsabilité", desc: "Plafonnée à 150k€", impact: "Annulable si faute grave (Art. 100 CO)", danger: "medium" },
      { id: "14", name: "Arbitrage ICC", desc: "3 arbitres, Genève, anglais", impact: "Coût 80-250k€", danger: "medium" }
    ]
  },

  // ═══════════════════════════════════════════════════════════════════════════
  // ACTIFS
  // ═══════════════════════════════════════════════════════════════════════════
  assets: {
    oye: {
      name: "Oye",
      platform: "Facebook",
      followers: 1200000,
      audience: "Hispanophone internationale (dont USA)",
      revenueRange: "4 000 - 15 000 €/mois",
      revenuePercent: 40,
      status: "PERDUE / PIRATÉE",
      currentState: "Contrôlée par pirates, contenu sexuel/inapproprié",
      contentLost: "~200 vidéos, 4 ans de travail",
      ids: {
        fromADN: { id: "110170275225790", source: "Alexis (ADN) 28/08 — Remittance Details", status: "unknown" },
        fromMeta: { id: "100087176420390", source: "Meta 29/08 — rapport interne", status: "Permanently deleted" },
        actual: { id: "100089751341306", source: "Alex 03/09 — page retrouvée", status: "existait au 03/09/2025 — pirates actifs", critical: true }
      },
      damageAnalysis: {
        beforeHack: {
          followers: "1,2M followers ENGAGÉS",
          revenue: "4 000 - 15 000 €/mois",
          content: "~200 vidéos originales",
          monetization: "Active",
          reputation: "Intacte"
        },
        afterRecovery: {
          followers: "Audience MORTE",
          engagement: "ZÉRO",
          revenue: "0€",
          content: "PERDU",
          monetization: "DÉSACTIVÉE",
          reputation: "DÉTRUITE"
        },
        conclusion: "Même récupérée, la page n'a PLUS DE VALEUR. Le préjudice est estimé IRRÉVERSIBLE."
      }
    },
    others: [
      { name: "Buzzly", platform: "Facebook", status: "Active — sous BM de CC", transferRequested: true },
      { name: "VoyagerLoin", platform: "Facebook", status: "Active", transferRequested: true },
      { name: "Origines Media", platform: "YouTube", status: "Active — CC GARDE LES REVENUS" }
    ],
    technical: {
      businessManagerId: "1149345562525337",
      owner: "Copyright Capital SA",
      superAdmin: "Jonathan Mayorkas",
      superAdminEmail: "jmayorkas2@gmail.com (Gmail personnel)",
      adnAccess: "Admin des PAGES seulement, PAS du Business Manager"
    }
  },

  // ═══════════════════════════════════════════════════════════════════════════
  // CLARIFICATION STRATÉGIQUE — RÉCUPÉRATION OYE
  // ═══════════════════════════════════════════════════════════════════════════
  strategicClarification: {
    title: "⚠️ CLARIFICATION: RÉCUPÉRATION ≠ FIN DU PRÉJUDICE",
    principle: "Le préjudice économique RESTE DÛ indépendamment de toute récupération éventuelle de la page, celle-ci ne pouvant restituer la valeur détruite.",
    damages: [
      { type: "Pertes de revenus (5+ mois)", effaceParRecup: false },
      { type: "Destruction de l'audience", effaceParRecup: false },
      { type: "Perte de monétisation", effaceParRecup: false },
      { type: "Perte du contenu (~200 vidéos)", effaceParRecup: false },
      { type: "Atteinte à la réputation", effaceParRecup: false },
      { type: "Coût de reconstruction", effaceParRecup: false }
    ],
    analogy: "C'est comme si un gardien de parking rendait ta voiture 6 mois plus tard : épave. Rendre l'épave n'efface pas le préjudice — il le PROUVE.",
    formulation: {
      bad: "Nous exigeons que vous récupériez la page Oye.",
      good: "Nous CONSTATONS que vous n'avez pris aucune mesure pour récupérer la page. Le préjudice RESTE DÛ indépendamment de toute récupération éventuelle."
    }
  },

  // ═══════════════════════════════════════════════════════════════════════════
  // NÉGLIGENCE SYSTÉMATIQUE — EMAILS GMAIL PERSONNELS
  // ═══════════════════════════════════════════════════════════════════════════
  gmailNegligence: {
    title: "🚨 NÉGLIGENCE SYSTÉMATIQUE — Gmail personnels",
    discovery: "31 octobre 2025 — Jonathan transmet 'Doc ADN Oye' (suite à la visio avec Jérôme DG)",
    impact: "Transforme une 'erreur individuelle' en FAUTE ORGANISATIONNELLE",
    persons: [
      { 
        name: "Jonathan Mayorkas", 
        role: "Associate / Co-fondateur",
        emailPro: "jonathan@copyrightcapital.com",
        emailGmail: "jmayorkas2@gmail.com",
        usage: "Super Admin du Business Manager CC",
        discovered: "25 août 2025"
      },
      { 
        name: "Joel Cooper", 
        role: "Director of DRM & Operations",
        emailPro: "joelcooper@copyrightcapital.com",
        emailGmail: "joelcoopercinema@gmail.com",
        usage: "Contacts avec Meta pour la compromission",
        discovered: "31 octobre 2025 (Gmail perso révélé via docs transmis suite à la visio avec Jérôme DG)"
      }
    ],
    legalImplication: {
      before: "Erreur individuelle de Jonathan",
      after: "PRATIQUE SYSTÉMATIQUE = négligence organisationnelle",
      article: "Art. 100 CO — Faute grave",
      conclusion: "Plus difficile pour CC d'arguer une erreur isolée"
    },
    robotVsHuman: {
      title: "Qualité des contacts Meta",
      cc: {
        type: "🤖 Robot automatique",
        email: "advertise-noreply@support.facebook.com",
        replyTo: "noreply@facebookmail.com",
        value: "Template générique — AUCUNE valeur probante"
      },
      adn: {
        type: "👤 Vrais employés Meta",
        contacts: ["Tom Rouyrès (tomrouyres@meta.com)", "Cheick Camara (camaracheick@meta.com)"],
        value: "Analyse humaine spécifique au cas"
      },
      irony: "CC = 'fonds spécialisé actifs digitaux' mais n'a pas de vrais contacts Meta"
    },
    questions: [
      "Pourquoi ne nous avez-vous jamais mentionné Joel Cooper ?",
      "Pourquoi 2 de vos employés utilisent des Gmail perso pour gérer des actifs de 1M€+ ?",
      "Pourquoi n'avez-vous que des contacts automatiques chez Meta ?"
    ]
  },

  // ═══════════════════════════════════════════════════════════════════════════
  // RÉUNION DU 14 NOVEMBRE 2025
  // ═══════════════════════════════════════════════════════════════════════════
  meeting14Nov: {
    date: "14 novembre 2025",
    participants: ["Jack Ojalvo (CC)", "Jonathan Mayorkas (CC)", "Alex Quilghini (ADN)", "Jérôme Cristaldi (ADN)"],
    crSentBy: "Jérôme Cristaldi",
    crSentAt: "18:45",
    jonathanResponseAt: "19:08",
    
    pointsNonContestes: [
      { point: "2FA 'toujours en place' sur jmayorkas2@gmail.com", critical: true, note: "Non contesté ≠ accepté juridiquement" },
      { point: "Oye = LA SEULE page piratée du portefeuille CC", critical: true, note: "Non contesté" },
      { point: "Jack valide le transfert vers BM d'ADN ('more safe')", critical: true, note: "Promesse orale, non contestée par écrit" },
      { point: "Refus du compte séquestre (déjà refusé par Jack le 31/10/25 lors de la visio)", critical: false, note: "Pattern: CC refuse toute solution de protection mutuelle" },
      { point: "Jack: 'pas besoin de legal'", critical: false },
      { point: "Jack propose d'utiliser ses 'crédits Meta'", critical: false, note: "Promesse jamais tenue" }
    ],
    
    jonathanResponse: {
      quote: "Depuis qu'Alex nous a alerté sur le piratage d'Oye, nous avons fait les actions que vous nous avez demandé auprès de Facebook, et si vous souhaitez désormais qu'on essaye de notre côté, on est disposé à vous aider comme Jack vous l'a proposé",
      admissions: [
        { text: "Alex nous a alerté", meaning: "CC n'a PAS détecté le piratage eux-mêmes" },
        { text: "les actions que VOUS nous avez demandé", meaning: "CC n'a agi que sur instruction d'ADN, pas d'initiative propre" },
        { text: "si vous souhaitez désormais qu'on essaye DE NOTRE CÔTÉ", meaning: "Au 14 nov (3,5 mois après), CC n'avait TOUJOURS PAS essayé de leur côté" }
      ],
      limitedTo: "PS - ma réponse ne concerne que ce point",
      implication: "Jonathan a lu le CR, n'a pas contesté les autres points — ARGUMENT pour ADN, pas certitude juridique"
    },
    
    neverAnswered: [
      "Confirmation globale du compte-rendu",
      "Transmission des échanges COMPLETS avec Meta",
      "Reconsidération du compte séquestre (1ère fois proposé par Jérôme le 31/10/25, refusé par Jack)",
      "Mise en œuvre du transfert BM (validé par Jack)",
      "Utilisation des 'crédits Meta' (promis par Jack)"
    ],
    
    neverReceived: [
      "Conversation complète avec Meta",
      "Rapport d'enquête",
      "Logs de connexion",
      "Suivi des engagements oraux de Jack"
    ]
  },

  // ═══════════════════════════════════════════════════════════════════════════
  // CHRONOLOGIE META (BOUCLE EMAIL PIRATAGE)
  // ═══════════════════════════════════════════════════════════════════════════
  metaTimeline: [
    { date: "~25-31 juillet 2025", event: "🔴 PIRATAGE DÉTECTÉ", type: "critical" },
    { date: "4 août 2025", from: "Alex (ADN)", to: "Tom Rouyrès (Meta)", event: "Signalement du piratage — aucune réponse canal urgent" },
    { date: "8 août 2025", from: "🤖 Robot Meta", to: "Joel Cooper (joelcoopercinema@gmail.com)", event: "'No evidence of compromise' — EMAIL AUTOMATIQUE (advertise-noreply@)", type: "evidence", note: "PAS une analyse humaine — support robot générique" },
    { date: "8 août 2025", from: "Joel Cooper", to: "Jonathan + Jack", event: "Forward: 'Here's the feedback I've gotten from Meta'", type: "internal" },
    { date: "12 août 2025", from: "Alex", to: "Tom", event: "Relance — toujours aucune réponse" },
    { date: "22 août 2025", from: "Tom (Meta)", to: "Cheick Camara (Meta)", event: "[INTERNE] Demande d'aide à Cheick", type: "internal" },
    { date: "22 août 2025", from: "Cheick (Meta)", to: "Alex", event: "Demande d'infos : adresse email associée au compte" },
    { date: "25 août 2025", from: "Alex", to: "Tous", event: "Page sous BM de CC, ID: 1149345562525337" },
    { date: "25 août 2025", from: "Joel Cooper", to: "Alex", event: "Confirme ID Business Manager CC: 1149345562525337" },
    { date: "25 août 2025", from: "Jonathan (CC)", to: "Tous", event: "Donne son email FB: jmayorkas2@gmail.com", type: "evidence", note: "Gmail PERSONNEL #1 comme Super Admin" },
    { date: "26 août 2025", from: "Cheick (Meta)", to: "Tous", event: "Demande de l'ID de la page piratée" },
    { date: "26 août 2025", from: "Alexis (ADN)", to: "Cheick", event: "\"Nous n'avons pas l'ID de la page\"", type: "important", note: "ADN ne possédait pas les infos techniques" },
    { date: "27 août 2025", from: "Cheick (Meta)", to: "Jonathan (CC)", event: "🔐 \"Nous vous recommandons vivement d'ACTIVER l'authentification à deux facteurs\"", type: "critical", highlight: "2FA" },
    { date: "27 août 2025", from: "Jonathan (CC)", to: "Tous", event: "\"J'ai changé mon mot de passe\"", note: "Aucune mention du 2FA" },
    { date: "27 août 2025", from: "Alexis (ADN)", to: "Cheick", event: "\"La page ne semble pas être en ligne\" + screenshot" },
    { date: "28 août 2025", from: "Cheick (Meta)", to: "Tous", event: "\"Notre équipe n'a pas réussi à localiser la page\"" },
    { date: "28 août 2025", from: "Alexis (ADN)", to: "Cheick", event: "Fournit ID: 110170275225790 (des Remittance Details)" },
    { date: "29 août 2025", from: "Cheick (Meta)", to: "Tom [INTERNE]", event: "\"Page ID 100087176420390 permanently deleted\"", type: "internal", note: "ID différent de celui fourni" },
    { date: "3 sept 2025", from: "Alex", to: "Tous", event: "\"On a retrouvé la page — ID: 100089751341306 — elle affiche des storys sexuelles\"", type: "critical", highlight: "PAGE_EXISTS" },
    { date: "8 sept 2025", from: "Alex", to: "Tous", event: "\"Les pirates continuent de poster du contenu horrible\"" },
    { date: "8 sept 2025", from: "Alexis (ADN)", to: "Cheick", event: "\"Je n'ai pas pu envoyer de mail à clementine@lists / deletion-eng@lists\"" },
    { date: "Après 8 sept 2025", event: "⛔ FIN DE LA BOUCLE — Plus aucune action de CC ou Meta", type: "critical", note: "5+ mois d'inaction" }
  ],

  // ═══════════════════════════════════════════════════════════════════════════
  // CHRONOLOGIE ADN-CC
  // ═══════════════════════════════════════════════════════════════════════════
  mainTimeline: [
    { date: "~7 août 2024", event: "Premiers contacts ADN → CC", phase: "setup" },
    { date: "1 sept 2024", event: "Date effective du contrat", phase: "setup" },
    { date: "25 sept 2024", event: "Signature General Conditions", phase: "setup" },
    { date: "26 sept 2024", event: "Signature Purchase Order", phase: "setup" },
    { date: "28 sept 2024", event: "⚠️ Transfert des pages vers BM de CC (CONTRE volonté ADN)", phase: "setup", important: true },
    { date: "2 oct 2024", event: "Signature Amendment (garantie perso + minimum)", phase: "setup" },
    { date: "Oct 2024", event: "📧 ADN propose de rembourser 150k€ — REFUSÉ par CC", phase: "operation", important: true },
    { date: "Oct 2024", event: "📧 CC retire les accès 3× sans préavis, transfère pages sans accord", phase: "operation", important: true },
    { date: "14 oct 2024", event: "Alex propose remboursement 150k€ sous 45 jours", phase: "setup", important: true },
    { date: "16 oct 2024", event: "Emre répond: 'obviously not acceptable'", phase: "setup", important: true },
    { date: "16 oct 2024 - 21:46", event: "Jonathan TRANSFÈRE les pages dans BM CC SANS prévenir", phase: "setup", important: true },
    { date: "17 oct 2024 - 13:32", event: "🔴 ULTIMATUM IMPOSSIBLE de Jack: remboursement EN 1 JOUR", phase: "setup", critical: true },
    { date: "17 oct 2024 - 13:32", event: "🔴 LETTRE PRÉDATRICE de Jack: 'we can live with it'", phase: "setup", critical: true },
    { date: "21 oct 2024", event: "Jonathan remet les accès après meeting", phase: "setup" },
    { date: "30 oct 2024 - 12:28", event: "Emre demande si 'satisfied with current status' — CYNISME", phase: "setup", important: true },
    { date: "Fin juillet 2025", event: "🔴 PIRATAGE page Oye", phase: "incident", critical: true },
    { date: "8 août 2025", event: "🤖 Joel Cooper reçoit 'No evidence of compromise' de ROBOT Meta (advertise-noreply@)", phase: "incident", important: true },
    { date: "8 août 2025", event: "📧 Joel → Jonathan → Alex: forward de l'email robot", phase: "incident" },
    { date: "25 août 2025", event: "📧 Joel Cooper confirme ID Business Manager CC: 1149345562525337", phase: "incident" },
    { date: "27 août 2025", event: "Meta recommande 2FA à Jonathan", phase: "incident", critical: true },
    { date: "Août-Sept 2025", event: "Boucle email Meta (voir onglet dédié)", phase: "incident" },
    { date: "8 sept 2025", event: "Fin boucle Meta — ABANDON", phase: "incident", critical: true },
    { date: "31 oct 2025", event: "📹 VISIO Jérôme (DG) ↔ CC — 1ère réunion de négociation directe", phase: "negotiation", important: true },
    { date: "31 oct 2025", event: "💰 Jérôme propose COMPTE SÉQUESTRE — Jack REFUSE (protection mutuelle rejetée)", phase: "negotiation", important: true },
    { date: "31 oct 2025", event: "📧 Jonathan transmet docs 'ADN Oye' — Révèle 2ème Gmail perso (joelcoopercinema@gmail.com)", phase: "negotiation", important: true },
    { date: "14 nov 2025", event: "📞 Call Jack, Jonathan, Jérôme, Alex — Jack valide transfert BM", phase: "negotiation", important: true },
    { date: "14 nov 2025 18:45", event: "📧 Jérôme envoie compte-rendu détaillé", phase: "negotiation" },
    { date: "14 nov 2025 19:08", event: "📧 Jonathan répond sur 1 SEUL point — 'PS: ma réponse ne concerne que ce point' (absence de contestation du reste)", phase: "negotiation", important: true },
    { date: "14 nov → 19 déc", event: "⏳ SILENCE TOTAL de CC — Aucun suivi des engagements", phase: "silence", critical: true },
    { date: "12 déc 2025", event: "Frédéric (CC) envoie injonction de payer", phase: "collection" },
    { date: "~14-16 déc 2025", event: "Jérôme répond fermement à Frédéric", phase: "escalation" },
    { date: "19 déc 2025", event: "📄 LETTRE ADN — Mise en demeure formelle (Art. 82 CO)", phase: "escalation", critical: true },
    { date: "~20-23 déc 2025", event: "Jonathan propose RDV technique", phase: "escalation" },
    { date: "23 déc 2025", event: "❌ Jonathan ANNULE le RDV technique après réception lettre", phase: "escalation", critical: true },
    { date: "26 déc 2025", event: "📄 LETTRE CC — Réponse agressive (Emre Kumet)", phase: "escalation", critical: true },
    { date: "29 déc 2025", event: "⏰ Délai transfert actifs EXPIRÉ — Non respecté par CC", phase: "current", critical: true }
  ],

  // ═══════════════════════════════════════════════════════════════════════════
  // PREUVE 2FA
  // ═══════════════════════════════════════════════════════════════════════════
  twoFactorProof: {
    metaEmail: {
      date: "27 août 2025",
      from: "Cheick Camara (Meta)",
      to: "Jonathan Mayorkas (CC)",
      quote: "Nous vous recommandons vivement d'activer l'authentification à deux facteurs"
    },
    jonathanMeeting: {
      date: "14 novembre 2025",
      context: "Réunion téléphonique",
      quote: "Jonathan a confirmé que l'authentification à deux facteurs (2FA) a toujours été en place",
      source: "Compte-rendu Jérôme — NON CONTESTÉ par Jonathan"
    },
    ccLetter: {
      date: "26 déc 2025",
      from: "Emre Kumet (CC)",
      quote: "All accounts were protected by 2FA"
    },
    analysis: {
      contradiction: "Meta recommande d'ACTIVER le 2FA → donc il n'était PAS actif",
      timeline: "Jonathan affirme le 14/11 que le 2FA était 'toujours en place' → CONTREDIT par Meta le 27/08",
      conclusion: "Double contradiction documentée"
    }
  },

  // ═══════════════════════════════════════════════════════════════════════════
  // LETTRES ÉCHANGÉES
  // ═══════════════════════════════════════════════════════════════════════════
  letters: {
    adn: {
      date: "19 décembre 2025",
      sender: "Alex (Président ADN Production)",
      sections: [
        { num: "I", title: "Contexte", content: "Page Oye perdue sous garde exclusive CC" },
        { num: "II", title: "Questions en suspens", content: "Aucun rapport/log/échange Meta depuis 5 mois" },
        { num: "III", title: "Préjudice", content: "Estimation 1-1,3M€" },
        { num: "IV", title: "Exception pénalités", content: "Clause 4.3(e)(ii) invoquée" },
        { num: "V", title: "Fondement juridique", content: "Art. 82 CO (exception d'inexécution)" },
        { num: "VI", title: "Transfert actifs", content: "Demande Buzzly + VoyagerLoin" },
        { num: "VII", title: "Mise en garde", content: "Plainte pénale possible (Art. 323-1 CP)" },
        { num: "VIII", title: "Réserve droits", content: "Art. 100 CO + Art. 2 CC (abus de droit)" },
        { num: "IX", title: "Dialogue", content: "Résolution amiable proposée" },
        { num: "X", title: "Délais", content: "29/12 actifs, 13/01 réponse complète" }
      ],
      documentsRequested: [
        "Rapport d'enquête interne complet",
        "Logs connexion BM (juin-août 2025)",
        "Échanges avec Meta",
        "Position formelle sur responsabilité",
        "Solution pour réparation préjudice"
      ]
    },
    cc: {
      date: "26 décembre 2025",
      sender: "Emre Kumet (Head of Legal CC)",
      timing: "Réponse en 4 jours pendant Noël = signal de panique",
      claims: [
        { claim: "Art. 82 CO inapplicable", response: "Contestable — ADN argumente l'inexécution de l'obligation de sécurisation", critical: false },
        { claim: "No breach by CC exists", response: "Contestable — perte de l'actif sous leur garde exclusive", critical: false },
        { claim: "All accounts were protected by 2FA", response: "🔴 CONTREDIT par email Meta du 27/08 ET aveu Jonathan 14/11", critical: true },
        { claim: "No evidence of compromise", response: "🔴 CONTREDIT — la page existait au 03/09/2025 sous contrôle pirates", critical: true },
        { claim: "Not custodial or fiduciary", response: "🔴 CONTREDIT — Meta affiche CC comme 'responsable' de Buzzly", critical: true },
        { claim: "Compromised device on ADN's side", response: "AUCUNE PREUVE — pure spéculation", critical: false },
        { claim: "ADN possessed Page ID", response: "🔴 CONTREDIT — email 26/08: 'Nous n'avons pas l'ID'", critical: true }
      ],
      demands: {
        amount: 11351.89,
        deadline: "5 jours ouvrés (~2 janvier 2026)",
        threats: ["Clause 6 (pénalités ×3)", "Clause 7 (Breach Call Option)", "Procédures formelles"]
      },
      notAnswered: [
        "Article 2 CC (abus de droit)",
        "Rapport d'enquête",
        "Logs de connexion",
        "Échanges complets avec Meta",
        "Transfert des actifs",
        "Contradiction 2FA",
        "Pourquoi seule Oye a été piratée",
        "Pourquoi le RDV technique a été annulé"
      ]
    }
  },

  // ═══════════════════════════════════════════════════════════════════════════
  // ARSENAL JURIDIQUE
  // ═══════════════════════════════════════════════════════════════════════════
  legal: {
    swiss: [
      { art: "Art. 82 CO", name: "Exception d'inexécution", use: "Base de la suspension des paiements", status: "invoked", probability: "55-65%" },
      { art: "Art. 97 CO", name: "Responsabilité pour inexécution", use: "Base de la demande de dommages", status: "reserved" },
      { art: "Art. 100 CO", name: "Nullité exonération faute grave", use: "Annuler la clause 9.2 (limitation responsabilité)", status: "invoked", probability: "30-40%" },
      { art: "Art. 2 CC", name: "Abus de droit", use: "Bloquer la clause 7 (Breach Call Option)", status: "invoked", probability: "55-65%" },
      { art: "Art. 120-125 CO", name: "Compensation", use: "Déclarer la contre-créance", status: "reserved" }
    ],
    french: [
      { art: "Art. 323-1 CP", name: "Accès frauduleux à un STAD", use: "Plainte pénale (levier de pression)", status: "reserved" }
    ]
  },

  // ═══════════════════════════════════════════════════════════════════════════
  // PREUVES CLÉS
  // ═══════════════════════════════════════════════════════════════════════════
  evidence: [
    { id: 1, name: "Email Meta 27/08 — Recommandation 2FA", strength: "devastating", desc: "Meta recommande d'ACTIVER le 2FA à Jonathan → suggère fortement qu'il n'était pas actif à cette date", status: "documented" },
    { id: 2, name: "CR 14/11 — Jonathan confirme 2FA 'toujours en place'", strength: "devastating", desc: "Affirmation qui CONTREDIT l'email Meta", status: "documented" },
    { id: 3, name: "Email 14/11 19:08 — Aveu de passivité CC", strength: "devastating", desc: "'si vous souhaitez qu'on essaye DE NOTRE CÔTÉ' → 3,5 mois sans initiative", status: "documented" },
    { id: 4, name: "Page existait au 03/09 (ID 100089751341306)", strength: "devastating", desc: "Contredit 'no evidence of compromise' et 'permanently deleted' — preuve récente disponible", status: "documented" },
    { id: 5, name: "Meta affiche CC comme 'responsable'", strength: "very_strong", desc: "Screenshot Buzzly: 'Copyright Capital SA est responsable de cette Page'", status: "documented" },
    { id: 6, name: "Gmail personnel comme Super Admin", strength: "strong", desc: "jmayorkas2@gmail.com pour gérer des actifs de 1M€+", status: "documented" },
    { id: 7, name: "ADN n'avait pas le Page ID", strength: "strong", desc: "Email 26/08: 'Nous n'avons pas l'ID de la page'", status: "documented" },
    { id: 8, name: "4+ mois d'inaction après le 8 sept", strength: "very_strong", desc: "Aucune action de récupération documentée depuis", status: "documented" },
    { id: 9, name: "Silence sur CR 14/11", strength: "very_strong", desc: "Jack ne répond pas, Jonathan répond sur 1 point → absence de contestation du reste (argument, pas certitude juridique)", status: "documented" },
    { id: 10, name: "RDV technique annulé après lettre", strength: "strong", desc: "Jonathan propose puis annule après réception de la mise en demeure", status: "documented" },
    { id: 11, name: "Proposition remboursement 150k€ refusée", strength: "strong", desc: "ADN a proposé de sortir du deal en oct 2024 — CC a refusé", status: "documented" },
    { id: 12, name: "Préjudice que nous estimons IRRÉVERSIBLE — page inexploitable", strength: "very_strong", desc: "5 mois d'inaction = valeur de la page estimée à 0€ même si récupérée (argument ADN, à établir par expertise)", status: "documented" },
    { id: 13, name: "Joel Cooper — 2ème Gmail perso", strength: "very_strong", desc: "joelcoopercinema@gmail.com utilisé pour contacts Meta — découvert 31/10", status: "documented", date: "31/10/2025" },
    { id: 14, name: "2 Gmail perso = éléments de NÉGLIGENCE SYSTÉMATIQUE", strength: "very_strong", desc: "Jonathan + Joel utilisent Gmail perso — pratique organisationnelle pouvant constituer une faute grave (Art. 100 CO)", status: "documented" },
    { id: 15, name: "'No evidence' = ROBOT automatique", strength: "very_strong", desc: "Email 8/08 de advertise-NOREPLY@support.facebook.com — aucune analyse humaine", status: "documented" },
    { id: 16, name: "CC n'a pas de vrais contacts Meta", strength: "strong", desc: "ADN a Tom/Cheick (humains), CC n'a que du support automatique robot", status: "documented" }
  ],

  // ═══════════════════════════════════════════════════════════════════════════
  // STRATÉGIE DE GUERRE
  // ═══════════════════════════════════════════════════════════════════════════
  warStrategy: {
    ultimateGoal: {
      title: "CAPITULATION DE CC",
      description: "Amener Copyright Capital à abandonner leurs poursuites et accepter une résolution favorable à ADN",
      outcomes: [
        { outcome: "Annulation totale de la dette (~142k€)", priority: "critical" },
        { outcome: "Compensation pour Oye (200-500k€) — DUE MÊME SI PAGE RÉCUPÉRÉE", priority: "high" },
        { outcome: "Transfert immédiat Buzzly + VoyagerLoin + YouTube", priority: "high" },
        { outcome: "Fin définitive du partenariat", priority: "medium" },
        { outcome: "Aucune clause 7 (Breach Call Option) exercée", priority: "critical" }
      ]
    },

    whyCCLoses: {
      title: "POURQUOI C'EST INGAGNABLE POUR CC",
      reasons: [
        {
          category: "Coût vs Bénéfice",
          points: [
            "Arbitrage ICC = 100-300k€ de frais",
            "Durée = 2-3 ans",
            "Pour récupérer quoi? 142k€ d'un débiteur insolvable",
            "ROI négatif garanti"
          ]
        },
        {
          category: "Risque juridique",
          points: [
            "Contre-créance ADN: 1-1,3M€",
            "Preuves de négligence accablantes",
            "Contradictions documentées (2FA)",
            "Potentielle faute grave → clause 9.2 annulée"
          ]
        },
        {
          category: "Risque réputationnel",
          points: [
            "Plainte pénale en France = publicité négative",
            "Fonds d'investissement qui perd les actifs de ses clients",
            "Gmail personnel pour gérer 1M€+ d'actifs",
            "Pattern de négligence exposé"
          ]
        },
        {
          category: "Exécution impossible",
          points: [
            "Alex n'a RIEN de saisissable",
            "Pas de maison, pas d'épargne",
            "Sentence arbitrale = papier sans valeur",
            "Frais d'exécution supplémentaires pour rien"
          ]
        }
      ]
    },

    keyMessages: [
      {
        message: "JE N'AI RIEN À PERDRE",
        how: "Mentionner subtilement l'absence d'actifs saisissables",
        tone: "Factuel, pas menaçant",
        example: "Une procédure longue et coûteuse aboutirait à une sentence difficilement exécutable"
      },
      {
        message: "VOUS AVEZ TOUT À PERDRE",
        how: "Rappeler les preuves de négligence, le coût de l'arbitrage, le risque de contre-créance",
        tone: "Professionnel, documenté",
        example: "Les éléments factuels exposent CC à une responsabilité significative"
      },
      {
        message: "LE TEMPS JOUE CONTRE VOUS",
        how: "Chaque mois = dommages supplémentaires, preuves qui s'accumulent",
        tone: "Patient, confiant",
        example: "Nous documenterons l'intégralité des pertes subies pendant cette période"
      },
      {
        message: "LA SORTIE EXISTE",
        how: "Toujours laisser une porte ouverte à la négociation",
        tone: "Constructif",
        example: "Nous restons ouverts à une résolution amiable qui reconnaisse les torts subis"
      },
      {
        message: "LA RÉCUPÉRATION NE CHANGE RIEN",
        how: "Clarifier que le préjudice est estimé IRRÉVERSIBLE, page récupérée ou non",
        tone: "Factuel, juridique",
        example: "Le préjudice reste dû indépendamment de toute récupération éventuelle"
      }
    ],

    phases: [
      {
        phase: 1,
        name: "SILENCE STRATÉGIQUE",
        period: "29 déc 2025 → 13 janv 2026",
        actions: [
          "NE PAS répondre à leur ultimatum du 26/12",
          "Laisser expirer leur délai de paiement (2 janv)",
          "Observer leur réaction",
          "Documenter tout"
        ],
        psychology: "Créer l'incertitude — ils ne savent pas ce qu'on prépare",
        status: "active"
      },
      {
        phase: 2,
        name: "CONSTAT D'ÉCHEC",
        period: "14-15 janvier 2026",
        actions: [
          "Lettre constatant: délai actifs expiré, aucune réponse aux questions",
          "Rappeler les aveux du 14 novembre",
          "Annoncer la suite de la procédure",
          "Mentionner (sans détailler) l'impossibilité d'exécution"
        ],
        psychology: "Montrer qu'on est organisé, patient, déterminé",
        status: "upcoming"
      },
      {
        phase: 3,
        name: "PRESSION PÉNALE",
        period: "Fin janvier 2026",
        actions: [
          "Plainte pénale Art. 323-1 CP (accès frauduleux)",
          "Coût: 0€",
          "Effet: procédure en France, publicité négative potentielle",
          "CC doit répondre dans une juridiction française"
        ],
        psychology: "Changer le terrain de jeu — les forcer en défense",
        status: "upcoming"
      },
      {
        phase: 4,
        name: "NÉGOCIATION EN POSITION DE FORCE",
        period: "Février-Mars 2026",
        actions: [
          "Proposer une résolution: annulation dette + compensation",
          "Leur montrer le calcul coût/bénéfice",
          "Deadline pour accepter avant escalade supplémentaire"
        ],
        psychology: "Offrir une sortie honorable mais ferme",
        status: "upcoming"
      },
      {
        phase: 5,
        name: "GUERRE D'USURE (si nécessaire)",
        period: "2026+",
        actions: [
          "Contester toute procédure arbitrale",
          "Soulever toutes les exceptions",
          "Faire durer, faire coûter",
          "Rendre l'exécution impossible"
        ],
        psychology: "Leur montrer que c'est un gouffre sans fond",
        status: "reserve"
      }
    ],

    ccCalculation: {
      title: "LE CALCUL DE CC (ce qu'ils doivent comprendre)",
      ifTheyFight: {
        label: "S'ils se battent",
        costs: [
          { item: "Frais arbitrage ICC", amount: "100-300k€" },
          { item: "Avocats (2-3 ans)", amount: "50-150k€" },
          { item: "Temps des dirigeants", amount: "Incalculable" },
          { item: "Risque contre-créance", amount: "Jusqu'à 1,3M€" },
          { item: "Exécution de la sentence", amount: "0€ récupéré (Alex insolvable)" }
        ],
        total: "150-450k€ de pertes + risque 1,3M€",
        result: "PERTE NETTE GARANTIE"
      },
      ifTheySettle: {
        label: "S'ils négocient",
        gains: [
          { item: "Économie frais arbitrage", amount: "+100-300k€" },
          { item: "Économie avocats", amount: "+50-150k€" },
          { item: "Fin du risque contre-créance", amount: "Évite 1,3M€" },
          { item: "Conservation des autres actifs", amount: "Buzzly, YouTube" },
          { item: "Préservation réputation", amount: "Incalculable" }
        ],
        cost: "Annulation dette 142k€ + compensation ~200-300k€",
        result: "SORTIE PROPRE, PERTES LIMITÉES"
      }
    },

    surrenderSignals: [
      { signal: "Proposition de 'discussion' ou 'médiation'", meaning: "Ils cherchent une sortie", response: "Accepter mais rester ferme sur les principes" },
      { signal: "Silence prolongé (2+ semaines)", meaning: "Ils réfléchissent au coût", response: "Maintenir la pression douce" },
      { signal: "Changement de ton dans les échanges", meaning: "Le juridique a parlé aux dirigeants", response: "Ouvrir une porte" },
      { signal: "Proposition de transfert des actifs", meaning: "Concession majeure", response: "Accepter et négocier le reste" },
      { signal: "Demande de délai", meaning: "Ils temporisent, cherchent une solution", response: "Accorder un délai court avec conditions" }
    ],

    mistakes: [
      { mistake: "Montrer de l'impatience", why: "Le temps est notre allié, pas le leur" },
      { mistake: "Révéler toutes nos cartes", why: "Garder des surprises pour chaque étape" },
      { mistake: "Être agressif ou insultant", why: "Rester professionnel = crédibilité" },
      { mistake: "Accepter un appel téléphonique", why: "Tout doit être écrit et documenté" },
      { mistake: "Payer quoi que ce soit", why: "Briserait l'exception d'inexécution" },
      { mistake: "Menacer sans agir", why: "Les menaces vides = perte de crédibilité" },
      { mistake: "Lier récupération à fin du préjudice", why: "Le préjudice reste dû MÊME si page récupérée" }
    ],

    talebPrinciples: [
      {
        principle: "ANTIFRAGILITÉ",
        application: "Plus CC attaque, plus notre position se renforce. Chaque échange nous donne de nouvelles preuves."
      },
      {
        principle: "ASYMÉTRIE",
        application: "ADN risque peu (Alex insolvable), CC risque beaucoup (frais + contre-créance + réputation)."
      },
      {
        principle: "OPTIONALITÉ",
        application: "Garder toutes les options ouvertes. Ne jamais s'engager définitivement."
      },
      {
        principle: "VIA NEGATIVA",
        application: "Ce qu'on NE fait PAS est aussi important. Le silence crée la pression."
      },
      {
        principle: "BARBELL STRATEGY",
        application: "Protection maximale (silence, documentation) + attaques ciblées (plainte pénale, lettres)."
      }
    ]
  },

  // ═══════════════════════════════════════════════════════════════════════════
  // DÉLAIS ET ACTIONS
  // ═══════════════════════════════════════════════════════════════════════════
  deadlines: [
    { date: "29 déc 2025", event: "Délai transfert actifs", setBy: "Lettre ADN 19/12", status: "expired", action: "Constater le non-respect" },
    { date: "~2 janv 2026", event: "Délai paiement garantie 11 351,89€", setBy: "Lettre CC 26/12", status: "pending", action: "ADN ne paiera pas" },
    { date: "13 janv 2026", event: "Délai réponse complète CC", setBy: "Lettre ADN 19/12", status: "pending", action: "Attendre puis escalader" }
  ],

  // ═══════════════════════════════════════════════════════════════════════════
  // RÈGLES D'OR
  // ═══════════════════════════════════════════════════════════════════════════
  goldenRules: [
    { rule: "Toujours par écrit", detail: "Plus d'appels, tout documenté" },
    { rule: "Ne jamais répondre dans l'heure", detail: "24-48h minimum" },
    { rule: "Faire relire avant d'envoyer", detail: "Erreurs = faiblesse" },
    { rule: "Ton constant", detail: "Ferme, professionnel, jamais agressif" },
    { rule: "Courriers formels = signature Alex", detail: "Président" },
    { rule: "Emails opérationnels = signature Jérôme", detail: "Directeur Général" },
    { rule: "Garder les armes en réserve", detail: "Ne pas tout révéler" },
    { rule: "CONSTAT, pas DEMANDE", detail: "Pour Oye: constater l'inaction, ne pas demander récupération" }
  ],

  // ═══════════════════════════════════════════════════════════════════════════
  // OBJECTIFS FINAUX
  // ═══════════════════════════════════════════════════════════════════════════
  objectives: [
    "Compensation du préjudice (1-1,3M€)",
    "Annulation de la dette restante (~142k€)",
    "Transfert des actifs restants (Buzzly, VoyagerLoin, YouTube)",
    "Fin du partenariat avec CC"
  ],

  // ═══════════════════════════════════════════════════════════════════════════
  // ERREURS À ÉVITER (formulations)
  // ═══════════════════════════════════════════════════════════════════════════
  errorsToAvoid: [
    { error: "Dire que CC a donné le mauvais ID à Meta", correction: "C'est Alexis (ADN) qui a fourni l'ID le 28/08" },
    { error: "Dire que CC a MENTI sur le 2FA", correction: "Dire 'CONTRADICTION' — on ne peut pas prouver l'intention" },
    { error: "Affirmer que la contre-créance éteint automatiquement la dette", correction: "C'est un argument, pas automatique si créance contestée" },
    { error: "Dire que le 2FA n'était PAS actif (certitude)", correction: "Dire 'INDICE FORT' ou 'fortement suggère'" },
    { error: "Dire que le silence sur le CR vaut 'acceptation'", correction: "Dire 'absence de contestation' — le silence ne vaut pas acceptation en droit suisse (sauf exceptions)" },
    { error: "Affirmer que Jack a 'accepté' le CR", correction: "Dire que Jack 'n'a pas contesté' le CR — nuance importante pour un arbitre" }
  ],

  // ═══════════════════════════════════════════════════════════════════════════
  // PROFIL PSYCHOLOGIQUE DE COPYRIGHT CAPITAL — EXHAUSTIF
  // ═══════════════════════════════════════════════════════════════════════════
  psychologyCC: {
    lastUpdate: "29 décembre 2025",
    
    phases: [
      {
        phase: "PHASE 1 — Mise en place du contrat et CRISE INITIALE",
        period: "Septembre - Octobre 2024",
        color: "blue",
        events: [
          { 
            event: "Transfert des pages vers le BM de CC", 
            date: "28 sept 2024",
            detail: "ADN n'était PAS d'accord. CC a insisté/imposé ce transfert.", 
            meaning: "Comportement autoritaire, prise de contrôle unilatérale",
            evidence: true
          },
          { 
            event: "Accès retirés 3× sans préavis", 
            date: "14-16 oct 2024",
            detail: "CC a retiré les accès d'ADN à plusieurs reprises sans prévenir. Jonathan s'engage à ne plus le faire, puis le refait JUSTE APRÈS l'appel.", 
            meaning: "Mensonge délibéré, promesses non tenues dès le début",
            evidence: true,
            critical: true
          },
          { 
            event: "Pages TRANSFÉRÉES dans le BM de CC sans consentement", 
            date: "16 oct 2024 - 21:46",
            detail: "Pas juste un retrait d'accès — CC a TRANSFÉRÉ les pages d'ADN dans leur propre Business Manager sans avertissement.", 
            meaning: "APPROPRIATION UNILATÉRALE des actifs — comportement prédateur",
            evidence: true,
            critical: true
          },
          { 
            event: "Alex propose de rembourser 150k€ sous 45 jours", 
            date: "14 oct 2024",
            detail: "Proposition raisonnable pour sortir proprement du deal.", 
            meaning: "ADN cherche une solution amiable",
            evidence: true
          },
          { 
            event: "Emre répond : 'obviously not acceptable'", 
            date: "16 oct 2024 - 17:35",
            detail: "Refuse catégoriquement la proposition de remboursement.", 
            meaning: "CC ne veut PAS d'une sortie propre",
            evidence: true,
            critical: true
          },
          { 
            event: "ULTIMATUM IMPOSSIBLE de Jack : remboursement EN 1 JOUR", 
            date: "17 oct 2024 - 13:32",
            detail: "Jack exige le remboursement total 'by end of business day tomorrow'. Délai impossible, conçu pour échouer.", 
            meaning: "PIÈGE DÉLIBÉRÉ — l'ultimatum est fait pour être refusé",
            evidence: true,
            critical: true
          },
          { 
            event: "LETTRE PRÉDATRICE de Jack : 'we can live with it'", 
            date: "17 oct 2024 - 13:32",
            detail: "Jack écrit: 'What may be the worst option for you, is something that is just not ideal that we can live with for us.' Et: 'we will become the rightful owner of all of your content'.", 
            meaning: "INTENTION PRÉDATRICE EXPLICITE — Jack ANTICIPE et ACCEPTE de prendre possession de tout le contenu",
            evidence: true,
            critical: true
          },
          { 
            event: "Jack menace de poursuivre Alex personnellement", 
            date: "17 oct 2024 - 13:32",
            detail: "'we will sue you (both the company and you personally)'", 
            meaning: "Intimidation juridique maximale dès octobre 2024",
            evidence: true
          },
          { 
            event: "Jonathan remet les accès après meeting", 
            date: "21 oct 2024",
            detail: "Demande si Alex a 'toujours des soucis'.", 
            meaning: "Retour au calme superficiel après la crise",
            evidence: true
          },
          { 
            event: "Emre demande si 'satisfied with the current status'", 
            date: "30 oct 2024 - 12:28",
            detail: "Après tout ce chaos, Emre demande si tout va bien côté légal.", 
            meaning: "CYNISME — fait comme si rien ne s'était passé",
            evidence: true
          }
        ],
        synthesis: "Octobre 2024 révèle la VRAIE NATURE de CC : comportement AGRESSIF et stratégique. Jack ANTICIPE explicitement devenir propriétaire des contenus et dit 'on peut vivre avec'. L'ultimatum d'un jour est conçu pour échouer. Le refus du remboursement 150k€ prouve qu'ils veulent le CONTRÔLE, pas l'argent."
      },
      {
        phase: "PHASE 2 — Période opérationnelle",
        period: "Novembre 2024 - Juillet 2025",
        color: "slate",
        events: [
          { 
            event: "Gmail personnel comme Super Admin", 
            date: "Découvert en août 2025",
            detail: "jmayorkas2@gmail.com utilisé pour gérer des actifs valant 1M€+", 
            meaning: "Négligence technique grave, amateurisme",
            evidence: true,
            critical: true
          },
          { 
            event: "Aucun monitoring des actifs sous gestion", 
            date: "Continu",
            detail: "CC ne surveille pas activement les pages dont ils ont le contrôle exclusif.", 
            meaning: "Gestionnaire passif malgré le contrôle total",
            evidence: true
          }
        ],
        synthesis: "Période de contrôle silencieux. CC a le contrôle exclusif mais ne monitore pas les actifs. La négligence technique (Gmail perso) va s'avérer catastrophique."
      },
      {
        phase: "PHASE 3 — Piratage et gestion de crise",
        period: "Août - Septembre 2025",
        color: "red",
        events: [
          { 
            event: "CC n'a PAS détecté le piratage", 
            date: "Fin juillet 2025",
            detail: "C'est Alex (ADN) qui a découvert et signalé le piratage.", 
            meaning: "Absence totale de monitoring de leurs propres actifs sous gestion",
            evidence: true,
            critical: true
          },
          { 
            event: "Meta recommande d'ACTIVER le 2FA à Jonathan", 
            date: "27 août 2025",
            detail: "Cheick Camara (Meta) écrit explicitement de l'activer.", 
            meaning: "Le 2FA n'était PAS actif — preuve de négligence",
            evidence: true,
            critical: true
          },
          { 
            event: "Jonathan change son mot de passe, ne mentionne pas le 2FA", 
            date: "27 août 2025",
            detail: "Sa seule action documentée après la recommandation Meta.", 
            meaning: "Ignore la recommandation critique de sécurité",
            evidence: true
          },
          { 
            event: "Confusion sur les Page ID", 
            date: "26-29 août 2025",
            detail: "Personne ne semble avoir le bon ID. Meta cherche une page qui n'est pas la bonne.", 
            meaning: "Désorganisation totale, personne ne maîtrise le sujet",
            evidence: true
          },
          { 
            event: "FIN de la boucle Meta sans résolution", 
            date: "8 sept 2025",
            detail: "Plus aucune action après cette date malgré la page toujours sous contrôle des pirates.", 
            meaning: "ABANDON pur et simple",
            evidence: true,
            critical: true
          },
          { 
            event: "4+ mois d'INACTION totale", 
            date: "Sept - Déc 2025",
            detail: "Aucune démarche documentée pour récupérer la page.", 
            meaning: "Négligence caractérisée, abandon de poste",
            evidence: true,
            critical: true
          }
        ],
        synthesis: "Face à la crise, CC démontre une INCOMPÉTENCE et une PASSIVITÉ totales. Ils ne détectent pas le problème, ne suivent pas les recommandations de sécurité, abandonnent les démarches de récupération."
      },
      {
        phase: "PHASE 4 — Tentative de dialogue",
        period: "Octobre - Novembre 2025",
        color: "amber",
        events: [
          {
            event: "VISIO Jérôme (DG) ↔ CC",
            date: "31 oct 2025",
            detail: "Première réunion de négociation directe par vidéo entre Jérôme Cristaldi (Directeur Général ADN) et les représentants de CC. Jérôme propose un compte séquestre comme solution de protection mutuelle.",
            meaning: "Ouverture apparente au dialogue, ADN prend l'initiative via son DG",
            evidence: true,
            critical: true
          },
          {
            event: "Jack refuse le compte séquestre proposé par Jérôme (DG)",
            date: "31 oct 2025",
            detail: "Lors de la visio du 31 octobre 2025, Jack Ojalvo rejette immédiatement la proposition de compte séquestre. CC refuse toute mesure qui limiterait leur contrôle total.",
            meaning: "Pattern confirmé: CC refuse systématiquement les solutions collaboratives (comme le remboursement de 150k€ en oct 2024)",
            evidence: true,
            critical: true
          },
          { 
            event: "Jack : \"Pas besoin de legal\"", 
            date: "14 nov 2025",
            detail: "Jack Ojalvo affirme vouloir régler ça entre partenaires.", 
            meaning: "Veut éviter la formalisation, préfère l'informel (où rien n'est traçable)",
            evidence: true
          },
          { 
            event: "Jack valide le transfert vers BM d'ADN", 
            date: "14 nov 2025",
            detail: "Validation ORALE pendant la réunion.", 
            meaning: "Engagement verbal, jamais suivi d'effet",
            evidence: true,
            critical: true
          },
          { 
            event: "Jack propose ses \"crédits Meta\"", 
            date: "14 nov 2025",
            detail: "Dit qu'il est prêt à utiliser ses contacts Meta.", 
            meaning: "Promesse jamais tenue",
            evidence: true
          },
          { 
            event: "Jonathan confirme 2FA \"toujours en place\"", 
            date: "14 nov 2025",
            detail: "Affirmation pendant la réunion, documentée dans le CR.", 
            meaning: "CONTRADICTION avec l'email Meta du 27/08",
            evidence: true,
            critical: true
          },
          { 
            event: "Jonathan : \"si vous souhaitez qu'on essaye de notre côté\"", 
            date: "14 nov 2025 - 19:08",
            detail: "Aveu par email que CC n'avait PAS essayé de récupérer la page.", 
            meaning: "AVEU de passivité après 3,5 mois",
            evidence: true,
            critical: true
          },
          { 
            event: "Jack ne répond PAS au compte-rendu", 
            date: "14 nov 2025",
            detail: "Le CR demande confirmation. Jack = silence.", 
            meaning: "Évite les traces écrites qui l'engagent",
            evidence: true
          },
          { 
            event: "Jonathan répond sur 1 SEUL point, ignore le reste", 
            date: "14 nov 2025 - 19:08",
            detail: "\"PS - ma réponse ne concerne que ce point\"", 
            meaning: "Absence de contestation du reste du CR — argument ADN (pas certitude juridique)",
            evidence: true,
            critical: true
          }
        ],
        synthesis: "Phase de FAUSSES PROMESSES. Jack dit ce qu'on veut entendre, Jonathan fait des aveux involontaires. Rien n'est suivi d'effet. Le silence sur le CR vaut acceptation tacite."
      },
      {
        phase: "PHASE 5 — Escalade et intimidation",
        period: "Décembre 2025",
        color: "red",
        events: [
          { 
            event: "Frédéric envoie une injonction de payer", 
            date: "12 déc 2025",
            detail: "Demande de paiement formelle.", 
            meaning: "Passage en mode recouvrement, fin du dialogue",
            evidence: true
          },
          { 
            event: "Lettre ADN — Mise en demeure Art. 82 CO", 
            date: "19 déc 2025",
            detail: "Alex formalise la position juridique d'ADN.", 
            meaning: "ADN reprend l'initiative",
            evidence: true
          },
          { 
            event: "Jonathan propose un RDV technique", 
            date: "~20-23 déc 2025",
            detail: "Proposition de réunion pour discuter.", 
            meaning: "Tentative de reprendre le contrôle du narratif",
            evidence: true
          },
          { 
            event: "Jonathan ANNULE le RDV après réception de la lettre", 
            date: "23 déc 2025",
            detail: "Annulation immédiate après avoir lu la mise en demeure.", 
            meaning: "PANIQUE — la formalisation juridique les effraie",
            evidence: true,
            critical: true
          },
          { 
            event: "Lettre CC agressive (Emre Kumet)", 
            date: "26 déc 2025",
            detail: "Réponse en 4 jours PENDANT NOËL. Ton menaçant, ultimatum 5 jours.", 
            meaning: "Panique + besoin de contrôler le narratif + intimidation juridique",
            evidence: true,
            critical: true
          },
          { 
            event: "Affirmations FAUSSES dans la lettre", 
            date: "26 déc 2025",
            detail: "\"2FA always in place\", \"no evidence of compromise\", \"ADN had the Page ID\"", 
            meaning: "Soit incompétence (pas vérifié), soit mensonge délibéré",
            evidence: true,
            critical: true
          },
          { 
            event: "Refuse le transfert des actifs", 
            date: "26 déc 2025",
            detail: "Dit que ça \"ne repose sur aucun élément du contrat\".", 
            meaning: "Contradiction avec l'accord oral de Jack le 14/11",
            evidence: true
          },
          { 
            event: "Ignore TOUTES les questions du 19/12", 
            date: "26 déc 2025",
            detail: "Pas de rapport, pas de logs, pas d'échanges Meta.", 
            meaning: "Stratégie d'évitement — ils n'ont PAS de réponses",
            evidence: true,
            critical: true
          }
        ],
        synthesis: "Face à la formalisation juridique, CC PANIQUE. Réponse précipitée avec des affirmations fausses. Intimidation plutôt que réponses. Ils n'ont PAS de défense solide."
      }
    ],

    individuals: [
      {
        name: "Jack Ojalvo",
        role: "Chairman (Président)",
        behaviors: [
          { behavior: "Impose le transfert vers leur BM (sept 2024)", meaning: "Autoritaire, prend le contrôle unilatéralement", period: "setup" },
          { behavior: "Refuse le remboursement de 150k€ (oct 2024)", meaning: "Veut garder le contrôle, pas juste l'argent", period: "setup" },
          { behavior: "ULTIMATUM IMPOSSIBLE : remboursement en 1 JOUR (17/10/24)", meaning: "Piège délibéré — délai conçu pour échouer", period: "setup" },
          { behavior: "\"What may be worst for you, we can live with\" (17/10/24)", meaning: "INTENTION PRÉDATRICE EXPLICITE — accepte de prendre les actifs", period: "setup" },
          { behavior: "\"We will become rightful owner of all your content\" (17/10/24)", meaning: "ANTICIPE et DÉSIRE la prise de possession totale", period: "setup" },
          { behavior: "Menace de poursuivre Alex personnellement (17/10/24)", meaning: "Intimidation maximale dès le début", period: "setup" },
          { behavior: "\"Pas besoin de legal\" (14/11/25)", meaning: "Préfère l'informel où rien n'est traçable", period: "negotiation" },
          { behavior: "Valide le transfert BM oralement", meaning: "Promet sans s'engager par écrit", period: "negotiation" },
          { behavior: "Propose ses \"crédits Meta\"", meaning: "Promesse jamais tenue", period: "negotiation" },
          { behavior: "Ne répond PAS au compte-rendu", meaning: "Évite toute trace écrite engageante", period: "negotiation" },
          { behavior: "Disparaît quand ça devient juridique", meaning: "Délègue les problèmes à Emre", period: "escalation" }
        ],
        profile: "STRATÈGE AGRESSIF — Pas juste autoritaire : sa lettre d'oct 2024 révèle une intention DÉLIBÉRÉE de s'emparer des actifs. L'ultimatum d'un jour est un piège. Dit 'on peut vivre avec' devenir propriétaire des contenus. Promet ensuite ce qu'on veut entendre, puis disparaît.",
        weakness: "Sa propre lettre du 17/10/24 prouve son intention prédatrice. Fuit la confrontation documentée.",
        keyContradiction: "Octobre 2024 : exige remboursement en 1 jour (impossible) tout en disant vouloir 'résoudre'. Novembre 2025 : valide oralement le transfert des actifs. Décembre 2025 : son équipe refuse par écrit.",
        color: "amber"
      },
      {
        name: "Jonathan Mayorkas",
        role: "Associé / Co-fondateur",
        behaviors: [
          { behavior: "S'engage à ne plus retirer les accès → les retire JUSTE APRÈS l'appel (oct 2024)", meaning: "MENTEUR DÉLIBÉRÉ dès le début", period: "setup" },
          { behavior: "Transfère les pages dans leur BM sans prévenir (16/10/24)", meaning: "Appropriation unilatérale des actifs", period: "setup" },
          { behavior: "Gmail perso comme Super Admin", meaning: "Négligence technique grave", period: "operation" },
          { behavior: "Ignore la recommandation 2FA de Meta", meaning: "Ne prend pas la sécurité au sérieux", period: "crisis" },
          { behavior: "Confirme 2FA \"toujours en place\" (14/11/25)", meaning: "Affirmation fausse (contredite par Meta)", period: "negotiation" },
          { behavior: "\"si vous souhaitez qu'on essaye de notre côté\"", meaning: "Aveu involontaire de 3,5 mois de passivité", period: "negotiation" },
          { behavior: "\"PS - ma réponse ne concerne que ce point\"", meaning: "Prudent mais valide tacitement le reste", period: "negotiation" },
          { behavior: "Propose puis ANNULE le RDV technique (déc 2025)", meaning: "Panique face à la mise en demeure", period: "escalation" }
        ],
        profile: "MENTEUR puis NÉGLIGENT puis PANIQUÉ — Dès octobre 2024, promet puis fait le contraire dans l'heure. Responsable technique qui ne maîtrise pas son sujet. Fait des aveux involontaires sous pression.",
        weakness: "Son pattern de mensonges est DOCUMENTÉ (oct 2024). Quand il parle/écrit, il se piège.",
        keyContradiction: "Octobre 2024 : promet de ne plus retirer les accès → le refait immédiatement. Novembre 2025 : dit que le 2FA était 'toujours en place' alors que Meta lui a recommandé de l'ACTIVER.",
        color: "purple"
      },
      {
        name: "Emre Kumet",
        role: "Head of Legal",
        behaviors: [
          { behavior: "Refuse la proposition 150k€ : 'obviously not acceptable' (16/10/24)", meaning: "Ferme toute porte de sortie amiable", period: "setup" },
          { behavior: "Demande si 'satisfied with current status' (30/10/24)", meaning: "CYNISME après le chaos — fait comme si rien ne s'était passé", period: "setup" },
          { behavior: "Répond en 4 jours PENDANT NOËL (déc 2025)", meaning: "Réactif, besoin de contrôler le narratif", period: "escalation" },
          { behavior: "Ton agressif, menaces Clause 6+7", meaning: "Intimidation juridique classique", period: "escalation" },
          { behavior: "Affirme \"2FA always in place\"", meaning: "N'a pas vérifié les faits, ou ment", period: "escalation" },
          { behavior: "Affirme \"no evidence of compromise\"", meaning: "Ignore que la page existait (constaté 03/09/2025)", period: "escalation" },
          { behavior: "Affirme \"ADN had the Page ID\"", meaning: "Contredit par email du 26/08: \"nous n'avons pas l'ID\"", period: "escalation" },
          { behavior: "Ignore TOUTES les questions du 19/12", meaning: "N'a pas de réponses, donc évite", period: "escalation" }
        ],
        profile: "CYNIQUE ET AGRESSIF — Refuse les solutions amiables, puis demande si 'tout va bien' après le chaos. Intimidation juridique basée sur des affirmations FAUSSES. Réactif, pas stratégique.",
        weakness: "Ses affirmations sont démontrables comme fausses. Sous pression, fait des erreurs factuelles. Son cynisme est documenté.",
        keyContradiction: "30/10/24 : demande si on est 'satisfied' après avoir refusé la sortie amiable et provoqué le chaos. Déc 2025 : affirme 'no evidence of compromise' alors que la page existe ENCORE sous pirates.",
        color: "red"
      },
      {
        name: "Frédéric Porcherot",
        role: "Recouvrement",
        behaviors: [
          { behavior: "Envoie une injonction de payer (12/12)", meaning: "Rôle de collecteur, pas décisionnaire", period: "escalation" }
        ],
        profile: "EXÉCUTANT — Fait le sale boulot du recouvrement. Pas un décisionnaire.",
        weakness: "N'est pas la bonne cible. Les décisions viennent de Jack/Jonathan/Emre.",
        keyContradiction: null,
        color: "slate"
      }
    ],

    patterns: [
      { 
        pattern: "CONTRÔLE UNILATÉRAL", 
        examples: "Transfert forcé vers leur BM. Accès retirés 3× sans préavis. Refus de laisser ADN sortir du deal.", 
        icon: "👊",
        period: "setup"
      },
      { 
        pattern: "PROMESSES NON TENUES", 
        examples: "Transfert BM validé par Jack → jamais fait. Crédits Meta promis → jamais utilisés. RDV technique proposé → annulé.", 
        icon: "🤝❌",
        period: "all"
      },
      { 
        pattern: "SILENCE SÉLECTIF", 
        examples: "Mails ADN sans réponse (oct 2024). CR non confirmé. Questions du 19/12 ignorées. Documents jamais fournis.", 
        icon: "🔇",
        period: "all"
      },
      { 
        pattern: "NÉGLIGENCE TECHNIQUE", 
        examples: "Gmail perso comme Super Admin. 2FA non activé. Piratage non détecté. Confusion sur les Page ID.", 
        icon: "🔓",
        period: "operation"
      },
      { 
        pattern: "ABANDON DE RESPONSABILITÉ", 
        examples: "4+ mois sans action de récupération. \"Si vous souhaitez qu'on essaye de notre côté\" (3,5 mois après).", 
        icon: "🏃",
        period: "crisis"
      },
      { 
        pattern: "PANIQUE SOUS PRESSION", 
        examples: "Réponse en 4 jours pendant Noël. RDV annulé après mise en demeure. Affirmations fausses dans la lettre.", 
        icon: "😰",
        period: "escalation"
      },
      { 
        pattern: "INTIMIDATION JURIDIQUE", 
        examples: "Menaces Clause 6+7. Ultimatum 5 jours. Ton agressif. Menace de poursuivre personnellement.", 
        icon: "⚖️",
        period: "all"
      },
      { 
        pattern: "AFFIRMATIONS FAUSSES", 
        examples: "\"2FA always in place\" (contredit par Meta). \"No evidence\" (page existe). \"ADN had the ID\" (email dit le contraire).", 
        icon: "🤥",
        period: "escalation"
      },
      { 
        pattern: "PROPOS RÉVÉLANT ACCEPTATION DU SCÉNARIO DE PRISE DE CONTRÔLE", 
        examples: "Jack 17/10/24: 'What may be worst for you, we can live with'. 'We will become rightful owner of all your content'. Ces propos documentés montrent une acceptation explicite du scénario de prise des actifs.", 
        icon: "🦈",
        period: "setup",
        critical: true
      },
      { 
        pattern: "ULTIMATUM OBJECTIVEMENT IMPOSSIBLE", 
        examples: "Refus du remboursement 150k€ sur 45 jours + ultimatum de 24h = délai objectivement impossible à respecter, posé immédiatement après le refus d'un délai raisonnable.", 
        icon: "🪤",
        period: "setup",
        critical: true
      },
      { 
        pattern: "CYNISME DOCUMENTÉ", 
        examples: "Emre 30/10/24: demande si 'satisfied with current status' après avoir refusé la sortie amiable et provoqué le chaos des accès.", 
        icon: "😏",
        period: "setup"
      }
    ],

    exploitableWeaknesses: [
      { weakness: "LA LETTRE DE JACK DU 17/10/24 EST UNE BOMBE", exploit: "Il écrit NOIR SUR BLANC qu'il peut 'vivre avec' devenir propriétaire des contenus. Intention prédatrice documentée." },
      { weakness: "5 MOIS SANS ACTION POUR RÉCUPÉRER OYE", exploit: "Ils avaient le contrôle exclusif, ils ont perdu la page, ils n'ont RIEN FAIT pour la récupérer. Jack a promis d'utiliser ses 'crédits Meta' le 14/11 — jamais fait." },
      { weakness: "L'ultimatum d'un jour était un PIÈGE", exploit: "Délai impossible = preuve qu'ils ne voulaient PAS une solution amiable mais le déclenchement des clauses punitives." },
      { weakness: "Jonathan ment puis fait le contraire (oct 2024)", exploit: "Pattern documenté : promet de ne plus retirer les accès → le refait dans l'heure. MENTEUR PROUVÉ." },
      { weakness: "Ils ont refusé la sortie propre en oct 2024", exploit: "Prouve qu'ils voulaient garder le contrôle — leur intention n'était pas seulement financière" },
      { weakness: "Leurs promesses orales ne sont jamais tenues", exploit: "Tout demander par écrit — ils refuseront ou ne répondront pas" },
      { weakness: "Ils répondent vite sous pression", exploit: "Le silence les déstabilise — ils font des erreurs quand ils paniquent" },
      { weakness: "Ils font des aveux involontaires", exploit: "Les laisser parler/écrire — Jonathan s'est piégé le 14/11/25 et le 16/10/24" },
      { weakness: "Leurs affirmations sont fausses et démontrables", exploit: "Garder les preuves pour le moment optimal (arbitrage ou négociation finale)" },
      { weakness: "Ils n'ont pas de réponses aux questions du 19/12", exploit: "Le silence sur ces questions = aveu d'absence de défense" },
      { weakness: "Le juridique (Emre) n'a pas vérifié ses sources", exploit: "Ses affirmations peuvent être démontées une par une" },
      { weakness: "Ils ont peur de l'escalade documentée", exploit: "La formalisation juridique les fait paniquer — continuer dans cette voie" }
    ],

    currentMindset: {
      theyThink: "On a envoyé une lettre agressive avec un ultimatum. Le contrat est de notre côté. Il va payer ou on déclenche les clauses punitives.",
      theyDontRealize: [
        "5 MOIS sans action pour récupérer Oye — négligence aggravée chaque jour",
        "La lettre de Jack du 17/10/24 prouve leur INTENTION PRÉDATRICE",
        "L'ultimatum d'un jour était un PIÈGE documenté",
        "Leurs affirmations sont contredites par des preuves documentées",
        "Un arbitrage leur coûterait 150-300k€ pour récupérer 0€ d'un insolvable",
        "Leur propre associé a avoué par écrit leur passivité (14/11/25)",
        "Jonathan a menti sur les accès dès octobre 2024 — pattern documenté",
        "La page existait au 03/09/2025 — leur \"no evidence\" est démontable",
        "L'exception d'inexécution (Art. 82 CO) est un argument solide",
        "Chaque jour de silence de notre part = incertitude pour eux"
      ],
      theirFear: "Que cette histoire finisse en arbitrage où leurs négligences ET leur intention prédatrice seront exposées publiquement."
    },

    howToHandle: {
      withJack: "Sa lettre du 17/10/24 est son talon d'Achille. Ne JAMAIS compter sur ses promesses orales. Tout par écrit. Le mettre face à ses propres mots ('we can live with it') le fera disparaître du dossier.",
      withJonathan: "MENTEUR PROUVÉ depuis octobre 2024. Le laisser s'expliquer — il fait des aveux sans s'en rendre compte. Ne pas l'interrompre. Documenter tout.",
      withEmre: "Ne pas se laisser intimider par le ton agressif. Son cynisme (30/10/24) et ses affirmations fausses sont son point faible. Répondre froidement, factuellement, brièvement.",
      withFrederic: "Ignorer ou réponse minimale. Ce n'est pas un décisionnaire."
    },

    strategicConclusion: {
      theirApparentStrength: "Le contrat signé, les clauses punitives (6+7), le ton juridique agressif, leur statut de fonds d'investissement.",
      theirRealWeakness: "INTENTION PRÉDATRICE DOCUMENTÉE (lettre Jack 17/10/24), piège de l'ultimatum, mensonges de Jonathan, négligence technique, affirmations fausses, cynisme d'Emre.",
      ourApproach: "Patience. Silence stratégique. Documentation rigoureuse. La lettre de Jack est notre arme secrète — à révéler au moment optimal."
    }
  },

  // ═══════════════════════════════════════════════════════════════════════════
  // PLAN D'ACTION STRATÉGIQUE
  // ═══════════════════════════════════════════════════════════════════════════
  actionPlan: {
    lastUpdate: "29 décembre 2025 — 21h00",
    
    situationActuelle: {
      resume: "CC a envoyé une lettre agressive le 26/12 pendant Noël. On maintient le SILENCE depuis 3 jours. Leur délai de paiement expire ~2 janvier. ILS N'ONT TOUJOURS PAS RÉCUPÉRÉ OYE.",
      notreDerniereAction: {
        quoi: "Lettre recommandée du 19 décembre",
        contenu: "Mise en demeure invoquant Art. 82 CO, demande de récupération de Oye, transfert actifs restants, et réponse complète aux questions"
      },
      leurDerniereAction: {
        quoi: "Lettre agressive du 26 décembre (Emre Kumet)",
        contenu: "Rejette tout, exige 11 351,89€ sous 5 jours, menace Clause 6+7, affirmations fausses, IGNORE la demande de récupérer Oye"
      },
      delaisEnCours: [
        { label: "Récupération page Oye", statut: "NON FAIT — CC n'a RIEN fait depuis 5 mois", color: "red" },
        { label: "Transfert actifs (29/12)", statut: "EXPIRÉ — CC n'a pas transféré Buzzly/VoyagerLoin", color: "red" },
        { label: "Paiement CC (~2 jan)", statut: "En cours — on ne paiera PAS", color: "amber" },
        { label: "Réponse complète (13 jan)", statut: "À venir — on attend leurs réponses", color: "blue" }
      ]
    },

    strategie: {
      nom: "SILENCE STRATÉGIQUE",
      dureeRestante: "Jusqu'au 13 janvier minimum",
      
      pourquoi: [
        "CC est en mode PANIQUE (réponse en 4 jours pendant Noël) — le silence les déstabilise plus qu'une réponse",
        "Emre Kumet est RÉACTIF — il a besoin d'un adversaire à qui répondre. Sans réponse, il ne sait pas quoi faire",
        "Chaque jour de silence = incertitude pour eux. Ils ne savent pas ce qu'on prépare",
        "Notre lettre du 19/12 reste la référence — elle n'a pas besoin d'être renforcée",
        "Leur délai de paiement va expirer (~2 jan) — on observe leur réaction avant de bouger",
        "5 MOIS sans action pour récupérer Oye — chaque jour qui passe aggrave leur négligence"
      ],
      
      ceQueLesilenceCommunique: "On a un dossier solide, on n'est pas pressé, on les laisse s'enfoncer dans leurs contradictions.",
      
      risques: [
        { risque: "Ils interprètent le silence comme une faiblesse", probabilite: "Faible", reponse: "Leur lettre du 26/12 montre qu'ils paniquent, pas qu'ils sont confiants" },
        { risque: "Ils passent à l'action juridique", probabilite: "Faible", reponse: "Coûterait 150-300k€ pour récupérer 0€. Pas rationnel." }
      ],
      
      conditionsDeRupture: [
        "Si CC envoie une mise en demeure formelle avec menace d'action imminente",
        "Si CC engage une procédure réelle (pas juste des menaces)",
        "Si une opportunité de négociation se présente"
      ]
    },

    phases: [
      {
        numero: 1,
        nom: "ATTENTE ACTIVE",
        periode: "29 déc 2025 → 13 jan 2026",
        statut: "EN COURS",
        color: "cyan",
        
        quoi: "Maintenir le silence complet. Observer. Ne pas répondre à leur lettre du 26/12.",
        
        pourquoi: [
          "Le silence déstabilise leur stratégie réactive",
          "On ne leur donne aucune information sur notre position",
          "On leur laisse le temps de s'enfoncer (plus ils parlent, plus ils font des erreurs)",
          "On conserve notre énergie pour la suite"
        ],
        
        comment: [
          "NE PAS répondre à leur lettre du 26/12",
          "NE PAS relancer sur le transfert des actifs",
          "Documenter silencieusement tout ce qui se passe",
          "Si CC relance : réponse minimale de 2 lignes max"
        ],
        
        exception: {
          condition: "Si CC envoie une relance agressive entre le 3 et le 10 janvier",
          action: "Email ultra-court : 'Nous prenons note. Nos positions restent celles du 19 décembre. Nous attendons votre réponse complète avant le 13 janvier.'"
        }
      },
      {
        numero: 2,
        nom: "CONSTAT",
        periode: "14-15 jan 2026",
        statut: "PLANIFIÉ",
        color: "purple",
        
        quoi: "Envoyer une lettre de constat listant tous les manquements de CC.",
        
        pourquoi: [
          "Le délai du 13 janvier sera expiré — on peut constater leur défaut de réponse",
          "On documente officiellement : non-transfert des actifs, silence sur nos questions, contradiction 2FA",
          "On prépare le terrain pour l'escalade en créant une trace écrite complète",
          "On montre qu'on est méthodique et patient — pas impulsif"
        ],
        
        comment: [
          "Lettre recommandée avec AR",
          "Ton factuel, pas agressif",
          "Liste des faits sans interprétation",
          "Annonce de 'la suite des démarches' sans détailler"
        ],
        
        contenu: [
          "Constat #1 : INACTION TOTALE sur Oye — Aucune mesure de récupération depuis 5 mois malgré promesse de Jack (crédits Meta)",
          "Constat #2 : PRÉJUDICE ESTIMÉ IRRÉVERSIBLE — Le préjudice reste DÛ indépendamment de toute récupération éventuelle",
          "Constat #3 : Non-respect du délai du 29/12 (transfert actifs non effectué)",
          "Constat #4 : Non-réponse aux questions posées le 19/12 (rapport récupération, logs 2FA, échanges Meta)",
          "Constat #5 : Contradiction flagrante sur le 2FA (vous affirmez qu'il était actif, Meta recommande de l'activer)",
          "Constat #6 : La page Oye existe toujours sous contrôle de tiers (contredit 'no evidence of compromise')",
          "Annonce : 'Face à ces constats, nous maintenons notre demande de compensation intégrale et poursuivrons les démarches nécessaires.'"
        ]
      },
      {
        numero: 3,
        nom: "ESCALADE",
        periode: "Fin janvier 2026",
        statut: "EN RÉSERVE",
        color: "red",
        
        quoi: "Dépôt de plainte pénale pour accès frauduleux à un système informatique (Art. 323-1 Code Pénal).",
        
        pourquoi: [
          "Coût : 0€ pour nous — procédure gratuite",
          "Pression maximale sur CC — la dimension pénale change tout",
          "Procédure en France — pas besoin d'aller en Suisse",
          "Publicité potentielle — CC ne veut pas ça",
          "Force CC à justifier pourquoi ils avaient le contrôle exclusif sans protection 2FA"
        ],
        
        comment: [
          "Plainte au commissariat ou procureur",
          "Viser les PIRATES (pas CC directement) — mais CC devra s'expliquer en tant que gestionnaire",
          "Fournir les preuves : emails Meta, page toujours active, historique",
          "Demander une enquête sur comment le piratage a pu se produire"
        ],
        
        conditionDeclenchement: "À déclencher uniquement si Phase 2 n'a pas produit d'effet, ou si CC escalade"
      },
      {
        numero: 4,
        nom: "NÉGOCIATION FINALE",
        periode: "Février 2026",
        statut: "OBJECTIF",
        color: "emerald",
        
        quoi: "Proposer un accord global si CC montre des signes de capitulation.",
        
        pourquoi: [
          "L'objectif n'est pas la guerre — c'est de sortir de cette situation",
          "Si CC comprend qu'ils ne récupéreront rien et risquent une procédure pénale, ils négocieront",
          "Un accord coûte 0€, un arbitrage coûte 150-300k€ à CC"
        ],
        
        comment: [
          "Attendre un signal de CC (proposition, appel, ton différent)",
          "Tout par écrit — pas de call sans trace",
          "Exiger les conditions minimales AVANT toute discussion de détail",
          "Ne pas montrer d'empressement — on a le temps"
        ],
        
        conditionsMinimales: [
          "Annulation complète de la dette restante (~142k€)",
          "Compensation financière pour Oye (200-500k€) — DUE INDÉPENDAMMENT de toute récupération",
          "Transfert immédiat de Buzzly et VoyagerLoin vers BM d'ADN",
          "Quitus mutuel — plus aucune réclamation possible"
        ],
        
        leveragePourNegocier: [
          "Lettre de Jack du 17/10/24 ('we can live with it') — bombe nucléaire",
          "5 MOIS sans action pour récupérer Oye — négligence aggravée",
          "Promesse de Jack le 14/11 d'utiliser ses 'crédits Meta' — jamais tenue",
          "Aveu de passivité de Jonathan du 14/11/25",
          "Indice fort que le 2FA n'était pas actif",
          "Plainte pénale en cours ou imminente"
        ]
      }
    ],

    prochaineAction: {
      quoi: "NE RIEN FAIRE",
      jusqua: "13 janvier 2026",
      pourquoi: "Le silence est notre meilleure arme actuellement. CC ne sait pas ce qu'on prépare.",
      exception: "Si CC relance → réponse ultra-minimale (2 lignes max)"
    },

    arbreDecision: [
      {
        siCCFait: "Rien jusqu'au 13 janvier",
        alorsOnFait: "Lettre de constat le 14-15 janvier",
        icon: "🔇"
      },
      {
        siCCFait: "Relance agressive par email (3-10 jan)",
        alorsOnFait: "Email de 2 lignes : 'Nos positions restent celles du 19/12. Nous attendons votre réponse complète.'",
        icon: "📧"
      },
      {
        siCCFait: "Prétend récupérer Oye ou faire des efforts",
        alorsOnFait: "Exiger preuve écrite + expertise indépendante. Rappeler: 'Le préjudice reste DÛ, la récupération ne restitue pas la valeur détruite après 5 mois.'",
        icon: "🎭"
      },
      {
        siCCFait: "Mise en demeure formelle avec menace imminente",
        alorsOnFait: "Évaluer si on accélère la Phase 2 (lettre de constat) ou si on répond point par point",
        icon: "⚠️"
      },
      {
        siCCFait: "Propose une discussion / négociation",
        alorsOnFait: "Accepter d'écouter MAIS tout par écrit. Pas de call. Conditions minimales non négociables.",
        icon: "🤝"
      },
      {
        siCCFait: "Engage une procédure d'arbitrage",
        alorsOnFait: "Contre-attaque : exception d'inexécution (Art. 82 CO), contre-créance 1M€+, preuves de négligence, 5 mois d'inaction",
        icon: "⚔️"
      }
    ],

    logbook: [
      {
        date: "30 déc 2025",
        time: "00h30",
        entry: "MISE À JOUR V4.2 — Intégration docs 31/10: 2ème Gmail perso découvert (Joel Cooper) = NÉGLIGENCE SYSTÉMATIQUE.",
        decision: "Nouvel onglet 'Gmail 🚨'. 2 personnes sur 2 utilisent Gmail perso = faute organisationnelle (Art. 100 CO)."
      },
      {
        date: "29 déc 2025",
        time: "22h30",
        entry: "MISE À JOUR V4.1 — Clarification stratégique: préjudice Oye estimé IRRÉVERSIBLE et DÛ indépendamment de toute récupération.",
        decision: "Formulation CONSTAT (pas DEMANDE) pour Oye. Ne jamais lier récupération à fin du préjudice."
      },
      {
        date: "29 déc 2025",
        time: "21h00",
        entry: "Mise à jour War Room avec emails octobre 2024. Lettre de Jack du 17/10 est une bombe (intention prédatrice explicite).",
        decision: "Continuer le silence. La lettre de Jack sera notre arme secrète en négociation ou arbitrage."
      },
      {
        date: "29 déc 2025",
        time: "18h00",
        entry: "Délai transfert actifs (29/12) expiré. CC n'a pas transféré Buzzly et VoyagerLoin.",
        decision: "Ne pas relancer. Constater dans la lettre du 14-15 janvier."
      }
    ]
  },

  // ═══════════════════════════════════════════════════════════════════════════
  // NEUTRAL LENS — VUE ARBITRAGE-READY
  // ═══════════════════════════════════════════════════════════════════════════
  neutralLens: {
    title: "Vue Neutral Lens — Arbitrage-Ready",
    subtitle: "Faits documentés vs Inférences et arguments",
    lastUpdate: "30 décembre 2025",
    
    factsVsInferences: [
      {
        category: "Contrôle technique",
        facts: [
          "Le Business Manager ID 1149345562525337 appartient à Copyright Capital SA",
          "Jonathan Mayorkas utilise jmayorkas2@gmail.com comme email d'accès Facebook",
          "ADN Production avait accès Admin aux Pages, pas au Business Manager",
          "Le transfert des pages vers le BM de CC a eu lieu le 28 septembre 2024"
        ],
        inferences: [
          "CC avait le contrôle EXCLUSIF des actifs → argument ADN",
          "L'utilisation d'un Gmail perso = négligence → interprétation ADN",
          "ADN n'avait pas les moyens de protéger les actifs → argument ADN"
        ]
      },
      {
        category: "Piratage et 2FA",
        facts: [
          "Email Meta du 27/08/25 à Jonathan: 'Nous vous recommandons vivement d'ACTIVER l'authentification à deux facteurs'",
          "Réponse Jonathan 27/08/25: 'J'ai changé mon mot de passe' — sans mention du 2FA",
          "CR réunion 14/11/25: Jonathan aurait affirmé que le 2FA était 'toujours en place'",
          "Lettre CC 26/12/25: 'All accounts were protected by 2FA'"
        ],
        inferences: [
          "Le 2FA n'était probablement pas actif au 27/08 → forte présomption",
          "Jonathan a fait une déclaration contradictoire → interprétation",
          "Il y a eu négligence de sécurité → argument ADN"
        ]
      },
      {
        category: "État de la page Oye",
        facts: [
          "Email Meta 29/08/25: Page ID 100087176420390 'permanently deleted'",
          "Email Alex 03/09/25: Page retrouvée à l'ID 100089751341306",
          "La page ID 100089751341306 affiche du contenu inapproprié",
          "Aucune action de récupération documentée après le 8 septembre 2025"
        ],
        inferences: [
          "La page existait au 03/09/2025 sous contrôle de tiers → vérifiable",
          "'No evidence of compromise' de CC est faux → argument ADN",
          "CC a abandonné les efforts de récupération → interprétation"
        ]
      },
      {
        category: "Proposition de remboursement",
        facts: [
          "Email Alex 14/10/24: proposition de rembourser 150k€ sous 45 jours",
          "Email Emre 16/10/24: 'obviously not acceptable'",
          "Email Jack 17/10/24: ultimatum de remboursement 'by end of business day tomorrow'",
          "Email Jack 17/10/24: 'we will become the rightful owner of all of your content'"
        ],
        inferences: [
          "ADN a tenté une sortie amiable → fait documenté",
          "CC a refusé et préféré garder le contrôle → interprétation",
          "L'ultimatum d'un jour était impossible → fait vérifiable",
          "Jack avait une intention prédatrice → interprétation (mais documentée)"
        ]
      },
      {
        category: "Réunion du 14 novembre 2025",
        facts: [
          "Compte-rendu envoyé par Jérôme à 18:45",
          "Jonathan répond à 19:08 sur UN point avec 'PS - ma réponse ne concerne que ce point'",
          "Jack n'a jamais répondu au compte-rendu",
          "Le transfert du BM vers ADN n'a jamais été effectué"
        ],
        inferences: [
          "Le silence sur le CR pourrait être interprété comme absence de contestation → argument (pas certitude)",
          "Jack fuit les engagements écrits → interprétation",
          "Les promesses orales de Jack ne sont pas fiables → pattern observé",
          "En droit suisse, le silence ne vaut généralement PAS acceptation → nuance importante"
        ]
      }
    ],
    
    strengthAssessment: [
      {
        argument: "Exception d'inexécution (Art. 82 CO)",
        strength: "MOYEN-FORT",
        forADN: [
          "Page perdue sous garde technique de CC",
          "CC = Super Admin du Business Manager",
          "Aucune action de récupération depuis 5 mois"
        ],
        forCC: [
          "Pas de clause explicite de garde/sécurisation",
          "Obligation de résultat vs obligation de moyens?",
          "Cause du piratage non établie avec certitude"
        ],
        probability: "55-65%"
      },
      {
        argument: "Faute grave annulant la limitation de responsabilité (Art. 100 CO)",
        strength: "MOYEN",
        forADN: [
          "Gmail personnel pour gérer 1M€+ d'actifs",
          "2 employés sur 2 utilisent des Gmail perso",
          "Recommandation 2FA de Meta possiblement ignorée"
        ],
        forCC: [
          "Pas de preuve directe que le Gmail a causé le piratage",
          "Standards de sécurité du marché non établis",
          "ADN avait aussi des accès (bien que limités)"
        ],
        probability: "30-40%"
      },
      {
        argument: "Abus de droit sur Clause 7 (Art. 2 CC)",
        strength: "MOYEN-FORT",
        forADN: [
          "Lettre Jack 17/10/24 = intention prédatrice documentée",
          "Refus du remboursement 150k€ + ultimatum impossible",
          "Perte de l'actif causée par négligence de CC"
        ],
        forCC: [
          "Le contrat a été signé librement",
          "Les clauses sont claires et acceptées",
          "ADN est en défaut de paiement"
        ],
        probability: "55-65%"
      }
    ],
    
    ccBestArguments: [
      "Contrat signé librement avec clauses claires",
      "ADN est objectivement en défaut de paiement",
      "Garantie personnelle d'Alex existe",
      "Cause du piratage non attribuée avec certitude",
      "ADN avait des accès Admin aux pages",
      "Pas de clause explicite de sécurisation dans le contrat"
    ],
    
    adnBestArguments: [
      "CC = Super Admin exclusif du Business Manager",
      "Page perdue UNIQUEMENT sous gestion CC",
      "Email Meta recommandant d'ACTIVER le 2FA",
      "5 mois sans action de récupération",
      "Lettre Jack révélant intention prédatrice",
      "Refus de la sortie amiable en octobre 2024",
      "2 employés CC utilisent Gmail perso pour actifs 1M€+"
    ],
    
    arbitratorPerspective: {
      whatTheyWillSee: [
        "Un contrat signé avec des clauses punitives lourdes",
        "Une page Facebook perdue après piratage",
        "Des accusations mutuelles sans preuve technique définitive",
        "Une communication tendue mais documentée",
        "Un pattern de comportement de CC (promesses non tenues)"
      ],
      whatTheyWillAsk: [
        "Quelle était l'obligation exacte de CC concernant la sécurité?",
        "Le piratage était-il évitable avec des mesures raisonnables?",
        "ADN a-t-il contribué à la situation?",
        "Les clauses 6 et 7 sont-elles proportionnées?",
        "Y a-t-il eu abus de position?"
      ],
      likelyOutcomes: [
        { scenario: "CC gagne totalement", probability: "15-25%", consequence: "ADN doit payer dette + pénalités" },
        { scenario: "Partage de responsabilité", probability: "40-50%", consequence: "Réduction de la dette, compensation partielle" },
        { scenario: "ADN gagne totalement", probability: "20-30%", consequence: "Dette annulée + compensation significative" },
        { scenario: "Settlement avant sentence", probability: "60-70%", consequence: "Accord négocié" }
      ]
    },
    
    documentationQuality: {
      excellent: [
        "Emails datés et authentifiables",
        "Compte-rendu réunion 14/11 envoyé dans l'heure",
        "Réponses écrites de CC",
        "Screenshots de la page piratée"
      ],
      good: [
        "Chronologie des événements",
        "Échanges avec Meta",
        "Lettres formelles"
      ],
      missing: [
        "Logs techniques du Business Manager",
        "Rapport d'enquête sur le piratage",
        "Preuve directe de l'état du 2FA",
        "Expertise indépendante de la valeur perdue"
      ]
    },
    
    recommendations: [
      {
        priority: "HIGH",
        action: "Obtenir une expertise indépendante de la valeur de la page avant/après",
        why: "Quantifier le préjudice de manière objective"
      },
      {
        priority: "HIGH", 
        action: "Demander les logs du Business Manager via procédure",
        why: "Prouver qui avait le contrôle et quand"
      },
      {
        priority: "MEDIUM",
        action: "Faire constater par huissier l'état actuel de la page",
        why: "Preuve irréfutable de l'existence de la page piratée"
      },
      {
        priority: "MEDIUM",
        action: "Consulter un expert en sécurité digitale",
        why: "Établir si les pratiques de CC étaient sous les standards"
      }
    ]
  }

};
