import React, { createContext, ReactNode } from "react";
import { theme, GlobalToken } from "antd";

const { useToken } = theme;
const CustomThemeContext = createContext<GlobalToken | null>(null);

const CustomThemeProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const { token } = useToken();
  return <CustomThemeContext.Provider value={token}>{children}</CustomThemeContext.Provider>;
};

export default CustomThemeProvider;
