import React, { useState } from "react";
import { ThemeProvider, ThemeContext } from "styled-components";
import { Themes } from "./json";

export * from "./Theme";
export * from "./DevTools";
export const Context = ThemeContext;

class Event {
  public agent: string;
  public log: string;
  public timestamp: Date = new Date();
  constructor(agent: string, log: string) {
    this.agent = agent;
    this.log = log;
  }
}

export const Themed = ({ children }: any) => {
  const [Name, _setName] = useState(localStorage.getItem("theme") || "light");
  const [themes, _setThemes]: any = useState({});
  const [History, _setHistory]: any = useState([]);

  function log(agent: string, log: string) {
    _setHistory((current: any) => [
      ...current,
      new Event(agent || "unknown", log),
    ]);
  }

  function SetName(name: string, agent = "") {
    if (typeof agent !== "string") {
      agent = "";
    }

    if (Themes.includes(name)) {
      _setName(name);
      localStorage.setItem("theme", name);

      log(agent, `Set theme to ${name}`);

      return true;
    }

    return false;
  }

  function SwitchTheme(agent = "") {
    if (typeof agent !== "string") {
      agent = "";
    }

    const current = Themes.indexOf(Name);
    const name =
      current === Themes.length - 1 ? Themes[0] : Themes[current + 1];
    _setName(name);

    log(agent, `Switched theme to ${name}`);

    return true;
  }

  function Add(component: string, config: any, agent = "") {
    _setThemes((current: any) => ({ ...current, [component]: config[Name] }));
    const amountOf = Object.entries(config).length;
    log(
      agent,
      `${
        agent !== "DevTools" ? "Registered" : `Updated ${amountOf} entries on`
      } "${component}" ${agent !== "DevTools" ? `[+${amountOf} entries]` : ""}`
    );

    return true;
  }

  function Remove(component: string, agent = "") {
    if (!themes[component]) {
      return false;
    }

    const newState: any = { ...themes };
    const deleted = Object.entries(newState[component] || {}).length;
    delete newState[component];
    _setThemes(newState);

    log(agent, `Removed component "${component}" [-${deleted} entries]`);

    return true;
  }

  function Set(component: string, property: string, value: string) {
    _setThemes((current: any) => ({
      ...current,
      [component]: { ...current[component], [property]: value },
    }));

    log("DevTools", `Set ${property} to ${value} in "${component}"`);
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
        Set,
        History,
        ...themes,
      }}
    >
      {children}
    </ThemeProvider>
  );
};
