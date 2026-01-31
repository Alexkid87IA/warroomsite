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

export interface LetterEntry {
  date: string;
  sender: string;
  type: 'adn' | 'cc';
  summary: string;
  sections?: LetterSection[];
  documentsRequested?: string[];
  claims?: Claim[];
  demands?: Demands;
  notAnswered?: string[];
  timing?: string;
  critical?: boolean;
}

export const allLetters: LetterEntry[] = [
  {
    date: "19 décembre 2025",
    sender: "Alex (Président ADN Production)",
    type: "adn",
    summary: "Mise en demeure initiale — Art. 82 CO, transfert actifs, rapport d'enquête",
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
  {
    date: "26 décembre 2025",
    sender: "Emre Kumet (Head of Legal CC)",
    type: "cc",
    summary: "Rejet Art. 82, menaces Clause 6/7, demande 11 351€",
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
      "Article 2 CC (abus de droit)", "Rapport d'enquête", "Logs de connexion",
      "Échanges complets avec Meta", "Transfert des actifs", "Contradiction 2FA",
      "Pourquoi seule Oye a été piratée", "Pourquoi le RDV technique a été annulé"
    ]
  },
  {
    date: "16 janvier 2026",
    sender: "Alex (Président ADN Production)",
    type: "adn",
    summary: "Lettre offensive — Contre-créance +1,2M€, délais 15j/30j, annonce plainte pénale",
    sections: [
      { num: "I", title: "Constat manquements", content: "CC n'a répondu à aucune demande du 19/12" },
      { num: "II", title: "Transfert 28 sept", content: "Caractérisation du dépassement de mandat" },
      { num: "III", title: "Négligence", content: "2FA absent, Gmail perso, inaction 6+ mois" },
      { num: "IV", title: "Limitation responsabilité", content: "Clause 9.3 inapplicable (faute grave Art. 100 CO)" },
      { num: "V", title: "Contre-créance", content: "+800 000 à +1 300 000 € notifiée" },
      { num: "VI", title: "Délais", content: "15j: documents + transfert. 30j: position réparation" },
      { num: "VII", title: "Conséquences", content: "Plainte pénale + communication publique + arbitrage" }
    ]
  },
  {
    date: "26 janvier 2026",
    sender: "Emre Kumet (Legal Director CC)",
    type: "cc",
    summary: "LETTRE NUCLÉAIRE — BCO exercé pour 1$, pénalités 630K€, insinue ADN responsable du piratage",
    critical: true,
    timing: "Escalation maximale — CC passe à l'offensive nucléaire",
    claims: [
      { claim: "Pas de preuve de piratage côté CC", response: "INSINUATION — CC suggère qu'ADN serait responsable du piratage ('hacking occurred on the page level... may be related to any person with access, including within your organization')", critical: true },
      { claim: "All accounts were protected by 2FA", response: "🔴 RÉAFFIRMÉ malgré la contradiction Meta du 27/08 — CC double down sur un mensonge documenté", critical: true },
      { claim: "ADN en breach of contract", response: "CONTESTABLE — ADN invoque Art. 82 CO (exception d'inexécution)", critical: false },
      { claim: "Waiver of moral rights required", response: "🔴 IMPOSSIBLE en droit français — Art. L121-1 CPI : droits moraux INALIÉNABLES", critical: true }
    ],
    demands: {
      amount: 630000,
      deadline: "31 janvier 2026",
      threats: [
        "Liquidated Damages: 3× Specified Amount = 630 000€ (Clause 6)",
        "Breach Call Option exercé: TOUTE la PI pour 1 USD (Clause 7)",
        "Scope: 'all content on OYE page and all other pages on FB and all IP on ALL platforms (YouTube, Facebook, Snapchat, etc.)'",
        "Exige renonciation aux droits moraux (impossible en droit FR)"
      ]
    },
    notAnswered: [
      "Rapport d'enquête interne (3ème demande ignorée)",
      "Logs de connexion Business Manager",
      "Échanges complets avec Meta",
      "Contradiction 2FA (email Meta 27/08 vs affirmations CC)",
      "Transfert actifs Buzzly/VoyagerLoin",
      "Pourquoi seule Oye a été piratée",
      "Responsabilité du transfert non autorisé du 28 sept 2024"
    ]
  },
  {
    date: "30 janvier 2026",
    sender: "Alex (Président ADN Production)",
    type: "adn",
    summary: "Renforcement juridique FR+EN — LRAR RK 46 507 575 0 FR",
    sections: [
      { num: "I", title: "Réponse au BCO", content: "Contestation formelle — Art. 2 CC (abus de droit)" },
      { num: "II", title: "Art. 82 CO réitéré", content: "Exception d'inexécution maintenue" },
      { num: "III", title: "Art. 97 CO", content: "Responsabilité contractuelle pour négligence" },
      { num: "IV", title: "Art. 100 CO", content: "Nullité clause exonératoire si faute grave" },
      { num: "V", title: "Art. 163 al. 3 CO", content: "Réduction des pénalités disproportionnées" },
      { num: "VI", title: "Préjudice", content: "Table récapitulative : 800K - 1,3M€" },
      { num: "VII", title: "Annonces", content: "Plainte pénale imminente + communication publique Origines Media" }
    ]
  }
];

// Keep backward compatibility
export const lettersData: LettersData = {
  adn: allLetters[0] as unknown as ADNLetter,
  cc: allLetters[1] as unknown as CCLetter,
};
