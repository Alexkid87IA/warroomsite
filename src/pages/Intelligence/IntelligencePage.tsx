import { useState, useRef, useEffect } from 'react';
import {
  Brain,
  AlertCircle,
  Loader2,
  Send,
  Sparkles,
  Scale,
  FileText,
  Target,
  MessageSquare,
  Zap,
  User,
  Bot
} from 'lucide-react';
import { prepareCaseContext } from '../../utils/prepareContext';

interface Message {
  role: 'user' | 'assistant';
  content: string;
  timestamp?: Date;
}

const quickActions = [
  { icon: Scale, label: 'Analyse juridique', prompt: 'Quelle est ton analyse juridique complète de notre position face à Copyright Capital ?' },
  { icon: Target, label: 'Points faibles CC', prompt: 'Quels sont les principaux points faibles et contradictions dans la position de Copyright Capital ?' },
  { icon: FileText, label: 'Rédiger une lettre', prompt: 'Aide-moi à rédiger une lettre de mise en demeure formelle à Copyright Capital.' },
  { icon: Zap, label: 'Prochaines étapes', prompt: 'Quelles sont les prochaines étapes stratégiques recommandées pour ce dossier ?' },
];

function formatMessageContent(content: string) {
  const lines = content.split('\n');
  const elements: JSX.Element[] = [];
  let listItems: string[] = [];
  let listType: 'bullet' | 'number' | null = null;

  const parseBoldText = (text: string) => {
    const parts: (string | JSX.Element)[] = [];
    let lastIndex = 0;
    const boldRegex = /\*\*(.+?)\*\*/g;
    let match;
    let matchIndex = 0;

    while ((match = boldRegex.exec(text)) !== null) {
      if (match.index > lastIndex) {
        parts.push(text.substring(lastIndex, match.index));
      }
      parts.push(
        <strong key={`bold-${matchIndex}`} className="font-semibold text-white">
          {match[1]}
        </strong>
      );
      lastIndex = match.index + match[0].length;
      matchIndex++;
    }

    if (lastIndex < text.length) {
      parts.push(text.substring(lastIndex));
    }

    return parts.length > 0 ? parts : [text];
  };

  const flushList = () => {
    if (listItems.length > 0) {
      if (listType === 'bullet') {
        elements.push(
          <ul key={`list-${elements.length}`} className="my-2 ml-4 space-y-1">
            {listItems.map((item, i) => (
              <li key={i} className="flex items-start gap-2">
                <span className="text-emerald-400 mt-1.5 text-xs">●</span>
                <span>{parseBoldText(item)}</span>
              </li>
            ))}
          </ul>
        );
      } else {
        elements.push(
          <ol key={`list-${elements.length}`} className="my-2 ml-4 space-y-1">
            {listItems.map((item, i) => (
              <li key={i} className="flex items-start gap-2">
                <span className="text-emerald-400 font-semibold min-w-[1.5rem]">{i + 1}.</span>
                <span>{parseBoldText(item)}</span>
              </li>
            ))}
          </ol>
        );
      }
      listItems = [];
      listType = null;
    }
  };

  lines.forEach((line, index) => {
    const trimmed = line.trim();

    if (trimmed.startsWith('# ')) {
      flushList();
      elements.push(
        <h2 key={index} className="text-lg font-bold text-white mt-4 mb-2 first:mt-0">
          {parseBoldText(trimmed.substring(2))}
        </h2>
      );
    } else if (trimmed.startsWith('## ')) {
      flushList();
      elements.push(
        <h3 key={index} className="text-base font-semibold text-emerald-300 mt-3 mb-2">
          {parseBoldText(trimmed.substring(3))}
        </h3>
      );
    } else if (trimmed.startsWith('### ')) {
      flushList();
      elements.push(
        <h4 key={index} className="text-sm font-semibold text-slate-200 mt-2 mb-1">
          {parseBoldText(trimmed.substring(4))}
        </h4>
      );
    } else if (trimmed.startsWith('- ') || trimmed.startsWith('• ') || trimmed.startsWith('* ')) {
      if (listType !== 'bullet') {
        flushList();
        listType = 'bullet';
      }
      listItems.push(trimmed.substring(2));
    } else if (/^\d+[\.\)]\s/.test(trimmed)) {
      if (listType !== 'number') {
        flushList();
        listType = 'number';
      }
      listItems.push(trimmed.replace(/^\d+[\.\)]\s/, ''));
    } else if (trimmed === '') {
      flushList();
      elements.push(<div key={index} className="h-2" />);
    } else {
      flushList();
      elements.push(
        <p key={index} className="my-1 leading-relaxed">
          {parseBoldText(trimmed)}
        </p>
      );
    }
  });

  flushList();
  return elements;
}

