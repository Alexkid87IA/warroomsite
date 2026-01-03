export interface LegalArticle {
  art: string;
  name: string;
  use: string;
  status: 'invoked' | 'reserved';
  probability?: string;
}

export interface LegalData {
  swiss: LegalArticle[];
  french: LegalArticle[];
}

export const legalData: LegalData = {
  swiss: [
    { art: "Art. 82 CO", name: "Exception d'inexécution", use: "Base de la suspension des paiements", status: "invoked", probability: "55-65%" },
    { art: "Art. 97 CO", name: "Responsabilité pour inexécution", use: "Base de la demande de dommages", status: "reserved" },
    { art: "Art. 100 CO", name: "Nullité exonération faute grave", use: "Annuler la clause 9.2 (limitation responsabilité)", status: "invoked", probability: "30-40%" },
    { art: "Art. 101 CO", name: "Responsabilité pour auxiliaires", use: "Tenir CC responsable des fautes de Jonathan/Joel", status: "reserved" },
    { art: "Art. 398 CO", name: "Diligence du mandataire", use: "Attaquer le manque de diligence de CC", status: "reserved" },
    { art: "Art. 163 CO", name: "Réduction des clauses pénales", use: "Réduire les pénalités ×3 si jugées excessives", status: "reserved" },
    { art: "Art. 44 CO", name: "Réduction de l'indemnité (mitigation)", use: "Reprocher à CC de n'avoir rien fait pour mitiger les dégâts", status: "reserved" },
    { art: "Art. 2 CC", name: "Abus de droit", use: "Bloquer la clause 7 (Breach Call Option)", status: "invoked", probability: "55-65%" },
    { art: "Art. 120-125 CO", name: "Compensation", use: "Déclarer la contre-créance", status: "reserved" }
  ],
  french: [
    { art: "Art. 323-1 CP", name: "Accès frauduleux à un STAD", use: "Plainte pénale (levier de pression)", status: "reserved" }
  ]
};
