export const prochainActionData = {
  action: "ATTENDRE — Observer la réaction de CC",
  date: "31 janvier 2026",
  pourquoi: "La lettre offensive du 16 janvier a été envoyée. Le délai de 15 jours pour documents et transfert expire le ~31 janvier. On observe.",
  exception: "Si CC propose une négociation sérieuse → évaluer. Tout par écrit."
};

export const ouEnEstOnData = {
  resume: "LETTRE OFFENSIVE ENVOYÉE LE 16 JANVIER 2026. Mise en demeure formelle avec contre-créance notifiée (+1,2M€). Délais fixés : 15 jours pour documents/transfert, 30 jours pour position sur réparation. CC doit maintenant répondre ou subir les conséquences annoncées.",
  notreAction: {
    quoi: "Lettre offensive du 16 janvier 2026",
    contenu: "Mise en demeure complète : constat des manquements, transfert 28 sept 2024 illégal, négligence (2FA, Gmail perso), contre-créance +1,2M€, délais 15j/30j, conséquences annoncées (communication publique, plainte pénale, arbitrage)"
  },
  leurAction: {
    quoi: "Email Martin Febvre du 12 janvier 2026",
    contenu: "CC IGNORE notre lettre du 19/12 et l'Art. 82 CO. Demande paiement de 6 000€ (minimum garanti) + relevés bancaires. Continue comme si de rien n'était."
  },
  delais: [
    {
      titre: "Délai 15 jours (~31 jan)",
      statut: "Documents + Transfert Buzzly/VoyagerLoin",
      type: "amber" as const
    },
    {
      titre: "Délai 30 jours (~15 fév)",
      statut: "Position formelle sur réparation préjudice",
      type: "blue" as const
    },
    {
      titre: "Si silence ou refus CC",
      statut: "Communication publique + Plainte pénale + Arbitrage",
      type: "red" as const
    }
  ]
};

export const strategieData = {
  nom: "EXÉCUTION — Faire ce qu'on a annoncé",
  periode: "16 janvier → 15 février 2026",
  pourquoiSilence: [
    "La lettre du 16 janvier est notre position officielle — elle n'a pas besoin de renforts",
    "CC sait maintenant exactement ce qu'on attend et les conséquences",
    "Le silence montre qu'on est sérieux — pas besoin de relancer",
    "Chaque jour qui passe sans réponse de CC = preuve supplémentaire de leur mauvaise foi",
    "Si CC veut négocier, c'est à EUX de venir vers nous maintenant"
  ],
  message: "On a dit ce qu'on allait faire. Maintenant on le fait. Pas de bluff.",
  risques: [
    {
      risque: "CC ne répond pas du tout",
      probabilite: "40%",
      reponse: "Parfait. On exécute exactement ce qu'on a annoncé : communication publique, plainte pénale, arbitrage."
    },
    {
      risque: "CC contre-attaque agressivement",
      probabilite: "45%",
      reponse: "Attendu. On reste calme, on documente, on maintient nos positions."
    },
    {
      risque: "CC propose une négociation",
      probabilite: "15%",
      reponse: "Écouter MAIS tout par écrit. Conditions minimales non négociables."
    }
  ],
  changementSi: [
    "CC fait une proposition sérieuse (par écrit) avec engagement sur nos conditions minimales",
    "Nouveau développement majeur qui change la donne",
    "Conseil juridique spécifique recommandant une autre approche"
  ]
};

