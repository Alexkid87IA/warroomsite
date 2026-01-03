export interface ContractDocument {
  name: string;
  date: string;
  key: string;
}

export interface Finances {
  advanceReceived: number;
  toRepay: number;
  ifPaidIn1Year: number;
  revenueShare: number;
  minimumMonthly: number;
  alreadyPaid: number;
  remainingDebt: number;
  ccDemand: number;
}

export interface ContractClause {
  id: string;
  name: string;
  desc: string;
  impact: string;
  danger: 'critical' | 'medium' | 'leverage';
}

export interface ContractsData {
  documents: ContractDocument[];
  finances: Finances;
  clauses: ContractClause[];
}

export const contractsData: ContractsData = {
  documents: [
    { name: "License Agreement (Conditions Générales)", date: "25 sept 2024", key: "Clauses 6, 7, 9, 14" },
    { name: "Purchase Order (Production Advance)", date: "26 sept 2024", key: "Avance 150k€, remboursement 210k€" },
    { name: "Amendment Protocol", date: "2 oct 2024", key: "Garantie personnelle Alex, Minimum 6k€/mois" }
  ],
  finances: {
    advanceReceived: 150000,
    toRepay: 210000,
    ifPaidIn1Year: 202500,
    revenueShare: 30,
    minimumMonthly: 6000,
    alreadyPaid: 70000,
    remainingDebt: 142000,
    ccDemand: 11351.89
  },
  clauses: [
    { id: "6", name: "Liquidated Damages", desc: "Pénalités ×3 si >6 mois de retard", impact: "Jusqu'à 630 000 €", danger: "critical" },
    { id: "7", name: "Breach Call Option", desc: "CC acquiert TOUTE l'IP pour 1$ en cas de breach", impact: "PERTE TOTALE des actifs", danger: "critical" },
    { id: "4.3(e)(ii)", name: "Exception pénalités", desc: "'Without fault' + 'could not have been prevented'", impact: "Défense ADN", danger: "leverage" },
    { id: "9.2", name: "Limitation responsabilité", desc: "Plafonnée à 150k€", impact: "Annulable si faute grave (Art. 100 CO)", danger: "medium" },
    { id: "14", name: "Arbitrage ICC", desc: "3 arbitres, Genève, anglais", impact: "Coût 80-250k€", danger: "medium" }
  ]
};
