import React, { useState, createContext, useContext } from "react";
import { Load, Save } from "../helpers";
import { ThemeContext } from "styled-components";
import { themes } from "../json";

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
  const { Name, DevTools, ToggleDevTools, For } = useContext(ThemeContext);
  const Theme = For("DevTools");
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

    Save(LS, State);
  };

  const toggle = (state: string) => () => {
    const State = { ...ConfigState, [state]: !ConfigState[state] };
    SetConfigState(State);

    Save(LS, State);
  };

  return (
    <Config.Provider value={{ ...Config, set, toggle }}>
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
