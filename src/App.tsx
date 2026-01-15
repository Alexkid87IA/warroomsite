import { Suspense } from 'react';
import { BrowserRouter, useRoutes } from 'react-router-dom';
import MainLayout from './shared/layouts/MainLayout';
import { routes } from './routes';
import ProtectedRoute from './components/ProtectedRoute';

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
