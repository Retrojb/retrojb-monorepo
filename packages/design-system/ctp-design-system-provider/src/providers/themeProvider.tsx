import React, { createContext, useContext } from "react";
import { IDesignTokens } from "../types";
import { CompositeDesignToken } from "../types/IDesignTokens";
import { Themes } from "@ctp/design-system-tokens";

export const ThemeContext = createContext<CompositeDesignToken>(Themes.Light);
export interface IThemeProviderProps {
  children: React.ReactNode;
  theme: "Light" | "Dark";
}
export const ThemeProvider = ({ children, theme }: IThemeProviderProps) => {
  return (
    <ThemeContext.Provider value={Themes[theme]}>
      {children}
    </ThemeContext.Provider>
  );
};

export default ThemeProvider;
