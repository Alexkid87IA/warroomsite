export interface TimelineEvent {
  date: string;
  event: string;
  icon?: string;
}

export interface Evidence {
  id: string;
  proof: string;
  strength: 'devastating' | 'very_strong' | 'strong';
  proves: string;
}

export interface DamageItem {
  item: string;
  calculation?: string;
  amount: string;
}

export interface Scenario {
  question: string;
  answer: string;
}

export interface Identity {
  platform: string;
  name: string;
  followers: string;
  audience: string;
  monthlyRevenue: string;
  revenueShare: string;
  content: string;
  currentStatus: string;
}

export interface PageId {
  id: string;
  source: string;
  status: string;
}

export interface Responsibility {
  entity: string;
  role: string;
  details: string;
}

export interface BeforeAfter {
  before: {
    followers: string;
    revenue: string;
    content: string;
    monetization: string;
    reputation: string;
  };
  after: {
    followers: string;
    engagement: string;
    revenue: string;
    content: string;
    monetization: string;
    reputation: string;
  };
}

export interface OyeClarificationData {
  title: string;
  subtitle: string;

  executiveSummary: {
    fact: string;
    probableCause: string;
    inaction: string;
    admission: string;
    estimatedDamage: string;
    legalPosition: string;
  };

  identity: Identity;
  pageIds: PageId[];

  businessManager: {
    id: string;
    owner: string;
    superAdmin: string;
    superAdminEmail: string;
  };

  pageAccess: {
    ccControl: string[];
    adnAccess: string[];
    conclusion: string;
  };

  metaStatement: string;

  timeline: TimelineEvent[];

  evidence: Evidence[];

  damages: DamageItem[];
  totalEstimate: string;

  beforeAfter: BeforeAfter;

  fundamentalPrinciple: {
    title: string;
    statement: string;
    remainingDamages: string[];
  };

  analogy: string;

  formulation: {
    bad: {
      text: string;
      risk: string;
    };
    good: {
      text: string;
      advantage: string;
    };
  };

  recoveryScenario: {
    title: string;
    actions: string[];
    note: string;
  };

  responseScenarios: Scenario[];

  finalSummary: {
    doesRequestingRecoveryHurtUs: { answer: string; explanation: string };
    canWeAttackIfRecovered: { answer: string; explanation: string };
    whatStrategy: { answer: string; explanation: string };
  };
}

