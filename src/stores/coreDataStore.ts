import { create } from 'zustand';
import { devtools } from 'zustand/middleware';

interface FinancialData {
  debt: number;
  counterClaimMin: number;
  counterClaimMax: number;
  alreadyPaid: number;
  advanceReceived: number;
  toRepay: number;
  ccDemand: number;
  monthsInaction: number;
}

interface CoreDataState {
  financial: FinancialData;
  lastUpdate: string;
  currentPhase: 'setup' | 'incident' | 'negotiation' | 'escalation' | 'offensive';

  // Actions
  updateFinancial: (data: Partial<FinancialData>) => void;
  setCurrentPhase: (phase: CoreDataState['currentPhase']) => void;
}

export const useCoreDataStore = create<CoreDataState>()(
  devtools(
    (set) => ({
      financial: {
        debt: 142000,
        counterClaimMin: 1000000,
        counterClaimMax: 1300000,
        alreadyPaid: 70000,
        advanceReceived: 150000,
        toRepay: 210000,
        ccDemand: 11351.89,
        monthsInaction: 6,
      },
      lastUpdate: '16 janvier 2026',
      currentPhase: 'offensive',

      updateFinancial: (data) => set((state) => ({
        financial: { ...state.financial, ...data }
      })),
      setCurrentPhase: (phase) => set({ currentPhase: phase }),
    }),
    { name: 'core-data' }
  )
);

// Helpers for formatting
export const formatCurrency = (amount: number): string => {
  return new Intl.NumberFormat('fr-FR', {
    style: 'currency',
    currency: 'EUR',
    minimumFractionDigits: 0,
    maximumFractionDigits: 0,
  }).format(amount);
};

export const formatCurrencyShort = (amount: number): string => {
  if (amount >= 1000000) {
    return `${(amount / 1000000).toFixed(1)}M €`.replace('.0', '');
  }
  if (amount >= 1000) {
    return `${Math.round(amount / 1000)}k €`;
  }
  return `${amount} €`;
};