export const phases = [
  {
    numero: 1,
    nom: "PÉRIODE D'OBSERVATION",
    periode: "16 jan → 31 jan 2026",
    statut: "EN COURS" as const,
    couleur: "cyan" as const,
    quoi: "Observer la réaction de CC à notre lettre offensive. Ne pas relancer.",
    pourquoi: [
      "La lettre du 16 janvier est complète — elle n'a pas besoin de renforts",
      "CC a reçu un ultimatum clair avec délais et conséquences",
      "Le silence de notre part = confiance et détermination",
      "On leur laisse le temps de réaliser la gravité de la situation"
    ],
    comment: [
      "NE PAS relancer CC",
      "NE PAS répondre aux provocations éventuelles",
      "Documenter tout ce qui se passe",
      "Préparer les actions suivantes (communication, plainte)"
    ],
    exception: {
      si: "CC propose une négociation sérieuse par écrit",
      alors: "Évaluer. Exiger d'abord le transfert de Buzzly/VoyagerLoin comme preuve de bonne foi."
    }
  },
  {
    numero: 2,
    nom: "PREMIER DÉLAI — DOCUMENTS",
    periode: "~31 janvier 2026",
    statut: "PLANIFIÉ" as const,
    couleur: "purple" as const,
    quoi: "Constater si CC a fourni les documents et transféré les actifs.",
    pourquoi: [
      "Délai de 15 jours fixé dans la lettre du 16 janvier",
      "CC devait fournir : rapport récupération Oye, logs 2FA, échanges Meta",
      "CC devait transférer : Buzzly et VoyagerLoin",
      "L'absence de réponse = refus tacite = on passe à l'exécution"
    ],
    comment: [
      "Vérifier si documents reçus",
      "Vérifier si transfert effectué dans Business Manager",
      "Si rien : constater le défaut par écrit",
      "Préparer la communication publique"
    ],
    contenu: [
      "Email de constat si pas de réponse : 'Nous constatons l'absence de réponse à notre délai du 31 janvier.'",
      "Rappel des conséquences annoncées",
      "Annonce de la mise en œuvre imminente"
    ]
  },
  {
    numero: 3,
    nom: "EXÉCUTION — COMMUNICATION PUBLIQUE",
    periode: "Début février 2026",
    statut: "EN RÉSERVE" as const,
    couleur: "red" as const,
    quoi: "Communication publique sur l'affaire (obligation morale envers 1,2M d'abonnés).",
    pourquoi: [
      "Annoncé dans la lettre du 16 janvier — on fait ce qu'on a dit",
      "1,2 million de personnes méritent de savoir ce qui est arrivé à Oye",
      "Pression publique maximale sur CC",
      "Crédibilité : si on ne le fait pas, on perd tout pouvoir de négociation futur"
    ],
    comment: [
      "Post sur les réseaux restants (Instagram, YouTube si applicable)",
      "Ton factuel : expliquer ce qui s'est passé sans diffamation",
      "Documenter les faits : piratage, inaction de CC, contre-créance",
      "Inviter la communauté à comprendre pourquoi Oye a disparu"
    ],
    condition: "À déclencher si CC n'a pas répondu sérieusement au délai du 31 janvier"
  },
  {
    numero: 4,
    nom: "EXÉCUTION — PLAINTE PÉNALE",
    periode: "Février 2026",
    statut: "EN RÉSERVE" as const,
    couleur: "red" as const,
    quoi: "Dépôt de plainte pénale en France pour accès frauduleux (Art. 323-1 CP) et abus de confiance (Art. 314-1 CP).",
    pourquoi: [
      "Annoncé dans la lettre du 16 janvier — on fait ce qu'on a dit",
      "Coût : 0€ pour nous — procédure gratuite",
      "Dimension pénale = pression maximale sur CC",
      "Permet une enquête officielle sur les circonstances du piratage"
    ],
    comment: [
      "Plainte au commissariat ou directement au procureur",
      "Fournir tous les éléments : emails, chronologie, preuves 2FA",
      "Art. 323-1 CP : accès frauduleux au système",
      "Art. 314-1 CP : abus de confiance (transfert du 28 sept sans accord)"
    ],
    condition: "À déclencher en parallèle ou après la communication publique"
  },
  {
    numero: 5,
    nom: "SECOND DÉLAI — RÉPARATION",
    periode: "~15 février 2026",
    statut: "PLANIFIÉ" as const,
    couleur: "purple" as const,
    quoi: "Constater la position de CC sur la réparation du préjudice.",
    pourquoi: [
      "Délai de 30 jours fixé dans la lettre du 16 janvier",
      "CC devait prendre position sur notre contre-créance (+1,2M€)",
      "L'absence de position = refus de négocier = arbitrage"
    ],
    comment: [
      "Vérifier si CC a pris position par écrit",
      "Si proposition insuffisante : refuser et maintenir nos demandes",
      "Si rien : constater et préparer la procédure arbitrale",
      "Contacter un avocat suisse pour lancer l'arbitrage"
    ],
    contenu: [
      "Évaluation de toute proposition de CC",
      "Comparaison avec nos conditions minimales",
      "Décision : accepter, contre-proposer, ou arbitrage"
    ]
  },
  {
    numero: 6,
    nom: "ARBITRAGE",
    periode: "Mars 2026+",
    statut: "OBJECTIF" as const,
    couleur: "emerald" as const,
    quoi: "Si nécessaire : procédure arbitrale en Suisse selon les clauses du contrat.",
    pourquoi: [
      "Dernier recours si CC refuse toute négociation raisonnable",
      "Notre contre-créance (+1,2M€) dépasse largement leur créance (142k€)",
      "Arbitrage coûterait 150-300k€ à CC — ils n'ont pas intérêt",
      "Notre dossier est solide : Art. 82 CO, négligence, transfert illégal"
    ],
    comment: [
      "Engager un avocat suisse spécialisé",
      "Préparer le dossier complet",
      "Invoquer l'exception d'inexécution (Art. 82 CO)",
      "Demander compensation intégrale + dommages"
    ],
    conditionsMin: [
      "Annulation complète de la dette restante (~142k€)",
      "Compensation pour préjudice Oye (800k€ - 1,3M€)",
      "Transfert de tous les actifs restants",
      "Quitus mutuel"
    ],
    leviers: [
      "Email 25 sept 2024 : CC ne demandait que 'super admin' pour paiements",
      "Transfert illégal du 28 sept 2024 : dépassement du mandat",
      "5+ mois d'inaction documentée sur récupération Oye",
      "Contradiction 2FA : Meta recommande d'activer ce que CC dit 'toujours actif'",
      "Double Gmail perso : négligence organisationnelle",
      "Synthèse des 9 experts : verdict unanime contre CC"
    ]
  }
];

