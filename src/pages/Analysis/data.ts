export interface DeadlineItem {
  date: string;
  event: string;
  setBy: string;
  status: 'expired' | 'pending' | 'completed';
  action: string;
}

export interface GoldenRule {
  rule: string;
  detail: string;
}

export interface ErrorToAvoid {
  error: string;
  correction: string;
}

export const deadlinesData: DeadlineItem[] = [
  { date: "29 déc 2025", event: "Délai transfert actifs", setBy: "Lettre ADN 19/12", status: "expired", action: "Constater le non-respect" },
  { date: "~2 janv 2026", event: "Délai paiement garantie 11 351,89€", setBy: "Lettre CC 26/12", status: "pending", action: "ADN ne paiera pas" },
  { date: "13 janv 2026", event: "Délai réponse complète CC", setBy: "Lettre ADN 19/12", status: "pending", action: "Attendre puis escalader" }
];

export const goldenRulesData: GoldenRule[] = [
  { rule: "Toujours par écrit", detail: "Plus d'appels, tout documenté" },
  { rule: "Ne jamais répondre dans l'heure", detail: "24-48h minimum" },
  { rule: "Faire relire avant d'envoyer", detail: "Erreurs = faiblesse" },
  { rule: "Ton constant", detail: "Ferme, professionnel, jamais agressif" },
  { rule: "Courriers formels = signature Alex", detail: "Président" },
  { rule: "Emails opérationnels = signature Jérôme", detail: "Directeur Général" },
  { rule: "Garder les armes en réserve", detail: "Ne pas tout révéler" },
  { rule: "CONSTAT, pas DEMANDE", detail: "Pour Oye: constater l'inaction, ne pas demander récupération" }
];

export const errorsToAvoidData: ErrorToAvoid[] = [
  { error: "Dire que CC a donné le mauvais ID à Meta", correction: "C'est Alexis (ADN) qui a fourni l'ID le 28/08" },
  { error: "Dire que CC a MENTI sur le 2FA", correction: "Dire 'CONTRADICTION' — on ne peut pas prouver l'intention" },
  { error: "Affirmer que la contre-créance éteint automatiquement la dette", correction: "C'est un argument, pas automatique si créance contestée" },
  { error: "Dire que le 2FA n'était PAS actif (certitude)", correction: "Dire 'INDICE FORT' ou 'fortement suggère'" },
  { error: "Dire que le silence sur le CR vaut 'acceptation'", correction: "Dire 'absence de contestation' — le silence ne vaut pas acceptation en droit suisse (sauf exceptions)" },
  { error: "Affirmer que Jack a 'accepté' le CR", correction: "Dire que Jack 'n'a pas contesté' le CR — nuance importante pour un arbitre" }
];

export const objectivesData: string[] = [
  "Compensation du préjudice (1-1,3M€)",
  "Annulation de la dette restante (~142k€)",
  "Transfert des actifs restants (Buzzly, VoyagerLoin, YouTube)",
  "Fin du partenariat avec CC"
];
