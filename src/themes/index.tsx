import React, { useState, useEffect } from "react";
import { palette } from "./Theme";
import { ThemeProvider } from "styled-components";
import { observer } from "mobx-react";
import { C } from "./helpers";
import Log from "./Log";

import { themes } from "./json";

import { Host } from "./styles";

export * from "./useTheme";

export const Themed = observer(({ children }: any) => {
  const [Themes, setThemes]: any = useState({});
  const [DevTools, SetDevTools] = useState(false);
  const [Theme, setTheme] = useState<palette>(
    (localStorage.getItem("theme") as palette) || themes[0]
  );

  const Use = (agent = "") => (name: palette) => {
    if (themes.includes(name)) {
      setTheme(name);
      localStorage.setItem("theme", name);
      Log.system(agent, `Set palette to ${name}`);
      return true;
    }

    Log.error(agent, `Attempted to use a non-existing palette "${name}"`);
    return false;
  };

  const Switch = (agent = "") => () => {
    const current = themes.indexOf(Theme);
    const name =
      current === themes.length - 1 ? themes[0] : themes[current + 1];
    setTheme(name);
    localStorage.setItem("theme", name);
    Log.system(agent, `Switched palette to ${name}`);

    return true;
  };

  const Add = (agent = "") => (name: string, config: any = {}) => {
    if (Themes[name]) {
      Log.warn(agent, `Overwrote theme "${name}"`);
    } else {
      Log.info(agent, `Added theme "${name}"`);
    }

    setThemes((currentThemes: any) => ({
      ...currentThemes,
      [name]: config[Theme],
    }));

    if (!config[Theme]) {
      Log.error(C(name), "Missing current palette");
    }
    return true;
  };

  const Remove = (agent = "") => (name: string) => {
    if (Themes[name]) {
      const newState = { ...Themes };
      delete newState[name];
      setThemes(newState);

      Log.info(agent, `Removed theme "${name}`);
      return true;
    }

    Log.error(agent, `Attempted to remove non-existing theme "${name}`);
    return false;
  };

  const Set = (agent = "") => (
    theme: string,
    property: string,
    value: string
  ) => {
    if (Themes[theme]) {
      setThemes({
        ...Themes,
        [theme]: { ...Themes[theme], [property]: value },
      });

      Log.system(agent, `Set ${property} to "${value}" in ${C(theme)}`);
      return true;
    }

    Log.system(
      agent,
      `Attempted to set ${property} to "${value}" in non-existing theme ${C(
        theme
      )}`
    );
    return false;
  };

  const For = (agent: string) => ({
    Name: Theme,
    Use: Use(agent),
    Switch: Switch(agent),
    Add: Add(agent),
    Remove: Remove(agent),
    Set: Set(agent),
  });

  useEffect(() => {
    Log.DevTools = DevTools;
  }, [DevTools]);

  return (
    <Host DevTools={DevTools}>
      <ThemeProvider
        theme={{
          Name: Theme,
          Use,
          Switch,
          Add,
          Remove,
          Set,
          SetDevTools,
          ClearHistory: Log.clear,
          For,
          ...Themes,
        }}
      >
        {children}
      </ThemeProvider>
    </Host>
  );
});