export const arbreDecision = [
  {
    emoji: "🔇",
    si: "Silence total de CC jusqu'au 31 janvier",
    alors: "Email de constat du défaut → Communication publique → Plainte pénale"
  },
  {
    emoji: "📧",
    si: "CC répond de manière agressive / rejette tout",
    alors: "Pas de réponse. On exécute comme prévu. Leur agressivité renforce notre position."
  },
  {
    emoji: "💰",
    si: "CC propose de négocier (même partiellement)",
    alors: "Écouter MAIS exiger d'abord le transfert de Buzzly/VoyagerLoin comme preuve de bonne foi. Tout par écrit."
  },
  {
    emoji: "📄",
    si: "CC fournit les documents demandés",
    alors: "Analyser. Vérifier la cohérence. Maintenir la demande de réparation pour le préjudice."
  },
  {
    emoji: "⚔️",
    si: "CC engage une procédure d'arbitrage en premier",
    alors: "Contre-créance de +1,2M€. Exception d'inexécution (Art. 82 CO). Dossier complet avec tous nos leviers."
  },
  {
    emoji: "🤝",
    si: "CC accepte nos conditions minimales",
    alors: "Accord écrit. Vérifier exécution. Quitus mutuel APRÈS réception des fonds et actifs."
  }
];

export const journalBord = [
  {
    date: "16 jan 2026",
    heure: "10h00",
    evenement: "LETTRE OFFENSIVE ENVOYÉE — Mise en demeure complète avec contre-créance +1,2M€, délais 15j/30j, conséquences annoncées.",
    decision: "Phase d'observation. Ne rien faire jusqu'au 31 janvier sauf si CC propose une négociation sérieuse."
  },
  {
    date: "15 jan 2026",
    heure: "23h00",
    evenement: "Finalisation lettre avec synthèse des 9 experts. Ajout Art. 314-1 CP (abus de confiance) et concept de 'double appropriation'.",
    decision: "Lettre prête. Envoi demain matin."
  },
  {
    date: "12 jan 2026",
    heure: "16h40",
    evenement: "Email Martin Febvre (CC) — Demande paiement 6 000€ + relevés. CC IGNORE notre lettre du 19/12 et l'Art. 82 CO.",
    decision: "Ne pas répondre. Preuve supplémentaire de leur mauvaise foi. Inclure dans la lettre offensive."
  },
  {
    date: "13 jan 2026",
    heure: "00h00",
    evenement: "Délai de réponse complète de CC EXPIRÉ. Aucun document fourni, aucune réponse aux questions.",
    decision: "Constater le défaut dans la lettre offensive du 16 janvier."
  },
  {
    date: "2 jan 2026",
    heure: "01h00",
    evenement: "Mise à jour War Room v4.3 — Documentation complète. Pattern confirmé : CC refuse systématiquement toute solution collaborative.",
    decision: "Continuer la préparation de la lettre offensive."
  }
];
