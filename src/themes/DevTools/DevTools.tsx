import React, { useState, useEffect, createContext, useContext } from "react";
import { Load, Save } from "../helpers";
import { ThemeContext } from "styled-components";

import { Container } from "./styles";

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

  const set = (state: string, value: boolean) => () => {
    const State = { ...ConfigState, [state]: value };
    SetConfigState(State);
  };

  const toggle = (state: string) => () => {
    const State = { ...ConfigState, [state]: !ConfigState[state] };
    SetConfigState(State);
  };

  const toggleContextValue = (
    name: string,
    property: string,
    value?: boolean
  ) => () => {
    const State = {
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
    };

    SetConfigState(State);
  };

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
  }, [Themes]);

  if (ConfigState) {
    Save(LS, ConfigState);
  }

  console.log(ConfigState.contexts);

  return (
    <Config.Provider
      value={{ ...ConfigState, set, toggle, toggleContextValue }}
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
    </Config.Provider>
  );
}
