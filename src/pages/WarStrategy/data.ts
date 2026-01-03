export interface Outcome {
  outcome: string;
  priority: 'critical' | 'high' | 'medium';
}

export interface StatData {
  label: string;
  value: string;
  subtext: string;
}

export interface UltimateGoal {
  title: string;
  description: string;
  outcomes: Outcome[];
  stats: StatData[];
}

export interface CategoryReason {
  category: string;
  color: 'amber' | 'red' | 'purple' | 'emerald';
  points: string[];
}

export interface WhyCCLoses {
  title: string;
  subtitle: string;
  reasons: CategoryReason[];
  conclusion: {
    title: string;
    text: string;
    subtext: string;
  };
}

export interface KeyMessage {
  message: string;
  color: 'emerald' | 'red' | 'amber' | 'cyan' | 'fuchsia';
  how: string;
  tone: string;
  example: string;
}

export interface PhaseDetail {
  phase: number;
  name: string;
  period: string;
  status: '🔥 EN COURS' | 'À VENIR' | 'EN RÉSERVE' | 'OBJECTIF';
  color: 'cyan' | 'purple' | 'red' | 'emerald' | 'slate';
  actions: string[];
  psychology: string;
  additional?: {
    title: string;
    items: string[];
  };
  conditions?: string;
}

export interface CostItem {
  item: string;
  amount: string;
}

export interface CalculationOption {
  label: string;
  color: 'red' | 'emerald';
  type: 'costs' | 'gains';
  items: CostItem[];
  total: string;
  result: string;
}

export interface CCCalculation {
  title: string;
  subtitle: string;
  options: CalculationOption[];
  conclusion: {
    main: string;
    subtext: string;
  };
}

export interface Signal {
  signal: string;
  meaning: string;
  response: string;
}

export interface Mistake {
  mistake: string;
  why: string;
}

export interface GoodAction {
  action: string;
}

export interface TalebPrinciple {
  principle: string;
  application: string;
}

export interface WarStrategyData {
  lastUpdate: string;
  ultimateGoal: UltimateGoal;
  whyCCLoses: WhyCCLoses;
  keyMessages: KeyMessage[];
  phases: PhaseDetail[];
  ccCalculation: CCCalculation;
  surrenderSignals: {
    title: string;
    subtitle: string;
    signals: Signal[];
  };
  mistakes: {
    title: string;
    subtitle: string;
    mistakes: Mistake[];
    goodActions: GoodAction[];
  };
  talebPrinciples: {
    title: string;
    subtitle: string;
    principles: TalebPrinciple[];
    quote: {
      text: string;
      author: string;
      subtext: string;
    };
  };
}

