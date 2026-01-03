export interface LetterSection {
  num: string;
  title: string;
  content: string;
}

export interface Claim {
  claim: string;
  response: string;
  critical: boolean;
}

export interface Demands {
  amount: number;
  deadline: string;
  threats: string[];
}

export interface ADNLetter {
  date: string;
  sender: string;
  sections: LetterSection[];
  documentsRequested: string[];
}

export interface CCLetter {
  date: string;
  sender: string;
  timing: string;
  claims: Claim[];
  demands: Demands;
  notAnswered: string[];
}

export interface LettersData {
  adn: ADNLetter;
  cc: CCLetter;
}

export const lettersData: LettersData = {
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
};
