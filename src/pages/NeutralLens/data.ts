export interface CategoryFacts {
  category: string;
  facts: string[];
  inferences: string[];
}

export interface ArgumentStrength {
  argument: string;
  strength: string;
  forADN: string[];
  forCC: string[];
  probability: string;
}

export interface Scenario {
  scenario: string;
  probability: string;
  consequence: string;
}

export interface ArbitratorPerspective {
  whatTheyWillSee: string[];
  whatTheyWillAsk: string[];
  likelyOutcomes: Scenario[];
}

export interface DocumentationQuality {
  excellent: string[];
  good: string[];
  missing: string[];
}

export interface Recommendation {
  priority: string;
  action: string;
  why: string;
}

export interface NeutralLensData {
  title: string;
  subtitle: string;
  lastUpdate: string;
  factsVsInferences: CategoryFacts[];
  strengthAssessment: ArgumentStrength[];
  ccBestArguments: string[];
  adnBestArguments: string[];
  arbitratorPerspective: ArbitratorPerspective;
  documentationQuality: DocumentationQuality;
  recommendations: Recommendation[];
}

export const neutralLensData: NeutralLensData = {
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
        "Le 2FA n'était pas actif au 27/08 → forte présomption",
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
        "La page existe encore sous contrôle de tiers → vérifiable",
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
      category: "Réunion du 31 octobre 2025",
      facts: [
        "Première réunion de négociation directe par visio entre Jérôme Cristaldi (DG ADN) et représentants de CC",
        "Jérôme propose un compte séquestre comme solution de protection mutuelle",
        "Jack Ojalvo refuse cette proposition",
        "Jonathan transmet les documents 'ADN Oye' le même jour",
        "Ces documents révèlent le 2ème Gmail personnel (Joel Cooper)"
      ],
      inferences: [
        "Le refus du compte séquestre montre que CC préfère le contrôle unilatéral → pattern avec refus 150k€ oct 2024",
        "CC refuse systématiquement les solutions collaboratives → interprétation basée sur pattern observé",
        "Le timing (visio + transmission docs) suggère une ouverture apparente mais limitée → interprétation",
        "La proposition du DG montre bonne foi d'ADN → peut être argumenté"
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
};
