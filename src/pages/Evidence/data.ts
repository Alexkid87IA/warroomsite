export interface EvidenceItem {
  id: number;
  name: string;
  strength: 'devastating' | 'very_strong' | 'strong';
  desc: string;
  status: 'documented';
  date?: string;
}

export const evidenceData: EvidenceItem[] = [
  { id: 1, name: "Email Meta 27/08 — Recommandation 2FA", strength: "devastating", desc: "Meta recommande d'ACTIVER le 2FA à Jonathan → suggère fortement qu'il n'était pas actif à cette date", status: "documented" },
  { id: 2, name: "CR 14/11 — Jonathan confirme 2FA 'toujours en place'", strength: "devastating", desc: "Affirmation qui CONTREDIT l'email Meta", status: "documented" },
  { id: 3, name: "Email 14/11 19:08 — Aveu de passivité CC", strength: "devastating", desc: "'si vous souhaitez qu'on essaye DE NOTRE CÔTÉ' → 3,5 mois sans initiative", status: "documented" },
  { id: 4, name: "Page existe encore (ID 100089751341306)", strength: "devastating", desc: "Contredit 'no evidence of compromise' et 'permanently deleted' — preuve récente disponible", status: "documented" },
  { id: 5, name: "Meta affiche CC comme 'responsable'", strength: "very_strong", desc: "Screenshot Buzzly: 'Copyright Capital SA est responsable de cette Page'", status: "documented" },
  { id: 6, name: "Gmail personnel comme Super Admin", strength: "strong", desc: "jmayorkas2@gmail.com pour gérer des actifs de 1M€+", status: "documented" },
  { id: 7, name: "ADN n'avait pas le Page ID", strength: "strong", desc: "Email 26/08: 'Nous n'avons pas l'ID de la page'", status: "documented" },
  { id: 8, name: "4+ mois d'inaction après le 8 sept", strength: "very_strong", desc: "Aucune action de récupération documentée depuis", status: "documented" },
  { id: 9, name: "Silence sur CR 14/11", strength: "very_strong", desc: "Jack ne répond pas, Jonathan répond sur 1 point → absence de contestation du reste (argument, pas certitude juridique)", status: "documented" },
  { id: 10, name: "RDV technique annulé après lettre", strength: "strong", desc: "Jonathan propose puis annule après réception de la mise en demeure", status: "documented" },
  { id: 11, name: "Proposition remboursement 150k€ refusée", strength: "strong", desc: "ADN a proposé de sortir du deal en oct 2024 — CC a refusé", status: "documented" },
  { id: 12, name: "Préjudice estimé IRRÉVERSIBLE — page inexploitable", strength: "very_strong", desc: "5 mois d'inaction = valeur de la page estimée à 0€ même si récupérée (argument ADN, à établir par expertise)", status: "documented" },
  { id: 13, name: "Joel Cooper — 2ème Gmail perso", strength: "very_strong", desc: "joelcoopercinema@gmail.com utilisé pour contacts Meta — découvert 31/10", status: "documented", date: "31/10/2025" },
  { id: 14, name: "Visio 31/10 — Jérôme (DG) propose compte séquestre", strength: "very_strong", desc: "Première réunion de négociation directe. Jérôme Cristaldi (Directeur Général ADN) propose une solution de protection mutuelle", status: "documented", date: "31/10/2025" },
  { id: 15, name: "Jack refuse le compte séquestre (31/10)", strength: "very_strong", desc: "Pattern confirmé: CC refuse toute solution collaborative (comme 150k€ en oct 2024). Préfère contrôle unilatéral.", status: "documented", date: "31/10/2025" },
  { id: 16, name: "2 Gmail perso = éléments de NÉGLIGENCE SYSTÉMATIQUE", strength: "very_strong", desc: "Jonathan + Joel utilisent Gmail perso — pratique organisationnelle pouvant constituer une faute grave (Art. 100 CO)", status: "documented" },
  { id: 17, name: "'No evidence' = ROBOT automatique", strength: "very_strong", desc: "Email 8/08 de advertise-NOREPLY@support.facebook.com — aucune analyse humaine", status: "documented" },
  { id: 18, name: "CC n'a pas de vrais contacts Meta", strength: "strong", desc: "ADN a Tom/Cheick (humains), CC n'a que du support automatique robot", status: "documented" }
];
