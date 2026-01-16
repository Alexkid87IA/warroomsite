import { memo, useState, useMemo } from 'react';
import { Calculator, TrendingUp, AlertTriangle, DollarSign, X } from 'lucide-react';
import { cn } from '../lib/utils';
import { useCoreDataStore, formatCurrency } from '../stores';

interface CalculatorState {
  isOpen: boolean;
  open: () => void;
  close: () => void;
}

// Custom hook for calculator state
import { create } from 'zustand';
export const useCalculatorStore = create<CalculatorState>((set) => ({
  isOpen: false,
  open: () => set({ isOpen: true }),
  close: () => set({ isOpen: false }),
}));

const formatPercent = (value: number) => `${value.toFixed(1)}%`;

export const FinancialCalculator = memo(() => {
  const { isOpen, close } = useCalculatorStore();
  const { financial } = useCoreDataStore();

  // Local state for calculations
  const [monthsDelay, setMonthsDelay] = useState(6);
  const [interestRate, setInterestRate] = useState(5);
  const [arbitrageCost, setArbitrageCost] = useState(200000);

  // Calculations
  const calculations = useMemo(() => {
    const ccClaim = financial.debt; // 142,000€
    const adnCounterClaim = financial.counterClaimMin; // 1,200,000€

    // Interest on CC claim (if they win)
    const ccInterest = ccClaim * (interestRate / 100) * (monthsDelay / 12);
    const ccTotalWithInterest = ccClaim + ccInterest;

    // Clause 6 penalties (×3 if >6 months delay)
    const clause6Penalty = monthsDelay > 6 ? ccClaim * 3 : 0;
    const ccMaxClaim = ccTotalWithInterest + clause6Penalty;

    // Net position
    const netPosition = adnCounterClaim - ccMaxClaim;

    // Arbitrage analysis
    const arbitrageBreakeven = arbitrageCost * 2; // Both parties pay
    const worthArbitrageForCC = ccMaxClaim > arbitrageBreakeven;
    const worthArbitrageForADN = adnCounterClaim > arbitrageBreakeven;

    // Settlement analysis
    const settlementRange = {
      min: 0, // Full debt annulation
      max: ccClaim * 0.5, // 50% discount
      recommended: Math.max(0, ccClaim - adnCounterClaim * 0.1), // 10% of counterclaim
    };

    return {
      ccClaim,
      ccInterest,
      ccTotalWithInterest,
      clause6Penalty,
      ccMaxClaim,
      adnCounterClaim,
      netPosition,
      arbitrageCost,
      arbitrageBreakeven,
      worthArbitrageForCC,
      worthArbitrageForADN,
      settlementRange,
    };
  }, [financial, monthsDelay, interestRate, arbitrageCost]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      {/* Backdrop */}
      <div className="absolute inset-0 bg-black/60 backdrop-blur-sm" onClick={close} />

      {/* Modal */}
      <div className="relative w-full max-w-4xl bg-slate-900 border border-slate-700 rounded-xl shadow-2xl overflow-hidden max-h-[90vh] overflow-y-auto">
        {/* Header */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-slate-700 bg-slate-800/50">
          <div className="flex items-center gap-3">
            <Calculator className="text-emerald-400" size={24} />
            <h2 className="text-xl font-semibold text-slate-200">Calculateur Financier</h2>
          </div>
          <button onClick={close} className="p-2 text-slate-400 hover:text-slate-200">
            <X size={20} />
          </button>
        </div>

        {/* Content */}
        <div className="p-6 space-y-6">
          {/* Input controls */}
          <div className="grid grid-cols-3 gap-4">
            <div className="bg-slate-800/50 rounded-lg p-4">
              <label className="block text-sm text-slate-400 mb-2">Mois de retard</label>
              <input
                type="range"
                min="0"
                max="24"
                value={monthsDelay}
                onChange={(e) => setMonthsDelay(Number(e.target.value))}
                className="w-full"
              />
              <div className="text-lg font-bold text-slate-200 mt-1">{monthsDelay} mois</div>
            </div>

            <div className="bg-slate-800/50 rounded-lg p-4">
              <label className="block text-sm text-slate-400 mb-2">Taux d'intérêt annuel</label>
              <input
                type="range"
                min="0"
                max="15"
                step="0.5"
                value={interestRate}
                onChange={(e) => setInterestRate(Number(e.target.value))}
                className="w-full"
              />
              <div className="text-lg font-bold text-slate-200 mt-1">{formatPercent(interestRate)}</div>
            </div>

            <div className="bg-slate-800/50 rounded-lg p-4">
              <label className="block text-sm text-slate-400 mb-2">Coût arbitrage estimé</label>
              <input
                type="range"
                min="80000"
                max="300000"
                step="10000"
                value={arbitrageCost}
                onChange={(e) => setArbitrageCost(Number(e.target.value))}
                className="w-full"
              />
              <div className="text-lg font-bold text-slate-200 mt-1">{formatCurrency(arbitrageCost)}</div>
            </div>
          </div>

          {/* Main comparison */}
          <div className="grid grid-cols-2 gap-6">
            {/* CC Claim */}
            <div className="bg-red-500/10 border border-red-500/30 rounded-xl p-5">
              <h3 className="text-red-400 font-semibold mb-4 flex items-center gap-2">
                <AlertTriangle size={18} />
                Créance CC (si ils gagnent)
              </h3>
              <div className="space-y-3">
                <div className="flex justify-between">
                  <span className="text-slate-400">Principal</span>
                  <span className="text-slate-200 font-mono">{formatCurrency(calculations.ccClaim)}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-slate-400">Intérêts ({monthsDelay} mois)</span>
                  <span className="text-slate-200 font-mono">+{formatCurrency(calculations.ccInterest)}</span>
                </div>
                {calculations.clause6Penalty > 0 && (
                  <div className="flex justify-between text-red-400">
                    <span>Clause 6 (pénalités ×3)</span>
                    <span className="font-mono">+{formatCurrency(calculations.clause6Penalty)}</span>
                  </div>
                )}
                <div className="border-t border-red-500/30 pt-3 flex justify-between">
                  <span className="text-red-300 font-semibold">TOTAL MAX CC</span>
                  <span className="text-red-300 font-mono font-bold">{formatCurrency(calculations.ccMaxClaim)}</span>
                </div>
              </div>
            </div>

            {/* ADN Counter-claim */}
            <div className="bg-emerald-500/10 border border-emerald-500/30 rounded-xl p-5">
              <h3 className="text-emerald-400 font-semibold mb-4 flex items-center gap-2">
                <TrendingUp size={18} />
                Contre-créance ADN
              </h3>
              <div className="space-y-3">
                <div className="flex justify-between">
                  <span className="text-slate-400">Préjudice Oye</span>
                  <span className="text-slate-200 font-mono">{formatCurrency(500000)}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-slate-400">Revenus perdus</span>
                  <span className="text-slate-200 font-mono">+{formatCurrency(400000)}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-slate-400">Atteinte image</span>
                  <span className="text-slate-200 font-mono">+{formatCurrency(200000)}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-slate-400">Opportunités perdues</span>
                  <span className="text-slate-200 font-mono">+{formatCurrency(100000)}</span>
                </div>
                <div className="border-t border-emerald-500/30 pt-3 flex justify-between">
                  <span className="text-emerald-300 font-semibold">TOTAL ADN</span>
                  <span className="text-emerald-300 font-mono font-bold">{formatCurrency(calculations.adnCounterClaim)}</span>
                </div>
              </div>
            </div>
          </div>

          {/* Net position */}
          <div className={cn(
            'rounded-xl p-5 text-center',
            calculations.netPosition > 0
              ? 'bg-emerald-500/10 border border-emerald-500/30'
              : 'bg-red-500/10 border border-red-500/30'
          )}>
            <div className="text-slate-400 mb-2">Position nette ADN</div>
            <div className={cn(
              'text-3xl font-bold font-mono',
              calculations.netPosition > 0 ? 'text-emerald-400' : 'text-red-400'
            )}>
              {calculations.netPosition > 0 ? '+' : ''}{formatCurrency(calculations.netPosition)}
            </div>
            <div className="text-slate-400 text-sm mt-2">
              {calculations.netPosition > 0
                ? 'ADN est créancier net — position de force'
                : 'Attention : position déficitaire'}
            </div>
          </div>

          {/* Arbitrage analysis */}
          <div className="bg-slate-800/50 rounded-xl p-5">
            <h3 className="text-slate-200 font-semibold mb-4 flex items-center gap-2">
              <DollarSign size={18} />
              Analyse Arbitrage
            </h3>
            <div className="grid grid-cols-2 gap-4">
              <div className={cn(
                'p-4 rounded-lg',
                calculations.worthArbitrageForCC ? 'bg-amber-500/10' : 'bg-emerald-500/10'
              )}>
                <div className="text-slate-400 text-sm">Pour CC</div>
                <div className={cn(
                  'font-semibold',
                  calculations.worthArbitrageForCC ? 'text-amber-400' : 'text-emerald-400'
                )}>
                  {calculations.worthArbitrageForCC
                    ? 'Rentable SI ils gagnent tout'
                    : 'Pas rentable — coûts > gains potentiels'}
                </div>
              </div>
              <div className={cn(
                'p-4 rounded-lg',
                calculations.worthArbitrageForADN ? 'bg-emerald-500/10' : 'bg-amber-500/10'
              )}>
                <div className="text-slate-400 text-sm">Pour ADN</div>
                <div className={cn(
                  'font-semibold',
                  calculations.worthArbitrageForADN ? 'text-emerald-400' : 'text-amber-400'
                )}>
                  {calculations.worthArbitrageForADN
                    ? 'Rentable — contre-créance couvre largement'
                    : 'Risqué — analyser options'}
                </div>
              </div>
            </div>
            <div className="mt-4 p-4 bg-slate-700/30 rounded-lg">
              <div className="text-slate-400 text-sm mb-2">Coût total arbitrage (2 parties)</div>
              <div className="text-slate-200 font-mono">{formatCurrency(calculations.arbitrageBreakeven)}</div>
            </div>
          </div>

          {/* Settlement recommendation */}
          <div className="bg-blue-500/10 border border-blue-500/30 rounded-xl p-5">
            <h3 className="text-blue-400 font-semibold mb-4">Recommandation Settlement</h3>
            <div className="space-y-2">
              <div className="flex justify-between">
                <span className="text-slate-400">Position ADN idéale</span>
                <span className="text-emerald-400 font-mono">Annulation totale (0€)</span>
              </div>
              <div className="flex justify-between">
                <span className="text-slate-400">Position CC probable</span>
                <span className="text-red-400 font-mono">{formatCurrency(calculations.ccClaim)} minimum</span>
              </div>
              <div className="flex justify-between border-t border-blue-500/30 pt-2 mt-2">
                <span className="text-blue-300">Zone de négociation</span>
                <span className="text-blue-300 font-mono">0€ - {formatCurrency(calculations.ccClaim * 0.3)}</span>
              </div>
            </div>
            <div className="mt-4 text-sm text-slate-400">
              Avec une contre-créance de {formatCurrency(calculations.adnCounterClaim)}, ADN est en position
              de force pour négocier une annulation complète ou quasi-complète de la dette.
            </div>
          </div>
        </div>
      </div>
    </div>
  );
});

FinancialCalculator.displayName = 'FinancialCalculator';
