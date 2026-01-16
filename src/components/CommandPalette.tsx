import { memo, useEffect, useRef, useCallback } from 'react';
import { useNavigate } from 'react-router-dom';
import { Search, FileText, User, Calendar, DollarSign, File, X } from 'lucide-react';
import { useSearchStore, SearchResult } from '../stores/searchStore';
import { cn } from '../lib/utils';

const typeIcons: Record<SearchResult['type'], typeof Search> = {
  page: FileText,
  event: Calendar,
  person: User,
  document: File,
  amount: DollarSign,
  date: Calendar,
};

const typeColors: Record<SearchResult['type'], string> = {
  page: 'text-blue-400 bg-blue-500/10',
  event: 'text-amber-400 bg-amber-500/10',
  person: 'text-emerald-400 bg-emerald-500/10',
  document: 'text-purple-400 bg-purple-500/10',
  amount: 'text-green-400 bg-green-500/10',
  date: 'text-cyan-400 bg-cyan-500/10',
};

const ResultItem = memo<{
  result: SearchResult;
  isSelected: boolean;
  onClick: () => void;
}>(({ result, isSelected, onClick }) => {
  const Icon = typeIcons[result.type];

  return (
    <button
      onClick={onClick}
      className={cn(
        'w-full flex items-center gap-3 px-4 py-3 text-left transition-colors',
        isSelected ? 'bg-slate-700/50' : 'hover:bg-slate-800/50'
      )}
    >
      <div className={cn('p-2 rounded-lg', typeColors[result.type])}>
        <Icon size={16} />
      </div>
      <div className="flex-1 min-w-0">
        <div className="text-slate-200 font-medium truncate">{result.title}</div>
        <div className="text-slate-400 text-sm truncate">{result.description}</div>
      </div>
      <span className="text-xs text-slate-500 bg-slate-800 px-2 py-1 rounded">
        {result.category}
      </span>
    </button>
  );
});

ResultItem.displayName = 'ResultItem';

export const CommandPalette = memo(() => {
  const navigate = useNavigate();
  const inputRef = useRef<HTMLInputElement>(null);
  const { isOpen, query, results, selectedIndex, close, search, selectNext, selectPrev, getSelected } =
    useSearchStore();

  const handleSelect = useCallback(
    (result: SearchResult) => {
      if (result.path) {
        navigate(result.path);
      }
      close();
    },
    [navigate, close]
  );

  const handleKeyDown = useCallback(
    (e: React.KeyboardEvent) => {
      switch (e.key) {
        case 'ArrowDown':
          e.preventDefault();
          selectNext();
          break;
        case 'ArrowUp':
          e.preventDefault();
          selectPrev();
          break;
        case 'Enter':
          e.preventDefault();
          const selected = getSelected();
          if (selected) {
            handleSelect(selected);
          }
          break;
        case 'Escape':
          e.preventDefault();
          close();
          break;
      }
    },
    [selectNext, selectPrev, getSelected, handleSelect, close]
  );

  useEffect(() => {
    if (isOpen && inputRef.current) {
      inputRef.current.focus();
    }
  }, [isOpen]);

  // Global keyboard shortcut
  useEffect(() => {
    const handleGlobalKeyDown = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key === 'k') {
        e.preventDefault();
        useSearchStore.getState().toggle();
      }
    };

    window.addEventListener('keydown', handleGlobalKeyDown);
    return () => window.removeEventListener('keydown', handleGlobalKeyDown);
  }, []);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-start justify-center pt-[15vh]">
      {/* Backdrop */}
      <div className="absolute inset-0 bg-black/60 backdrop-blur-sm" onClick={close} />

      {/* Modal */}
      <div className="relative w-full max-w-2xl bg-slate-900 border border-slate-700 rounded-xl shadow-2xl overflow-hidden">
        {/* Search input */}
        <div className="flex items-center gap-3 px-4 py-4 border-b border-slate-700">
          <Search className="text-slate-400" size={20} />
          <input
            ref={inputRef}
            type="text"
            value={query}
            onChange={(e) => search(e.target.value)}
            onKeyDown={handleKeyDown}
            placeholder="Rechercher pages, personnes, dates, montants..."
            className="flex-1 bg-transparent text-slate-200 placeholder-slate-500 outline-none text-lg"
          />
          <div className="flex items-center gap-2">
            <kbd className="px-2 py-1 text-xs text-slate-400 bg-slate-800 rounded border border-slate-700">
              ESC
            </kbd>
            <button onClick={close} className="p-1 text-slate-400 hover:text-slate-200">
              <X size={18} />
            </button>
          </div>
        </div>

        {/* Results */}
        <div className="max-h-[60vh] overflow-y-auto">
          {query && results.length === 0 && (
            <div className="px-4 py-8 text-center text-slate-400">
              Aucun résultat pour "{query}"
            </div>
          )}

          {results.length > 0 && (
            <div className="py-2">
              {results.map((result, index) => (
                <ResultItem
                  key={result.id}
                  result={result}
                  isSelected={index === selectedIndex}
                  onClick={() => handleSelect(result)}
                />
              ))}
            </div>
          )}

          {!query && (
            <div className="px-4 py-6">
              <div className="text-slate-400 text-sm mb-4">Suggestions</div>
              <div className="grid grid-cols-2 gap-2">
                {[
                  { label: 'Oye', query: 'oye' },
                  { label: '142 000 €', query: '142' },
                  { label: 'Mayorkas', query: 'mayorkas' },
                  { label: '2FA', query: '2fa' },
                  { label: 'Article 82', query: 'article 82' },
                  { label: '16 janvier', query: '16 jan' },
                ].map((suggestion) => (
                  <button
                    key={suggestion.label}
                    onClick={() => search(suggestion.query)}
                    className="px-3 py-2 text-sm text-slate-300 bg-slate-800/50 rounded-lg hover:bg-slate-700/50 text-left"
                  >
                    {suggestion.label}
                  </button>
                ))}
              </div>
            </div>
          )}
        </div>

        {/* Footer */}
        <div className="px-4 py-3 border-t border-slate-700 flex items-center justify-between text-xs text-slate-500">
          <div className="flex items-center gap-4">
            <span className="flex items-center gap-1">
              <kbd className="px-1.5 py-0.5 bg-slate-800 rounded">↑</kbd>
              <kbd className="px-1.5 py-0.5 bg-slate-800 rounded">↓</kbd>
              naviguer
            </span>
            <span className="flex items-center gap-1">
              <kbd className="px-1.5 py-0.5 bg-slate-800 rounded">↵</kbd>
              sélectionner
            </span>
          </div>
          <span>{results.length} résultat{results.length !== 1 ? 's' : ''}</span>
        </div>
      </div>
    </div>
  );
});

CommandPalette.displayName = 'CommandPalette';
