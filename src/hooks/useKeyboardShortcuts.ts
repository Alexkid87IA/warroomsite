import { useEffect, useCallback } from 'react';
import { useNavigate } from 'react-router-dom';
import { useSearchStore } from '../stores/searchStore';
import { useUIStore } from '../stores/uiStore';

interface ShortcutMap {
  [key: string]: {
    description: string;
    action: () => void;
  };
}

export const useKeyboardShortcuts = () => {
  const navigate = useNavigate();
  const toggleSearch = useSearchStore((s) => s.toggle);
  const toggleSidebar = useUIStore((s) => s.toggleCollapsed);

  const shortcuts: ShortcutMap = {
    // Navigation shortcuts (g + key)
    'g+d': { description: 'Dashboard', action: () => navigate('/') },
    'g+i': { description: 'Intelligence AI', action: () => navigate('/intelligence') },
    'g+n': { description: 'Neutral Lens', action: () => navigate('/neutral') },
    'g+o': { description: 'OYE', action: () => navigate('/oye-clarification') },
    'g+m': { description: 'Gmail', action: () => navigate('/gmail') },
    'g+s': { description: 'Stratégie', action: () => navigate('/war') },
    'g+e': { description: 'En Cours', action: () => navigate('/encours') },
    'g+c': { description: 'Chronologie', action: () => navigate('/chronology') },
    'g+2': { description: '2FA', action: () => navigate('/2fa') },
    'g+l': { description: 'Lettres', action: () => navigate('/letters') },
    'g+j': { description: 'Juridique', action: () => navigate('/legal') },
    'g+p': { description: 'Parties', action: () => navigate('/parties') },

    // Action shortcuts
    '/': { description: 'Recherche', action: toggleSearch },
    'b': { description: 'Toggle sidebar', action: toggleSidebar },
  };

  const handleKeyDown = useCallback(
    (e: KeyboardEvent) => {
      // Ignore if typing in input/textarea
      const target = e.target as HTMLElement;
      if (
        target.tagName === 'INPUT' ||
        target.tagName === 'TEXTAREA' ||
        target.isContentEditable
      ) {
        return;
      }

      // Handle Ctrl/Cmd + K for search
      if ((e.metaKey || e.ctrlKey) && e.key === 'k') {
        e.preventDefault();
        toggleSearch();
        return;
      }

      // Handle ? for help
      if (e.key === '?' && !e.metaKey && !e.ctrlKey) {
        e.preventDefault();
        // Could open a shortcuts help modal here
        console.log('Shortcuts:', shortcuts);
        return;
      }

      // Handle single key shortcuts
      if (!e.metaKey && !e.ctrlKey && !e.altKey) {
        const key = e.key.toLowerCase();

        // Direct shortcuts
        if (key === '/' && shortcuts['/']) {
          e.preventDefault();
          shortcuts['/'].action();
          return;
        }
        if (key === 'b' && shortcuts['b']) {
          e.preventDefault();
          shortcuts['b'].action();
          return;
        }

        // Store 'g' prefix for two-key shortcuts
        if (key === 'g') {
          const handleSecondKey = (e2: KeyboardEvent) => {
            const key2 = e2.key.toLowerCase();
            const combo = `g+${key2}`;
            if (shortcuts[combo]) {
              e2.preventDefault();
              shortcuts[combo].action();
            }
            window.removeEventListener('keydown', handleSecondKey);
            clearTimeout(timeout);
          };

          const timeout = setTimeout(() => {
            window.removeEventListener('keydown', handleSecondKey);
          }, 1000);

          window.addEventListener('keydown', handleSecondKey);
        }
      }
    },
    [toggleSearch, toggleSidebar, navigate]
  );

  useEffect(() => {
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [handleKeyDown]);

  return shortcuts;
};

// Export shortcut list for help display
export const SHORTCUT_LIST = [
  { category: 'Navigation', shortcuts: [
    { keys: 'g d', description: 'Dashboard' },
    { keys: 'g i', description: 'Intelligence AI' },
    { keys: 'g n', description: 'Neutral Lens' },
    { keys: 'g o', description: 'OYE' },
    { keys: 'g m', description: 'Gmail' },
    { keys: 'g s', description: 'Stratégie' },
    { keys: 'g e', description: 'En Cours' },
    { keys: 'g c', description: 'Chronologie' },
    { keys: 'g 2', description: '2FA' },
    { keys: 'g l', description: 'Lettres' },
    { keys: 'g j', description: 'Juridique' },
    { keys: 'g p', description: 'Parties' },
  ]},
  { category: 'Actions', shortcuts: [
    { keys: 'Ctrl+K', description: 'Recherche globale' },
    { keys: '/', description: 'Recherche rapide' },
    { keys: 'b', description: 'Toggle sidebar' },
    { keys: '?', description: 'Aide raccourcis' },
  ]},
];
