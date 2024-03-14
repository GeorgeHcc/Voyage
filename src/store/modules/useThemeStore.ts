import { theme } from "antd";
import { create } from "zustand";
import { persist, createJSONStorage } from "zustand/middleware";
type themeStore={
    theme:"dark"|"light"|"auto",
    setTheme:(val:"dark"|"light"|"auto")=>void
}
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
