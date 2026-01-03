# Quick Start Guide - War Room V4.3

## Project Overview
This is a React + TypeScript application with a modern page-based architecture using React Router.

## Directory Structure

```
src/
├── App.tsx                    # Main app with router
├── pages/                     # 18 independent pages
│   ├── Dashboard/
│   │   ├── DashboardPage.tsx
│   │   ├── data.ts
│   │   └── index.ts
│   ├── Parties/
│   ├── Contracts/
│   └── ... (15 more pages)
├── routes/                    # Routing configuration
│   └── index.tsx
├── shared/                    # Shared code
│   ├── components/
│   │   └── Navigation.tsx
│   └── layouts/
│       └── MainLayout.tsx
├── components/                # UI components
│   ├── Badge.tsx
│   ├── Card.tsx
│   └── StatCard.tsx
└── data/                      # Legacy data (deprecated)
    └── allData.ts            # Being phased out
```

## Common Tasks

### Start Development Server
```bash
npm run dev
```
Visit http://localhost:5173

### Build for Production
```bash
npm run build
```
Output in `dist/` folder

### Edit Data
Each page has its own data file in its directory.

Example - editing dashboard data:
```typescript
// src/pages/Dashboard/data.ts
export const summaryData = {
  situation: "Your updated text...",
  debt: 142000,
  // ...
};
```

### Edit a Page Component
Each page is in its own directory.

Example - editing Dashboard page:
```typescript
// src/pages/Dashboard/DashboardPage.tsx
import { Card } from '../../components/Card';
import { summaryData } from './data';

export default function DashboardPage() {
  return (
    <div className="space-y-6">
      {/* Your JSX here */}
    </div>
  );
}
```

### Add a New Page
1. Create directory: `mkdir -p src/pages/NewPage`
2. Create data file: `src/pages/NewPage/data.ts`
3. Create page component: `src/pages/NewPage/NewPagePage.tsx`
4. Create index export: `src/pages/NewPage/index.ts`
5. Add route in `src/routes/index.tsx`
6. Add navigation link in `src/shared/components/Navigation.tsx`

### Navigate Between Pages
Pages have clean URLs:
- `/` - Dashboard
- `/parties` - Parties
- `/contracts` - Contracts
- `/assets` - Assets
- etc.

### Import Data in Pages
```typescript
// Each page imports from its local data file
import { dashboardData } from './data';
import { partiesData } from './data';
```

### Import Components
```typescript
import { Badge } from '../../components/Badge';
import { Card } from '../../components/Card';
import { StatCard } from '../../components/StatCard';
```

## Key Files

| File | Purpose | Lines |
|------|---------|------|
| `App.tsx` | Main app with router | ~33 lines |
| `routes/index.tsx` | Route configuration | ~70 lines |
| `shared/layouts/MainLayout.tsx` | Main layout wrapper | ~40 lines |
| `shared/components/Navigation.tsx` | Navigation component | ~60 lines |
| `pages/Dashboard/*` | Dashboard page | ~100 lines |
| `components/Badge.tsx` | Badge component | 38 lines |
| `components/Card.tsx` | Card component | 40 lines |
| `components/StatCard.tsx` | Stat card | 31 lines |

## Component Types

### Badge
```tsx
<Badge type="critical">Text</Badge>
```
Types: critical, devastating, very_strong, strong, medium, leverage, and more (20+ types)

### Card
```tsx
<Card title="Title" accent="blue" icon="🔥">
  Content here
</Card>
```
Accents: slate, blue, red, emerald, amber, purple, fuchsia, cyan

### StatCard
```tsx
<StatCard
  label="Label"
  value="100"
  sublabel="Optional"
  type="danger"
/>
```
Types: default, danger, success, warning, info

## 18 Pages (Routes)

| URL | Page | Description |
|-----|------|-------------|
| `/` | Dashboard | Main overview |
| `/neutral` | Neutral Lens | Arbitrage-ready view |
| `/oye-clarification` | OYE Clarification | OYE recovery strategy |
| `/gmail` | Gmail Negligence | Gmail evidence |
| `/war` | War Strategy | Battle strategy |
| `/live` | Live Timeline | Current status |
| `/psychology` | Psychology | CC profile |
| `/parties` | Parties | All parties |
| `/contracts` | Contracts | Contracts |
| `/assets` | Assets | Assets |
| `/chronology` | Chronology | Timeline |
| `/meeting-14nov` | Meeting 14 Nov | Nov 14 meeting |
| `/meta` | Meta Timeline | Meta emails |
| `/2fa` | Two Factor | 2FA evidence |
| `/letters` | Letters | Letters |
| `/evidence` | Evidence | Evidence |
| `/legal` | Legal | Legal arsenal |
| `/analysis` | Analysis | Analysis |

## Tips

### Modifying Data
- Each page has its own `data.ts` file in `src/pages/[PageName]/`
- Changes hot-reload instantly
- Data is co-located with the component that uses it

### Adding New Pages
1. Create directory in `src/pages/`
2. Add data.ts, [PageName]Page.tsx, and index.ts
3. Register route in `src/routes/index.tsx`
4. Add navigation link in `src/shared/components/Navigation.tsx`

### Navigation
- Use `<Link to="/page">` for navigation
- Or programmatic: `useNavigate()` hook
- Back/forward browser buttons work automatically

### Debugging
- Open browser console (F12)
- Check for TypeScript errors in terminal
- Vite hot-reload updates instantly
- React Router DevTools available

## Getting Help

- Architecture documentation: `REFACTORING_COMPLETE.md`
- Quick reference: This file
- Before refactoring: allData.ts (1,675 lines), sections.tsx (1,161 lines)
- After refactoring: 18 modular pages + routing

## Build Info
- Framework: React 18 + TypeScript
- Routing: React Router v6
- Build tool: Vite 5.4.8
- Styling: Tailwind CSS (utility classes)
- Code Splitting: Lazy loading for all pages
- Build: ✅ Successful
