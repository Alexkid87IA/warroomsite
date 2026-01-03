import { lazy } from 'react';
import { RouteObject } from 'react-router-dom';

const DashboardPage = lazy(() => import('../pages/Dashboard'));
const EnCoursPage = lazy(() => import('../pages/EnCours'));
const NeutralLensPage = lazy(() => import('../pages/NeutralLens'));
const OyeClarificationPage = lazy(() => import('../pages/OyeClarification'));
const GmailNegligencePage = lazy(() => import('../pages/GmailNegligence'));
const WarStrategyPage = lazy(() => import('../pages/WarStrategy'));
const LiveTimelinePage = lazy(() => import('../pages/LiveTimeline'));
const PsychologyPage = lazy(() => import('../pages/Psychology'));
const PartiesPage = lazy(() => import('../pages/Parties'));
const ContractsPage = lazy(() => import('../pages/Contracts'));
const AssetsPage = lazy(() => import('../pages/Assets'));
const ChronologyPage = lazy(() => import('../pages/Chronology'));
const Meeting14NovPage = lazy(() => import('../pages/Meeting14Nov'));
const MetaTimelinePage = lazy(() => import('../pages/MetaTimeline'));
const TwoFactorPage = lazy(() => import('../pages/TwoFactor'));
const LettersPage = lazy(() => import('../pages/Letters'));
const EvidencePage = lazy(() => import('../pages/Evidence'));
const LegalPage = lazy(() => import('../pages/Legal'));
const AnalysisPage = lazy(() => import('../pages/Analysis'));
const IntelligencePage = lazy(() => import('../pages/Intelligence'));

export const routes: RouteObject[] = [
  {
    path: '/',
    Component: DashboardPage
  },
  {
    path: '/encours',
    Component: EnCoursPage
  },
  {
    path: '/neutral',
    Component: NeutralLensPage
  },
  {
    path: '/oye-clarification',
    Component: OyeClarificationPage
  },
  {
    path: '/gmail',
    Component: GmailNegligencePage
  },
  {
    path: '/war',
    Component: WarStrategyPage
  },
  {
    path: '/live',
    Component: LiveTimelinePage
  },
  {
    path: '/psychology',
    Component: PsychologyPage
  },
  {
    path: '/parties',
    Component: PartiesPage
  },
  {
    path: '/contracts',
    Component: ContractsPage
  },
  {
    path: '/assets',
    Component: AssetsPage
  },
  {
    path: '/chronology',
    Component: ChronologyPage
  },
  {
    path: '/meeting-14nov',
    Component: Meeting14NovPage
  },
  {
    path: '/meta',
    Component: MetaTimelinePage
  },
  {
    path: '/2fa',
    Component: TwoFactorPage
  },
  {
    path: '/letters',
    Component: LettersPage
  },
  {
    path: '/evidence',
    Component: EvidencePage
  },
  {
    path: '/legal',
    Component: LegalPage
  },
  {
    path: '/analysis',
    Component: AnalysisPage
  },
  {
    path: '/intelligence',
    Component: IntelligencePage
  }
];
