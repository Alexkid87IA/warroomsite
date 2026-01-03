// ═══════════════════════════════════════════════════════════════════════════════
// INTELLIGENCE PAGE — RAG Local + Streaming + Historique localStorage
// War Room ADN vs Copyright Capital
// ═══════════════════════════════════════════════════════════════════════════════

import { useState, useRef, useEffect } from 'react';
import { Brain, Sparkles, Send, Loader2, Trash2, AlertCircle, Database, Search, Plus, History, ChevronDown, X } from 'lucide-react';
import { searchKnowledge, buildContext, KnowledgeChunk } from './knowledgeBase';

// ─────────────────────────────────────────────────────────────────────────────────
// TYPES
// ─────────────────────────────────────────────────────────────────────────────────

interface Message {
  role: 'user' | 'assistant';
  content: string;
  timestamp: Date;
  isStreaming?: boolean;
  sources?: string[];
}

interface Conversation {
  id: string;
  title: string;
  messages: Message[];
  createdAt: Date;
  updatedAt: Date;
}

// ─────────────────────────────────────────────────────────────────────────────────
// STORAGE HELPERS
// ─────────────────────────────────────────────────────────────────────────────────

const STORAGE_KEY = 'warroom-intelligence-conversations';

function loadConversations(): Conversation[] {
  try {
    const data = localStorage.getItem(STORAGE_KEY);
    if (!data) return [];
    const parsed = JSON.parse(data);
    // Convertir les dates string en Date objects
    return parsed.map((conv: any) => ({
      ...conv,
      createdAt: new Date(conv.createdAt),
      updatedAt: new Date(conv.updatedAt),
      messages: conv.messages.map((msg: any) => ({
        ...msg,
        timestamp: new Date(msg.timestamp)
      }))
    }));
  } catch {
    return [];
  }
}

function saveConversations(conversations: Conversation[]) {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(conversations));
}

function generateId(): string {
  return Date.now().toString(36) + Math.random().toString(36).substr(2);
}

function generateTitle(firstMessage: string): string {
  // Prendre les 50 premiers caractères du premier message
  const title = firstMessage.slice(0, 50);
  return title.length < firstMessage.length ? title + '...' : title;
}

// ─────────────────────────────────────────────────────────────────────────────────
// COMPOSANTS UI
// ─────────────────────────────────────────────────────────────────────────────────

function MessageBubble({ message }: { message: Message }) {
  const isUser = message.role === 'user';
  
  return (
    <div className={`flex ${isUser ? 'justify-end' : 'justify-start'} mb-4`}>
      <div
        className={`max-w-[80%] rounded-2xl px-4 py-3 ${
          isUser
            ? 'bg-gradient-to-r from-blue-600 to-blue-700 text-white'
            : 'bg-slate-800/80 text-slate-100 border border-slate-700/50'
        }`}
      >
        {!isUser && (
          <div className="flex items-center gap-2 mb-2 pb-2 border-b border-slate-700/50">
            <div className="w-5 h-5 rounded-full bg-gradient-to-br from-emerald-500 to-teal-600 flex items-center justify-center">
              <Sparkles className="w-3 h-3 text-white" />
            </div>
            <span className="text-xs text-emerald-400 font-medium">Claude AI</span>
            {message.isStreaming && (
              <span className="text-xs text-amber-400 animate-pulse">● en train d'écrire...</span>
            )}
          </div>
        )}
        <div className="whitespace-pre-wrap text-sm leading-relaxed">
          {message.content}
          {message.isStreaming && (
            <span className="inline-block w-2 h-4 bg-emerald-400 ml-1 animate-pulse" />
          )}
        </div>
        {!isUser && message.sources && message.sources.length > 0 && !message.isStreaming && (
          <div className="mt-3 pt-2 border-t border-slate-700/50">
            <div className="flex items-center gap-1 text-xs text-slate-500 mb-1">
              <Database className="w-3 h-3" />
              <span>Sources consultées:</span>
            </div>
            <div className="flex flex-wrap gap-1">
              {message.sources.map((source, i) => (
                <span key={i} className="px-2 py-0.5 text-xs bg-slate-700/50 text-slate-400 rounded">
                  {source}
                </span>
              ))}
            </div>
          </div>
        )}
        <div className={`text-xs mt-2 ${isUser ? 'text-blue-200' : 'text-slate-500'}`}>
          {message.timestamp.toLocaleTimeString('fr-FR', { hour: '2-digit', minute: '2-digit' })}
        </div>
      </div>
    </div>
  );
}

