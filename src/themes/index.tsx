import React, { useState, useEffect } from "react";
import styled, { ThemeProvider, ThemeContext } from "styled-components";
import { Themes } from "./json";

export * from "./useTheme";
export * from "./DevTools";
export const Context = ThemeContext;

const LS_HISTORY = "theme_devtools_history";

const Host = styled.div<any>`
  transition: all 0.3s ease-in-out;
  ${({ pinned }) =>
    pinned &&
    `
    margin-right: 300px;
  `}
`;

class Event {
  public agent: string;
  public log: string;
  public type: string;
  public timestamp: Date = new Date();
  constructor(agent: string, log: string, type = "none") {
    this.agent = agent;
    this.log = log;
    this.type = type;
  }
}

export const Themed = ({ children }: any) => {
  const [Name, _setName] = useState(localStorage.getItem("theme") || "light");
  const [themes, _setThemes]: any = useState({});
  const [Pinned, SetPinned]: any = useState(false);

  const [History, _setHistory]: any = useState(
    JSON.parse(localStorage.getItem(LS_HISTORY)!) || []
  );

  function log(agent: string, log: string, type?: string) {
    _setHistory((current: any) => [
      ...current,
      new Event(agent || "unknown", log, type),
    ]);

    const l = History.length - 50 > 0 ? History.length - 50 : 0;

    localStorage.setItem(LS_HISTORY, JSON.stringify(History.slice(l)));
  }

  useEffect(() => {
    log("DevTools", "Initialised", "system");

    return () => log("DevTools", "Shut down", "system");
    // eslint-disable-next-line
  }, []);

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
    if (!config[Name]) {
      config[Name] = { "Missing active palette": true };

      log(agent, `Missing active palette "${Name}"`, "error");
    }

    _setThemes((current: any) => ({ ...current, [component]: config[Name] }));
    const amountOf = Object.entries(config[Name]).length;

    if (agent !== "DevTools") {
      log(
        agent,
        `Registered "${component}" ${`[+${amountOf} entries]`}`,
        "info"
      );
    }

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

    log(agent, `Removed "${component}" [-${deleted} entries]`, "info");

    return true;
  }

  function Set(
    component: string,
    property: string,
    value: string,
    agent = "DevTools"
  ) {
    if (value !== undefined) {
      _setThemes((current: any) => ({
        ...current,
        [component]: { ...current[component], [property]: value },
      }));

      log(
        agent,
        `Set ${property} to "${value}" in <${component
          .substring(0, 1)
          .toUpperCase()}${component.slice(1).toLowerCase()} />`
      );
    } else {
      const removal = { ...themes };
      delete removal[component][property];
      _setThemes(removal);

      log(
        agent,
        `Deleted "${property}" off <${component
          .substring(0, 1)
          .toUpperCase()}${component.slice(1).toLowerCase()} />`
      );
    }
  }

  function ForComponent(component: string) {
    return {
      SetName: (name: string) => SetName(name, component),
      SwitchTheme: () => SwitchTheme(component),
      Add: (element: string, config: any) => Add(element, config, component),
      Remove: (element: string) => Remove(element, component),
      Set: (element: string, property: string, value: string) =>
        Set(element, property, value, component),
    };
  }

  function ClearHistory() {
    localStorage.removeItem(LS_HISTORY);
    _setHistory([]);
  }

  return (
    <Host pinned={Pinned}>
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
          ForComponent,
          SetPinned,
          ClearHistory,
          ...themes,
        }}
      >
        {children}
      </ThemeProvider>
    </Host>
  );
};
