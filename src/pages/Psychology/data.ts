export interface PhaseEvent {
  date: string;
  event: string;
  detail: string;
  meaning: string;
  critical: boolean;
}

export interface PsychologyPhase {
  phase: string;
  period: string;
  color: string;
  events: PhaseEvent[];
  synthesis: string;
}

export interface Behavior {
  behavior: string;
  meaning: string;
  period: 'setup' | 'operation' | 'crisis' | 'negotiation' | 'escalation' | 'all';
}

export interface Individual {
  name: string;
  role: string;
  color: string;
  behaviors: Behavior[];
  profile: string;
  weakness: string;
  contradiction: string;
  howToHandle: string;
}

export interface Pattern {
  icon: string;
  pattern: string;
  examples: string;
  period: string;
}

export interface Weakness {
  weakness: string;
  exploit: string;
}

export interface PsychologyCCData {
  lastUpdate: string;
  phases: PsychologyPhase[];
  individuals: Individual[];
  patterns: Pattern[];
  weaknesses: Weakness[];
  theyThink: string;
  theyDontRealize: string[];
  theirFear: string;
  strategicConclusion: {
    theirApparentStrength: string;
    theirRealWeakness: string;
    ourApproach: string;
  };
  keyReminder: {
    title: string;
    text: string;
    subtext: string;
  };
}

