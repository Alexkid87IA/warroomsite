export const prochainActionData = {
  action: "SIGNALEMENT FINMA + TROUVER AVOCAT SUISSE",
  date: "3-7 février 2026",
  pourquoi: "Plainte pénale déposée. Signalement DDPP envoyé. CC non enregistré FINMA — levier énorme. Maintenant : mandater un avocat suisse + signaler à la FINMA. Plus de lettres à CC.",
  exception: "Si CC envoie une proposition écrite sérieuse avant lundi → évaluer, mais déposer la plainte quand même. Les deux sont compatibles."
};

export const ouEnEstOnData = {
  resume: "PLAINTE PÉNALE DÉPOSÉE (2 février). SIGNALEMENT DDPP ENVOYÉ. CC non enregistré FINMA. Lettre nucléaire CC du 26 janvier : BCO pour 1$, pénalités 630K€, insinuation ADN responsable du piratage. Réponse ADN du 30 janvier (LRAR). Premier délai 15j expiré. CC en défaut total.",
  notreAction: {
    quoi: "Plainte pénale + Signalement DDPP (2 février 2026)",
    contenu: "Plainte : Art. 323-1 (accès frauduleux), Art. 323-3 (modification données), Art. 314-1 CP (abus de confiance). Signalement DDPP : Art. L442-1 Code commerce (déséquilibre significatif B2B). Découverte FINMA : CC non enregistré malgré activité de gestion de fonds créateurs."
  },
  leurAction: {
    quoi: "LETTRE NUCLÉAIRE du 26 janvier 2026",
    contenu: "CC exerce le BCO (Clause 7) — prétend acquérir TOUTE la PI d'ADN pour 1 USD. Réclame 630K€ de pénalités (Clause 6). Insinue qu'ADN est responsable du piratage. Exige renonciation aux droits moraux (impossible en droit FR). Emre Kumet change de titre : 'Legal Director' (était 'Head of Legal'). Aucun document fourni. Aucun transfert effectué."
  },
  delais: [
    {
      titre: "Plainte pénale DÉPOSÉE (2 fév)",
      statut: "✅ Art. 323-1 + 323-3 + 314-1 CP — Tribunal Marseille",
      type: "green" as const
    },
    {
      titre: "Signalement DDPP ENVOYÉ (2 fév)",
      statut: "✅ Art. L442-1 C.com — Pratiques abusives B2B",
      type: "green" as const
    },
    {
      titre: "FINMA — CC non enregistré",
      statut: "Signalement à préparer — CC opère sans licence LEFin",
      type: "red" as const
    },
    {
      titre: "Délai 15 jours EXPIRÉ (~31 jan)",
      statut: "CC EN DÉFAUT — Aucun document, aucun transfert",
      type: "red" as const
    },
    {
      titre: "Délai 30 jours (~15 fév)",
      statut: "Position formelle sur réparation préjudice",
      type: "amber" as const
    },
    {
      titre: "Avocat suisse",
      statut: "À TROUVER — Indispensable pour crédibilité (arbitrage ICC Genève)",
      type: "red" as const
    }
  ]
};

export const strategieData = {
  nom: "MULTI-FRONT — Noyer CC sous les procédures",
  periode: "2 février → 15 février 2026",
  pourquoiSilence: [
    "⚠️ LE SILENCE A ASSEZ DURÉ — 2 lettres envoyées sans réponse, les mots sont épuisés",
    "La crédibilité se mesure au ratio actes/paroles — actuellement trop de paroles",
    "CC interprète chaque jour sans action concrète comme de l'hésitation",
    "La plainte pénale annoncée le 16 janvier doit être déposée MAINTENANT",
    "Un avocat suisse doit être contacté cette semaine — pas le mois prochain"
  ],
  message: "Les mots sont terminés. Chaque front ouvert multiplie la pression. Plainte pénale + DGCCRF + FINMA + avocat suisse = CC ne sait plus où donner de la tête.",
  risques: [
    {
      risque: "CC continue le silence total",
      probabilite: "35%",
      reponse: "On exécute : plainte pénale (lundi), avocat suisse (cette semaine), article Origines Media (semaine du 9 fév)."
    },
    {
      risque: "CC contre-attaque (mise en demeure, arbitrage)",
      probabilite: "30%",
      reponse: "Attendu. Contre-créance +1,2M€ déjà notifiée. Art. 82 CO invoqué. Avocat suisse indispensable pour répondre."
    },
    {
      risque: "CC propose une négociation",
      probabilite: "25%",
      reponse: "Écouter. Exiger transfert Buzzly/VoyagerLoin comme preuve de bonne foi. Tout par écrit. Conditions minimales non négociables."
    },
    {
      risque: "CC capitule (accepte conditions)",
      probabilite: "10%",
      reponse: "Accord écrit immédiat. Vérifier exécution. Quitus mutuel APRÈS réception des fonds et actifs."
    }
  ],
  changementSi: [
    "CC fait une proposition sérieuse (par écrit) avec engagement sur nos conditions minimales",
    "L'avocat suisse recommande une approche différente",
    "La plainte pénale ouvre des opportunités nouvelles"
  ]
};

