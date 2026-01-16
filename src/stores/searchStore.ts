import { create } from 'zustand';
import { NAV_SECTIONS } from '../constants/navigation';
import { DATA } from '../data';

export interface SearchResult {
  id: string;
  type: 'page' | 'event' | 'person' | 'document' | 'amount' | 'date';
  title: string;
  description: string;
  path?: string;
  icon?: string;
  category: string;
}

interface SearchState {
  isOpen: boolean;
  query: string;
  results: SearchResult[];
  selectedIndex: number;
  open: () => void;
  close: () => void;
  toggle: () => void;
  setQuery: (query: string) => void;
  search: (query: string) => void;
  selectNext: () => void;
  selectPrev: () => void;
  getSelected: () => SearchResult | null;
}

// Build searchable index
const buildSearchIndex = (): SearchResult[] => {
  const index: SearchResult[] = [];

  // Add navigation pages
  NAV_SECTIONS.forEach((section) => {
    section.items.forEach((item) => {
      index.push({
        id: `page-${item.path}`,
        type: 'page',
        title: item.label,
        description: `Section ${section.label}`,
        path: item.path,
        category: 'Pages',
      });
    });
  });

  // Add key people
  DATA.parties.adn.team.forEach((person) => {
    index.push({
      id: `person-adn-${person.name}`,
      type: 'person',
      title: person.name,
      description: `${person.role} - ADN Production`,
      path: '/parties',
      category: 'Personnes',
    });
  });

  DATA.parties.cc.team.forEach((person) => {
    index.push({
      id: `person-cc-${person.name}`,
      type: 'person',
      title: person.name,
      description: `${person.role} - Copyright Capital${person.note ? ` (${person.note})` : ''}`,
      path: '/parties',
      category: 'Personnes',
    });
  });

  // Add key dates/events
  const keyEvents = [
    { date: '25 sept 2024', event: 'Email Mayorkas - Super Admin limité aux paiements', path: '/chronology' },
    { date: '28 sept 2024', event: 'Transfert illégal des pages vers BM de CC', path: '/chronology' },
    { date: '14 oct 2024', event: 'Email contestation transfert', path: '/chronology' },
    { date: '16 oct 2024', event: 'Email contestation - pages retirées du BM ADN', path: '/chronology' },
    { date: 'Juillet 2025', event: 'Piratage page Oye', path: '/oye-clarification' },
    { date: '27 août 2025', event: 'Email Meta - Cheick Camara recommande 2FA à Mayorkas', path: '/2fa' },
    { date: '14 nov 2025', event: 'Réunion visio avec CC', path: '/meeting-14nov' },
    { date: '19 déc 2025', event: 'Lettre ADN - Mise en demeure initiale', path: '/letters' },
    { date: '26 déc 2025', event: 'Réponse CC - Emre Kumet', path: '/letters' },
    { date: '12 jan 2026', event: 'Email Martin Febvre - Demande paiement ignorant Art. 82', path: '/encours' },
    { date: '16 jan 2026', event: 'Lettre offensive envoyée - Contre-créance +1,2M€', path: '/encours' },
    { date: '~31 jan 2026', event: 'DEADLINE - Documents + Transfert Buzzly/VoyagerLoin', path: '/encours' },
    { date: '~15 fév 2026', event: 'DEADLINE - Position sur réparation préjudice', path: '/encours' },
  ];

  keyEvents.forEach((evt, i) => {
    index.push({
      id: `event-${i}`,
      type: 'event',
      title: evt.date,
      description: evt.event,
      path: evt.path,
      category: 'Événements',
    });
  });

  // Add key amounts
  const keyAmounts = [
    { amount: '142 000 €', desc: 'Créance alléguée par CC', path: '/' },
    { amount: '1 200 000 €', desc: 'Contre-créance ADN (minimum)', path: '/' },
    { amount: '70 000 €', desc: 'Déjà payé par ADN', path: '/contracts' },
    { amount: '150 000 €', desc: 'Avance reçue de CC', path: '/contracts' },
    { amount: '210 000 €', desc: 'À rembourser (contrat)', path: '/contracts' },
    { amount: '500 000 €', desc: 'Coût création page Oye (31 mois)', path: '/oye-clarification' },
    { amount: '6 000 €', desc: 'Minimum garanti mensuel', path: '/contracts' },
  ];

  keyAmounts.forEach((amt, i) => {
    index.push({
      id: `amount-${i}`,
      type: 'amount',
      title: amt.amount,
      description: amt.desc,
      path: amt.path,
      category: 'Montants',
    });
  });

  // Add documents
  const keyDocs = [
    { name: 'License Agreement', desc: 'Contrat principal - 25 sept 2024', path: '/contracts' },
    { name: 'Purchase Order', desc: 'Avance 150k€ - 26 sept 2024', path: '/contracts' },
    { name: 'Amendment Protocol', desc: 'Garantie personnelle - 2 oct 2024', path: '/contracts' },
    { name: 'Lettre 19 décembre 2025', desc: 'Mise en demeure initiale ADN', path: '/letters' },
    { name: 'Lettre 16 janvier 2026', desc: 'Lettre offensive - Contre-créance', path: '/letters' },
    { name: 'Email Cheick Camara', desc: '27 août 2025 - Recommandation 2FA', path: '/2fa' },
  ];

  keyDocs.forEach((doc, i) => {
    index.push({
      id: `doc-${i}`,
      type: 'document',
      title: doc.name,
      description: doc.desc,
      path: doc.path,
      category: 'Documents',
    });
  });

  // Add legal concepts
  const legalConcepts = [
    { name: 'Article 82 CO', desc: 'Exception d\'inexécution - Base de notre défense', path: '/legal' },
    { name: 'Article 97 CO', desc: 'Responsabilité contractuelle', path: '/legal' },
    { name: 'Article 100 CO', desc: 'Nullité clause limitation si faute grave', path: '/legal' },
    { name: 'Article 101 CO', desc: 'Responsabilité pour auxiliaires', path: '/legal' },
    { name: 'Article 2 CC', desc: 'Abus de droit', path: '/legal' },
    { name: 'Clause 6', desc: 'Liquidated Damages - Pénalités ×3', path: '/contracts' },
    { name: 'Clause 7', desc: 'Breach Call Option - IP pour 1$', path: '/contracts' },
    { name: 'Clause 4.3(e)(ii)', desc: 'Exception aux pénalités', path: '/contracts' },
    { name: 'Article 323-1 CP', desc: 'Accès frauduleux système (plainte pénale)', path: '/legal' },
    { name: 'Article 314-1 CP', desc: 'Abus de confiance (plainte pénale)', path: '/legal' },
  ];

  legalConcepts.forEach((concept, i) => {
    index.push({
      id: `legal-${i}`,
      type: 'document',
      title: concept.name,
      description: concept.desc,
      path: concept.path,
      category: 'Juridique',
    });
  });

  return index;
};

