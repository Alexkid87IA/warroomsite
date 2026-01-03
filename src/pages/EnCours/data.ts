export const prochainActionData = {
  action: "NE RIEN FAIRE",
  date: "13 janvier 2026",
  pourquoi: "Le silence est notre meilleure arme actuellement. CC ne sait pas ce qu'on prépare.",
  exception: "Si CC relance → réponse ultra-minimale (2 lignes max)"
};

export const ouEnEstOnData = {
  resume: "CC a envoyé une lettre agressive le 26/12 pendant Noël. On maintient le SILENCE depuis 3 jours. Leur délai de paiement expire ~2 janvier. ILS N'ONT TOUJOURS PAS ENTREPRIS D'ACTION DOCUMENTÉE POUR RÉCUPÉRER OYE.",
  notreAction: {
    quoi: "Lettre recommandée du 19 décembre",
    contenu: "Mise en demeure invoquant Art. 82 CO, demande concernant Oye, transfert actifs restants, et réponse complète aux questions"
  },
  leurAction: {
    quoi: "Lettre agressive du 26 décembre (Emre Kumet)",
    contenu: "Rejette tout, exige 11 351,89€ sous 5 jours, menace Clause 6+7, affirmations contredites par nos documents, NE RÉPOND PAS à notre demande concernant Oye"
  },
  delais: [
    {
      titre: "Récupération page Oye",
      statut: "NON FAIT — CC n'a entrepris aucune action documentée depuis 5 mois",
      type: "red" as const
    },
    {
      titre: "Transfert actifs (29/12)",
      statut: "EXPIRÉ — CC n'a pas transféré Buzzly/VoyagerLoin",
      type: "red" as const
    },
    {
      titre: "Paiement CC (~2 jan)",
      statut: "En cours — on ne paiera PAS",
      type: "amber" as const
    },
    {
      titre: "Réponse complète (13 jan)",
      statut: "À venir — on attend leurs réponses",
      type: "blue" as const
    }
  ]
};

export const strategieData = {
  nom: "SILENCE STRATÉGIQUE",
  periode: "Jusqu'au 13 janvier minimum",
  pourquoiSilence: [
    "CC est en mode réactif (réponse en 4 jours pendant Noël) — le silence les déstabilise plus qu'une réponse",
    "Emre Kumet est RÉACTIF — il a besoin d'un adversaire à qui répondre. Sans réponse, il ne sait pas quoi faire",
    "Chaque jour de silence = incertitude pour eux. Ils ne savent pas ce qu'on prépare",
    "Notre lettre du 19/12 reste la référence — elle n'a pas besoin d'être renforcée",
    "Leur délai de paiement va expirer (~2 jan) — on observe leur réaction avant de bouger",
    "5 MOIS sans action documentée pour récupérer Oye — chaque jour qui passe documente leur inaction"
  ],
  message: "On a un dossier solide, on n'est pas pressé, on les laisse s'enfoncer dans leurs contradictions.",
  risques: [
    {
      risque: "Ils interprètent le silence comme une faiblesse",
      probabilite: "Faible",
      reponse: "Leur lettre du 26/12 montre qu'ils sont réactifs, pas confiants"
    },
    {
      risque: "Ils passent à l'action juridique",
      probabilite: "Faible",
      reponse: "Coûterait 150-300k€ pour potentiellement récupérer 0€. Pas rationnel."
    }
  ],
  changementSi: [
    "Si CC envoie une mise en demeure formelle avec menace d'action imminente",
    "Si CC engage une procédure réelle (pas juste des menaces)",
    "Si une opportunité de négociation se présente"
  ]
};