export const analyseProba = {
  titre: "ANALYSE PROBABILISTE — Chances de victoire avant arbitrage",
  pCC_lache: {
    lettre_seule: 18,
    lettre_plainte: 30,
    lettre_plainte_avocat: 37,
    tous_vecteurs: 55
  },
  facteursDominants: [
    "Le dossier est solide juridiquement — mais CC ne raisonne pas rationnellement",
    "Biais cognitifs de CC : sunk cost (150K€ investis), ego (Jack/Emre), overconfidence (contrat 'blindé'), peur du précédent",
    "L'espérance mathématique de l'arbitrage est NÉGATIVE pour CC (~-360K€) — mais les biais réduisent de ~88% la probabilité qu'ils prennent la décision rationnelle",
    "Variable incontrôlable la plus impactante : la santé financière de CC",
    "FINMA = arme nucléaire — CC gère des fonds créateurs sans licence"
  ],
  esperanceArbitrageCC: -361000,
  probabiliteVictoireTotaleCC: 1.7,
  diagnostic: "Le dossier est fort. L'exécution est lente. Trop de paroles, pas assez d'actes."
};

export const autoEvaluation = {
  titre: "AUTO-ÉVALUATION — La partie d'échecs est-elle bien menée ?",
  bienJoue: [
    "Documentation exhaustive — tout est gardé, chronologé, prouvé",
    "Lettre du 30 janvier juridiquement solide (Art. 82, 97, 100 CO + Art. 2 CC)",
    "Identification de la page piratée le 3 septembre (CC incapable de la localiser)",
    "Proposition de séquestre (14/11) → montre notre bonne foi, leur mauvaise foi",
    "Proposition de remboursement 150K€ (oct 2024) → même logique",
    "Contre-créance notifiée (+1,2M€) → CC sait que les enjeux sont énormes",
    "✅ Plainte pénale déposée le 2 février — crédibilité restaurée",
    "Signalement DDPP envoyé — ouvre un front administratif",
    "Découverte FINMA — CC non enregistré, levier majeur"
  ],
  malJoue: [
    "⚠️ TIMING TROP LENT — 6 mois depuis le piratage, plainte toujours pas déposée",
    "⚠️ PAS D'AVOCAT SUISSE — lettres envoyées depuis la France sur du droit suisse avec arbitrage ICC Genève. CC voit le bluff potentiel.",
    "⚠️ RATIO PAROLES/ACTES DÉSÉQUILIBRÉ — 2 lettres, un article prévu, des menaces. Mais : 0 procédure lancée, 0 avocat suisse, 0 plainte déposée.",
    "⚠️ ARTICLE AVANT PLAINTE = RISQUE — publier avant d'avoir déposé la plainte et mandaté un avocat peut être retourné contre nous"
  ],
  actionsUrgentes: [
    { action: "Signaler CC à la FINMA", delai: "Cette semaine (3-7 février)", priorite: "CRITIQUE" },
    { action: "Contacter un avocat suisse", delai: "Cette semaine (3-7 février)", priorite: "CRITIQUE" },
    { action: "Contacter d'autres créateurs CC", delai: "Semaine du 9 février", priorite: "IMPORTANT" },
    { action: "Article Origines Media", delai: "Semaine du 9 février (APRÈS avocat)", priorite: "MOYEN" }
  ]
};

