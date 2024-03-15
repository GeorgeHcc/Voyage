import { create } from "zustand";
import { persist } from "zustand/middleware";

export type ThemeType = "dark" | "light" | "auto";
type themeStore = {
  theme: ThemeType;
  setTheme: (val: ThemeType) => void;
};
const useThemeStore = create<themeStore>()(
  persist(
    (set) => ({
      theme: "light",
      setTheme: (val) => set({ theme: val }),
    }),
    {
      name: "theme",
      // storage:createJSONStorage()
    }
  )
);

export default useThemeStore;
