import { Suspense } from 'react';
import { BrowserRouter, useRoutes } from 'react-router-dom';
import MainLayout from './shared/layouts/MainLayout';
import { routes } from './routes';
import ProtectedRoute from './components/ProtectedRoute';
import { CommandPalette } from './components/CommandPalette';
import { DeadlineAlerts } from './components/DeadlineAlerts';
import { FinancialCalculator } from './components/FinancialCalculator';
import { DecisionMatrix } from './components/DecisionMatrix';
import { useKeyboardShortcuts } from './hooks/useKeyboardShortcuts';

function AppRoutes() {
  const element = useRoutes(routes);
  return (
    <Suspense fallback={
      <div className="flex items-center justify-center min-h-[400px]">
        <div className="text-slate-400">Chargement...</div>
      </div>
    }>
      {element}
    </Suspense>
  );
}

function AppContent() {
  // Initialize keyboard shortcuts
  useKeyboardShortcuts();

  return (
    <>
      <MainLayout>
        <AppRoutes />
      </MainLayout>
      {/* Global components */}
      <CommandPalette />
      <DeadlineAlerts />
      <FinancialCalculator />
      <DecisionMatrix />
    </>
  );
}

function App() {
  return (
    <BrowserRouter>
      <ProtectedRoute>
        <AppContent />
      </ProtectedRoute>
    </BrowserRouter>
  );
}

export default App;
