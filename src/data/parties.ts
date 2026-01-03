export const parties = {
  adn: {
    name: "ADN Production SAS",
    type: "SAS française",
    siren: "981 012 917 R.C.S.",
    address: "40 Avenue Saint-Antoine, 13015 Marseille",
    team: [
      { name: "Alexandre Quilghini", alias: "Alex", role: "Président", key: true, email: "alex@origines.media" },
      { name: "Jérôme Cristaldi", role: "Directeur Général", key: true, email: "jerome@origines.media" },
      { name: "Alexis Chavetnoir", role: "Co-fondateur / Collaborateur", key: false, email: "alexis@origines.media" }
    ]
  },
  cc: {
    name: "Copyright Capital SA",
    type: "SA suisse",
    registration: "CHE-368.989.668",
    address: "Rue du Nant 8, 1207 Genève, Suisse",
    team: [
      { name: "Jack Ojalvo", role: "Chairman (Président)", key: true, email: "jack@copyrightcapital.com" },
      { name: "Jonathan Mayorkas", role: "Associé / Co-fondateur", key: true, email: "jonathan@copyrightcapital.com", emailPerso: "jmayorkas2@gmail.com", note: "Gmail perso utilisé comme Super Admin" },
      { name: "Joel Cooper", role: "Director of DRM & Operations", key: true, email: "joelcooper@copyrightcapital.com", emailPerso: "joelcoopercinema@gmail.com", note: "Gmail perso utilisé pour contacts Meta — 2ème Gmail perso découvert 31/10" },
      { name: "Emre Kumet", role: "Head of Legal", key: true, email: "emrekumet@copyrightcapital.com" },
      { name: "Frédéric Porcherot", role: "Recouvrement", key: false }
    ]
  },
  meta: {
    name: "Meta (Facebook)",
    contacts: [
      { name: "Tom Rouyrès", email: "tomrouyres@meta.com", note: "Contact initial d'Alex" },
      { name: "Cheick Camara", email: "camaracheick@meta.com", role: "Expert Média, Partenariats", note: "A géré le dossier piratage" }
    ],
    failedContacts: ["clementine@lists", "deletion-eng@lists"]
  }
};
