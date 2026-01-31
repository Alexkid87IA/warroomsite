export interface ChronologyEvent {
  date: string;
  event: string;
  phase: 'setup' | 'operation' | 'incident' | 'negotiation' | 'silence' | 'collection' | 'escalation' | 'current';
  important?: boolean;
  critical?: boolean;
}

export const mainTimelineData: ChronologyEvent[] = [
  { date: "~7 août 2024", event: "Premiers contacts ADN → CC", phase: "setup" },
  { date: "1 sept 2024", event: "Date effective du contrat", phase: "setup" },
  { date: "25 sept 2024", event: "Signature General Conditions", phase: "setup" },
  { date: "26 sept 2024", event: "Signature Purchase Order", phase: "setup" },
  { date: "28 sept 2024", event: "⚠️ Transfert des pages vers BM de CC (CONTRE volonté ADN)", phase: "setup", important: true },
  { date: "2 oct 2024", event: "Signature Amendment (garantie perso + minimum)", phase: "setup" },
  { date: "Oct 2024", event: "📧 ADN propose de rembourser 150k€ — REFUSÉ par CC", phase: "operation", important: true },
  { date: "Oct 2024", event: "📧 CC retire les accès 3× sans préavis, transfère pages sans accord", phase: "operation", important: true },
  { date: "14 oct 2024", event: "Alex propose remboursement 150k€ sous 45 jours", phase: "setup", important: true },
  { date: "16 oct 2024", event: "Emre répond: 'obviously not acceptable'", phase: "setup", important: true },
  { date: "16 oct 2024 - 21:46", event: "Jonathan TRANSFÈRE les pages dans BM CC SANS prévenir", phase: "setup", important: true },
  { date: "17 oct 2024 - 13:32", event: "🔴 ULTIMATUM IMPOSSIBLE de Jack: remboursement EN 1 JOUR", phase: "setup", critical: true },
  { date: "17 oct 2024 - 13:32", event: "🔴 LETTRE PRÉDATRICE de Jack: 'we can live with it'", phase: "setup", critical: true },
  { date: "21 oct 2024", event: "Jonathan remet les accès après meeting", phase: "setup" },
  { date: "30 oct 2024 - 12:28", event: "Emre demande si 'satisfied with current status' — CYNISME", phase: "setup", important: true },
  { date: "Fin juillet 2025", event: "🔴 PIRATAGE page Oye DÉCOUVERT (27 juillet 2025)", phase: "incident", critical: true },
  { date: "8 août 2025", event: "🤖 Joel Cooper reçoit 'No evidence of compromise' de ROBOT Meta (advertise-noreply@)", phase: "incident", important: true },
  { date: "8 août 2025", event: "📧 Joel → Jonathan → Alex: forward de l'email robot", phase: "incident" },
  { date: "25 août 2025", event: "📧 Joel Cooper confirme ID Business Manager CC: 1149345562525337", phase: "incident" },
  { date: "27 août 2025", event: "Meta recommande 2FA à Jonathan", phase: "incident", critical: true },
  { date: "Août-Sept 2025", event: "Boucle email Meta (voir onglet dédié)", phase: "incident" },
  { date: "8 sept 2025", event: "Fin boucle Meta — ABANDON", phase: "incident", critical: true },
  { date: "31 oct 2025", event: "📹 VISIO Jérôme (DG) ↔ CC — 1ère réunion de négociation directe", phase: "negotiation", important: true },
  { date: "31 oct 2025", event: "💰 Jérôme propose COMPTE SÉQUESTRE — Jack REFUSE (protection mutuelle rejetée)", phase: "negotiation", important: true },
  { date: "31 oct 2025", event: "📧 Jonathan transmet docs 'ADN Oye' — Révèle 2ème Gmail perso (joelcoopercinema@gmail.com)", phase: "negotiation", important: true },
  { date: "14 nov 2025", event: "📞 Call Jack, Jonathan, Jérôme, Alex — Jack valide transfert BM", phase: "negotiation", important: true },
  { date: "14 nov 2025 18:45", event: "📧 Jérôme envoie compte-rendu détaillé", phase: "negotiation" },
  { date: "14 nov 2025 19:08", event: "📧 Jonathan répond sur 1 SEUL point — 'PS: ma réponse ne concerne que ce point' (absence de contestation du reste)", phase: "negotiation", important: true },
  { date: "14 nov → 19 déc", event: "⏳ SILENCE TOTAL de CC — Aucun suivi des engagements", phase: "silence", critical: true },
  { date: "12 déc 2025", event: "Frédéric (CC) envoie injonction de payer", phase: "collection" },
  { date: "~14-16 déc 2025", event: "Jérôme répond fermement à Frédéric", phase: "escalation" },
  { date: "19 déc 2025", event: "📄 LETTRE ADN — Mise en demeure formelle (Art. 82 CO)", phase: "escalation", critical: true },
  { date: "~20-23 déc 2025", event: "Jonathan propose RDV technique", phase: "escalation" },
  { date: "23 déc 2025", event: "❌ Jonathan ANNULE le RDV technique après réception lettre", phase: "escalation", critical: true },
  { date: "26 déc 2025", event: "📄 LETTRE CC — Réponse agressive (Emre Kumet)", phase: "escalation", critical: true },
  { date: "29 déc 2025", event: "⏰ Délai transfert actifs EXPIRÉ — Non respecté par CC", phase: "current", critical: true },
  { date: "12 jan 2026", event: "📧 Martin Febvre (CC) — Demande paiement 6 000€ ignorant Art. 82 CO", phase: "current" },
  { date: "16 jan 2026", event: "📄 LETTRE OFFENSIVE ADN — Contre-créance +1,2M€, délais 15j/30j", phase: "current", critical: true },
  { date: "26 jan 2026", event: "💣 LETTRE NUCLÉAIRE CC — BCO exercé pour 1$, pénalités 630K€, insinue qu'ADN responsable du piratage", phase: "current", critical: true },
  { date: "30 jan 2026", event: "📄 LETTRE ADN (FR+EN) — LRAR RK 46 507 575 0 FR, renforcement Art. 82/97/100 CO + Art. 2 CC", phase: "current", critical: true },
  { date: "~31 jan 2026", event: "⏰ Délai 15 jours EXPIRÉ — CC en défaut total", phase: "current", critical: true },
  { date: "2 fév 2026", event: "⚖️ PLAINTE PÉNALE DÉPOSÉE — Art. 323-1, 323-3, 314-1 CP (Tribunal Marseille)", phase: "current", critical: true },
  { date: "2 fév 2026", event: "📋 SIGNALEMENT DDPP — Art. L442-1 C.com (pratiques abusives B2B)", phase: "current", important: true },
  { date: "2 fév 2026", event: "🔍 FINMA — CC non enregistré, opère potentiellement sans autorisation (LEFin)", phase: "current", important: true }
];
