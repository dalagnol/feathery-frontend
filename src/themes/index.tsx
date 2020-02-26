import React, { useState, useEffect, useContext } from "react";
import { ThemeProvider, ThemeContext } from "styled-components";

import { Container } from "./styles";

export const Context = ThemeContext;

const Themes: Array<string> = ["light", "dark"];

export type Theme = {
  [name: string]: any;
  light: any;
  dark: any;
};

export function Theme(component: string, config: any) {
  const Context = useContext(ThemeContext);
  useEffect(() => {
    Context.Add(component, config);
    return () => Context.Remove(component);
    // eslint-disable-next-line
  }, [Context.Name]);

  return Context;
}

export const Themed = ({ children }: any) => {
  const [Name, _setName] = useState(localStorage.getItem("theme") || "light");
  const [themes, _setThemes] = useState({});

  function SetName(name: string) {
    if (Themes.includes(name)) {
      _setName(name);
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

export function DevTools() {
  return <Container />;
}
