export const assets = {
  oye: {
    name: "Oye",
    platform: "Facebook",
    followers: 1200000,
    audience: "Hispanophone internationale (dont USA)",
    revenueRange: "4 000 - 15 000 €/mois",
    revenuePercent: 40,
    status: "PERDUE / PIRATÉE",
    currentState: "Contrôlée par pirates, contenu sexuel/inapproprié",
    contentLost: "~200 vidéos, 2,5 ans de travail (depuis décembre 2022)",
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
      conclusion: "Même récupérée, la page n'a PLUS DE VALEUR. Le préjudice est estimé IRRÉVERSIBLE."
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