export const phases = [
  {
    numero: 1,
    nom: "ATTENTE ACTIVE",
    periode: "29 déc 2025 → 13 jan 2026",
    statut: "EN COURS" as const,
    couleur: "cyan" as const,
    quoi: "Maintenir le silence complet. Observer. Ne pas répondre à leur lettre du 26/12.",
    pourquoi: [
      "Le silence déstabilise leur stratégie réactive",
      "On ne leur donne aucune information sur notre position",
      "On leur laisse le temps de s'enfoncer (plus ils parlent, plus ils font des erreurs potentielles)",
      "On conserve notre énergie pour la suite"
    ],
    comment: [
      "NE PAS répondre à leur lettre du 26/12",
      "NE PAS relancer sur le transfert des actifs",
      "Documenter silencieusement tout ce qui se passe",
      "Si CC relance : réponse minimale de 2 lignes max"
    ],
    exception: {
      si: "CC envoie une relance agressive entre le 3 et le 10 janvier",
      alors: "Email ultra-court : 'Nous prenons note. Nos positions restent celles du 19 décembre. Nous attendons votre réponse complète avant le 13 janvier.'"
    }
  },
  {
    numero: 2,
    nom: "CONSTAT",
    periode: "14-15 jan 2026",
    statut: "PLANIFIÉ" as const,
    couleur: "purple" as const,
    quoi: "Envoyer une lettre de constat listant tous les manquements documentés de CC.",
    pourquoi: [
      "Le délai du 13 janvier sera expiré — on peut constater leur défaut de réponse",
      "On documente officiellement : non-transfert des actifs, silence sur nos questions, contradiction 2FA",
      "On prépare le terrain pour l'escalade en créant une trace écrite complète",
      "On montre qu'on est méthodique et patient — pas impulsif"
    ],
    comment: [
      "Lettre recommandée avec AR",
      "Ton factuel, pas agressif",
      "Liste des faits sans sur-interprétation",
      "Annonce de 'la suite des démarches' sans détailler"
    ],
    contenu: [
      "Constat #1 : INACTION DOCUMENTÉE sur Oye — Aucune mesure de récupération documentée depuis 5 mois malgré promesse de Jack (crédits Meta)",
      "Constat #2 : PRÉJUDICE QUE NOUS ESTIMONS IRRÉVERSIBLE — Le préjudice reste DÛ indépendamment de toute récupération éventuelle",
      "Constat #3 : Non-respect du délai du 29/12 (transfert actifs non effectué)",
      "Constat #4 : Absence de réponse aux questions posées le 19/12 (rapport récupération, logs 2FA, échanges Meta)",
      "Constat #5 : Contradiction documentée sur le 2FA (vous affirmez qu'il était actif, Meta recommande de l'activer)",
      "Constat #6 : La page Oye existait au 03/09/2025 sous contrôle de tiers (contredit 'no evidence of compromise')",
      "Annonce : 'Face à ces constats, nous maintenons notre demande de compensation intégrale et poursuivrons les démarches nécessaires.'"
    ]
  },
  {
    numero: 3,
    nom: "ESCALADE",
    periode: "Fin janvier 2026",
    statut: "EN RÉSERVE" as const,
    couleur: "red" as const,
    quoi: "Dépôt de plainte pénale pour accès frauduleux à un système informatique (Art. 323-1 Code Pénal).",
    pourquoi: [
      "Coût : 0€ pour nous — procédure gratuite",
      "Pression maximale sur CC — la dimension pénale change la donne",
      "Procédure en France — pas besoin d'aller en Suisse",
      "Publicité potentielle — CC préférerait éviter",
      "Force CC à justifier pourquoi ils avaient le contrôle exclusif sans protection 2FA adéquate (selon nos éléments)"
    ],
    comment: [
      "Plainte au commissariat ou procureur",
      "Viser les PIRATES (pas CC directement) — mais CC devra s'expliquer en tant que gestionnaire",
      "Fournir les éléments : emails Meta, page existant au 03/09, historique",
      "Demander une enquête sur comment le piratage a pu se produire"
    ],
    condition: "À déclencher uniquement si Phase 2 n'a pas produit d'effet, ou si CC escalade"
  },
  {
    numero: 4,
    nom: "NÉGOCIATION FINALE",
    periode: "Février 2026",
    statut: "OBJECTIF" as const,
    couleur: "emerald" as const,
    quoi: "Proposer un accord global si CC montre des signes de capitulation.",
    pourquoi: [
      "L'objectif n'est pas la guerre — c'est de sortir de cette situation",
      "Si CC comprend qu'ils ne récupéreront potentiellement rien et risquent une procédure pénale, ils négocieront probablement",
      "Un accord coûte 0€, un arbitrage coûte 150-300k€ à CC"
    ],
    comment: [
      "Attendre un signal de CC (proposition, appel, ton différent)",
      "Tout par écrit — pas de call sans trace",
      "Exiger les conditions minimales AVANT toute discussion de détail",
      "Ne pas montrer d'empressement — on a le temps"
    ],
    conditionsMin: [
      "Annulation complète de la dette restante (~142k€)",
      "Compensation financière pour Oye (200-500k€) — DUE INDÉPENDAMMENT de toute récupération",
      "Transfert immédiat de Buzzly et VoyagerLoin vers BM d'ADN",
      "Quitus mutuel — plus aucune réclamation possible"
    ],
    leviers: [
      "Lettre de Jack du 17/10/24 ('we can live with it') — pièce maîtresse",
      "5 MOIS sans action documentée pour récupérer Oye — négligence documentée",
      "Promesse de Jack le 14/11 d'utiliser ses 'crédits Meta' — jamais tenue",
      "Aveu documenté de passivité de Jonathan du 14/11/25",
      "Recommandation Meta suggérant fortement que le 2FA n'était pas actif",
      "Plainte pénale en cours ou imminente"
    ]
  }
];