export const phases = [
  {
    numero: 1,
    nom: "PÉRIODE D'OBSERVATION",
    periode: "16 jan → 30 jan 2026",
    statut: "TERMINÉ" as const,
    couleur: "cyan" as const,
    quoi: "Observer la réaction de CC à notre lettre offensive.",
    pourquoi: [
      "La lettre du 16 janvier était notre position officielle",
      "CC avait un délai de 15 jours pour documents et transfert",
      "On leur laissait le temps de réaliser la gravité"
    ],
    comment: [
      "✅ Observation faite — CC n'a PAS répondu",
      "✅ Aucun document fourni",
      "✅ Aucun transfert effectué",
      "✅ Deuxième lettre envoyée le 30 janvier (renforcement juridique)"
    ],
    resultat: "CC EN DÉFAUT — Silence total, délai 15j expiré sans aucune action de leur part."
  },
  {
    numero: 2,
    nom: "CONSTAT DE DÉFAUT + LETTRE RENFORCEMENT",
    periode: "30 janvier 2026",
    statut: "FAIT" as const,
    couleur: "cyan" as const,
    quoi: "Deuxième lettre envoyée — renforcement juridique complet.",
    pourquoi: [
      "CC n'a pas répondu au premier délai de 15 jours",
      "Nécessité de renforcer la base juridique (Art. 97, 100 CO, Art. 2 CC)",
      "Annoncer les actions imminentes : plainte pénale, communication publique"
    ],
    comment: [
      "✅ Lettre envoyée en FR et EN",
      "✅ Art. 82 CO réitéré (exception d'inexécution)",
      "✅ Art. 97 CO détaillé (responsabilité pour négligence)",
      "✅ Art. 100 CO invoqué (nullité clause exonératoire)",
      "✅ Art. 2 CC invoqué (abus de droit sur BCO)",
      "✅ Table récapitulative du préjudice incluse",
      "✅ Clause 10 confidentialité vérifiée pour article"
    ],
    resultat: "Position juridique complète et solide. CC ne peut plus ignorer."
  },
  {
    numero: 3,
    nom: "EXÉCUTION — PLAINTE PÉNALE",
    periode: "Lundi 2 février 2026",
    statut: "FAIT" as const,
    couleur: "cyan" as const,
    quoi: "Dépôt de plainte pénale. PRIORITÉ ABSOLUE.",
    pourquoi: [
      "Annoncé dans les deux lettres — ne pas le faire = perte totale de crédibilité",
      "Coût : 0€ — procédure gratuite",
      "Dimension pénale = pression maximale sur CC",
      "Permet une enquête officielle sur les circonstances du piratage",
      "Chaque jour de retard est un signal de faiblesse"
    ],
    comment: [
      "Plainte au commissariat ou directement au procureur",
      "Art. 323-1 CP : accès frauduleux au système",
      "Art. 314-1 CP : abus de confiance (transfert 28 sept sans accord)",
      "Fournir : emails, chronologie, preuves 2FA, captures d'écran page piratée"
    ],
    resultat: "Plainte déposée le 2 février. Art. 323-1, 323-3, 314-1 CP. 14 pièces jointes.",
    condition: "⚠️ NE PAS REPORTER — C'est la priorité n°1"
  },
  {
    numero: 3.5,
    nom: "SIGNALEMENTS ADMINISTRATIFS",
    periode: "2-7 février 2026",
    statut: "EN COURS" as const,
    couleur: "red" as const,
    quoi: "Ouvrir tous les fronts : DDPP, FINMA, contacts créateurs.",
    pourquoi: [
      "DDPP envoyé — Art. L442-1 C.com (clauses abusives B2B)",
      "FINMA : CC non enregistré alors qu'ils gèrent des fonds créateurs (violation LEFin)",
      "D'autres créateurs sont probablement liés à CC avec des contrats similaires",
      "Chaque front ouvert multiplie la pression et le coût pour CC"
    ],
    comment: [
      "✅ Signalement DDPP Bouches-du-Rhône envoyé",
      "Préparer signalement FINMA (formulaire contact)",
      "Identifier d'autres créateurs dans le portefeuille CC",
      "Documenter le profil Crunchbase/PitchBook de CC"
    ]
  },
  {
    numero: 4,
    nom: "AVOCAT SUISSE",
    periode: "3-7 février 2026",
    statut: "EN COURS" as const,
    couleur: "red" as const,
    quoi: "Trouver et mandater un avocat suisse spécialisé en droit des contrats / arbitrage ICC.",
    pourquoi: [
      "Contrat régi par le droit suisse — lettres depuis la France manquent de crédibilité",
      "Arbitrage ICC prévu à Genève — impossible sans représentation suisse",
      "Un nom sur du papier à en-tête suisse change la dynamique immédiatement",
      "CC sait que sans avocat suisse, nos menaces d'arbitrage sont théoriques"
    ],
    comment: [
      "Chercher un avocat à Genève spécialisé litiges commerciaux",
      "Consultation initiale pour évaluer le dossier",
      "Budget à prévoir : consultation ~500-1500 CHF",
      "Même une lettre d'avocat suisse suffit à changer l'équation"
    ],
    condition: "INDISPENSABLE avant toute escalade vers l'arbitrage"
  },
  {
    numero: 5,
    nom: "COMMUNICATION PUBLIQUE — ORIGINES MEDIA",
    periode: "Semaine du 9 février 2026",
    statut: "EN RÉSERVE" as const,
    couleur: "purple" as const,
    quoi: "Article éditorial sur Origines Media (respectant Clause 10 confidentialité).",
    pourquoi: [
      "Annoncé dans les deux lettres — obligation morale envers 1,2M d'abonnés",
      "Clause 10 vérifiée : on peut décrire les faits, pas citer le contrat verbatim",
      "Pression réputationnelle sur CC (+5-10% de chances qu'ils lâchent)",
      "Crédibilité : si on ne le fait pas, on perd tout pouvoir de négociation futur"
    ],
    comment: [
      "Article rédigé — ton factuel, journalistique, pas de diffamation",
      "Décrire les mécanismes contractuels en termes généraux (pas de citation verbatim)",
      "Nommer Copyright Capital SA (faits publics)",
      "PUBLIER APRÈS la plainte pénale et le mandat d'avocat suisse"
    ],
    condition: "⚠️ APRÈS plainte pénale déposée ET avocat suisse contacté. Pas avant."
  },
  {
    numero: 6,
    nom: "SECOND DÉLAI — RÉPARATION",
    periode: "~15 février 2026",
    statut: "PLANIFIÉ" as const,
    couleur: "purple" as const,
    quoi: "Constater la position de CC sur la réparation du préjudice.",
    pourquoi: [
      "Délai de 30 jours fixé dans la lettre du 16 janvier",
      "CC devait prendre position sur notre contre-créance (+1,2M€)",
      "L'absence de position = refus de négocier = arbitrage"
    ],
    comment: [
      "Vérifier si CC a pris position par écrit",
      "Si proposition insuffisante : refuser et maintenir nos demandes",
      "Si rien : constater et préparer la procédure arbitrale",
      "L'avocat suisse doit être opérationnel à cette date"
    ]
  },
  {
    numero: 7,
    nom: "ARBITRAGE ICC",
    periode: "Mars 2026+",
    statut: "OBJECTIF" as const,
    couleur: "emerald" as const,
    quoi: "Si nécessaire : procédure arbitrale en Suisse (Clause 14 du contrat).",
    pourquoi: [
      "Dernier recours si CC refuse toute négociation raisonnable",
      "Notre contre-créance (+1,2M€) >> leur créance (142k€)",
      "Espérance mathématique NÉGATIVE pour CC : environ -360K€",
      "Probabilité victoire totale CC : 1,7% seulement",
      "Clause 14.8 : loser pays — risque financier énorme pour CC"
    ],
    comment: [
      "Avocat suisse spécialisé OBLIGATOIRE",
      "Préparer le dossier complet avec toutes les preuves",
      "Invoquer Art. 82 CO (exception d'inexécution)",
      "Invoquer Art. 97 CO (responsabilité pour négligence)",
      "Invoquer Art. 100 CO (nullité clause exonératoire)",
      "Invoquer Art. 2 CC (abus de droit sur BCO)",
      "Demander compensation intégrale + dommages"
    ],
    conditionsMin: [
      "Annulation complète de la dette restante (~142k€)",
      "Compensation pour préjudice Oye (800k€ - 1,3M€)",
      "Transfert de tous les actifs restants (Buzzly, VoyagerLoin)",
      "Quitus mutuel"
    ],
    leviers: [
      "Email Meta 27/08 : recommandation 2FA → preuve que 2FA n'était pas actif",
      "Gmail perso (jmayorkas2@gmail.com) pour actif >1M€ → négligence organisationnelle",
      "Page piratée existe encore (ID 100089751341306) → contredit 'no evidence'",
      "Meta affiche CC comme 'responsable' de la page (capture Buzzly 29/12)",
      "5+ mois d'inaction documentée",
      "Transfert illégal du 28 sept 2024 : dépassement du mandat",
      "Séquestre refusé (14/11) → mauvaise foi",
      "Remboursement 150K€ refusé (oct 2024) → CC voulait garder le contrôle",
      "RDV technique annulé (23/12) → mauvaise foi",
      "Synthèse des 9 experts : verdict unanime contre CC"
    ]
  }
];

