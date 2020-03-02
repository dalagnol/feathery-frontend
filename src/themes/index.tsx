/* eslint-disable @typescript-eslint/camelcase */
import React, { useState, useEffect, useCallback } from "react";
import { palette } from "./Theme";
import { ThemeProvider } from "styled-components";
import { observer } from "mobx-react";
import { C, Load, Save } from "./helpers";
import Log from "./Log";

import { themes } from "./json";

import "./styles/fonts.scss";
import "./styles/animations";

export * from "./useTheme";
export * from "./DevTools/DevTools";

const LS_DevTools = "theme_devtools";

export const Themed = observer(({ children }: any) => {
  const [Themes, setThemes]: any = useState({});
  const [DevTools, SetDevTools] = useState(Load(LS_DevTools));
  const [Theme, setTheme] = useState<palette>(
    (Load("theme") as palette) || themes[0]
  );

  const Use = useCallback(
    (agent = "") => (name: palette) => {
      name = name.toLowerCase() as palette;

      if (themes.includes(name)) {
        setTheme(name);

        localStorage.setItem("theme", name);

        Log.system(agent, `Set palette to ${name}`);

        return true;
      }

      Log.error(agent, `Attempted to use a non-existing palette "${name}"`);
      return false;
    },
    []
  );

  const Switch = useCallback(
    (agent = "") => () => {
      const current = themes.indexOf(Theme);
      const name =
        current === themes.length - 1 ? themes[0] : themes[current + 1];

      localStorage.setItem("theme", name);

      Log.system(agent, `Switched palette to ${name}`);

      setTheme(name);

      return true;
    },
    [Theme]
  );

  const Add = useCallback(
    (agent = "") => (name: string, config: any = {}) => {
      name = name.toLowerCase();

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
    },
    [Themes, Theme]
  );

  const Remove = useCallback(
    (agent = "") => (name: string) => {
      name = name.toLowerCase();

      const newState = { ...Themes };
      delete newState[name];
      setThemes(newState);

      Log.info(agent, `Removed theme "${name}"`);
      return true;
    },
    [Themes]
  );

  const Set = useCallback(
    (agent = "") => (theme: string, property: string, value: string) => {
      theme = theme.toLowerCase();

      if (!Themes[theme]) {
        Log.warn(agent, `Created theme ${C(theme)}`);
      }

      setThemes({
        ...Themes,
        [theme]: { ...Themes[theme], [property]: value },
      });

      Log.system(agent, `Set ${property} to "${value}" in ${C(theme)}`);
      return true;
    },
    [Themes]
  );

  const Unset = useCallback(
    (agent = "") => (theme: string, property: string) => {
      theme = theme.toLowerCase();

      if (Themes[theme]) {
        if (Themes[theme][property]) {
          const newState = { ...Themes };
          delete newState[theme][property];
          setThemes(newState);

          Log.system(agent, `Unset ${property} off ${C(theme)}`);
          return true;
        }

        Log.error(
          agent,
          `Attempted to unset non-existing ${property} off ${C(theme)}`
        );
      }

      Log.error(
        agent,
        `Attempted to unset ${property} off non-existing theme ${C(theme)}`
      );
      return false;
    },
    [Themes]
  );

  const ToggleDevTools = useCallback(() => {
    SetDevTools(!DevTools);

    Save(LS_DevTools, !DevTools);
  }, [DevTools]);

  const For = useCallback(
    (agent: string) => ({
      Name: Theme,
      Use: Use(agent),
      Switch: Switch(agent),
      Add: Add(agent),
      Remove: Remove(agent),
      Set: Set(agent),
      Unset: Unset(agent),
    }),
    [Theme, Use, Switch, Add, Remove, Set, Unset]
  );

  useEffect(
    useCallback(() => {
      Log.DevTools = DevTools;
    }, [DevTools]),
    [DevTools]
  );

  useEffect(
    useCallback(() => {
      if (Theme === "dark") {
        document.body.style.backgroundColor = "black";
      } else {
        document.body.style.backgroundColor = "white";
      }
    }, [Theme]),
    [Theme]
  );

  return (
    <ThemeProvider
      theme={{
        Name: Theme,
        Themes,
        Use,
        Switch,
        Add,
        Remove,
        Set,
        Unset,
        DevTools,
        ToggleDevTools,
        History: Log.history,
        ClearHistory: function() {
          Log.clear();
        },
        For,
        ...Themes,
      }}
    >
      {children}
    </ThemeProvider>
  );
});