function SuggestedQuestions({ onSelect }: { onSelect: (q: string) => void }) {
  const questions = [
    "Quelles sont les preuves de négligence de CC ?",
    "Qu'est-ce qui s'est passé avec le compte séquestre ?",
    "Résume la contradiction sur le 2FA",
    "Quels sont mes meilleurs arguments juridiques ?",
    "Que dit la lettre de CC du 26 décembre ?",
    "Quelle est la stratégie actuelle ?",
  ];

  return (
    <div className="space-y-3">
      <p className="text-slate-400 text-sm">Questions suggérées :</p>
      <div className="flex flex-wrap gap-2">
        {questions.map((q, i) => (
          <button
            key={i}
            onClick={() => onSelect(q)}
            className="px-3 py-2 text-sm bg-slate-800/50 hover:bg-slate-700/50 
                       text-slate-300 rounded-lg border border-slate-700/50 
                       hover:border-slate-600 transition-all"
          >
            {q}
          </button>
        ))}
      </div>
    </div>
  );
}

function ConversationList({ 
  conversations, 
  currentId, 
  onSelect, 
  onDelete,
  onClose 
}: { 
  conversations: Conversation[];
  currentId: string | null;
  onSelect: (id: string) => void;
  onDelete: (id: string) => void;
  onClose: () => void;
}) {
  if (conversations.length === 0) {
    return (
      <div className="p-4 text-center text-slate-500 text-sm">
        Aucune conversation sauvegardée
      </div>
    );
  }

  return (
    <div className="max-h-80 overflow-y-auto">
      {conversations.map((conv) => (
        <div
          key={conv.id}
          className={`flex items-center justify-between p-3 hover:bg-slate-700/50 cursor-pointer border-b border-slate-700/30 ${
            conv.id === currentId ? 'bg-slate-700/50' : ''
          }`}
          onClick={() => {
            onSelect(conv.id);
            onClose();
          }}
        >
          <div className="flex-1 min-w-0">
            <p className="text-sm text-slate-200 truncate">{conv.title}</p>
            <p className="text-xs text-slate-500">
              {conv.updatedAt.toLocaleDateString('fr-FR')} • {conv.messages.length} messages
            </p>
          </div>
          <button
            onClick={(e) => {
              e.stopPropagation();
              onDelete(conv.id);
            }}
            className="p-1 text-slate-500 hover:text-red-400 hover:bg-red-500/10 rounded ml-2"
          >
            <Trash2 className="w-4 h-4" />
          </button>
        </div>
      ))}
    </div>
  );
}

// ─────────────────────────────────────────────────────────────────────────────────
// COMPOSANT PRINCIPAL
// ─────────────────────────────────────────────────────────────────────────────────

