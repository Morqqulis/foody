import { create } from 'zustand'

interface ILoginStore {
  defaultTab: string
  setDefaultTab: (tab: string) => void
}

export const useLoginStore = create<ILoginStore>((set) => ({
  defaultTab: 'login',
  setDefaultTab: (tab: string) => set({ defaultTab: tab })
}))