export const arbreDecision = [
  {
    emoji: "🔇",
    si: "CC maintient le silence après le 15 février",
    alors: "Plainte pénale déjà déposée. Avocat suisse lance la procédure arbitrale. Article Origines Media publié. Maximum de pression."
  },
  {
    emoji: "📧",
    si: "CC répond agressivement / menace l'arbitrage",
    alors: "Parfait. Notre dossier est plus fort que le leur. Contre-créance +1,2M€ vs 142K€. Espérance arbitrage = -360K€ pour CC. Laisser l'avocat suisse répondre."
  },
  {
    emoji: "💰",
    si: "CC propose de négocier",
    alors: "Écouter. Exiger le transfert immédiat de Buzzly/VoyagerLoin comme preuve de bonne foi. Conditions minimales non négociables. Tout par écrit."
  },
  {
    emoji: "📄",
    si: "CC fournit les documents demandés (rapport, logs)",
    alors: "Analyser. Vérifier la cohérence avec nos preuves existantes. Maintenir la demande de réparation — les documents ne compensent pas le préjudice."
  },
  {
    emoji: "⚔️",
    si: "CC lance l'arbitrage en premier",
    alors: "Contre-créance +1,2M€. Art. 82 CO + Art. 97 CO + Art. 100 CO + Art. 2 CC. Probabilité victoire totale CC = 1,7%. Ils se tirent une balle dans le pied."
  },
  {
    emoji: "🤝",
    si: "CC accepte nos conditions minimales",
    alors: "Accord écrit immédiat. Vérifier exécution point par point. Quitus mutuel UNIQUEMENT après réception de tous les fonds et actifs."
  }
];

