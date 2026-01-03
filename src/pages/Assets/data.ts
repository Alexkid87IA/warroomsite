export interface PageId {
  id: string;
  source: string;
  status: string;
  critical?: boolean;
}

export interface DamageState {
  followers: string;
  revenue?: string;
  content?: string;
  monetization?: string;
  reputation?: string;
  engagement?: string;
}

export interface OyeAsset {
  name: string;
  platform: string;
  followers: number;
  audience: string;
  revenueRange: string;
  revenuePercent: number;
  status: string;
  currentState: string;
  contentLost: string;
  ids: {
    fromADN: PageId;
    fromMeta: PageId;
    actual: PageId;
  };
  damageAnalysis: {
    beforeHack: DamageState;
    afterRecovery: DamageState;
    conclusion: string;
  };
}

export interface OtherAsset {
  name: string;
  platform: string;
  status: string;
  transferRequested?: boolean;
}

export interface TechnicalInfo {
  businessManagerId: string;
  owner: string;
  superAdmin: string;
  superAdminEmail: string;
  adnAccess: string;
}

export interface AssetsData {
  oye: OyeAsset;
  others: OtherAsset[];
  technical: TechnicalInfo;
}

export const assetsData: AssetsData = {
  oye: {
    name: "Oye",
    platform: "Facebook",
    followers: 1200000,
    audience: "Hispanophone internationale (dont USA)",
    revenueRange: "4 000 - 15 000 €/mois",
    revenuePercent: 40,
    status: "PERDUE / PIRATÉE",
    currentState: "Contrôlée par pirates, contenu sexuel/inapproprié",
    contentLost: "~200 vidéos, 4 ans de travail",
    ids: {
      fromADN: { id: "110170275225790", source: "Alexis (ADN) 28/08 — Remittance Details", status: "unknown" },
      fromMeta: { id: "100087176420390", source: "Meta 29/08 — rapport interne", status: "Permanently deleted" },
      actual: { id: "100089751341306", source: "Alex 03/09 — page retrouvée", status: "existait au 03/09/2025 — pirates actifs", critical: true }
    },
    damageAnalysis: {
      beforeHack: {
        followers: "1,2M followers ENGAGÉS",
        revenue: "4 000 - 15 000 €/mois",
        content: "~200 vidéos originales",
        monetization: "Active",
        reputation: "Intacte"
      },
      afterRecovery: {
        followers: "Audience MORTE",
        engagement: "ZÉRO",
        revenue: "0€",
        content: "PERDU",
        monetization: "DÉSACTIVÉE",
        reputation: "DÉTRUITE"
      },
      conclusion: "Même récupérée, la page n'a PLUS DE VALEUR. Le préjudice est IRRÉVERSIBLE."
    }
  },
  others: [
    { name: "Buzzly", platform: "Facebook", status: "Active — sous BM de CC", transferRequested: true },
    { name: "VoyagerLoin", platform: "Facebook", status: "Active", transferRequested: true },
    { name: "Origines Media", platform: "YouTube", status: "Active — CC GARDE LES REVENUS" }
  ],
  technical: {
    businessManagerId: "1149345562525337",
    owner: "Copyright Capital SA",
    superAdmin: "Jonathan Mayorkas",
    superAdminEmail: "jmayorkas2@gmail.com (Gmail personnel)",
    adnAccess: "Admin des PAGES seulement, PAS du Business Manager"
  }
};
