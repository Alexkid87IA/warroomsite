export interface Person {
  name: string;
  role: string;
  emailPro: string;
  emailGmail: string;
  usage: string;
  discovered: string;
}

export interface LegalImplication {
  before: string;
  after: string;
  article: string;
  conclusion: string;
}

export interface ContactType {
  type: string;
  email?: string;
  replyTo?: string;
  contacts?: string[];
  value: string;
}

export interface RobotVsHuman {
  title: string;
  cc: ContactType;
  adn: ContactType;
  irony: string;
}

export interface GmailNegligenceData {
  title: string;
  discovery: string;
  impact: string;
  persons: Person[];
  legalImplication: LegalImplication;
  robotVsHuman: RobotVsHuman;
  questions: string[];
}

export const gmailNegligenceData: GmailNegligenceData = {
  title: "🚨 NÉGLIGENCE SYSTÉMATIQUE — Gmail personnels",
  discovery: "31 octobre 2025 — Jonathan transmet 'Doc ADN Oye' (suite à la visio avec Jérôme DG)",
  impact: "Transforme une 'erreur individuelle' en FAUTE ORGANISATIONNELLE",
  persons: [
    {
      name: "Jonathan Mayorkas",
      role: "Associate / Co-fondateur",
      emailPro: "jonathan@copyrightcapital.com",
      emailGmail: "jmayorkas2@gmail.com",
      usage: "Super Admin du Business Manager CC",
      discovered: "25 août 2025"
    },
    {
      name: "Joel Cooper",
      role: "Director of DRM & Operations",
      emailPro: "joelcooper@copyrightcapital.com",
      emailGmail: "joelcoopercinema@gmail.com",
      usage: "Contacts avec Meta pour la compromission",
      discovered: "31 octobre 2025 (Gmail perso révélé via docs transmis suite à la visio avec Jérôme DG)"
    }
  ],
  legalImplication: {
    before: "Erreur individuelle de Jonathan",
    after: "PRATIQUE SYSTÉMATIQUE = négligence organisationnelle",
    article: "Art. 100 CO — Faute grave",
    conclusion: "Plus difficile pour CC d'arguer une erreur isolée"
  },
  robotVsHuman: {
    title: "Qualité des contacts Meta",
    cc: {
      type: "🤖 Robot automatique",
      email: "advertise-noreply@support.facebook.com",
      replyTo: "noreply@facebookmail.com",
      value: "Template générique — AUCUNE valeur probante"
    },
    adn: {
      type: "👤 Vrais employés Meta",
      contacts: ["Tom Rouyrès (tomrouyres@meta.com)", "Cheick Camara (camaracheick@meta.com)"],
      value: "Analyse humaine spécifique au cas"
    },
    irony: "CC = 'fonds spécialisé actifs digitaux' mais n'a pas de vrais contacts Meta"
  },
  questions: [
    "Pourquoi ne nous avez-vous jamais mentionné Joel Cooper ?",
    "Pourquoi 2 de vos employés utilisent des Gmail perso pour gérer des actifs de 1M€+ ?",
    "Pourquoi n'avez-vous que des contacts automatiques chez Meta ?"
  ]
};