export const journalBord = [
  {
    date: "2 fév 2026",
    heure: "—",
    evenement: "PLAINTE PÉNALE DÉPOSÉE — Art. 323-1 (accès frauduleux), Art. 323-3 (modification données), Art. 314-1 CP (abus de confiance). 14 pièces jointes. Tribunal Judiciaire de Marseille.",
    decision: "Premier acte concret. Ne plus jamais écrire à CC directement."
  },
  {
    date: "2 fév 2026",
    heure: "—",
    evenement: "SIGNALEMENT DDPP ENVOYÉ — Art. L442-1 Code de commerce. BCO pour 1$, pénalités 630K€, clause confidentialité muselante, arbitrage ICC prohibitif. Signale que d'autres créateurs pourraient être touchés.",
    decision: "Front administratif ouvert. Préparer signalement FINMA."
  },
  {
    date: "2 fév 2026",
    heure: "—",
    evenement: "DÉCOUVERTE FINMA — Copyright Capital NON ENREGISTRÉ dans les registres FINMA. CC fournit 'upfront capital funding to content creators' (Crunchbase) mais opère sans licence. Violation potentielle LEFin.",
    decision: "Arme nucléaire. Signaler dès cette semaine."
  },
  {
    date: "31 jan 2026",
    heure: "—",
    evenement: "ANALYSE LETTRE CC 26 JANVIER — BCO exercé pour 1$, 630K€ pénalités, insinuation piratage ADN, exigence renonciation droits moraux (impossible Art. L121-1 CPI). Erreurs juridiques grossières identifiées.",
    decision: "Cette lettre est une opportunité. Intégrée dans la plainte pénale comme pièce à conviction du schéma d'appropriation."
  },
  {
    date: "30 jan 2026",
    heure: "—",
    evenement: "DEUXIÈME LETTRE ENVOYÉE (FR + EN) — Renforcement juridique complet. Art. 82, 97, 100 CO + Art. 2 CC. Table du préjudice. Annonce plainte pénale et communication publique via Origines Media.",
    decision: "Phase d'exécution. Plainte pénale lundi 2 février. Avocat suisse cette semaine. Article APRÈS ces deux actions."
  },
  {
    date: "30 jan 2026",
    heure: "—",
    evenement: "CLAUSE 10 CONFIDENTIALITÉ VÉRIFIÉE — Le contrat interdit de citer les clauses verbatim publiquement. Mais les faits (piratage, porno, Gmail, inaction) peuvent être publiés. Les mécanismes contractuels peuvent être décrits en termes généraux.",
    decision: "Article Origines Media faisable en respectant Clause 10. Ne pas citer le contrat verbatim."
  },
  {
    date: "30 jan 2026",
    heure: "—",
    evenement: "ANALYSE PROBABILISTE COMPLÈTE — P(CC lâche avant arbitrage) = 18% (lettre seule) à 47% (tous vecteurs). Espérance arbitrage CC = -360K€. Victoire totale CC = 1,7%. Facteur dominant : irrationalité de CC (sunk cost, ego, peur du précédent).",
    decision: "Le dossier est fort. L'exécution est lente. Passer aux actes maintenant."
  },
  {
    date: "30 jan 2026",
    heure: "—",
    evenement: "AUTO-CRITIQUE STRATÉGIQUE — Le timing est trop lent. Pas d'avocat suisse. Plainte annoncée mais pas déposée. Ratio paroles/actes déséquilibré. CC interprète le retard comme de l'hésitation.",
    decision: "Correction immédiate : plainte lundi, avocat suisse cette semaine, plus de lettres à CC."
  },
  {
    date: "~31 jan 2026",
    heure: "—",
    evenement: "PREMIER DÉLAI EXPIRÉ — CC n'a fourni aucun document, n'a transféré aucun actif. Silence total depuis le 12 janvier. CC EN DÉFAUT.",
    decision: "Constater le défaut. Ne pas envoyer de troisième lettre. Agir."
  },
  {
    date: "16 jan 2026",
    heure: "10h00",
    evenement: "LETTRE OFFENSIVE ENVOYÉE — Mise en demeure complète avec contre-créance +1,2M€, délais 15j/30j, conséquences annoncées.",
    decision: "Phase d'observation jusqu'au 31 janvier."
  },
  {
    date: "15 jan 2026",
    heure: "23h00",
    evenement: "Finalisation lettre avec synthèse des 9 experts. Ajout Art. 314-1 CP (abus de confiance) et concept de 'double appropriation'.",
    decision: "Lettre prête. Envoi demain matin."
  },
  {
    date: "12 jan 2026",
    heure: "16h40",
    evenement: "Email Martin Febvre (CC) — Demande paiement 6 000€ + relevés. CC IGNORE notre lettre du 19/12 et l'Art. 82 CO.",
    decision: "Ne pas répondre. Preuve supplémentaire de leur mauvaise foi."
  },
  {
    date: "13 jan 2026",
    heure: "00h00",
    evenement: "Délai de réponse complète de CC EXPIRÉ. Aucun document fourni, aucune réponse aux questions.",
    decision: "Constater le défaut dans la lettre offensive du 16 janvier."
  },
  {
    date: "2 jan 2026",
    heure: "01h00",
    evenement: "Mise à jour War Room v4.3 — Documentation complète. Pattern confirmé : CC refuse systématiquement toute solution collaborative.",
    decision: "Continuer la préparation de la lettre offensive."
  }
];
