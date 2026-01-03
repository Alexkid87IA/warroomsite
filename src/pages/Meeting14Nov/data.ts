export interface Point {
  point: string;
  critical: boolean;
  note?: string;
}

export interface Admission {
  text: string;
  meaning: string;
}

export interface JonathanResponse {
  quote: string;
  admissions: Admission[];
  limitedTo: string;
  implication: string;
}

export interface Meeting14NovData {
  date: string;
  participants: string[];
  crSentBy: string;
  crSentAt: string;
  jonathanResponseAt: string;
  pointsNonContestes: Point[];
  jonathanResponse: JonathanResponse;
  neverAnswered: string[];
  neverReceived: string[];
}

export const meeting14NovData: Meeting14NovData = {
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
};
