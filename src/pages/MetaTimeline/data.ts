export interface TimelineEvent {
  date: string;
  from?: string;
  to?: string;
  event: string;
  type?: 'critical' | 'evidence' | 'internal' | 'important';
  note?: string;
  highlight?: string;
}

export const metaTimelineData: TimelineEvent[] = [
  { date: "~25-31 juillet 2025", event: "🔴 PIRATAGE DÉTECTÉ", type: "critical" },
  { date: "4 août 2025", from: "Alex (ADN)", to: "Tom Rouyrès (Meta)", event: "Signalement du piratage — aucune réponse canal urgent" },
  { date: "8 août 2025", from: "🤖 Robot Meta", to: "Joel Cooper (joelcoopercinema@gmail.com)", event: "'No evidence of compromise' — EMAIL AUTOMATIQUE (advertise-noreply@)", type: "evidence", note: "PAS une analyse humaine — support robot générique" },
  { date: "8 août 2025", from: "Joel Cooper", to: "Jonathan + Jack", event: "Forward: 'Here's the feedback I've gotten from Meta'", type: "internal" },
  { date: "12 août 2025", from: "Alex", to: "Tom", event: "Relance — toujours aucune réponse" },
  { date: "22 août 2025", from: "Tom (Meta)", to: "Cheick Camara (Meta)", event: "[INTERNE] Demande d'aide à Cheick", type: "internal" },
  { date: "22 août 2025", from: "Cheick (Meta)", to: "Alex", event: "Demande d'infos : adresse email associée au compte" },
  { date: "25 août 2025", from: "Alex", to: "Tous", event: "Page sous BM de CC, ID: 1149345562525337" },
  { date: "25 août 2025", from: "Joel Cooper", to: "Alex", event: "Confirme ID Business Manager CC: 1149345562525337" },
  { date: "25 août 2025", from: "Jonathan (CC)", to: "Tous", event: "Donne son email FB: jmayorkas2@gmail.com", type: "evidence", note: "Gmail PERSONNEL #1 comme Super Admin" },
  { date: "26 août 2025", from: "Cheick (Meta)", to: "Tous", event: "Demande de l'ID de la page piratée" },
  { date: "26 août 2025", from: "Alexis (ADN)", to: "Cheick", event: "\"Nous n'avons pas l'ID de la page\"", type: "important", note: "ADN ne possédait pas les infos techniques" },
  { date: "27 août 2025", from: "Cheick (Meta)", to: "Jonathan (CC)", event: "🔐 \"Nous vous recommandons vivement d'ACTIVER l'authentification à deux facteurs\"", type: "critical", highlight: "2FA" },
  { date: "27 août 2025", from: "Jonathan (CC)", to: "Tous", event: "\"J'ai changé mon mot de passe\"", note: "Aucune mention du 2FA" },
  { date: "27 août 2025", from: "Alexis (ADN)", to: "Cheick", event: "\"La page ne semble pas être en ligne\" + screenshot" },
  { date: "28 août 2025", from: "Cheick (Meta)", to: "Tous", event: "\"Notre équipe n'a pas réussi à localiser la page\"" },
  { date: "28 août 2025", from: "Alexis (ADN)", to: "Cheick", event: "Fournit ID: 110170275225790 (des Remittance Details)" },
  { date: "29 août 2025", from: "Cheick (Meta)", to: "Tom [INTERNE]", event: "\"Page ID 100087176420390 permanently deleted\"", type: "internal", note: "ID différent de celui fourni" },
  { date: "3 sept 2025", from: "Alex", to: "Tous", event: "\"On a retrouvé la page — ID: 100089751341306 — elle affiche des storys sexuelles\"", type: "critical", highlight: "PAGE_EXISTS" },
  { date: "8 sept 2025", from: "Alex", to: "Tous", event: "\"Les pirates continuent de poster du contenu horrible\"" },
  { date: "8 sept 2025", from: "Alexis (ADN)", to: "Cheick", event: "\"Je n'ai pas pu envoyer de mail à clementine@lists / deletion-eng@lists\"" },
  { date: "Après 8 sept 2025", event: "⛔ FIN DE LA BOUCLE — Plus aucune action de CC ou Meta", type: "critical", note: "5+ mois d'inaction" }
];
