import { create } from 'zustand';
import { persist } from 'zustand/middleware';

interface UIState {
  // Sidebar state
  sidebarCollapsed: boolean;
  sidebarSections: Record<string, boolean>;

  // Mobile state
  mobileMenuOpen: boolean;

  // Actions
  toggleSidebar: () => void;
  setSidebarCollapsed: (collapsed: boolean) => void;
  toggleSection: (sectionId: string) => void;
  setMobileMenuOpen: (open: boolean) => void;
}

export const useUIStore = create<UIState>()(
  persist(
    (set) => ({
      sidebarCollapsed: false,
      sidebarSections: {
        principal: true,
        contexte: true,
        preuves: true,
        documents: true,
      },
      mobileMenuOpen: false,

      toggleSidebar: () => set((state) => ({
        sidebarCollapsed: !state.sidebarCollapsed
      })),
      setSidebarCollapsed: (collapsed) => set({ sidebarCollapsed: collapsed }),
      toggleSection: (id) => set((state) => ({
        sidebarSections: {
          ...state.sidebarSections,
          [id]: !state.sidebarSections[id],
        }
      })),
      setMobileMenuOpen: (open) => set({ mobileMenuOpen: open }),
    }),
    { name: 'warroom-ui' }
  )
);