export default function IntelligencePage() {
  const [messages, setMessages] = useState<Message[]>([]);
  const [inputValue, setInputValue] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const textareaRef = useRef<HTMLTextAreaElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  useEffect(() => {
    if (textareaRef.current) {
      textareaRef.current.style.height = 'auto';
      textareaRef.current.style.height = `${Math.min(textareaRef.current.scrollHeight, 200)}px`;
    }
  }, [inputValue]);

  const handleSendMessage = async (userMessage: string) => {
    if (!userMessage.trim()) return;

    const newUserMessage: Message = {
      role: 'user',
      content: userMessage,
      timestamp: new Date()
    };
    setMessages((prev) => [...prev, newUserMessage]);
    setInputValue('');
    setIsLoading(true);
    setError(null);

    try {
      const supabaseUrl = import.meta.env.VITE_SUPABASE_URL;
      const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY;

      if (!supabaseUrl || !supabaseAnonKey) {
        throw new Error('Configuration Supabase manquante');
      }

      const caseContext = prepareCaseContext();
      const conversationMessages = [...messages, newUserMessage].map(({ role, content }) => ({ role, content }));

      const response = await fetch(
        `${supabaseUrl}/functions/v1/claude-chat`,
        {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${supabaseAnonKey}`,
          },
          body: JSON.stringify({
            messages: conversationMessages,
            caseContext,
          }),
        }
      );

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.error || 'Erreur lors de la communication avec Claude');
      }

      const data = await response.json();

      if (data.content && data.content[0] && data.content[0].text) {
        const assistantMessage: Message = {
          role: 'assistant',
          content: data.content[0].text,
          timestamp: new Date()
        };
        setMessages((prev) => [...prev, assistantMessage]);
      } else {
        throw new Error('Format de réponse invalide');
      }
    } catch (err) {
      const errorMessage =
        err instanceof Error ? err.message : 'Une erreur est survenue';
      setError(errorMessage);
      console.error('Error calling Claude:', err);
    } finally {
      setIsLoading(false);
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSendMessage(inputValue);
    }
  };

  const hasMessages = messages.length > 0;

  return (
    <div className="min-h-screen bg-slate-950 flex flex-col">
      <div className="absolute inset-0 bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-emerald-900/20 via-transparent to-transparent" />

      <div className="relative z-10 flex flex-col h-screen">
        <header className="border-b border-slate-800/50 bg-slate-900/50 backdrop-blur-xl">
          <div className="max-w-5xl mx-auto px-6 py-4">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-4">
                <div className="relative">
                  <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-emerald-500 to-teal-600 flex items-center justify-center shadow-lg shadow-emerald-500/25">
                    <Brain className="w-6 h-6 text-white" />
                  </div>
                  <div className="absolute -bottom-1 -right-1 w-4 h-4 rounded-full bg-emerald-500 border-2 border-slate-900 flex items-center justify-center">
                    <Sparkles className="w-2 h-2 text-white" />
                  </div>
                </div>
                <div>
                  <h1 className="text-xl font-bold text-white flex items-center gap-2">
                    Intelligence AI
                    <span className="px-2 py-0.5 text-[10px] font-semibold bg-emerald-500/20 text-emerald-400 rounded-full uppercase tracking-wider">
                      Claude 3.5
                    </span>
                  </h1>
                  <p className="text-sm text-slate-400">
                    Assistant strategique pour le dossier ADN vs Copyright Capital
                  </p>
                </div>
              </div>
              <div className="hidden md:flex items-center gap-2 text-xs text-slate-500">
                <div className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                En ligne
              </div>
            </div>
          </div>
        </header>

        <div className="flex-1 overflow-y-auto">
          <div className="max-w-5xl mx-auto px-6 py-8">
            {!hasMessages ? (
              <div className="flex flex-col items-center justify-center min-h-[60vh]">
                <div className="w-20 h-20 rounded-3xl bg-gradient-to-br from-emerald-500 to-teal-600 flex items-center justify-center mb-6 shadow-2xl shadow-emerald-500/30">
                  <MessageSquare className="w-10 h-10 text-white" />
                </div>
                <h2 className="text-2xl font-bold text-white mb-2">
                  Comment puis-je vous aider ?
                </h2>
                <p className="text-slate-400 text-center max-w-md mb-8">
                  Je connais l'integralite de votre dossier d'arbitrage.
                  Posez-moi vos questions ou utilisez une suggestion ci-dessous.
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 w-full max-w-2xl">
                  {quickActions.map((action, index) => (
                    <button
                      key={index}
                      onClick={() => handleSendMessage(action.prompt)}
                      className="group flex items-center gap-3 p-4 rounded-xl bg-slate-800/50 border border-slate-700/50 hover:bg-slate-800 hover:border-emerald-500/30 transition-all duration-200 text-left"
                    >
                      <div className="w-10 h-10 rounded-lg bg-slate-700/50 group-hover:bg-emerald-500/20 flex items-center justify-center transition-colors">
                        <action.icon className="w-5 h-5 text-slate-400 group-hover:text-emerald-400 transition-colors" />
                      </div>
                      <span className="text-sm text-slate-300 group-hover:text-white transition-colors">
                        {action.label}
                      </span>
                    </button>
                  ))}
                </div>
              </div>
            ) : (
              <div className="space-y-6">
                {messages.map((message, index) => (
                  <div
                    key={index}
                    className={`flex gap-4 ${message.role === 'user' ? 'justify-end' : 'justify-start'}`}
                  >
                    {message.role === 'assistant' && (
                      <div className="flex-shrink-0 w-10 h-10 rounded-xl bg-gradient-to-br from-emerald-500 to-teal-600 flex items-center justify-center shadow-lg shadow-emerald-500/20">
                        <Bot className="w-5 h-5 text-white" />
                      </div>
                    )}
                    <div
                      className={`max-w-[75%] rounded-2xl px-5 py-4 ${
                        message.role === 'user'
                          ? 'bg-emerald-600 text-white'
                          : 'bg-slate-800/80 text-slate-200 border border-slate-700/50'
                      }`}
                    >
                      {message.role === 'user' ? (
                        <p className="whitespace-pre-wrap">{message.content}</p>
                      ) : (
                        <div className="text-sm leading-relaxed">
                          {formatMessageContent(message.content)}
                        </div>
                      )}
                      {message.timestamp && (
                        <p className={`text-xs mt-2 ${message.role === 'user' ? 'text-emerald-200/60' : 'text-slate-500'}`}>
                          {message.timestamp.toLocaleTimeString('fr-FR', { hour: '2-digit', minute: '2-digit' })}
                        </p>
                      )}
                    </div>
                    {message.role === 'user' && (
                      <div className="flex-shrink-0 w-10 h-10 rounded-xl bg-slate-700 flex items-center justify-center">
                        <User className="w-5 h-5 text-slate-300" />
                      </div>
                    )}
                  </div>
                ))}

                {isLoading && (
                  <div className="flex gap-4 justify-start">
                    <div className="flex-shrink-0 w-10 h-10 rounded-xl bg-gradient-to-br from-emerald-500 to-teal-600 flex items-center justify-center shadow-lg shadow-emerald-500/20">
                      <Bot className="w-5 h-5 text-white" />
                    </div>
                    <div className="bg-slate-800/80 border border-slate-700/50 rounded-2xl px-5 py-4">
                      <div className="flex items-center gap-3">
                        <div className="flex gap-1">
                          <div className="w-2 h-2 rounded-full bg-emerald-500 animate-bounce" style={{ animationDelay: '0ms' }} />
                          <div className="w-2 h-2 rounded-full bg-emerald-500 animate-bounce" style={{ animationDelay: '150ms' }} />
                          <div className="w-2 h-2 rounded-full bg-emerald-500 animate-bounce" style={{ animationDelay: '300ms' }} />
                        </div>
                        <span className="text-sm text-slate-400">Claude analyse votre question...</span>
                      </div>
                    </div>
                  </div>
                )}

                {error && (
                  <div className="bg-red-500/10 border border-red-500/30 rounded-2xl p-4 flex items-start gap-3">
                    <AlertCircle className="w-5 h-5 text-red-400 flex-shrink-0 mt-0.5" />
                    <div>
                      <h3 className="font-semibold text-red-300">Erreur</h3>
                      <p className="text-sm text-red-200/80">{error}</p>
                    </div>
                  </div>
                )}

                <div ref={messagesEndRef} />
              </div>
            )}
          </div>
        </div>

        <div className="border-t border-slate-800/50 bg-slate-900/80 backdrop-blur-xl">
          <div className="max-w-5xl mx-auto px-6 py-4">
            <div className="relative">
              <textarea
                ref={textareaRef}
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                onKeyDown={handleKeyDown}
                placeholder="Posez votre question sur le dossier..."
                disabled={isLoading}
                rows={1}
                className="w-full px-5 py-4 pr-14 bg-slate-800/50 border border-slate-700/50 rounded-2xl text-white placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-emerald-500/50 focus:border-emerald-500/50 disabled:opacity-50 disabled:cursor-not-allowed resize-none transition-all"
              />
              <button
                onClick={() => handleSendMessage(inputValue)}
                disabled={isLoading || !inputValue.trim()}
                className="absolute right-3 bottom-3 w-10 h-10 rounded-xl bg-emerald-600 hover:bg-emerald-500 disabled:bg-slate-700 disabled:cursor-not-allowed flex items-center justify-center transition-all shadow-lg shadow-emerald-500/25 disabled:shadow-none"
              >
                {isLoading ? (
                  <Loader2 className="w-5 h-5 text-white animate-spin" />
                ) : (
                  <Send className="w-5 h-5 text-white" />
                )}
              </button>
            </div>
            <p className="text-xs text-slate-600 mt-2 text-center">
              Appuyez sur Entree pour envoyer, Shift+Entree pour une nouvelle ligne
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
