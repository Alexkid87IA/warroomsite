import { Suspense } from 'react';
import { BrowserRouter, Routes, Route, useRoutes } from 'react-router-dom';
import MainLayout from './shared/layouts/MainLayout';
import Navigation from './shared/components/Navigation';
import { routes } from './routes';
import ProtectedRoute from './components/ProtectedRoute';

function AppRoutes() {
  const element = useRoutes(routes);
  return (
    <>
      <Navigation />
      <Suspense fallback={
        <div className="flex items-center justify-center min-h-[400px]">
          <div className="text-slate-400">Chargement...</div>
        </div>
      }>
        {element}
      </Suspense>
    </>
  );
}

function App() {
  return (
    <BrowserRouter>
      <ProtectedRoute>
        <MainLayout>
          <AppRoutes />
        </MainLayout>
      </ProtectedRoute>
    </BrowserRouter>
  );
}

export default App;