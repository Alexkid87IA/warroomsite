export interface EmailEvidence {
  date: string;
  from: string;
  to: string;
  quote: string;
  source?: string;
  context?: string;
}

export interface Analysis {
  contradiction: string;
  timeline: string;
  conclusion: string;
}

export interface TwoFactorProofData {
  metaEmail: EmailEvidence;
  jonathanMeeting: EmailEvidence;
  ccLetter: EmailEvidence;
  analysis: Analysis;
}

export const twoFactorProofData: TwoFactorProofData = {
  metaEmail: {
    date: "27 août 2025",
    from: "Cheick Camara (Meta)",
    to: "Jonathan Mayorkas (CC)",
    quote: "Nous vous recommandons vivement d'activer l'authentification à deux facteurs"
  },
  jonathanMeeting: {
    date: "14 novembre 2025",
    context: "Réunion téléphonique",
    from: "Jonathan Mayorkas",
    to: "",
    quote: "Jonathan a confirmé que l'authentification à deux facteurs (2FA) a toujours été en place",
    source: "Compte-rendu Jérôme — NON CONTESTÉ par Jonathan"
  },
  ccLetter: {
    date: "26 déc 2025",
    from: "Emre Kumet (CC)",
    to: "",
    quote: "All accounts were protected by 2FA"
  },
  analysis: {
    contradiction: "Meta recommande d'ACTIVER le 2FA → donc il n'était PAS actif",
    timeline: "Jonathan affirme le 14/11 que le 2FA était 'toujours en place' → CONTREDIT par Meta le 27/08",
    conclusion: "Double contradiction documentée"
  }
};