export const oyeClarificationData: OyeClarificationData = {
  title: "OYE — DOSSIER COMPLET",
  subtitle: "Piratage, négligence et préjudice irréversible",

  executiveSummary: {
    fact: "Page de 1,2M followers piratée alors qu'elle était sous la garde exclusive de Copyright Capital",
    probableCause: "2FA non activé sur le compte du Super Admin (preuve : email Meta du 27/08)",
    inaction: "5+ mois sans aucune démarche de récupération documentée",
    admission: "Jonathan Mayorkas, 14 novembre 2025 : \"si vous souhaitez qu'on essaye de notre côté\"",
    estimatedDamage: "800 000 € - 1 300 000 €",
    legalPosition: "Le préjudice reste dû indépendamment de toute récupération éventuelle"
  },

  identity: {
    platform: "Facebook",
    name: "Oye",
    followers: "1 200 000",
    audience: "Hispanophone internationale (dont USA)",
    monthlyRevenue: "4 000 € - 15 000 €",
    revenueShare: "~40% des revenus ADN",
    content: "~200 vidéos originales (4 ans de travail)",
    currentStatus: "PIRATÉE — contenu sexuel/inapproprié publié par les pirates"
  },

  pageIds: [
    {
      id: "110170275225790",
      source: "Fourni par Alexis (ADN) le 28/08",
      status: "Inconnu"
    },
    {
      id: "100087176420390",
      source: "Rapport interne Meta 29/08",
      status: "\"Permanently deleted\""
    },
    {
      id: "100089751341306",
      source: "Retrouvé par Alex le 03/09",
      status: "EXISTE ENCORE — pirates actifs"
    }
  ],

  businessManager: {
    id: "1149345562525337",
    owner: "Copyright Capital SA",
    superAdmin: "Jonathan Mayorkas",
    superAdminEmail: "jmayorkas2@gmail.com (Gmail personnel)"
  },

  pageAccess: {
    ccControl: [
      "Propriétaire du Business Manager",
      "Contrôle exclusif de la sécurité",
      "Seul à pouvoir activer le 2FA sur le compte Super Admin"
    ],
    adnAccess: [
      "Accès Admin à la PAGE uniquement",
      "PAS d'accès au Business Manager",
      "NE pouvait PAS modifier les paramètres de sécurité"
    ],
    conclusion: "Copyright Capital avait le contrôle EXCLUSIF de la sécurité du Business Manager. ADN ne pouvait pas activer le 2FA sur le compte de Jonathan — seul Jonathan pouvait le faire."
  },

  metaStatement: "Sur la page Transparency de Buzzly (toujours sous CC) : \"Copyright Capital SA est responsable de cette Page\". Meta considère CC comme responsable des pages sous leur gestion.",

  timeline: [
    { date: "Fin juillet 2025", event: "🔴 PIRATAGE DÉTECTÉ" },
    { date: "4 août 2025", event: "Alex signale le piratage à Tom Rouyrès (Meta)" },
    { date: "8 août 2025", event: "🤖 Joel Cooper reçoit \"No evidence of compromise\" — email ROBOT automatique (advertise-noreply@)" },
    { date: "22 août 2025", event: "Tom (Meta) demande l'aide de Cheick Camara (Meta)" },
    { date: "25 août 2025", event: "Jonathan donne son email FB : jmayorkas2@gmail.com (Gmail perso)" },
    { date: "26 août 2025", event: "Alexis (ADN) : \"Nous n'avons pas l'ID de la page\"" },
    { date: "27 août 2025", event: "⚠️ Cheick (Meta) à Jonathan : \"Nous vous recommandons vivement d'ACTIVER l'authentification à deux facteurs\"" },
    { date: "27 août 2025", event: "Jonathan : \"J'ai changé mon mot de passe\" — aucune mention du 2FA" },
    { date: "28 août 2025", event: "Alexis fournit un ID de page (des Remittance Details)" },
    { date: "29 août 2025", event: "Meta : \"Page ID 100087176420390 permanently deleted\" — ID différent" },
    { date: "3 septembre 2025", event: "Alex retrouve la vraie page : ID 100089751341306 — pirates actifs, contenu sexuel" },
    { date: "8 septembre 2025", event: "⛔ FIN DE LA BOUCLE — Plus aucune action de CC ou Meta" },
    { date: "14 novembre 2025", event: "Jonathan avoue : \"si vous souhaitez qu'on essaye de notre côté\" — 3,5 mois sans initiative" },
    { date: "29 décembre 2025", event: "📍 AUJOURD'HUI — 5+ mois d'inaction totale" }
  ],

  evidence: [
    {
      id: "1",
      proof: "Email Meta 27/08 — \"Activer 2FA\"",
      strength: "devastating",
      proves: "Le 2FA n'était PAS actif"
    },
    {
      id: "2",
      proof: "Page existe encore (ID 100089751341306)",
      strength: "devastating",
      proves: "Contredit \"no evidence of compromise\" et \"permanently deleted\""
    },
    {
      id: "3",
      proof: "Aveu Jonathan 14/11 — \"si vous voulez qu'on essaye\"",
      strength: "devastating",
      proves: "3,5 mois sans même essayer de leur côté"
    },
    {
      id: "4",
      proof: "Email robot 8/08 (advertise-noreply@)",
      strength: "very_strong",
      proves: "CC n'a que des contacts automatiques chez Meta, pas de vrais interlocuteurs"
    },
    {
      id: "5",
      proof: "Email 26/08 — \"Nous n'avons pas l'ID\"",
      strength: "very_strong",
      proves: "ADN ne possédait pas les infos techniques — CC les avait"
    },
    {
      id: "6",
      proof: "Confusion sur les Page ID",
      strength: "very_strong",
      proves: "Désorganisation totale de CC"
    },
    {
      id: "7",
      proof: "5 mois d'inaction documentée",
      strength: "very_strong",
      proves: "Négligence caractérisée"
    },
    {
      id: "8",
      proof: "Gmail perso comme Super Admin",
      strength: "strong",
      proves: "Négligence technique"
    },
    {
      id: "9",
      proof: "Promesse de Jack — \"crédits Meta\" (14/11)",
      strength: "strong",
      proves: "Promesse jamais tenue"
    },
    {
      id: "10",
      proof: "CR du 14/11 non contesté",
      strength: "strong",
      proves: "Validation tacite de tous les points"
    }
  ],

  damages: [
    {
      item: "Pertes de revenus passées (5 mois)",
      calculation: "9 500 € × 5",
      amount: "47 500 €"
    },
    {
      item: "Pertes de revenus futures (12 mois)",
      calculation: "9 500 € × 12",
      amount: "114 000 €"
    },
    {
      item: "Valeur de l'audience perdue",
      calculation: "1 200 000 × 0,50 €",
      amount: "600 000 €"
    },
    {
      item: "Contenu perdu (~200 vidéos)",
      calculation: "200 × 500 €",
      amount: "100 000 €"
    },
    {
      item: "Coût de reconstruction estimé",
      calculation: "Forfait",
      amount: "50 000 €"
    },
    {
      item: "Atteinte à la réputation",
      calculation: "Forfait",
      amount: "50 000 €"
    }
  ],

  totalEstimate: "800 000 € - 1 300 000 €",

  beforeAfter: {
    before: {
      followers: "1,2M followers ENGAGÉS",
      revenue: "4 000 - 15 000 €/mois",
      content: "~200 vidéos originales",
      monetization: "Active",
      reputation: "Intacte"
    },
    after: {
      followers: "Audience MORTE (désengagée après 5+ mois de contenu inapproprié)",
      engagement: "ZÉRO",
      revenue: "0 €",
      content: "PERDU (supprimé ou irrécupérable)",
      monetization: "DÉSACTIVÉE par Meta",
      reputation: "DÉTRUITE (associée à du contenu sexuel)"
    }
  },

  fundamentalPrinciple: {
    title: "CLARIFICATION : RÉCUPÉRATION ≠ FIN DU PRÉJUDICE",
    statement: "Le préjudice économique RESTE DÛ indépendamment de toute récupération éventuelle de la page, celle-ci ne pouvant restituer la valeur détruite.",
    remainingDamages: [
      "Pertes de revenus (5+ mois)",
      "Destruction de l'audience",
      "Perte de monétisation",
      "Perte du contenu (~200 vidéos)",
      "Atteinte à la réputation",
      "Coût de reconstruction"
    ]
  },

  analogy: "C'est comme si un gardien de parking rendait ta voiture 6 mois plus tard : épave. Rendre l'épave n'efface pas le préjudice — il le PROUVE.",

  formulation: {
    bad: {
      text: "Nous exigeons que vous récupériez la page Oye.",
      risk: "CC pourrait dire \"on a récupéré, on est quittes\""
    },
    good: {
      text: "Nous CONSTATONS que vous n'avez pris aucune mesure pour récupérer la page. Le préjudice RESTE DÛ indépendamment de toute récupération éventuelle.",
      advantage: "Documente l'inaction ET préserve le droit à compensation"
    }
  },

  recoveryScenario: {
    title: "SI CC ANNONCE AVOIR RÉCUPÉRÉ OYE",
    actions: [
      "Exiger une PREUVE ÉCRITE de récupération effective",
      "Demander une EXPERTISE INDÉPENDANTE de la valeur actuelle",
      "Documenter : engagement = 0, monétisation désactivée, contenu perdu",
      "Rappeler : \"Le préjudice reste dû, la récupération ne restitue pas la valeur détruite après 5 mois d'inaction\""
    ],
    note: "Une page récupérée sans valeur PROUVE l'étendue du préjudice (≈100%)"
  },

  responseScenarios: [
    {
      question: "Si CC dit : \"On a récupéré la page\"",
      answer: "Prouvez-le par écrit. Et le préjudice des 5+ mois d'inaction reste dû intégralement."
    },
    {
      question: "Si CC dit : \"La page n'existe plus\"",
      answer: "Faux. L'ID 100089751341306 est toujours actif. C'est vérifiable publiquement."
    },
    {
      question: "Si CC dit : \"C'est la faute d'ADN / compromission côté ADN\"",
      answer: "ADN n'avait pas accès au Business Manager. Vous étiez l'unique Super Admin. ADN ne pouvait pas modifier vos paramètres de sécurité."
    },
    {
      question: "Si CC dit : \"On a fait tout ce qu'on pouvait\"",
      answer: "Jonathan a avoué le 14 novembre que vous n'aviez pas essayé de votre côté pendant 3,5 mois. Jack a promis ses 'crédits Meta' — jamais utilisés."
    },
    {
      question: "Si CC dit : \"Le 2FA était actif\"",
      answer: "Alors pourquoi Cheick Camara de Meta vous a-t-il recommandé de l'ACTIVER le 27 août ?"
    },
    {
      question: "Si CC dit : \"Nous ne sommes pas responsables de la sécurité\"",
      answer: "Meta affiche 'Copyright Capital SA est responsable de cette Page' sur Buzzly. Vous étiez propriétaire du Business Manager et Super Admin."
    }
  ],

  finalSummary: {
    doesRequestingRecoveryHurtUs: {
      answer: "NON",
      explanation: "Pas si c'est formulé comme un CONSTAT d'inaction"
    },
    canWeAttackIfRecovered: {
      answer: "OUI",
      explanation: "Le préjudice reste dû — la récupération ne restitue pas la valeur détruite"
    },
    whatStrategy: {
      answer: "CONSTAT",
      explanation: "Constater l'inaction, ne pas exiger la récupération"
    }
  }
};
