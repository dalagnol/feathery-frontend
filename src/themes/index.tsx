import React, { useState } from "react";
import { ThemeProvider, ThemeContext } from "styled-components";
import { Themes } from "./json";

export * from "./Theme";
export * from "./DevTools";
export const Context = ThemeContext;

export const Themed = ({ children }: any) => {
  const [Name, _setName] = useState(localStorage.getItem("theme") || "light");
  const [themes, _setThemes] = useState({});

  function SetName(name: string) {
    if (Themes.includes(name)) {
      _setName(name);
      localStorage.setItem("theme", name);
    }
  }

  function SwitchTheme() {
    const current = Themes.indexOf(Name);
    SetName(current === Themes.length - 1 ? Themes[0] : Themes[current + 1]);
  }

  function Add(component: string, config: any) {
    _setThemes((current: any) => ({ ...current, [component]: config[Name] }));
  }

  function Remove(component: string) {
    const newState: any = { ...themes };
    delete newState[component];
    _setThemes(newState);
  }

  return (
    <ThemeProvider
      theme={{
        Themes,
        Name,
        SetName,
        SwitchTheme,
        Add,
        Remove,
        ...themes,
      }}
    >
      {children}
    </ThemeProvider>
  );
};
