export interface DelayStatus {
  label: string;
  statut: string;
  color: 'red' | 'amber' | 'blue' | 'green';
}

export interface SituationActuelle {
  resume: string;
  notreDerniereAction: {
    quoi: string;
    contenu: string;
  };
  leurDerniereAction: {
    quoi: string;
    contenu: string;
  };
  delaisEnCours: DelayStatus[];
}

export interface Risk {
  risque: string;
  probabilite: string;
  reponse: string;
}

export interface Strategie {
  nom: string;
  dureeRestante: string;
  pourquoi: string[];
  ceQueLesilenceCommunique: string;
  risques: Risk[];
  conditionsDeRupture: string[];
}

export interface ActionPhase {
  numero: number;
  nom: string;
  periode: string;
  statut: 'EN COURS' | 'PLANIFIÉ' | 'EN RÉSERVE' | 'OBJECTIF';
  color: 'cyan' | 'purple' | 'red' | 'emerald';
  quoi: string;
  pourquoi: string[];
  comment: string[];
  exception?: {
    condition: string;
    action: string;
  };
  contenu?: string[];
  conditionDeclenchement?: string;
  conditionsMinimales?: string[];
  leveragePourNegocier?: string[];
}

export interface ProchaineAction {
  quoi: string;
  jusqua: string;
  pourquoi: string;
  exception: string;
}

export interface DecisionTree {
  siCCFait: string;
  alorsOnFait: string;
  icon: string;
}

export interface LogEntry {
  date: string;
  time: string;
  entry: string;
  decision: string;
}

export interface ActionPlanData {
  lastUpdate: string;
  situationActuelle: SituationActuelle;
  strategie: Strategie;
  phases: ActionPhase[];
  prochaineAction: ProchaineAction;
  arbreDecision: DecisionTree[];
  logbook: LogEntry[];
}

export const actionPlanData: ActionPlanData = {
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
        "Constat #6 : La page Oye existait au 03/09/2025 sous contrôle de tiers (contredit 'no evidence of compromise')",
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
};