export default function IntelligencePage() {
  const [conversations, setConversations] = useState<Conversation[]>([]);
  const [currentConversationId, setCurrentConversationId] = useState<string | null>(null);
  const [messages, setMessages] = useState<Message[]>([]);
  const [inputValue, setInputValue] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [searchedChunks, setSearchedChunks] = useState<KnowledgeChunk[]>([]);
  const [showHistory, setShowHistory] = useState(false);
  
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLTextAreaElement>(null);

  // Charger les conversations au démarrage
  useEffect(() => {
    const loaded = loadConversations();
    setConversations(loaded);
    
    // Charger la dernière conversation si elle existe
    if (loaded.length > 0) {
      const lastConv = loaded[0]; // La plus récente
      setCurrentConversationId(lastConv.id);
      setMessages(lastConv.messages);
    }
  }, []);

  // Sauvegarder quand les messages changent
  useEffect(() => {
    if (messages.length === 0 || messages.some(m => m.isStreaming)) return;
    
    setConversations(prev => {
      let updated: Conversation[];
      
      if (currentConversationId) {
        // Mettre à jour la conversation existante
        updated = prev.map(conv => 
          conv.id === currentConversationId
            ? { ...conv, messages, updatedAt: new Date() }
            : conv
        );
      } else if (messages.length > 0) {
        // Créer une nouvelle conversation
        const newConv: Conversation = {
          id: generateId(),
          title: generateTitle(messages[0].content),
          messages,
          createdAt: new Date(),
          updatedAt: new Date()
        };
        setCurrentConversationId(newConv.id);
        updated = [newConv, ...prev];
      } else {
        return prev;
      }
      
      // Trier par date de mise à jour (plus récent en premier)
      updated.sort((a, b) => b.updatedAt.getTime() - a.updatedAt.getTime());
      
      // Sauvegarder dans localStorage
      saveConversations(updated);
      
      return updated;
    });
  }, [messages, currentConversationId]);

  // Auto-scroll vers le bas
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages]);

  // Auto-resize du textarea
  useEffect(() => {
    if (inputRef.current) {
      inputRef.current.style.height = 'auto';
      inputRef.current.style.height = `${Math.min(inputRef.current.scrollHeight, 120)}px`;
    }
  }, [inputValue]);

  // ─────────────────────────────────────────────────────────────────────────────
  // HANDLERS
  // ─────────────────────────────────────────────────────────────────────────────

  const handleNewConversation = () => {
    setCurrentConversationId(null);
    setMessages([]);
    setError(null);
    setSearchedChunks([]);
  };

  const handleSelectConversation = (id: string) => {
    const conv = conversations.find(c => c.id === id);
    if (conv) {
      setCurrentConversationId(id);
      setMessages(conv.messages);
      setError(null);
    }
  };

  const handleDeleteConversation = (id: string) => {
    setConversations(prev => {
      const updated = prev.filter(c => c.id !== id);
      saveConversations(updated);
      return updated;
    });
    
    if (currentConversationId === id) {
      handleNewConversation();
    }
  };

  const handleSendMessage = async (userMessage: string) => {
    if (!userMessage.trim() || isLoading) return;

    setSearchedChunks([]);
    setError(null);

    // Recherche locale
    const relevantChunks = searchKnowledge(userMessage, 6);
    setSearchedChunks(relevantChunks);
    
    const context = buildContext(relevantChunks, 15000);
    const sources = relevantChunks.map(c => c.title);

    const newUserMessage: Message = {
      role: 'user',
      content: userMessage.trim(),
      timestamp: new Date(),
    };
    
    setMessages(prev => [...prev, newUserMessage]);
    setInputValue('');
    setIsLoading(true);

    const assistantMessage: Message = {
      role: 'assistant',
      content: '',
      timestamp: new Date(),
      isStreaming: true,
      sources: sources,
    };
    
    setMessages(prev => [...prev, assistantMessage]);

    try {
      const supabaseUrl = import.meta.env.VITE_SUPABASE_URL;
      const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY;

      if (!supabaseUrl || !supabaseAnonKey) {
        throw new Error('Configuration Supabase manquante. Vérifiez votre fichier .env');
      }

      const systemPrompt = `Tu es l'assistant stratégique de la War Room ADN Production vs Copyright Capital.

Tu as accès à TOUTES les données du dossier via le contexte fourni ci-dessous. Utilise ces informations pour répondre de manière précise et factuelle.

RÈGLES:
- Réponds en français
- Sois direct et précis
- Cite les sources quand tu fais référence à un fait précis
- Si l'information n'est pas dans le contexte, dis-le clairement
- N'invente JAMAIS de faits

${context}`;

      const conversationMessages = [...messages, newUserMessage].map(({ role, content }) => ({ 
        role, 
        content 
      }));

      const response = await fetch(
        `${supabaseUrl}/functions/v1/claude-chat`,
        {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${supabaseAnonKey}`,
          },
          body: JSON.stringify({
            messages: conversationMessages,
            systemPrompt: systemPrompt,
            stream: true,
          }),
        }
      );

      if (!response.ok) {
        const errorText = await response.text();
        let errorMessage = 'Erreur de communication avec Claude';
        try {
          const errorData = JSON.parse(errorText);
          errorMessage = errorData.error || errorMessage;
        } catch {
          errorMessage = errorText || errorMessage;
        }
        throw new Error(errorMessage);
      }

      const reader = response.body!.getReader();
      const decoder = new TextDecoder();
      let fullContent = '';

      while (true) {
        const { done, value } = await reader.read();
        if (done) break;

        const chunk = decoder.decode(value, { stream: true });
        const lines = chunk.split('\n');

        for (const line of lines) {
          if (line.startsWith('data: ')) {
            const data = line.slice(6);
            
            if (data === '[DONE]') {
              setMessages(prev => 
                prev.map((msg, idx) => 
                  idx === prev.length - 1 
                    ? { ...msg, isStreaming: false }
                    : msg
                )
              );
              continue;
            }

            try {
              const parsed = JSON.parse(data);
              if (parsed.text) {
                fullContent += parsed.text;
                
                setMessages(prev => 
                  prev.map((msg, idx) => 
                    idx === prev.length - 1 
                      ? { ...msg, content: fullContent }
                      : msg
                  )
                );
              }
            } catch {
              // Ignorer les erreurs de parsing
            }
          }
        }
      }

    } catch (err) {
      const errorMessage = err instanceof Error ? err.message : 'Une erreur est survenue';
      setError(errorMessage);
      setMessages(prev => prev.slice(0, -1));
      console.error('Error:', err);
    } finally {
      setIsLoading(false);
      setSearchedChunks([]);
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSendMessage(inputValue);
    }
  };

  // ─────────────────────────────────────────────────────────────────────────────
  // RENDER
  // ─────────────────────────────────────────────────────────────────────────────

  return (
    <div className="min-h-screen bg-slate-950 flex flex-col">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-emerald-900/20 via-transparent to-transparent" />

      <div className="relative z-10 flex flex-col h-screen">
        {/* Header */}
        <header className="border-b border-slate-800/50 bg-slate-900/50 backdrop-blur-xl">
          <div className="max-w-4xl mx-auto px-4 py-4">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-4">
                <div className="relative">
                  <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-emerald-500 to-teal-600 flex items-center justify-center shadow-lg shadow-emerald-500/25">
                    <Brain className="w-6 h-6 text-white" />
                  </div>
                  <div className="absolute -bottom-1 -right-1 w-4 h-4 rounded-full bg-emerald-500 border-2 border-slate-900 flex items-center justify-center">
                    <Database className="w-2 h-2 text-white" />
                  </div>
                </div>
                <div>
                  <h1 className="text-xl font-bold text-white flex items-center gap-2">
                    Intelligence AI
                    <span className="px-2 py-0.5 text-[10px] font-semibold bg-emerald-500/20 text-emerald-400 rounded-full uppercase tracking-wider">
                      RAG Local
                    </span>
                  </h1>
                  <p className="text-sm text-slate-400">
                    {conversations.length} conversation(s) sauvegardée(s)
                  </p>
                </div>
              </div>
              
              <div className="flex items-center gap-2">
                {/* Bouton Historique */}
                <div className="relative">
                  <button
                    onClick={() => setShowHistory(!showHistory)}
                    className="flex items-center gap-2 px-3 py-2 text-slate-400 hover:text-white hover:bg-slate-700/50 rounded-lg transition-colors"
                  >
                    <History className="w-5 h-5" />
                    <span className="text-sm hidden sm:inline">Historique</span>
                    <ChevronDown className={`w-4 h-4 transition-transform ${showHistory ? 'rotate-180' : ''}`} />
                  </button>
                  
                  {/* Dropdown Historique */}
                  {showHistory && (
                    <div className="absolute right-0 top-full mt-2 w-80 bg-slate-800 border border-slate-700 rounded-xl shadow-xl z-50">
                      <div className="flex items-center justify-between p-3 border-b border-slate-700">
                        <span className="text-sm font-medium text-white">Conversations</span>
                        <button
                          onClick={() => setShowHistory(false)}
                          className="p-1 text-slate-400 hover:text-white"
                        >
                          <X className="w-4 h-4" />
                        </button>
                      </div>
                      <ConversationList
                        conversations={conversations}
                        currentId={currentConversationId}
                        onSelect={handleSelectConversation}
                        onDelete={handleDeleteConversation}
                        onClose={() => setShowHistory(false)}
                      />
                    </div>
                  )}
                </div>

                {/* Bouton Nouvelle conversation */}
                <button
                  onClick={handleNewConversation}
                  className="flex items-center gap-2 px-3 py-2 bg-emerald-600 hover:bg-emerald-500 text-white rounded-lg transition-colors"
                >
                  <Plus className="w-5 h-5" />
                  <span className="text-sm hidden sm:inline">Nouveau</span>
                </button>
              </div>
            </div>
          </div>
        </header>

        {/* Messages Area */}
        <div className="flex-1 overflow-y-auto">
          <div className="max-w-4xl mx-auto px-4 py-6">
            {messages.length === 0 ? (
              <div className="flex flex-col items-center justify-center min-h-[50vh] text-center">
                <div className="w-20 h-20 rounded-3xl bg-gradient-to-br from-emerald-500/20 to-teal-600/20 flex items-center justify-center mb-6 border border-emerald-500/30">
                  <Brain className="w-10 h-10 text-emerald-400" />
                </div>
                <h2 className="text-2xl font-bold text-white mb-2">
                  War Room Intelligence
                </h2>
                <p className="text-slate-400 mb-4 max-w-md">
                  Posez vos questions sur le dossier ADN vs Copyright Capital.
                </p>
                <div className="flex items-center gap-2 px-4 py-2 bg-emerald-500/10 border border-emerald-500/30 rounded-lg mb-8">
                  <Database className="w-4 h-4 text-emerald-400" />
                  <span className="text-sm text-emerald-300">
                    25+ documents indexés • Historique sauvegardé
                  </span>
                </div>
                <SuggestedQuestions onSelect={handleSendMessage} />
              </div>
            ) : (
              <>
                {searchedChunks.length > 0 && isLoading && (
                  <div className="flex items-center gap-2 p-3 bg-emerald-500/10 border border-emerald-500/30 rounded-lg mb-4">
                    <Search className="w-4 h-4 text-emerald-400 animate-pulse" />
                    <span className="text-sm text-emerald-300">
                      {searchedChunks.length} document(s) trouvé(s)
                    </span>
                  </div>
                )}
                
                {messages.map((msg, idx) => (
                  <MessageBubble key={idx} message={msg} />
                ))}
                <div ref={messagesEndRef} />
              </>
            )}
          </div>
        </div>

        {/* Error Display */}
        {error && (
          <div className="max-w-4xl mx-auto px-4 pb-2">
            <div className="flex items-center gap-2 p-3 bg-red-500/10 border border-red-500/30 rounded-lg text-red-400 text-sm">
              <AlertCircle className="w-4 h-4 flex-shrink-0" />
              <span>{error}</span>
            </div>
          </div>
        )}

        {/* Input Area */}
        <div className="border-t border-slate-800/50 bg-slate-900/50 backdrop-blur-xl">
          <div className="max-w-4xl mx-auto px-4 py-4">
            <div className="flex items-end gap-3">
              <div className="flex-1 relative">
                <textarea
                  ref={inputRef}
                  value={inputValue}
                  onChange={(e) => setInputValue(e.target.value)}
                  onKeyDown={handleKeyDown}
                  placeholder="Posez votre question sur le dossier..."
                  disabled={isLoading}
                  rows={1}
                  className="w-full px-4 py-3 bg-slate-800/50 border border-slate-700/50 
                           rounded-xl text-white placeholder-slate-500 resize-none
                           focus:outline-none focus:ring-2 focus:ring-emerald-500/50 
                           focus:border-emerald-500/50 disabled:opacity-50
                           transition-all"
                />
              </div>
              <button
                onClick={() => handleSendMessage(inputValue)}
                disabled={!inputValue.trim() || isLoading}
                className="p-3 bg-gradient-to-r from-emerald-600 to-teal-600 
                         text-white rounded-xl shadow-lg shadow-emerald-500/25
                         hover:from-emerald-500 hover:to-teal-500
                         disabled:opacity-50 disabled:cursor-not-allowed
                         transition-all"
              >
                {isLoading ? (
                  <Loader2 className="w-5 h-5 animate-spin" />
                ) : (
                  <Send className="w-5 h-5" />
                )}
              </button>
            </div>
            <p className="text-xs text-slate-500 mt-2 text-center">
              Entrée pour envoyer • Shift+Entrée pour nouvelle ligne • Conversations sauvegardées automatiquement
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}