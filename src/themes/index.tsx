import React, { useState } from "react";
import { palette } from "./Theme";
import { ThemeProvider } from "styled-components";
import { observer } from "mobx-react";
import { C } from "./helpers";
import Log from "./Log";

import { themes } from "./json";

import { Host } from "./styles";

export const Themed = observer(({ children }: any) => {
  const [Themes, setThemes]: any = useState({});
  const [DevTools, SetDevTools] = useState(false);
  const [Theme, setTheme] = useState(
    localStorage.getItem("theme") || themes[0]
  );

  const Use = (agent = "") => (name: palette) => {
    if (themes.includes(name)) {
      setTheme(name);
      Log.system(agent, `Set theme to ${name}`);
    }
  };

  const Switch = (agent = "") => () => {
    const current = Themes.indexOf(Theme);
    const name =
      current === Themes.length - 1 ? Themes[0] : Themes[current + 1];
    setTheme(name);
    Log.system(agent, `Switched theme to ${current}`);
  };

  const Add = (agent = "") => (name: string, config: any = {}) => {
    if (!config[Theme]) {
      Log.error(C(name), "Missing current palette");
    }

    setThemes((currentThemes: any) => ({
      ...currentThemes,
      [name]: config[Theme],
    }));

    Log.info(agent, `Added context "${name}"`);
  };

  const Remove = (agent = "") => (name: string) => {
    const newState = { ...Themes };
    delete newState[name];
    setThemes(newState);

    Log.info(agent, `Removed context "${name}`);
  };

  const Set = (agent = "") => (
    theme: string,
    property: string,
    value: string
  ) => {
    setThemes({ ...Themes, [theme]: { ...Themes[theme], [property]: value } });

    Log.system(agent, `Set ${property} to "${value}" in ${C(theme)}`);
  };

  const For = (agent: string) => ({
    Use: Use(agent),
    Switch: Switch(agent),
    Add: Add(agent),
    Remove: Remove(agent),
    Set: Set(agent),
  });

  return (
    <Host DevTools={DevTools}>
      <ThemeProvider
        theme={{
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