export const warStrategyData: WarStrategyData = {
  lastUpdate: "29 décembre 2025",

  ultimateGoal: {
    title: "OBJECTIF FINAL: CAPITULATION DE CC",
    description: "Amener Copyright Capital à abandonner leurs poursuites et accepter une résolution favorable à ADN",
    outcomes: [
      { outcome: "Annulation totale de la dette (~142k€)", priority: "critical" },
      { outcome: "Compensation pour Oye (200-500k€) — DUE MÊME SI PAGE RÉCUPÉRÉE", priority: "high" },
      { outcome: "Transfert immédiat Buzzly + VoyagerLoin + YouTube", priority: "high" },
      { outcome: "Fin définitive du partenariat", priority: "medium" },
      { outcome: "Aucune clause 7 (Breach Call Option) exercée", priority: "critical" }
    ],
    stats: [
      { label: "À payer à CC", value: "0 €", subtext: "Annulation totale de la dette" },
      { label: "Compensation visée", value: "200-500k€", subtext: "Pour la perte de Oye" },
      { label: "Actifs récupérés", value: "100%", subtext: "Buzzly, VoyagerLoin, YouTube" }
    ]
  },

  whyCCLoses: {
    title: "POURQUOI C'EST DÉFAVORABLE POUR CC",
    subtitle: "CC doit comprendre qu'ils n'ont pas intérêt à poursuivre",
    reasons: [
      {
        category: "Coût vs Bénéfice",
        color: "amber",
        points: [
          "Arbitrage ICC = 100-300k€ de frais",
          "Durée = 2-3 ans",
          "Pour récupérer quoi? 142k€ d'un débiteur qui affirme être insolvable",
          "ROI potentiellement négatif"
        ]
      },
      {
        category: "Risque juridique",
        color: "red",
        points: [
          "Contre-créance ADN: nous estimons entre 1-1,3M€",
          "Éléments de négligence documentés",
          "Contradictions documentées (2FA, etc.)",
          "Pattern de refus de solutions collaboratives: 150k€ (oct 2024) + compte séquestre (31/10/25)",
          "Éléments pouvant constituer une faute grave → clause 9.2 potentiellement annulable"
        ]
      },
      {
        category: "Risque réputationnel",
        color: "purple",
        points: [
          "Plainte pénale en France = publicité potentiellement négative",
          "Fonds d'investissement qui perd les actifs de ses clients",
          "Gmail personnel pour gérer des actifs de 1M€+",
          "Pattern de négligence documenté"
        ]
      },
      {
        category: "Exécution difficile",
        color: "emerald",
        points: [
          "Alex affirme n'avoir RIEN de saisissable",
          "Pas de maison, pas d'épargne déclarée",
          "Sentence arbitrale = potentiellement difficile à exécuter",
          "Frais d'exécution supplémentaires pour résultat incertain"
        ]
      }
    ],
    conclusion: {
      title: "LA CONCLUSION POUR CC",
      text: "Nous allons dépenser 200-400k€ pour récupérer potentiellement 0€ d'un insolvable, tout en risquant une contre-créance de 1,3M€",
      subtext: "C'est le calcul qu'ils doivent faire."
    }
  },

  keyMessages: [
    {
      message: "JE N'AI RIEN À PERDRE",
      color: "emerald",
      how: "Mentionner subtilement l'absence d'actifs saisissables",
      tone: "Factuel, pas menaçant",
      example: "Une procédure longue et coûteuse aboutirait à une sentence potentiellement difficile à exécuter"
    },
    {
      message: "VOUS AVEZ TOUT À PERDRE",
      color: "red",
      how: "Rappeler les éléments de négligence documentés, le coût de l'arbitrage, le risque de contre-créance",
      tone: "Professionnel, documenté",
      example: "Les éléments factuels documentés exposent CC à une responsabilité potentiellement significative"
    },
    {
      message: "LE TEMPS JOUE CONTRE VOUS",
      color: "amber",
      how: "Chaque mois = dommages supplémentaires estimés, éléments qui s'accumulent",
      tone: "Patient, confiant",
      example: "Nous documenterons l'intégralité des pertes subies pendant cette période"
    },
    {
      message: "LA SORTIE EXISTE",
      color: "cyan",
      how: "Toujours laisser une porte ouverte à la négociation",
      tone: "Constructif",
      example: "Nous restons ouverts à une résolution amiable qui reconnaisse les préjudices subis"
    },
    {
      message: "LA RÉCUPÉRATION NE CHANGE RIEN",
      color: "fuchsia",
      how: "Clarifier que le préjudice que nous estimons irréversible reste dû, page récupérée ou non",
      tone: "Factuel, juridique",
      example: "Le préjudice reste dû indépendamment de toute récupération éventuelle"
    }
  ],

  phases: [
    {
      phase: 1,
      name: "SILENCE STRATÉGIQUE",
      period: "29 déc 2025 → 13 janv 2026",
      status: "🔥 EN COURS",
      color: "cyan",
      actions: [
        "NE PAS répondre à leur ultimatum du 26/12",
        "Laisser expirer leur délai de paiement (2 janv)",
        "Observer leur réaction",
        "Documenter tout"
      ],
      psychology: "Créer l'incertitude — ils ne savent pas ce qu'on prépare"
    },
    {
      phase: 2,
      name: "CONSTAT D'ÉCHEC",
      period: "14-15 janvier 2026",
      status: "À VENIR",
      color: "purple",
      actions: [
        "Lettre constatant: délai actifs expiré, aucune réponse aux questions",
        "Rappeler les aveux documentés du 14 novembre",
        "Annoncer la suite de la procédure",
        "Mentionner (sans détailler) la difficulté d'exécution"
      ],
      psychology: "Montrer qu'on est organisé, patient, déterminé",
      additional: {
        title: "Contenu prévu de la lettre:",
        items: [
          "Constat #1 : INACTION DOCUMENTÉE sur Oye — Aucune mesure de récupération documentée depuis 5 mois malgré promesse de Jack (crédits Meta)",
          "Constat #2 : PRÉJUDICE QUE NOUS ESTIMONS IRRÉVERSIBLE — Le préjudice reste DÛ indépendamment de toute récupération éventuelle",
          "Constat #3 : Non-respect du délai du 29/12 (transfert actifs non effectué)",
          "Constat #4 : Absence de réponse aux questions posées le 19/12 (rapport récupération, logs 2FA, échanges Meta)",
          "Constat #5 : Contradiction documentée sur le 2FA (vous affirmez qu'il était actif, Meta recommande de l'activer)",
          "Constat #6 : La page Oye existait au 03/09/2025 sous contrôle de tiers (contredit 'no evidence of compromise')",
          "Annonce : 'Face à ces constats, nous maintenons notre demande de compensation intégrale et poursuivrons les démarches nécessaires.'"
        ]
      }
    },
    {
      phase: 3,
      name: "ESCALADE",
      period: "Fin janvier 2026",
      status: "EN RÉSERVE",
      color: "red",
      actions: [
        "Dépôt de plainte pénale pour accès frauduleux à un système informatique (Art. 323-1 Code Pénal)",
        "Coût: 0€ pour nous — procédure gratuite",
        "Effet: procédure en France, publicité potentiellement négative",
        "CC doit répondre dans une juridiction française"
      ],
      psychology: "Changer le terrain de jeu — les mettre en position de défense",
      conditions: "À déclencher uniquement si Phase 2 n'a pas produit d'effet, ou si CC escalade"
    },
    {
      phase: 4,
      name: "NÉGOCIATION FINALE",
      period: "Février 2026",
      status: "OBJECTIF",
      color: "emerald",
      actions: [
        "Attendre un signal de CC (proposition, appel, ton différent)",
        "Tout par écrit — pas de call sans trace",
        "Exiger les conditions minimales AVANT toute discussion de détail",
        "Ne pas montrer d'empressement — on a le temps"
      ],
      psychology: "L'objectif n'est pas la guerre — c'est de sortir de cette situation",
      additional: {
        title: "Conditions minimales NON NÉGOCIABLES:",
        items: [
          "Annulation complète de la dette restante (~142k€)",
          "Compensation financière pour Oye (200-500k€) — DUE INDÉPENDAMMENT de toute récupération",
          "Transfert immédiat de Buzzly et VoyagerLoin vers BM d'ADN",
          "Quitus mutuel — plus aucune réclamation possible"
        ]
      }
    },
    {
      phase: 5,
      name: "GUERRE D'USURE (si nécessaire)",
      period: "2026+",
      status: "EN RÉSERVE",
      color: "slate",
      actions: [
        "Contester toute procédure arbitrale",
        "Soulever toutes les exceptions",
        "Faire durer, faire coûter",
        "Rendre l'exécution difficile"
      ],
      psychology: "Leur montrer que c'est un investissement à perte"
    }
  ],

  ccCalculation: {
    title: "LE CALCUL QUE CC DOIT FAIRE",
    subtitle: "Leur montrer que se battre = investissement à perte potentiel",
    options: [
      {
        label: "❌ S'ILS SE BATTENT",
        color: "red",
        type: "costs",
        items: [
          { item: "Frais arbitrage ICC", amount: "100-300k€" },
          { item: "Avocats (2-3 ans)", amount: "50-150k€" },
          { item: "Temps des dirigeants", amount: "Significatif" },
          { item: "Risque contre-créance", amount: "Jusqu'à 1,3M€ (selon notre estimation)" },
          { item: "Exécution de la sentence", amount: "Potentiellement 0€ récupéré (insolvabilité alléguée)" }
        ],
        total: "150-450k€ de coûts potentiels + risque contre-créance 1,3M€",
        result: "RISQUE DE PERTE NETTE"
      },
      {
        label: "✅ S'ILS NÉGOCIENT",
        color: "emerald",
        type: "gains",
        items: [
          { item: "Économie frais arbitrage", amount: "+100-300k€" },
          { item: "Économie avocats", amount: "+50-150k€" },
          { item: "Fin du risque contre-créance", amount: "Évite risque 1,3M€" },
          { item: "Conservation des autres actifs", amount: "Buzzly, YouTube" },
          { item: "Préservation réputation", amount: "Significatif" }
        ],
        total: "Annulation dette 142k€ + compensation ~200-300k€",
        result: "SORTIE PROPRE, PERTES LIMITÉES"
      }
    ],
    conclusion: {
      main: "FIGHT = -400k€ minimum potentiel\nSETTLE = -350k€ maximum",
      subtext: "Le choix rationnel semble évident."
    }
  },

  surrenderSignals: {
    title: "SIGNAUX DE CAPITULATION À SURVEILLER",
    subtitle: "Comment identifier quand ils commencent à céder",
    signals: [
      {
        signal: "Proposition de 'discussion' ou 'médiation'",
        meaning: "Ils cherchent possiblement une sortie",
        response: "Accepter d'écouter mais rester ferme sur les principes"
      },
      {
        signal: "Silence prolongé (2+ semaines)",
        meaning: "Ils réfléchissent possiblement au coût",
        response: "Maintenir la pression douce"
      },
      {
        signal: "Changement de ton dans les échanges",
        meaning: "Le juridique a possiblement parlé aux dirigeants",
        response: "Ouvrir une porte"
      },
      {
        signal: "Proposition de transfert des actifs",
        meaning: "Concession majeure",
        response: "Accepter et négocier le reste"
      },
      {
        signal: "Demande de délai",
        meaning: "Ils temporisent, cherchent possiblement une solution",
        response: "Accorder un délai court avec conditions"
      }
    ]
  },

  mistakes: {
    title: "ERREURS À NE PAS COMMETTRE",
    subtitle: "Ce qui pourrait affaiblir notre position",
    mistakes: [
      { mistake: "Montrer de l'impatience", why: "Le temps est notre allié, pas le leur" },
      { mistake: "Révéler toutes nos cartes", why: "Garder des éléments pour chaque étape" },
      { mistake: "Être agressif ou insultant", why: "Rester professionnel = crédibilité" },
      { mistake: "Accepter un appel téléphonique", why: "Tout doit être écrit et documenté" },
      { mistake: "Payer quoi que ce soit", why: "Affaiblirait l'exception d'inexécution" },
      { mistake: "Menacer sans agir", why: "Les menaces vides = perte de crédibilité" },
      { mistake: "Lier récupération à fin du préjudice", why: "Le préjudice que nous estimons irréversible reste dû MÊME si page récupérée" }
    ],
    goodActions: [
      { action: "Rester patient — le temps est notre allié" },
      { action: "Documenter TOUT par écrit" },
      { action: "Garder un ton professionnel" },
      { action: "Révéler les éléments progressivement" },
      { action: "Laisser des portes ouvertes à la négociation" },
      { action: "Agir quand on dit qu'on va agir" }
    ]
  },

  talebPrinciples: {
    title: "PRINCIPES TALEB (ANTIFRAGILITÉ)",
    subtitle: "La philosophie qui guide notre stratégie",
    principles: [
      {
        principle: "ANTIFRAGILITÉ",
        application: "Plus CC attaque, plus notre position se renforce potentiellement. Chaque échange nous donne de nouveaux éléments documentés."
      },
      {
        principle: "ASYMÉTRIE",
        application: "ADN risque peu (insolvabilité alléguée), CC risque beaucoup (frais + contre-créance + réputation)."
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
        application: "Protection maximale (silence, documentation) + actions ciblées (plainte pénale, lettres)."
      }
    ],
    quote: {
      text: "Ce qui ne me tue pas me rend plus fort",
      author: "Nietzsche (repris par Taleb)",
      subtext: "Chaque attaque de CC = nouvel élément documenté de négligence potentielle = position ADN potentiellement renforcée"
    }
  }
};
