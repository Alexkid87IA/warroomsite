export interface SummaryData {
  situation: string;
  debt: number;
  counterClaim: { min: number; max: number };
  strategy: string;
  position: string;
}

export const summaryData: SummaryData = {
  situation: "ADN Production (créateur de contenu digital, Marseille) en litige avec Copyright Capital (fonds d'investissement, Genève) après la perte de la page Facebook 'Oye' (1,2M abonnés, ~40% des revenus) alors qu'elle était sous la garde technique EXCLUSIVE de CC.",
  debt: 142000,
  counterClaim: { min: 1000000, max: 1300000 },
  strategy: "TALEB — Antifragilité",
  position: "Exception d'inexécution (Art. 82 CO) — Paiements suspendus jusqu'à réparation du préjudice"
};
