/** @format */

import { create } from "zustand";
import { persist, createJSONStorage } from "zustand/middleware";

interface AppState {
  selectedUserId: number | null;
  hideCompleted: boolean;
  setSelectedUserId: (userId: number | null) => void;
  setHideCompleted: (hide: boolean) => void;
  resetFilter: () => void;
}

export const useAppStore = create<AppState>()(
  persist(
    (set) => ({
      selectedUserId: null,
      hideCompleted: false,
      setSelectedUserId: (userId) =>
        set({ selectedUserId: userId, hideCompleted: false }),
      setHideCompleted: (hide) => set({ hideCompleted: hide }),
      resetFilter: () => set({ hideCompleted: false }),
    }),
    {
      name: "app-storage",
      storage: createJSONStorage(() => sessionStorage),
    }
  )
);
