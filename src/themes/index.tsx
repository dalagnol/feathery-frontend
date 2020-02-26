import React, { useState } from "react";
import { ThemeProvider, ThemeContext } from "styled-components";
import { Themes } from "./json";

export * from "./Theme";
export * from "./DevTools";
export const Context = ThemeContext;

export const Themed = ({ children }: any) => {
  const [Name, _setName] = useState(localStorage.getItem("theme") || "light");
  const [themes, _setThemes]: any = useState({});

  function SetName(name: string) {
    if (Themes.includes(name)) {
      _setName(name);
      localStorage.setItem("theme", name);

      return true;
    }

    return false;
  }

  function SwitchTheme() {
    const current = Themes.indexOf(Name);
    SetName(current === Themes.length - 1 ? Themes[0] : Themes[current + 1]);

    return true;
  }

  function Add(component: string, config: any) {
    _setThemes((current: any) => ({ ...current, [component]: config[Name] }));

    return true;
  }

  function Remove(component: string) {
    if (!themes[component]) {
      return false;
    }

    const newState: any = { ...themes };
    delete newState[component];
    _setThemes(newState);

    return true;
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