const searchIndex = buildSearchIndex();

const performSearch = (query: string): SearchResult[] => {
  if (!query.trim()) return [];

  const normalizedQuery = query.toLowerCase().trim();
  const terms = normalizedQuery.split(/\s+/);

  return searchIndex
    .filter((item) => {
      const searchText = `${item.title} ${item.description} ${item.category}`.toLowerCase();
      return terms.every((term) => searchText.includes(term));
    })
    .slice(0, 15);
};

export const useSearchStore = create<SearchState>((set, get) => ({
  isOpen: false,
  query: '',
  results: [],
  selectedIndex: 0,

  open: () => set({ isOpen: true, query: '', results: [], selectedIndex: 0 }),
  close: () => set({ isOpen: false, query: '', results: [], selectedIndex: 0 }),
  toggle: () => {
    const { isOpen } = get();
    if (isOpen) {
      get().close();
    } else {
      get().open();
    }
  },

  setQuery: (query: string) => set({ query }),

  search: (query: string) => {
    const results = performSearch(query);
    set({ query, results, selectedIndex: 0 });
  },

  selectNext: () => {
    const { results, selectedIndex } = get();
    if (results.length > 0) {
      set({ selectedIndex: (selectedIndex + 1) % results.length });
    }
  },

  selectPrev: () => {
    const { results, selectedIndex } = get();
    if (results.length > 0) {
      set({ selectedIndex: selectedIndex === 0 ? results.length - 1 : selectedIndex - 1 });
    }
  },

  getSelected: () => {
    const { results, selectedIndex } = get();
    return results[selectedIndex] || null;
  },
}));