export const psychologyCCData: PsychologyCCData = {
  lastUpdate: "29 décembre 2025",

  phases: [
    {
      phase: "PHASE 1 — Mise en place du contrat et CRISE INITIALE",
      period: "Septembre - Octobre 2024",
      color: "blue",
      events: [
        {
          date: "28 sept 2024",
          event: "Transfert des pages vers le BM de CC",
          detail: "ADN n'était PAS d'accord. CC a insisté/imposé ce transfert.",
          meaning: "Comportement autoritaire, prise de contrôle unilatérale",
          critical: false
        },
        {
          date: "14-16 oct 2024",
          event: "Accès retirés 3× sans préavis",
          detail: "CC a retiré les accès d'ADN à plusieurs reprises sans prévenir. Jonathan s'engage à ne plus le faire, puis le refait JUSTE APRÈS l'appel.",
          meaning: "Mensonge documenté, promesses non tenues dès le début",
          critical: true
        },
        {
          date: "16 oct 2024 - 21:46",
          event: "Pages TRANSFÉRÉES dans le BM de CC sans consentement",
          detail: "Pas juste un retrait d'accès — CC a TRANSFÉRÉ les pages d'ADN dans leur propre Business Manager sans avertissement.",
          meaning: "Appropriation unilatérale des actifs — comportement documenté",
          critical: true
        },
        {
          date: "14 oct 2024",
          event: "Alex propose de rembourser 150k€ sous 45 jours",
          detail: "Proposition raisonnable pour sortir proprement du deal.",
          meaning: "ADN cherche une solution amiable",
          critical: false
        },
        {
          date: "16 oct 2024 - 17:35",
          event: "Emre répond : 'obviously not acceptable'",
          detail: "Refuse catégoriquement la proposition de remboursement.",
          meaning: "CC refuse la sortie amiable proposée",
          critical: true
        },
        {
          date: "17 oct 2024 - 13:32",
          event: "Ultimatum de Jack : remboursement EN 1 JOUR",
          detail: "Jack exige le remboursement total 'by end of business day tomorrow'. Délai objectivement impossible à respecter.",
          meaning: "Ultimatum documenté — délai impossible après refus des 45 jours",
          critical: true
        },
        {
          date: "17 oct 2024 - 13:32",
          event: "Propos de Jack : 'we can live with it'",
          detail: "Jack écrit: 'What may be the worst option for you, is something that is just not ideal that we can live with for us.' Et: 'we will become the rightful owner of all of your content'.",
          meaning: "Propos documentés révélant une acceptation explicite du scénario de prise de contrôle",
          critical: true
        },
        {
          date: "17 oct 2024 - 13:32",
          event: "Jack menace de poursuivre Alex personnellement",
          detail: "'we will sue you (both the company and you personally)'",
          meaning: "Menace documentée d'action personnelle",
          critical: false
        },
        {
          date: "21 oct 2024",
          event: "Jonathan remet les accès après meeting",
          detail: "Demande si Alex a 'toujours des soucis'.",
          meaning: "Retour au calme superficiel après la crise",
          critical: false
        },
        {
          date: "30 oct 2024 - 12:28",
          event: "Emre demande si 'satisfied with the current status'",
          detail: "Après tout ce chaos, Emre demande si tout va bien côté légal.",
          meaning: "Attitude documentée — fait comme si rien ne s'était passé",
          critical: false
        }
      ],
      synthesis: "Octobre 2024 révèle des comportements documentés de CC : propos de Jack acceptant explicitement le scénario de prise de contrôle des actifs. L'ultimatum d'un jour était objectivement impossible après avoir refusé 45 jours. Le refus du remboursement 150k€ montre qu'ils voulaient garder le CONTRÔLE, pas seulement l'argent."
    },
    {
      phase: "PHASE 2 — Période opérationnelle",
      period: "Novembre 2024 - Juillet 2025",
      color: "slate",
      events: [
        {
          date: "Découvert août 2025",
          event: "Gmail personnel comme Super Admin",
          detail: "jmayorkas2@gmail.com utilisé pour gérer des actifs valant 1M€+",
          meaning: "Éléments pouvant constituer une négligence technique",
          critical: true
        },
        {
          date: "Continu",
          event: "Aucun monitoring des actifs sous gestion",
          detail: "CC ne surveille pas activement les pages dont ils ont le contrôle exclusif.",
          meaning: "Gestionnaire passif malgré le contrôle total",
          critical: false
        }
      ],
      synthesis: "Période de contrôle silencieux. CC a le contrôle exclusif mais ne monitore pas les actifs. L'utilisation d'un Gmail personnel pour gérer des actifs professionnels constitue un élément de négligence technique."
    },
    {
      phase: "PHASE 3 — Piratage et gestion de crise",
      period: "Août - Septembre 2025",
      color: "red",
      events: [
        {
          date: "Fin juillet 2025",
          event: "CC n'a PAS détecté le piratage",
          detail: "C'est Alex (ADN) qui a découvert et signalé le piratage.",
          meaning: "Absence de monitoring documentée",
          critical: true
        },
        {
          date: "27 août 2025",
          event: "Meta recommande d'ACTIVER le 2FA à Jonathan",
          detail: "Cheick Camara (Meta) écrit explicitement de l'activer.",
          meaning: "Recommandation documentée — suggère fortement que le 2FA n'était pas actif",
          critical: true
        },
        {
          date: "27 août 2025",
          event: "Jonathan change son mot de passe, ne mentionne pas le 2FA",
          detail: "Sa seule action documentée après la recommandation Meta.",
          meaning: "Pas de mention du 2FA dans sa réponse",
          critical: false
        },
        {
          date: "26-29 août 2025",
          event: "Confusion sur les Page ID",
          detail: "Personne ne semble avoir le bon ID. Meta cherche une page qui n'est pas la bonne.",
          meaning: "Désorganisation documentée",
          critical: false
        },
        {
          date: "8 sept 2025",
          event: "FIN de la boucle Meta sans résolution",
          detail: "Plus aucune action documentée après cette date malgré la page toujours sous contrôle de tiers.",
          meaning: "Abandon des démarches documenté",
          critical: true
        },
        {
          date: "Sept - Déc 2025",
          event: "4+ mois sans action documentée",
          detail: "Aucune démarche documentée pour récupérer la page.",
          meaning: "Inaction prolongée",
          critical: true
        }
      ],
      synthesis: "Face à la crise, les comportements documentés de CC révèlent une passivité : ils ne détectent pas le problème, ne suivent pas les recommandations de sécurité de Meta, abandonnent les démarches de récupération."
    },
    {
      phase: "PHASE 4 — Tentative de dialogue",
      period: "Octobre - Novembre 2025",
      color: "amber",
      events: [
        {
          date: "31 oct 2025",
          event: "VISIO Jérôme (DG) ↔ CC",
          detail: "Première réunion de négociation directe par vidéo entre Jérôme Cristaldi (Directeur Général ADN) et les représentants de CC. Jérôme propose un compte séquestre comme solution de protection mutuelle.",
          meaning: "Ouverture apparente au dialogue, ADN prend l'initiative via son DG",
          critical: true
        },
        {
          date: "14 nov 2025",
          event: "Jack : \"Pas besoin de legal\"",
          detail: "Jack Ojalvo affirme vouloir régler ça entre partenaires.",
          meaning: "Préférence documentée pour l'informel",
          critical: false
        },
        {
          date: "31 oct 2025",
          event: "Jack refuse le compte séquestre proposé par Jérôme (DG)",
          detail: "Lors de la visio du 31 octobre 2025, Jérôme Cristaldi (Directeur Général) propose un compte séquestre comme solution de protection mutuelle. Jack Ojalvo rejette immédiatement cette proposition. CC refuse toute mesure qui limiterait leur contrôle total.",
          meaning: "Pattern confirmé: CC refuse systématiquement les solutions collaboratives (comme le remboursement de 150k€ en oct 2024). Préfère garder le contrôle unilatéral plutôt qu'une protection mutuelle.",
          critical: true
        },
        {
          date: "14 nov 2025",
          event: "Jack valide le transfert vers BM d'ADN",
          detail: "Validation ORALE pendant la réunion (documentée dans le CR).",
          meaning: "Engagement oral documenté, jamais suivi d'effet",
          critical: true
        },
        {
          date: "14 nov 2025",
          event: "Jack propose ses \"crédits Meta\"",
          detail: "Dit qu'il est prêt à utiliser ses contacts Meta.",
          meaning: "Promesse documentée, jamais tenue",
          critical: false
        },
        {
          date: "14 nov 2025",
          event: "Jonathan affirme que le 2FA était \"toujours en place\"",
          detail: "Affirmation pendant la réunion, documentée dans le CR.",
          meaning: "Contradiction avec la recommandation Meta du 27/08",
          critical: true
        },
        {
          date: "14 nov 2025 - 19:08",
          event: "Jonathan : \"si vous souhaitez qu'on essaye de notre côté\"",
          detail: "Propos par email suggérant que CC n'avait PAS essayé de récupérer la page.",
          meaning: "Aveu documenté de passivité après 3,5 mois",
          critical: true
        },
        {
          date: "14 nov 2025",
          event: "Jack ne répond PAS au compte-rendu",
          detail: "Le CR demande confirmation. Jack = silence.",
          meaning: "Absence de réponse documentée",
          critical: false
        },
        {
          date: "14 nov 2025 - 19:08",
          event: "Jonathan répond sur 1 SEUL point, ignore le reste",
          detail: "\"PS - ma réponse ne concerne que ce point\"",
          meaning: "Absence de contestation sur les autres points (note : le silence ne vaut pas acceptation en droit suisse)",
          critical: true
        }
      ],
      synthesis: "Phase de promesses non tenues documentées. Jack dit ce qu'on veut entendre, Jonathan fait des aveux involontaires par écrit. Rien n'est suivi d'effet. L'absence de contestation du CR est un argument, mais ne vaut pas acceptation juridique automatique."
    },
    {
      phase: "PHASE 5 — Escalade et intimidation",
      period: "Décembre 2025",
      color: "red",
      events: [
        {
          date: "12 déc 2025",
          event: "Frédéric envoie une injonction de payer",
          detail: "Demande de paiement formelle.",
          meaning: "Passage en mode recouvrement",
          critical: false
        },
        {
          date: "19 déc 2025",
          event: "Lettre ADN — Mise en demeure Art. 82 CO",
          detail: "Alex formalise la position juridique d'ADN.",
          meaning: "ADN reprend l'initiative",
          critical: false
        },
        {
          date: "~20-23 déc 2025",
          event: "Jonathan propose un RDV technique",
          detail: "Proposition de réunion pour discuter.",
          meaning: "Tentative de dialogue",
          critical: false
        },
        {
          date: "23 déc 2025",
          event: "Jonathan ANNULE le RDV après réception de la lettre",
          detail: "Annulation immédiate après avoir lu la mise en demeure.",
          meaning: "Comportement documenté — annulation suite à formalisation",
          critical: true
        },
        {
          date: "26 déc 2025",
          event: "Lettre CC agressive (Emre Kumet)",
          detail: "Réponse en 4 jours PENDANT NOËL. Ton menaçant, ultimatum 5 jours.",
          meaning: "Réponse rapide documentée + intimidation juridique",
          critical: true
        },
        {
          date: "26 déc 2025",
          event: "Affirmations dans la lettre contredites par des documents",
          detail: "\"2FA always in place\", \"no evidence of compromise\", \"ADN had the Page ID\"",
          meaning: "Affirmations contredites par les emails du dossier",
          critical: true
        },
        {
          date: "26 déc 2025",
          event: "Refuse le transfert des actifs",
          detail: "Dit que ça \"ne repose sur aucun élément du contrat\".",
          meaning: "Contradiction avec l'accord oral de Jack le 14/11",
          critical: false
        },
        {
          date: "26 déc 2025",
          event: "Ne répond PAS aux questions du 19/12",
          detail: "Pas de rapport, pas de logs, pas d'échanges Meta.",
          meaning: "Absence de réponse documentée",
          critical: true
        }
      ],
      synthesis: "Face à la formalisation juridique, CC répond rapidement avec des affirmations contredites par les documents du dossier. Intimidation plutôt que réponses substantielles. Absence de réponse aux questions factuelles."
    }
  ],

  individuals: [
    {
      name: "JACK OJALVO",
      role: "Chairman (Président)",
      color: "amber",
      behaviors: [
        {
          behavior: "Impose le transfert vers leur BM (sept 2024)",
          meaning: "Autoritaire, prend le contrôle unilatéralement",
          period: "setup"
        },
        {
          behavior: "Refuse le remboursement de 150k€ (oct 2024)",
          meaning: "Refuse la sortie amiable proposée",
          period: "setup"
        },
        {
          behavior: "Ultimatum : remboursement en 1 JOUR (17/10/24)",
          meaning: "Délai objectivement impossible après refus des 45 jours",
          period: "setup"
        },
        {
          behavior: "\"What may be worst for you, we can live with\" (17/10/24)",
          meaning: "Propos documentés acceptant explicitement le scénario défavorable à ADN",
          period: "setup"
        },
        {
          behavior: "\"We will become rightful owner of all your content\" (17/10/24)",
          meaning: "Propos documentés décrivant la prise de possession",
          period: "setup"
        },
        {
          behavior: "Menace de poursuivre Alex personnellement (17/10/24)",
          meaning: "Menace documentée",
          period: "setup"
        },
        {
          behavior: "\"Pas besoin de legal\" (14/11/25)",
          meaning: "Préfère l'informel",
          period: "negotiation"
        },
        {
          behavior: "Refuse le compte séquestre proposé par Jérôme (DG) lors de la visio du 31/10/25",
          meaning: "Rejette immédiatement une solution de protection mutuelle. Pattern: préfère contrôle unilatéral (comme refus des 150k€ en oct 2024)",
          period: "negotiation"
        },
        {
          behavior: "Valide le transfert BM oralement",
          meaning: "Promet sans s'engager par écrit",
          period: "negotiation"
        },
        {
          behavior: "Propose ses \"crédits Meta\"",
          meaning: "Promesse documentée, jamais tenue",
          period: "negotiation"
        },
        {
          behavior: "Ne répond PAS au compte-rendu",
          meaning: "Absence de réponse documentée",
          period: "negotiation"
        },
        {
          behavior: "Disparaît quand ça devient juridique",
          meaning: "Délègue les problèmes à Emre",
          period: "escalation"
        }
      ],
      profile: "Propos révélateurs — Sa lettre d'oct 2024 documente une ACCEPTATION EXPLICITE du scénario de prise de contrôle des actifs. L'ultimatum d'un jour était objectivement impossible. Dit 'on peut vivre avec' devenir propriétaire des contenus. Promet ensuite ce qu'on veut entendre, puis disparaît.",
      weakness: "Sa propre lettre du 17/10/24 documente son acceptation du scénario de prise de contrôle. Évite les traces écrites engageantes.",
      contradiction: "Octobre 2024 : exige remboursement en 1 jour (impossible) tout en disant vouloir 'résoudre'. Novembre 2025 : valide oralement le transfert des actifs. Décembre 2025 : son équipe refuse par écrit.",
      howToHandle: "Sa lettre du 17/10/24 est notre pièce maîtresse. Ne JAMAIS compter sur ses promesses orales. Tout par écrit. Le mettre face à ses propres mots ('we can live with it') le fera se retirer du dossier."
    },
    {
      name: "JONATHAN MAYORKAS",
      role: "Associé / Co-fondateur",
      color: "purple",
      behaviors: [
        {
          behavior: "S'engage à ne plus retirer les accès → les retire JUSTE APRÈS l'appel (oct 2024)",
          meaning: "Mensonge documenté dès le début",
          period: "setup"
        },
        {
          behavior: "Transfère les pages dans leur BM sans prévenir (16/10/24)",
          meaning: "Appropriation unilatérale des actifs",
          period: "setup"
        },
        {
          behavior: "Gmail perso comme Super Admin",
          meaning: "Élément de négligence technique",
          period: "operation"
        },
        {
          behavior: "Ne suit pas la recommandation 2FA de Meta",
          meaning: "Recommandation ignorée documentée",
          period: "crisis"
        },
        {
          behavior: "Affirme que le 2FA était \"toujours en place\" (14/11/25)",
          meaning: "Affirmation contredite par la recommandation Meta",
          period: "negotiation"
        },
        {
          behavior: "\"si vous souhaitez qu'on essaye de notre côté\"",
          meaning: "Aveu documenté de 3,5 mois de passivité",
          period: "negotiation"
        },
        {
          behavior: "\"PS - ma réponse ne concerne que ce point\"",
          meaning: "Prudent, ne conteste pas le reste",
          period: "negotiation"
        },
        {
          behavior: "Propose puis ANNULE le RDV technique (déc 2025)",
          meaning: "Comportement documenté suite à la mise en demeure",
          period: "escalation"
        }
      ],
      profile: "Pattern documenté de mensonges puis de négligence. Dès octobre 2024, promet puis fait le contraire dans l'heure. Responsable technique qui ne maîtrise pas son sujet. Fait des aveux involontaires sous pression.",
      weakness: "Son pattern de mensonges est DOCUMENTÉ (oct 2024). Quand il parle/écrit, il se piège.",
      contradiction: "Octobre 2024 : promet de ne plus retirer les accès → le refait immédiatement. Novembre 2025 : affirme que le 2FA était 'toujours en place' alors que Meta lui a recommandé de l'ACTIVER.",
      howToHandle: "Mensonges documentés depuis octobre 2024. Le laisser s'expliquer — il fait des aveux sans s'en rendre compte. Ne pas l'interrompre. Documenter tout."
    },
    {
      name: "EMRE KUMET",
      role: "Head of Legal",
      color: "red",
      behaviors: [
        {
          behavior: "Refuse la proposition 150k€ : 'obviously not acceptable' (16/10/24)",
          meaning: "Ferme la porte de sortie amiable",
          period: "setup"
        },
        {
          behavior: "Demande si 'satisfied with current status' (30/10/24)",
          meaning: "Attitude documentée après le chaos",
          period: "setup"
        },
        {
          behavior: "Répond en 4 jours PENDANT NOËL (déc 2025)",
          meaning: "Réactif, besoin de contrôler le narratif",
          period: "escalation"
        },
        {
          behavior: "Ton agressif, menaces Clause 6+7",
          meaning: "Intimidation juridique documentée",
          period: "escalation"
        },
        {
          behavior: "Affirme \"2FA always in place\"",
          meaning: "Affirmation contredite par l'email Meta du 27/08",
          period: "escalation"
        },
        {
          behavior: "Affirme \"no evidence of compromise\"",
          meaning: "Affirmation contredite — la page existait au 03/09 sous contrôle de tiers",
          period: "escalation"
        },
        {
          behavior: "Affirme \"ADN had the Page ID\"",
          meaning: "Contredit par email du 26/08: \"nous n'avons pas l'ID\"",
          period: "escalation"
        },
        {
          behavior: "Ne répond PAS aux questions du 19/12",
          meaning: "Absence de réponse documentée",
          period: "escalation"
        }
      ],
      profile: "Refuse les solutions amiables, puis demande si 'tout va bien' après le chaos. Intimidation juridique basée sur des affirmations contredites par les documents. Réactif, pas stratégique.",
      weakness: "Ses affirmations sont contredites par des documents. Sous pression, fait des erreurs factuelles.",
      contradiction: "30/10/24 : demande si on est 'satisfied' après avoir refusé la sortie amiable et provoqué le chaos. Déc 2025 : affirme 'no evidence of compromise' alors que la page existait au 03/09 sous contrôle de tiers.",
      howToHandle: "Ne pas se laisser intimider par le ton agressif. Ses affirmations contredites sont son point faible. Répondre froidement, factuellement, brièvement."
    },
    {
      name: "FRÉDÉRIC PORCHEROT",
      role: "Recouvrement",
      color: "slate",
      behaviors: [
        {
          behavior: "Envoie une injonction de payer (12/12)",
          meaning: "Rôle de collecteur, pas décisionnaire",
          period: "escalation"
        }
      ],
      profile: "EXÉCUTANT — Fait le travail de recouvrement. Pas un décisionnaire.",
      weakness: "N'est pas la bonne cible. Les décisions viennent de Jack/Jonathan/Emre.",
      contradiction: "",
      howToHandle: "Ignorer ou réponse minimale. Ce n'est pas un décisionnaire."
    }
  ],

  patterns: [
    {
      icon: "👊",
      pattern: "CONTRÔLE UNILATÉRAL",
      examples: "Transfert forcé vers leur BM. Accès retirés 3× sans préavis. Refus de laisser ADN sortir du deal.",
      period: "setup"
    },
    {
      icon: "🤝❌",
      pattern: "PROMESSES NON TENUES",
      examples: "Transfert BM validé par Jack → jamais fait. Crédits Meta promis → jamais utilisés. RDV technique proposé → annulé.",
      period: "all"
    },
    {
      icon: "🔇",
      pattern: "SILENCE SÉLECTIF",
      examples: "Mails ADN sans réponse (oct 2024). CR non confirmé. Questions du 19/12 sans réponse. Documents jamais fournis.",
      period: "all"
    },
    {
      icon: "🔓",
      pattern: "ÉLÉMENTS DE NÉGLIGENCE TECHNIQUE",
      examples: "Gmail perso comme Super Admin. Recommandation 2FA ignorée. Piratage non détecté. Confusion sur les Page ID.",
      period: "operation"
    },
    {
      icon: "🏃",
      pattern: "ABANDON DE RESPONSABILITÉ",
      examples: "4+ mois sans action de récupération documentée. \"Si vous souhaitez qu'on essaye de notre côté\" (3,5 mois après).",
      period: "crisis"
    },
    {
      icon: "😰",
      pattern: "COMPORTEMENT SOUS PRESSION",
      examples: "Réponse en 4 jours pendant Noël. RDV annulé après mise en demeure. Affirmations contredites dans la lettre.",
      period: "escalation"
    },
    {
      icon: "⚖️",
      pattern: "INTIMIDATION JURIDIQUE",
      examples: "Menaces Clause 6+7. Ultimatum 5 jours. Ton agressif. Menace de poursuivre personnellement.",
      period: "all"
    },
    {
      icon: "🤥",
      pattern: "AFFIRMATIONS CONTREDITES",
      examples: "\"2FA always in place\" (contredit par recommandation Meta). \"No evidence\" (page existait au 03/09). \"ADN had the ID\" (email dit le contraire).",
      period: "escalation"
    },
    {
      icon: "🦈",
      pattern: "PROPOS DOCUMENTÉS — ACCEPTATION EXPLICITE",
      examples: "Jack 17/10/24: 'What may be worst for you, we can live with'. 'We will become rightful owner of all your content'. Ultimatum 1 jour impossible.",
      period: "setup"
    },
    {
      icon: "🪤",
      pattern: "ULTIMATUM OBJECTIVEMENT IMPOSSIBLE",
      examples: "Refus du remboursement 150k€ sous 45 jours + ultimatum d'un jour = délai impossible à respecter.",
      period: "setup"
    },
    {
      icon: "😏",
      pattern: "ATTITUDE DOCUMENTÉE",
      examples: "Emre 30/10/24: demande si 'satisfied with current status' après avoir refusé la sortie amiable et provoqué le chaos des accès.",
      period: "setup"
    }
  ],

  weaknesses: [
    {
      weakness: "LA LETTRE DE JACK DU 17/10/24 — PIÈCE MAÎTRESSE",
      exploit: "Il écrit NOIR SUR BLANC qu'il peut 'vivre avec' devenir propriétaire des contenus. Acceptation explicite documentée."
    },
    {
      weakness: "5 MOIS SANS ACTION DOCUMENTÉE POUR RÉCUPÉRER OYE",
      exploit: "Ils avaient le contrôle exclusif, ils ont perdu la page, aucune action de récupération documentée. Jack a promis d'utiliser ses 'crédits Meta' le 14/11 — jamais fait."
    },
    {
      weakness: "L'ultimatum d'un jour était objectivement IMPOSSIBLE",
      exploit: "Délai impossible après avoir refusé 45 jours = montre qu'ils ne cherchaient PAS une solution amiable."
    },
    {
      weakness: "Jonathan : mensonge documenté puis fait le contraire (oct 2024)",
      exploit: "Pattern documenté : promet de ne plus retirer les accès → le refait dans l'heure."
    },
    {
      weakness: "Ils ont refusé la sortie propre en oct 2024",
      exploit: "Document : Emre répond 'obviously not acceptable' à la proposition de 150k€."
    },
    {
      weakness: "Leurs promesses orales ne sont jamais tenues",
      exploit: "Tout demander par écrit — ils refuseront ou ne répondront pas."
    },
    {
      weakness: "Ils répondent vite sous pression",
      exploit: "Le silence les déstabilise — ils font des erreurs quand ils sont sous pression."
    },
    {
      weakness: "Ils font des aveux involontaires",
      exploit: "Les laisser parler/écrire — Jonathan s'est piégé le 14/11/25 et le 16/10/24."
    },
    {
      weakness: "Leurs affirmations sont contredites par des documents",
      exploit: "Garder les preuves pour le moment optimal (arbitrage ou négociation finale)."
    },
    {
      weakness: "Ils n'ont pas répondu aux questions du 19/12",
      exploit: "L'absence de réponse affaiblit leur position."
    },
    {
      weakness: "Le juridique (Emre) n'a pas vérifié ses sources",
      exploit: "Ses affirmations peuvent être contredites une par une par les documents."
    },
    {
      weakness: "Ils réagissent à la formalisation juridique",
      exploit: "La mise en demeure les a fait annuler le RDV technique — continuer dans cette voie."
    }
  ],

  theyThink: "On a envoyé une lettre agressive avec un ultimatum. Le contrat est de notre côté. Il va payer ou on déclenche les clauses punitives.",

  theyDontRealize: [
    "5 MOIS sans action documentée pour récupérer Oye — négligence aggravée chaque jour",
    "La lettre de Jack du 17/10/24 documente son acceptation explicite du scénario de prise de contrôle",
    "L'ultimatum d'un jour était objectivement impossible — documenté",
    "Leurs affirmations sont contredites par des documents du dossier",
    "Un arbitrage leur coûterait 150-300k€ pour récupérer 0€ d'un insolvable",
    "Leur propre associé a avoué par écrit leur passivité (14/11/25)",
    "Jonathan a menti sur les accès dès octobre 2024 — pattern documenté",
    "La page existait au 03/09 sous contrôle de tiers — leur \"no evidence\" est contredit",
    "L'exception d'inexécution (Art. 82 CO) est un argument juridique solide",
    "Chaque jour de silence de notre part = incertitude pour eux"
  ],

  theirFear: "Que cette histoire finisse en arbitrage où leurs négligences ET leurs propos documentés seront exposés devant un tribunal.",

  strategicConclusion: {
    theirApparentStrength: "Le contrat signé, les clauses punitives (6+7), le ton juridique agressif, leur statut de fonds d'investissement.",
    theirRealWeakness: "PROPOS DOCUMENTÉS de Jack (lettre 17/10/24), ultimatum impossible, mensonges documentés de Jonathan, éléments de négligence technique, affirmations contredites.",
    ourApproach: "Patience. Silence stratégique. Documentation rigoureuse. La lettre de Jack est notre pièce maîtresse — à utiliser au moment optimal."
  },

  keyReminder: {
    title: "ÉLÉMENT CLÉ À NE PAS OUBLIER",
    text: "En octobre 2024, ADN a proposé de rembourser l'intégralité des 150 000€ pour sortir du deal. CC A REFUSÉ (email Emre: \"obviously not acceptable\").",
    subtext: "Ils voulaient garder le contrôle des actifs, pas juste l'argent. Ce refus documenté montre que leur objectif n'était pas seulement financier."
  }
};
