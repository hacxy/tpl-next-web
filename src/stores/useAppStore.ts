import { create } from 'zustand'
import { devtools, persist } from 'zustand/middleware'
import type {} from '@redux-devtools/extension'

interface AppState {
  count: number
  increment: () => void
  decrement: () => void
  reset: () => void
}

export const useAppStore = create<AppState>()(
  devtools(
    persist(
      (set) => ({
        count: 0,
        increment: () => set((state) => ({ count: state.count + 1 }), false, 'increment'),
        decrement: () => set((state) => ({ count: state.count - 1 }), false, 'decrement'),
        reset: () => set({ count: 0 }, false, 'reset'),
      }),
      { name: 'app-store' },
    ),
    { name: 'AppStore' },
  ),
)
