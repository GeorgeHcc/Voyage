import { createContext } from "react";

export type LayoutContextType = {
  outSiderWidth: number;
  innerSiderWidth: number;
};
const LayoutContext = createContext({
  outSiderWidth: 70,
  innerSiderWidth: 350,
} as LayoutContextType);

export { LayoutContext };