export const arbreDecision = [
  {
    emoji: "🔇",
    si: "Rien jusqu'au 13 janvier",
    alors: "Lettre de constat le 14-15 janvier"
  },
  {
    emoji: "📧",
    si: "Relance agressive par email (3-10 jan)",
    alors: "Email de 2 lignes : 'Nos positions restent celles du 19/12. Nous attendons votre réponse complète.'"
  },
  {
    emoji: "🎭",
    si: "Prétend récupérer Oye ou faire des efforts",
    alors: "Exiger preuve écrite + expertise indépendante. Rappeler: 'Le préjudice que nous estimons irréversible reste dû, la récupération ne restitue pas la valeur détruite après 5 mois.'"
  },
  {
    emoji: "⚠️",
    si: "Mise en demeure formelle avec menace imminente",
    alors: "Évaluer si on accélère la Phase 2 (lettre de constat) ou si on répond point par point"
  },
  {
    emoji: "🤝",
    si: "Propose une discussion / négociation",
    alors: "Accepter d'écouter MAIS tout par écrit. Pas de call. Conditions minimales non négociables."
  },
  {
    emoji: "⚔️",
    si: "Engage une procédure d'arbitrage",
    alors: "Contre-attaque : exception d'inexécution (Art. 82 CO), contre-créance que nous estimons à 1M€+, éléments de négligence documentés, 5 mois d'inaction"
  }
];

export const journalBord = [
  {
    date: "2 jan 2026",
    heure: "01h00",
    evenement: "MISE À JOUR V4.3 — Documentation complète visio 31/10: Jérôme (DG) propose compte séquestre à CC, Jack REFUSE immédiatement.",
    decision: "Pattern confirmé: CC refuse systématiquement toute solution collaborative (150k€ oct 2024, compte séquestre 31/10). Preuve que CC préfère contrôle unilatéral à protection mutuelle. Ajout dans Evidence, Psychology, Chronology, Meeting14Nov."
  },
  {
    date: "30 déc 2025",
    heure: "00h30",
    evenement: "MISE À JOUR V4.2 — Intégration docs 31/10: 2ème Gmail perso découvert (Joel Cooper) = éléments de négligence systématique.",
    decision: "Nouvel onglet 'Gmail 🚨'. 2 personnes sur 2 utilisent Gmail perso = potentielle faute organisationnelle (Art. 100 CO)."
  },
  {
    date: "29 déc 2025",
    heure: "22h30",
    evenement: "MISE À JOUR V4.1 — Clarification stratégique: préjudice Oye que nous estimons IRRÉVERSIBLE et DÛ indépendamment de toute récupération.",
    decision: "Formulation CONSTAT (pas DEMANDE) pour Oye. Ne jamais lier récupération à fin du préjudice."
  },
  {
    date: "29 déc 2025",
    heure: "21h00",
    evenement: "Mise à jour War Room avec emails octobre 2024. Lettre de Jack du 17/10 documente son acceptation explicite du scénario de prise de contrôle.",
    decision: "Continuer le silence. La lettre de Jack sera notre pièce maîtresse en négociation ou arbitrage."
  },
  {
    date: "29 déc 2025",
    heure: "18h00",
    evenement: "Délai transfert actifs (29/12) expiré. CC n'a pas transféré Buzzly et VoyagerLoin.",
    decision: "Ne pas relancer. Constater dans la lettre du 14-15 janvier."
  }
];
