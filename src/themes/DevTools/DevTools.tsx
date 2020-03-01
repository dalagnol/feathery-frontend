import React, { useState, useEffect, createContext, useContext } from "react";
import { Load, Save } from "../helpers";
import { ThemeContext } from "styled-components";

import { Container, Code } from "./styles";

import Header from "./Header/Header";
import Contexts from "./Contexts/Contexts";
import History from "./History/History";

const LS = "theme_devtools_state";

export const Config = createContext(
  Load(LS, {
    addingTheme: false,
    history: true,
    contexts: {},
    filter: {
      SYSTEM: true,
      INFO: false,
      ERROR: false,
      WARNING: false,
      FILTER: false,
    },
    code: "",
  })
);

export function DevTools() {
  const { DevTools, Themes } = useContext(ThemeContext);
  const [ConfigState, SetConfigState] = useState(
    Load(LS, {
      addingTheme: false,
      history: true,
      contexts: {},
      filter: {
        SYSTEM: true,
        INFO: false,
        ERROR: false,
        WARNING: false,
        FILTER: false,
      },
      code: "",
    })
  );

  const set = (state: string, value: boolean | string) => () =>
    SetConfigState({ ...ConfigState, [state]: value });

  const toggle = (state: string) => () =>
    SetConfigState({ ...ConfigState, [state]: !ConfigState[state] });

  const toggleContextValue = (
    name: string,
    property: string,
    value?: boolean
  ) => () =>
    SetConfigState({
      ...ConfigState,
      contexts: {
        ...ConfigState.contexts,
        [name]: {
          ...ConfigState.contexts[name],
          [property]:
            typeof value !== "undefined"
              ? value
              : !ConfigState.contexts[name][property],
        },
      },
    });

  const toggleFilter = (name: string) => () =>
    SetConfigState({
      ...ConfigState,
      filter: { ...ConfigState.filter, [name]: !ConfigState.filter[name] },
    });

  useEffect(() => {
    const newState: any = {};

    Object.keys(Themes).forEach((context: string) => {
      if (ConfigState.contexts[context]) {
        newState[context] = { ...ConfigState.contexts[context] };
      } else {
        newState[context] = {
          open: false,
          addingProperty: false,
        };
      }
    });

    SetConfigState({ ...ConfigState, contexts: newState });
    // eslint-disable-next-line
  }, [Themes]);

  if (ConfigState) {
    Save(LS, ConfigState);
  }

  return (
    <Config.Provider
      value={{ ...ConfigState, set, toggle, toggleContextValue, toggleFilter }}
    >
      <Container open={DevTools}>
        <Header />
        {DevTools && (
          <>
            <div>
              <Contexts history={ConfigState.history} />
            </div>

            <div>
              <History open={ConfigState.history} toggle={toggle("history")} />
            </div>
          </>
        )}
      </Container>

      {ConfigState.code && (
        <Code onDoubleClick={set("code", "")}>
          <p>{ConfigState.code}</p>
        </Code>
      )}
    </Config.Provider>
  );
}
