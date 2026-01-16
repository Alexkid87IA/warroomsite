import { memo, useState, useEffect } from 'react';
import { AlertTriangle, Clock, X, ChevronRight } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { cn } from '../lib/utils';

interface Deadline {
  id: string;
  title: string;
  date: Date;
  description: string;
  type: 'critical' | 'warning' | 'info';
  path: string;
}

const DEADLINES: Deadline[] = [
  {
    id: 'deadline-15j',
    title: 'Délai 15 jours',
    date: new Date('2026-01-31'),
    description: 'Documents + Transfert Buzzly/VoyagerLoin',
    type: 'critical',
    path: '/encours',
  },
  {
    id: 'deadline-30j',
    title: 'Délai 30 jours',
    date: new Date('2026-02-15'),
    description: 'Position formelle sur réparation préjudice',
    type: 'warning',
    path: '/encours',
  },
];

const calculateTimeLeft = (targetDate: Date) => {
  const now = new Date();
  const difference = targetDate.getTime() - now.getTime();

  if (difference <= 0) {
    return { days: 0, hours: 0, minutes: 0, expired: true };
  }

  return {
    days: Math.floor(difference / (1000 * 60 * 60 * 24)),
    hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
    minutes: Math.floor((difference / 1000 / 60) % 60),
    expired: false,
  };
};

const formatCountdown = (timeLeft: ReturnType<typeof calculateTimeLeft>) => {
  if (timeLeft.expired) return 'EXPIRÉ';
  if (timeLeft.days > 0) return `${timeLeft.days}j ${timeLeft.hours}h`;
  if (timeLeft.hours > 0) return `${timeLeft.hours}h ${timeLeft.minutes}m`;
  return `${timeLeft.minutes}m`;
};

const DeadlineCard = memo<{ deadline: Deadline; onDismiss: () => void }>(
  ({ deadline, onDismiss }) => {
    const navigate = useNavigate();
    const [timeLeft, setTimeLeft] = useState(calculateTimeLeft(deadline.date));

    useEffect(() => {
      const timer = setInterval(() => {
        setTimeLeft(calculateTimeLeft(deadline.date));
      }, 60000); // Update every minute

      return () => clearInterval(timer);
    }, [deadline.date]);

    const typeStyles = {
      critical: 'border-red-500/50 bg-red-500/10',
      warning: 'border-amber-500/50 bg-amber-500/10',
      info: 'border-blue-500/50 bg-blue-500/10',
    };

    const countdownStyles = {
      critical: 'text-red-400 bg-red-500/20',
      warning: 'text-amber-400 bg-amber-500/20',
      info: 'text-blue-400 bg-blue-500/20',
    };

    return (
      <div
        className={cn(
          'flex items-center gap-3 p-3 rounded-lg border cursor-pointer transition-all hover:scale-[1.02]',
          typeStyles[deadline.type]
        )}
        onClick={() => navigate(deadline.path)}
      >
        {deadline.type === 'critical' ? (
          <AlertTriangle className="text-red-400 shrink-0" size={20} />
        ) : (
          <Clock className="text-amber-400 shrink-0" size={20} />
        )}

        <div className="flex-1 min-w-0">
          <div className="text-slate-200 font-medium text-sm">{deadline.title}</div>
          <div className="text-slate-400 text-xs truncate">{deadline.description}</div>
        </div>

        <div
          className={cn(
            'px-2 py-1 rounded text-xs font-mono font-bold',
            countdownStyles[deadline.type],
            timeLeft.expired && 'animate-pulse'
          )}
        >
          {formatCountdown(timeLeft)}
        </div>

        <button
          onClick={(e) => {
            e.stopPropagation();
            onDismiss();
          }}
          className="p-1 text-slate-500 hover:text-slate-300"
        >
          <X size={14} />
        </button>
      </div>
    );
  }
);

DeadlineCard.displayName = 'DeadlineCard';

export const DeadlineAlerts = memo(() => {
  const [dismissedIds, setDismissedIds] = useState<string[]>(() => {
    const stored = localStorage.getItem('dismissed-deadlines');
    return stored ? JSON.parse(stored) : [];
  });
  const [isExpanded, setIsExpanded] = useState(true);

  const visibleDeadlines = DEADLINES.filter((d) => !dismissedIds.includes(d.id));

  const handleDismiss = (id: string) => {
    const newDismissed = [...dismissedIds, id];
    setDismissedIds(newDismissed);
    localStorage.setItem('dismissed-deadlines', JSON.stringify(newDismissed));
  };

  if (visibleDeadlines.length === 0) return null;

  return (
    <div className="fixed bottom-4 right-4 z-40 w-80">
      <div className="bg-slate-900/95 backdrop-blur-sm border border-slate-700 rounded-xl shadow-xl overflow-hidden">
        {/* Header */}
        <button
          onClick={() => setIsExpanded(!isExpanded)}
          className="w-full flex items-center justify-between px-4 py-3 bg-slate-800/50 hover:bg-slate-800/70 transition-colors"
        >
          <div className="flex items-center gap-2">
            <AlertTriangle className="text-amber-400" size={18} />
            <span className="text-slate-200 font-medium text-sm">
              Délais ({visibleDeadlines.length})
            </span>
          </div>
          <ChevronRight
            className={cn(
              'text-slate-400 transition-transform',
              isExpanded && 'rotate-90'
            )}
            size={18}
          />
        </button>

        {/* Content */}
        {isExpanded && (
          <div className="p-3 space-y-2">
            {visibleDeadlines.map((deadline) => (
              <DeadlineCard
                key={deadline.id}
                deadline={deadline}
                onDismiss={() => handleDismiss(deadline.id)}
              />
            ))}
          </div>
        )}
      </div>
    </div>
  );
});

DeadlineAlerts.displayName = 'DeadlineAlerts';
